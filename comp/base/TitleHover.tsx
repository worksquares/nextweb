import React from "react";
import styles from "../../styles/comp/core/TitleHover.module.css";
import Images from "./Images";

export interface TitleHoverProps {
  icon: string;
  titlelink?: string;
  link?: string;
}

const TitleHover = ({ icon, titlelink, link }: TitleHoverProps) => {
  return (
    <div className={styles.CardfooteritemsNew}>
      <div className={styles.Cardfooteritems}>
        <Images key={titlelink} alt="sds" layout="intrinsic" width="50" height="50" className={styles.imgresponsiveChange} src={icon}></Images>
        {/* <p className={styles.LineAnimate}></p> */}
        <a href={`/explore${link}`} className={styles.LineAnimate}>
          {titlelink}
        </a>
      </div>
    </div>
  );
};

export default TitleHover;
