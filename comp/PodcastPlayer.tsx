import { Button } from "antd";
import React from "react";
import Screen from "./Screen";
import style from "../styles/podcast/PodcastHomePlayer.module.css";
import { useRouter } from "next/router";

const PodcastPlayer = ({ podcasts }) => {
  const router = useRouter();
  // &theme=0
  return (
    <Screen>
      <div style={{ padding: "55px", display: "flex", flexDirection: "column" }}>
        <div className={style.container}>
          {podcasts.map((podcast, index) => (
            <iframe
              key={index}
              src={`${podcast.embedUrl}?autoplay=true`}
              className={style.iframe}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              // style={{opacity:.9}}
            ></iframe>
          ))}
        </div>
        <div className={style.HomePodcastPlayer}>
          <Button onClick={() => router.push(`/resources/Podcast`)} className={style.learnMore}>
            <span className={style.circle} aria-hidden="true">
              <span className={`${style.icon} ${style.arrow}`}></span>
            </span>
            <span className={style.buttonText}>Learn More</span>
          </Button>
        </div>
      </div>
    </Screen>
  );
};

export default PodcastPlayer;