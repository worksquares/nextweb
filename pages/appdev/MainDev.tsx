import React from "react";
import styles from "../../styles/appdev/MainDev.module.css";
import ImageContentCard from "../../comp/ImageLeftRight";
import InfoCardGrid from "../../comp/InfoCardGrid";
import { ImageContainProps } from "../../comp/base/ImageLeftRightCard";
import { InfoCardProps } from "../../comp/base/InfoCard";
import { TitleHoverProps } from "../../comp/base/TitleHover";
import TitleHoverGrid from "../../comp/TitleHoverGrid";
import Images from "../../comp/base/Images";
import Headseo from "../headseo";
import Link from "next/link";
import BaseLayout from "../../comp/BaseLayout";

const MainHub = () => {
  let ImageCardListData: ImageContainProps[] = [
    {
      title: "Build new apps fast",
      paragraph:
        "None of that painful setup and integration here. Get straight to work using standard tools and technologies, such as JavaScript and Angular.",
      link: " View Server-Side APIs ",
      img1700: "/assets/WhyNowPlatform1.webp",
      img1024: "/assets/WhyNowPlatform1.webp",
      img768: "/assets/WhyNowPlatform1.webp",
      img320: "/assets/WhyNowPlatform1.webp",
      button: "Start Learning",
    },
    {
      title: "Extend your Digisquares® apps",
      paragraph:
        "Build or extend digital workflow apps using a shared code set. You can build business apps from scratch or extend out of the box Digisquares applications all on one platform.",
      // link: "Explore Platform",
      img1700: "/assets/WhyNowPlatform2.webp",
      img1024: "/assets/WhyNowPlatform2.webp",
      img768: "/assets/WhyNowPlatform2.webp",
      img320: "/assets/WhyNowPlatform2.webp",
      button: "Explore Platform",
    },
    {
      title: "Work together with the business",
      paragraph:
        "Sometimes it’s easier to create something directly than hand off specs to someone else. By delegating certain capabilities to business stakeholders and analysts, you can work together to build apps that meet specific business needs.",
      // link: "Explore Platform",
      img1700: "/assets/WhyNowPlatform3.webp",
      img1024: "/assets/WhyNowPlatform3.webp",
      img768: "/assets/WhyNowPlatform3.webp",
      img320: "/assets/WhyNowPlatform3.webp",
      button: "Increase Dev Capacity",
    },
    {
      title: "Create experiences that users love",
      paragraph:
        "Tap into a widget‑based, responsive UI framework with no boilerplate code required. The scaffolding for a great user experience is already in place, so you can focus on your unique app requirements.",
      link: "Add Help to Your Apps",
      img1700: "/assets/WhyNowPlatform4.webp",
      img1024: "/assets/WhyNowPlatform4.webp",
      img768: "/assets/WhyNowPlatform4.webp",
      img320: "/assets/WhyNowPlatform4.webp",
      button: "Make a Service Portal",
    },
    {
      title: "Integrate with everything",
      paragraph:
        "Quickly connect your systems and apps. The Digisquares Platform provides a rich set of APIs and tools for integrating with virtually any external system or third‑party app.",
      link: "Add Help to Your Apps",
      img1700: "/assets/WhyNowPlatform5.webp",
      img1024: "/assets/WhyNowPlatform5.webp",
      img768: "/assets/WhyNowPlatform5.webp",
      img320: "/assets/WhyNowPlatform5.webp",
      button: "Integrate with APIs",
    },
    {
      title: "Use your tools, your way",
      paragraph:
        "Work in your preferred development environment. Build in a browser with Studio IDE or use Digisquares Extension for VS Code for access to familiar plugins and tools.",
      link: "View Extension ",
      img1700: "/assets/WhyNowPlatform6.webp",
      img1024: "/assets/WhyNowPlatform6.webp",
      img768: "/assets/WhyNowPlatform6.webp",
      img320: "/assets/WhyNowPlatform6.webp",
      button: "Explore Studio IDE",
    },
    {
      title: "Learn from experts",
      paragraph:
        "Interact with experts and developers of all levels to share your experiences, learn new skills, and solve challenges.",
      link: "Explore Certification",
      img1700: "/assets/WhyNowPlatform7.webp",
      img1024: "/assets/WhyNowPlatform7.webp",
      img768: "/assets/WhyNowPlatform7.webp",
      img320: "/assets/WhyNowPlatform7.webp",
      button: "Join Our Community",
    },
  ];

  let InfoCardGridData1: InfoCardProps[] = [
    {
      title: "Service Management",
      information: "Improve access to service and increase service efficiency.",
    },
    {
      title: "Orchestration",
      information:
        "Connect complex systems, people, and processes together in a single digital workflow.",
    },
    {
      title: "Engagement portals",
      information:
        "Give users a consistent, consumer-like experience they can use for all service requests.",
    },
    {
      title: "Case Management",
      information:
        "Capture and track a wide range of interactions with people and companies.",
    },
    {
      title: "Internet of Things (IoT)",
      information:
        "Use data from connected devices to achieve powerful business outcomes.",
    },
    {
      title: "Enterprise integration",
      information:
        "Integrate external resources with your internal systems in a digital workflow.",
    },
    {
      title: "Data tracking",
      information: "Collect, report, and manage enterprise data.",
    },
  ];

  let InfoCardGridData2: InfoCardProps[] = [
    {
      subtitle: "developer / builder",
      title: "Studio IDE",
      information:
        "Use a web-based integrated development environment to build, deploy, and manage your apps.  ",
    },
    {
      subtitle: "developer / builder",
      title: "Mobile",
      information:
        "Build and deploy native mobile experiences with the intuitive mobile designer in Studio IDE.",
    },
    {
      subtitle: "developer",
      title: "Automated Test Framework",
      information:
        "Perform functional testing of your applications and simplify platform upgrades.",
    },
    {
      subtitle: "developer / builder",
      title: "Delegated Development",
      information:
        "Extend the platform beyond IT so low-code developers can build apps in compliance with IT.",
    },
    {
      subtitle: "developer ",
      title: "IntegrationHub",
      information:
        "Create reusable integration components to easily extend flows to external systems.",
    },
    {
      subtitle: "developer ",
      title: "APIs and Integrations",
      information:
        "Import and export information on demand or as scheduled using common or custom-scripted APIs.",
    },
    {
      subtitle: "developer ",
      title: "Source Control and CI/CD",
      information:
        "Develop apps at scale with source control and CI/CD toolsets on the Digisquares Platform.",
    },
    {
      subtitle: "developer / builder",
      title: "Guided Tour Designer",
      information:
        "Create embedded self-help for faster adoption of new forms, reports, and apps.",
    },
    {
      subtitle: "developer ",
      title: "Guided App Creator",
      information:
        "Get guidance to rapidly create applications, define data, and configure user experiences.",
    },
    {
      subtitle: "developer ",
      title: "Digisquares Extension for VS Code",
      information:
        "Create applications on the Digisquares Platform using Microsoft Visual Studio Code.",
    },
    {
      subtitle: "developer / builder",
      title: "Flow Designer",
      information:
        "Enable anyone to build codeless process flows in a natural language environment.",
    },
    {
      subtitle: "developer / builder",
      title: "Service Portal Designer",
      information:
        "Design a self-service user experience with a responsive portal interface.",
    },
  ];

  let TitleHoverGridData: TitleHoverProps[] = [
    { icon: "/assets/ResourcesUI img-3.webp", titlelink: "Get an Instance" },
    { icon: "/assets/ResourcesUI img-2.webp", titlelink: "Join our Community" },
    { icon: "/assets/certified-icon.webp", titlelink: "Build Your Expertise" },
    {
      icon: "/assets/benefitsIconList5.webp",
      titlelink: "View Learning Paths",
    },
    {
      icon: "/assets/explore-certified-apps.webp",
      titlelink: "Explore Certified Apps",
    },
    { icon: "/assets/find-partners.webp", titlelink: "Find Partners" },
  ];

  return (
    <div>
      <Headseo
        title={`Digisquares | Application Development`}
        heading={`Application Development`}
        description={`With the Digisquares Platform as your foundation, developers of all levels can reduce time to market and speed up delivery`}
        url={`/appdev/MainDev`}
        img={`/assets/WhatYouCanBuildDevImg.webp`}
        keywords={`Technologies, Digital Transformation, Build apps, APIs and tools, Test Framework`}
      />
      <BaseLayout>
        <div className={styles.MainContainer}>
          <div className={styles.CareerNavbarContainer}>
            <nav className={styles.CareerNavbarHubNav}>
              <ul className={styles.CareerNavbarLinks}>
                <li className={styles.CareerNavbarli}>
                  <a href="#WhyNowPlatform">Why Digisquares Platform</a>
                </li>
                <li className={styles.CareerNavbarli}>
                  <a href="#WhatYouCanBuild">What You Can Build</a>
                </li>
                <li className={styles.CareerNavbarli}>
                  <a href="#Capabilities">Capabilities</a>
                </li>
                <li className={styles.CareerNavbarli}>
                  <a href="#GetStarted">GetStarted</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.Mainheader}>
            <h1 style={{ color: "#293e40" }}>Rethink how you build apps</h1>
            <h2 style={{ color: "#ffffff" }}>
              With the Digisquares Platform as your foundation, developers of
              all levels can reduce time to market and speed up delivery. You
              get full‑stack dev power with a turnkey application structure
              that’s ready to rock right out of the box.
            </h2>
          </div>
          <span id="WhyNowPlatform">
            <div>
              <ImageContentCard ImageCardPropsList={ImageCardListData} />
            </div>
          </span>
          <span id="WhatYouCanBuild">
            <div className={styles.WhatYouBuildMainComponent}>
              <div className={styles.WhatYouBuildHeader}>
                <div className={styles.WhatYouBuildHeading}>
                  <h2>Apps you can build on the Digisquares Platform</h2>
                  <p>
                    Build powerful digital workflow apps with the Digisquares
                    Platform App Engine to connect people and processes.
                  </p>
                </div>
                <div className={styles.WhatYouBuildBtn}>
                  <button>View All Customer Examples</button>
                </div>
              </div>
              <div className={styles.WhatYouBuildCardContainer}>
                <InfoCardGrid InfoCardPropsList={InfoCardGridData1} />
              </div>
              <div className={styles.WhatYouBuildCardImg}>
                <Images
                  className={styles.ImageAlignImg}
                  alt="sds"
                  layout="intrinsic"
                  width="1500"
                  height="600"
                  src="/assets/WhatYouCanBuildDevImg.webp"
                ></Images>
              </div>
            </div>
          </span>
          <span id="Capabilities">
            <div className={styles.CapabilitiesDevMainContainer}>
              <div className={styles.CapabilitiesHeading}>
                <h2>Application development tools and capabilities</h2>
              </div>
              <div className={styles.CapabilitiesCardContainer}>
                <InfoCardGrid InfoCardPropsList={InfoCardGridData2} />
              </div>
            </div>
          </span>
          <span id="GetStarted">
            <div className={styles.GetStartedMainComponent}>
              <div className={styles.GetStartedHeading}>
                <h2>Get started</h2>
                <p>
                  See how Digisquares brings purpose and speed to application
                  development.
                </p>
              </div>
              <div className={styles.IconsLinkContainer}>
                <TitleHoverGrid TitleHoverPropsList={TitleHoverGridData} />
              </div>
            </div>
          </span>
          <Link legacyBehavior href={"/contact/ContactUs/"}>
            <div className={styles.FixedContainer}>
              <p className={styles.FixedOption}>Contact</p>
              {/* <p className={styles.FixedOption}>Demo</p> */}
            </div>
          </Link>
        </div>
      </BaseLayout>
    </div>
  );
};

export default MainHub;
