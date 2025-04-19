import React from "react";
import Styles from "../../styles/comp/core/ImageLeftRightCard.module.css";
import Images from "./Images";
import Screen from "../Screen";
import CustomImage from "../../@/components/customImage";

export interface ImageContainProps {
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

const ImageLeftRightCard = ({
  title,
  paragraph,
  link,
  dir,
  img1700,
  img1024,
  img768,
  img320,
  subtitle,
  button,
  paragraph1,
  paragraph2,
  paragraph3,
}: ImageContainProps) => {
  return (
    <Screen>
      <div
        key={title}
        style={{ width: "100%", maxWidth: "2300px", margin: "0 auto" }}
      >
        <div className={dir == "left" ? Styles.Simplyright : Styles.Simplyleft}>
          <div className={Styles.Leftcontain}>
            <span>{subtitle}</span>
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <p>{paragraph1}</p>
            <p>{paragraph2}</p>
            <p>{paragraph3}</p>
            {button == null ? "" : <button>{button}</button>}
            {link && (
              <a href={link} className={Styles.learnMoreButton}>
                Learn More
              </a>
            )}   
          </div>
          <div className={Styles.Rightcontain}>
            {/* <picture style={{ border: "1px solid red", display: "none" }}>
              <source media="(min-width: 1700px)" srcSet={img1700 != null ? img1700 : img320} />
              <source media="(min-width: 1024px)" srcSet={img1024 != null ? img1024 : img320} />
              <source media="(min-width: 768px)" srcSet={img768 != null ? img768 : img320} />
              <source media="(min-width: 320px)" srcSet={img320} />
            </picture> */}
            <CustomImage
              type="rightLeft"
              src={img320}
              alt="ImageContent"
              className={Styles.imgcontain}
              priority={false}
            />
            {/* <Images
              alt="ImageContent"
              layout="intrinsic"
              style={{ borderRadius: "10px" }}
              width={1000}
              height={1000}
              src={img320}
              unoptimized={true}
            ></Images> */}
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default ImageLeftRightCard;
