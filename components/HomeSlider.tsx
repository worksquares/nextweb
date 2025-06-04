import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CustomImage from "../@/components/customImage";
import redVector from "../public/svg/redvector.svg";
import styles from "../styles/comp/HomeSlider.module.css";
import { LearnMoreButtonLink } from "./Button/Button";

interface Card {
    // tabTitle?: string;
    image: string;
    title?: string;
    description: string;
    links?: { text: string; href: string }[];
    moreText?: string;
    moreLink?: string;
    // demoLink?: string;
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

const HomeSlider = ({ cards, autoplay = true, speed = 2000 }: HomeSliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const router=useRouter();
    const showRibbon=router.pathname ==="/";

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        // arrows: false,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        centerMode: true,
        centerPadding: "0px",
        pauseOnHover: true,
        // autoplay: autoplay,
        // autoplaySpeed: speed,
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
        {/* <Screen> */}
        <h3 className={styles.title}>Know more about us</h3>
        <Slider {...settings} className={styles.carousel}>
          {cards.map((card, index) => {
            return (
              <div
                key={index}
                className={`${styles.cardWrapper} ${currentSlide === index ? styles.active : ""}`}
              >
                <div className={styles.card}>
                  {/* <div className={styles.tabTitle}>
            <h4>{card.tabTitle}</h4>
            </div> */}

                  {showRibbon && (
                    <div className={styles.vectorContainer}>
                      <Image
                        src={redVector.src}
                        alt="Decoration"
                        className={styles.redVector}
                        width={20}
                        height={20} />
                    </div>
                  )}
                  <div className={styles.cardContentWrapper}>
                    <div className={styles.imageContainer}>
                      <CustomImage
                        type="slider"
                        src={card.image}
                        alt={card.title || "Card image"}
                        className={styles.cardImage} />
                    </div>
                    <div className={styles.textContent}>
                      <h4>{card.title}</h4>
                      <p>{card.description}</p>
                      <div className={styles.footer}>
                        {/* {card.links && (
              <div className={styles.links}>
                {card.links.map((link, i) => (
                  <a key={i} href={link.href} className={styles.link}>
                    {link.text}
                  </a>
                ))}
              </div>
            )}
            <a href={card.moreLink} className={styles.moreLink}>
              {card.moreText || "Learn More"} &rarr;
            </a> */}
                        <LearnMoreButtonLink
                          text={<>
                            <span style={{ fontWeight: 700 }}>Learn more</span>
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              style={{
                                fontSize: '15px',
                                marginLeft: '10px',
                                verticalAlign: 'middle',
                                color: '#fff', // match text color
                                width: '15px',
                                height: '15px',
                              }} />
                          </>}
                          className={styles.LearnMoreButtonLink}
                          color="#fff"
                          bgColor="#1d4965"
                          onClick={() => {
                            if (card.moreLink) {
                              window.location.href = card.moreLink;
                            }
                          } } />


                        {/* {card.demoLink && (

              <a href={card.demoLink} className={styles.demoLink}
              // target="_blank" rel="noopener noreferrer"
              >
                Book a Demo
              </a>
            )} */}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        {/* </Screen> */}
      </div>
    );
};

export default HomeSlider;
