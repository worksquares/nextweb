import Image from "next/image";
import { LargeButton } from "../../components/Button";
import CustomImage from "../../components/CustomImage";
import { FeaturesDescription } from "../../components/DescriptionCard";
import HomeSlider from "../../components/HomeSlider";
import MainFooter from "../../components/MainFooter";
import Menu from "../../components/Menu";
import Screen from "../../components/Screen";
import styles from "../../styles/comp/Aistudio.module.css";
import Headseo from "../headseo";


// import {
//   FaBan,
//   FaChartLine,
//   FaBullhorn,
//   FaUserTie,
//   FaHeadset,
//   FaMoneyCheckAlt,
// } from "react-icons/fa";

const aiCards = [
  {
    // icon: <FaBan />,
    title: "Build Agents",
    description:
      "Effortlessly design intelligent conversational agents in Digisquares AI Studio with pre-built templates and a drag-and-drop interface for customization.",
    link:"https://docs.digisquares.com/docs/Apps/Copilot/OverView",
     image: "/assets/description/aiAgentBuilder.webp"
    },
  {
    // icon: <FaChartLine />,
    title: "Interaction",
    description:
      "Easily manage user interactions in AI Studio by defining roles, setting permissions, and monitoring engagement metrics, all with advanced security settings to optimize agent performance",
    link:"https://docs.digisquares.com/docs/Apps/Copilot/OverView",
    image: "/assets/description/aiInteraction.webp"
    },
  {
    // icon: <FaBullhorn />,
    title: "Playground",
    description:
      "Playground allows for the customization of models, adjusting parameters, and comparing outputs side-by-side to fine-tune performance. Ideal for developers, it helps in refining AI configurations for optimal results.",
    link:"https://docs.digisquares.com/docs/Apps/Copilot/OverView",
    image: "/assets/description/aiPlayground.webp"
  },
  {
    // icon: <FaUserTie />,
    title: "Integration",
    description:
      "Connect conversational agents to external systems with AI Studio's API management. Integrate with CRMs, databases, and apps like Slack and Microsoft Teams to expand capabilities.",
    link:"https://docs.digisquares.com/docs/AI%20studio/Playground/PlaygroundIntro",
    image: "/assets/description/agentInteraction.webp"

    },
  {
    // icon: <FaHeadset />,
    title: "Database Management",
    description:
      "Use AI Studio's robust database tools to store, access, and analyze data for your conversational agents, ensuring scalability, performance, and data integrity.",
    link:"https://docs.digisquares.com/docs/AI%20studio/Library/Library%20Intro",
    image: "/assets/description/aiDatabaseManagement.webp"

    },
  {
    // icon: <FaMoneyCheckAlt />,
    title: "AI finetune",
    description:
      "Fine-tuning allows users to improve model performance for specific tasks by training the model with additional data. Use it to enhance task-specific accuracy",
    link:"https://docs.digisquares.com/docs/AI%20studio/Finetune/FinetuneIntro",
    image: "/assets/description/aiFineTune.webp"
    },

    {
      title: "Model Deployment",
      description:
        "Easily deploy your trained AI models using AI Studio’s intuitive deployment wizard. Configure environments, monitor status, and manage versions seamlessly.",
      link: "https://docs.digisquares.com/docs/AI%20studio/ModaldeployCreate",
      image: "/assets/description/aiModelDeployment.webp",
    },
    {
      title: "Model Gallery",
      description:
        "Explore and manage a comprehensive gallery of AI models within AI Studio. Easily browse, select, and utilize pre-built or custom models to accelerate your AI projects.",
      link: "https://docs.digisquares.com/docs/AI%20studio/Modalgallery/ModalgalleryCreate",
      image: "/assets/description/aiModelGallery.webp",
    },
    {
      title: "Multi-Channel Deployment",
      description:
        "Deploy AI agents seamlessly across multiple platforms such as websites, mobile apps, social media, and messaging apps to reach users wherever they are.",
      link: "https://docs.digisquares.com/docs/AI%20studio/Deployment/DeploymentIntro",
      image: "/assets/description/aiMultiChannelDeployment.webp",
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
      title: 'AI-Driven Healthcare Solutions',
      description: 'AI Studio enables healthcare providers to fine-tune AI models for diagnostics, patient monitoring, and predictive analytics, enhancing healthcare services.',
      image: '/assets/slider/Ai-card-1.webp',
      // demoLink: '/demo/medical-ai',
      moreLink: '/industry/Medical/',
      moreText: "Learn more",
    },
    {
      title: 'Revolutionizing Tech with AI',
      description: 'AI Studio helps tech companies fine-tune AI models for software automation, data processing, and predictive maintenance, driving technological innovation.',
      image: '/assets/slider/Ai-card-2.webp',
      demoLink: '/demo/technology-ai',
      moreLink: '/industry/Technologies/',
      moreText: "Learn more",
    },
    {
      title: 'Telecom Innovations through AI',
      description: 'AI Studio supports telecom providers in optimizing network operations, enhancing customer service, and implementing AI-driven predictive maintenance solutions.',
      image: '/assets/slider/Ai-card-3.webp',
      demoLink: '/demo/telecom-ai',
      moreLink: '/industry/TeleCommunication/',
      moreText: "Learn more",
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
          <h5 className={styles.description}>
          Seamlessly create, train, and deploy AI models with ease. Scale your solutions quickly while maintaining high performance </h5>

          {/* <div className={styles.GetStartedBtn}>
          <Link legacyBehavior href="https://app.digisquares.com/register">
                  <a className={styles.registerButton} rel="nofollow">Register</a>
          </Link>
          </div> */}
             <LargeButton
                      text="Register"
                      bgColor="#ff0000"
                      color="#fff"
                      onClick={() => window.location.href = "https://app.digisquares.com/register"}
                      className="MediumButton"
                      hoverBgColor="#f4f4f4"
                      hoverTextColor="#000000"
                  />
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

      {/* <section className={styles.aiSection}>
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

          <div className={styles.line2}></div>
          <div className={styles.cardGrid}>
            {agentCards.map((card, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.cardIcon}>{card.icon}</div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
                <Link href={card.link} className={styles.cardButton}>
                    Explore All
                  </Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <FeaturesDescription
      heading={
        <>
        <h2 className={styles.aiHeading}>
        {/* Pre-built <span className={styles.highlight}>Agent Hub</span> */}
        <span className={styles.highlight}>AI</span> Building Blocks
      </h2>
      {/* <p className={styles.aiSubtext}>
        Explore our pre-built, high-accuracy AI models designed to optimize
        workflows, enhance efficiency, and deliver instant insights across
        various industries and use cases.
      </p> */}
      </>
      }
      features={aiCards} />

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
              { name: "Anthropic AI", file: "Anthropic AI.svg" },
              { name: "Pinecone", file: "pinecone.svg" },
              { name: "Weaviate Dynamics", file: "Weaviate Dynamics.svg" },
              { name: "MongoDB Atlas", file: "MongoDB Atlas.svg" },
              { name: "Qdrant", file: "Qdrant.svg" },
              { name: "DataStax", file: "DataStax.svg" },
              { name: "MySQL", file: "MySQL.svg" },
              { name: "MicrosoftSQL", file: "MicrosoftSQL.svg" },
              { name: "MongoDB", file: "MongoDB.svg" },
              { name: "BigQuery", file: "BigQuery.svg" },
              { name: "Cassandra", file: "Cassandra.svg" },
              // { name: "Freshdesk", file: "Freshdesk.svg" },
              // { name: "Anthropic AI", file: "Anthropic AI.svg" },


              // { name: "Google Analytics API", file: "Google Analytics API.svg" },
              // { name: "BigID", file: "BigID.svg" },

              // { name: "WhatsApp", file: "WhatsApp.svg" },
              // { name: "Front", file: "Front.svg" },
              // { name: "SendGrid", file: "SendGrid.svg" },
              // { name: "GraphQL", file: "GraphQL.svg" },
              // { name: "AppDynamics", file: "AppDynamics.svg" },
              // { name: "AppDynamics", file: "AppDynamics.svg" },
              // { name: "Asana", file: "Asana.svg" },
              // { name: "Auth0", file: "Auth0.svg" },
              // { name: "Authorize.Net", file: "Authorize.Net.svg" },
              // { name: "Cloud Data Store", file: "CloudDataStore.svg" },
              // { name: "Intercom", file: "Intercom.svg" },
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

          {/* <div className={styles.integrationRow}>
            {[
              { name: "Anthropic AI", file: "Anthropic AI.svg" },
              { name: "Pinecone", file: "pinecone.svg" },
              { name: "Weaviate Dynamics", file: "Weaviate Dynamics.svg" },
              { name: "MongoDB Atlas", file: "MongoDB Atlas.svg" },
              { name: "Google Analytics API", file: "Google Analytics API.svg" },
              { name: "BigID", file: "BigID.svg" },
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
              { name: "GraphQL", file: "GraphQL.svg" },
              { name: "AppDynamics", file: "AppDynamics.svg" },
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
          <div className={styles.integrationRow}>
            {[
              { name: "AppDynamics", file: "AppDynamics.svg" },
              { name: "Asana", file: "Asana.svg" },
              { name: "Auth0", file: "Auth0.svg" },
              { name: "Authorize.Net", file: "Authorize.Net.svg" },
              { name: "Cloud Data Store", file: "CloudDataStore.svg" },
              { name: "Intercom", file: "Intercom.svg" },
            ].map((integration, index) => (
              <div key={`row4-${index}`} className={styles.integrationCard}>
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
          </div> */}
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



        {/* <AiStudioSlider cards={cards} /> */}
      </Screen>
      <HomeSlider cards={cards} />
      <MainFooter />
    </>
  );
};

export default AiStudio;
