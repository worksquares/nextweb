import Link from "next/link";
import { useState } from "react";
import { BlogPostContainProps } from "../../comp/base/BlogPostCard";
import { BlogRightContainProps } from "../../comp/base/BlogRightImgCard";
import { BlogTopicsContainProps } from "../../comp/base/BlogTopicsCard";
import BaseLayout from "../../comp/BaseLayout";
import { BlogLists } from "../../comp/BlogData";
import BlogPostContent from "../../comp/BlogPostContent";
import BlogRightImg from "../../comp/BlogRight";
import BlogTopicContent from "../../comp/BlogTopicsContent";
import Screen from "../../comp/Screen";
import styles from "../../styles/Blog.module.css";
import Styles from "../../styles/comp/core/BlogPostCard.module.css";
import Headseo from "../headseo";

const EnterpriseLowcode = () => {
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
      title: "Enterprise Low-code and Hyper-automation",
      img1700: "/assets/HyperAutomation1.webp",
      img1024: "/assets/HyperAutomation1.webp",
      img768: "/assets/HyperAutomation1.webp",
      img320: "/assets/HyperAutomation1.webp",

      paragraph: [
        {
          subheading: "Enterprise low-code development",
        },
        {
          paragraphs:
            "Enterprise low-code development makes it easier to build enterprise grade applications and operational systems that run critical business processes and serve thousands of users across organizations. These low-code applications can be integrated with cloud services and other applications, thus creating a broader ecosystem.",
        },
        {
          paragraphs:
            "Organizations today are trying hard to digitalize their businesses in hopes of outpacing competition and increasing productivity. This kind of transformation can be challenging, requiring business leaders to adjust entire business models and introduce new technologies throughout the organization. As you might expect, progress is split. Many leaders know the changes they want to make but do not know which tools or technologies to leverage. Others have already implemented advanced technologies like artificial intelligence (AI), machine learning (ML), and robotic process automation (RPA) to automate specific events and processes required to run their business.",
        },
        {
          paragraphs:
            "These function sets work almost like building blocks, enabling people with little development experience to create a pplications by arranging the predefined sets. Low-code is most common in products and cloud services, and is used for application development including visual and declarative programming styles.",
        },
        {
          subheading: "Combining low-code and hyper-automation",
        },
        {
          subimages: "/assets/HyperAutomation2.webp",
        },
        {
          paragraphs:
            "Enterprise low-code solutions automate a significant percentage of the development process, providing 12 times faster app delivery. This is achieved thanks to their visual, drag-and-drop environments with pre-built, and reusable components.",
        },
        {
          paragraphs:
            "However, achieving a successful digital transformation is a multi-stage journey that requires a broad spectrum of new methodologies and technologies. Hyper-automation represents a valuable contribution to organizations since it brings together various technologies like BPM, RPA, and AI/ML and unlocks a wide range of opportunities for organizations to efficiently automate, monitor, and streamline critical business processes.",
        },
        {
          paragraphs:
            "Low-code development accelerates application delivery by enabling individuals to immediately deploy an application without DevOps. All the stages of the application lifecycle development, deployment, monitoring, maintenance, updates are performed from a single point, in real time, ensuring security, compliance, and version control. Low-code breaks traditional business and IT silos by supporting close collaboration between IT departments and employees with minimum technical knowledge, enabling them to deliver their own applications.",
        },

        {
          subheading: "Champions of enterprise low-code and hyper-automation",
        },
        {
          subimages: "/assets/HyperAutomation3.webp",
        },

        {
          paragraphs:
            "In the hyper-automation space, Wipro partners UiPath, Automation Anywhere (AA), and Blue Prism are champions as they rule the market and have tools which can help businesses grow immensely. Automation Edge, Nice, and Kofax are challengers, while Microsoft Power Automate has really emerged as a creative partner by democratizing automation to help provide every individual easy access to automation tools. ",
        },
        {
          paragraphs:
            "Both markets are expected to witness a remarkable expansion in the coming years that. Graphs of low-code and hyper-automation market size show the low-code market developing much faster than the hyper-automation market. Emphasis should be placed on the rapid growth of the low-code market a unified digital automation platform (DAP) a platform that combines enterprise low-code and hyper automation technologies is the most flexible option on the market for businesses moving towards digital transformation. These platforms combine low-code development with technologies like BPM, RPA, and AI/ML to offer end-to-end, intelligent automation in less time with little to no coding.",
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
        blogtitle={`Digisquares | Enterprise Low-code and Hyper-automation`}
        blogheading={`Enterprise Low-code and Hyper-automation`}
        blogdescription={`low-code applications can be integrated with cloud services and other applications, thus creating a broader ecosystem.`}
        blogurl={`/blog/EnterpriseLowcode`}
        blogimg={`/assets/HyperAutomation1.webp`}
      />
      <BaseLayout>
        <div>
          <label className={styles.dropdown}>
            <div className={styles.ddbutton}>Menu</div>
            <input type="checkbox" className={styles.ddinput} id="test" />
            <ul className={styles.ddmenu}>
              <li>
                <Link href="/more/Blog" onClick={ChangeHome}>
                  Home
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
                  <Link href="/more/Blog" className={styles.items}>
                    Home
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

export default EnterpriseLowcode;
