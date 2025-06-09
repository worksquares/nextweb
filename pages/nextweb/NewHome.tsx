import dynamic from "next/dynamic";
import Script from "next/script";
import posthog from "posthog-js";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ImageContainProps } from "../../comp/base/ImageLeftRightCard";
import DemoCard from "../../comp/DemoCard";
import ImageContentCard from "../../comp/ImageLeftRight";
import NewHeroSection from "../../comp/NewHeroSection";
import NewMenu from "../../comp/newMenu";
import TransformAI from "../../comp/TransformAI";
import Headseo from "../headseo";

const defaultCards = [
  {
    title: "App Studio",
    description:
      "Create fully-functional web and mobile applications with our intuitive low-code platform. Drag, drop, and deploy apps in record time no coding skills required.",
    image: "/assets/Hero & cards/cards/H-card-1.webp",
    learnMoreLink: "/product/AppStudio/",
    demoLink: "/learn-more/ai-agents",
  },
  {
    title: "Agent Studio",
    description:
      "Build intelligent chatbots and voice agents that engage customers 24/7. Seamlessly integrate natural language processing for personalized conversations.",
    image: "/assets/Hero & cards/cards/H-card-2.webp",
    learnMoreLink: "/product/AgentStudio/",
    demoLink: "/learn-more/ai-agents",
  },
  {
    title: "AI Studio",
    description:
      "Customize, fine-tune, and deploy AI models while generating synthetic data from one platform. Achieve powerful AI solutions without coding expertise.",
    image: "/assets/Hero & cards/cards/H-card-5.webp",
    learnMoreLink: "/product/Aistudio/",
    demoLink: "/learn-more/ai-agents",
  },
];

const cards = [
  {
    title: "Creating Responsible AI Models",
    description:
      "As AI technology becomes more integrated into our daily lives, the importance of ethical AI focused on fairness, transparency and compliance continues to grow. Building ethical AI models means minimizing bias, ensuring accountability and adhering to industry standards.",
    image: "/assets/Blogs/blogSlideImages/ResponsibleAIModels_Slider.webp",
    links: [
      { text: "HR Service Delivery", href: "/hr-service" },
      { text: "Workplace Service Delivery", href: "/workplace-service" },
    ],
    moreText: "Learn more",
    moreLink: "/blog/ResponsibleAIModels",
  },
  {
    title: "Satisfaction with Agent Studio",
    description:
      "In an era where customers expect personalized, responsive, and seamless interactions, businesses must go beyond one-size-fits-all solutions to build lasting relationships. By harnessing the power of artificial intelligence, companies can create tailored experiences that resonate with individual customers.",
    image:
      "/assets/Blogs/blogSlideImages/CustomerSatisfactionwithAgentStudio_Slider.webp",
    links: [
      { text: "HR Service Delivery", href: "/hr-service" },
      { text: "Workplace Service Delivery", href: "/workplace-service" },
    ],
    moreText: "Learn more",
    moreLink: "/blog/CustomerSatisfactionwithAgentStudio",
  },
  {
    title: "Workflows with AppStudio",
    description:
      "As businesses continue to evolve in a digital-first world, the pressure to improve efficiency and reduce costs has never been greater. Manual processes and repetitive tasks can slow down operations, consume valuable resources, and limit a company’s ability to focus on high-impact initiatives.",
    image: "/assets/Blogs/blogSlideImages/WorkflowswithAppStudio_Slider.webp",
    links: [
      { text: "HR Service Delivery", href: "/hr-service" },
      { text: "Workplace Service Delivery", href: "/workplace-service" },
    ],
    moreText: "Learn more",
    moreLink: "/blog/WorkflowswithAppStudio",
  },
  {
    title: "AI in Agent Studio",
    description:
      "In today’s digital-first world, customer expectations are higher than ever. They demand fast, personalized service that is available 24/7, across a range of channels. Meeting these demands can be a challenge, especially for companies that rely on traditional customer service models.",
    image: "/assets/Blogs/blogSlideImages/AIinAgentStudio_Slider.webp",
    links: [
      { text: "Developer Tools", href: "/developer-tools" },
      { text: "API Services", href: "/api-services" },
    ],
    moreText: "Learn more",
    moreLink: "/blog/AIinAgentStudio",
  },
  {
    title: "AppStudio’s Security Features",
    description:
      "In an increasingly digital world, application security is paramount. With cyber threats on the rise, businesses must ensure that the apps they develop are secure and resilient against potential attacks.",
    image:
      "/assets/Blogs/blogSlideImages/AppStudioSecurityFeatures_Slider.webp",
    links: [
      { text: "Marketing Automation", href: "/marketing-automation" },
      { text: "Customer Insights", href: "/customer-insights" },
    ],
    moreText: "Learn more",
    moreLink: "/blog/AppStudioSecurityFeatures",
  },
  {
    title: "AI-Powered Automation",
    description:
      "In the fast-paced world of IT, reducing Mean Time to Repair (MTTR) is critical for maintaining operational efficiency and minimizing the impact of incidents and outages.",
    image: "/assets/Blogs/blogSlideImages/AIPoweredAutomation_Slider.webp",
    links: [
      { text: "AI for Finance", href: "/ai-finance" },
      { text: "Financial Analytics", href: "/financial-analytics" },
    ],
    moreText: "Learn more",
    moreLink: "/blog/AIPoweredAutomation",
  },
  {
    title: "Building a Secure SaaS Ecosystem",
    description:
      "In today’s interconnected digital landscape, no organization is immune to cyberattacks. From ransomware to data breaches, cybersecurity threats are evolving rapidly, putting immense pressure on businesses to safeguard their critical systems and data.",
    image:
      "/assets/Blogs/blogSlideImages/ImprovingSAASCybersecurity_Slider.webp",
    links: [
      { text: "AI for Finance", href: "/ai-finance" },
      { text: "Financial Analytics", href: "/financial-analytics" },
    ],
    moreText: "Learn more",
    moreLink: "/blog/ImprovingSAASCybersecurity",
  },
  {
    title: "AI in Service Management Platforms",
    description:
      "The rapid advancement of AI-powered chatbots is reshaping the way businesses interact with both customers and internal systems. These intelligent chatbots, driven by AI and machine learning, have the ability to understand human language, deliver personalized responses, and automate routine tasks.",
    image: "/assets/Blogs/blogSlideImages/AIinServiceManagement_Slider.webp",
    links: [
      { text: "AI for Finance", href: "/ai-finance" },
      { text: "Financial Analytics", href: "/financial-analytics" },
    ],
    moreText: "Learn more",
    moreLink: "/blog/AIinServiceManagement",
  },
];

