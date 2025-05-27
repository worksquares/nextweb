import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import DemoCard from "../../comp/DemoCard";
import FAQComponent from "../../comp/FAQComponent";
import HomeTab from "../../comp/HomeTab";
import NewFooter from "../../comp/newFooter";
import NewHeroSection from "../../comp/NewHeroSection";
import VideoSection from "../../comp/NewImageLeftRight";
import NewMenu from "../../comp/newMenu";
import HeroVideo from "../../comp/videoscreen";

const customTabs = [
  {
    key: "1",
    tabTitle: "Conversational AI",
    videoUrl: "/assets/Product/agentstudio4.webp",
    title: "Build Conversational AI Projects",
    description:
      "Effortlessly create AI-powered conversational projects with Digisquares Agent Studio. Select from chatbot and voice assistant templates, and customize with a drag-and-drop interface.",
    link: "https://docs.digisquares.com/docs/Apps/Copilot/OverView"
  },
  {
    key: "2",
    tabTitle: "Interactions",
    videoUrl: "/assets/Product/agentstudio5.webp",
    title: "Manage User Access",
    description:
      "Manage user interactions in Agent Studio with ease. Assign roles, set permissions, and track engagement metrics to secure access and optimize AI agents.",
    link: "https://docs.digisquares.com/docs/Apps/Copilot/OverView"
  },
  {
    key: "3",
    tabTitle: "Access Control",
    videoUrl: "/assets/Product/agentstudio6.webp",
    title: "Role-Based Access Control",
    description:
      "Designate team roles in Agent Studio to control who can design, customize, and deploy conversational agents. Assign access based on responsibility for a secure, streamlined workflow.",
    link: "https://docs.digisquares.com/docs/Apps/Copilot/OverView"
  },
  {
    key: "4",
    tabTitle: "Manage APIs",
    videoUrl: "/assets/Product/agentstudio7.webp",
    title: "Integrate and Manage APIs",
    description:
      "Use Agent Studio's API management tools to connect conversational agents to external systems. Integrate seamlessly with third-party apps, CRMs, or databases to expand agent capabilities.",
    link: "https://docs.digisquares.com/docs/Apps/Copilot/OverView"
  },
  {
    key: "5",
    tabTitle: "Data Management",
    videoUrl: "/assets/Product/agentStudio8.webp",
    title: "Manage Agent Data Efficiently",
    description:
      "Optimize conversational agents with powerful data tools in Agent Studio. Configure, query, and manage databases to ensure agents have timely information for effective user interactions.",
    link: "https://docs.digisquares.com/docs/Apps/Copilot/OverView"
  }
];

const faqData = [
  {
    key: "1",
    question: "Who is the ideal user of an Agents Studio platform?",
    answer:
      "The ideal users of an Agents Studio platform include developers, customer support teams, marketing professionals, and even non-technical staff looking to create chatbots or voice assistants. With its intuitive drag-and-drop interface, the platform is accessible to both technical and non-technical users, allowing them to build conversational AI solutions without needing advanced coding skills."
  },
  {
    key: "2",
    question: "How would you describe an Agents Studio for conversation and voice?",
    answer:
      "An Agents Studio is a platform designed for creating AI-powered conversational agents like chatbots and voice assistants. It enables users to build, customize, and deploy intelligent agents that can handle customer interactions, automate tasks, and provide personalized responses. It typically includes tools like natural language processing (NLP) and support for multi-language and multi-speaker capabilities."
  },
  {
    key: "3",
    question: "What kinds of conversational agents can be developed with an Agents Studio?",
    answer:
      "You can develop a wide range of conversational agents with an Agents Studio, including customer service chatbots, virtual assistants for smart devices, voice-enabled shopping assistants, and support agents that manage appointments or answer FAQs. These agents can be deployed across multiple platforms such as websites, apps, and smart home devices."
  },
  {
    key: "4",
    question: "How does an Agents Studio ensure the security of conversational agents?",
    answer:
      "Agents Builders come equipped with advanced security features like encryption, user authentication, and role-based access control. These security measures ensure that customer interactions, personal data, and business workflows remain protected. The platform is designed to comply with industry standards, safeguarding your agents from security vulnerabilities."
  },
  {
    key: "5",
    question: "What are the key advantages of using an Agents Studio platform?",
    answer:
      "Using an Agents Studio offers several key advantages: it reduces the time needed to build intelligent agents, requires no coding expertise, and supports multi-language functionality. Businesses can automate customer support, provide personalized assistance around the clock, and integrate agents easily with existing systems, boosting operational efficiency and customer satisfaction."
  }
];

const myCustomCards = [
  {
    title: "Empowering Healthcare Agents",
    description:
      "Agent Studio allows healthcare providers to create  agents for patient inquiries, appointment scheduling, and health dissemination, improving engagement.",
    image: "/assets/Hero & cards/cards/Ag-card-1.webp",
    demoLink: "/demo/medical-agent",
    learnMoreLink: "/industry/Medical/"
  },
  {
    title: "Revolutionizing Banking Agents",
    description:
      "Agent Studio helps banks deploy AI agents for customer support, loan inquiries, and transaction assistance, providing an efficient customer experience.",
    image: "/assets/Hero & cards/cards/Ag-card-2.webp",
    demoLink: "/demo/banking-agent",
    learnMoreLink: "/industry/Banking/"
  },
  {
    title: "AI for Government Services",
    description:
      "Agent Studio enables government agencies to deploy conversational agents for citizen services, information dissemination, and application processing.",
    image: "/assets/Hero & cards/cards/Ag-card-3.webp",
    demoLink: "/demo/government-agent",
    learnMoreLink: "/industry/Government/"
  }
];

const Agentbuilder = () => {
  const router = useRouter();
  const { id } = router.query;
  const heroVideoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (id && heroVideoRef.current) {
      heroVideoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [id]);

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <NewMenu />
      <NewHeroSection
        title="Agent Studio"
        isVisible={true}
        ImgSrc="/assets/Hero & cards/hero/ag_hero.webp"
        subtitle=""
        description="Empower your business with Digisquares Agent Studio—deploy AI-driven, multi-language agents, no coding needed."
        buttonText="Get started"
        onButtonClick="https://app.digisquares.com/register"
      />
      <HeroVideo
        videoRef={heroVideoRef}
        title="Watch Agent Studio Transform Ideas"
        dir="left"
        video={true}
        subtitle=""
        description=""
        buttonText="Learn More"
        onButtonClick={() => alert("Learn more clicked!")}
      />
      <DemoCard showButtons={false} cardsData={myCustomCards} />
      <VideoSection
        title="Customer Engagement with AI"
        dir="left"
        video={false}
        backgroundColor="#651535"
        ImgSrc="/assets/Hero & cards/videosectionimg2.webp"
        subtitle=""
        description="With Digisquares Agent Studio, your business can provide intelligent, personalized conversations that feel natural, improving customer satisfaction and operational efficiency."
        buttonText="Learn More"
        onButtonClick={() => console.log("Learn more clicked!")}
      />
      <HomeTab tabData={customTabs} />
      <FAQComponent faqData={faqData} />
      <NewFooter />
    </div>
  );
};
export default Agentbuilder;
