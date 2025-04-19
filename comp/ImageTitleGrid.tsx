import React from "react";
import ImageTitle, { ImgTitleProps } from "./base/ImageTitle";
import styles from "../styles/comp/core/ImageTitle.module.css";

interface ImageTitleGridProps {
  ImageCardPropsList: ImgTitleProps[];
}

const ImageTitleGrid = (ImageTitleListData: ImageTitleGridProps) => {
  return (
    <div className={styles.ImageGridAlignCards}>
      {ImageTitleListData.ImageCardPropsList.map((Imagetitleprop) => (
        <ImageTitle key="ImageTitle" image={Imagetitleprop.image} title={Imagetitleprop.title} sentence={Imagetitleprop.sentence} />
      ))}
    </div>
  );
};

export default ImageTitleGrid;
