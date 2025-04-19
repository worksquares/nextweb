import React from "react";
import styles from '../styles/comp/Accelerate.module.css'
import Link from "next/link";
import Image from "next/image";

const AccelerateSection = () => {
  return (
    <div className={styles.accelerateWrapper}>
      <div className={styles.agentSection}>
        {/* Left Side Text */}
        <div className={styles.content}>
          <h2 className={styles.title_accelerate}>Accelerate</h2>
          <h2 className={styles.title_accelerate}>with AI</h2>

          {/* <h3 className={styles.subtitle_accelerate}>AI & Low-Code Solutions</h3> */}
          <h4 className={styles.description_accelerate}>
          Build apps, create chatbots, and deploy AI models effortlessly - no code required.
          </h4>

          <div className={styles.GetStartedBtn}>
            <Link legacyBehavior href="https://app.digisquares.com/register">
              <a rel="nofollow">
                <div className={styles.buttonText}>Register</div>
              </a>
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        
<div className={styles.imageContainer}>
  <Image
    src="/assets/Hero & cards/HeroSection/Hero.gif" 
    alt="AI Box"
    className={styles.mainImage}
    width={50}
    height={50}
    priority
  />
</div>
      </div>
    </div>
  );
};

export default AccelerateSection;
