import React from "react";
import styles from "../../styles/industries/Industry.module.css";
import { HeaderContentProps } from "../../comp/base/HeaderContent";
import HeaderCard from "../../comp/HeaderChange";
import { SingleRowProps } from "../../comp/base/ImageSingleRow";
import Screen from "../../comp/Screen";
import BaseLayout from "../../comp/BaseLayout";
import TabPanel from "../../comp/TabPanel";
import CardComponent from "../../comp/CardPage";
import HomeSlider from "../../comp/HomeSlider";
import HomePanel from "../../comp/HomePanel";

const Government = () => {
  let AnotherimgListData: HeaderContentProps[] = [
    {
      title: "Government",
      paragraph:
        "Empower public sector organizations with Digisquares Studios to automate and streamline governance processes. From citizen services to document management, our solutions enhance productivity, reduce manual errors, and improve transparency.",
      btnLink: "#",
      img1700: "/assets/Hero & cards/hero/gov_hero.webp",
      img1024: "/assets/Hero & cards/hero/gov_hero.webp",
      img768: "/assets/Hero & cards/hero/gov_hero.webp",
      img320: "/assets/Hero & cards/hero/gov_hero.webp",
      backgroundColor: "#154965",
    },
  ];

  const tabData = [
    {
      title: "Citizen Service",
      ImageCardPropsList: [
        {
          title: "Streamline Public Service Delivery",
          paragraph:
            "Improve citizen engagement by automating essential services like permit applications, social benefits, and public inquiries. With Digisquares AppStudio, governments can digitize and automate the entire process, reducing wait times, improving accessibility, and enhancing service quality. Automated workflows enable faster service delivery, making it easier for citizens to interact with government agencies.",
          link: " ",
          img1700: "/assets/Hero & cards/tabs/Govt_tab1.webp",
          img1024: "/assets/Hero & cards/tabs/Govt_tab1.webp",
          img768: "/assets/Hero & cards/tabs/Govt_tab1.webp",
          img320: "/assets/Hero & cards/tabs/Govt_tab1.webp",
        },
      ],
    },
    {
      title: "Document and Records",
      ImageCardPropsList: [
        {
          title: "Ensure Compliance and Efficiency",
          paragraph:
            "Governments handle massive volumes of paperwork and records daily. Automate document management processes using Digisquares AppStudio to ensure proper storage, quick retrieval, and compliance with regulations. From automating case file updates to securely managing public records, this solution minimizes administrative work and reduces errors.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/Govt_tab2.webp",
          img1024: "/assets/Hero & cards/tabs/Govt_tab2.webp",
          img768: "/assets/Hero & cards/tabs/Govt_tab2.webp",
          img320: "/assets/Hero & cards/tabs/Govt_tab2.webp",
        },
      ],
    },
    {
      title: "Budget and Payroll",
      ImageCardPropsList: [
        {
          title: "Ensure Accurate Budgeting and Payroll Management",
          paragraph:
            "Automate the budgeting and payroll process for government employees and contractors. Digisquares AppStudio helps public sector organizations ensure that payments are processed on time, while also tracking expenditures and optimizing resource allocation. Automating these financial workflows enhances accuracy and ensures compliance with government accounting standards.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/Govt_tab3.webp",
          img1700: "/assets/Hero & cards/tabs/Govt_tab3.webp",
          img768: "/assets/Hero & cards/tabs/Govt_tab3.webp",
          img320: "/assets/Hero & cards/tabs/Govt_tab3.webp",
        },
      ],
    },
    {
      title: "Resource Scheduling",
      ImageCardPropsList: [
        {
          title: "Optimize Scheduling for Government Operations",
          paragraph:
            "Automate workforce and resource scheduling for government departments and public services with Digisquares AppStudio. From scheduling maintenance teams to managing event logistics, the platform ensures that resources are allocated efficiently, reducing downtime and ensuring public service continuity. Syncing schedules with automated workflows minimizes conflicts and improves efficiency.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/Govt_tab4.webp",
          img1700: "/assets/Hero & cards/tabs/Govt_tab4.webp",
          img768: "/assets/Hero & cards/tabs/Govt_tab4.webp",
          img320: "/assets/Hero & cards/tabs/Govt_tab4.webp",
        },
      ],
    },
    {
      title: "Civic Engagement and Communication",
      ImageCardPropsList: [
        {
          title: "Improve Public Communication with AI-Driven Engagement",
          paragraph:
            "Automate civic communication and citizen feedback processes with Digisquares Agent Studio. Deploy AI-powered chatbots and virtual assistants to handle inquiries, disseminate public information, and manage feedback in real time. These automated interactions provide citizens with timely responses, improving transparency and satisfaction, while freeing up government resources for higher-priority tasks.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/Govt_tab5.webp",
          img1700: "/assets/Hero & cards/tabs/Govt_tab5.webp",
          img768: "/assets/Hero & cards/tabs/Govt_tab5.webp",
          img320: "/assets/Hero & cards/tabs/Govt_tab5.webp",
        },
      ],
    },
  ];

  const cardData = [
    {
      imageSrc: "/assets/Invest.svg",
      imageAlt: "InvestorsIcon",
      text: "Automated Citizen Services",
    },
    {
      imageSrc: "/assets/Transaction.svg",
      imageAlt: "TransactionsIcon",
      text: "Streamlined Document Management",
    },
    {
      imageSrc: "/assets/Assets.svg",
      imageAlt: "AssetsIcon",
      text: "AI-Powered Decision-Making",
    },
  ];

  let ImageRowGridData: SingleRowProps[] = [
    {
      image:
        "/assets/Blogs/blogheaders/TeamCollaborationwithAppStudio_Header.webp",
      category: "DIGISQUARES PLATFORM",
      heading: "Team Collaboration with AppStudio",
      description:
        "In today’s fast-paced business environment, effective collaboration is essential for success. Teams need to communicate seamlessly, share ideas, and work together in real-time to achieve common goals.",
      link: "/blog/TeamCollaborationwithAppStudio",
    },
    {
      image: "/assets/Blogs/blogheaders/FineTuningwithAIStudio_Header.webp",
      category: "AI AND AUTOMATION",
      heading: "Fine-Tuning with AI Studio",
      description:
        "As AI becomes a crucial part of business strategies, the need for custom AI models that cater to specific needs is on the rise. However, building and fine-tuning AI models often requires specialized knowledge and significant resources.",
      link: "/blog/FineTuningwithAIStudio",
    },
    {
      image: "/assets/Blogs/blogheaders/FromIdeatoApp_Header.webp",
      category: "IT MANAGEMENT",
      heading: "From Idea to App",
      description:
        "In the fast-paced world of modern business, turning ideas into reality quickly can be the difference between success and missed opportunities. App development has been a lengthy, requiring extensive coding and specialized expertise.",
      link: "/blog/FromIdeatoApp",
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
      image:
        "/assets/Blogs/blogheaders/InnovationTrendsforBusiness_Header.webp",
      category: "DIGITAL TRANSFORMATION",
      heading: "Innovation Trends for Business",
      description:
        "The rapid digital transformation happening across industries has unlocked numerous opportunities, but also introduced new complexities.",
      link: "/blog/InnovationTrendsforBusiness",
    },
  ];

  return (
    <>
      <BaseLayout>
        <div className={styles.MainContainer}>
          <div className={styles.MainContainer1}>
            <HeaderCard HeaderBannerPropsList={AnotherimgListData} />
          </div>

          <HomePanel
            imageUrl="/assets/Hero & cards/gov_img1.webp"
            title="Enhance Decision-Making with AI-Powered Automation"
            description="Digisquares AI Studio empowers governments to make smarter, data-driven decisions with AI-powered automation. From managing citizen data and processing permits to automating public services, AI Studio integrates predictive analytics and real-time data processing, enhancing efficiency in workflows like fraud detection, social service management, and resource allocation."
          />

          <TabPanel tabs={tabData} />

          <CardComponent cards={cardData} />

          {/* <Screen> */}
            <div className={styles.MoreResources}>
              <HomeSlider cards={ImageRowGridData} />
            </div>
          {/* </Screen> */}
        </div>
      </BaseLayout>
    </>
  );
};

export default Government;
