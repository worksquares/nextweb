import React from "react";
import styles from "../../styles/process/MainOpti.module.css";
import { InfoCardProps } from "../../comp/base/InfoCard";
import InfoCardGrid from "../../comp/InfoCardGrid";
import { TitleHoverProps } from "../../comp/base/TitleHover";
import TitleHoverGrid from "../../comp/TitleHoverGrid";
import { ImgTitleProps } from "../../comp/base/ImageTitle";
import ImageTitleGrid from "../../comp/ImageTitleGrid";
import Headseo from "../headseo";
import Link from "next/link";
import BaseLayout from "../../comp/BaseLayout";

const MainOpti = () => {
  let InfoCardGridData1: InfoCardProps[] = [
    {
      title: "IT Service Management",
      information: "Transform the impact, speed, and delivery of IT services.",
    },
    {
      title: "Customer Service Management",
      information:
        "Connect customer service with other teams to resolve issues quickly.",
    },
  ];

  let InfoCardGridData2: InfoCardProps[] = [
    {
      title: "Workforce Optimization",
      information:
        "Manage teams effectively with real-time visibility into agent scheduling and performance.",
    },
    {
      title: "Performance Analytics",
      information:
        "Anticipate trends, prioritize resources, and continuously improve with real-time analytics.",
    },
    {
      title: "Continual Improvement Management",
      information:
        "Initiate and track improvements across the enterprise by aligning people, processes, and data.",
    },
  ];

  let TitleHoverGridData: TitleHoverProps[] = [
    { icon: "/assets/ResourcesUI img-1.webp", titlelink: "View Docs" },
    { icon: "/assets/ResourcesUI img-2.webp", titlelink: "Visit Community" },
    {
      icon: "/assets/ResourcesUI img-3.webp",
      titlelink: "Get Developer Resource",
    },
    { icon: "/assets/ResourcesUI img-5.webp", titlelink: "Acheive Success" },
  ];

  let ImgTitleGridData: ImgTitleProps[] = [
    {
      image: "/assets/FeaturesOpti-Img1.webp",
      title: "Business process flows",
      sentence:
        "Uncover hidden inefficiencies with a push of a button using process data from audit trails.",
    },
    {
      image: "/assets/FeaturesOpti-Img2.webp",
      title: "Process map and comparison",
      sentence:
        "See a visual representation of process flows to identify bottlenecks and make improvements quickly.",
    },
    {
      image: "/assets/FeaturesOpti-Img3.webp",
      title: "Linked process analysis",
      sentence:
        "Discover and map linked processes for a complete picture of how each connects and impacts one another.",
    },
    {
      image: "/assets/FeaturesOpti-Img4.webp",
      title: "Ongoing optimization",
      sentence:
        "Integrate with Continual Improvement Management to refine processes and track their business value.",
    },
  ];

  return (
    <div>
      <Headseo
        title={`Digisquares | Process Optimization`}
        heading={`Process Optimization`}
        description={`Measure and improve service delivery in alignment with SLAs and customer expectations.`}
        url={`/process/MainOpti`}
        img={`/assets/FeaturesOpti-Img1.webp`}
        keywords={`Process Optimization, UI Builder, Optimization, Performance Analytics, Service Management`}
      />
      <BaseLayout>
        <div className={styles.MainContainer}>
          <div className={styles.NavbarContainer}>
            {/* <h2>Digisquares Platform</h2> */}
            <nav className={styles.NavbarHubNav}>
              <ul className={styles.NavbarLinks}>
                <li className={styles.Navbarli}>
                  <a href="#BenefitsOpti">Benefits</a>
                </li>
                <li className={styles.Navbarli}>
                  <a href="#FeaturesOpti">Features</a>
                </li>
                <li className={styles.Navbarli}>
                  <a href="#HowToBuyOpti">How To Buy</a>
                </li>
                <li className={styles.Navbarli}>
                  <a href="#RelatedAppsOpti">Related Apps</a>
                </li>
              </ul>
            </nav>
            <div className={styles.NavbarSideHeading}>Contact Sales</div>
          </div>
          {/* <div className={styles.Mainheader}>
                <h2 style={{ color: "#ffffff" }}>Reduce cost and complexity for Digisquares integrations. Quickly connect Digisquares workflows to critical business systems and simplify cross-enterprise automation.</h2>
                <h2 style={{ color: "#293e40" }}>Accelerate Digisquares connectivity across any system.</h2>
            </div> */}
          <span id="BenefitsOpti">
            <div className={styles.BenefitsUIContainer}>
              <div className={styles.BenefitsUIHeading}>
                <h1>Benefits of Process Optimization</h1>
              </div>
              <div className={styles.BenefitsUICards}>
                <div className={styles.BenefitsUICardInfo}>
                  <div className={styles.BenefitsCardContainerCards}>
                    <h3>Fine-tune processes to get more done</h3>
                    <p>
                      Measure and improve service delivery in alignment with
                      SLAs and customer expectations.
                    </p>
                  </div>
                </div>
                <div className={styles.BenefitsUICardInfo}>
                  <div className={styles.BenefitsCardContainerCards}>
                    <h3>Achieve top performance</h3>
                    <p>
                      View performance across your organization and improve
                      results for workgroups and tasks.
                    </p>
                  </div>
                </div>
                <div className={styles.BenefitsUICardInfo}>
                  <div className={styles.BenefitsCardContainerCards}>
                    <h3>Improve efficiency</h3>
                    <p>
                      Streamline workflows by finding and removing costly
                      variants in core business processes.
                    </p>
                  </div>
                </div>
                <div className={styles.BenefitsUICardInfo}>
                  <div className={styles.BenefitsCardContainerCards}>
                    <h3>See results fast</h3>
                    <p>
                      Improve process workflows quickly by integrating with
                      related Digisquares® apps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </span>
          <span id="FeaturesOpti">
            <div className={styles.FeaturesUIContainer}>
              <div className={styles.FeaturesUIHeader}>
                <h2>Features of UI Builder</h2>
                {/* <div className={styles.FeaturesUIBtncontainer}>
                        <button>Get Data Sheet</button>
                      </div> */}
              </div>
              <div className={styles.FeaturesUIImageContainer}>
                <ImageTitleGrid ImageCardPropsList={ImgTitleGridData} />
              </div>
            </div>
            <div className={styles.AdditionalFeatureContainer}>
              <div className={styles.AdditionalFeatureHeading}>
                <h2>Additional Features</h2>
              </div>
              <div className={styles.BenefitsUICards}>
                <div className={styles.BenefitsUICardInfo}>
                  <div className={styles.BenefitsCardContainerCards}>
                    <h3>Easy collaboration</h3>
                    <p>
                      Share process maps across teams for collaboration and
                      process improvement.
                    </p>
                  </div>
                </div>
                <div className={styles.BenefitsUICardInfo}>
                  <div className={styles.BenefitsCardContainerCards}>
                    <h3>Performance Analytics integration</h3>
                    <p>
                      Link Performance Analytics KPIs to continual improvement
                      initiatives to track realized business value.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </span>
          <span id="HowToBuyOpti">
            <div className={styles.HowToBuyMainContainer}>
              <div className={styles.HowToBuyHeading}>
                <h2>How to get Process Optimization</h2>
                <p>
                  Process Optimization is available with these Digisquaresw®
                  products.
                </p>
              </div>
              <div className={styles.HowToBuyCards}>
                <InfoCardGrid InfoCardPropsList={InfoCardGridData1} />
              </div>
            </div>
          </span>
          <span id="RelatedAppsOpti">
            <div className={styles.RelatedAppsMainContainer}>
              <div className={styles.RelatedAppsHeading}>
                <h2>You might also be interested in…</h2>
              </div>
              <div className={styles.RelatedAppsCards}>
                <InfoCardGrid InfoCardPropsList={InfoCardGridData2} />
              </div>
              <div className={styles.DigDeeperContainer}>
                <h2>Dig deeper into Process Optimization</h2>
                <div className={styles.DigDeeperIconCards}>
                  <TitleHoverGrid TitleHoverPropsList={TitleHoverGridData} />
                </div>
              </div>
              <div className={styles.DigDeeperbanner}>
                <h2>Talk to an expert</h2>
                <h3>
                  Get answers to your questions and discover how Digisquares can
                  help you transform your business with modern digital
                  workflows.
                </h3>
                <div className={styles.DigDeeperBtncontainer}>
                  <button>Get Started</button>
                </div>
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

export default MainOpti;
