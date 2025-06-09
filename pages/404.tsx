import Image from "next/image";
import ImageCardsGrid from "../comp/ImageCardsGrid";
import Screen from "../comp/Screen";
import { CardProps } from "../comp/base/ImageCard";
import NewMenu from "../comp/newMenu";
import MainFooter from "../components/MainFooter";
import styles from "../styles/404.module.css";
import Headseo from "./headseo";

const Custom404 = () => {
  let ImageCardGridData: CardProps[] = [
    {
      image: "/assets/APIEnabledEcosystemMain.webp",
      category: "DIGITAL TRANSFORMATION",
      heading: "API Enabled Ecosystem",
      description: "Role of analytics in unlocking the power of API enabled ecosystems.",
      link: "/blog/APIEnabledEcosystem",
      linktext: "View the article",
    },
    {
      image: "/assets/CloudMigration.webp",
      category: "CLOUD MANAGEMENT",
      heading: "Key Parameters to be considered for Cloud Migration",
      description: "Choosing the right cloud provider is the first step for any organization planning to adopt public cloud services.",
      link: "/blog/KeyParamCloudMigration",
      linktext: "View the article",
    },
    {
      image: "/assets/Saas-Main.webp",
      category: "SECURITY",
      heading: "Surveyed enterprises most used software as a service for automation",
      description: "Applications running in the cloud and data stored there are not protected by a traditional corporatesecurity perimeter of firewalls and the like.",
      link: "/blog/CybersecurityinDigitalEra",
      linktext: "View the article",
    },
    {
      image: "/assets/DatabaseSoftwareMain.webp",
      category: "DATABASE",
      heading: "Database Software",
      description: "Price Indexes for PC Database Software and the Value of Code Compatibility",
      link: "/blog/DatabaseSoftware",
      linktext: "View the article",
    },
    {
      image: "/assets/ezgif.com-gif-maker (2).webp",
      category: "IT MANAGEMENT",
      heading: "Deploying AI at scale",
      description: "A glimpse into the future of manufacturing can be found at FANUC’s plant in Oshino, Japan.",
      link: "/blog/Deployingscale",
      linktext: "View the article",
    },
    {
      image: "/assets/GovernanceComp.webp",
      category: "GOVERNANCE",
      heading: "Multi Cloud Governance",
      description: "AI-powered Multi-Cloud Governance at Scale",
      link: "/blog/MultiCloudGovernance",
      linktext: "View the article",
    },
    {
      image: "/assets/AI-foto-generale.webp",
      category: "AI AND AUTOMATION",
      heading: "Revolutionizing",
      description: "What Is GPT-3 And Why Is It Revolutionizing Artificial Intelligence.",
      link: "/blog/Revolutionizing",
      linktext: "View the article",
    },
    {
      image: "/assets/CloudEnabledAI Main.webp",
      category: "CLOUD MANAGEMENT",
      heading: "Cloud Enabled AI",
      description: "How Cloud-Enabled AI will Drive Business Value in the Future.",
      link: "/blog/CloudEnabledAI",
      linktext: "View the article",
    },
    {
      image: "/assets/BlockChainMain.webp",
      category: "Digisquares Platform",
      heading: "Security Privacy of Blockchain",
      description: "Additional Security and Privacy Properties of Blockchain",
      link: "/blog/SecurityPrivacyofBlockchain",
      linktext: "View the article",
    },
    {
      image: "/assets/DBSecurityMain.webp",
      category: "CYBER SECURITY AND RISKS",
      heading: "Understanding Comprehensive Database Security",
      description: "To secure a database, especially large databases supporting ERP platforms there are two primary challenges complexity and time.",
      link: "/blog/ComprehensiveDbSecurity",
      linktext: "View the article",
    },
  ];
  return (
    <div className={styles.PageContainer}>
      <Headseo
        title={`Digisquares | Page Error`}
        heading={`PageError`}
        description={`Sorry, the page you requested was not found. Easily explore our products using the links below`}
        url={`/page404/PageError`}
        keywords={`Page not found, 404 page, Page error`}
      />
      <div className={styles.PageMenuPart}>
        <NewMenu />
      </div>
      <Screen>
        <div className={styles.PageHeaderPart}>
          <div className={styles.PageHeaderInfo}>
            <h2>Page not found</h2>
            <p>Sorry, the page you requested was not found. Easily explore our products using the links below.</p>
          </div>
          <div className={styles.PageErrorImage}>
            <Image src="/assets/pagenotfound404.webp" alt="Page not found" layout="intrinsic" width="1300" height="800" unoptimized={true} className={styles.PageHeaderPartImg} />
          </div>
        </div>
      </Screen>
      <Screen>
        <div className={styles.PageCardPart}>
          <div className={styles.HeadingPart}>
            <h1>Digisquares Products</h1>
          </div>
          <div className={styles.CardContainerNew}>
            <ImageCardsGrid ImageCardPropsList={ImageCardGridData} />
          </div>
        </div>
      </Screen>
      <div>
        {/* <NewFooter /> */}
        <MainFooter />
      </div>
    </div>
  );
};

export default Custom404;
