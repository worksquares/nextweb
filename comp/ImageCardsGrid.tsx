import React from "react";
import ImageCard, { CardProps } from "./base/ImageCard";
import styles from "../styles/comp/core/ImageCard.module.css";

interface ImageCardsGridProps {
  ImageCardPropsList: CardProps[];
}

const ImageCardsGrid = (InfoCardListData: ImageCardsGridProps) => {
  return (
    <div className={styles.GridAlignCards}>
      {InfoCardListData.ImageCardPropsList.map((Imageprop) => (
        <ImageCard
          key={Imageprop.heading}
          image={Imageprop.image}
          category={Imageprop.category}
          heading={Imageprop.heading}
          description={Imageprop.description}
          link={Imageprop.link}
          linktext={Imageprop.linktext}
        />
      ))}
    </div>
  );
};

export default ImageCardsGrid;
