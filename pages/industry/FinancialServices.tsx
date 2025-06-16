import { HeaderContentProps } from "../../comp/base/HeaderContent";
import BaseLayout from "../../comp/BaseLayout";
import CardComponent from "../../comp/CardPage";
import HeaderCard from "../../comp/HeaderChange";
import HomePanel from "../../comp/HomePanel";
import TabPanel from "../../comp/TabPanel";
import HomeSlider from "../../components/HomeSlider";
import styles from "../../styles/industries/Industry.module.css";

const FinancialServices = () => {
  let AnotherimgListData: HeaderContentProps[] = [
    {
      title: " Financial Services",
      paragraph:
        "Empower your financial services with Digisquares Studios, automating key processes to drive efficiency, reduce errors, and enhance customer experiences.",
      btnLink: "#",
      backgroundColor: "#154965",
      img1700: "/assets/Hero & cards/hero/fina_hero.webp",
      img1024: "/assets/Hero & cards/hero/fina_hero.webp",
      img768: "/assets/Hero & cards/hero/fina_hero.webp",
      img320: "/assets/Hero & cards/hero/fina_hero.webp",
    },
  ];

  const tabData = [
    {
      title: "Risk Automation",
      ImageCardPropsList: [
        {
          title: "Automate Risk Assessments and Mitigation",
          paragraph:
            "Streamline risk management processes with Digisquares AppStudio by automating assessments, monitoring, and mitigation strategies. With real-time data analysis, you can predict and manage financial risks effectively, minimizing human error and improving compliance with industry regulations.",
          link: " ",
          img1700: "/assets/Hero & cards/tabs/Fs_tab1.webp",
          img1024: "/assets/Hero & cards/tabs/Fs_tab1.webp",
          img768: "/assets/Hero & cards/tabs/Fs_tab1.webp",
          img320: "/assets/Hero & cards/tabs/Fs_tab1.webp",
        },
      ],
    },
    {
      title: "Client Automation",
      ImageCardPropsList: [
        {
          title: "Simplify and Speed Up Client Onboarding",
          paragraph:
            "Enhance the client onboarding process by automating document submission, identity verification, and compliance checks with Digisquares AppStudio. Automating these workflows reduces manual errors, accelerates onboarding, and improves the overall client experience, while ensuring compliance with KYC and AML regulations.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/Fs_tab2.webp",
          img1024: "/assets/Hero & cards/tabs/Fs_tab2.webp",
          img768: "/assets/Hero & cards/tabs/Fs_tab2.webp",
          img320: "/assets/Hero & cards/tabs/Fs_tab2.webp",
        },
      ],
    },
    {
      title: "Payment Automation",
      ImageCardPropsList: [
        {
          title: "Ensure Accurate and Timely Payments",
          paragraph:
            "Automate payment workflows for customers and financial institutions with Digisquares AppStudio. From automating recurring payments to managing international transactions, our platform ensures secure and timely processing, reducing errors and improving operational efficiency for finance teams.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/Fs_tab3.webp",
          img1700: "/assets/Hero & cards/tabs/Fs_tab3.webp",
          img768: "/assets/Hero & cards/tabs/Fs_tab3.webp",
          img320: "/assets/Hero & cards/tabs/Fs_tab3.webp",
        },
      ],
    },
    {
      title: "Fraud Automation",
      ImageCardPropsList: [
        {
          title: "Strengthen Security with AI-Driven Fraud Detection",
          paragraph:
            "Use Digisquares AI Studio to implement automated fraud detection systems that analyze transactional data in real-time. AI models can identify suspicious activities, detect anomalies, and trigger alerts, helping financial institutions respond swiftly and prevent fraudulent transactions from impacting customers.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/Fs_tab4.webp",
          img1700: "/assets/Hero & cards/tabs/Fs_tab4.webp",
          img768: "/assets/Hero & cards/tabs/Fs_tab4.webp",
          img320: "/assets/Hero & cards/tabs/Fs_tab4.webp",
        },
      ],
    },
    {
      title: "Customer Automation",
      ImageCardPropsList: [
        {
          title: "Personalize and Enhance Client Interactions",
          paragraph:
            "Elevate the customer experience by automating personalized interactions, from investment advice to account management. Digisquares AppStudio helps financial services deliver tailored solutions, automate customer communications, and provide seamless service across digital channels, ensuring client satisfaction and loyalty.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/Fs_tab5.webp",
          img1700: "/assets/Hero & cards/tabs/Fs_tab5.webp",
          img768: "/assets/Hero & cards/tabs/Fs_tab5.webp",
          img320: "/assets/Hero & cards/tabs/Fs_tab5.webp",
        },
      ],
    },
  ];

  const cardData = [
    {
      imageSrc: "/assets/FinancialServices1.svg",
      imageAlt: "IT Icon",
      text: "Automated Risk Management",
    },
    {
      imageSrc: "/assets/FinancialServices2.svg",
      imageAlt: "BusinessIcon",
      text: "Streamlined Payment Processing ",
    },
    {
      imageSrc: "/assets/FinancialServices3.svg",
      imageAlt: "OrganisationIcon",
      text: "AI-Powered Fraud Detection",
    },
  ];

  const cards = [
    {
      image: "/assets/slider/DataSecure_Slider.webp",
      // category: "AI AND AUTOMATION",
      title: "Take Control with GDPR",
      description:
        "As technology grows, many feel they’ve lost control of their personal data. GDPR helps people take back that control. To stay compliant, businesses must know what data they collect and store it in an organized way.",
      moreLink: "/blog/GDPRCompliance",
    },
    // {
    //   image: "/assets/slider/AgentStudioAISolutions_Slider.webp",
    //   category: "DIGITAL TRANSFORMATION",
    //   title: "Agent Studio’s AI Solutions",
    //   description:
    //     "As businesses grow, so does the demand for efficient, responsive customer support. Scaling support operations can be a challenge, especially when dealing with high volumes of inquiries that require timely responses.",
    //   moreLink: "/blog/AgentStudioAISolutions",
    // },
    {
      image:
        "/assets/slider/Digitalization-Slider.webp",
      // category: "IT MANAGEMENT",
      title: "The Digitalization",
      description:
        " Discover how data and Industry 4.0 are transforming efficiency and scale in global supply chains.",
      moreLink: "/blog/Digitalizationchains",
    },
    // {
    //   image: "/assets/slider/AIStudioData_Slider.webp",
    //   category: "DIGISQUARES PLATFORM",
    //   title: "AI Studio’s Synthetic Data",
    //   description:
    //     "Training AI models requires vast amounts of high-quality data, but gathering enough relevant data can be challenging, time-consuming, and costly. Digisquares AI Studio addresses this issue by offering synthetic data generation capabilities.",
    //   moreLink: "/blog/AIStudioSyntheticData",
    // },
    {
      image: "/assets/slider/BoostingCybersecurity_Slider.webp",
      category: "GOVERNANCE",
      title: "Automating Data Breach Prevention",
      description:
        "Automation through data anonymization helps protect sensitive information, prevent breaches, and ensure compliance with privacy regulations.",
      moreLink: "/blog/BoostingCybersecurity",
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
            imageUrl="/assets/Hero & cards/fina_img1.webp"
            title="AI-Powered Financial Operations Acceleration"
            description="Optimize financial decision-making with Digisquares AI Studio, built to automate complex processes using AI and synthetic data. Whether handling risk assessments, personalized investment recommendations, or fraud detection, AI Studio enables you to generate, fine-tune, and deploy models customized to your specific needs."
          />
          <TabPanel tabs={tabData} />
          <CardComponent cards={cardData} />
          {/* <Screen> */}
          <div className={styles.MoreResources}>
            {/* <HomeSlider cards={ImageRowGridData} /> */}
            <HomeSlider cards={cards} />
          </div>
          {/* </Screen> */}
        </div>
      </BaseLayout>
    </>
  );
};

export default FinancialServices;
