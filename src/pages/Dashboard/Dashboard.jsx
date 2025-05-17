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
                  <iframe src={pdfUrl} className={styles.iframeClass} title="PDF Preview" />
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

const DocumentIconPurpule = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="#634aff"
      viewBox="0 0 16 16"
    >
      <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
      <path d="M4.603 14.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.7 11.7 0 0 0-1.997.406 11.3 11.3 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.8.8 0 0 1-.58.029m1.379-1.901q-.25.115-.459.238c-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361q.016.032.026.044l.035-.012c.137-.056.355-.235.635-.572a8 8 0 0 0 .45-.606m1.64-1.33a13 13 0 0 1 1.01-.193 12 12 0 0 1-.51-.858 21 21 0 0 1-.5 1.05zm2.446.45q.226.245.435.41c.24.19.407.253.498.256a.1.1 0 0 0 .07-.015.3.3 0 0 0 .094-.125.44.44 0 0 0 .059-.2.1.1 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a4 4 0 0 0-.612-.053zM8.078 7.8a7 7 0 0 0 .2-.828q.046-.282.038-.465a.6.6 0 0 0-.032-.198.5.5 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822q.036.167.09.346z" />
    </svg>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-check-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
      <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
    </svg>
  );
};

const ClockIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-clock"
      viewBox="0 0 16 16"
    >
      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
    </svg>
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

const CopyIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#374151"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"
      />
    </svg>
  );
};

const DownloadIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="#374151"
      viewBox="0 0 16 16"
    >
      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
    </svg>
  );
};

const sampleText = `Date: May 16, 2023

Internal Revenue Service
Austin, TX 73301

Re: Response to Notice CP2000 for Tax Year 2022
Taxpayer: John Doe
SSN: XXX-XX-1234

Dear Sir or Madam,

I am writing in response to your Notice CP2000 dated April 30, 2023, in which you propose changes to my 2022 federal income tax return.

After careful review of the notice and my tax records, I respectfully disagree with the proposed adjustments for the following reasons:

1. The income reported from Goldman Sachs (EIN: XX-XXXXXXX) in the amount of $5,250 was already included in my Schedule C, line 1, as part of my self-employment income.

2. The reported dividend from Vanguard Investments (EIN: XX-XXXXXXX) of $750 was for a qualified dividend reinvestment in a tax-advantaged retirement account (IRA), and thus is not subject to taxation for the tax year 2022.

I have enclosed the following documentation to support my position:
- Copy of Schedule C from my 2022 tax return showing the inclusion of the Goldman Sachs payment
- Statement from my Vanguard IRA showing the dividend reinvestment transaction
- Form 1099-DIV from Vanguard indicating the qualified dividend payment to my IRA

Based on the enclosed information, I believe no additional tax is due. I request that you please adjust your records to reflect this information and confirm that this matter has been closed.

If you need any additional information, please don't hesitate to contact me at (555) 123-4567 or via email at john.doe@email.com.

Sincerely,

John Doe`;

const pdfUrl = `https://lexarocks.s3.ap-south-1.amazonaws.com/68260b06fcb7e561920b4978/136754c7-d154-4d3f-b66d-6df398880650-1747372293535.pdf`;

export default Dashboard;
