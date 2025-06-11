import React from "react";
import styles from "../../styles/comp/core/ImageTitle.module.css";
import Images from "./Images";

export interface ImgTitleProps {
  image: string;
  title: string;
  sentence: string;
}

const ImageTitle = ({ image, title, sentence }: ImgTitleProps) => {
  return (
    <div className={styles.ImageTitleMainContainer}>
      <div className={styles.FeaturesUIImageContainer}>
        <div className={styles.ImgContainer}>
          <Images width="600px" height="300px" alt="ProcessImage" className={styles.imgresponsive} src={image}></Images>
          <h2>{title}</h2>
          <p>{sentence}</p>
        </div>
      </div>
      {/* ---------------------------------------------------- */}
      <div className={styles.FeaturesUIReImageContainer}>
        <div className={styles.ReImgContainer}>
          <Images className={styles.imgresponsive} src={image} width="600px" height="300px" alt="ProcessImage"></Images>
          <h2>{title}</h2>
          <p>{sentence}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageTitle;
