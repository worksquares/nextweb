import React from "react";
import styles from "../styles/comp/NewHeroSection.module.css";
import Screen from "./Screen";
import Link from "next/link";
import CustomImage from "../@/components/customImage";
import Image from "next/image";

const AgentSection = ({
  title,
  subtitle,
  description,
  buttonText,
  ImgSrc,
  onButtonClick,
  isVisible,
}) => {

  const renderContent = (title, subtitle, description, styles) => {
    const contentMap = {
      "Accelerate with AI": {
        main: "Accelerate with AI",
        sub: "",
      },
      "利用人工智能加速您的业务": {
        main: "加速",
        sub: "利用人工智能您的业务",
      },
      "AI के साथ अपने व्यवसाय को गति दें": {
        main: "गति दें",
        sub: "AI के साथ अपने व्यवसाय को",
      },
      "Acelera con IA": {
        main: "Acelera",
        sub: "con IA",
      },
      "سَرِّع عملك باستخدام الذكاء الاصطناعي": {
        main: "سَرِّع",
        sub: "عملك باستخدام الذكاء الاصطناعي",
      },
    };
  
    if (contentMap[title]) {
      return (
        <>
          <h2 className={styles.title_new}>{contentMap[title].main}</h2>
          <h3 className={styles.title_new}style={{color:"unset"}}>
            {contentMap[title].sub}
          </h3>
        </>
      );
    }
  
    return (
      <>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <p className={styles.description}>{description}</p>
      </>
    );
  };
    return (
    <div className={isVisible ? styles.sectionhero : styles.centeredContent}>
      {isVisible ? (
        <Screen>
          <div className={styles.agentSection}>
            <div className={styles.content}>
            {renderContent(title,subtitle,description,styles)}
              <div className={styles.GetStartedBtn}>
                <Link legacyBehavior href={onButtonClick}>
                  <a rel="nofollow">
                    <div className={styles.buttonText}>{buttonText}</div>
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.imageContainer}>
              {ImgSrc && (
                <CustomImage 
                  type="hero"
                  src={ImgSrc}
                  alt="AI Agents"
                  className={styles.mainImage}
                  priority={true}
                />
              )}
            </div>
          </div>
        </Screen>
      ) : (
        <div className={styles.centeredMessage}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <button
            className={styles.ctaButton}
            onClick={() => (window.location.href = onButtonClick)}
          >
            <div className={styles.buttonText}>{buttonText}</div>
          </button>
        </div>
      )}
    </div>
  );
};

export default AgentSection;
