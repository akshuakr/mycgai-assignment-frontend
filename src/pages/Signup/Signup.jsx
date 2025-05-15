import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useToast } from "../../utils/ToastProvider";
import axiosInstance from "../../services/axiosInstance/mainInstance";

const Signup = () => {
  const showToast = useToast();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/auth/signup", {
        name,
        username,
        password,
      });

      const { data, message } = res.data;

      if (data.isRegistrationSuccessful) {
        showToast({ message: "Sign Up successful!", variant: "success" });
        navigate("/login");
      }
    } catch (error) {
      const errMsg = error?.response?.data?.message || "Server error. Try again later.";
      showToast({ message: errMsg, variant: "error" });
    }
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={styles.input}
        />
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
