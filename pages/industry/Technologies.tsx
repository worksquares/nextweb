import { HeaderContentProps } from "../../comp/base/HeaderContent";
import BaseLayout from "../../comp/BaseLayout";
import CardComponent from "../../comp/CardPage";
import HeaderCard from "../../comp/HeaderChange";
import HomePanel from "../../comp/HomePanel";
import TabPanel from "../../comp/TabPanel";
import HomeSlider from "../../components/HomeSlider";
import styles from "../../styles/industries/Industry.module.css";

const Technologies = () => {
  let AnotherimgListData: HeaderContentProps[] = [
    {
      title: "Automating Tech",
      paragraph:
        "Empower your business with Digisquares Studios, leveraging cutting-edge technology solutions to automate tasks, optimize workflows, and increase efficiency. From AI-driven automation to advanced data processing.",
      btnLink: "#",
      img1700: "/assets/Hero & cards/hero/tech_hero.webp",
      img1024: "/assets/Hero & cards/hero/tech_hero.webp",
      img768: "/assets/Hero & cards/hero/tech_hero.webp",
      img320: "/assets/Hero & cards/hero/tech_hero.webp",
      backgroundColor: "#154965",
    },
  ];

  const tabData = [
    {
      title: "AI Integration",
      ImageCardPropsList: [
        {
          title: "Seamlessly Integrate AI into Your Business",
          paragraph:
            "Automate the integration of AI across your business operations using Digisquares AppStudio. Easily implement AI models for predictive analytics, real-time decision-making, and customer behavior analysis without requiring extensive coding. This automation enables businesses to adopt AI technology quickly and efficiently, ensuring a competitive edge in the tech landscape.",
          link: " ",
          img1700: "/assets/Hero & cards/tabs/Tech_tab1.webp",
          img1024: "/assets/Hero & cards/tabs/Tech_tab1.webp",
          img768: "/assets/Hero & cards/tabs/Tech_tab1.webp",
          img320: "/assets/Hero & cards/tabs/Tech_tab1.webp",
        },
      ],
    },
    {
      title: "Cloud Solutions",
      ImageCardPropsList: [
        {
          title: "Enhance Business Agility with Cloud Automation",
          paragraph:
            "Streamline your cloud infrastructure management with Digisquares AppStudio, automating everything from resource scaling to data backups and security management. Easily integrate with leading cloud platforms like AWS, Azure, and Google Cloud, ensuring your systems remain scalable, secure, and efficient.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/Tech_tab2.webp",
          img1024: "/assets/Hero & cards/tabs/Tech_tab2.webp",
          img768: "/assets/Hero & cards/tabs/Tech_tab2.webp",
          img320: "/assets/Hero & cards/tabs/Tech_tab2.webp",
        },
      ],
    },
    {
      title: "Cybersecurity",
      ImageCardPropsList: [
        {
          title: "Strengthen Security with AI-Driven Automation",
          paragraph:
            "Protect your business from cyber threats by automating cybersecurity monitoring, threat detection, and response workflows. With Digisquares AI Studio, you can implement AI models that continuously scan for vulnerabilities, prevent attacks, and optimize response strategies, ensuring your business remains secure in an increasingly complex digital world.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/Tech_tab3.webp",
          img1024: "/assets/Hero & cards/tabs/Tech_tab3.webp",
          img768: "/assets/Hero & cards/tabs/Tech_tab3.webp",
          img320: "/assets/Hero & cards/tabs/Tech_tab3.webp",
        },
      ],
    },
    {
      title: "IoT and Edge Computing",
      ImageCardPropsList: [
        {
          title: "Leverage IoT for Smarter Operations",
          paragraph:
            "Automate the deployment and management of IoT devices across your organization with Digisquares AppStudio. From real-time data collection to device monitoring, our platform helps businesses harness the power of IoT and edge computing to drive smarter, more responsive operations, improving efficiency across industries. ",
          link: "",
          img1024: "/assets/Hero & cards/tabs/Tech_tab4.webp",
          img1700: "/assets/Hero & cards/tabs/Tech_tab4.webp",
          img768: "/assets/Hero & cards/tabs/Tech_tab4.webp",
          img320: "/assets/Hero & cards/tabs/Tech_tab4.webp",
        },
      ],
    },
    {
      title: "Data Processing and Analytics ",
      ImageCardPropsList: [
        {
          title: "Unlock Insights with Automated Data Processing",
          paragraph:
            "Use Digisquares AI Studio to automate the processing and analysis of large datasets, turning raw information into actionable insights. Automate everything from customer behavior analysis to operational data, helping businesses make informed, data-driven decisions faster and more efficiently than ever before.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/Tech_tab5.webp",
          img1024: "/assets/Hero & cards/tabs/Tech_tab5.webp",
          img768: "/assets/Hero & cards/tabs/Tech_tab5.webp",
          img320: "/assets/Hero & cards/tabs/Tech_tab5.webp",
        },
      ],
    },
  ];

  const cardData = [
    {
      imageSrc: "/assets/Machine.svg",
      imageAlt: "MachineIcon",
      text: "Seamless AI Integration",
    },
    {
      imageSrc: "/assets/InnovationIcon.svg",
      imageAlt: "InnovationIcon",
      text: "Cloud Automation",
    },
    {
      imageSrc: "/assets/Market.svg",
      imageAlt: "MarketIcon",
      text: "Cybersecurity Automation",
    },
  ];

  const cards = [
    {
      image: "/assets/slider/ResponsibleAIModels_Header.webp",
      category: "DIGITAL TRANSFORMATION",
      title: "Creating Responsible AI Models",
      description:
        "As AI technology becomes more integrated into our daily lives, the importance of ethical AI focused on fairness, transparency, and compliance continues to grow.",
      moreLink: "/blog/ResponsibleAIModels",
    },
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
      image: "/assets/slider/AIinServiceManagement_Header.webp",
      category: "DIGISQUARES PLATFORM",
      title: "AI in Service Management Platforms",
      description:
        "The rapid advancement of AI-powered chatbots is reshaping the way businesses interact with both customers and internal systems. These intelligent chatbots, deliver personalized responses and automate routine tasks.",
        moreLink: "/blog/AIinServiceManagement",
    },
    {
      image: "/assets/slider/PersonalizeAIModels_Header.webp",
      category: "GOVERNANCE",
      title: "Personalize AI Models",
      description:
        "In today’s dynamic business environment, industries from healthcare to finance are increasingly relying on artificial intelligence to gain insights, streamline processes, and deliver exceptional experiences.",
        moreLink: "/blog/PersonalizeAIModels",
    },
  ];

  return (
    <>
      {/* <Headseo
        title={`Digisquares | Technologies`}
        heading={`Technologies`}
        description={`Human development in recent decades has been accompanied by rapid changes in technology and an increasing proliferation of digitized devices and services.`}
        url={`/industry/Technologies`}
        img={`/assets/GovernmentHeader.webp`}
        keywords={`Technologies, Technological change , Devices and services`}
      /> */}
      <BaseLayout>
        <div className={styles.MainContainer}>
          <div className={styles.MainContainer1}>
            <HeaderCard HeaderBannerPropsList={AnotherimgListData} />
          </div>

          <HomePanel
            imageUrl="/assets/Hero & cards/tech_img1.webp"
            title="Accelerate Innovation with AI Technology"
            description=" Boost your organization’s technological capabilities with Digisquares AI Studio, designed to facilitate the rapid development and deployment of AI models using synthetic data. Whether its predictive analytics, personalized product recommendations, or complex data analysis, AI Studio enables businesses to fine-tune and automate models tailored to specific industry needs."
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

export default Technologies;
