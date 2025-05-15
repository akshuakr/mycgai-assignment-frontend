import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useToast } from "../../utils/ToastProvider";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/userSlice";

import axiosInstance from "../../services/axiosInstance/mainInstance";

const Login = () => {
  const showToast = useToast();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserDetailsAndRedirect = async () => {
    try {
      const userDetailsResponse = await axiosInstance.get("/user/user-details");
      const user = userDetailsResponse.data.data;
      dispatch(setUser({ user }));

      //   const from = location.state?.from || "/dashboard";
      const from = "/dashboard";
      navigate(from, { replace: true });
    } catch (userDetailsError) {
      console.error(
        "User Details Fetch Error:",
        userDetailsError.response?.data || userDetailsError.message
      );
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/auth/login", { username, password });
      const { message, isLogInSuccessful, token } = response.data.data;

      if (isLogInSuccessful) {
        localStorage.setItem("token", token);
        showToast({ message: "Login Successful!", variant: "success" });
        await handleUserDetailsAndRedirect();
      } else {
        showToast({ message: message || "Invalid username or password", variant: "warning" });
      }
    } catch (error) {
      //   console.log("Custome ERROR", error);
      showToast({ message: "LogIn Error", variant: "warning" });
    }
  };
  return (
    <div className={styles.container}>
      <Navbar />
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
