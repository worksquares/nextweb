import { ImageContainProps } from "../../comp/base/ImageLeftRightCard";
import BaseLayout from "../../comp/BaseLayout";
import CardsandBlog from "../../comp/CardsandBlog";
import ImageContentCard from "../../comp/ImageLeftRight";
import NewHeroSection from "../../comp/NewHeroSection";
import TabPanel from "../../comp/TabPanel";
import HomeSlider from "../../components/HomeSlider";
import Headseo from "../headseo";

const PartnerProgram = () => {
  const tabData = [
    {
      title: "Program Alliance",
      ImageCardPropsList: [
        {
          title: "Unlock Partnership Opportunities",
          paragraph:
            "Collaborate with Digisquares to innovate through AI, enhancing business operations and achieving mutual growth in global markets.",
          link: "",
          img1700: "/assets/ProcessAutomation6.webp",
          img1024: "/assets/ProcessAutomation6.webp",
          img768: "/assets/ProcessAutomation6.webp",
          img320: "/assets/ProcessAutomation6.webp",
        },
      ],
    },
    {
      title: "Reseller Opportunity",
      ImageCardPropsList: [
        {
          title: "Join as a Reseller",
          paragraph:
            "Resell Digisquares solutions and empower clients with advanced AI tools that drive success and expand their capabilities.",
          link: "",
          img1700: "/assets/ProcessAutomation2.webp",
          img1024: "/assets/ProcessAutomation2.webp",
          img768: "/assets/ProcessAutomation2.webp",
          img320: "/assets/ProcessAutomation2.webp",
        },
      ],
    },
    {
      title: "Provider Partnership",
      ImageCardPropsList: [
        {
          title: "Empower with Digisquares",
          paragraph:
            "Offer Digisquares AI services to clients, enabling them to optimize operations with reliable, AI-driven technology and support.",
          link: "",
          img1024: "/assets/ProcessAutomation3.webp",
          img1700: "/assets/ProcessAutomation3.webp",
          img768: "/assets/ProcessAutomation3.webp",
          img320: "/assets/ProcessAutomation3.webp",
        },
      ],
    },
    {
      title: "Consulting Alliance",
      ImageCardPropsList: [
        {
          title: "Consult and Implement",
          paragraph:
            "Guide clients in AI integration, backed by Digisquares' expertise, for seamless digital transformation and enhanced productivity.",
          link: "",
          img1024: "/assets/ProcessAutomation4.webp",
          img1700: "/assets/ProcessAutomation4.webp",
          img768: "/assets/ProcessAutomation4.webp",
          img320: "/assets/ProcessAutomation4.webp",
        },
      ],
    },

    {
      title: "Developer Program",
      ImageCardPropsList: [
        {
          title: "Build on Digisquares",
          paragraph:
            "Create, customize, and distribute applications on the Digisquares platform to address industry challenges and expand solutions.",
          link: "",
          img1024: "/assets/ProcessAutomation5.webp",
          img1700: "/assets/ProcessAutomation5.webp",
          img768: "/assets/ProcessAutomation5.webp",
          img320: "/assets/ProcessAutomation5.webp",
        },
      ],
    },
  ];

  const CardHeaderInfo = {
    title: "Empowering partners through innovation",
    description:
      "The Partner Program offers access to dedicated Digisquares team members, investment through Partner Development Funds and opportunities for differentiation with Product Line Achievements, Specializations and awards.",
  };

  const CardBlogHeaderInfo = {
    title: "Choose your path to market",
    description:
      "Select from four unique program modules and tailor your partnership to fit you",
  };

  const CardInformationData = [
    {
      Icon: "/svg/Explore.svg",
      heading: "Unlock Benefits to Increase Growth",
      description:
        "Access dedicated Digisquares resources to develop your workforce, capture customer opportunities, and expand your practice.",
      linkName: "Learn More",
      linkUrl: "",
    },
    {
      Icon: "/svg/Explore.svg",
      heading: "Dedicated Resources to Succeed",
      description:
        "Access the tools needed to develop your workforce and grow your business..",
      linkName: "Learn More",
      linkUrl: "",
    },
    {
      Icon: "/svg/Explore.svg",
      heading: "Stand Out with Digisquares Partnership",
      description:
        "Achieve recognition with badges, specialization designations, awards, and event sponsorships.",
      linkName: "Learn More",
      linkUrl: "",
    },
  ];

  const myCustomCardsData = [
    {
      title: "Reseller Opportunities",
      description:
        "Promote and resell Digisquares products, expanding your offerings and boosting customer satisfaction.",
      demoLink: "/demo/medical-apps",
      image: "/assets/ResellerOppertunities_Final.webp",
      learnMoreLink: "/industry/Manufacturing/",
    },
    {
      title: "Service Provider",
      description:
        "Deliver scalable, managed services on the Digisquares Platform to ensure client satisfaction and growth.",
      demoLink: "/demo/education-apps",
      image: "/assets/ServiceProvider.webp",
      learnMoreLink: "/industry/FinancialServices/",
    },
    {
      title: "Custom Apps",
      description:
        "Create custom apps on Digisquares Platform for streamlined workflows and operational improvements.",
      demoLink: "/demo/manufacturing-apps",
      image: "/assets/CustomApps.webp",
      learnMoreLink: "/industry/Technologies/",
    },
    {
      title: "Technology Solutions",
      description:
        "Deliver industry-specific solutions with Digisquares, from healthcare to retail, driving customer success.",
      demoLink: "/demo/manufacturing-apps",
      image: "/assets/TechnologySolutions.webp",
      learnMoreLink: "/industry/Technologies/",
    },
  ];

  let ImageCardListData: ImageContainProps[] = [
    {
      title: "Why Choose Digisquares",
      paragraph:
        "User-Friendly: Our intuitive platform makes it easy for anyone, even those without a background in coding, to build and launch applications.Flexible: Our platform is adaptable to your ever-changing business demands, keeping you one step ahead in your industry.",
      link: "",
      img1700: "/assets/why-digisqares.webp",
      img1024: "/assets/why-digisqares.webp",
      img768: "/assets/why-digisqares.webp",
      img320: "/assets/why-digisqares.webp",
    },
    {
      title: "Advanced Features",
      paragraph:
        "Integration-Centric: Effortlessly integrate with your existing systems, enhancing functionality and maximising efficiency.",
      link: "",
      img1700: "/assets/advance.webp",
      img1024: "/assets/advance.webp",
      img768: "/assets/advance.webp",
      img320: "/assets/advance.webp",
    },
    {
      title: "Ready to Accelerate Your Digital Journey?",
      paragraph:
        "Join the ranks of thriving businesses who have chosen Digisquares for their application development needs. Get started today and redefine what's possible for your organization.",
      link: "/partners/ContactUs/",
      img1024: "/assets/Ready.webp",
      img1700: "/assets/Ready.webp",
      img768: "/assets/Ready.webp",
      img320: "/assets/Ready.webp",
      button: "Get started",
    },
  ];

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Headseo
        title={` Partner Program | Digisquares`}
        heading={`We're unstoppable together`}
        description={`At Digisquares, we embrace endless possibilities. Our unique platform and partner ecosystem bring intelligence and AI to every corner of the enterprise, making the world work better for everyone.`}
        url={`/partners/PartnerProgram`}
        img={`/assets/LowCode3D(1).webp`}
      />
      <BaseLayout>
        <NewHeroSection
          title="We're unstoppable together"
          isVisible={true}
          ImgSrc={"/assets/Hero & cards/hero/PartnerProgram_NewMain.webp"}
          subtitle=""
          description="At Digisquares, we embrace endless possibilities. Our unique platform and partner ecosystem bring intelligence and AI to every corner of the enterprise, making the world work better for everyone."
          buttonText="Get started"
          onButtonClick={"/partners/ContactUs/"}
        />
        <div style={{ margin: "65px 0px" }}>
          <TabPanel tabs={tabData} />
        </div>
        <CardsandBlog
          CardHeader={CardHeaderInfo}
          CardBlogHeader={CardBlogHeaderInfo}
          CardInformation={CardInformationData}
          // myCustomCards={myCustomCardsData}
        />
        <HomeSlider cards={myCustomCardsData} />
        <div style={{ margin: "65px 0px" }}>
          <ImageContentCard ImageCardPropsList={ImageCardListData} />
        </div>
      </BaseLayout>
    </div>
  );
};

export default PartnerProgram;
