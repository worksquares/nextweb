import Image from 'next/image';
import { LargeButton } from '../../components/Button/Button';
import CustomImage from "../../components/CustomImage";
import { FeaturesDescription } from '../../components/DescriptionCard';
import HomeSlider from '../../components/HomeSlider';
import MainFooter from "../../components/MainFooter";
import Menu from "../../components/Menu";
import Screen from "../../components/Screen";
import styles from "../../styles/comp/Appstudio.module.css";
import Headseo from "../headseo";

const appCards = [
  {
    id: "Workflow",
    title: "Workflow",
    description:
      "Effortlessly create and automate workflows with AppStudio. Customize templates and use drag-and-drop tools to design processes and integrate services, no coding required.",
    link: "https://docs.digisquares.com/docs/Workflow/WorkFlow%20Intro",
    image: "/assets/description/appWorkflow.webp"
  },
  {
    id: "Pageflow",
    title: "Pageflow",
    description:
      "Page flows are typically created using a drag-and-drop interface, where users can select UI components, arrange them on the canvas, and define the transition logic between screens.",
    link: "https://docs.digisquares.com/docs/PageFlow/PageFlow%20Intro",
    image: "/assets/description/appPageflow.webp"
  },
  {
    id: "Visual Query",
    title: "Visual Query",
    description:
      "Easily build visual queries without needing to write SQL using AppStudio's Visual Query Builder. Drag-and-drop data elements to create powerful queries and generate insights quickly.",
    link: "https://docs.digisquares.com/docs/Library/VisualQuery/visualquery%20Intro",
    image: "/assets/description/appVisualQuery.webp"
  },
  {
    id: "Integrations",
    title: "Integrations",
    description:
      "Create and manage integrations effortlessly with AppStudio's API tools. Define endpoints, control data flow, and ensure secure communication with a user-friendly interface.",
    link: "https://docs.digisquares.com/docs/DataSource/Integration",
    image: "/assets/description/appIntegration.webp"
  },
  {
    id: "Database",
    title: "Database",
    description:
      "Effortlessly manage and scale databases with AppStudio’s intuitive Database Manager, handling schemas, migrations, and performance without deep SQL knowledge.",
    link: "https://docs.digisquares.com/docs/DataSource/Database/Database%20Intro",
    image: "/assets/description/appDatabase.webp"
  },
  {
    id: "SQL Query",
    title: "SQL Query",
    description:
      "The SQL Query feature in our low-code platform simplifies database management by enabling easy creation and execution of SELECT, INSERT, UPDATE, and DELETE queries with AI-assisted generation and parameter management.",
    link: "https://docs.digisquares.com/docs/Library/SQL%20Query",
    image: "/assets/description/appSqlQuery.webp"
  },
  {
    id: "API Configuration",
    title: "API Configuration",
    description:
      "Easily configure and manage your APIs within App Studio. Define endpoints, set request parameters, handle authentication, and monitor API calls — all through a simple visual interface designed for both beginners and advanced users.",
    link: "https://docs.digisquares.com/docs/Library/API%20Config",
    image: "/assets/description/appApiConfiguration.webp"
  },
  {
    id: "UI",
    title: "UI",
    description: "Build intuitive and responsive user interfaces effortlessly using App Studio’s powerful UI Builder. Create pixel-perfect screens with drag-and-drop components and customizable layouts, without writing complex code.",
    link: "https://docs.digisquares.com/docs/UI/UI%20Intro",
    image: "/assets/description/appUiCreation.webp"
  },
  {
    id: "Documents",
    title: "Documents",
    description: "Create and customize professional Email and Document templates, including dynamic PDFs, to automate your communications and reporting within App Studio.",
    link: "https://docs.digisquares.com/docs/Template/Email",
    image: "/assets/description/appDocument.webp"

  },


];

const cards = [
  {
    title: "Healthcare for Smarter Care",
    description:
      "App Studio helps healthcare providers develop apps for patient management, telemedicine, and health records, enhancing care delivery.",
    image: "/assets/slider/As-card-1.webp",
    moreText: "Learn more",
    moreLink: "/industry/Medical/",
  },
  {
    title: "Classroom Apps That Teach",
    description:
      "App Studio empowers educators to build e-learning platforms and student management apps, improving the learning experience.",
    image: "/assets/slider/As-card-2.webp",
    moreText: "Learn more",
    moreLink: "/industry/Education/",
  },
  {
    title: "Manufacturing Workflows",
    description:
      "App Studio enables manufacturers to create apps for workflow, inventory, and quality control, enhancing operational efficiency.",
    image: "/assets/slider/As-card-3.webp",
    moreText: "Learn more",
    moreLink: "/industry/Manufacturing/",
  },
];

const AppStudio = () => {
  return (
    <>
      <Menu />
      <Headseo
        title="App Studio Development Platform | Digisquares"
        heading="Ideas to Apps"
        description="Digisquares is a low code platform that enables you to develop high quality apps 10X faster."
        url="/nextweb/Home"
        img="/assets/Apphero.webp"
      />
      <div className={styles.wrapper}>
        <Screen>
          <div className={styles.agentSection}>
            <div className={styles.content}>
              <h1 className={styles.title}>App Studio</h1>
              <h5 className={styles.description}>
                Turn your innovative ideas into powerful applications effortlessly. Build scalable, high-performance solutions quickly and efficiently
              </h5>
              <LargeButton
                text="Register"
                bgColor="#ff0000"
                color="#fff"
                onClick={() => window.location.href = "https://app.digisquares.com/register"}
                className="MediumButton"
              />
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
            <video className={styles.videoPlayer} muted autoPlay poster="/assets/App studio.webp">
              <source src="/assets/video/App.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <FeaturesDescription
          heading={
            <>
              <h2 className={styles.appHeading}>
                <span className={styles.highlight}>AppStudio</span> Core Capabilities
              </h2>
            </>
          }
          features={appCards}
        />

        <section className={styles.integrationSection}>
          <h2 className={styles.integrationTitle}>
            Enterprise – <strong>ready integrations</strong>
          </h2>
          <div className={styles.integrationGrid}>
            <div className={styles.integrationRow}>
              {[
                "Oracle DB", "Postgres", "MariaDB", "Redis", "Snowflake", "Salesforce", "Asana", "Zoho Books API",
                "Workday", "Servicenow", "Monday", "Freshdesk", "Slack", "SMTP", "Stripe", "Razorpay", "Paypal"
              ].map((name, idx) => {
                const file = name.replace(/\s/g, '') + ".svg";
                return (
                  <div key={idx} className={styles.integrationCard}>
                    <Image
                      src={`/assets/Appstudio/${file}`}
                      alt={`${name} logo`}
                      className={styles.integrationIcon}
                      width={20}
                      height={20}
                    />
                    <span>{name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Screen>

      <HomeSlider cards={cards} />
      <MainFooter />
    </>
  );
};

export default AppStudio;
