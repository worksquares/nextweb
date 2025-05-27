import React, { useEffect, useRef } from "react";
import VideoSection from "../../comp/NewImageLeftRight";
import NewHeroSection from "../../comp/NewHeroSection";
import DemoCard from "../../comp/DemoCard";
import Headseo from "../headseo";
import BaseLayout from "../../comp/BaseLayout";
import FAQComponent from "../../comp/FAQComponent";
import HomeTab from "../../comp/HomeTab";
import HeroVideo from "../../comp/videoscreen";
import { useRouter } from "next/router";

const customTabs = [
  {
    key: "1",
    tabTitle: "Workflow",
    videoUrl: "/assets/Product/appstudio1.webp",
    title: "App Studio Workflow Builder",
    description:
      "Effortlessly create and automate workflows with AppStudio. Customize templates and use drag-and-drop tools to design processes and integrate services, no coding required.",
    link: "https://docs.digisquares.com/docs/Workflow/WorkFlow%20Intro",
  },
  {
    key: "2",
    tabTitle: "Spark Agent",
    videoUrl: "/assets/Product/appstudio2.webp",
    title: "Spark Agent Management",
    description:
      "SparkAgent offers intelligent chatbot management, enabling easy configuration and deployment to enhance customer support and automate tasks.",
    link: "https://docs.digisquares.com/docs/Apps/Copilot/OverView",
  },
  {
    key: "3",
    tabTitle: "Visual Query",
    videoUrl: "/assets/Product/appstudio4.webp",
    title: "App Studio Query Builder",
    description:
      "Easily build visual queries without needing to write SQL using AppStudio's Visual Query Builder. Drag-and-drop data elements to create powerful queries and generate insights quickly.",
    link: "https://docs.digisquares.com/docs/Library/VisualQuery/visualquery%20Intro",
  },
  {
    key: "4",
    tabTitle: "Integrations",
    videoUrl: "/assets/Product/appstudio3.webp",
    title: "AppStudio API Integration",
    description:
      "Create and manage integrations effortlessly with AppStudio's API tools. Define endpoints, control data flow, and ensure secure communication with a user-friendly interface.",
    link: "https://docs.digisquares.com/docs/DataSource/Integration",
  },
  {
    key: "5",
    tabTitle: "Database",
    videoUrl: "/assets/Product/appstudio5.webp",
    title: "AppStudio Database Manager",
    description:
      "Effortlessly manage and scale databases with AppStudio’s intuitive Database Manager, handling schemas, migrations, and performance without deep SQL knowledge.",
    link: "https://docs.digisquares.com/docs/DataSource/Database/Database%20Intro",
  },
];

const faqData = [
  {
    key: "1",
    question: "Who can use a App Studio platform?",
    answer:
      "A App Studio platform can be used by both technical and non-technical users. Developers can build complex applications faster by leveraging pre-built components, while business users with little to no coding experience can create simple apps through drag-and-drop interfaces. It's ideal for businesses looking to empower teams across various departments to contribute to app development without needing deep programming knowledge.",
  },
  {
    key: "2",
    question: "What is a  App Studio platform?",
    answer:
      "A  App Studio platform is a development environment that allows users to build applications with minimal hand-coding by using visual tools, drag-and-drop components, and pre-configured templates. It simplifies the app development process, enabling faster delivery of apps for web, mobile, and desktop environments, while still allowing custom coding when needed.",
  },
  {
    key: "3",
    question: "What types of apps can I build with a  App Studio platform?",
    answer:
      "With a  App Studio platform, you can build a wide range of applications, including internal business tools, customer-facing web and mobile apps, e-commerce solutions, CRM systems, process automation apps, and even AI-powered applications. The flexibility of  App Studio platforms allows for the creation of simple forms to more complex, enterprise-grade solutions.",
  },
  {
    key: "4",
    question: "How secure are applications built on a  App Studio platform?",
    answer:
      "Applications built on a  App Studio platform can be highly secure, depending on the platform's security features. Most platforms offer built-in security measures like authentication, encryption, role-based access control, and compliance with industry standards such as GDPR or HIPAA. Additionally, developers can implement custom security protocols to further enhance the safety of the applications.",
  },
  {
    key: "5",
    question: "What are the benefits of using a  App Studio platform?",
    answer:
      "The benefits of using a  App Studio platform include faster development times, lower costs, and reduced need for specialized programming skills. It enables rapid prototyping and iterations, improves collaboration between IT and business teams, and offers the flexibility to customize applications. Additionally, it allows businesses to respond quickly to market changes by deploying new apps faster and more efficiently.",
  },
];

const myCustomCards = [
  {
    title: "Healthcare for Smarter Care",
    description:
      "App Studio helps healthcare providers develop apps for patient management, telemedicine, and health records, enhancing care delivery.",
    demoLink: "/demo/medical-apps",
    image: "/assets/Hero & cards/cards/As-card-1.webp",
    learnMoreLink: "/industry/Medical/",
  },
  {
    title: "Classroom Apps That Teach",
    description:
      "App Studio empowers educators to build e-learning platforms and student management apps, improving the learning experience.",
    demoLink: "/demo/education-apps",
    image: "/assets/Hero & cards/cards/As-card-2.webp",
    learnMoreLink: "/industry/Education/",
  },
  {
    title: "Manufacturing Workflows",
    description:
      "App Studio enables manufacturers to create apps for workflow, inventory, and quality control, enhancing operational efficiency.",
    demoLink: "/demo/manufacturing-apps",
    image: "/assets/Hero & cards/cards/As-card-3.webp",
    learnMoreLink: "/industry/Manufacturing/",
  },
];

const Lowcode = () => {
  const router = useRouter();
  const { id } = router.query as { id?: string };
  const heroVideoRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (id && heroVideoRef.current) {
      heroVideoRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [id]);

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Headseo
        title={` App Studio Development Platform | Digisquares`}
        heading={`Ideas to Apps`}
        description={`Digisquares is a low code platform that enables you to develop high quality apps 10X faster.`}
        url={`/nextweb/Home`}
        img={`/assets/LowCode3D(1).webp`}
      />
      <BaseLayout>
        <NewHeroSection
          title="App Studio"
          isVisible={true}
          ImgSrc={"/assets/Hero & cards/hero/AppStudio_Hero.webp"}
          subtitle=""
          description="Create web and mobile apps fast with App Studio-drag, drop, deploy, no coding needed."
          buttonText="Get started"
          onButtonClick={"https://app.digisquares.com/register"}
        />
        <HeroVideo
          videoRef={heroVideoRef}
          title="Watch App Studio Transform Ideas"
          dir="left"
          video={true}
          subtitle=""
          description=""
          buttonText="learn more"
          onButtonClick={() => alert("learn more clicked!")}
        />
        <DemoCard showButtons={false} cardsData={myCustomCards} />
        <VideoSection
          title="AI TO WORK FOR PEOPLE"
          dir="left"
          video={false}
          backgroundColor="#4C1565"
          ImgSrc={"/assets/Hero & cards/as_banner.webp"}
          subtitle=""
          description="Discover how our intelligent platform streamlines your business with AI, freeing up your team to focus on what truly matters. "
          buttonText="learn more"
          onButtonClick={() => console.log("learn more clicked!")}
        />
        <HomeTab tabData={customTabs} />
        <div id="faqComponent">
          <FAQComponent faqData={faqData} />
        </div>
      </BaseLayout>
    </div>
  );
};
export default Lowcode;
