import { HeaderContentProps } from "../../comp/base/HeaderContent";
import BaseLayout from "../../comp/BaseLayout";
import CardComponent from "../../comp/CardPage";
import HeaderCard from "../../comp/HeaderChange";
import HomePanel from "../../comp/HomePanel";
import TabPanel from "../../comp/TabPanel";
import HomeSlider from "../../components/HomeSlider";
import styles from "../../styles/industries/Industry.module.css";

const TeleCommunication = () => {
  let AnotherimgListData: HeaderContentProps[] = [
    {
      title: "Telecommunications",
      paragraph:
        "Transform your telecommunications operations with Digisquares Studios, automating network management, customer service workflows, and data processing to enhance efficiency and reduce manual errors.",
      btnLink: "#",
      img1700: "/assets/Hero & cards/hero/tele_hero.webp",
      img1024: "/assets/Hero & cards/hero/tele_hero.webp",
      img768: "/assets/Hero & cards/hero/tele_hero.webp",
      img320: "/assets/Hero & cards/hero/tele_hero.webp",
      backgroundColor: "#154965",
    },
  ];

  const tabData = [
    {
      title: "Network Management",
      ImageCardPropsList: [
        {
          title: "Streamline Network Monitoring and Optimization",
          paragraph:
            "Automate the monitoring, analysis, and optimization of your telecom network with Digisquares AppStudio. By leveraging AI-driven insights, you can proactively detect network faults, optimize bandwidth, and ensure seamless connectivity across devices. Automating these workflows reduces downtime, enhances service reliability, and minimizes the need for manual intervention.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/Tele_tab1.webp",
          img1024: "/assets/Hero & cards/tabs/Tele_tab1.webp",
          img768: "/assets/Hero & cards/tabs/Tele_tab1.webp",
          img320: "/assets/Hero & cards/tabs/Tele_tab1.webp",
        },
      ],
    },
    {
      title: "Customer Service",
      ImageCardPropsList: [
        {
          title: "Improve Customer Satisfaction with AI-Driven Support",
          paragraph:
            "Enhance customer interactions by automating customer service workflows using Digisquares Agent Studio. Deploy intelligent chatbots and virtual assistants that handle customer queries, resolve issues, and provide 24/7 support in multiple languages. This automation ensures faster response times, reduces service costs, and improves customer satisfaction through personalized engagement.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/Tele_tab2.webp",
          img1024: "/assets/Hero & cards/tabs/Tele_tab2.webp",
          img768: "/assets/Hero & cards/tabs/Tele_tab2.webp",
          img320: "/assets/Hero & cards/tabs/Tele_tab2.webp",
        },
      ],
    },
    {
      title: "Billing and Payment",
      ImageCardPropsList: [
        {
          title: "Ensure Accurate and Timely Billing Processes",
          paragraph:
            "Automate the billing and payment workflows for telecom services using Digisquares AppStudio. From usage tracking to invoice generation and payment processing, automate every step to reduce errors, ensure timely payments, and simplify the overall billing process. Integration with payment gateways and CRM systems ensures compliance and enhances the customer experience.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/Tele_tab3.webp",
          img1700: "/assets/Hero & cards/tabs/Tele_tab3.webp",
          img768: "/assets/Hero & cards/tabs/Tele_tab3.webp",
          img320: "/assets/Hero & cards/tabs/Tele_tab3.webp",
        },
      ],
    },
    {
      title: "Workforce Scheduling",
      ImageCardPropsList: [
        {
          title: "Optimize Telecom Workforce Efficiency",
          paragraph:
            "Automate workforce scheduling for field technicians, customer service teams, and network engineers. Sync time-off requests, shift management, and job assignments to ensure efficient staffing and resource allocation. This automation helps reduce scheduling conflicts, improve team productivity, and ensure timely service delivery across your telecom network.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/Tele_tab4.webp",
          img1700: "/assets/Hero & cards/tabs/Tele_tab4.webp",
          img768: "/assets/Hero & cards/tabs/Tele_tab4.webp",
          img320: "/assets/Hero & cards/tabs/Tele_tab4.webp",
        },
      ],
    },
    {
      title: "Marketing and Customer Retention",
      ImageCardPropsList: [
        {
          title: "Personalize Marketing and Retention Strategies",
          paragraph:
            "Use Digisquares AI Studio to automate personalized marketing campaigns and customer retention strategies. Automate targeted messaging based on user behavior, data analytics, and customer preferences to improve engagement and retention. This allows telecom providers to strengthen customer loyalty, reduce churn, and enhance the lifetime value of their users.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/Tele_tab5.webp",
          img1700: "/assets/Hero & cards/tabs/Tele_tab5.webp",
          img768: "/assets/Hero & cards/tabs/Tele_tab5.webp",
          img320: "/assets/Hero & cards/tabs/Tele_tab5.webp",
        },
      ],
    },
  ];

  const cardData = [
    {
      imageSrc: "/assets/antenna.svg",
      imageAlt: "InternetIcon",
      text: "Automated Network Management ",
    },
    {
      imageSrc: "/assets/ServicesIcon.svg",
      imageAlt: "ServicesIcon",
      text: "AI-Powered Customer Service",
    },
    {
      imageSrc: "/assets/ServicesIcon1.svg",
      imageAlt: "PaymentIcon",
      text: "Billing and Payment Workflows",
    },
  ];

  const cards = [
    {
      image: "/assets/slider/AIPoweredAutomation_Header.webp",
      category: "AI AND AUTOMATION",
      title: "AI-Powered Automation",
      description:
        "In the fast-paced world of IT, reducing Mean Time to Repair (MTTR) is critical for maintaining operational efficiency and minimizing the impact of incidents and outages.",
      moreLink: "/blog/AIPoweredAutomation",
    },
    {
      image: "/assets/slider/ImprovingSAASCybersecurity_Header.webp",
      category: "CYBERSECURITY AND RISK",
      title: "Building a Secure SaaS Ecosystem",
      description:
        "In today’s interconnected digital landscape, no organization is immune to cyberattacks. From ransomware to data breaches, cybersecurity threats are evolving rapidly, putting immense pressure on businesses to safeguard their critical systems and data.",
        moreLink: "/blog/ImprovingSAASCybersecurity",
    },
    {
      image: "/assets/slider/AIStudioData_Header.webp",
      category: "DIGISQUARES PLATFORM",
      title: "AI Studio’s Synthetic Data",
      description:
        "Training AI models requires vast amounts of high-quality data, but gathering enough relevant data can be challenging, time-consuming, and costly. Digisquares AI Studio addresses this issue by offering synthetic data generation capabilities.",
        moreLink: "/blog/AIStudioSyntheticData",
    },
    {
      image: "/assets/slider/PersonalizeAIModels_Header.webp",
      category: "GOVERNANCE",
      title: "Personalize AI Models",
      description:
        "In today’s dynamic business environment, industries from healthcare to finance are increasingly relying on artificial intelligence to gain insights, streamline processes, and deliver exceptional experiences.",
        moreLink: "/blog/PersonalizeAIModels",
    },
    {
      image: "/assets/slider/AgentStudioAISolutions_Header.webp",
      category: "DIGITAL TRANSFORMATION",
      title: "Agent Studio’s AI Solutions",
      description:
        "As businesses grow, so does the demand for efficient, responsive customer support. Scaling support operations can be a challenge, especially when dealing with high volumes of inquiries that require timely responses.",
        moreLink: "/blog/AgentStudioAISolutions",
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
            imageUrl="/assets/Hero & cards/tele_img1.webp"
            title="Accelerate Telecom Data Management with AI Automation"
            description="Streamline complex telecom operations with Digisquares AI Studio, designed to manage vast amounts of data efficiently and accurately. Whether it’s network optimization, customer service automation, or real-time data analytics, AI Studio provides tools to train and fine-tune AI models using synthetic data."
          />
          <TabPanel tabs={tabData} />
          <CardComponent cards={cardData} />

          {/* <Screen> */}
            <div className={styles.MoreResources}>
              <HomeSlider cards={cards} />
            </div>
          {/* </Screen> */}
        </div>
      </BaseLayout>
    </>
  );
};

export default TeleCommunication;
