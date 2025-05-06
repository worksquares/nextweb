import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/comp/AiStudioSlider.module.css"; // Or create a new CSS module
import CustomImage from "./CustomImage";
import redVector from "../public/svg/redvector.svg";
import Image from "next/image";

interface Card {
  image: string;
  title?: string;
  description: string;
  links?: { text: string; href: string }[];
  moreText?: string;
  moreLink?: string;
}

interface AiStudioProps {
  cards: Card[];
  autoplay?: boolean;
  speed?: number;
}

const AiStudioSlider = ({ cards, autoplay = true, speed = 2000 }: AiStudioProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "40px",
    pauseOnHover: true,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Know more about us</h2>
      <Slider {...settings} className={styles.carousel}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`${styles.cardWrapper} ${currentSlide === index ? styles.active : ""}`}
          >
            <div className={styles.card}>
              <div className={styles.vectorContainer}>
                <Image src={redVector} alt="Decoration" className={styles.redVector} />
              </div>
              <div className={styles.cardContentWrapper}>
                <div className={styles.imageContainer}>
                  <CustomImage
                    type="slider"
                    src={card.image}
                    alt={card.title || "Card image"}
                    className={styles.cardImage}
                  />
                </div>
                <div className={styles.textContent}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className={styles.footer}>
                    {card.links?.map((link, i) => (
                      <a key={i} href={link.href} className={styles.link}>
                        {link.text}
                      </a>
                    ))}
                    <a href={card.moreLink} className={styles.moreLink}>
                      {card.moreText || "Learn More"} →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AiStudioSlider;
