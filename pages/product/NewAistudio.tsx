import React from "react";
import Menu from "../../components/Menu";
import styles from "../../styles/comp/Aistudio.module.css";
import MainFooter from "../../components/MainFooter";
import CustomImage from "../../components/CustomImage";
import Image from "next/image";
import Screen from "../../components/Screen";
import Link from 'next/link';
import Headseo from "../headseo";
import AiStudioSlider from "../../components/AiStudioSlider";


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

// const resourceItems = [
//   {
//     title: "AI-Driven Healthcare Solutions",
//     image: "/assets/ai/ai-img1.webp" 
//   },
//   {
//     title: " Revolutionizing Tech with AI ",
//     image: "/assets/ai/ai-img2.webp" 
//   },
//   {
//     title: "Telecom Innovations through AI",
//     image: "/assets/ai/ai-img3.webp" 
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

const AiStudio = () => {
 
  return (
    <>
      <Menu />
      <Headseo
  title={`AI Studio Development Platform | Digisquares`}
  heading={`Accelerate with AI`}
  description={`Leverage AI Studio to build intelligent apps, deploy AI models, and automate workflows—all without writing code.`}
  url={`/nextweb/ai-studio`}
  img={`/assets/AI_hero.webp`}
/>

      <div className={styles.wrapper}>
      <Screen>
      <div className={styles.agentSection}>
        <div className={styles.content}>
          <h1 className={styles.title}>AI Studio</h1>
          <h4 className={styles.description}>
          Seamlessly create, train, and deploy AI models with ease. Scale your solutions quickly while maintaining high performance </h4>
          <Link href="https://app.digisquares.com/register" className={styles.registerButton}>
        Register
      </Link>
        </div>
        <div className={styles.imageContainer}>
          <CustomImage
            type="hero"
            src="/assets/AI_hero.webp"
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
          AI Studio is the ultimate platform for developing, deploying, and
          managing AI models tailored to your business needs. Build smarter,
          faster, and scalable AI solutions with ease.
        </p>
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

      {/* <section className={styles.resourceSection}>
          <span className={styles.redUnderline}></span>
          <div className={styles.resourceContent}>
            <h2 className={styles.resourceTitle}>
              <strong>Resources</strong> to keep you updated
            </h2>
            <div className={styles.resourceGrid}>
              {resourceItems.map((item, index) => {
             

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
        
      

        <AiStudioSlider cards={cards} />
      </Screen>
      <MainFooter />
    </>
  );
};

export default AiStudio;
