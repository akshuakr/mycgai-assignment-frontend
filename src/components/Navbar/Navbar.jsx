import React from "react";
import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";
import { useToast } from "../../utils/ToastProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const showToast = useToast();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleLogout = () => {
    dispatch(logout());
    showToast({ message: "Logout Successful!", variant: "info" });
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        MyCG.AI
      </div>
      <div className={styles.navList}>
        {user ? (
          <>
            <div className={styles.name}>
              Hi <span style={{ fontWeight: "600" }}>{user.name}</span> !
            </div>
            <div className={styles.logOutButton} onClick={handleLogout}>
              Log Out
            </div>
          </>
        ) : (
          <>
            <div className={styles.navItemButton} onClick={() => navigate("/login")}>
              Log In
            </div>
            <div className={styles.signUpButton} onClick={() => navigate("/signup")}>
              Sign Up
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
