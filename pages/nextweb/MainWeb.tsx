import React from "react";
import { useState } from "react";
import styles from "../../styles/nextweb/Main.module.css";
import { InfoCardProps } from "../../comp/base/InfoCard";
import InfoCardGrid from "../../comp/InfoCardGrid";
import { AnotherContainProps } from "../../comp/base/AnotherImgCard";
import AnotherImgCardGrid from "../../comp/AnotherImg";
import { LinkHoverProps } from "../../comp/base/LinkHover";
import LinkHoverGrid from "../../comp/LinkHoverGrid";
import { TitleHoverProps } from "../../comp/base/TitleHover";
import TitleHoverGrid from "../../comp/TitleHoverGrid";
import Images from "../../comp/base/Images";
import Headseo from "../headseo";
import Link from "next/link";
import BaseLayout from "../../comp/BaseLayout";

const MainWeb = () => {
  const [platform1, setPlatform1] = useState(true);
  const [platform2, setPlatform2] = useState(false);
  const [platform3, setPlatform3] = useState(false);
  const [platform4, setPlatform4] = useState(false);

  const ChangePlatform1 = () => {
    setPlatform1(true);
    setPlatform2(false);
    setPlatform3(false);
    setPlatform4(false);
  };
  const ChangePlatform2 = () => {
    setPlatform1(false);
    setPlatform2(true);
    setPlatform3(false);
    setPlatform4(false);
  };
  const ChangePlatform3 = () => {
    setPlatform1(false);
    setPlatform2(false);
    setPlatform3(true);
    setPlatform4(false);
  };
  const ChangePlatform4 = () => {
    setPlatform1(false);
    setPlatform2(false);
    setPlatform3(false);
    setPlatform4(true);
  };

  let InfoCardGridData: InfoCardProps[] = [
    {
      title: "Process Optimization",
      information:
        "Improves outcomes by optimizing process flows to streamline work.",
    },
    {
      title: "Performance Analytics",
      information:
        "Unlock insights to anticipate trends, prioritize resources, and drive service improvements.",
    },
    {
      title: "Configuration Management Database (CMDB)",
      information:
        "Power your applications and reporting with a single common data structure.",
    },
    {
      title: "AI Search",
      information:
        "Provide personalized, relevant, actionable search results to employees and customers.",
    },
    {
      title: "Virtual Agent",
      information:
        "Resolve issues faster and scale your organization with intelligent chatbots.",
    },
    {
      title: "Predictive Intelligence",
      information:
        "Automate mundane tasks with machine learning and focus on the work that matters most.",
    },
    {
      title: "IntegrationHub",
      information:
        "Natively integrate Digisquares with any system to easily create end-to-end digital workflows. ",
    },
    {
      title: "Mobile Studio",
      information:
        "Build and deploy native mobile experiences with an intuitive designer. ",
    },
  ];

  let AnotherimgListData: AnotherContainProps[] = [
    {
      title: "Speed Development of the Most Complex Integrations",
      paragraph:
        "Quickly link your applications to data in existing systems with easy plug and play integration. Generate all the necessary code for calling an external system e asily change and augment existing integrations based on business requirements.",
      btn: "Get Fact Sheet",
      link: "Get Details",
      img1700: "/assets/whatsnew-image.webp",
      img1024: "/assets/whatsnew-image.webp",
      img768: "/assets/whatsnew-image.webp",
      img320: "/assets/whatsnew-image.webp",
      dir: "right",
    },
  ];

  let LinkHoverGridData: LinkHoverProps[] = [
    {
      icon: "/assets/Resource img 3.webp",
      title: "Ebooks",
      links: [
        { link: "Digisquares Platform Reference Guide" },
        {
          link: "Common Business Challenges Solved with the Digisquares Platform",
        },
        { link: "Introducing Now Intelligence" },
        { link: "A Journey to Profitable Digital Transformation" },
      ],
    },
    {
      icon: "/assets/Resource img 4.webp",
      title: "Webinars",
      links: [
        { link: "Automation for the 21st Century at AEGIS" },
        { link: "Automating the Business of Science at Argonne National Labs" },
      ],
    },
  ];

  let TitleHoverGridData: TitleHoverProps[] = [
    { icon: "/assets/video-icon 1.webp", titlelink: "Watch Demo" },
    { icon: "/assets/certified-icon 2.webp", titlelink: "Get Certified Apps" },
    { icon: "/assets/develop-icon 3.webp", titlelink: "Develop Apps" },
    { icon: "/assets/casestudies-icon-4.webp", titlelink: "View Case Studies" },
    { icon: "/assets/webinar-icon 5.webp", titlelink: "Register for Webinar" },
  ];

  return (
    <div>
      <Headseo
        title={`Digisquares | Main Website`}
        heading={`MainWebsite`}
        description={`Deliver cross-enterprise digital workflows that connect people, functions and systems to accelerate innovation, increase agility, and enhance productivity.`}
        url={`/blog/Main`}
        img={`/assets/whatsnew-image.webp`}
      />
      <BaseLayout>
        <div className={styles.MainContainer}>
          <div className={styles.NavbarContainer}>
            <h2>Digisquares Platform</h2>
            <nav className={styles.NavbarNav}>
              <ul className={styles.NavbarLinks}>
                <li className={styles.Navbarli}>
                  <a href="#Benefits">Benefits</a>
                </li>
                <li className={styles.Navbarli}>
                  <a href="#Capabilities">Capabilities</a>
                </li>
                <li className={styles.Navbarli}>
                  <a href="#What’sNew">What’s New</a>
                </li>
                <li className={styles.Navbarli}>
                  <a href="#Resources">Resources</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.Mainheader}>
            <h2 style={{ color: "#ffffff" }}>
              Deliver cross-enterprise digital workflows that connect people,
              functions and systems to accelerate innovation, increase agility,
              and enhance productivity.
            </h2>
            <h2 style={{ color: "#293e40" }}>
              Transform your enterprise with a single cloud platform.
            </h2>
          </div>
          <span id="Benefits">
            <div className={styles.BenefitsContainer}>
              <div className={styles.BenefitsLeftContainer}>
                <h2>Discover the benefits of the Digisquares Platform</h2>
                <div className={styles.BenefitsLinks}>
                  <p onClick={ChangePlatform1}>Work smarter and faster</p>
                  <p onClick={ChangePlatform2}>Deliver engaging experiences</p>
                  <p onClick={ChangePlatform3}>Connect your enterprise</p>
                  <p onClick={ChangePlatform4}>Automate work for everyone</p>
                </div>
              </div>
              <div className={styles.BenefitsRightContainer}>
                {platform1 ? (
                  <div className={styles.ChangeContainer}>
                    <Images
                      className={styles.imgresponsive}
                      src="/assets/nowplatform-benefit-1.webp"
                      layout="intrinsic"
                      width="1000"
                      height="550"
                      alt="InfoImage"
                    />
                    <h3>Work smarter and faster</h3>
                    <p>
                      Unleash the power of AI and analytics to surface
                      information, make predictions, and automate repetitive
                      tasks so you can focus on strategic work.
                    </p>
                    <span className={styles.Alignlinkimg}>
                      <a href="">Explore Now Intelligence</a>
                    </span>
                  </div>
                ) : null}
                {platform2 ? (
                  <div className={styles.ChangeContainer}>
                    <Images
                      className={styles.imgresponsive}
                      src="/assets/nowplatform-benefit-2.webp"
                      layout="intrinsic"
                      width="1000"
                      height="550"
                      alt="OrdersImage"
                    />
                    <h3>Deliver engaging experiences</h3>
                    <p>
                      Achieve new levels of user productivity and satisfaction
                      with intuitive omni-channel experiences that are as easy
                      to use as common consumer apps.
                    </p>
                    <span className={styles.Alignlinkimg}>
                      <a href="">View Now Mobile</a>
                    </span>
                  </div>
                ) : null}
                {platform3 ? (
                  <div className={styles.ChangeContainer}>
                    <Images
                      className={styles.imgresponsive}
                      src="/assets/nowplatform-benefit-3.webp"
                      layout="intrinsic"
                      width="1000"
                      height="550"
                      alt="EnterpriseImage"
                    />

                    <h3>Connect your enterprise</h3>
                    <p>
                      Rapidly unite people and processes with intuitive,
                      cross-enterprise integrations for Digisquares solutions
                      and external services.
                    </p>
                    <span className={styles.Alignlinkimg}>
                      <a href="">Get Connected</a>
                    </span>
                  </div>
                ) : null}
                {platform4 ? (
                  <div className={styles.ChangeContainer}>
                    <Images
                      className={styles.imgresponsive}
                      src="/assets/nowplatform-benefit-4.webp"
                      layout="intrinsic"
                      width="900"
                      height="500"
                      alt="FlowImage"
                    />
                    <h3>Automate work for everyones</h3>
                    <p>
                      Empower anyone to automate, extend, and build digital
                      workflow apps across the enterprise with a single, unified
                      platform.
                    </p>
                    <span className={styles.Alignlinkimg}>
                      <a href="">Build Apps Faster</a>
                    </span>
                  </div>
                ) : null}
              </div>
              <div className={styles.BenefitReContainer}>
                <h2>Discover the benefits of the Digisquares Platform</h2>
                <div>
                  <div className={styles.ContainerSlides}>
                    <div className={styles.slides1} id="Slide1">
                      <Images
                        className={styles.imgReresponsive}
                        src="/assets/nowplatform-benefit-1.webp"
                        layout="intrinsic"
                        width="900"
                        height="500"
                        alt="InfoImage"
                      />

                      <h3>Work smarter and faster</h3>
                      <p>
                        Unleash the power of AI and analytics to surface
                        information, make predictions, and automate repetitive
                        tasks so you can focus on strategic work.
                      </p>
                      <span className={styles.Alignlinkimg}>
                        <a href="">Explore Now Intelligence</a>
                      </span>
                    </div>
                    <div className={styles.slides2} id="Slide2">
                      <Images
                        className={styles.imgReresponsive}
                        src="/assets/nowplatform-benefit-2.webp"
                        layout="intrinsic"
                        width="900"
                        height="500"
                        alt="OrdersImage"
                      />

                      <h3>Deliver engaging experiences</h3>
                      <p>
                        Achieve new levels of user productivity and satisfaction
                        with intuitive omni-channel experiences that are as easy
                        to use as common consumer apps.
                      </p>
                      <span className={styles.Alignlinkimg}>
                        <a href="">Explore Now Intelligence</a>
                      </span>
                    </div>
                    <div className={styles.slides3} id="Slide3">
                      <Images
                        className={styles.imgReresponsive}
                        src="/assets/nowplatform-benefit-3.webp"
                        layout="intrinsic"
                        width="900"
                        height="500"
                        alt="EnterpriseImage"
                      />

                      <h3>Connect your enterprise</h3>
                      <p>
                        Rapidly unite people and processes with intuitive,
                        cross-enterprise integrations for Digisquares solutions
                        and external services.
                      </p>
                      <span className={styles.Alignlinkimg}>
                        <a href="">Explore Now Intelligence</a>
                      </span>
                    </div>
                    <div className={styles.slides4} id="Slide4">
                      <Images
                        className={styles.imgReresponsive}
                        src="/assets/nowplatform-benefit-4.webp"
                        layout="intrinsic"
                        width="900"
                        height="500"
                        alt="FlowImage"
                      />

                      <h3>Work smarter and faster</h3>
                      <p>
                        Unleash the power of AI and analytics to surface
                        information, make predictions, and automate repetitive
                        tasks so you can focus on strategic work.
                      </p>
                      <span className={styles.Alignlinkimg}>
                        <a href="">Explore Now Intelligence</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.SlidesContrtol}>
                  <nav>
                    <a href="#Slide1"></a>
                    <a href="#Slide2"></a>
                    <a href="#Slide3"></a>
                    <a href="#Slide4"></a>
                  </nav>
                </div>
              </div>
            </div>
          </span>
          <span id="Capabilities">
            <div className={styles.CapabalitiesMainContainer}>
              <div className={styles.CapabalitiesContainer}>
                <div className={styles.CapabalitiesLeftContainer}>
                  <h2>Capabilities that scale with your business</h2>
                  <p>
                    The Digisquares Platform includes core capabilities that
                    enable you to quickly and efficiently digitize workflows and
                    run them at scale.
                  </p>
                </div>
                <div className={styles.CapabalitiesRightContainer}>
                  <button className={styles.Animate}>Get Data Sheet</button>
                </div>
              </div>
              <div className={styles.CapabalitiesCardContainer}>
                <InfoCardGrid InfoCardPropsList={InfoCardGridData} />
              </div>
            </div>
          </span>
          <span id="What’sNew">
            <div className={styles.WhatsnewContainer}>
              <AnotherImgCardGrid AnotherCardPropsList={AnotherimgListData} />
            </div>
          </span>
          <span id="Resources">
            <div className={styles.ResourceContainer}>
              <div className={styles.ResourceHeader}>
                <h2>Resources</h2>
                <div className={styles.ResoucesBtncontainer}>
                  <button className={styles.Button}>See All Resources</button>
                  <a href="#" className={styles.ResourcesIcon}>
                    View Upcoming Events
                  </a>
                </div>
              </div>

              <div className={styles.NewAlignContainer}>
                <LinkHoverGrid LinkHoverPropsList={LinkHoverGridData} />
              </div>

              <div className={styles.Resourcesbanner}>
                <h2>Behind every great experience is a great workflow</h2>
                <h3>
                  The Digisquares Platform is a single, unified foundation for
                  all digital workflows. Drive transformation with connected{" "}
                  <a href=""> IT</a>, <a href="">employee</a>,
                  <a href="">customer</a>, and <a href="">creator</a> workflows.
                </h3>
              </div>
              <div className={styles.ResourcesSubContainer}>
                <h2>Explore the possibilities</h2>
                <p>
                  See how the Digisquares Platform helps you accelerate your
                  digital transformation.
                </p>
              </div>
              <div className={styles.ResourcesFooterCards}>
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

export default MainWeb;
