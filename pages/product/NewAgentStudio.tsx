import React from "react";
import Menu from "../../components/Menu";
import styles from "../../styles/comp/Agentstudio.module.css";
import MainFooter from "../../components/MainFooter";
import AiAgentRecruiter from "../../pages/product/AiAgentRecruiter";
import CustomImage from "../../components/CustomImage";
import Image from "next/image";
import Screen from "../../components/Screen";
import Link from 'next/link';
import Headseo from "../headseo";




const agentCards = [
  {
   
    title: "Conversational AI",
    description:
      "Create AI chatbots and voice assistants effortlessly with Digisquares Agent Studio. Choose templates and customize using a simple drag-and-drop interface.",
    link:"https://docs.digisquares.com/docs/Apps/Copilot/OverView",
    },
  {
    
    title: "Interactions",
    description:
      "Manage user interactions in Agent Studio with ease. Assign roles, set permissions, and track engagement metrics to secure access and optimize AI agents.",
    link:"https://docs.digisquares.com/docs/Apps/Copilot/OverView",
    },
  {
    
    title: "Access Control",
    description:
      "Agent Studio allows role-based team management for secure agent design and deployment, while boosting marketing with AI-powered campaigns, SEO tools, and actionable analytics",
    link:"https://docs.digisquares.com/docs/Apps/Copilot/OverView",
    },
  {
    
    title: "Manage APIs",
    description:
      "Use Agent Studio's API management tools to connect conversational agents to external systems. Integrate seamlessly with third-party apps, CRMs, or databases to expand agent capabilities.",
    link:"https://docs.digisquares.com/docs/Apps/Copilot/OverView",
},
  {
    
    title: "Data Management",
    description:
      "Agent Studio enables real-time data access and database management, optimizing conversational agents for 24/7 AI support, ticket handling, sentiment analysis, and instant issue resolution",
    link:"https://docs.digisquares.com/docs/Apps/Copilot/OverView",
    },
  {
    
    title: "Flowbuilder",
    description:
      "The Flow Builder automates workflows visually, helping users streamline tasks, integrate systems, and improve efficiency",
    link:"https://docs.digisquares.com/docs/Agent%20studio/Flowbuilder/FlowbuilderIntro",
    },
];

const resourceItems = [
  {
    title: "Empowering Healthcare Agents",
    image: "/assets/agent/agentimg1.webp" 
  },
  {
    title: " Revolutionizing Banking Agents ",
    image: "/assets/agent/agentimg2.webp" 
  },
  {
    title: "AI for Government Services",
    image: "/assets/agent/agentimg3.webp" 
  }
];


const AgentStudio = () => {
  

  return (
    <>
      <Menu />
      <Headseo
  title={`Agent Studio Builder | Digisquares`}
  heading={`Build Autonomous Agents`}
  description={`Agent Studio empowers you to create and orchestrate powerful AI agents with no-code tools—integrate, automate, and deploy with ease.`}
  url={`/nextweb/agent-studio`}
  img={`/assets/AgentHero.webp`}
/>

      <div className={styles.wrapper}>
      <Screen>
      <div className={styles.agentSection}>
        <div className={styles.content}>
          <h1 className={styles.title}>Agent Studio</h1>
          <h4 className={styles.description}>
          Design, personalize, and deploy AI-powered chatbots and voice agents with ease to enhance user interactions          </h4>
          <Link href="https://app.digisquares.com/register" className={styles.registerButton}>
        Register
      </Link>
        </div>
        <div className={styles.imageContainer}>
          <CustomImage
            type="hero"
            src="/assets/AgentHero.webp"
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
          One studio{" "}
          <span className={styles.highlight}>Infinite possibilities</span>
        </h2>
        <p className={styles.subtext}>
        Agent Studio is the only platform you need to create, deploy, and
    manage AI agents tailored for your business. Build smarter, faster,
    and scalable AI solutions in just a few clicks.
        </p>
        <div className={styles.videoPlaceholder}>
          <video
            className={styles.videoPlayer}
            autoPlay
            muted
          >
            <source src="/assets/video/Agent.mp4" type="video/mp4" />

          </video>
        </div>
        <AiAgentRecruiter />
      </div>


      <section className={styles.agentSections}>
        <div className={styles.agentContent}>
          <div className={styles.line1}></div>
          <button className={styles.demoButton}>Book a Demo &gt;</button>

          <h2 className={styles.agentHeading}>
            Pre-built <span className={styles.highlight}>Agent Hub</span>
          </h2>
          <p className={styles.agentSubtext}>
            Explore our pre-built, high-accuracy AI agents that are trained to
            optimize workflows, enhance efficiency, and deliver instant results
            across industries and functions.
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
              { name: "Facebook", file: "Facebook.svg" },
              { name: "GmailAPI", file: "GmailAPI.svg" },
              { name: "Pinecone", file: "pinecone.svg" },
              { name: "Google", file: "Google.svg" },
              { name: "Telegram", file: "Telegram.svg" },
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
              { name: "OracleDB", file: "OracleDB.svg" },
              { name: "Jira", file: "Jira.svg" },
              { name: "Twilio", file: "Twilio.svg" },
              { name: "SMTP", file: "SMTP.svg" },
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
              { name: "Slack", file: "Slack.svg" },
              { name: "ZohoMail", file: "ZohoMail.svg" },
              { name: "Tableau", file: "Tableau.svg" },
              { name: "Datadog", file: "Datadog.svg" },
              { name: "MongoDBAtlas", file: "MongoDB Atlas.svg" },
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
                      {item.title}
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

export default AgentStudio;
