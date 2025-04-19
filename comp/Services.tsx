import React from "react";
import styles from "../styles/nextweb/Services.module.css";
import ImageCardsGrid from "./ImageCardsGrid";
import { CardProps } from "./base/ImageCard";

const Services = () => {
  let ImageCardGridData: CardProps[] = [
    {
      image: "/assets/Digital transformation.svg",
      category: "DIGITAL TRANSFORMATION",
      heading: "",
      description: "Role of analytics in unlocking the power of API enabled ecosystems.",
      link: "/blog/APIEnabledEcosystem",
      linktext: "View the article",
    },
    {
      image: "/assets/Cloud hosting.svg",
      category: "CLOUD MANAGEMENT",
      heading: "",
      description: "Choosing the right cloud provider is the first step for any organization planning to adopt public cloud services.",
      link: "/blog/KeyParamCloudMigration",
      linktext: "View the article",
    },
    {
      image: "/assets/Security.svg",
      category: "SECURITY",
      heading: "",
      description: "Applications running in the cloud and data stored there are not protected by a traditional corporatesecurity perimeter of firewalls and the like.",
      link: "/blog/CybersecurityinDigitalEra",
      linktext: "View the article",
    },
    {
      image: "/assets/Server.svg",
      category: "DATABASE",
      heading: "",
      description: "Price Indexes for PC Database Software and the Value of Code Compatibility",
      link: "/blog/DatabaseSoftware",
      linktext: "View the article",
    },
    {
      image: "/assets/Management.svg",
      category: "IT MANAGEMENT",
      heading: "",
      description: "A glimpse into the future of manufacturing can be found at FANUC’s plant in Oshino, Japan.",
      link: "/blog/Deployingscale",
      linktext: "View the article",
    },
    {
      image: "/assets/Governance.svg",
      category: "GOVERNANCE",
      heading: "",
      description: "AI-powered Multi-Cloud Governance at Scale",
      link: "/blog/MultiCloudGovernance",
      linktext: "View the article",
    },
    {
      image: "/assets/AI-foto-generale.webp",
      category: "AI AND AUTOMATION",
      heading: "",
      description: "What Is GPT-3 And Why Is It Revolutionizing Artificial Intelligence.",
      link: "/blog/Revolutionizing",
      linktext: "View the article",
    },
    {
      image: "/assets/CloudEnabledAI Main.webp",
      category: "CLOUD MANAGEMENT",
      heading: "",
      description: "How Cloud-Enabled AI will Drive Business Value in the Future.",
      link: "/blog/CloudEnabledAI",
      linktext: "View the article",
    },
    {
      image: "/assets/BlockChainMain.webp",
      category: "Digisquares Platform",
      heading: "",
      description: "Additional Security and Privacy Properties of Blockchain",
      link: "/blog/SecurityPrivacyofBlockchain",
      linktext: "View the article",
    },
    {
      image: "/assets/DBSecurityMain.webp",
      category: "CYBER SECURITY AND RISKS",
      heading: "",
      description: "To secure a database, especially large databases supporting ERP platforms there are two primary challenges complexity and time.",
      link: "/blog/ComprehensiveDbSecurity",
      linktext: "View the article",
    },
    {
      image: "/assets/SecurityThreatsMain.webp",
      category: "DATABASE MANAGEMENT",
      heading: "",
      description: "When someone is granted database privileges that exceed the requirements of their job function, these privileges can be abused.",
      link: "/blog/TopDatabaseSecurityThreats",
      linktext: "View the article",
    },
    {
      image: "/assets/Data-Warehouse.webp",
      category: "Digisquares Platform",
      heading: "",
      description: "The harsh reality of data warehousing is that conventional solutions are simply too costly",
      link: "/blog/ReinventingDataWarehouse",
      linktext: "View the article",
    },
  ];

  return (
    <div className={styles.CardMainContainer}>
      <div className={styles.CardContainerNew}>
        <ImageCardsGrid ImageCardPropsList={ImageCardGridData} />
      </div>

      {/* <div className={styles.ResponsiveFooterDetails}>
                <div className={styles.FooterDetails1}>
                    <div className={styles.ResponsiveFooterDetails1}>
                        <p>Request info or schedule a demo</p>
                        <div className={styles.ResponsiveFooterDetails2}>
                            <p>Contact</p>
                        </div>
                    </div>
                </div>
                <div className={styles.FooterDetails2}>
                    <select name="language" id="language" className={styles.LangSelect}>
                        <option value="English" className="option">English</option>
                        <option value="English(UK)">English(UK)</option>
                        <option value="Nederlands">Nederlands</option>
                        <option value="Français">Français</option>
                        <option value="Deutsch">Deutsch</option>
                        <option value="Italiano">Italiano</option>
                        <option value="日本語">日本語</option>
                        <option value="한국어">한국어</option>
                        <option value="Português">Português</option>
                        <option value="Español">Español</option>
                    </select>
                </div>
            </div> */}
    </div>
  );
};

export default Services;
