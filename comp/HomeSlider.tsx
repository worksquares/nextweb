// import Image from "next/image";
// import { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import styles from "../styles/comp/HomeSlider.module.css";
// import Screen from "./Screen";
// import CustomImage from "../@/components/customImage";

// const NextArrow = (props: any) => {
//   const { onClick } = props;
//   return (
//     <div className={styles.navigationnext}>
//       <Image
//         src="/svg/rightarrow1.svg"
//         onClick={onClick}
//         alt="Next"
//         className={styles.arrowIcon}
//         width={35}
//         height={35}
//       />
//     </div>
//   );
// };

// const PrevArrow = (props: any) => {
//   const { onClick } = props;
//   return (
//     <div className={styles.navigation}>
//       <Image
//         src="/svg/leftarrow1.svg"
//         alt="Previous"
//         onClick={onClick}
//         className={styles.arrowIcon}
//         width={35}
//         height={35}
//       />
//     </div>
//   );
// };

// interface Card {
//   image: string;
//   category?: string;
//   title?: string;
//   description: string;
//   link?: string;
//   moreText?: string;
//   moreLink?: string;
// }

// interface HomeSliderProps {
//   cards: Card[];
// }

// const HomeSlider = ({ cards }: HomeSliderProps) => {
//   const [highlightedCard, setHighlightedCard] = useState<number | null>(null);

//   const settings = {
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     centerMode: true,
//     centerPadding: "20px",
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   const handleCardClick = (index: number) => {
//     setHighlightedCard(index);
//   };

//   return (
//     <div>
//       <Screen>
//         <div className={styles.container}>
//           <h2 className={styles.title}>Know more about us</h2>
//           <Slider {...settings } className={styles.cards}>
//             {cards.map((card, index) => (
//               <div
//                 key={index}
//                 className={`${styles.card} ${
//                   highlightedCard === index ? styles.active : ""
//                 }`}
//                 onClick={() => handleCardClick(index)}
//               >
//                 <CustomImage
//                   type="slider"
//                   src={card.image}
//                   alt={card.title || card.category || "Image"}
//                   className={styles.cardImage}
//                 />
//                 <div className={styles.cardContent}>
//                   <h3>{card.title || card.category}</h3>
//                   <p>{card.description}</p>
//                   <a
//                     href={card.moreLink || card.link}
//                     className={styles.moreLink}
//                   >
//                     {card.moreText || "Learn More"} &rarr;
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </Screen>
//     </div>
//   );
// };

// export default HomeSlider;


import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CustomImage from "../@/components/customImage";
import redVector from "../public/svg/redvector.svg";
import styles from "../styles/comp/HomeSlider.module.css";

interface Card {
    image: string;
    title?: string;
    heading?:string;
    description: string;
    category?: string;
    links?: { text: string; href: string }[];
    moreText?: string;
    moreLink?: string;
    link?: string;
}

interface HomeSliderProps {
    cards: Card[];
    autoplay?: boolean;
    speed?: number;
}

const HomeSlider = ({ cards, autoplay = true, speed = 2000 }: HomeSliderProps) => {
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
        // autoplay: autoplay,
        // autoplaySpeed: speed,
        beforeChange: (current: number, next: number) => setCurrentSlide(next),
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

    return (
      <div className={styles.container}>
        {/* <Screen> */}
        <h2 className={styles.title}>Know more about us</h2>
        <Slider {...settings} className={styles.carousel}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${styles.cardWrapper} ${
                currentSlide === index ? styles.active : ""
              }`}
            >
              <div className={styles.card}>
                <div className={styles.vectorContainer}>
                  <Image
                    src={redVector.src}
                    alt="Decoration"
                    className={styles.redVector}
                    width={20}
                    height={20}
                  />
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
                  <h3>{card.title || card?.category}</h3>
                  <h3>{card.heading}</h3>
                    <p>{card.description}</p>
                    <div className={styles.footer}>
                      {card.links && (
                        <div className={styles.links}>
                          {card.links.map((link, i) => (
                            <a key={i} href={link.href} className={styles.link}>
                              {link.text}
                            </a>
                          ))}
                        </div>
                      )}
                      <a href={card.moreLink || card.link} onClick={(e) => e.stopPropagation()}className={styles.moreLink}>{card.moreText || "Learn More"} &rarr;</a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* </Screen> */}
      </div>
    );
};

export default HomeSlider;
