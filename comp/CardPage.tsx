import React from "react";
import Images from "next/image";
import styles from "../styles/comp/CardComponent.module.css";
import Screen from "../comp/Screen";


const CardComponent = ({ cards }) => {
  return (
    <div className={styles.CardContainer}>
      <Screen>
        <div className={styles.CardInfo}>
          {cards.map((card, index) => (
            <div className={styles.CardBox} key={index}>
              <span className={styles.CardImgBox}>
                <Images
                  layout="intrinsic"
                  src={card.imageSrc}
                  width="60"
                  height="60"
                  alt={card.imageAlt}
                  className={styles.CardImg}
                />
              </span>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </Screen>
    </div>
  );
};

export default CardComponent;
