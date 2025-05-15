import React from "react";
import styles from "./Dashboard.module.scss";
import Navbar from "../../components/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div>This is dashboard</div>
    </div>
  );
};

export default Dashboard;