let ImageCardListData: ImageContainProps[] = [
  {
    title: "Process Automation",
    paragraph:
      "Elevate your business with Digisquares Studios, automating workflows to boost productivity, reduce human error, and streamline tasks for maximum efficiency and impact.",
    link: "/solutions/ProcessAutomation/",
    img1700: "/assets/Hero & cards/hero/pa_hero.webp",
    img1024: "/assets/Hero & cards/hero/pa_hero.webp",
    img768: "/assets/Hero & cards/hero/pa_hero.webp",
    img320: "/assets/Hero & cards/hero/pa_hero.webp",
  },
  {
    title: "Customer Experiences",
    paragraph:
      "Enhance customer experiences with Digisquares Studios, automating tailored interactions to increase satisfaction, deepen engagement, and foster lasting loyalty.",
    link: "/solutions/CustomerExperience/",
    img1700: "/assets/Hero & cards/hero/ce_hero.webp",
    img1024: "/assets/Hero & cards/hero/ce_hero.webp",
    img768: "/assets/Hero & cards/hero/ce_hero.webp",
    img320: "/assets/Hero & cards/hero/ce_hero.webp",
  },
  {
    title: "Legacy Modernization",
    paragraph:
      "Revitalize your legacy systems with Digisquares Studios, automating modernization to enhance performance, boost scalability, and enable seamless cloud integration.",
    link: "/solutions/LegacyModernization/",
    img1024: "/assets/Hero & cards/hero/lm_hero.webp",
    img1700: "/assets/Hero & cards/hero/lm_hero.webp",
    img768: "/assets/Hero & cards/hero/lm_hero.webp",
    img320: "/assets/Hero & cards/hero/lm_hero.webp",
  },
  {
    title: "Integrations",
    paragraph:
      "Connect Digisquares Studios with your tools to optimize workflows, automate repetitive tasks, and elevate productivity, delivering efficiency and performance improvements across your operations.",
    link: "/solutions/Integrations/",
    img1700: "/assets/Hero & cards/hero/ig_hero.webp",
    img1024: "/assets/Hero & cards/hero/ig_hero.webp",
    img768: "/assets/Hero & cards/hero/ig_hero.webp",
    img320: "/assets/Hero & cards/hero/ig_hero.webp",
  },
];

const HomeSlider = dynamic(() => import("../../comp/OldHomeSlider"), {
  loading: () => <p>Loading...</p>,
  ssr: false,
});

const GetStarted = dynamic(() => import("../../comp/GetStarted"), {
  ssr: false,
});

const NewFooter = dynamic(() => import("../../comp/newFooter"), {
  ssr: false,
});

const NewHome = () => {
  const { t } = useTranslation();

  useEffect(() => {
    posthog.capture("Page Viewed", { page: "Home" });
  }, []);


  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Script src="https://example.com/analytics.js" strategy="lazyOnload" />
      <Script id="custom-inline-script" strategy="lazyOnload">
        {`console.log("Custom script loaded lazily.")`}
      </Script>

      <Headseo
        title={`Low-Code Development Platform | Digisquares`}
        heading={`Ideas to Apps`}
        description={`Digisquares empowers businesses to thrive in the AI age by enabling them to create applications, deploy AI agents, and train custom AI models tailored to their specific use cases.`}
        url={`/nextweb/Home`}
        img={`/assets/newheroimg.webp`}
      />
      <NewMenu />
      <NewHeroSection
        title={t("welcome")}
        isVisible={true}
        ImgSrc={""}
        subtitle=""
        description=""
        buttonText={t("herobutton")}
        onButtonClick={"https://app.digisquares.com/register"}
      />
      <DemoCard showButtons={true} cardsData={defaultCards} />
      <TransformAI />
      <div style={{ margin: "65px 0px" }}>
        <ImageContentCard
          ImageCardPropsList={ImageCardListData}
          Homepage={true}
        />
      </div>
      <HomeSlider cards={cards} />
      <GetStarted />
      <NewFooter />
    </div>
  );
};
export default NewHome;
