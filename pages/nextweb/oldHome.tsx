import React from "react";
import Hero from "../../comp/Hero";
import Tcv from "../../comp/Tcv";
import Workflows from "../../comp/Workflows";
import Services from "../../comp/Services";
import News from "../../comp/News";
import { ImageContainProps } from "../../comp/base/ImageLeftRightCard";
import ImageContentCard from "../../comp/ImageLeftRight";
import Headseo from "../headseo";
import Screen from "../../comp/Screen";
import BaseLayout from "../../comp/BaseLayout";

const Home = () => {
  let ImageCardListData: ImageContainProps[] = [
    {
      title: "Automate Your Tasks with Copilot",
      paragraph:
        " Integrate Copilot into your systems for comprehensive task automation. Automate tasks like banking KYC, customer queries, sales management, leave requests, and loan applications. Enhance efficiency by gathering user requirements and executing actions based on requests and roles. Experience the future of task automation with Copilot across web, WhatsApp, Slack, Messenger, and more.",
      link: "#",
      img1700: "/assets/page.webp",
      img1024: "/assets/page.webp",
      img768: "/assets/page.webp",
      img320: "/assets/ChatbotAnimateGif.gif",
    },
    {
      title: "Revolutionize Web Development",
      paragraph:
        " Create web applications using our low-code platform, simplifying the process with a single language or toolset. Deploy apps instantly across platforms, with full source code support for .NET, Java, Node.js, and Python. Seamlessly integrate with existing systems, accelerating development cycles and boosting productivity, letting developers focus on innovation with Digisquares.",
      link: "#",
      img1700: "/assets/wrkflow.webp",
      img1024: "/assets/wrkflow.webp",
      img768: "/assets/wrkflow.webp",
      img320: "/assets/WebDevTest1.gif",
    },
    {
      title: "Effortless Mobile Development",
      paragraph:
        " Accelerate web, mobile, and Copilot application development with our AI-powered low-code platform. Automate SQL generation, code creation, and visual queries, with automatic deployment and rollback. Copilot assists in all tasks, from single-click API creation to AI-driven forms, combining low-code simplicity with AI to boost productivity and innovation with Digisquares.",
      link: "#",
      img1700: "/assets/page.webp",
      img1024: "/assets/page.webp",
      img768: "/assets/page.webp",
      img320: "/assets/AppDevelopmentGif.gif",
    },

    {
      title: "AI-Enhanced Development",
      paragraph:
        " Our AI-powered low-code platform accelerates web, mobile, and Copilot app development. Generate SQL from prompts, automate code creation, and build visual queries effortlessly. Benefit from automatic deployment and rollback across environments. With Copilot, get comprehensive assistance, from single-click API creation to AI-driven form generation. This combination boosts productivity, enabling faster and more efficient innovation with Digisquares.",
      link: "#",
      img1700: "/assets/wrkflow.webp",
      img1024: "/assets/wrkflow.webp",
      img768: "/assets/wrkflow.webp",
      img320: "/assets/ChatFlowAnimated.gif",
    },
  ];

  return (
    <>
      <Headseo
        title={`Low-Code Development Platform | Digisquares`}
        heading={`Ideas to Apps`}
        description={`Digisquares is a low code platform that enables you to develop high quality apps 10X faster.`}
        url={`/nextweb/Home`}
        img={`/assets/LowCode3D(1).webp`}
      />
      <BaseLayout>
        <div style={{ backgroundColor: "#7060fe" }}>
          <Hero />
        </div>

        <Tcv />
        <ImageContentCard ImageCardPropsList={ImageCardListData} />
        <Workflows />
        <Screen>
          <News />
          <Services />
        </Screen>
      </BaseLayout>
    </>
  );
};
// test
export default Home;
