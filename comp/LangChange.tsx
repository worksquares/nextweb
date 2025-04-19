import React from "react";
import styles from "../styles/LangChange.module.css";

const LangChange = () => {
  return (
    <div className={styles.ResponsiveFooterDetails}>
      <div className={styles.FooterDetails1}>
        <div className={styles.ResponsiveFooterDetails1}>
          <p>Request info or schedule a demo</p>
          <div className={styles.ResponsiveFooterDetails2}>
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div className={styles.FooterDetails2}>
        <select name="language" id="language" className={styles.LangSelect} defaultValue="English">
          <option value="English" className="option">
            English
          </option>
          <option value="English(UK)">English(UK)</option>
          <option value="Nederlands">Nederlands</option>
          <option value="Français">Français</option>
          <option value="Deutsch">Deutsch</option>
          <option value="Italiano">Italiano</option>
          <option value="日本語">日本語</option>
          <option value="한국어">한국어</option>
          <option value="Português">Português</option>
          <option value="Español">Español</option>
        </select>
      </div>
    </div>
  );
};

export default LangChange;
