import React from "react";
import styles from "../styles/comp/HomePanel.module.css";
import Image from "next/image";
import Screen from "../comp/Screen";

const HomePanel = ({ imageUrl, title, description }) => {
  return (
    <Screen>
      <div className={styles.imageContainer}>
        <div style={{ width: "100%" }}>
          <Image
            src={imageUrl}
            layout="intrinsic"
            width="2000"
            height="3500"
            alt="Banner Image"
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </Screen>
  );
};

export default HomePanel;
