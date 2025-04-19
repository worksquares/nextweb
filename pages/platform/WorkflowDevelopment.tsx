import React from "react";
import styles from "../../styles/platform/Platform.module.css";
import ImageContentCard from "../../comp/ImageLeftRight";
import { ImageContainProps } from "../../comp/base/ImageLeftRightCard";
import Headseo from "../headseo";
import BaseLayout from "../../comp/BaseLayout";

const WorkflowDevelopment = () => {
  let ImageCardListData: ImageContainProps[] = [
    {
      title: "Prioritized and streamlined workflows",
      paragraph:
        "Your top priority workflows should be running at their best health. They should be lean, agile, and goal oriented there are subsidiary workflows running inside these primary workflows. They should be given the next priority and always be focused on serving their primary workflows. For example, creative request workflows of marketing should be prioritized behind the important sales workflows.",
      link: " Read the Case Study",
      img1700: "/assets/Workflow_Min.webp",
      img1024: "/assets/Workflow_Min.webp",
      img768: "/assets/Workflow_Min.webp",
      img320: "/assets/Workflow_Min.webp",
    },
    {
      title: "Regular monitoring and optimization",
      paragraph:
        "The only way to have highly efficient workflows is through optimization. Your first attempt at building a workflow, no matter how smart and data-driven it is, will still be inefficient. Workflows on paper are perfect and inhuman. Workflows that run in real-time are imperfect and human. An organization that runs on efficient workflows is equipped to tackle all business goals easily.",
      link: "Read the Case Study",
      img1700: "/assets/WorkflowImg1.webp",
      img1024: "/assets/WorkflowImg1.webp",
      img768: "/assets/WorkflowImg1.webp",
      img320: "/assets/WorkflowImg1.webp",
    },
    {
      title: "Integration with other cloud apps",
      paragraph:
        "Workflows don’t operate independently from other processes. Documents, sales reports, cash-flows, calendars, and contact details should all flow smoothly from your workflow tool to your CMS, calendar, email, financial software and more. your workflow management system isn’t incredibly easy to set up to integrate with other tools out there, it’s already outdated.",
      link: "Read the Case Study",
      img1024: "/assets/WorkflowImg2.webp",
      img1700: "/assets/WorkflowImg2.webp",
      img768: "/assets/WorkflowImg2.webp",
      img320: "/assets/WorkflowImg2.webp",
    },
    {
      title: "Role-based access control",
      paragraph:
        "Many workflows contain sensitive information that is not intended to be shared with everyone in the process. Every Workflow Management System should allow you to customize what each user can see and edit. Making a quick change to this part of the workflow should not break it or affect historical requests.",
      link: "Read the Case Study",
      img1024: "/assets/WorkflowImg3.webp",
      img1700: "/assets/WorkflowImg3.webp",
      img768: "/assets/WorkflowImg3.webp",
      img320: "/assets/WorkflowImg3.webp",
    },
  ];

  return (
    <>
      <Headseo
        title={`Digisquares | Workflow Development`}
        heading={`Workflow Development`}
        description={`Workflow management includes finding redundant tasks, mapping out the workflow in an ideal state, automating the process, and identifying bottlenecks or areas for improvement.`}
        url={`/platform/WorkflowDevelopment`}
        img={`/assets/Workflow_Min.webp`}
        keywords={`Workflow Development, Low-code, Data integrations, Optimization`}
      />
      <BaseLayout>
        <div className={styles.PlatformMain}>
          <div className={styles.WorkflowBackground}>
            <h2 style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
              Workflow Development
            </h2>
          </div>
          <div className={styles.Platformheader}>
            <h1 style={{ color: "#ffffff" }}>
              Workflow management includes finding redundant tasks, mapping out
              the workflow in an ideal state, automating the process, and
              identifying bottlenecks or areas for improvement
            </h1>
            <h2 style={{ color: "#293e40" }}>
              Visually model your business processes and workflows and define
              human interactions
            </h2>
          </div>
          <div className={styles.PlatformInfo}>
            <h2>
              With low-code you can build end-to-end, consumer grade
              applications that can automate the full process and address the
              necessary system or data integrations to make it all work
            </h2>
          </div>
          <div className={styles.PlatformImageCards}>
            <ImageContentCard ImageCardPropsList={ImageCardListData} />
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default WorkflowDevelopment;
