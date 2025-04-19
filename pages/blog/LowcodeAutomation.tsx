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

const LowcodeAutomation = () => {
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
      title: "Role of Low-code/No-code Development in Democratizing Automation",
      img1700: "/assets/LowCodeAutomation1.webp",
      img1024: "/assets/LowCodeAutomation1.webp",
      img768: "/assets/LowCodeAutomation1.webp",
      img320: "/assets/LowCodeAutomation1.webp",

      paragraph: [
        {
          subheading: "LOW-CODE & NO-CODE AUTOMATION",
        },
        {
          paragraphs:
            "The ongoing COVID-19 pandemic has created a need to build digital transformation products in a short span of time to cater to the ever-growing “wish list” of business customers and end-users. This is where the concept of low-code and no-code platforms comes in. These tools allow “Citizen Developers” (people with less or no knowledge of programming) to create mobile or web applications without writing any custom code.",
        },
        {
          paragraphs:
            "Low-code/No-code automation tools enable people with limited or no coding abilities to automate repeatable business processes. Business and technical users can automate various business processes using a drag and drop UI interface. With the emergence of next generation of RPA and AI tools, such solutions are emerging as leading enablers of digital transformation.",
        },
        {
          paragraphs:
            "The low-code & no-code solutions are emerging as potent solutions to simplify and democratize the RPA development process. Such platforms accelerate the RPA production cycle and allow business users to contribute, hence reducing the risk of low user adoption.",
        },
        {
          subheading: "WEB BASED CUSTOMER PORTALS",
        },
        {
          subimages: "/assets/LowCodeAutomation2.webp",
        },
        {
          paragraphs:
            "Companies today struggle to provide consistent customer experience and value to the end-users because such customer portals are slow to launch, costly, and consume more resources. The use of low-code/no-code platforms alleviate such pain points by allowing such portals to be developed quickly using graphical drag and drop UI.",
        },
        {
          paragraphs:
            "Core business applications built on cloud-based low code platforms are highly secure, scalable, and resilient. Use low-code/no-code platforms to accelerate the development of microservices. Using low-code/no-code platforms, users can build complex IoT applications that convert large volumes of data into contextual visuals for end-users. Low-code/No-code platforms provide flexible collaboration tools and high-quality user experience to application developers to enable end-to-end automation of approval workflow. ",
        },
        {
          paragraphs:
            "Low-code platforms provide the flexibility that such teams require to transition to new methods of working without compromising service quality. Low-code is a novel way to maintain business continuity in the event of an interruption in healthcare. It enables quick development of compliance management and monitoring apps, as well as easy API connections for standardized access and authentication management.",
        },

        {
          subheading: "HOW LOW-CODE/NO-CODE IS DEMOCRATIZING AUTOMATION ",
        },
        {
          subimages: "/assets/LowCodeAutomation3.webp",
        },
        {
          paragraphs:
            "Most organizations are becoming “Software Development” enterprises with a democratized focus on automation. Automating any business process requires experience and vast technical knowledge. But LCNC (Low-code, No-code) platforms have made it easier for citizen developers to create an automation process without in-depth technical know-how. LCNC platforms provide simple, intuitive, and easy-to-use GUI that provides ready-made/pre-defined components enabling citizen developers to create an automation process in a few hours.",
        },
        {
          paragraphs:
            "Some of the LCNC (Low-code, No-code) applications in the automation ecosystem include image and text analysis, which requires extracting relevant and valuable information from the content. Technologies like AI/ML and NLP can be utilized along with others to carry out image and text processing and interpret the data. ",
        },
        {
          paragraphs:
            "A few of the challenges enterprises generally face in implementing LCNC platforms are lack of trust in citizen developers, ability to drive efficiency and reuse automation solutions, etc. Looking at these challenges, some of the steps that enterprises should take to reap maximum benefits out of implementing LCNC platforms.",
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
        blogtitle={`Digisquares | Lowcode Automation`}
        blogheading={`Role of Low-code/No-code Development in Democratizing Automation`}
        blogdescription={`The ongoing COVID-19 pandemic has created a need to build digital transformation products in a short span of time to cater to the ever growing “wish list” of business customers and end users.`}
        blogurl={`/blog/LowcodeAutomation/`}
        blogimg={`/assets/LowCodeAutomation1.webp`}
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

export default LowcodeAutomation;
