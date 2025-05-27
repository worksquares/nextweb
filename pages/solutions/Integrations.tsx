import { HeaderContentProps } from "../../comp/base/HeaderContent";
import { SingleRowProps } from "../../comp/base/ImageSingleRow";
import BaseLayout from "../../comp/BaseLayout";
import CardComponent from "../../comp/CardPage";
import HeaderCard from "../../comp/HeaderChange";
import HomePanel from "../../comp/HomePanel";
import TabPanel from "../../comp/TabPanel";
import HomeSlider from "../../components/HomeSlider";
import styles from "../../styles/solutions/MainHub.module.css";

const Integrations = () => {
  const tabData = [
    {
      title: "CRM",
      ImageCardPropsList: [
        {
          title: "Connect with Leading Customer Relationship Management Tools",
          paragraph:
            "Ensure seamless customer data flow by integrating with CRMs like Salesforce, HubSpot, and Zoho CRM. Automate data syncing between your systems and centralize customer insights, enabling your sales and support teams to work with the most up-to-date information. Integration ensures consistent data accuracy, reducing duplication and manual entry.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/ig_tab1.webp",
          img1024: "/assets/Hero & cards/tabs/ig_tab1.webp",
          img768: "/assets/Hero & cards/tabs/ig_tab1.webp",
          img320: "/assets/Hero & cards/tabs/ig_tab1.webp",
        },
      ],
    },
    {
      title: "ERP System",
      ImageCardPropsList: [
        {
          title: "Streamline Business Operations with ERP Tools",
          paragraph:
            "Integrate Digisquares Studios with ERP systems such as SAP, Oracle, or Microsoft Dynamics to automate and streamline key business operations. By connecting your core business functions, from inventory management to financial processing, you eliminate data silos and reduce the time spent on manual coordination between systems.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/ig_tab2.webp",
          img1024: "/assets/Hero & cards/tabs/ig_tab2.webp",
          img768: "/assets/Hero & cards/tabs/ig_tab2.webp",
          img320: "/assets/Hero & cards/tabs/ig_tab2.webp",
        },
      ],
    },
    {
      title: "Payment Gateway",
      ImageCardPropsList: [
        {
          title: "Automate Payment Processing",
          paragraph:
            "Simplify payment processing by integrating your apps with payment gateways like PayPal, Stripe, or Square. Automate payment workflows, invoice generation, and customer notifications, ensuring timely and secure transactions. This integration also helps businesses track payment statuses and financial performance without the need for manual updates.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/ig_tab3.webp",
          img1700: "/assets/Hero & cards/tabs/ig_tab3.webp",
          img768: "/assets/Hero & cards/tabs/ig_tab3.webp",
          img320: "/assets/Hero & cards/tabs/ig_tab3.webp",
        },
      ],
    },
    {
      title: "Collaboration Tools",
      ImageCardPropsList: [
        {
          title: "Enhance Team Communication and Productivity",
          paragraph:
            "Integrate with collaboration tools like Slack, Microsoft Teams, or Zoom to streamline team communication. Automate notifications, task assignments, and project updates by connecting your workflows with these platforms, ensuring that your teams stay aligned and productive while minimizing manual follow-ups.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/ig_tab4.webp",
          img1700: "/assets/Hero & cards/tabs/ig_tab4.webp",
          img768: "/assets/Hero & cards/tabs/ig_tab4.webp",
          img320: "/assets/Hero & cards/tabs/ig_tab4.webp",
        },
      ],
    },

    {
      title: "Marketing Tools",
      ImageCardPropsList: [
        {
          title: "Automate and Personalize Marketing Efforts",
          paragraph:
            "Connect your apps to marketing platforms like Mailchimp, Google Analytics, or Marketo to automate customer outreach and performance tracking. Sync customer data, trigger marketing campaigns, and personalize interactions based on real-time insights, ensuring targeted, efficient marketing efforts across channels.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/ig_tab5.webp",
          img1700: "/assets/Hero & cards/tabs/ig_tab5.webp",
          img768: "/assets/Hero & cards/tabs/ig_tab5.webp",
          img320: "/assets/Hero & cards/tabs/ig_tab5.webp",
        },
      ],
    },
  ];

  let ImageRowGridData: SingleRowProps[] = [
    {
      image: "/assets/Blogs/blogheaders/WorkflowswithAppStudio_Header.webp",
      category: "DIGISQUARES PLATFORM",
      title: "Workflows with AppStudio",
      description:
        "As businesses continue to evolve in a digital-first world, the pressure to improve efficiency and reduce costs has never been greater. Manual processes and repetitive tasks can slow down operations and limit a company’s ability to focus on high-impact initiatives.",
      link: "/blog/WorkflowswithAppStudio",
    },
    {
      image: "/assets/Blogs/blogheaders/FineTuningwithAIStudio_Header.webp",
      category: "AI AND AUTOMATION",
      title: "Fine-Tuning with AI Studio",
      description:
        "As AI becomes a crucial part of business strategies, the need for custom AI models that cater to specific needs is on the rise. However, building and fine-tuning AI models often requires specialized knowledge and significant resources.",
      link: "/blog/FineTuningwithAIStudio",
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
      image: "/assets/Blogs/blogheaders/FromIdeatoApp_Header.webp",
      category: "IT MANAGEMENT",
      title: "From Idea to App",
      description:
        "In the fast-paced world of modern business, turning ideas into reality quickly can be the difference between success and missed opportunities. App development has been a lengthy, requiring extensive coding and specialized expertise.",
      link: "/blog/FromIdeatoApp",
    },
    {
      image: "/assets/Blogs/blogheaders/AppStudioSecurityFeatures_Header.webp",
      category: "CYBERSECURITY AND RISK",
      title: "AppStudio’s Security Features",
      description:
        "In an increasingly digital world, application security is paramount. With cyber threats on the rise, businesses must ensure that the apps they develop are secure and resilient against potential attacks.",
      link: "/blog/AppStudioSecurityFeatures",
    },
    {
      image: "/assets/Blogs/blogheaders/BusinesswithAppStudio_Header.webp",
      category: "DATABASE MANAGEMENT",
      title: "Security Privacy of Blockchain",
      description:
        "As businesses grow, so do their technical needs. From expanding operational capabilities to addressing new customer demands, scaling requires robust, adaptable solutions that can keep pace with rapid change.",
      link: "/blog/BusinesswithAppStudio",
    },
  ];

  const cardData = [
    {
      imageSrc: "/assets/int1.svg",
      imageAlt: "ClinicalIcon",
      text: "Seamless CRM and ERP Integrations for Unified Business Operations",
    },
    {
      imageSrc: "/assets/int2.svg",
      imageAlt: "HealthcareIcon",
      text: "Automated Payment Workflows for Secure, Real-Time Transactions",
    },
    {
      imageSrc: "/assets/int3.svg",
      imageAlt: "PatientCareIcon",
      text: "Efficient Collaboration Tool Integrations for Improved Team Communication",
    },
  ];

  let AnotherimgListData: HeaderContentProps[] = [
    {
      title: "Integrations",
      paragraph:
        "Connect Digisquares Studios with your tools to streamline processes, automate tasks, and boost productivity efficiently.",
      btnLink: "#",
      img1700: "/assets/Hero & cards/hero/ig_hero.webp",
      img1024: "/assets/Hero & cards/hero/ig_hero.webp",
      img768: "/assets/Hero & cards/hero/ig_hero.webp",
      img320: "/assets/Hero & cards/hero/ig_hero.webp",
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
            imageUrl="/assets/Hero & cards/ig_img1.webp"
            title="Effortless Integration Tools"
            description="With Digisquares AppStudio, integrating third-party tools has never been easier. Whether you are connecting to popular CRMs like Salesforce, automating workflows with Slack, or syncing data with payment systems like Stripe, our low-code platform simplifies the entire process. Build custom APIs or use pre-built connectors to ensure seamless communication between your apps and external services."
          />
          <TabPanel tabs={tabData} />

          <CardComponent cards={cardData} />

          <div className={styles.MoreResources}>
            {/* <HomeSlider cards={ImageRowGridData} /> */}
            <HomeSlider cards={ImageRowGridData} />
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Integrations;
