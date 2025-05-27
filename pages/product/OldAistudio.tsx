import React, { useEffect, useRef } from "react";
import VideoSection from "../../comp/NewImageLeftRight";
import NewHeroSection from "../../comp/NewHeroSection";
import DemoCard from "../../comp/DemoCard";
import NewMenu from "../../comp/newMenu";
import NewFooter from "../../comp/newFooter";
import FAQComponent from "../../comp/FAQComponent";
import HeroVideo from "../../comp/videoscreen";
import HomeTab from "../../comp/HomeTab";
import { useRouter } from "next/router";
const customTabs = [
  {
    key: "1",
    tabTitle: "Build Agents",
    videoUrl: "/assets/Product/aistudio4.webp",
    title: "Build Conversational Agents",
    description:
        "Effortlessly design intelligent conversational agents in Digisquares AI Studio with pre-built templates and a drag-and-drop interface for customization.",
    link:"https://docs.digisquares.com/docs/Apps/Copilot/OverView"
},
{
    key: "2",
    tabTitle: "Interaction",
    videoUrl: "/assets/Product/aistudio5.webp",
    title: "Interaction Management",
    description:
        "Easily manage user interactions in AI Studio by defining roles, setting permissions, and monitoring engagement metrics, all with advanced security settings to optimize agent performance.",
    link:"https://docs.digisquares.com/docs/Apps/Copilot/OverView"
},
{
    key: "3",
    tabTitle: "Access Role ",
    videoUrl: "/assets/Product/aistudio6.webp",
    title: "Access and Role Management",
    description:
        "Maintain secure workflows with AI Studio’s role-based access management, allowing teams to control who designs, customizes, and deploys AI agents for collaborative development.",
    link:"https://docs.digisquares.com/docs/Apps/Copilot/OverView"
},
{
    key: "4",
    tabTitle: "Integration ",
    videoUrl: "/assets/Product/aistudio7.webp",
    title: "Integration and API Tools",
    description:
        "Connect conversational agents to external systems with AI Studio's API management. Integrate with CRMs, databases, and apps like Slack and Microsoft Teams to expand capabilities.",
    link:"https://docs.digisquares.com/docs/Apps/Copilot/OverView"
},
{
  key: "5",
  tabTitle: "Database Management",
  videoUrl: "/assets/Product/aistudio8.webp",
  title: "AI Studio Database Tools",
  description: "Use AI Studio's robust database tools to store, access, and analyze data for your conversational agents, ensuring scalability, performance, and data integrity.",
  link: "https://docs.digisquares.com/docs/Apps/Copilot/OverView"
}
];

const faqData = [
  {
    key: "1",
    question: " Who can use an AI Studio for fine-tuning and deployment?",
    answer:
      "AI Studio can be used by developers, data scientists, machine learning engineers, and even non-technical users looking to optimize AI models without in-depth coding knowledge. The platform's intuitive tools, synthetic data integration, and easy deployment features make it accessible to a wide range of users, from technical experts to business analysts.",
  },
  {
    key: "2",
    question: "What is an AI Studio for fine-tuning and deployment?",
    answer:
      " AI Studio for fine-tuning and deployment is a comprehensive platform that allows users to train, fine-tune, and deploy AI models. It provides tools to improve model accuracy, performance, and customization using synthetic data. With easy-to-use interfaces and automation, it enables seamless integration of AI models into applications for various business needs.",
  },
  {
    key: "3",
    question: "What types of AI models can I build and deploy with AI Studio?",
    answer:
      "With AI Studio, you can build and deploy a wide range of AI models, including natural language processing (NLP), image recognition, predictive analytics, speech recognition, and recommendation engines. The platform supports customization of pre-trained models or the creation of new models to fit specific business applications, ensuring flexibility across different use cases.",
  },
  {
    key: "4",
    question: "How secure are AI models deployed using AI Studio?",
    answer:
      "Applications and AI models built with AI Studio are highly secure. The platform integrates industry-standard security measures, including encryption, authentication, and access control. You can also deploy models in secure environments like cloud-based platforms or on-premise data centers, ensuring your data and models remain protected throughout the AI lifecycle.",
  },
  {
    key: "5",
    question: "What are the benefits of using AI Studio for fine-tuning and deployment?",
    answer:
      "The benefits of using AI Studio include faster development times, improved model accuracy through synthetic data, easy deployment across web and mobile applications, and reduced need for deep technical expertise. The platform streamlines the AI model lifecycle, offering drag-and-drop interfaces, pre-built tools, and automation, which lead to cost savings, scalability, and a more efficient AI implementation process.",
  },
];

const myCustomCards = [
  {
    title: 'AI-Driven Healthcare Solutions',
    description: 'AI Studio enables healthcare providers to fine-tune AI models for diagnostics, patient monitoring, and predictive analytics, enhancing healthcare services.',
    image: '/assets/Hero & cards/cards/Ai-card-1.webp',
    demoLink: '/demo/medical-ai',
    learnMoreLink: '/industry/Medical/',
  },
  {
    title: 'Revolutionizing Tech with AI',
    description: 'AI Studio helps tech companies fine-tune AI models for software automation, data processing, and predictive maintenance, driving technological innovation.',
    image: '/assets/Hero & cards/cards/Ai-card-2.webp',
    demoLink: '/demo/technology-ai',
    learnMoreLink: '/industry/Technologies/',
  },
  {
    title: 'Telecom Innovations through AI',
    description: 'AI Studio supports telecom providers in optimizing network operations, enhancing customer service, and implementing AI-driven predictive maintenance solutions.',
    image: '/assets/Hero & cards/cards/Ai-card-3.webp',
    demoLink: '/demo/telecom-ai',
    learnMoreLink: '/industry/TeleCommunication/',
  },
];
const Aistudio = () => {
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
            <NewMenu/>
            <NewHeroSection
                title="AI Studio"
                isVisible={true}
                ImgSrc={"/assets/Hero & cards/hero/ai_hero.webp"}
                subtitle=""
                description="Transform AI development with Digisquares AI Studio-refine and deploy models effortlessly using intuitive tools."
                buttonText="Get started"
                onButtonClick={'https://app.digisquares.com/register'}
            />
              <HeroVideo
                videoRef={heroVideoRef}
                title="Watch AI Studio Transform Ideas"
                dir='left'
                video={true}
                subtitle=""
                description=""
                buttonText="Learn More"
                onButtonClick={() => alert('Learn more clicked!')}
            />
            <DemoCard showButtons={false} cardsData={myCustomCards}/>
            <VideoSection
                title="The Power of AI for Business"
                dir="left"
                video={false}
                backgroundColor="#1A1565"
                ImgSrc={"/assets/Hero & cards/ai_banner.webp"}
                subtitle=""
                description="Discover how Digisquares AI Studio simplifies AI fine-tuning and deployment, allowing your team to focus on what truly matters—innovating and driving business success."
                buttonText="Learn More"
                onButtonClick={() => console.log('Learn more clicked!')}
            />
             <HomeTab tabData={customTabs}/>
             <FAQComponent faqData={faqData}/>
            <NewFooter/>
        </div>
    );
};
export default Aistudio;