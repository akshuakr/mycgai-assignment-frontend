import React from "react";
import styles from "./Login.module.scss";
import Navbar from "../../components/Navbar/Navbar";

const Login = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div>This is Login Page</div>
    </div>
  );
};

export default Login;
