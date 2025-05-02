// ImageLeftRight.tsx
import React from "react";
import ImageLeftRightCard from '../components/ImageLeftRightCard';
import Styles from '../styles/comp/ImageLeftRight.module.css'; 


export interface ImageContainProps {
  title: string;
  paragraph: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  link?: string;
  dir?: "left" | "right";
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
    <div className={Styles.imageContainer}> 
      {/* {ImageCardPropsList.map((ImageProp, i) => ( */}
      {ImageCardPropsList
        .filter((item) => !!item.title && !!item.img320) // ✅ validate required fields
        .map((ImageProp, i) => (
        <div
          key={ImageProp.title}
        >
          <ImageLeftRightCard
            dir={i % 2 === 0 ? "right" : "left"}
            {...ImageProp}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageLeftRight;

