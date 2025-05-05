import AccelerateSection from "../../components/AccelerateSection";
import Menu from "../../components/Menu";
import StudioSection from "../../components/StudioSection";
import MultiAgentSection from "../../components/MultiAgentSection";
import NewHomeSlider from "../../components/NewHomeSlider";
import MainFooter from "../../components/MainFooter";
import ImageLeftRight, { ImageContainProps } from "../../components/ImageLeftRight";
import Screen from "../../comp/Screen";

const studioCardsData = [
  {
    title: "App Studio",
    description:
      "Create fully-functional web and mobile applications with our intuitive low-code platform. Drag, drop, and deploy apps in record time no coding skills required.",
    backgroundColor: "#916C0D",
    link: "product/NewAppstudio/",
  },
  {
    title: "Agent Studio",
    description:
      "Build intelligent chatbots and voice agents that engage customers 24/7. Seamlessly integrate natural language processing for personalized conversations.",
    backgroundColor: "#F4511E",
    link: "product/NewAgentStudio/",
  },
  {
    title: "AI Studio",
    description:
      "Customize, fine-tune, and deploy AI models while generating synthetic data from one platform. Achieve powerful AI solutions without coding expertise.",
    backgroundColor: "#00796B",
    link: "/product/NewAistudio/",
  },
];

let newcards: ImageContainProps[] = [
  {
    title: "Create Web & Mobile Apps Visually",
    subtitle: "Empower teams with Digisquares’ AppStudio – A Low-Code Platform",
    paragraph: "🛠 Low-Code Platform for Rapid Development",
    paragraph1:
      "AppStudio empowers developers and businesses to build scalable web and mobile applications using a visual interface, reusable components, and built-in logic—eliminating the need for extensive coding.",
    paragraph2: "⚙️ AI-Driven App Creation with Workflow Automation",
    paragraph3:
      "Leverage AI-assisted features to accelerate your development. From generating forms to setting up workflows, AppStudio makes automation simple and intuitive for teams of all sizes.",
      img320: require("../../public/assets/App_Studio.webp"),
  },
  {
    title: "Build Voice & Chat Agents Instantly",
    subtitle: "Digisquares’ Agent Studio – Multi-Language, No-Code Agent Builder",
    paragraph: "🛠 Build Multi-Language Voice & Chat Agents",
    paragraph1:
      "Agent Studio enables you to design intelligent voice and text-based agents that support multiple languages and speakers, helping you engage users globally with personalized interactions.",
    paragraph2: "⚙️ No-Code Flow Builder for Instant Deployment",
    paragraph3:
      "Design conversational flows without writing code. Deploy your agents across platforms like websites, mobile apps, and WhatsApp—instantly turning conversations into actions.",
      img320: require("../../public/assets/imgagentstudio.webp")
  },
  {
    title: "Fine-Tune & Deploy AI Models Faster",
    subtitle: "AI Studio by Digisquares – Test, Train, and Optimize Models Easily",
    paragraph: "🛠 Interactive Notebooks for Seamless Model Development",
    paragraph1:
      "AI Studio provides interactive notebooks that simplify the process of developing and testing AI models. With built-in tools for model evaluation and tuning, AI Studio accelerates the development cycle.",
    paragraph2: "⚙️ Playground for Testing and Evaluating AI Models",
    paragraph3:
      "Test and evaluate AI models in real-time with our intuitive playground. Fine-tune models easily and ensure optimal performance across multiple use cases.",
      img320:  require("../../public/assets/AI_Studio.webp"),
  },
];

const cards = [
  {
    title: "Creating Responsible AI Models",
    description:
      "As AI technology becomes more integrated into our daily lives, the importance of ethical AI focused on fairness, transparency and compliance continues to grow. Building ethical AI models means minimizing bias, ensuring accountability and adhering to industry standards.",
    image: "/assets/Blogs/blogSlideImages/ResponsibleAIModels_Slider.webp",
    moreText: "Learn more",
    moreLink: "/blog/ResponsibleAIModels",
  },
  {
    title: "Satisfaction with Agent Studio",
    description:
      "In an era where customers expect personalized, responsive, and seamless interactions, businesses must go beyond one-size-fits-all solutions to build lasting relationships. By harnessing the power of artificial intelligence, companies can create tailored experiences that resonate with individual customers.",
    image: "/assets/Blogs/blogSlideImages/CustomerSatisfactionwithAgentStudio_Slider.webp",
    moreText: "Learn more",
    moreLink: "/blog/CustomerSatisfactionwithAgentStudio",
  },
  {
    title: "Workflows with AppStudio",
    description:
      "As businesses continue to evolve in a digital-first world, the pressure to improve efficiency and reduce costs has never been greater. Manual processes and repetitive tasks can slow down operations, consume valuable resources, and limit a company’s ability to focus on high-impact initiatives.",
    image: "/assets/Blogs/blogSlideImages/WorkflowswithAppStudio_Slider.webp",
    moreText: "Learn more",
    moreLink: "/blog/WorkflowswithAppStudio",
  },
  {
    title: "AI in Agent Studio",
    description:
      "In today’s digital-first world, customer expectations are higher than ever. They demand fast, personalized service that is available 24/7, across a range of channels. Meeting these demands can be a challenge, especially for companies that rely on traditional customer service models.",
    image: "/assets/Blogs/blogSlideImages/AIinAgentStudio_Slider.webp",
    moreText: "Learn more",
    moreLink: "/blog/AIinAgentStudio",
  },
  {
    title: "AppStudio’s Security Features",
    description:
      "In an increasingly digital world, application security is paramount. With cyber threats on the rise, businesses must ensure that the apps they develop are secure and resilient against potential attacks.",
    image: "/assets/Blogs/blogSlideImages/AppStudioSecurityFeatures_Slider.webp",
    moreText: "Learn more",
    moreLink: "/blog/AppStudioSecurityFeatures",
  },
  {
    title: "AI-Powered Automation",
    description:
      "In the fast-paced world of IT, reducing Mean Time to Repair (MTTR) is critical for maintaining operational efficiency and minimizing the impact of incidents and outages.",
    image: "/assets/Blogs/blogSlideImages/AIPoweredAutomation_Slider.webp",
    moreText: "Learn more",
    moreLink: "/blog/AIPoweredAutomation",
  },
  {
    title: "Building a Secure SaaS ",
    description:
      "In today’s interconnected digital landscape, no organization is immune to cyberattacks. From ransomware to data breaches, cybersecurity threats are evolving rapidly, putting immense pressure on businesses to safeguard their critical systems and data.",
    image: "/assets/Blogs/blogSlideImages/ImprovingSAASCybersecurity_Slider.webp",
    moreText: "Learn more",
    moreLink: "/blog/ImprovingSAASCybersecurity",
  },
  {
    title: "AI in Service Management ",
    description:
      "The rapid advancement of AI-powered chatbots is reshaping the way businesses interact with both customers and internal systems. These intelligent chatbots, driven by AI and machine learning, have the ability to understand human language, deliver personalized responses, and automate routine tasks.",
    image: "/assets/Blogs/blogSlideImages/AIinServiceManagement_Slider.webp",
    moreText: "Learn more",
    moreLink: "/blog/AIinServiceManagement",
  },
];

const Home = () => {

  return (
    <>
    <Menu />
      <AccelerateSection />
      <StudioSection cardsData={studioCardsData} />
      <Screen>
      <ImageLeftRight ImageCardPropsList={newcards} Homepage />
      </Screen>
      <MultiAgentSection />

      <NewHomeSlider cards={cards} />
      <MainFooter />
    </>

  );
};
export default Home;
