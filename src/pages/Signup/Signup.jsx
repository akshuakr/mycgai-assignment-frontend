import React from "react";
import styles from "./Signup.module.scss";
import Navbar from "../../components/Navbar/Navbar";

const Signup = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div>This is Signup Page</div>
    </div>
  );
};

export default Signup;
