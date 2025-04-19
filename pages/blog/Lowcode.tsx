import React, { useState } from "react";
import BlogPostContent from "../../comp/BlogPostContent";
import { BlogPostContainProps } from "../../comp/base/BlogPostCard";
import { BlogRightContainProps } from "../../comp/base/BlogRightImgCard";
import BlogRightImg from "../../comp/BlogRight";
import { BlogTopicsContainProps } from "../../comp/base/BlogTopicsCard";
import BlogTopicContent from "../../comp/BlogTopicsContent";
import styles from "../../styles/Blog.module.css";
import Styles from "../../styles/comp/core/BlogPostCard.module.css";
import Link from "next/link";
import Screen from "../../comp/Screen";
import { BlogLists } from "../../comp/BlogData";
import Headseo from "../headseo";
import BaseLayout from "../../comp/BaseLayout";

const Lowcode = () => {
  let BlogTopicCardListData: BlogTopicsContainProps[] = [
    {
      title: "Topics",
      list: [
        { lists: "AI and Automation" },
        { lists: "Cybersecurity and risk" },
        { lists: "Digital Transformation" },
        { lists: "IT Management" },
        { lists: "Cloud Management" },
        { lists: "Digisquares Platform" },
        { lists: "Database Management" },
        { lists: "Governance" },
      ],
      title2: "Years",
      list2: [{ lists2: "2022" }],
    },
  ];

  let BlogRightCardListData: BlogRightContainProps[] = [];
  {
    let j = 0;
    BlogLists.map((DataList) => {
      if (DataList.Trend == true) {
        BlogRightCardListData.push({
          title2: j == 0 ? "Trend" : null,
          image320: DataList.Img,
          paragraph: DataList.Desc,
          links: DataList.URL,
        });
        j = 2;
      }
    });
  }

  let BlogPostListData: BlogPostContainProps[] = [
    {
      title: "Accelerate Digital Transformation with Low-Code",
      img1700: "/assets/LowCode-1.webp",
      img1024: "/assets/LowCode-1.webp",
      img768: "/assets/LowCode-1.webp",
      img320: "/assets/LowCode-1.webp",

      paragraph: [
        {
          subheading:
            "Digital Transformation Becomes Everyone's Business with Low-Code Development",
        },
        {
          paragraphs:
            "Digital Transformation is more important than ever in the aftermath of COVID-19. Indeed, the global epidemic has served as a wake-up call for both large and small businesses as they battle with the challenges of fast adapting to a dramatically altered business paradigm and customer landscape.",
        },
        {
          paragraphs:
            "Organizations with the digital agility to pivot quickly, more than any other element, are currently rising above the competition and putting themselves on a path to success. Traditional approaches to software and service delivery are no longer sufficient, especially with an increasingly virtual workforce and consumers' everincreasing digital expectations.",
        },
        {
          paragraphs:
            "Organizations must execute faster in a digitally transformed economy, incorporate new degrees of automation into business processes, and ultimately inspire consumers, workers, and partners with compelling experiences that offer exactly what they need when they need it.",
        },
        {
          subheading: "How Low-Code is Impacting Industries",
        },
        {
          subimages: "/assets/LowCode-2.webp",
        },
        {
          paragraphs:
            "Low-code platforms make it possible to design and deploy applications quickly. These platforms enable banks to offer digital products rapidly by reducing app development periods from months to days. Banks' Digital Transformation is accelerated by low-code. Low-code platforms also enable banking Omni-channels, allowing customers to complete all transactions using any digital device of their choice.",
        },
        {
          paragraphs:
            "Manufacturers have a digital opportunity to achieve operational excellence and meet the expectations of their consumers with low-code development. Low-code development systems centralize essential data, allowing managers to make quick choices and maximize resource use while maintaining accountability across departments.",
        },
        {
          paragraphs:
            "“The speed of innovation is another significant benefit of moving to the cloud,” he adds. “With the various service offerings in the cloud, there are a variety of technologies that are available to companies to immediately use.” In sectors such as healthcare, the cloud’s reliability is also a factor. Cloud migration can yield additional cost savings by removing the need to build and maintain highly redundant infrastructure in-house.",
        },

        {
          paragraphs:
            "Low-code platforms provide the flexibility that such teams require to transition to new methods of working without compromising service quality. Low-code is a novel way to maintain business continuity in the event of an interruption in healthcare. It enables quick development of compliance management and monitoring apps, as well as easy API connections for standardized access and authentication management.",
        },

        {
          subheading:
            "The Low-Code/No-Code Platform for Rapid Application Development",
        },
        {
          subimages: "/assets/LowCode-3.webp",
        },
        {
          paragraphs:
            "From business modeling, UI modeling, CI/CD configuration, and collaborating with various teams on application development and integrating with Agile tools like Azure DevOps, you have a range of application development possibilities. The client, a large battery producer in Asia, wanted to build a digital warranty registration application. We helped jumpstart the development of features such as database authentication, user management, roles and privilege management, containerization, API documentation, in an app development project for the battery manufacturer.",
        },
        {
          paragraphs:
            "A prefabricated model with a large number of pre-tested, reusable APIs, connectors, and UI widgets, which enables rapid application development and integration Accelerates go-to-market readiness of both ISVs and enterprises with a zero-click deployment capability and assured production-ready code quality. Uses open standards & frameworks, platform & language agnostic code generators, and cloud agnostic accelerators. Enables various enterprise personas throughout the application lifecycle, from ideation and development through deployment and operation.",
        },
        {
          paragraphs:
            "The proper low-code platform should act as a point of integration for the entire organization, integrating all systems, applications, users, and data in new ways to help the company grow. It must also provide comprehensive visibility into end-to-end processes, as well as insights to assist you in achieving enterprise-grade performance, dependability, security, resilience, and compliance.",
        },
      ],
    },
  ];

  const [home, setHome] = useState(true);

  const ChangeHome = () => {
    setHome(true);
  };

  return (
    <div>
      <Headseo
        blogtitle={`Digisquares | Low code`}
        blogheading={`Accelerate Digital Transformation with Low-Code`}
        blogdescription={`Low-code platforms make it possible to design and deploy applications quickly.`}
        blogurl={`/blog/Lowcode`}
        blogimg={`/assets/LowCode-1.webp`}
      />
      <BaseLayout>
        <div>
          <label className={styles.dropdown}>
            <div className={styles.ddbutton}>Menu</div>
            <input type="checkbox" className={styles.ddinput} id="test" />
            <ul className={styles.ddmenu}>
              <li>
                <Link legacyBehavior href="/more/Blog">
                  <a onClick={ChangeHome}>Home</a>
                </Link>
              </li>
            </ul>
          </label>
        </div>
        <div className={styles.BlogContain}>
          <div style={{ backgroundColor: "#293e40" }}>
            <Screen>
              <div className={styles.Blogs}>
                <div className={styles.Blogsitems}>
                  <Link legacyBehavior href="/more/Blog">
                    <a className={styles.items}> Home </a>
                  </Link>
                </div>

                <form action="" className={styles.searchbar}>
                  <input
                    type="search"
                    name="search"
                    pattern=".*\S.*"
                    required
                  />
                  <button className={styles.searchbtn} type="submit">
                    <span>Search</span>
                  </button>
                </form>
              </div>
            </Screen>
          </div>
        </div>
        <Screen>
          <div className={Styles.BlogPost}>
            <div className={Styles.BlogPostleft}>
              <BlogPostContent BlogPostCardPropsList={BlogPostListData} />
              <div className={Styles.AnotherLink}>
                Also Read:
                <Link legacyBehavior href="/assets/Books/LowCodeGuide.pdf">
                  <a href="/assets/Books/LowCodeGuide.pdf" target="_blank">
                    &nbsp;The low-code boom: How COVID-19 has increased demand
                    for low-code development?
                  </a>
                </Link>
              </div>
            </div>
            <div className={Styles.BlogPostRight}>
              <BlogRightImg BlogRightCardPropsList={BlogRightCardListData} />
              <BlogTopicContent
                BlogTopicCardPropsList={BlogTopicCardListData}
              />
            </div>
          </div>
        </Screen>
      </BaseLayout>
    </div>
  );
};

export default Lowcode;
