import { HeaderContentProps } from "../../comp/base/HeaderContent";
import { SingleRowProps } from "../../comp/base/ImageSingleRow";
import BaseLayout from "../../comp/BaseLayout";
import CardComponent from "../../comp/CardPage";
import HeaderCard from "../../comp/HeaderChange";
import HomePanel from "../../comp/HomePanel";
import TabPanel from "../../comp/TabPanel";
import NewHomeSlider from "../../components/NewHomeSlider";
import styles from "../../styles/industries/Industry.module.css";

const Manufacturing = () => {
  let AnotherimgListData: HeaderContentProps[] = [
    {
      title: "Manufacturing",
      paragraph:
        "Enhance your manufacturing processes with Digisquares Studios, leveraging automation to streamline operations, increase productivity, and reduce errors. ",
      btnLink: "#",
      img1700: "/assets/Hero & cards/hero/manf_hero.webp",
      img1024: "/assets/Hero & cards/hero/manf_hero.webp",
      img768: "/assets/Hero & cards/hero/manf_hero.webp",
      img320: "/assets/Hero & cards/hero/manf_hero.webp",
      backgroundColor: "#154965",
    },
  ];

  const tabData = [
    {
      title: "Production Scheduling",
      ImageCardPropsList: [
        {
          title: "Optimize Production Workflow Efficiency",
          paragraph:
            "Automate production scheduling with Digisquares AppStudio, ensuring that your manufacturing processes run smoothly with minimal human intervention. By synchronizing production cycles, managing machine availability, and forecasting demand, you can optimize resource allocation and reduce downtime, ensuring production remains on schedule and cost-efficient.",
          link: " ",
          img1700: "/assets/Hero & cards/tabs/Man_tab1.webp",
          img1024: "/assets/Hero & cards/tabs/Man_tab1.webp",
          img768: "/assets/Hero & cards/tabs/Man_tab1.webp",
          img320: "/assets/Hero & cards/tabs/Man_tab1.webp",
        },
      ],
    },
    {
      title: "Inventory Management",
      ImageCardPropsList: [
        {
          title: "Streamline Inventory and Supply Chain Management",
          paragraph:
            "Efficiently manage inventory levels with Digisquares AppStudio, automating the monitoring of stock, supply chain logistics, and order management. Reduce overstocking or stockouts by automating reordering processes and tracking real-time inventory levels.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/Man_tab2.webp",
          img1024: "/assets/Hero & cards/tabs/Man_tab2.webp",
          img768: "/assets/Hero & cards/tabs/Man_tab2.webp",
          img320: "/assets/Hero & cards/tabs/Man_tab2.webp",
        },
      ],
    },
    {
      title: "Quality Control",
      ImageCardPropsList: [
        {
          title: "Ensure High-Quality Standards with Automated Workflows ",
          paragraph:
            "Automate quality control processes using Digisquares AI Studio to monitor product quality in real-time and detect defects during production. Automating quality checks improves consistency, reduces manual errors, and ensures that every product meets the required standards, minimizing waste and improving customer satisfaction.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/Man_tab3.webp",
          img1700: "/assets/Hero & cards/tabs/Man_tab3.webp",
          img768: "/assets/Hero & cards/tabs/Man_tab3.webp",
          img320: "/assets/Hero & cards/tabs/Man_tab3.webp",
        },
      ],
    },
    {
      title: "Machine Maintenance",
      ImageCardPropsList: [
        {
          title: "Predictive Maintenance for Maximized Uptime",
          paragraph:
            "Minimize machine downtime by automating predictive maintenance workflows with Digisquares AI Studio. AI models can analyze machine performance data and predict potential failures, allowing you to schedule maintenance before issues arise. This proactive approach ensures that your production line stays operational, reducing unexpected repairs and costly downtimes.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/Man_tab4.webp",
          img1700: "/assets/Hero & cards/tabs/Man_tab4.webp",
          img768: "/assets/Hero & cards/tabs/Man_tab4.webp",
          img320: "/assets/Hero & cards/tabs/Man_tab4.webp",
        },
      ],
    },
    {
      title: "Customer Order Management",
      ImageCardPropsList: [
        {
          title: "Automate and Streamline Customer Order Processing",
          paragraph:
            "Automate order processing from customer requests to delivery with Digisquares AppStudio. From tracking orders to managing shipments, automation reduces the time spent on manual processing, ensuring timely and accurate deliveries. This enhanced efficiency allows manufacturers to focus on scaling operations while providing better service to customers.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/Man_tab5.webp",
          img1700: "/assets/Hero & cards/tabs/Man_tab5.webp",
          img768: "/assets/Hero & cards/tabs/Man_tab5.webp",
          img320: "/assets/Hero & cards/tabs/Man_tab5.webp",
        },
      ],
    },
  ];

  const cardData = [
    {
      imageSrc: "/assets/ChainManagement.svg",
      imageAlt: "DigitalChainIcon",
      text: "Optimized Production Scheduling ",
    },
    {
      imageSrc: "/assets/InnovationIcon.svg",
      imageAlt: "InnovationIcon",
      text: "Streamlined Inventory Management ",
    },
    {
      imageSrc: "/assets/DigitalCustomization.svg",
      imageAlt: "CustomizationIcon",
      text: "Predictive Maintenance and Quality",
    },
  ];

  let ImageRowGridData: SingleRowProps[] = [
    {
      image: "/assets/Blogs/blogheaders/AppStudioSecurityFeatures_Header.webp",
      category: "CYBERSECURITY AND RISK",
      title: "AppStudio’s Security Features",
      description:
        "In an increasingly digital world, application security is paramount. With cyber threats on the rise, businesses must ensure that the apps they develop are secure and resilient against potential attacks.",
      link: "/blog/AppStudioSecurityFeatures",
    },
    {
      image:
        "/assets/Blogs/blogheaders/InnovationTrendsforBusiness_Header.webp",
      category: "DIGITAL TRANSFORMATION",
      title: "Innovation Trends for Business",
      description:
        "The rapid digital transformation happening across industries has unlocked numerous opportunities, but also introduced new complexities.",
      link: "/blog/InnovationTrendsforBusiness",
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
      image: "/assets/Blogs/blogheaders/AIAgentsinAppStudio_Header.webp",
      category: "AI AND AUTOMATION",
      title: "AI Agents in AppStudio",
      description:
        "In today’s digital landscape, businesses are constantly looking for ways to increase efficiency, reduce costs, and drive innovation. Enter AI agents intelligent, automated tools that can handle routine tasks, support decision-making, and streamline operations.",
      link: "/blog/AIAgentsinAppStudio",
    },
    {
      image: "/assets/Blogs/blogheaders/WorkflowswithAppStudio_Header.webp",
      category: "DIGISQUARES PLATFORM",
      title: "Workflows with AppStudio",
      description:
        "As businesses continue to evolve in a digital-first world, the pressure to improve efficiency and reduce costs has never been greater. Manual processes and repetitive tasks can slow down operations and limit a company’s ability to focus on high-impact initiatives.",
      link: "/blog/WorkflowswithAppStudio",
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
            imageUrl="/assets/Hero & cards/manf_img1.webp"
            title="Accelerate Manufacturing with AI-Powered Automation"
            description="Optimize your manufacturing workflows with Digisquares AI Studio, designed to automate decision-making processes using AI and synthetic data. Whether managing supply chain logistics, predictive maintenance, or production scheduling, AI Studio allows you to train and deploy models that cater to your specific manufacturing needs."
          />

          <TabPanel tabs={tabData} />

          <CardComponent cards={cardData} />

          {/* <Screen> */}
            <div className={styles.MoreResources}>
              <NewHomeSlider cards={ImageRowGridData} />
            </div>
          {/* </Screen> */}
        </div>
      </BaseLayout>
    </>
  );
};

export default Manufacturing;
