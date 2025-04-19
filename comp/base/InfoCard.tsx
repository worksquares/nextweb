import React from "react";
import styles from "../../styles/comp/core/InfoCard.module.css";
import Images from "./Images";

export interface InfoCardProps {
  title: string;
  information: string;
  subtitle?: string;
}

const InfoCard = ({ title, information, subtitle }: InfoCardProps) => {
  return (
    // <div className={styles.CardContainerCardsNew}>
    <div className={styles.CardContainerCards}>
      <p className={styles.CardContainerCardsSubtitle}>{subtitle}</p>
      <h3>{title}</h3>
      <p>{information}</p>
      <Images className={styles.arrowimgresponsive} src="/assets/icons8-right-arrow.webp" alt="hfyhd" layout="intrinsic" width="20%" height="20px"></Images>
      {/* </div> */}
    </div>
  );
};

export default InfoCard;
