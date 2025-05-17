import React from "react";
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

import { samplePdfUrl, sampleText } from "./DashboardConstants";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.dashboard}>
        <div className={styles.subContainer}>
          <div className={styles.left}>
            <UploadComponent />
            {/* <GenerateButton /> */}
            <PreviousNoticesComponent />
          </div>
          <div className={styles.right}>
            <div className={styles.rightTop}>
              <div className={styles.rightTopLeft}>AI-Generated Reply</div>
              <div className={styles.rightTopRight}>
                <div className={styles.rightTopRightButtons}>
                  {" "}
                  <CopyIcon />
                  Copy Text
                </div>
                <div className={styles.rightTopRightButtons}>
                  {" "}
                  <DownloadIcon />
                  Download Reply
                </div>
              </div>
            </div>

            <div className={styles.rightBottom}>
              <div className={styles.rightBottomLeft}>
                <div className={styles.rightBottomLeftReplyTextTitle}>Reply Text</div>
                <div className={styles.rightBottomLeftGeneratedTextContainer}>
                  <div className={styles.rightBottomLeftGeneratedText}>{sampleText}</div>
                </div>
              </div>
              <div className={styles.rightBottomRight}>
                <div className={styles.rightTopRightText}>PDF Preview</div>
                <div className={styles.displayPdf}>
                  <iframe src={samplePdfUrl} className={styles.iframeClass} title="PDF Preview" />
                </div>
              </div>
            </div>
          </div>
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
          <input type="file" id="file-input" accept="application/pdf" style={{ display: "none" }} />
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

const PreviousNoticesComponent = () => {
  return (
    <>
      <h2 style={{ marginTop: "20px" }} className={styles.typeOneHeading}>
        Previous Notices
      </h2>
      <div className={styles.previousNoticesContainer}>
        <ul className={styles.unorderdList}>
          <li className={styles.singleList}>
            <div className={styles.listLeft}>
              <DocumentIconPurpule />
              <div className={styles.listCenter}>
                <div className={styles.listOriginalName}>akshansh_resume1.pdf</div>
                <div className={styles.listDate}>May 10, 2025</div>
              </div>
            </div>
            <div className={styles.listStatusDone}>
              <CheckIcon />
              Reply Ready
            </div>
          </li>
          <li className={styles.singleList}>
            <div className={styles.listLeft}>
              <DocumentIconPurpule />
              <div className={styles.listCenter}>
                <div className={styles.listOriginalName}>akshansh_resume2.pdf</div>
                <div className={styles.listDate}>May 11, 2025</div>
              </div>
            </div>
            <div className={styles.listStatusProcessing}>
              <ClockIcon />
              Processing...
            </div>
          </li>
          <li className={styles.singleList}>
            <div className={styles.listLeft}>
              <DocumentIconPurpule />
              <div className={styles.listCenter}>
                <div className={styles.listOriginalName}>akshansh_resume3.pdf</div>
                <div className={styles.listDate}>May 12, 2025</div>
              </div>
            </div>
            <div className={styles.listStatusDone}>
              <CheckIcon />
              Reply Ready
            </div>
          </li>
          <li className={styles.singleList}>
            <div className={styles.listLeft}>
              <DocumentIconPurpule />
              <div className={styles.listCenter}>
                <div className={styles.listOriginalName}>akshansh_resume4.pdf</div>
                <div className={styles.listDate}>May 13, 2025</div>
              </div>
            </div>
            <div className={styles.listStatusProcessing}>
              <ClockIcon />
              Processing...
            </div>
          </li>
          <li className={styles.singleList}>
            <div className={styles.listLeft}>
              <DocumentIconPurpule />
              <div className={styles.listCenter}>
                <div className={styles.listOriginalName}>akshansh_resume5.pdf</div>
                <div className={styles.listDate}>May 14, 2025</div>
              </div>
            </div>
            <div className={styles.listStatusDone}>
              <CheckIcon />
              Reply Ready
            </div>
          </li>
          <li className={styles.singleList}>
            <div className={styles.listLeft}>
              <DocumentIconPurpule />
              <div className={styles.listCenter}>
                <div className={styles.listOriginalName}>akshansh_resume6.pdf</div>
                <div className={styles.listDate}>May 15, 2025</div>
              </div>
            </div>
            <div className={styles.listStatusProcessing}>
              <ClockIcon />
              Processing...
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

const GenerateButton = () => {
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
            <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
            <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
          </svg>
        </div>
        <div className={styles.listOriginalName}>one_two.pdf</div>
      </div>
      <div className={styles.generateButtonContainerButton}>Generate Reply</div>
    </div>
  );
};

export default Dashboard;
