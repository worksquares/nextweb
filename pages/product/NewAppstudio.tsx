import Image from 'next/image';
import Link from 'next/link';
import CustomImage from "../../components/CustomImage";
import MainFooter from "../../components/MainFooter";
import Menu from "../../components/Menu";
import NewHomeSlider from '../../components/NewHomeSlider';
import Screen from "../../components/Screen";
import styles from "../../styles/comp/Appstudio.module.css";
import Headseo from "../headseo";
import { FeaturesDescription } from './DescriptionCard';

const appCards = [
  {
    id:"Workflow",
    title: "Workflow",
    description:
      "Effortlessly create and automate workflows with AppStudio. Customize templates and use drag-and-drop tools to design processes and integrate services, no coding required.",
    link: "https://docs.digisquares.com/docs/Workflow/WorkFlow%20Intro",
    image: "/assets/Hero & cards/cards/As-card-1.webp"

  },
  {
    id:"Pageflow",
    title: "Pageflow",
    description:
      "Page flows are typically created using a drag-and-drop interface, where users can select UI components, arrange them on the canvas, and define the transition logic between screens.",
    link: "https://docs.digisquares.com/docs/PageFlow/PageFlow%20Intro"
  },
  {
    id:"Visual Query",
    title: "Visual Query",
    description:
      "Easily build visual queries without needing to write SQL using AppStudio's Visual Query Builder. Drag-and-drop data elements to create powerful queries and generate insights quickly.",
    link: "https://docs.digisquares.com/docs/Library/VisualQuery/visualquery%20Intro"
  },
  {
    id:"Integrations",
    title: "Integrations",
    description:
      "Create and manage integrations effortlessly with AppStudio's API tools. Define endpoints, control data flow, and ensure secure communication with a user-friendly interface.",
    link: "https://docs.digisquares.com/docs/DataSource/Integration"
  },
  {
    id:"Database",
    title: "Database",
    description:
      "Effortlessly manage and scale databases with AppStudio’s intuitive Database Manager, handling schemas, migrations, and performance without deep SQL knowledge.",
    link: "https://docs.digisquares.com/docs/DataSource/Database/Database%20Intro"
  },
  {
    id:"SQL Query",
    title: "SQL Query",
    description:
      "The SQL Query feature in our low-code platform simplifies database management by enabling easy creation and execution of SELECT, INSERT, UPDATE, and DELETE queries with AI-assisted generation and parameter management.",
    link: "https://docs.digisquares.com/docs/Library/SQL%20Query"
  },
];

// const resourceItems = [
//   {
//     title: "Healthcare for Smarter Care",
//     image: "/assets/app/appimg1.webp"
//   },
//   {
//     title: "Classroom Apps That Teach",
//     image: "/assets/app/appimg2.webp"
//   },
//   {
//     title: "Manufacturing Workflows",
//     image: "/assets/app/appimg3.webp"
//   }
// ];
const cards = [
  {
    title: "Healthcare for Smarter Care",
    description:
      "App Studio helps healthcare providers develop apps for patient management, telemedicine, and health records, enhancing care delivery.",
    image: "/assets/Hero & cards/cards/As-card-1.webp",
    moreText: "Learn more",
    moreLink: "/industry/Medical/",
    // demoLink: "/demo/medical-apps",
  },
  {
    title: "Classroom Apps That Teach",
    description:
      "App Studio empowers educators to build e-learning platforms and student management apps, improving the learning experience.",
    image: "/assets/Hero & cards/cards/As-card-2.webp",
    moreText: "Learn more",
    moreLink: "/industry/Education/",
    // demoLink: "/demo/manufacturing-apps",
  },
  {
    title: "Manufacturing Workflows",
    description:
      "App Studio enables manufacturers to create apps for workflow, inventory, and quality control, enhancing operational efficiency.",
    image: "/assets/Hero & cards/cards/As-card-3.webp",
    moreText: "Learn more",
    moreLink: "/industry/Manufacturing/",
    // demoLink: "/demo/manufacturing-apps",
  },

];

