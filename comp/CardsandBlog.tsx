import React from "react";
import Screen from "./Screen";
import styles from "../styles/comp/CardsandBlog.module.css";
import DemoCard from "./DemoCard";

const CardsandBlog = ({
  CardHeader,
  CardBlogHeader,
  CardInformation,
  myCustomCards,
}: any) => {
  return (
    <div className={styles.CardsandBlogMain}>
      <Screen>
        {CardInformation && (
          <>
            <div className={styles.CardsTitleComp}>
              <h2>{CardHeader?.title}</h2>
              <p>{CardHeader?.description}</p>
            </div>
            <div className={styles.CardsMainComp}>
              {CardInformation.map((data) => {
                return (
                  <div className={styles.CardComp}>
                    {data.Icon && (
                      <img
                        src={data.Icon}
                        alt="check"
                        className={styles.CardIcons}
                      />
                    )}
                    <h3>{data.heading}</h3>
                    <p className={styles.CardDesc}>{data.description}</p>
                    <a href={data.linkUrl} className={styles.learnMoreButton}>
                      {data.linkName}
                      <img
                        src="/svg/arrow.svg"
                        alt="Arrow Icon"
                        className={styles.arrowIcon}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {myCustomCards && (
          <>
            <div className={styles.CardsBlogComp}>
              <h2>{CardBlogHeader.title}</h2>
              <p>{CardBlogHeader.description}</p>
            </div>
            <div className={styles.BlogCompMain}>
              {myCustomCards.map((card, index) => (
                <div key={index} className={styles.card}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardContent}>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <div className={styles.cardButtons}>
                      <a
                        href={card.learnMoreLink}
                        className={styles.learnMoreButton}
                      >
                        Learn More
                        <img
                          src="/svg/arrow.svg"
                          alt="Arrow Icon"
                          className={styles.arrowIcon}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </Screen>
    </div>
  );
};

export default CardsandBlog;
