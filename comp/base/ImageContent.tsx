import React from "react";
import Styles from "../../styles/comp/core/ImageContent.module.css";
import Images from "./Images";

export interface ImageContainProps {
  title: string;
  paragraph: string;
  link?: string;
  dir?: string;
  img1700?: string;
  img1024?: string;
  img768?: string;
  img320: string;
  subtitle?: string;
  button?: string;
}

const ImageContent = ({ title, paragraph, link, dir, img1700, img1024, img768, img320, subtitle, button }: ImageContainProps) => {
  return (
    <div key={title}>
      <div className={dir == "left" ? Styles.Simplyright : Styles.Simplyleft}>
        <div className={Styles.Leftcontain}>
          <span>{subtitle}</span>
          <h2>{title}</h2>
          <p>{paragraph}</p>
          {button == null ? "" : <button>{button}</button>}
          {link == null ? "" : <a href="#">{link}</a>}
        </div>
        <div className={Styles.Rightcontain}>
          <picture>
            <source media="(min-width: 1700px)" srcSet={img1700 != null ? img1700 : img320} />
            <source media="(min-width: 1024px)" srcSet={img1024 != null ? img1024 : img320} />
            <source media="(min-width: 768px)" srcSet={img768 != null ? img768 : img320} />
            <source media="(min-width: 320px)" srcSet={img320} />
            <Images alt="sds" layout="intrinsic" width="1500" height="800" src={img320}></Images>
          </picture>
        </div>
      </div>
    </div>
  );
};

export default ImageContent;
