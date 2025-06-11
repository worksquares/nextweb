import Images from "next/image";
import Screen from "../comp/Screen";
import styles from "../styles/comp/CardComponent.module.css";


const CardComponent = ({ cards }) => {
  return (
    <div className={styles.CardContainer}>
      <Screen>
        <div className={styles.CardInfo}>
          {cards.map((card, index) => (
            <div className={styles.CardBox} key={index}>
              <span className={styles.CardImgBox}>
                <Images
                  priority={true}
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
