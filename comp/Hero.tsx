import React from "react";
import styles from "../styles/comp/Hero.module.css";
import Image from "next/image";
import Screen from "./Screen";

const Hero = () => {
  return (
    <div>
      <section className={styles.hero}>
        <Screen>
          <div className={styles.herocontainer}>
            <div className={styles.heroleft}>
              <h1>Ideas to Apps</h1>
              <p>
                Supercharge Your Software Development with AI&nbsp;Powered
                Low-Code Platform
              </p>
              <div className={styles.susp}>
                <a href="https://app.digisquares.com/register">Get Started</a>
              </div>
            </div>
            <div className={styles.heroimage}>
              <Image
                src="/assets/heroimagenew.webp"
                className={styles.objectcontain}
                layout="intrinsic"
                width={1500}
                height={1070}
                alt="Picture of the author"
                unoptimized={true}
              />
            </div>
          </div>
        </Screen>
      </section>
    </div>
  );
};

export default Hero;
