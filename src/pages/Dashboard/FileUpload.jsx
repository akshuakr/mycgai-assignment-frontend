import React, { useState, useEffect } from "react";
import styles from "./FileUpload.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useToast } from "../../utils/ToastProvider";
import axiosInstance from "../../services/axiosInstance/mainInstance";

const FileUpload = () => {
  const showToast = useToast();
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please select a file");
      showToast({ message: "Please select a file", variant: "warning" });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axiosInstance.post("/user/upload-file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage(response.data.message);
      showToast({ message: response.data.message, variant: "success" });
      // fetchFiles();
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error uploading file";
      setMessage(errorMessage);
      showToast({ message: errorMessage, variant: "warning" });
    }
  };

  const fetchFiles = async () => {
    try {
      const response = await axiosInstance.get("/user/list-files");
      setFiles(response.data.data);
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Error fetching files";
      setMessage(errorMessage);
      showToast({ message: errorMessage, variant: "warning" });
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.uploadContainer}>
        <h2 className={styles.title}>Upload File</h2>
        <form onSubmit={handleUpload} className={styles.uploadForm}>
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>
            Upload
          </button>
        </form>
        {message && <p className={styles.error}>{message}</p>}

        <h2 className={styles.title}>Uploaded Files</h2>
        {files.length > 0 ? (
          <ul className={styles.fileList}>
            {files.map((file) => (
              <li key={file.fileName} className={styles.fileItem}>
                <a
                  href={file.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.fileLink}
                >
                  {file.originalName || file.fileName.split("/")[1]} ({file.fileType})
                </a>
                <span className={styles.fileDate}>
                  (Uploaded: {new Date(file.lastModified).toLocaleDateString()})
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noFiles}>No files uploaded yet.</p>
        )}
      </div>
    </div>
  );
};

export default FileUpload;