import { HeaderContentProps } from "../../comp/base/HeaderContent";
import { SingleRowProps } from "../../comp/base/ImageSingleRow";
import BaseLayout from "../../comp/BaseLayout";
import CardComponent from "../../comp/CardPage";
import HeaderCard from "../../comp/HeaderChange";
import HomePanel from "../../comp/HomePanel";
import TabPanel from "../../comp/TabPanel";
import HomeSlider from "../../components/HomeSlider";
import styles from "../../styles/industries/Industry.module.css";

const Education = () => {
  let AnotherimgListData: HeaderContentProps[] = [
    {
      title: "Education",
      paragraph:
        "Transform the way educational institutions operate with Digisquares Studios, automating tasks and processes to boost productivity, improve the learning experience, and reduce administrative burdens.",
      btnLink: "#",
      img1700: "/assets/Hero & cards/hero/edu_hero.webp",
      img1024: "/assets/Hero & cards/hero/edu_hero.webp",
      img768: "/assets/Hero & cards/hero/edu_hero.webp",
      img320: "/assets/Hero & cards/hero/edu_hero.webp",
      backgroundColor: "#154965",
    },
  ];

  const tabData = [
    {
      title: "Enrollment",
      ImageCardPropsList: [
        {
          title: "Streamline the Admission Process",
          paragraph:
            "Automate the entire enrollment process, from application submission to student acceptance, using Digisquares AppStudio. Eliminate paperwork, reduce processing times, and ensure accuracy by automating admissions workflows. Students can enjoy a seamless application experience while institutions benefit from faster, more efficient enrollment management.",
          link: " ",
          img1700: "/assets/Hero & cards/tabs/Edu_tab1.webp",
          img1024: "/assets/Hero & cards/tabs/Edu_tab1.webp",
          img768: "/assets/Hero & cards/tabs/Edu_tab1.webp",
          img320: "/assets/Hero & cards/tabs/Edu_tab1.webp",
        },
      ],
    },
    {
      title: "Onboarding and Student",
      ImageCardPropsList: [
        {
          title: "Simplify Student Orientation and Training",
          paragraph:
            "Automate the onboarding process for new students by streamlining tasks such as document submission, orientation scheduling, and compliance tracking. With Digisquares AppStudio, institutions can ensure that students are quickly integrated into their academic programs, reducing administrative workloads while enhancing the onboarding experience.",
          link: "",
          img1700: "/assets/Hero & cards/tabs/Edu_tab2.webp",
          img1024: "/assets/Hero & cards/tabs/Edu_tab2.webp",
          img768: "/assets/Hero & cards/tabs/Edu_tab2.webp",
          img320: "/assets/Hero & cards/tabs/Edu_tab2.webp",
        },
      ],
    },
    {
      title: "Attendance and Grading",
      ImageCardPropsList: [
        {
          title: "Ensure Accuracy in Attendance and Performance Tracking",
          paragraph:
            "Digisquares AppStudio enables the automation of attendance tracking and grading systems, reducing manual entry errors and improving accuracy. By automating these processes, educators can focus on teaching while ensuring that student performance data is logged and accessible in real-time. Integration with learning management systems (LMS) ensures a seamless flow of information.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/Edu_tab3.webp",
          img1700: "/assets/Hero & cards/tabs/Edu_tab3.webp",
          img768: "/assets/Hero & cards/tabs/Edu_tab3.webp",
          img320: "/assets/Hero & cards/tabs/Edu_tab3.webp",
        },
      ],
    },
    {
      title: "Faculty Scheduling",
      ImageCardPropsList: [
        {
          title: "Optimize Faculty and Classroom Scheduling",
          paragraph:
            "Automate faculty and classroom scheduling with Digisquares AppStudio, allowing institutions to efficiently allocate resources, manage time-off requests, and avoid scheduling conflicts. The platform ensures that classes are scheduled optimally across departments, maximizing both faculty time and facility usage.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/Edu_tab4.webp",
          img1700: "/assets/Hero & cards/tabs/Edu_tab4.webp",
          img768: "/assets/Hero & cards/tabs/Edu_tab4.webp",
          img320: "/assets/Hero & cards/tabs/Edu_tab4.webp",
        },
      ],
    },
    {
      title: "Personalized Learning Path",
      ImageCardPropsList: [
        {
          title: "Enhance Student Learning Experiences",
          paragraph:
            "Use Digisquares AI Studio to create personalized learning paths for students based on their academic progress and learning style. Automate the assignment of tailored study materials, recommend resources, and adjust curriculum paths to optimize learning outcomes, ensuring every student receives a personalized, engaging educational experience.",
          link: "",
          img1024: "/assets/Hero & cards/tabs/Edu_tab5.webp",
          img1700: "/assets/Hero & cards/tabs/Edu_tab5.webp",
          img768: "/assets/Hero & cards/tabs/Edu_tab5.webp",
          img320: "/assets/Hero & cards/tabs/Edu_tab5.webp",
        },
      ],
    },
  ];

  const cardData = [
    {
      imageSrc: "/assets/Edu1.svg",
      imageAlt: "GraduateIcon",
      text: "Automated Enrollment and Onboarding",
    },
    {
      imageSrc: "/assets/Edu2.svg",
      imageAlt: "CloudIcon",
      text: "Streamlined Attendance and Grading",
    },
    {
      imageSrc: "/assets/Edu3.svg",
      imageAlt: "TechIcon",
      text: "Personalized Learning Paths with AI",
    },
  ];

  let ImageRowGridData: SingleRowProps[] = [
    {
      image: "/assets/Blogs/blogheaders/AgentStudioAISolutions_Header.webp",
      category: "DIGITAL TRANSFORMATION",
      title: "Agent Studio’s AI Solutions",
      description:
        "As businesses grow, so does the demand for efficient, responsive customer support. Scaling support operations can be a challenge, especially when dealing with high volumes of inquiries that require timely responses.",
      link: "/blog/AgentStudioAISolutions",
    },
    {
      image:
        "/assets/Blogs/blogheaders/CustomerSatisfactionwithAgentStudio_Header.webp",
      category: "IT MANAGEMENT",
      title: "Customer Satisfaction",
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
      image: "/assets/Blogs/blogheaders/WorkflowswithAppStudio_Header.webp",
      category: "DIGISQUARES PLATFORM",
      title: "Workflows with AppStudio",
      description:
        "As businesses continue to evolve in a digital-first world, the pressure to improve efficiency and reduce costs has never been greater. Manual processes and repetitive tasks can slow down operations and limit a company’s ability to focus on high-impact initiatives.",
      link: "/blog/WorkflowswithAppStudio",
    },
    {
      image: "/assets/Blogs/blogheaders/ImprovingSAASCybersecurity_Header.webp",
      category: "CYBERSECURITY AND RISK",
      title: "Building a Secure SaaS Ecosystem",
      description:
        "In today’s interconnected digital landscape, no organization is immune to cyberattacks. From ransomware to data breaches, cybersecurity threats are evolving rapidly, putting immense pressure on businesses to safeguard their critical systems and data.",
      link: "/blog/ImprovingSAASCybersecurity",
    },
  ];

  return (
    <>
      <BaseLayout>
        <div className={styles.MainContainer}>
          <div className={styles.MainContainer1}>
            <HeaderCard HeaderBannerPropsList={AnotherimgListData} />
          </div>

          <HomePanel
            imageUrl="/assets/Hero & cards/edu_img1.webp"
            title="Accelerate Learning Management with AI-Driven Automation"
            description="Leverage Digisquares AI Studio to streamline learning processes with AI-powered solutions. From personalizing learning paths to automating curriculum management, AI Studio simplifies complex tasks. Educators can develop predictive models, create individualized learning plans, and automate grading and attendance, all without extensive AI expertise."
          />

          <TabPanel tabs={tabData} />

          <CardComponent cards={cardData} />

          {/* <Screen> */}
            <div className={styles.MoreResources}>
              {/* <HomeSlider cards={ImageRowGridData} /> */}
              <HomeSlider cards={ImageRowGridData} />
            </div>
          {/* </Screen> */}
        </div>
      </BaseLayout>
    </>
  );
};

export default Education;
