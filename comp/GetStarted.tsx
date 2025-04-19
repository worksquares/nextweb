import React from "react";
import styles from "../styles/comp/GetStarted.module.css";
import Screen from "./Screen";
import Image from "next/image";

const GetStarted = () => {
  const options = [
    {
      title: "Explore",
      icon: "/svg/Explore.svg",
      link: "https://docs.digisquares.com",
    },
    {
      title: "Contact Us",
      icon: "/svg/Contact.svg",
      link: "/contact/ContactUs/",
    },
    {
      title: "Demos",
      icon: "/svg/Demos.svg",
      link: "https://docs.digisquares.com/course/videos",
    },
    {
      title: "Pricing",
      icon: "/svg/Pricing.svg",
      link: "/pricing/AppStudio/",
    },
  ];

  return (
    <div className={styles.getStartedContainer}>
      <Screen>
        <section className={styles.getStartedSection}>
          <div className={styles.optionsContainer}>
            {options.map((option, index) => (
              <div key={index} className={styles.option}>
                <a href={option.link} className={styles.optionLink}>
                  <Image
                    src={option.icon}
                    priority={true}
                    alt="GetStartedIcon"
                    className={styles.optionIcon}
                    height={50}
                    width={50}
                  />
                  <p className={styles.optionTitle}>{option.title}</p>
                </a>
              </div>
            ))}
          </div>
        </section>
      </Screen>
    </div>
  );
};

export default GetStarted;
