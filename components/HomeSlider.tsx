import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CustomImage from "../components/CustomImage";
import redVector from "../public/svg/redvector.svg";
import styles from "../styles/comp/HomeSlider.module.css";
import { LearnMoreButtonLink } from "./Button";

interface Card {
  image: string;
  title?: string;
  description: string;
  moreText?: string;
  moreLink?: string;
}

interface HomeSliderProps {
  cards: Card[];
  autoplay?: boolean;
  speed?: number;
}


// Custom Previous Arrow
const PrevArrow = (props: any) => (
  <div className={styles.prevArrow} onClick={props.onClick}>
    ←
  </div>
);

// Custom Next Arrow
const NextArrow = (props: any) => (
  <div className={styles.nextArrow} onClick={props.onClick}>
    →
  </div>
);

const HomeSlider = ({
  cards,
  autoplay = true,
  speed = 2000,
}: HomeSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const showRibbon = router.pathname === "/";

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerMode: true,
    centerPadding: "0px",
    pauseOnHover: true,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Know more about us</h3>
      <Slider {...settings} className={styles.carousel}>
        {cards.map((card, index) => {
          const isSlideActive = currentSlide === index;
          return (
            <div
              key={index}
              className={`${styles.cardWrapper} ${currentSlide === index ? styles.active : ""
                }`}
            >
              <div className={styles.card}>
                {showRibbon && (
                  <div className={styles.vectorContainer}>
                    <CustomImage
                      src={redVector.src}
                      alt="Decoration"
                      className={styles.redVector}
                      type="slider"
                      priority={true}
                    />
                  </div>
                )}
                <div className={styles.cardContentWrapper}>
                  <div className={styles.imageContainer}>
                    <CustomImage
                      alt={card.title || "Card image"}
                      type="slider"
                      src={card.image}
                      priority={true}
                      className={styles.cardImage}
                      ariaHidden={true}
                    />

                  </div>
                  <div className={styles.textContent}>
                    <h4>{card.title}</h4>
                    <p>{card.description}</p>
                    <div className={styles.footer}>
                      <LearnMoreButtonLink
                        text={
                          <>
                            <span style={{ fontWeight: 700 }}>Learn more</span>
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              style={{
                                fontSize: "15px",
                                marginLeft: "10px",
                                verticalAlign: "middle",
                                color: "#36399C", // match text color
                              }}
                            />
                          </>
                        }
                        ariaHidden={true}
                        tabIndex={-1}
                        className={styles.LearnMoreButtonLink}
                        color="#36399C"
                        bgColor="transparent "
                        onClick={() => {
                          if (card.moreLink) {
                            window.location.href = card.moreLink;
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default HomeSlider;
