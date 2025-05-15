import React from "react";
import styles from "./LandingPage.module.scss";
import Navbar from "../../components/Navbar/Navbar";

const LandingPage = () => {
  return (
    <div className={`${styles.container}`}>
      <Navbar />
      Tax Notice Reply Generator
    </div>
  );
};

export default LandingPage;
