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
import AgentStudioSlider from "../../components/AgentStudioSlider";




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

// const resourceItems = [
//   {
//     title: "Empowering Healthcare Agents",
//     image: "/assets/agent/agentimg1.webp" 
//   },
//   {
//     title: " Revolutionizing Banking Agents ",
//     image: "/assets/agent/agentimg2.webp" 
//   },
//   {
//     title: "AI for Government Services",
//     image: "/assets/agent/agentimg3.webp" 
//   }
// ];

const cards = [
  {
    title: "Creating Responsible AI Models",
    description:
      "As AI technology becomes more integrated into our daily lives, the importance of ethical AI focused on fairness, transparency and compliance continues to grow. Building ethical AI models means minimizing bias, ensuring accountability and adhering to industry standards.",
    image: "/assets/Blogs/blogSlideImages/ResponsibleAIModels_Slider.webp",
    moreText: "Learn more",
    moreLink: "/blog/ResponsibleAIModels",
  },
  {
    title: "Satisfaction with Agent Studio",
    description:
      "In an era where customers expect personalized, responsive, and seamless interactions, businesses must go beyond one-size-fits-all solutions to build lasting relationships. By harnessing the power of artificial intelligence, companies can create tailored experiences that resonate with individual customers.",
    image: "/assets/Blogs/blogSlideImages/CustomerSatisfactionwithAgentStudio_Slider.webp",
    moreText: "Learn more",
    moreLink: "/blog/CustomerSatisfactionwithAgentStudio",
  },
  {
    title: "Workflows with AppStudio",
    description:
      "As businesses continue to evolve in a digital-first world, the pressure to improve efficiency and reduce costs has never been greater. Manual processes and repetitive tasks can slow down operations, consume valuable resources, and limit a company’s ability to focus on high-impact initiatives.",
    image: "/assets/Blogs/blogSlideImages/WorkflowswithAppStudio_Slider.webp",
    moreText: "Learn more",
    moreLink: "/blog/WorkflowswithAppStudio",
  },
  {
    title: "AI in Agent Studio",
    description:
      "In today’s digital-first world, customer expectations are higher than ever. They demand fast, personalized service that is available 24/7, across a range of channels. Meeting these demands can be a challenge, especially for companies that rely on traditional customer service models.",
    image: "/assets/Blogs/blogSlideImages/AIinAgentStudio_Slider.webp",
    moreText: "Learn more",
    moreLink: "/blog/AIinAgentStudio",
  },
  {
    title: "AppStudio’s Security Features",
    description:
      "In an increasingly digital world, application security is paramount. With cyber threats on the rise, businesses must ensure that the apps they develop are secure and resilient against potential attacks.",
    image: "/assets/Blogs/blogSlideImages/AppStudioSecurityFeatures_Slider.webp",
    moreText: "Learn more",
    moreLink: "/blog/AppStudioSecurityFeatures",
  },
  {
    title: "AI-Powered Automation",
    description:
      "In the fast-paced world of IT, reducing Mean Time to Repair (MTTR) is critical for maintaining operational efficiency and minimizing the impact of incidents and outages.",
    image: "/assets/Blogs/blogSlideImages/AIPoweredAutomation_Slider.webp",
    moreText: "Learn more",
    moreLink: "/blog/AIPoweredAutomation",
  },
  {
    title: "Building a Secure SaaS Ecosystem",
    description:
      "In today’s interconnected digital landscape, no organization is immune to cyberattacks. From ransomware to data breaches, cybersecurity threats are evolving rapidly, putting immense pressure on businesses to safeguard their critical systems and data.",
    image: "/assets/Blogs/blogSlideImages/ImprovingSAASCybersecurity_Slider.webp",
    moreText: "Learn more",
    moreLink: "/blog/ImprovingSAASCybersecurity",
  },
  {
    title: "AI in Service Management Platforms",
    description:
      "The rapid advancement of AI-powered chatbots is reshaping the way businesses interact with both customers and internal systems. These intelligent chatbots, driven by AI and machine learning, have the ability to understand human language, deliver personalized responses, and automate routine tasks.",
    image: "/assets/Blogs/blogSlideImages/AIinServiceManagement_Slider.webp",
    moreText: "Learn more",
    moreLink: "/blog/AIinServiceManagement",
  },
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

      {/* <section className={styles.resourceSection}>
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
        </section> */}
        <AgentStudioSlider cards={cards} />
        
      </Screen>

      <MainFooter />
    </>
  );
};

export default AgentStudio;
