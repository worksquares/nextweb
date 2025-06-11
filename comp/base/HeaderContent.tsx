import React from "react";
import Screen from "../../comp/Screen";
import CustomImage from "../../components/CustomImage";
import Styles from "../../styles/comp/core/HeaderContent.module.css";
export interface HeaderContentProps {
  title: string;
  paragraph: string;
  link?: string;
  dir?: string;
  img1700?: string;
  img1024?: string;
  img768?: string;
  img320?: string;
  btnLink?: string;
  backgroundColor?: string;
  backgroundImg?: string;
  isPodCast?: 1 | 0;
  priority?: true
}

const HeaderContent: React.FC<HeaderContentProps> = ({
  title,
  paragraph,
  link,
  dir,
  img1700,
  img1024,
  img768,
  img320,
  backgroundColor = "transparent",
  isPodCast,
  backgroundImg,
  priority,
}) => {
  const podcastBackgroundStyle: React.CSSProperties = {
    backgroundColor,
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    minHeight: 600,
  };

  if (isPodCast === 1) {
    // Return for Podcast layout
    return (
      <div className={Styles.HeaderContentOuter} style={podcastBackgroundStyle}>
        <Screen>
          {/* {isPodCast === 1 && <PodcastSearchBar podcasts={podcast} />}  */}
          <div
            className={Styles.Anotherimage}
            style={{ minHeight: 600, margin: 0 }}
          >
            <div
              className={Styles.Anothercontain}
              style={{ alignItems: "center", position: "relative" }}
            >
              <div className={Styles.podcastHeaderText}>{title}</div>
              <p style={{ width: "50%" }}>{paragraph}</p>
              {link && <a href={link}>Learn More</a>}
            </div>
          </div>
        </Screen>
      </div>
    );
  }

  // Return for non-Podcast layout
  return (
    <div style={{ backgroundColor }}>
      <Screen>
        <div
          className={dir === "left" ? Styles.Anotherimage : Styles.newImages}
        >
          <div className={Styles.Anothercontain}>
            <h2 style={{ lineHeight: 1 }}>Digisquares for</h2>
            <h2 style={{ lineHeight: 1 }}>{title}</h2>
            <p>{paragraph}</p>
            {link && <a href={link}>Learn More</a>}
          </div>
          <div
            className={Styles.Rightanother}
            style={{ width: "100%", height: "100%", position: "relative" }}
          >
            {/* <picture>
            <source media="(min-width: 1700px)" srcSet={img1700 || img320} />
            <source media="(min-width: 1024px)" srcSet={img1024 || img320} />
            <source media="(min-width: 768px)" srcSet={img768 || img320} />
            <source media="(min-width: 320px)" srcSet={img320} />
            <img src={img320} alt={`${title} Banner Image`} title={title} style={{ width: "100%", height: "auto", objectFit: "contain", borderRadius:"10px" }} />
          </picture> */}
            {img320 && (
              <CustomImage
                type="hero_alt"
                src={img320}
                alt={title || "Image"}
                className={Styles.IndustryHeroImg}
                priority={true}
              />
            )}
          </div>
        </div>
      </Screen>
    </div>
  );
};

export default HeaderContent;
