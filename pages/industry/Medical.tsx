import { HeaderContentProps } from "../../comp/base/HeaderContent";
import BaseLayout from "../../comp/BaseLayout";
import CardComponent from "../../comp/CardPage";
import HeaderCard from "../../comp/HeaderChange";
import HomePanel from "../../comp/HomePanel";
import TabPanel from "../../comp/TabPanel";
import NewHomeSlider from "../../components/NewHomeSlider";
import styles from "../../styles/industries/Industry.module.css";
import Headseo from "../headseo";

const MedicalHeader = () => {
  let AnotherimgListData: HeaderContentProps[] = [
    {
      title: "Healthcare",
      paragraph:
        "Leverage the power of Digisquares Studios to transform medical workflows and streamline healthcare processes.",
      btnLink: "#",
      img1700: "/assets/Hero & cards/hero/med_hero.webp",
      img1024: "/assets/Hero & cards/hero/med_hero.webp",
      img768: "/assets/Hero & cards/hero/med_hero.webp",
      img320: "/assets/Hero & cards/hero/med_hero.webp",
      backgroundColor: "#154965",
    },
  ];

  const tabData = [
    {
      title: "Patient Data Management",
      ImageCardPropsList: [
        {
          title: "Streamline Patient Data for Improved Care",
          paragraph:
            "Automate the collection, organization, and analysis of patient data using Digisquares AppStudio. Ensure accurate and secure handling of medical records, streamline appointment scheduling, and automate follow-up reminders, all while maintaining compliance with health regulations such as HIPAA. This allows healthcare providers to focus on patient care rather than administrative tasks.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/med_tab1.webp",
          img1024: "/assets/Hero & cards/tabs/med_tab1.webp",
          img768: "/assets/Hero & cards/tabs/med_tab1.webp",
          img320: "/assets/Hero & cards/tabs/med_tab1.webp",
        },
      ],
    },
    {
      title: "Predictive Diagnostics",
      ImageCardPropsList: [
        {
          title: "Leverage AI for Predictive Healthcare Solutions",
          paragraph:
            "Digisquares AI Studio helps healthcare professionals automate predictive diagnostics, enabling early detection of diseases based on patient history and real-time data. Automate the creation of AI models that can predict potential health issues, personalize treatment plans, and improve patient outcomes through accurate, data-driven insights.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/med_tab2.webp",
          img1024: "/assets/Hero & cards/tabs/med_tab2.webp",
          img768: "/assets/Hero & cards/tabs/med_tab2.webp",
          img320: "/assets/Hero & cards/tabs/med_tab2.webp",
        },
      ],
    },
    {
      title: "Medical Billing and Payment",
      ImageCardPropsList: [
        {
          title: "Ensure Timely and Accurate Billing Processes",
          paragraph:
            "Automate medical billing, claims processing, and payment tracking with Digisquares AppStudio. By streamlining the payment workflow, you can reduce errors, ensure timely payments, and improve patient satisfaction. Integration with insurance providers and financial systems ensures compliance with medical billing regulations, making the process smoother for both patients and administrators.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/med_tab3.webp",
          img1024: "/assets/Hero & cards/tabs/med_tab3.webp",
          img768: "/assets/Hero & cards/tabs/med_tab3.webp",
          img320: "/assets/Hero & cards/tabs/med_tab3.webp",
        },
      ],
    },
    {
      title: "Staff Scheduling",
      ImageCardPropsList: [
        {
          title: "Optimize Healthcare Workforce Efficiency",
          paragraph:
            "Automate healthcare staff scheduling with Digisquares AppStudio to ensure optimal coverage across shifts, clinics, and departments. Sync vacation requests, medical leaves, and shift preferences to reduce scheduling conflicts and maintain operational continuity. Automated scheduling helps administrators manage a complex workforce while enhancing the quality of patient care.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/med_tab4.webp",
          img1024: "/assets/Hero & cards/tabs/med_tab4.webp",
          img768: "/assets/Hero & cards/tabs/med_tab4.webp",
          img320: "/assets/Hero & cards/tabs/med_tab4.webp",
        },
      ],
    },
    {
      title: "Telemedicine and Patient",
      ImageCardPropsList: [
        {
          title: "Enhance Patient Interactions with Automated Telemedicine",
          paragraph:
            "Boost the effectiveness of telemedicine with Digisquares Agent Studio. Automate appointment scheduling, patient follow-ups, and reminders for virtual consultations. AI-powered chatbots can handle routine inquiries and patient support, allowing healthcare providers to focus on delivering quality remote care. Personalized communication ensures a seamless patient experience, improving engagement and satisfaction.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/med_tab5.webp",
          img1024: "/assets/Hero & cards/tabs/med_tab5.webp",
          img768: "/assets/Hero & cards/tabs/med_tab5.webp",
          img320: "/assets/Hero & cards/tabs/med_tab5.webp",
        },
      ],
    },
  ];

  const cardData = [
    {
      imageSrc: "/assets/MedicalIcon1.svg",
      imageAlt: "ClinicalIcon",
      text: "Automated Patient Data Management",
    },
    {
      imageSrc: "/assets/MedicalIcon2.svg",
      imageAlt: "HealthcareIcon",
      text: "AI-Powered Predictive Diagnostics",
    },
    {
      imageSrc: "/assets/MedicalIcon3.svg",
      imageAlt: "PatientCareIcon",
      text: "Streamlined Medical Billing",
    },
  ];

  const ImageRowGridData = [
    {
      image: "/assets/Blogs/blogheaders/WorkflowswithAppStudio_Header.webp",
      category: "DIGISQUARES PLATFORM",
      title: "Workflows with AppStudio",
      description:
        "As businesses continue to evolve in a digital-first world, the pressure to improve efficiency and reduce costs has never been greater. Manual processes and repetitive tasks can slow down operations and limit a company’s ability to focus on high-impact initiatives.",
      link: "/blog/WorkflowswithAppStudio",
    },
    {
      image: "/assets/Blogs/blogheaders/AIinAgentStudio_Header.webp",
      category: "AI AND AUTOMATION",
      title: "AI in Agent Studio",
      description:
        "They demand fast, personalized service that is available 24/7, across a range of channels. Meeting these demands can be a challenge, especially for companies that rely on traditional customer service models.",
      link: "/blog/AIinAgentStudio",
    },
    {
      image:
        "/assets/Blogs/blogheaders/CustomerSatisfactionwithAgentStudio_Header.webp",
      category: "IT MANAGEMENT",
      title: "Customer Satisfaction with Agent Studio",
      description:
        "In an era where customers expect personalized businesses must go beyond one-size-fits-all solutions to build lasting relationships. Companies can create tailored experiences that resonate with individual customers.",
      link: "/blog/CustomerSatisfactionwithAgentStudio",
    },
    {
      image: "/assets/Blogs/blogheaders/FineTuningwithAIStudio_Header.webp",
      category: "AI AND AUTOMATION",
      title: "Fine-Tuning with AI Studio",
      description:
        "As AI becomes a crucial part of business strategies, the need for custom AI models that cater to specific needs is on the rise. However, building and fine-tuning AI models often requires specialized knowledge and significant resources.",
      link: "/blog/FineTuningwithAIStudio",
    },
    {
      image: "/assets/Blogs/blogheaders/PersonalizeAIModels_Header.webp",
      category: "GOVERNANCE",
      title: "Personalize AI Models",
      description:
        "In today’s dynamic business environment, industries from healthcare to finance are increasingly relying on artificial intelligence to gain insights, streamline processes, and deliver exceptional experiences.",
      link: "/blog/PersonalizeAIModels",
    },
  ];

  return (
    <>
      <Headseo
        title={`Digisquares | Medical`}
        heading={`Medical`}
        description={`Our vision for the Intelligent Enterprise is to help healthcare providers become highly efficient at saving and improving lives, deliver a seamless patient experience, and ensure value based care with innovative technologies.`}
        url={`/Industry/Medical`}
        img={`/assets/MedicalBannerImg1.webp`}
        keywords={`Healthcare, Patient experience, Healthcare experiences, Health apps, Patient trust`}
      />
      <BaseLayout>
        <div className={styles.MainContainer}>
          <div className={styles.MainContainer1}>
            <HeaderCard HeaderBannerPropsList={AnotherimgListData} />
          </div>

          <HomePanel
            imageUrl="/assets/Hero & cards/med_img1.webp"
            title="Accelerate Medical Research and Diagnostics with AI Automation"
            description="Transform medical research and diagnostic workflows with Digisquares AI Studio, enabling faster, more accurate outcomes using AI-driven automation. Whether analyzing patient data, conducting medical research, or generating diagnostic models, AI Studio simplifies complex medical processes by using synthetic data for AI model training."
          />
          <TabPanel tabs={tabData} />

          <CardComponent cards={cardData} />
          {/* <Screen> */}
            <div className={styles.MoreResources}>
              {/* <HomeSlider cards={ImageRowGridData} /> */}
              <NewHomeSlider cards={ImageRowGridData} />
            </div>
          {/* </Screen> */}
        </div>
      </BaseLayout>
    </>
  );
};

export default MedicalHeader;
