import React from "react";
import Styles from "../../styles/comp/core/BlogNewsCard.module.css";
import Images from "./Images";

export interface BlogNewsContainProps {
  title?: string;
  heading?: string;
  subtitle?: string;
  link?: string;
  img1700?: string;
  img1024?: string;
  img768?: string;
  img320?: string;
}

const BlogNewsCardGrid = ({ title, link, img1700, img1024, img768, img320, subtitle, heading }: BlogNewsContainProps) => {
  return (
    <div>
      <div className={Styles.BlogNews}>
        <div className={Styles.BlogNewsContainer}>
          <div className={Styles.BlogNewsLeft}>
            <h1>{title}</h1>
            <div className={Styles.BlogNewsLeftContent}>
              <div className={Styles.picturecontain}>
                <picture>
                  <source media="(min-width: 1700px)" srcSet={img1700 != null ? img1700 : img320} />
                  <source media="(min-width: 1024px)" srcSet={img1024 != null ? img1024 : img320} />
                  <source media="(min-width: 768px)" srcSet={img768 != null ? img768 : img320} />
                  <source media="(min-width: 320px)" srcSet={img320} />
                  <Images alt="sds" layout="intrinsic" width="1400px" height="800px" src={img320}></Images>
                </picture>
              </div>
              <div className={Styles.paraContain}>
                <h3>{heading}</h3>
                <div className={Styles.Newsspana}>
                  <span>{subtitle}</span>
                  <a>{link}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNewsCardGrid;
