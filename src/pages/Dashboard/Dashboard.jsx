import React from "react";
import styles from "./Dashboard.module.scss";
import Navbar from "../../components/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.dashboard}>
        <div className={styles.subContainer}>
          <div className={styles.left}>
            <UploadComponent />
          </div>
          <div className={styles.right}>Hi</div>
        </div>
      </div>
    </div>
  );
};

const UploadComponent = () => {
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

const UploadPurpuleIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="#634aff"
      // class="bi bi-upload"
      viewBox="0 0 16 16"
    >
      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
      <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
    </svg>
  );
};

const UploadDocumentIconPurple = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#634aff"
      class="bi bi-file-earmark-arrow-up"
      viewBox="0 0 16 16"
    >
      <path d="M8.5 11.5a.5.5 0 0 1-1 0V7.707L6.354 8.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 7.707z" />
      <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
    </svg>
  );
};

export default Dashboard;
