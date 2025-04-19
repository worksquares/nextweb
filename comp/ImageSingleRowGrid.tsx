import React from "react";
import ImageCard, { SingleRowProps } from "./base/ImageSingleRow";
import styles from "../styles/comp/core/ImageSingleRow.module.css";

interface ImageSingleGridProps {
  ImageSinglePropsList: SingleRowProps[]; 
}

const ImageSingleRowGrid = (InfoRowListData: ImageSingleGridProps) => {
  return (
    <div className={styles.GridAlignCards}>
      {InfoRowListData.ImageSinglePropsList.map((Imageprop) => (
        <ImageCard key={Imageprop.heading} image={Imageprop.image} category={Imageprop.category} heading={Imageprop.heading} description={Imageprop.description} link={Imageprop.link} />
      ))}
    </div>
  );
};

export default ImageSingleRowGrid;
