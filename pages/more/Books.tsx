import React from "react";
import styles from "../../styles/more/Books.module.css";
import { CardProps } from "../../comp/base/ImageCard";
import ImageCardsGrid from "../../comp/ImageCardsGrid";
import Headseo from "../headseo";
import Screen from "../../comp/Screen";
import BaseLayout from "../../comp/BaseLayout";

const Books = () => {
  let ImageCardGridData: CardProps[] = [
    {
      image: "/assets/LowCodeAutomation1.webp",
      category: "LOW-CODE/NO-CODE AUTOMATION",
      heading: "",
      description:
        "Organizations with the digital agility to pivot quickly, more than any other element, are currently rising above the competition and putting themselves on a path to success.",
      link: "/assets/Books/TechnologyTrends.pdf",
      linktext: "Download book",
    },
    {
      image: "/assets/Business Impact Cover Img.webp",
      category: "BUSINESS",
      heading: "",
      description:
        "How Experience-Driven Businesses Survive and Thrive in Uncertain Business Environments.",
      link: "/assets/Books/Business Impact of Investing In Experience.pdf",
      linktext: "Download book",
    },
    {
      image: "/assets/DigitalProcurment.webp",
      category: "DIGITAL TRANSFORMATION",
      heading: "",
      description:
        "Procurement leaders are now expected to be the driving force for innovation in most organizations",
      link: "/assets/Books/Digital Transformation of Procurement.pdf",
      linktext: "Download book",
    },
    {
      image: "/assets/EmployeeEmperience.webp",
      category: "EMPLOYEE EXPERIENCE",
      heading: "",
      description:
        "Covid-19 accelerated digital transformation in 2020, as companies in the Asia Pacific (APAC) region acted urgently with measures to protect their employees and their customers.",
      link: "/assets/Books/Employee Experience Across Asia.pdf",
      linktext: "Download book",
    },
    {
      image: "/assets/CustomerExperience.webp",
      category: "CUSTOMER EXPERIENCE",
      heading: "",
      description:
        "Most marketers face an overwhelming amount of data housed on a myriad of different applications.",
      link: "/assets/Books/Secrets of winning customer Experience.pdf",
      linktext: "Download book",
    },
    {
      image: "/assets/Cybersecurity.webp",
      category: "SECURITY AND PRIVACY",
      heading: "",
      description:
        "Privacy extends to a wide range of personal data and information that may be stored on personal digital devices.",
      link: "/assets/Books/Security and Privacy.pdf",
      linktext: "Download book",
    },
    {
      image: "/assets/Technology in AI.webp",
      category: "TECHNOLOGY OF AI",
      heading: "The Business value of AI",
      description:
        "Advanced AI adopters attribute 10-12% points of revenue gains (or erosion offset) to AI.",
      link: "/assets/Books/The business value of AI.pdf",
      linktext: "Download book",
    },
    {
      image: "/assets/download (1).webp",
      category: "HYBRID CLOUD ARCHITECTURE",
      heading: "Designing Hybrid cloud Architecture for the Future",
      description:
        "The hybrid cloud architecture of the future must be driven by the missions, business outcomes, and characteristics of next generation workloads.",
      link: "/assets/Books/hybridcloud.pdf",
      linktext: "Download book",
    },
    {
      image: "/assets/ai-hr-e1594397510980.webp",
      category: "DIGITAL  ASSISTANTS",
      heading: "AI in Human Resources",
      description:
        "Technology has always been a part of achieving business outcomes, driving greater efficiency and optimization.",
      link: "/assets/Books/aiinhrwp.pdf",
      linktext: "Download book",
    },
    {
      image: "/assets/download (2).webp",
      category: "MAKING A CASE FOR LCAPs",
      heading: "Introduction to Low-Code application development",
      description:
        "Low-code platforms make software development 10 times faster than traditional methods.",
      link: "/assets/Books/lowCodeApplicationDevelopment.pdf",
      linktext: "Download book",
    },
    {
      image: "/assets/download (3).webp",
      category: "LOW-CODE GUIDE",
      heading: "The Low code Revolution",
      description:
        "Low-code development has evolved to take advantage of visual design tools like drag-and-drop modelers and point-and-click interface creation to enable the rapid creation, launch, use and change of powerful business apps.",
      link: "/assets/Books/LowCodeGuide.pdf",
      linktext: "Download book",
    },
    {
      image: "/assets/8bEfxy8skS6fUVZnfaLWxj.webp",
      category: "LOW CODE APPLICATION DEVELOPMENT",
      heading: "Technology Trends",
      description:
        "Low-code is built on the concept of higher abstraction levels, where the developer can directly express business processes and requirements without getting mired in coding details.",
      link: "/assets/Books/TechnologyTrends.pdf",
      linktext: "Download book",
    },
  ];

  return (
    <div>
      <Headseo
        blogtitle={`Digisquares | Books`}
        blogheading={`Book`}
        blogdescription={`Digisquares is making the world of work, work better for people`}
        blogurl={`/more/Books`}
        blogimg={`/assets/gallery1.webp`}
      />
      <BaseLayout>
        <div className={styles.MainEbookContainer}>
          <Screen>
            <h1>Books</h1>
          </Screen>
        </div>
        <Screen>
          <div className={styles.EbooksCard}>
            <ImageCardsGrid ImageCardPropsList={ImageCardGridData} />
          </div>
        </Screen>
      </BaseLayout>
    </div>
  );
};

export default Books;
