import React, { useState, useEffect } from "react";
import styles from "../styles/comp/HeroVideo.module.css";
import Screen from "./Screen";
import { CaretRightOutlined } from "@ant-design/icons";
import Image from "next/image";

const LazyLoadYouTube = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const loadVideo = () => {
    setIsLoaded(true);
  };

  return (
    <div className={styles.videoPlaceholder}>
      {!isLoaded ? (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height:'100%',
            backgroundImage: `url(/assets/video/YoutubeVideoBg.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <button
            className={styles.YoutubeButton}
           
            onClick={loadVideo}
          >
            <CaretRightOutlined style={{ fontSize: '28px',marginLeft:3 }} />
          </button>

        </div>
      ) : (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/WlPmVdU32j4?si=Td4MVo37OyWfnoxs&autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

const HeroVideo = ({
  title,
  subtitle,
  dir,
  video,
  description,
  backgroundColor,
  ImgSrc,
  videoRef
}: any) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [isClient]);

  return (
    <div ref={videoRef} style={{ backgroundColor: backgroundColor }}>
      <Screen>
        <div
          className={
            dir === "Right" ? styles.videoRightSection : styles.videoSection
          }
        >
          <div className={styles.videoContainer}>
            <h2 className={styles.title}>{title}</h2>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              {video ? (
                <>
                  <LazyLoadYouTube />
                </>
              ) : (
                
                              <Image
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
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <p className={styles.description}>{description}</p>
          </div>
        </div>
      </Screen>
    </div>
  );
};

export default HeroVideo;