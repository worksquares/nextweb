import { HeaderContentProps } from "../../comp/base/HeaderContent";
import BaseLayout from "../../comp/BaseLayout";
import CardComponent from "../../comp/CardPage";
import HeaderCard from "../../comp/HeaderChange";
import HomePanel from "../../comp/HomePanel";
import TabPanel from "../../comp/TabPanel";
import HomeSlider from "../../components/HomeSlider";
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

  const cards = [
    {
      image: "/assets/slider/IoT-Slider-Img.webp",
      category: "CYBERSECURITY AND RISK",
      title: "Key Digital Trends Shaping the Future",
      description:
        "Digital Twins use real-time data and IoT sensors to create virtual replicas of physical systems, enabling smarter monitoring, prediction, and optimization.They enhance decision-making by simulating scenarios, reducing downtime, and improving operational efficiency across industries.",
      moreLink: "/blog/DigitalTrendsIoT",
    },
    {
      image:
        "/assets/slider/InnovationTrendsforBusiness_Slider.webp",
      category: "DIGITAL TRANSFORMATION",
      title: "Innovation Trends for Business",
      description:
        "The rapid digital transformation happening across industries has unlocked numerous opportunities, but also introduced new complexities.",
      moreLink: "/blog/InnovationTrendsforBusiness",
    },
    {
      image: "/assets/slider/HyperAutomation1_Slider.webp",
      category: "DATABASE MANAGEMENT",
      title: "Enterprise Low-code and Hyper-automation",
      description:
        "Enterprise low-code development makes it easier to build enterprise grade applications and operational systems that run critical business processes and serve thousands of users across organizations. ",
      moreLink: "/blog/EnterpriseLowcode",
    },
    {
      image: "/assets/slider/CloudSecurityRisk_Slider.webp",
      category: "AI AND AUTOMATION",
      title: "Mitigating Cloud Security Risks",
      description:
        "As cloud adoption rises, so do security threats. Implementing practices like CSPM and CWP helps organizations safeguard data, reduce breaches, and cut potential costs.",
      moreLink: "/blog/CloudSecurityRisks",
    },
    {
      image: "/assets/slider/GovernanceComp_Slider.webp",
      // category: "DIGISQUARES PLATFORM",
      title: "Drag-and-Drop: The Future of Fast Innovation",
      description:
        "Visual development tools are breaking coding barriers, helping teams build and launch apps faster—with less technical overhead.",
      moreLink: "/blog/DragandDropPlatforms",
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
            <HomeSlider cards={cards} />
          </div>
          {/* </Screen> */}
        </div>
      </BaseLayout>
    </>
  );
};

export default Manufacturing;
