import React, { useEffect, useState } from "react";
import styles from "../styles/comp/DemoCard.module.css";
import Screen from "./Screen";
import { useRouter } from "next/router";
import Image from "next/image";
import CustomImage from "../@/components/customImage";

const DemoCard = ({ showButtons, cardsData }) => {
  const [videoShow, setVideoShow] = useState(false);

  const [windowWidth, setWindowWidth] = useState<number | null | any>(null);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  const popupVideo = (e) => {
    const selectedCategory = "Hero_video";
    router.push(`${e}?id=${selectedCategory}`);
  };

  const videoClose = () => {
    setVideoShow(false);
  };

  const cards = cardsData?.length > 0 ? cardsData : cardsData;

  return (
    <section className={styles.section}>
      <Screen>
        <h2 className={styles.heading}>
          AI Platform for Driving Business Transformation
        </h2>
        <div className={styles.cardContainer}>
          {videoShow && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                width: "60%",
                position: "fixed",
                left: "27%",
                top: "20%",
                zIndex: "1",
              }}
            >
              <iframe
                width="650px"
                height="380px"
                src="https://www.youtube.com/embed/fdbln7j6XNw"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Demo Video"
              />
              <Image
                src="/assets/IconClose.webp"
                alt="Close Icon"
                onClick={videoClose}
                style={{
                  width: "25px",
                  marginLeft: "5px",
                  cursor: "pointer",
                }}
              />
            </div>
          )}
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <CustomImage
                type="card"
                src={card.image}
                alt={card.title}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className={styles.cardButtons}>
                  {showButtons && (
                    <a
                      href={card.learnMoreLink ? card.learnMoreLink : "#"}
                      className={styles.demoButton}
                      onClick={(e) => {
                        e.preventDefault(); // Prevents default link behavior
                        popupVideo(card.learnMoreLink); // Opens popup
                      }}
                    >
                      <Image
                        src="/svg/play.svg"
                        alt="Play Icon"
                        className={styles.playIcon}
                        width={20}
                        height={20}
                      />
                      <h5>Watch Demo</h5>
                    </a>
                  )}
                  <a
                    href={card.learnMoreLink}
                    className={styles.learnMoreButton}
                  >
                    Learn More
                    <Image
                      src="/svg/arrow.svg"
                      alt="Arrow Icon"
                      className={styles.arrowIcon}
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Screen>
    </section>
  );
};

export default DemoCard;
