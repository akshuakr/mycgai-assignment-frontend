import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Dashboard.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import {
  DocumentIconPurpule,
  CheckIcon,
  ClockIcon,
  UploadPurpuleIcon,
  UploadDocumentIconPurple,
  CopyIcon,
  DownloadIcon,
} from "./DashboardIcons";
import axiosInstance from "../../services/axiosInstance/mainInstance";
import { setUser } from "../../store/userSlice";
import { useToast } from "../../utils/ToastProvider";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const files = user?.files || [];
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileItem, setSelectedFileItem] = useState(null);
  const [summaryText, setSummaryText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const showToast = useToast();

  useEffect(() => {
    if (selectedFileItem && selectedFileItem.status === "ready") {
      setSummaryText(selectedFileItem.summary || "No summary available");
      setIsGenerating(false);
    } else {
      setSummaryText("");
    }
  }, [selectedFileItem]);

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsGenerating(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const uploadResponse = await axiosInstance.post("/user/upload-file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const userResponse = await axiosInstance.get("/user/user-details");
      dispatch(setUser({ user: userResponse.data.data }));

      const newFile = userResponse.data.data.files.find(
        (file) => file.originalName === selectedFile.name
      );
      if (newFile) {
        setSelectedFileItem(newFile);
      }

      setSelectedFile(null);
      showToast({ message: "File uploaded successfully!", variant: "success" });
    } catch (error) {
      console.error("Upload error:", error);
      setIsGenerating(false);
      showToast({ message: "Failed to upload file.", variant: "error" });
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.dashboard}>
        <div className={styles.subContainer}>
          <div className={styles.left}>
            <UploadComponent onFileSelect={setSelectedFile} />
            {selectedFile && (
              <GenerateButton fileName={selectedFile.name} onGenerate={handleUpload} />
            )}
            <PreviousNoticesComponent files={files} onSelectFile={setSelectedFileItem} />
          </div>
          <div className={styles.right}>
            <div className={styles.rightTop}>
              <div className={styles.rightTopLeft}>AI-Generated Reply</div>
              <div className={styles.rightTopRight}>
                <div
                  className={styles.rightTopRightButtons}
                  onClick={() => navigator.clipboard.writeText(summaryText)}
                >
                  <CopyIcon />
                  Copy Text
                </div>
                <div
                  className={styles.rightTopRightButtons}
                  onClick={() => {
                    const blob = new Blob([summaryText], { type: "text/plain" });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.href = url;
                    link.download = "summary.txt";
                    link.click();
                    URL.revokeObjectURL(url);
                  }}
                >
                  <DownloadIcon />
                  Download Reply
                </div>
              </div>
            </div>
            <div className={styles.rightBottom}>
              <div className={styles.rightBottomLeft}>
                <div className={styles.rightBottomLeftReplyTextTitle}>Reply Text</div>
                <div className={styles.rightBottomLeftGeneratedTextContainer}>
                  {isGenerating ? (
                    <div>Generating...</div>
                  ) : selectedFileItem ? (
                    selectedFileItem.status === "ready" ? (
                      <div className={styles.rightBottomLeftGeneratedText}>{summaryText}</div>
                    ) : (
                      <div>Generating...</div>
                    )
                  ) : (
                    <div>No file selected</div>
                  )}
                </div>
              </div>
              <div className={styles.rightBottomRight}>
                <div className={styles.rightTopRightText}>PDF Preview</div>
                {selectedFileItem ? (
                  <div className={styles.displayPdf}>
                    <iframe
                      src={selectedFileItem.fileUrl}
                      className={styles.iframeClass}
                      title="PDF Preview"
                    />
                  </div>
                ) : (
                  <div>No file selected</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UploadComponent = ({ onFileSelect }) => {
  return (
    <>
      <h2 className={styles.typeOneHeading}>Upload Tax Notice</h2>
      <div className={styles.uploadContainer}>
        <UploadPurpuleIcon />
        <div className={styles.typeOneDesc}>Drag and drop your tax notice here</div>
        <div className={styles.typeTwoDesc}>Supported format: PDF</div>
        <div>
          <input
            type="file"
            id="file-input"
            accept="application/pdf"
            style={{ display: "none" }}
            onChange={(e) => onFileSelect(e.target.files[0])}
          />
          <label htmlFor="file-input">
            <div className={styles.uploadButton}>
              <UploadDocumentIconPurple />
              Browse File
            </div>
          </label>
        </div>
      </div>
    </>
  );
};

const PreviousNoticesComponent = ({ files, onSelectFile }) => {
  const sortedFiles = [...files].sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
  const truncateFileName = (name, maxLength = 20) => {
    if (name.length <= maxLength) return name;
    return name.slice(0, maxLength) + "...";
  };

  return (
    <>
      <h2 style={{ marginTop: "20px" }} className={styles.typeOneHeading}>
        Previous Notices
      </h2>
      <div className={styles.previousNoticesContainer}>
        <ul className={styles.unorderdList}>
          {sortedFiles.map((file) => (
            <li key={file.fileId} className={styles.singleList} onClick={() => onSelectFile(file)}>
              <div className={styles.listLeft}>
                <DocumentIconPurpule />
                <div className={styles.listCenter}>
                  <div className={styles.listOriginalName}>
                    {truncateFileName(file.originalName)}
                  </div>
                  <div className={styles.listDate}>
                    {new Date(file.uploadedAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div
                className={
                  file.status === "ready" ? styles.listStatusDone : styles.listStatusProcessing
                }
              >
                {file.status === "ready" ? <CheckIcon /> : <ClockIcon />}
                {file.status === "ready" ? "Reply Ready" : "Processing..."}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const GenerateButton = ({ fileName, onGenerate }) => {
  const truncateFileName = (name, maxLength = 18) => {
    if (name.length <= maxLength) return name;
    return name.slice(0, maxLength) + "...";
  };
  return (
    <div className={styles.generateButtonContainer}>
      <div className={styles.generateButtonContainerLeft}>
        <div className={styles.generateButtonContainerCheckMark}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="#41ba6f"
            viewBox="0 0 16 16"
          >
            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 0 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
            <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
          </svg>
        </div>
        <div className={styles.listOriginalName}>{truncateFileName(fileName)}</div>
      </div>
      <div className={styles.generateButtonContainerButton} onClick={onGenerate}>
        Generate Reply
      </div>
    </div>
  );
};

export default Dashboard;
