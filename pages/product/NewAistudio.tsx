import React from "react";
import Menu from "../../components/Menu";
import styles from "../../styles/comp/Aistudio.module.css";
import MainFooter from "../../components/MainFooter";
import CustomImage from "../../components/CustomImage";
import Image from "next/image";
import Screen from "../../components/Screen";
import Link from 'next/link';


// import {
//   FaBan,
//   FaChartLine,
//   FaBullhorn,
//   FaUserTie,
//   FaHeadset,
//   FaMoneyCheckAlt,
// } from "react-icons/fa";

const agentCards = [
  {
    // icon: <FaBan />,
    title: "Build Agents",
    description:
      "Effortlessly design intelligent conversational agents in Digisquares AI Studio with pre-built templates and a drag-and-drop interface for customization.",
    link:"https://docs.digisquares.com/docs/Apps/Copilot/OverView"
    },
  {
    // icon: <FaChartLine />,
    title: "Interaction",
    description:
      "Easily manage user interactions in AI Studio by defining roles, setting permissions, and monitoring engagement metrics, all with advanced security settings to optimize agent performance",
    link:"https://docs.digisquares.com/docs/Apps/Copilot/OverView",
    },
  {
    // icon: <FaBullhorn />,
    title: "Access Role",
    description:
      "Maintain secure workflows with AI Studio’s role-based access management, allowing teams to control who designs, customizes, and deploys AI agents for collaborative development.",
    link:"https://docs.digisquares.com/docs/Apps/Copilot/OverView",
  },
  {
    // icon: <FaUserTie />,
    title: "Integration",
    description:
      "Connect conversational agents to external systems with AI Studio's API management. Integrate with CRMs, databases, and apps like Slack and Microsoft Teams to expand capabilities.",
    link:"https://docs.digisquares.com/docs/AI%20studio/DataSource/Integration",

    },
  {
    // icon: <FaHeadset />,
    title: "Database Management",
    description:
      "Use AI Studio's robust database tools to store, access, and analyze data for your conversational agents, ensuring scalability, performance, and data integrity.",
    link:"https://docs.digisquares.com/docs/AI%20studio/Library/Library%20Intro",

    },
  {
    // icon: <FaMoneyCheckAlt />,
    title: "AI finetune",
    description:
      "Fine-tuning allows users to improve model performance for specific tasks by training the model with additional data. Use it to enhance task-specific accuracy",
    link:"https://docs.digisquares.com/docs/AI%20studio/Finetune/FinetuneIntro",

    },
];

const resourceItems = [
  {
    title: "AI-Driven Healthcare Solutions",
    image: "/assets/ai/ai-img1.webp" 
  },
  {
    title: " Revolutionizing Tech with AI ",
    image: "/assets/ai/ai-img2.webp" 
  },
  {
    title: "Telecom Innovations through AI",
    image: "/assets/ai/ai-img3.webp" 
  }
];

const AiStudio = () => {
 
  return (
    <>
      <Menu />
      <div className={styles.wrapper}>
      <div className={styles.agentSection}>

        <div className={styles.content}>
          <h1 className={styles.title}>AI Studio</h1>
          <h4 className={styles.description}>
          Seamlessly create, train, and deploy AI models with ease. Scale your solutions quickly while maintaining high performance          </h4>
          <Link href="https://app.digisquares.com/register" className={styles.registerButton}>
        Register
      </Link>
        </div>
        <div>
          <CustomImage
            type="hero"
            src="/assets/Ai_Studio.webp"
            alt="AI Agents"
            className={styles.mainImages}
            priority={true}
          />
        </div>
      </div>
      </div>
<Screen>
      <div className={styles.possibilitySection}>
        
        <h2 className={styles.heading}>
          One studio{" "}
          <span className={styles.highlight}>Infinite possibilities</span>
        </h2>
        <p className={styles.subtext}>
          AI Studio is the ultimate platform for developing, deploying, and
          managing AI models tailored to your business needs. Build smarter,
          faster, and scalable AI solutions with ease.
        </p>
        {/* <div className={styles.videoPlaceholder}></div> */}
        {/* Video Implementation */}
        <div className={styles.videoPlaceholder}>
          <video
            className={styles.videoPlayer}
            // controls
            autoPlay
            muted
            // loop
            // poster="/assets/App studio.webp"
          >
            <source src="/assets/video/AI Studio.mp4" type="video/mp4" />

          </video>
        </div>
      </div>

      <section className={styles.aiSection}>
        <div className={styles.aiContent}>
          <div className={styles.line1}></div>
          <button className={styles.demoButton}>Book a Demo &gt;</button>

          <h2 className={styles.aiHeading}>
            Pre-built <span className={styles.highlight}>Agent Hub</span>
          </h2>
          <p className={styles.aiSubtext}>
            Explore our pre-built, high-accuracy AI models designed to optimize
            workflows, enhance efficiency, and deliver instant insights across
            various industries and use cases.
          </p>

          {/* <div className={styles.line2}></div> */}
          <div className={styles.cardGrid}>
            {agentCards.map((card, idx) => (
              <div key={idx} className={styles.card}>
                {/* <div className={styles.cardIcon}>{card.icon}</div> */}
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

      <section className={styles.integrationSection}>
        <h2 className={styles.integrationTitle}>
          Enterprise – <strong>ready integrations</strong>
        </h2>

        <div className={styles.integrationGrid}>
          <div className={styles.integrationRow}>
            {[
              { name: "OpenAI", file: "OpenAI.svg" },
              { name: "Azure AI", file: "Azure AI.svg" },
              { name: "Vertex AI", file: "Vertex AI.svg" },
              { name: "Cohere AI", file: "Cohere AI.svg" },
              { name: "Stability AI", file: "Stability AI.svg" },
            ].map((integration, index) => (
              <div key={`row1-${index}`} className={styles.integrationCard}>
                <Image
                  src={`/assets/Appstudio/${integration.file}`}
                  alt={`${integration.name} logo`}
                  className={styles.integrationIcon}
                  width={20}
                  height={20}
                />
                <span>{integration.name}</span>
              </div>
            ))}
          </div>

          <div className={styles.integrationRow}>
            {[
              { name: "Anthropic AI", file: "Anthropic AI.svg" },
              { name: "Pinecone", file: "pinecone.svg" },
              { name: "Weaviate Dynamics", file: "Weaviate Dynamics.svg" },
              { name: "MongoDB Atlas", file: "MongoDB Atlas.svg" },
            ].map((integration, index) => (
              <div key={`row2-${index}`} className={styles.integrationCard}>
                <Image
                  src={`/assets/Appstudio/${integration.file}`}
                  alt={`${integration.name} logo`}
                  className={styles.integrationIcon}
                  width={20}
                  height={20}
                />
                <span>{integration.name}</span>
              </div>
            ))}
          </div>

          <div className={styles.integrationRow}>
            {[
              { name: "Qdrant", file: "Qdrant.svg" },
              { name: "DataStax", file: "DataStax.svg" },
              { name: "WhatsApp", file: "WhatsApp.svg" },
              { name: "Front", file: "Front.svg" },
              { name: "SendGrid", file: "SendGrid.svg" },
            ].map((integration, index) => (
              <div key={`row3-${index}`} className={styles.integrationCard}>
                <Image
                  src={`/assets/Appstudio/${integration.file}`}
                  alt={`${integration.name} logo`}
                  className={styles.integrationIcon}
                  width={20}
                  height={20}
                />
                <span>{integration.name}</span>
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

export default AiStudio;