const AppStudio = () => {
  return (
    <>
      <Menu />

      <Headseo
        title={` App Studio Development Platform | Digisquares`}
        heading={`Ideas to Apps`}
        description={`Digisquares is a low code platform that enables you to develop high quality apps 10X faster.`}
        url={`/nextweb/Home`}
        img={`/assets/Apphero.webp`}
      />

      <div className={styles.wrapper}>
      <Screen>
      <div className={styles.agentSection}>
        <div className={styles.content}>
          <h1 className={styles.title}>App Studio</h1>
          <h5 className={styles.description}>
          Turn your innovative ideas into powerful applications effortlessly. Build scalable, high-performance solutions quickly and efficiently          </h5>

          <div className={styles.GetStartedBtn}>
          <Link legacyBehavior href="https://app.digisquares.com/register">
                  <a className={styles.registerButton} rel="nofollow">Register</a>
                   </Link>

      </div>

          {/* <Link href="https://app.digisquares.com/register" className={styles.registerButton}>
        Register
      </Link> */}
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

        {/* <section className={styles.appSection}>
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
        </section> */}

        <FeaturesDescription
         heading={
          <>
            <h2 className={styles.appHeading}>
              Pre-built <span className={styles.highlight}>App Hub</span>
            </h2>
            <p className={styles.appSubtext}>
              Explore our pre-built, high-performance apps designed to streamline workflows,
              boost efficiency, and deliver instant results across various industries and functions.
            </p>
          </>
        }
        features={appCards} />



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
                      {item?.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section> */}


        {/* <AppStudioSlider cards={cards} /> */}
        <section className={styles.integrationSection}>
        <h2 className={styles.integrationTitle}>
          Enterprise – <strong>ready integrations</strong>
        </h2>

        <div className={styles.integrationGrid}>
          <div className={styles.integrationRow}>
            {[
              { name: "Oracle DB", file: "OracleDB.svg" },
              { name: "Postgres", file: "Postgres.svg" },
              { name: "MariaDB", file: "MariaDB.svg" },
              { name: "Redis", file: "Redis.svg" },
              { name: "Snowflake", file: "Snowflake.svg" },
              { name: "Salesforce", file: "Salesforce.svg" },
              { name: "Asana", file: "Asana.svg" },
              { name: "Zoho Books API", file: "Zoho Books API.svg" },
              { name: "Workday", file: "Workday.svg" },
              { name: "Servicenow", file: "Servicenow.svg" },
              { name: "Monday", file: "Monday.svg" },
              { name: "Freshdesk", file: "Freshdesk.svg" },
              // { name: "Azure", file: "Azure.svg" },
              // { name: "Basecamp", file: "Basecamp.svg" },
              // { name: "BigID", file: "BigID.svg" },
              // { name: "CloudDatastore", file: "CloudDatastore.svg" },
              // { name: "ElasticSearch", file: "ElasticSearch.svg" },
              // { name: "Razorpay", file: "Razorpay.svg" },
              // { name: "Braintree", file: "Braintree.svg" },
              // { name: "Cassandra", file: "Cassandra.svg" },
              // { name: "CircleCI", file: "CircleCI.svg" },
              // { name: "Zoho Books API", file: "Zoho Books API.svg" },
              // { name: "Zoho Invoice", file: "Zoho Invoice.svg" },
              // { name: "Intercom", file: "Intercom.svg" },
              // { name: "Zoho CRM", file: "ZohoCRM.svg" },
              // { name: "BigQuery", file: "BigQuery.svg" },
              // { name: "Dynatrace", file: "Dynatrace.svg" },
              // { name: "CosmosDB", file: "CosmosDB.svg" },
              // { name: "CouchDB", file: "CouchDB.svg" },
              // { name: "Denodo", file: "Denodo.svg" },
              // { name: "Salesforce", file: "Salesforce.svg" },
              // { name: "Stripe", file: "Stripe.svg" },
              // { name: "Docusign", file: "Docusign.svg" },
              // { name: "DynamoDB", file: "DynamoDB.svg" },
              // { name: "Close", file: "Close.svg" },
              // { name: "Box", file: "Box.svg" },


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
{/*
          <div className={styles.integrationRow}>
            {[
              { name: "Braintree", file: "Braintree.svg" },
              { name: "Freshdesk", file: "Freshdesk.svg" },
              { name: "Cassandra", file: "Cassandra.svg" },
              { name: "CircleCI", file: "CircleCI.svg" },
              { name: "Intercom", file: "Intercom.svg" },
              { name: "Zoho CRM", file: "ZohoCRM.svg" },
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
              { name: "Close", file: "Close.svg" },
              { name: "Dynatrace", file: "Dynatrace.svg" },
              { name: "CosmosDB", file: "CosmosDB.svg" },
              { name: "CouchDB", file: "CouchDB.svg" },
              { name: "Denodo", file: "Denodo.svg" },
              { name: "Salesforce", file: "Salesforce.svg" },
              { name: "Stripe", file: "Stripe.svg" },

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
              { name: "Docusign", file: "Docusign.svg" },
              { name: "DynamoDB", file: "DynamoDB.svg" },
              { name: "CloudDatastore", file: "CloudDatastore.svg" },
              { name: "ElasticSearch", file: "ElasticSearch.svg" },
              { name: "Zoho Books API", file: "Zoho Books API.svg" },
              { name: "Zoho Invoice", file: "Zoho Invoice.svg" },
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
          </div></section>
      </Screen>
      <NewHomeSlider cards={cards} />





      <MainFooter />
    </>
  );
};

export default AppStudio;
