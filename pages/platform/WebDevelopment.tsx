import React from "react";
import styles from "../../styles/platform/Platform.module.css";
import ImageContentCard from "../../comp/ImageLeftRight";
import { ImageContainProps } from "../../comp/base/ImageLeftRightCard";
import Headseo from "../headseo";
import BaseLayout from "../../comp/BaseLayout";

const WebDevelopment = () => {
  let ImageCardListData: ImageContainProps[] = [
    {
      title: "Instant development and deployment",
      paragraph:
        "Any good low-code platform comes with standard components like prebuilt templates for form and report creation, and ready to use code snippets. These out of the box templates allow IT teams to develop and deploy applications faster, and with fewer errors. It also eliminate the need for creating frameworks, linking databases, and other tasks that are typically included in traditional development to see how their application looks.",
      link: " Read the Case Study",
      img1700: "/assets/webdevelopment.webp",
      img1024: "/assets/webdevelopment.webp",
      img768: "/assets/webdevelopment.webp",
      img320: "/assets/webdevelopment.webp",
    },
    {
      title: "Simplified pre-built integrations",
      paragraph:
        "Low-code platforms allow for easy coupling with external and existing systems and new technologies, with a wide array of out of the box APIs and other smart integration tools. tasks required in application development Businesses can streamline, automate, and harmonize manual internal processes so that developers aren’t overburdened and can focus on higher value tasks. Minimizing overwhelming coding needs gives IT relief from the pressure of their often times unconquerable app backlog.",
      link: "Read the Case Study",
      img1700: "/assets/WebDevImg1.webp",
      img1024: "/assets/WebDevImg1.webp",
      img768: "/assets/WebDevImg1.webp",
      img320: "/assets/WebDevImg1.webp",
    },
    {
      title: "Eliminate backlogs and reduce shadow IT ",
      paragraph:
        "Successful projects are improved by indirect audience feedback, such as how they interact with the apps. Whether gathering feedback during usability testing or after the app goes live, successful project teams keep a close analytical eye on their audience. Conduct usability testing during development, and use analytics after launch to identify popular features and functions. Continually improve the application by incorporating user feedback and analytical insights.",
      link: "Read the Case Study",
      img1024: "/assets/WebDevImg2.webp",
      img1700: "/assets/WebDevImg2.webp",
      img768: "/assets/WebDevImg2.webp",
      img320: "/assets/WebDevImg2.webp",
    },
    {
      title: "Reduce reliance on legacy apps",
      paragraph:
        "Outdated legacy applications, although vital to business processes, drain efficiency, and keep your IT resources in a constant state of updates and fixes. This means you spend more time on maintenance than innovation. Revive your business ecosystem using low code platforms, with modern frameworks that can build consumer grade applications.",
      link: "Read the Case Study",
      img1024: "/assets/WebDevImg3.webp",
      img1700: "/assets/WebDevImg3.webp",
      img768: "/assets/WebDevImg3.webp",
      img320: "/assets/WebDevImg3.webp",
    },
  ];

  return (
    <>
      <Headseo
        title={`Digisquares | Web Development`}
        heading={`Web Development`}
        description={`The low-code premise is simple you just need to get someone that understands your business to create the app you need in the low-code environment.`}
        url={`/platform/WebDevelopment/`}
        img={`/assets/webdevelopment.webp`}
        keywords={`Web Development, Low-code, High quality applications, Deployment`}
      />
      <BaseLayout>
        <div className={styles.PlatformMain}>
          <div className={styles.WebsiteBackground}>
            <h2 style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
              Web Development
            </h2>
          </div>
          <div className={styles.Platformheader}>
            <h1 style={{ color: "#ffffff", fontSize: "28px" }}>
              The low-code premise is simple you just need to get someone that
              understands your business to create the app you need in the
              low-code environment
            </h1>
            <h2 style={{ color: "#293e40" }}>
              On a low-code platform, IT and business teams work together to
              build high quality applications and accelerate time to market
            </h2>
          </div>
          <div className={styles.PlatformInfo}>
            <h2>
              Build enterprise grade applications that enable your customers,
              and partners, to better communicate and perform business
              transactions. Apps that promote personalized customer engagements
              help to improve satisfaction, retention, and revenue.
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

export default WebDevelopment;
