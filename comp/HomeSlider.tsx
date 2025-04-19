import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/comp/HomeSlider.module.css";
import Screen from "./Screen";
import CustomImage from "../@/components/customImage";

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className={styles.navigationnext}>
      <Image
        src="/svg/rightarrow1.svg"
        onClick={onClick}
        alt="Next"
        className={styles.arrowIcon}
        width={35}
        height={35}
      />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className={styles.navigation}>
      <Image
        src="/svg/leftarrow1.svg"
        alt="Previous"
        onClick={onClick}
        className={styles.arrowIcon}
        width={35}
        height={35}
      />
    </div>
  );
};

interface Card {
  image: string;
  category?: string;
  title?: string;
  description: string;
  link?: string;
  moreText?: string;
  moreLink?: string;
}

interface HomeSliderProps {
  cards: Card[];
}

const HomeSlider = ({ cards }: HomeSliderProps) => {
  const [highlightedCard, setHighlightedCard] = useState<number | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleCardClick = (index: number) => {
    setHighlightedCard(index);
  };

  return (
    <div>
      <Screen>
        <div className={styles.container}>
          <h2 className={styles.title}>Know more about us</h2>
          <Slider {...settings } className={styles.cards}>
            {cards.map((card, index) => (
              <div
                key={index}
                className={`${styles.card} ${
                  highlightedCard === index ? styles.active : ""
                }`}
                onClick={() => handleCardClick(index)}
              >
                <CustomImage
                  type="slider"
                  src={card.image}
                  alt={card.title || card.category || "Image"}
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h3>{card.title || card.category}</h3>
                  <p>{card.description}</p>
                  <a
                    href={card.moreLink || card.link}
                    className={styles.moreLink}
                  >
                    {card.moreText || "Learn More"} &rarr;
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Screen>
    </div>
  );
};

export default HomeSlider;
