import React from "react";
import styles from "../styles/comp/GlobeVideoWrapper.module.css";

const GlobeVideoWrapper: React.FC = () => {
  return (
    <div className={styles.videoContainer}>
      <div className={styles.GlobeVideo}>
        <video style={{ opacity: 0.5 }} width="100%" autoPlay muted loop preload="auto" playsInline >
          <source src="/assets/video/globe_compressed.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.welcomeTextContainer}>
        <div className={styles.welcomeText + " " + styles.text1}>Welcome</div>
        <div className={styles.welcomeText + " " + styles.text2}>欢迎</div>
        <div className={styles.welcomeText + " " + styles.text3}>مرحبًا</div>
        <div className={styles.welcomeText + " " + styles.text4}>Bienvenido</div>
        <div className={styles.welcomeText + " " + styles.text5}>வணக்கம்</div>
        <div className={styles.welcomeText + " " + styles.text6}>स्वागत</div>
        <div className={styles.welcomeText + " " + styles.text7}>ಸ್ವಾಗತ</div>
        <div className={styles.welcomeText + " " + styles.text8}>സ്വാഗതം</div>
      </div>
    </div>
  );
};

export default GlobeVideoWrapper;