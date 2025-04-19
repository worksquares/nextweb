import React from "react";
import styles from "../../styles/explore/Diversity.module.css";
import ImageContentCard from "../../comp/ImageLeftRight";
import { ImageContainProps } from "../../comp/base/ImageLeftRightCard";
import Headseo from "../headseo";
import BaseLayout from "../../comp/BaseLayout";

const GlobalImpact = () => {
  let ImageCardListData: ImageContainProps[] = [
    {
      title: "The move to low-code is well underway",
      paragraph:
        "Businesses are already adapting to greater demand for software. Many have turned to low-code as a solution, which is in use at 77% of organizations – and an incredible 94% of retail organizations recognize the power of popular e-commerce platforms for streamlining their business activities. ",
      img1700: "/assets/Global1.webp",
      img1024: "/assets/Global1.webp",
      img768: "/assets/Global1.webp",
      img320: "/assets/Global1.webp",
    },
    {
      title: "The business benefits of low-code are now evidently clear",
      paragraph:
        "IT professionals using low-code have quickly become aware of major benefits to its use. Two out of fivelow-code users reported more collaboration, faster development, and lower costs – and that low-code projects reduce costs by 53% and are 56% faster.",
      img1700: "/assets/Global2.webp",
      img1024: "/assets/Global2.webp",
      img768: "/assets/Global2.webp",
      img320: "/assets/Global2.webp",
    },
    {
      title: "Low-code is the light ahead",
      paragraph:
        "As we emerge from the pandemic and its many challenges, IT professionals see low-code as the light ahead. Low-code offers more than just hope it is a tried and tested solution to ever increasing time and cost demands across the enterprise. Thus, low-code is being used in more and more fundamental areas of business activity.",
      img1024: "/assets/Global3.webp",
      img1700: "/assets/Global3.webp",
      img768: "/assets/Global3.webp",
      img320: "/assets/Global3.webp",
    },
    {
      title: "Low-code can open new doors for talent",
      paragraph:
        "It breaks software development out of the IT box, so that non-technical staff can be part of the process, which has become more necessary during the pandemic than ever. Pandemic related pressures on IT departments have already led 64% of organizations to rely on non-technical staff to help relieve that pressure particularly in manufacturing (70%) and finance (71%).",
      img1024: "/assets/Global4.webp",
      img1700: "/assets/Global4.webp",
      img768: "/assets/Global4.webp",
      img320: "/assets/Global4.webp",
    },
  ];

  return (
    <div className={styles.DiversityMain}>
      <Headseo
        title={`Digisquares | Global Impact`}
        heading={`Global Impact`}
        description={`The increasing squeeze between software demand and supply has naturally created a new sense of urgency among IT professionals (45%)`}
        url={`/explore/GlobalImpact/`}
        img={`/assets/Global1.webp`}
        keywords={`IT professionals, Low-code, e-commerce platforms, Software development `}
      />
      <BaseLayout>
        <div className={styles.Diversityheader}>
          <h1 style={{ color: "#293e40" }}>
            The increasing squeeze between software demand and supply has
            naturally created a new sense of urgency among IT professionals
            (45%)
          </h1>
        </div>
        <div className={styles.DiversityImageCards}>
          <ImageContentCard ImageCardPropsList={ImageCardListData} />
        </div>
      </BaseLayout>
    </div>
  );
};

export default GlobalImpact;
