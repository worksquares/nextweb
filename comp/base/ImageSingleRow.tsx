import React from "react";
import styles from "../../styles/comp/core/ImageSingleRow.module.css";
import Image from "next/image";
import Link from "next/link";

export interface SingleRowProps {
  image: string;
  category: string; 
  heading: string;
  description: string;
  link: string;
}

const ImageSingleRow = ({ image, category, heading, description, link }: SingleRowProps) => {
  return (
    <div>
      <div className={styles.CardContainerNew}>
        <Link legacyBehavior href={link}>
          <div className={`${styles.Card1} ${styles.cardNew}`}>
            <div className={styles.ImageHoverContainer}>
              <Image className={styles.Imagehoverzoom} src={image} width="900" height="200" alt="ResourcesBlogImage" unoptimized={true} />
            </div>
            <div className={styles.CardInfo}>
              <p className={styles.CardInfoPara}>{category}</p>
              <h3>{heading}</h3>
              <p>{description}</p>
              <a href={link}>Read the Article</a>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ImageSingleRow;
