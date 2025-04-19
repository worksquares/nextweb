import React from "react";
import Styles from "../../styles/comp/core/AnotherImgCard.module.css";
import Images from "./Images";

export interface AnotherContainProps {
  title: string;
  paragraph: string;
  link?: string;
  dir?: string;
  img1700?: string;
  img1024?: string;
  img768?: string;
  img320: string;
  btn?: string;
  btnLink?: string;
}

const AnotherimgContent = ({ title, paragraph, link, dir, img1700, img1024, img768, img320, btnLink, btn }: AnotherContainProps) => {
  return (
    <div>
      <div className={dir == "left" ? Styles.Anotherimage : Styles.newImages}>
        <div className={Styles.Anothercontain}>
          <h2>{title}</h2>
          <p>{paragraph}</p>
          {btn ? (
            <a href={btnLink} className={Styles.video}>
              {btn}
            </a>
          ) : null}

          <span>
            {link ? (
              <a href={link} className={Styles.lets}>
                Get Details
              </a>
            ) : null}
          </span>
        </div>
        <div className={Styles.Rightanother}>
          <picture>
            <source media="(min-width: 1700px)" srcSet={img1700 != null ? img1700 : img320} />
            <source media="(min-width: 1024px)" srcSet={img1024 != null ? img1024 : img320} />
            <source media="(min-width: 768px)" srcSet={img768 != null ? img768 : img320} />
            <source media="(min-width: 320px)" srcSet={img320} />
            <Images alt="sds" layout="intrinsic" width="1500" height="1750" src={img320}></Images>
          </picture>
        </div>
      </div>
    </div>
  );
};

export default AnotherimgContent;
