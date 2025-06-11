import React from "react";
import ImageLeftRightCard from "./base/ImageLeftRightCard";
import styles from "../styles/ImageLeftRight.module.css";
import Screen from "./Screen";

interface ImageContainProps {
  title: string;
  paragraph: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  link?: string;
  dir?: string;
  img1700?: string;
  img1024?: string;
  img768?: string;
  img320: string;
  subtitle?: string;
  button?: string;
}

interface ImageContentCardProps {
  ImageCardPropsList: ImageContainProps[];
  Homepage?: boolean;
}

const ImageLeftRight = ({ ImageCardPropsList, Homepage }: ImageContentCardProps) => {
  return (
    <>
      {Homepage ? <Screen>
        <h2 className={styles.HomePageCardHeader}>
          Maximize Efficiency and Innovation with AI-Driven Solutions
        </h2>
      </Screen> : null}
      {ImageCardPropsList.map((Imageprop, i) => (
        <ImageLeftRightCard
          dir={i % 2 === 0 ? "left" : "right"}
          key={Imageprop.title}
          {...Imageprop}
          priority={true}
        />
      ))}
    </>
  );
};

export default ImageLeftRight;
