import React from "react";
import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        MyCG.AI
      </div>
      <div className={styles.navList}>
        <div className={styles.navItemButton} onClick={() => navigate("/login")}>
          Log In
        </div>
        <div className={styles.signUpButton} onClick={() => navigate("/signup")}>
          Sign Up
        </div>
      </div>
    </div>
  );
};

export default Navbar;
