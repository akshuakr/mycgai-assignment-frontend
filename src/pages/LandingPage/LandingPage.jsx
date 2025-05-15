import React from "react";
import styles from "./LandingPage.module.scss"
import Navbar from "../../components/Navbar/Navbar";

const LandingPage = ()=>{
    return (
        <div className={`${styles.container}`}>
            <Navbar/>
        </div>
    )
}

export default LandingPage;