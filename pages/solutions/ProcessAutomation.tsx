import { useState } from "react";
import { HeaderContentProps } from "../../comp/base/HeaderContent";
import { SingleRowProps } from "../../comp/base/ImageSingleRow";
import BaseLayout from "../../comp/BaseLayout";
import CardComponent from "../../comp/CardPage";
import HeaderCard from "../../comp/HeaderChange";
import HomePanel from "../../comp/HomePanel";
import TabPanel from "../../comp/TabPanel";
import HomeSlider from "../../components/HomeSlider";
import styles from "../../styles/solutions/MainHub.module.css";
import Headseo from "../headseo";

const ProcessAutomation = () => {
  const [benefits1, setBenefits1] = useState(true);
  const [benefits2, setBenefits2] = useState(false);
  const [benefits3, setBenefits3] = useState(false);
  const [benefits4, setBenefits4] = useState(false);
  const [benefits5, setBenefits5] = useState(false);

  const BenefitsHub1 = () => {
    setBenefits1(true);
    setBenefits2(false);
    setBenefits3(false);
    setBenefits4(false);
    setBenefits5(false);
  };

  const BenefitsHub2 = () => {
    setBenefits1(false);
    setBenefits2(true);
    setBenefits3(false);
    setBenefits4(false);
    setBenefits5(false);
  };

  const BenefitsHub3 = () => {
    setBenefits1(false);
    setBenefits2(false);
    setBenefits3(true);
    setBenefits4(false);
    setBenefits5(false);
  };

  const BenefitsHub4 = () => {
    setBenefits1(false);
    setBenefits2(false);
    setBenefits3(false);
    setBenefits4(true);
    setBenefits5(false);
  };
  const BenefitsHub5 = () => {
    setBenefits1(false);
    setBenefits2(false);
    setBenefits3(false);
    setBenefits4(false);
    setBenefits5(true);
  };

  let ImageRowGridData: SingleRowProps[] = [
    {
      image:
        "/assets/Blogs/blogheaders/TeamCollaborationwithAppStudio_Header.webp",
      category: "DIGISQUARES PLATFORM",
      title: "Team Collaboration with AppStudio",
      description:
        "In today’s fast-paced business environment, effective collaboration is essential for success. Teams need to communicate seamlessly, share ideas, and work together in real-time to achieve common goals.",
      link: "/blog/TeamCollaborationwithAppStudio",
    },
    {
      image: "/assets/Blogs/blogheaders/FutureofAppDevelopment_Header.webp",
      category: "DIGITAL TRANSFORMATION",
      title: "Future of App Development",
      description:
        "As businesses increasingly rely on software to drive growth and innovation, the need for efficient, flexible app development has never been more pressing.",
      link: "/blog/FutureofAppDevelopment",
    },
    {
      image: "/assets/Blogs/blogheaders/AIAgentsinAppStudio_Header.webp",
      category: "AI AND AUTOMATION",
      title: "AI Agents in AppStudio",
      description:
        "In today’s digital landscape, businesses are constantly looking for ways to increase efficiency, reduce costs, and drive innovation. Enter AI agents intelligent, automated tools that can handle routine tasks, support decision-making, and streamline operations.",
      link: "/blog/AIAgentsinAppStudio",
    },
    {
      image: "/assets/Blogs/blogheaders/BusinesswithAppStudio_Header.webp",
      category: "DATABASE MANAGEMENT",
      title: "Security Privacy of Blockchain",
      description:
        "As businesses grow, so do their technical needs. From expanding operational capabilities to addressing new customer demands, scaling requires robust, adaptable solutions that can keep pace with rapid change.",
      link: "/blog/BusinesswithAppStudio",
    },
    {
      image: "/assets/Blogs/blogheaders/PersonalizeAIModels_Header.webp",
      category: "GOVERNANCE",
      title: "Personalize AI Models",
      description:
        "In today’s dynamic business environment, industries from healthcare to finance are increasingly relying on artificial intelligence to gain insights, streamline processes, and deliver exceptional experiences.",
      link: "/blog/PersonalizeAIModels",
    },
    {
      image:
        "/assets/Blogs/blogheaders/MachineLearningBasicswithAI_Header.webp",
      category: "AI AND AUTOMATION",
      title: "Machine Learning Basics with AI Studio",
      description:
        "Machine learning (ML) is at the heart of modern AI, transforming industries by enabling smarter insights, automation, and innovation. However, for beginners, the technical jargon and complex concepts can make ML seem intimidating.",
      link: "/blog/MachineLearningBasicswithAI",
    },
  ];

  /*   let InfoCardGridData: InfoCardProps[] = [
    { title: "Starter Spokes", information: "Integrate with collaboration and communication apps like Slack, Zoom, Microsoft Teams, and Twilio." },
    { title: "Standard Spokes", information: "Integrate with DevOps and CI/CD tools like GitHub, Jenkins, and Jira." },
    { title: "Professional Spokes", information: "Extend workflows to identity and productivity apps like Active Directory and Microsoft 365." },
    { title: "Enterprise Spokes", information: "Connect systems of record like SAP and DocuSign, and automate AWS, Azure, and Google Cloud." },
    { title: "App Engine Studio", information: "Build apps at scale with a low-code development environment and prebuilt templates." },
    { title: "Flow Designer", information: "Automate business processes as digital workflows across departments, apps, and systems." },
    { title: "Connection Management Dashboard", information: "Connect in minutes and simplify credential management through a single dashboard." },
    { title: "Process Automation Designer", information: "Assemble and manage cross-enterprise, multi-system workflows without a single line of code." },
  ]; */

  let AnotherimgListData: HeaderContentProps[] = [
    {
      title: "Automation",
      paragraph:
        "Transform your business with Digisquares Studios, automating tasks and workflows efficiently to enhance productivity and reduce human error.",
      img1700: "/assets/Hero & cards/hero/pa_hero.webp",
      img1024: "/assets/Hero & cards/hero/pa_hero.webp",
      img768: "/assets/Hero & cards/hero/pa_hero.webp",
      img320: "/assets/Hero & cards/hero/pa_hero.webp",
      dir: "right",
      backgroundColor: "#154965",
    },
  ];

  const tabData = [
    {
      title: "Recruitment Automation",
      ImageCardPropsList: [
        {
          title: "Streamline the Hiring Process",
          paragraph:
            "Automate recruitment tasks like résumé uploads, assessments, and follow-ups, enabling quicker hiring decisions. With process automation, you can efficiently manage the flow of candidates, making it easier to find and secure the best talent while reducing manual intervention and improving overall efficiency.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/pa_tab1.webp",
          img1024: "/assets/Hero & cards/tabs/pa_tab1.webp",
          img768: "/assets/Hero & cards/tabs/pa_tab1.webp",
          img320: "/assets/Hero & cards/tabs/pa_tab1.webp",
        },
      ],
    },
    {
      title: "Onboarding and Training",
      ImageCardPropsList: [
        {
          title: "Simplify New Hire Integration",
          paragraph:
            "Automate employee onboarding by simplifying tasks like records processing, compliance tracking, and training management. This speeds up the integration of new hires, helping them become productive faster. Automated workflows reduce administrative burden, improve accuracy, and ensure consistency across the organization.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/pa_tab2.webp",
          img1024: "/assets/Hero & cards/tabs/pa_tab2.webp",
          img768: "/assets/Hero & cards/tabs/pa_tab2.webp",
          img320: "/assets/Hero & cards/tabs/pa_tab2.webp",
        },
      ],
    },
    {
      title: "Payroll Automation",
      ImageCardPropsList: [
        {
          title: "Ensure Accurate and Timely Payments",
          paragraph:
            "Streamline payroll processes for gig workers, remote employees, and contractors by automating payments and ensuring timely transactions. This reduces errors and administrative tasks, helping HR and finance teams focus on more strategic activities while ensuring compliance with local and global regulations.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/pa_tab3.webp",
          img1700: "/assets/Hero & cards/tabs/pa_tab3.webp",
          img768: "/assets/Hero & cards/tabs/pa_tab3.webp",
          img320: "/assets/Hero & cards/tabs/pa_tab3.webp",
        },
      ],
    },
    {
      title: "Workforce Scheduling",
      ImageCardPropsList: [
        {
          title: "Optimize Scheduling Across Departments",
          paragraph:
            "Automate workforce scheduling across locations and departments. Sync time-off requests and business trips to ensure proper coverage while minimizing scheduling conflicts. Automated scheduling workflows enhance efficiency for HR teams, helping them manage complex staffing needs while ensuring operational continuity.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/pa_tab4.webp",
          img1700: "/assets/Hero & cards/tabs/pa_tab4.webp",
          img768: "/assets/Hero & cards/tabs/pa_tab4.webp",
          img320: "/assets/Hero & cards/tabs/pa_tab4.webp",
        },
      ],
    },

    {
      title: "Users",
      ImageCardPropsList: [
        {
          title: "Customer Experience Automation",
          paragraph:
            "Enhance customer satisfaction by automating interactions and personalizing their experience. Automated workflows help guide customers through service or support processes quickly and efficiently, reducing delays and ensuring a more consistent and enjoyable experience with your business.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/pa_tab5.webp",
          img1700: "/assets/Hero & cards/tabs/pa_tab5.webp",
          img768: "/assets/Hero & cards/tabs/pa_tab5.webp",
          img320: "/assets/Hero & cards/tabs/pa_tab5.webp",
        },
      ],
    },
  ];

  const cardData = [
    {
      imageSrc: "/assets/ChainManagement.svg",
      imageAlt: "DigitalChainIcon",
      text: "Streamlined Workflow Automation and Integration Solutions",
    },
    {
      imageSrc: "/assets/InnovationIcon.svg",
      imageAlt: "InnovationIcon",
      text: "Intelligent AI Agents for Customer Engagement Solutions",
    },
    {
      imageSrc: "/assets/DigitalCustomization.svg",
      imageAlt: "CustomizationIcon",
      text: "Accelerated AI Model Training and Deployment",
    },
  ];

  return (
    <div>
      <Headseo
        title={`Digisquares | Process Automation`}
        heading={`ProcessAutomation`}
        description={`Enterprise process automation isn’t just about one department or just one process. It’s about fully automating all processes in all departments from end-to-end.`}
        url={`/solutions/ProcessAutomation/`}
        img={`/assets/ProcessAutomation1.webp`}
        keywords={`Process automation, Low-code platform, Data security, Automation`}
      />
      <BaseLayout>
        <div className={styles.MainContainer}>
          <div className={styles.MainContainer1}>
            <HeaderCard HeaderBannerPropsList={AnotherimgListData} />
          </div>

          <HomePanel
            imageUrl="/assets/Hero & cards/pa_img1.webp"
            title="Accelerate AI Model Training for Smarter Automation"
            description="Accelerate complex decision-making processes with AI Studio, designed to train AI models quickly and efficiently using synthetic data. Whether you’re managing predictive analytics, personalized recommendations, or sales forecasting, AI Studio allows you to generate, fine-tune, and deploy models tailored to your unique business needs"
          />
          <TabPanel tabs={tabData} />
          <CardComponent cards={cardData} />
          {/* <Screen> */}
            <div className={styles.MoreResources}>
              {/* <HomeSlider cards={ImageRowGridData} /> */}
              <HomeSlider cards={ImageRowGridData} />
            </div>
          {/* </Screen> */}
        </div>
      </BaseLayout>
    </div>
  );
};

export default ProcessAutomation;
