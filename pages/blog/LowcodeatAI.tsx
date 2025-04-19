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

const LowcodeatAI = () => {
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
      if (DataList.Featured == true) {
        BlogRightCardListData.push({
          title2: j == 0 ? "Featured" : null,
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
      title: "Low code may open AI doors for many businesses",
      // subtitle: "August 12, 2021",
      link: "#",
      img1700: "/assets/LowCodeMain.webp",
      img1024: "/assets/LowCodeMain.webp",
      img768: "/assets/LowCodeMain.webp",
      img320: "/assets/LowCodeMain.webp",

      paragraph: [
        {
          subheading: "Low code development can boost AI adoption:",
        },
        {
          paragraphs:
            "For any organization AI adoption is a challenge. The contributing factors include availability of skilled resources, the cost of building AI solutions, the availability and usability of data, time taken to complete the cycle of build/deploy, time to market, cost of maintenance and making incremental improvements. Despite these challenges, the need for AI is inevitable.",
        },
        {
          paragraphs:
            "Low-code, with its visual development, intuitive modeling, user-friendly graphical user interface (GUI), and pre-built integrations is a great enabler for AI adoption. AI applications involving conversational bots using Natural language processing (NLP), Machine Learning (ML), deep learning, visual recognition etc. are much simpler to build with the low-code platforms.",
        },
        {
          paragraphs:
            "Nor only Low-code is used to build AI driven applications, but the platform by itself provides AI assistance in form of a ‘co-pilot’ utilizing ML, and predictive behaviors to understand the project needs and extend guidance, suggestions, and automation throughout the development journey.",
        },
        {
          subheading: "Low code empowering businesses:",
        },
        {
          subimages: "/assets/LowCode2.webp",
        },
        {
          paragraphs:
            "Low-code/no-code empowers business agility and accelerates business outcomes, primarily because it bridges the gap between business and IT with the democratization of application development. Business teams, with their better understanding of end customers are ideal candidates to build and test applications that have a greater chance of success with the customers.",
        },
        {
          paragraphs:
            "Intuitive drag and drop of templates, forms, in-build applications, a visual integrated development environment (IDE), model-driven environment with connectors and out of the box widgets to connect with multiple systems breaks the barrier of programming and coding skills. Through it does nor mean that citizen developers will replace programmers, there is an opportunity for them to evolve beyond their current function.",
        },
        {
          subheading: "Revolutionizing digital transformation:",
        },
        {
          paragraphs:
            "All businesses attempt to become customer centric and focus on enhancing customer experience. And digital transformation is a key step towards this goal. Unlike the past, where tech teams were driving IT projects, Digital transformation initiatives are primarily driven by business teams. They want to try out new things, apps, workflows to know what’s working or not working with there are always in a hurry. This is where low-code comes into the picture.",
        },
        {
          paragraphs:
            "With a drag and drop interface and with minimal support from IT, Business teams can create apps, workflows and explore what works for their business and their customers, extremely reducing the time to market. ",
        },
        {
          subheading: "The rapid adoption of low-code cloud-based software:",
        },
        {
          subimages: "/assets/LowCode1.webp",
        },
        {
          paragraphs:
            "Most low-code/no-code platforms are Paas (Platform as a service). Hence, the need to build and invest in on premise infrastructure is long gone. Also, most low-code platforms have built in automated testing, deployment and security (DevSecOps). The platform’s agility, scalability and convenience reduce software development effort and time to a fraction of the traditional methods.",
        },
        {
          subheading: "Aiding intelligent business process management:",
        },
        {
          subimages: "/assets/LowCode3.webp",
        },
        {
          paragraphs:
            "Low-code/no-code platforms are bundled with build in tools for creating business rules and to set approval workflows. The platforms are feature rich with workflow designer, from modeling, Role based access control, KPI based reports and dashboards, Notifications with email and mobile applications alerts for quick intervention, configurable checklists and audit points and exceptions rule configurations. The best part is these are mostly wizard bases and can be build by a citizen developer",
        },
        {
          subheading:
            "Future of low-code/no-code development in terms of enterprise resilience:",
        },
        {
          paragraphs:
            "According to Forrester, the low-code automation market was worth $4 billion in 2019 and is likely to hit $21.2 billion by 2022. According to Gartner’s Low-code Development Technologies Evaluation Guide from 2019, 75 per cent of large enterprises will use at least four low-code development tools for IT application development and citizen development by 2024.",
        },
        {
          paragraphs:
            "Gone are the days when enterprises used multiple platforms to develop and maintain multiple applications. The overhead cost of maintenance and non-uniformity caused a lot of inefficiencies. Investing in a single platform for application development across the organization led to efficient management on a single platform, which included reliability, security and infrastructure monitoring. This also reduced the total cost of ownership across the geographical region and business units.",
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
        blogtitle={`Digisquares | Lowcode at AI`}
        blogheading={`Low code may open AI doors for many businesses`}
        blogdescription={`For any organization AI adoption is a challenge. The contributing factors include availability of skilled resources, the cost of building AI solutions, the availability and usability of data, cost of maintenance and making incremental improvements.`}
        blogurl={`/blog/LowcodeatAI`}
        blogimg={`/assets/LowCodeMain.webp`}
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
                <Link
                  legacyBehavior
                  href="/assets/Books/The business value of AI.pdf"
                >
                  <a
                    href="/assets/Books/The business value of AI.pdf"
                    target="_blank"
                  >
                    &nbsp;Connecting The business value of AI.
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

export default LowcodeatAI;
