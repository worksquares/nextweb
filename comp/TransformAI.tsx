import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/comp/TransformAi.module.css";
import Screen from "./Screen";
import AnimatedBeamMultipleOutputDemo from "../@/react/anime";
import OrbitingCirclesDemo from "../@/react/OrbitingCirclesDemo";
import IconCloudDemo from "../@/react/IconCloud";
import MarqueeDemo from "../@/react/MarqueeDemo";
import { memo } from "react";
import GlobeVideoWrapper from "./GlobeVideoWrapper";

const TransformAI = () => {
  const router = useRouter();

  const handleLearnMoreClick = (path: string) => {
    router.push(path);
  };

  return (
    <Screen>
      <div className={styles.container}>
        <h2 className={styles.title}>Transform your business with AI</h2>
        <div className={styles.cardContainer}>
          <div className={styles.col1}>
            <div className={styles.card1}>
              <AnimatedBeamMultipleOutputDemo />
              <div className={styles.content}>
                <Image
                  src="/assets/visualquery.svg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
                <h1>Workflow</h1>
                <p>
                  A workflow in a web application defines the steps and
                  processes to complete specific tasks.
                </p>
              </div>
              <div className={styles.learnMore}>
                <button>
                  <span>Learn More</span>
                  <Image
                    src="/assets/arrow.svg"
                    width={20}
                    height={20}
                    alt="Picture of the author"
                  />
                </button>
              </div>
            </div>
            <div className={styles.card1}>
              <MarqueeDemo />
              <div className={styles.content}>
                <Image
                  src="/assets/project.svg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
                <h1>Application</h1>
                <p>
                  Streamlined project management boosts efficiency and ensures
                  successful delivery.
                </p>
              </div>
              <div className={styles.learnMore}>
                <button>
                  <span>Learn More</span>
                  <Image
                    src="/assets/arrow.svg"
                    width={20}
                    height={20}
                    alt="Picture of the author"
                  />
                </button>
              </div>
            </div>
            <div className={styles.card1}>
              <OrbitingCirclesDemo />
              <div className={styles.content}>
                <Image
                  src="/assets/templates.svg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
                <h1>Framework</h1>
                <p>Digisquare offers a variety of options to choose from.</p>
              </div>
              <div className={styles.learnMore}>
                <button>
                  <span>Learn More</span>
                  <Image
                    src="/assets/arrow.svg"
                    width={20}
                    height={20}
                    alt="Picture of the author"
                  />
                </button>
              </div>
            </div>
            <div className={styles.card1}>
              <IconCloudDemo />
              <div className={styles.content}>
                <Image
                  src="/assets/integration.svg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
                <h1>Integration</h1>
                <p>
                  Effortless integration accelerates development and innovation
                  in low-code platforms.
                </p>
              </div>
              <div className={styles.learnMore}>
                <button>
                  <span>Learn More</span>
                  <Image
                    src="/assets/arrow.svg"
                    width={20}
                    height={20}
                    alt="Picture of the author"
                  />
                </button>
              </div>
            </div>
            <div className={styles.card2}>
              <div className={styles.contentGlobe}>
                <Image
                  src="/assets/globe.svg"
                  width={20}
                  height={20}
                  alt="Picture of the author"
                />
                <h1>Localization</h1>
                <p>
                  Our products are designed with multi-language capabilities,
                  offering global accessibility and a consistent experience. We
                  empower users from diverse regions, ensuring language is never
                  a barrier to innovation.
                </p>
              </div>
              <div className={styles.GlobeVideoWrapperComp} style={{ width: "100%", height: "65%" }}>
                <GlobeVideoWrapper />
              </div>
              <div className={styles.learnMore}>
                <button>
                  <span>Learn More</span>
                  <Image
                    src="/assets/arrow.svg"
                    width={20}
                    height={20}
                    alt="Picture of the author"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default memo(TransformAI);