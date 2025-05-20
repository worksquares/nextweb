import { HeaderContentProps } from "../../comp/base/HeaderContent";
import { SingleRowProps } from "../../comp/base/ImageSingleRow";
import BaseLayout from "../../comp/BaseLayout";
import CardComponent from "../../comp/CardPage";
import HeaderCard from "../../comp/HeaderChange";
import HomePanel from "../../comp/HomePanel";
import TabPanel from "../../comp/TabPanel";
import NewHomeSlider from "../../components/NewHomeSlider";
import styles from "../../styles/solutions/MainHub.module.css";

const CustomerExperience = () => {
  const tabData = [
    {
      title: "Automated Support",
      ImageCardPropsList: [
        {
          title: "Deliver Instant, 24/7 Customer Support",
          paragraph:
            "Automate customer support by deploying AI agents that can answer questions, process requests, and solve common issues instantly. With Digisquares Agent Studio, your customers receive timely assistance, reducing the need for human intervention and improving overall satisfaction. Automate FAQs, troubleshooting, and product guidance for a seamless, uninterrupted support experience.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/ce_tab1.webp",
          img1024: "/assets/Hero & cards/tabs/ce_tab1.webp",
          img768: "/assets/Hero & cards/tabs/ce_tab1.webp",
          img320: "/assets/Hero & cards/tabs/ce_tab1.webp",
        },
      ],
    },
    {
      title: "Personalized Marketing",
      ImageCardPropsList: [
        {
          title: "Tailor Marketing Messages for Every Customer",
          paragraph:
            "Automate personalized marketing campaigns using Digisquares AI Studio. Leverage customer data to send targeted messages, product recommendations, and offers based on individual preferences and behaviors. This ensures that your customers receive relevant, timely promotions that enhance their buying journey and increase brand loyalty.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/ce_tab2.webp",
          img1024: "/assets/Hero & cards/tabs/ce_tab2.webp",
          img768: "/assets/Hero & cards/tabs/ce_tab2.webp",
          img320: "/assets/Hero & cards/tabs/ce_tab2.webp",
        },
      ],
    },
    {
      title: "Sales Process",
      ImageCardPropsList: [
        {
          title: "Automate and Personalize the Sales Journey",
          paragraph:
            "Use Digisquares AppStudio to automate sales processes such as lead nurturing, follow-ups, and customer segmentation. Personalize each step of the sales journey by sending tailored communications, providing product recommendations, and streamlining the purchase process. Automated workflows ensure a consistent, customer-centric experience from start to finish, improving conversion rates and customer satisfaction.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/ce_tab3.webp",
          img1700: "/assets/Hero & cards/tabs/ce_tab3.webp",
          img768: "/assets/Hero & cards/tabs/ce_tab3.webp",
          img320: "/assets/Hero & cards/tabs/ce_tab3.webp",
        },
      ],
    },
    {
      title: "Feedback and Survey",
      ImageCardPropsList: [
        {
          title: "Automate the Collection of Customer Feedback",
          paragraph:
            "Gather customer feedback through automated surveys and forms. With Digisquares AppStudio, you can schedule feedback requests post-purchase or after support interactions, ensuring you get timely insights into customer satisfaction. Automate responses and follow-ups based on customer feedback to enhance the overall experience and address any issues proactively.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/ce_tab4.webp",
          img1700: "/assets/Hero & cards/tabs/ce_tab4.webp",
          img768: "/assets/Hero & cards/tabs/ce_tab4.webp",
          img320: "/assets/Hero & cards/tabs/ce_tab4.webp",
        },
      ],
    },

    {
      title: "Customer Retention",
      ImageCardPropsList: [
        {
          title: "Build Loyalty with Tailored Retention Strategies",
          paragraph:
            "Automate customer retention strategies using personalized workflows that engage users with loyalty rewards, special offers, and personalized content. With Digisquares AI Studio, predict customer behavior and trigger automated retention campaigns based on engagement levels or purchase history. Ensure your customers stay connected with your brand through tailored experiences that keep them coming back.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/ce_tab5.webp",
          img1700: "/assets/Hero & cards/tabs/ce_tab5.webp",
          img768: "/assets/Hero & cards/tabs/ce_tab5.webp",
          img320: "/assets/Hero & cards/tabs/ce_tab5.webp",
        },
      ],
    },
  ];

  let ImageRowGridData: SingleRowProps[] = [
    {
      image: "/assets/Blogs/blogheaders/FutureofAppDevelopment_Header.webp",
      category: "DIGITAL TRANSFORMATION",
      heading: "Future of App Development",
      description:
        "As businesses increasingly rely on software to drive growth and innovation, the need for efficient, flexible app development has never been more pressing.",
      link: "/blog/FutureofAppDevelopment",
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
      image: "/assets/Blogs/blogheaders/AIAgentsinAppStudio_Header.webp",
      category: "AI AND AUTOMATION",
      heading: "AI Agents in AppStudio",
      description:
        "In today’s digital landscape, businesses are constantly looking for ways to increase efficiency, reduce costs, and drive innovation. Enter AI agents intelligent, automated tools that can handle routine tasks, support decision-making, and streamline operations.",
      link: "/blog/AIAgentsinAppStudio",
    },
    {
      image:
        "/assets/Blogs/blogheaders/CustomerSatisfactionwithAgentStudio_Header.webp",
      category: "IT MANAGEMENT",
      heading: "Customer Satisfaction with Agent Studio",
      description:
        "In an era where customers expect personalized businesses must go beyond one-size-fits-all solutions to build lasting relationships. Companies can create tailored experiences that resonate with individual customers.",
      link: "/blog/CustomerSatisfactionwithAgentStudio",
    },
    {
      image: "/assets/Blogs/blogheaders/AIinServiceManagement_Header.webp",
      category: "DIGISQUARES PLATFORM",
      heading: "AI in Service Management Platforms",
      description:
        "The rapid advancement of AI-powered chatbots is reshaping the way businesses interact with both customers and internal systems. These intelligent chatbots, deliver personalized responses and automate routine tasks.",
      link: "/blog/AIinServiceManagement",
    },
  ];

  const cardData = [
    {
      imageSrc: "/assets/customer1.svg",
      imageAlt: "ClinicalIcon",
      text: "AI-Powered Customer Support Automation",
    },
    {
      imageSrc: "/assets/customer2.svg",
      imageAlt: "HealthcareIcon",
      text: "Personalized Marketing with Data-Driven Insights",
    },
    {
      imageSrc: "/assets/customer3.svg",
      imageAlt: "PatientCareIcon",
      text: "Streamlined Sales and Retention Workflows",
    },
  ];

  let AnotherimgListData: HeaderContentProps[] = [
    {
      title: "Customer",
      paragraph:
        "Elevate customer experience with Digisquares Studios, automating personalized interactions that improve satisfaction, drive engagement, and boost loyalty.",
      btnLink: "#",
      img1700: "/assets/Hero & cards/hero/ce_hero.webp",
      img1024: "/assets/Hero & cards/hero/ce_hero.webp",
      img768: "/assets/Hero & cards/hero/ce_hero.webp",
      img320: "/assets/Hero & cards/hero/ce_hero.webp",
      backgroundColor: "#154965",
    },
  ];

  return (
    <>

    <div>
      <BaseLayout>
        <div className={styles.MainContainer}>
          <div className={styles.MainContainer1}>
            <HeaderCard HeaderBannerPropsList={AnotherimgListData} />
          </div>

          <HomePanel
            imageUrl="/assets/Hero & cards/ce_img1.webp"
            title="Enhance Customer Interactions with AI-Powered Automation"
            description="Boost customer satisfaction by leveraging Digisquares Agent Studio to build intelligent AI agents that deliver personalized, responsive interactions. Whether through text, voice, or chatbots, our AI agents can provide 24/7 support, answer queries, and guide customers through processes like purchasing or troubleshooting."
          />
          <TabPanel tabs={tabData} />

          <CardComponent cards={cardData} />

          <div className={styles.MoreResources}>
            {/* <HomeSlider cards={ImageRowGridData} /> */}
            <NewHomeSlider cards={ImageRowGridData} />
          </div>
        </div>
      </BaseLayout>
    </div>
    </>
  );
};

export default CustomerExperience;
