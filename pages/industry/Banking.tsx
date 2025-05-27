import { HeaderContentProps } from "../../comp/base/HeaderContent";
import { SingleRowProps } from "../../comp/base/ImageSingleRow";
import BaseLayout from "../../comp/BaseLayout";
import CardComponent from "../../comp/CardPage";
import HeaderCard from "../../comp/HeaderChange";
import HomePanel from "../../comp/HomePanel";
import TabPanel from "../../comp/TabPanel";
import HomeSlider from "../../components/HomeSlider";
import styles from "../../styles/industries/Industry.module.css";

const Banking = () => {
  let AnotherimgListData: HeaderContentProps[] = [
    {
      title: "Banking Sector",
      paragraph:
        "Revolutionize your banking operations with Digisquares Studios, automating financial workflows and customer interactions to boost productivity, reduce errors, and enhance regulatory compliance.",
      // btnLink: "Explore Platform",
      img1700: "/assets/Hero & cards/hero/bank_hero.webp",
      img1024: "/assets/Hero & cards/hero/bank_hero.webp",
      img768: "/assets/Hero & cards/hero/bank_hero.webp",
      img320: "/assets/Hero & cards/hero/bank_hero.webp",
      backgroundColor: "#154965",
    },
  ];

  const tabData = [
    {
      title: "Risk Assessment",
      ImageCardPropsList: [
        {
          title: "Automate Risk Management and Compliance Checks",
          paragraph:
            "Enhance your risk management framework by automating regulatory compliance checks and risk assessments with Digisquares AppStudio. Monitor transactions in real-time to detect anomalies, automate KYC and AML compliance, and reduce manual interventions. This automation ensures your bank stays compliant with evolving regulations while minimizing operational risks.",
          link: " ",
          img1700: "/assets/Hero & cards/tabs/Bank_tab1.webp",
          img1024: "/assets/Hero & cards/tabs/Bank_tab1.webp",
          img768: "/assets/Hero & cards/tabs/Bank_tab1.webp",
          img320: "/assets/Hero & cards/tabs/Bank_tab1.webp",
        },
      ],
    },
    {
      title: "Customer Onboarding",
      ImageCardPropsList: [
        {
          title: "Simplify and Speed Up Customer Onboarding",
          paragraph:
            "Automate the entire customer onboarding process with Digisquares AppStudio, from document verification to account setup and KYC compliance. By streamlining account management workflows, banks can reduce onboarding times, improve accuracy, and provide a seamless experience for new customers.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/Bank_tab2.webp",
          img1024: "/assets/Hero & cards/tabs/Bank_tab2.webp",
          img768: "/assets/Hero & cards/tabs/Bank_tab2.webp",
          img320: "/assets/Hero & cards/tabs/Bank_tab2.webp",
        },
      ],
    },
    {
      title: "Payment Processing",
      ImageCardPropsList: [
        {
          title: "Streamline Payments and Transactions",
          paragraph:
            "Automate payment workflows and transaction management using Digisquares AppStudio. From real-time payment processing to automated account reconciliation, banks can ensure secure and efficient transactions, reducing errors and improving the customer experience. This automation also helps manage high-volume transactions without disruption.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/Bank_tab3.webp",
          img1024: "/assets/Hero & cards/tabs/Bank_tab3.webp",
          img768: "/assets/Hero & cards/tabs/Bank_tab3.webp",
          img320: "/assets/Hero & cards/tabs/Bank_tab3.webp",
        },
      ],
    },
    {
      title: "Fraud Detection",
      ImageCardPropsList: [
        {
          title: "Strengthen Fraud Detection with AI Automation",
          paragraph:
            "Use Digisquares AI Studio to implement real-time fraud detection models that analyze transactional data for suspicious activities. AI models can detect patterns and trigger alerts for high-risk transactions, enabling proactive fraud prevention. Automating fraud detection enhances security, helping banks mitigate risks while protecting customers.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/Bank_tab4.webp",
          img1700: "/assets/Hero & cards/tabs/Bank_tab4.webp",
          img768: "/assets/Hero & cards/tabs/Bank_tab4.webp",
          img320: "/assets/Hero & cards/tabs/Bank_tab4.webp",
        },
      ],
    },
    {
      title: "Personalized Banking",
      ImageCardPropsList: [
        {
          title: "Personalize Financial Products and Services",
          paragraph:
            "Deliver personalized banking experiences by automating customer segmentation and financial recommendations with Digisquares AI Studio. Use AI to analyze customer behaviors, preferences, and financial data, enabling banks to offer tailored products like credit cards, loans, or investment portfolios. This personalization drives customer engagement and loyalty.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/Bank_tab5.webp",
          img1024: "/assets/Hero & cards/tabs/Bank_tab5.webp",
          img768: "/assets/Hero & cards/tabs/Bank_tab5.webp",
          img320: "/assets/Hero & cards/tabs/Bank_tab5.webp",
        },
      ],
    },
  ];

  const cardData = [
    {
      imageSrc: "/assets/Banking2.svg",
      imageAlt: "MachineIcon",
      text: "Automated Risk and Compliance",
    },
    {
      imageSrc: "/assets/Banking1.svg",
      imageAlt: "IdeaIcon",
      text: "Streamlined Payment Processing",
    },
    {
      imageSrc: "/assets/Banking3.svg",
      imageAlt: "RatioIcon",
      text: " AI-Powered Fraud Detection",
    },
  ];

  let ImageRowGridData: SingleRowProps[] = [
    {
      image: "/assets/Blogs/blogheaders/ResponsibleAIModels_Header.webp",
      category: "DIGITAL TRANSFORMATION",
      title: "Creating Responsible AI Models",
      description:
        "As AI technology becomes more integrated into our daily lives, the importance of ethical AI focused on fairness, transparency, and compliance continues to grow.",
      link: "/blog/ResponsibleAIModels",
    },
    {
      image: "/assets/Blogs/blogheaders/AIPoweredAutomation_Header.webp",
      category: "AI AND AUTOMATION",
      title: "AI-Powered Automation",
      description:
        "In the fast-paced world of IT, reducing Mean Time to Repair (MTTR) is critical for maintaining operational efficiency and minimizing the impact of incidents and outages.",
      link: "/blog/AIPoweredAutomation",
    },
    {
      image: "/assets/Blogs/blogheaders/ImprovingSAASCybersecurity_Header.webp",
      category: "CYBERSECURITY AND RISK",
      title: "Building a Secure SaaS Ecosystem",
      description:
        "In today’s interconnected digital landscape, no organization is immune to cyberattacks. From ransomware to data breaches, cybersecurity threats are evolving rapidly, putting immense pressure on businesses to safeguard their critical systems and data.",
      link: "/blog/ImprovingSAASCybersecurity",
    },
    {
      image: "/assets/Blogs/blogheaders/AIStudioData_Header.webp",
      category: "DIGISQUARES PLATFORM",
      title: "AI Studio’s Synthetic Data",
      description:
        "Training AI models requires vast amounts of high-quality data, but gathering enough relevant data can be challenging, time-consuming, and costly. Digisquares AI Studio addresses this issue by offering synthetic data generation capabilities.",
      link: "/blog/AIStudioSyntheticData",
    },
    {
      image: "/assets/Blogs/blogheaders/PersonalizeAIModels_Header.webp",
      category: "GOVERNANCE",
      title: "Personalize AI Models",
      description:
        "In today’s dynamic business environment, industries from healthcare to finance are increasingly relying on artificial intelligence to gain insights, streamline processes, and deliver exceptional experiences.",
      link: "/blog/PersonalizeAIModels",
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
            imageUrl="/assets/Hero & cards/bank_img1.webp"
            title="AI-Powered Banking Solutions for Decision-Making"
            description="Leverage Digisquares AI Studio to automate and optimize banking processes using advanced AI models. Whether managing risk, detecting fraud, or delivering personalized financial recommendations, AI Studio empowers your bank to generate, fine-tune, and deploy models with ease."
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

export default Banking;
