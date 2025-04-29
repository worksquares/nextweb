import React from "react";
import Menu from "../../components/Menu";
import styles from "../../styles/comp/Appstudio.module.css";
import MainFooter from "../../components/MainFooter";
import Image from "next/image";
import CustomImage from "../../components/CustomImage";
import Link from 'next/link';
import Screen from "../../components/Screen";

const appCards = [
  {
    title: "Workflow",
    description:
      "Effortlessly create and automate workflows with AppStudio. Customize templates and use drag-and-drop tools to design processes and integrate services, no coding required.",
    link: "https://docs.digisquares.com/docs/Workflow/WorkFlow%20Intro"
  },
  {
    title: "Pageflow",
    description:
      "Page flows are typically created using a drag-and-drop interface, where users can select UI components, arrange them on the canvas, and define the transition logic between screens.",
    link: "https://docs.digisquares.com/docs/PageFlow/PageFlow%20Intro"
  },
  {
    title: "Visual Query",
    description:
      "Easily build visual queries without needing to write SQL using AppStudio's Visual Query Builder. Drag-and-drop data elements to create powerful queries and generate insights quickly.",
    link: "https://docs.digisquares.com/docs/Library/VisualQuery/visualquery%20Intro"
  },
  {
    title: "Integrations",
    description:
      "Create and manage integrations effortlessly with AppStudio's API tools. Define endpoints, control data flow, and ensure secure communication with a user-friendly interface.",
    link: "https://docs.digisquares.com/docs/DataSource/Integration"
  },
  {
    title: "Database",
    description:
      "Effortlessly manage and scale databases with AppStudio’s intuitive Database Manager, handling schemas, migrations, and performance without deep SQL knowledge.",
    link: "https://docs.digisquares.com/docs/DataSource/Database/Database%20Intro"
  },
  {
    title: "SQL Query",
    description:
      "The SQL Query feature in our low-code platform simplifies database management by enabling easy creation and execution of SELECT, INSERT, UPDATE, and DELETE queries with AI-assisted generation and parameter management.",
    link: "https://docs.digisquares.com/docs/Library/SQL%20Query"
  },
];

const resourceItems = [
  {
    title: "Healthcare for Smarter Care",
    image: "/assets/app/appimg1.webp" 
  },
  {
    title: "Classroom Apps That Teach",
    image: "/assets/app/appimg2.webp" 
  },
  {
    title: "Manufacturing Workflows",
    image: "/assets/app/appimg3.webp" 
  }
];

const AppStudio = () => {
  return (
    <>
      <Menu />

      <div className={styles.wrapper}>
      <Screen>
      <div className={styles.agentSection}>
        <div className={styles.content}>
          <h1 className={styles.title}>App Studio</h1>
          <h4 className={styles.description}>
          Turn your innovative ideas into powerful applications effortlessly. Build scalable, high-performance solutions quickly and efficiently          </h4>
          <Link href="https://app.digisquares.com/register" className={styles.registerButton}>
        Register
      </Link>
        </div>
        <div className={styles.imageContainer}>
          <CustomImage
            type="hero"
            src="/assets/Apphero.webp"
            alt="AI Agents"
            className={styles.mainImages}
            priority={true}
          />
        </div>
      </div>
        </Screen>
     
      </div>

      <Screen>
        <div className={styles.possibilitySection}>
          <h2 className={styles.heading}>
            One studio <span className={styles.highlight}>Infinite possibilities</span>
          </h2>
          <p className={styles.subtext}>
            App Studio is the all-in-one platform you need to build, deploy, and manage custom apps for your business. Create smarter, faster, and scalable solutions with just a few clicks.
          </p>
          <div className={styles.videoPlaceholder}>
            <video className={styles.videoPlayer} 
            muted
            autoPlay
            poster="/assets/App studio.webp">
              <source src="/assets/video/App.mp4" type="video/mp4"/>
            </video>
          </div>
        </div>

        <section className={styles.appSection}>
          <div className={styles.appContent}>
            <div className={styles.line1}></div>
            <button className={styles.demoButton}>Book a Demo &gt;</button>

            <h2 className={styles.appHeading}>
              Pre-built <span className={styles.highlight}>App Hub</span>
            </h2>
            <p className={styles.appSubtext}>
              Explore our pre-built, high-performance apps designed to streamline workflows, boost efficiency, and deliver instant results across various industries and functions.
            </p>

            <div className={styles.cardGrid}>
              {appCards.map((card, idx) => (
                <div key={idx} className={styles.card}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardDescription}>{card.description}</p>
                  <Link href={card.link} className={styles.cardButton}>
                    Explore All
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.resourceSection}>
          <span className={styles.redUnderline}></span>
          <div className={styles.resourceContent}>
            <h2 className={styles.resourceTitle}>
              <strong>Resources</strong> to keep you updated
            </h2>
            <div className={styles.resourceGrid}>
              {resourceItems.map((item, index) => {
                const words = item.title.trim().split(" ");
                const firstLine = words.slice(0, 3).join(" ");
                const secondLine = words.slice(3).join(" ");

                return (
                  <div key={index} className={styles.resourceCard}>
                    <div className={styles.resourceImage}>
                      <Image
                        src={item.image}
                        alt={`Resource image for ${item.title}`}
                        width={380}
                        height={280}
                        className={styles.resourceimg}
                      />
                    </div>
                    <h3 className={styles.resourceText}>
                      {firstLine}
                      {secondLine && (
                        <>
                          <br />
                          {secondLine}
                        </>
                      )}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Screen>

      <MainFooter />
    </>
  );
};

export default AppStudio;
