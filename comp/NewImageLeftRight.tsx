import React from "react";
import styles from "../styles/comp/VideoSection.module.css";
import Screen from "./Screen";
import CustomImage from "../@/components/customImage";

const VideoSection = ({
  title,
  subtitle,
  dir,
  video,
  description,
  buttonText,
  onButtonClick,
  backgroundColor,
  ImgSrc,
}: any) => {
  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <Screen>
        <div
          className={
            dir === "Right" ? styles.videoRightSection : styles.videoSection
          }
        >
          <div className={styles.videoContainer}>
            <div>
              {video ? (
                <iframe
                  className={styles.videoPlaceholder}
                  height="100%"
                  src="https://www.youtube.com/embed/WlPmVdU32j4?si=Td4MVo37OyWfnoxs"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              ) : (
                <CustomImage
                  type="banner"
                  src={ImgSrc}
                  alt="AI Agents"
                  className={styles.mainImage}
                />
              )}
            </div>
          </div>
          <div
            className={
              dir === "Right" ? styles.textRightContent : styles.textContent
            }
          >
            <h1 className={styles.title}>{title}</h1>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <p className={styles.description}>{description}</p>
            <button className={styles.learnMoreBtn} onClick={onButtonClick}>
              <div className={styles.buttonText}>{buttonText}</div>
            </button>
          </div>
        </div>
      </Screen>
    </div>
  );
};

export default VideoSection;
