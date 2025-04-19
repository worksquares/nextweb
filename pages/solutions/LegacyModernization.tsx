import React from "react";
import HeaderCard from "../../comp/HeaderChange";
import styles from "../../styles/solutions/MainHub.module.css";
import { useState } from "react";
import { LinkHoverProps } from "../../comp/base/LinkHover";
import { SingleRowProps } from "../../comp/base/ImageSingleRow";
import BaseLayout from "../../comp/BaseLayout";
import TabPanel from "../../comp/TabPanel";
import HomeSlider from "../../comp/HomeSlider";
import { HeaderContentProps } from "../../comp/base/HeaderContent";
import CardComponent from "../../comp/CardPage";
import HomePanel from "../../comp/HomePanel";

const LegacyModernization = () => {
  const tabData = [
    {
      title: "Application Refactoring",
      ImageCardPropsList: [
        {
          title: " Update and Optimize Legacy Applications",
          paragraph:
            "Modernize your outdated applications by automating the refactoring process. With Digisquares AppStudio, you can streamline the update of legacy codebases, enabling compatibility with modern frameworks and ensuring optimal performance. Automate code re-structuring, UI enhancements, and performance tuning to ensure your applications meet current industry standards.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/lm_tab1.webp",
          img1024: "/assets/Hero & cards/tabs/lm_tab1.webp",
          img768: "/assets/Hero & cards/tabs/lm_tab1.webp",
          img320: "/assets/Hero & cards/tabs/lm_tab1.webp",
        },
      ],
    },
    {
      title: "Cloud Migration",
      ImageCardPropsList: [
        {
          title: "Seamless Cloud Transitions",
          paragraph:
            "Automate the migration of legacy infrastructure to the cloud with Digisquares AppStudio. Our platform simplifies the transfer of applications, databases, and services to cloud environments like AWS, Azure, or Google Cloud, ensuring minimal disruption. Cloud migration improves scalability, performance, and cost-effectiveness, setting your business up for future growth.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/lm_tab2.webp",
          img1024: "/assets/Hero & cards/tabs/lm_tab2.webp",
          img768: "/assets/Hero & cards/tabs/lm_tab2.webp",
          img320: "/assets/Hero & cards/tabs/lm_tab2.webp",
        },
      ],
    },
    {
      title: "Database Modernization",
      ImageCardPropsList: [
        {
          title: "Upgrade to Modern Databases",
          paragraph:
            "Legacy databases can slow down business operations. Automate the transition to modern, high-performance databases with Digisquares AI Studio. Whether it’s moving from on-premise to cloud databases or upgrading to NoSQL solutions, our platform handles data migration seamlessly, ensuring data integrity, security, and improved performance.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/lm_tab3.webp",
          img1700: "/assets/Hero & cards/tabs/lm_tab3.webp",
          img768: "/assets/Hero & cards/tabs/lm_tab3.webp",
          img320: "/assets/Hero & cards/tabs/lm_tab3.webp",
        },
      ],
    },
    {
      title: "Microservices Architecture",
      ImageCardPropsList: [
        {
          title: "Break Down Monolithic Applications",
          paragraph:
            "Modernize monolithic applications by automating the transition to a microservices architecture. Digisquares AppStudio enables you to break down complex legacy applications into smaller, more manageable services that improve scalability, flexibility, and fault tolerance. By adopting microservices, your business can respond faster to changing market needs and customer demands.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/lm_tab4.webp",
          img1700: "/assets/Hero & cards/tabs/lm_tab4.webp",
          img768: "/assets/Hero & cards/tabs/lm_tab4.webp",
          img320: "/assets/Hero & cards/tabs/lm_tab4.webp",
        },
      ],
    },

    {
      title: "Legacy System",
      ImageCardPropsList: [
        {
          title: "Integrate Legacy Systems with Modern Solutions",
          paragraph:
            "Ensure legacy systems work seamlessly with modern solutions using automated integration tools from Digisquares Agent Studio. Our platform enables your legacy systems to communicate with newer applications and platforms through APIs, ensuring that your business can leverage the benefits of modern technologies without entirely replacing existing infrastructure.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/lm_tab5.webp",
          img1700: "/assets/Hero & cards/tabs/lm_tab5.webp",
          img768: "/assets/Hero & cards/tabs/lm_tab5.webp",
          img320: "/assets/Hero & cards/tabs/lm_tab5.webp",
        },
      ],
    },
  ];

  let ImageRowGridData: SingleRowProps[] = [
    {
      image:
        "/assets/Blogs/blogheaders/MachineLearningBasicswithAI_Header.webp",
      category: "AI AND AUTOMATION",
      heading: "Machine Learning Basics with AI Studio",
      description:
        "Machine learning (ML) is at the heart of modern AI, transforming industries by enabling smarter insights, automation, and innovation. However, for beginners, the technical jargon and complex concepts can make ML seem intimidating.",
      link: "/blog/MachineLearningBasicswithAI",
    },
    {
      image: "/assets/Blogs/blogheaders/ResponsibleAIModels_Header.webp",
      category: "DIGITAL TRANSFORMATION",
      heading: "Creating Responsible AI Models",
      description:
        "As AI technology becomes more integrated into our daily lives, the importance of ethical AI focused on fairness, transparency, and compliance continues to grow.",
      link: "/blog/ResponsibleAIModels",
    },
    {
      image: "/assets/Blogs/blogheaders/WorkflowswithAppStudio_Header.webp",
      category: "DIGISQUARES PLATFORM",
      heading: "Workflows with AppStudio",
      description:
        "As businesses continue to evolve in a digital-first world, the pressure to improve efficiency and reduce costs has never been greater. Manual processes and repetitive tasks can slow down operations and limit a company’s ability to focus on high-impact initiatives.",
      link: "/blog/WorkflowswithAppStudio",
    },
    {
      image: "/assets/Blogs/blogheaders/BusinesswithAppStudio_Header.webp",
      category: "DATABASE MANAGEMENT",
      heading: "Security Privacy of Blockchain",
      description:
        "As businesses grow, so do their technical needs. From expanding operational capabilities to addressing new customer demands, scaling requires robust, adaptable solutions that can keep pace with rapid change.",
      link: "/blog/BusinesswithAppStudio",
    },
    {
      image: "/assets/Blogs/blogheaders/AppStudioSecurityFeatures_Header.webp",
      category: "CYBERSECURITY AND RISK",
      heading: "AppStudio’s Security Features",
      description:
        "In an increasingly digital world, application security is paramount. With cyber threats on the rise, businesses must ensure that the apps they develop are secure and resilient against potential attacks.",
      link: "/blog/AppStudioSecurityFeatures",
    },
    {
      image: "/assets/Blogs/blogheaders/FromIdeatoApp_Header.webp",
      category: "IT MANAGEMENT",
      heading: "From Idea to App",
      description:
        "In the fast-paced world of modern business, turning ideas into reality quickly can be the difference between success and missed opportunities. App development has been a lengthy, requiring extensive coding and specialized expertise.",
      link: "/blog/FromIdeatoApp",
    },
  ];

  const cardData = [
    {
      imageSrc: "/assets/legacy1.svg",
      imageAlt: "ClinicalIcon",
      text: "Automated Application Refactoring for Modern Frameworks",
    },
    {
      imageSrc: "/assets/legacy2.svg",
      imageAlt: "HealthcareIcon",
      text: "Seamless Cloud Migration with Minimal Disruption",
    },
    {
      imageSrc: "/assets/legacy3.svg",
      imageAlt: "PatientCareIcon",
      text: "AI-Driven Database and Microservices Modernization",
    },
  ];

  let AnotherimgListData: HeaderContentProps[] = [
    {
      title: "Legacy Systems",
      paragraph:
        "Upgrade your legacy systems with Digisquares Studios, automating modernization for improved performance, scalability, and seamless cloud integration.",
      btnLink: "#",
      img1700: "/assets/Hero & cards/hero/lm_hero.webp",
      img1024: "/assets/Hero & cards/hero/lm_hero.webp",
      img768: "/assets/Hero & cards/hero/lm_hero.webp",
      img320: "/assets/Hero & cards/hero/lm_hero.webp",
      backgroundColor: "#154965",
    },
  ];

  return (
    <div>
      <BaseLayout>
        <div className={styles.MainContainer}>
          <div className={styles.MainContainer1}>
            <HeaderCard HeaderBannerPropsList={AnotherimgListData} />
          </div>

          <HomePanel
            imageUrl="/assets/Hero & cards/lm_image1.webp"
            title="Modernize Legacy Systems with AI Automation"
            description="Revitalize legacy systems with Digisquares AI Studio, utilizing AI-driven tools to automate the transition from outdated technologies to modern platforms. Whether it’s refactoring applications, migrating databases, or integrating cloud solutions, AI Studio ensures the process is efficient and cost-effective."
          />
          <TabPanel tabs={tabData} />

          <CardComponent cards={cardData} />

          <div className={styles.MoreResources}>
            <HomeSlider cards={ImageRowGridData} />
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default LegacyModernization;
