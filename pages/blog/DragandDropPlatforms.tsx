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
import { BlogLists } from "../../comp/BlogData";
import Headseo from "../headseo";
import Screen from "../../comp/Screen";
import BaseLayout from "../../comp/BaseLayout";

const DragandDropPlatforms = () => {
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
      title: "Why Drag-and-Drop Platforms Are the Key to Faster Innovation",
      img1700: "/assets/GovernanceComp.webp",
      img1024: "/assets/GovernanceComp.webp",
      img768: "/assets/GovernanceComp.webp",
      img320: "/assets/GovernanceComp.webp",

      paragraph: [
        // {
        //   subheading: "Enterprise cloud technology",
        // },
        {
          paragraphs:
            "As businesses across industries embrace digital transformation, the demand for intuitive and efficient development tools has skyrocketed. Traditional coding methods often require extensive expertise and time, creating barriers to rapid development and innovation. Enter drag-and-drop platforms—a revolution in the way businesses create, customize, and deploy applications. These platforms offer an accessible, visual approach to development, allowing users to build sophisticated solutions without extensive coding knowledge. With their potential to accelerate innovation and lower the technical barrier, drag-and-drop platforms are poised to become the future of software development.",
        },

        {
          subheading: "Simplifying Development with Visual Tools",
        },
        {
          subimages: "/assets/AI in DataCloud 1.webp",
        },

        {
          paragraphs:
            "At the heart of drag-and-drop platforms is simplicity. Tools like Digisquares AppStudio provide businesses with a low-code, multi-platform development environment that supports .NET, Node.js, Java, and Python. This powerful combination allows even non-technical users to design and deploy applications through intuitive visual interfaces. By dragging and dropping components, users can assemble complex workflows, set up data integrations, and customize the look and feel of their applications—without writing lengthy code.",
        },
        {
          paragraphs:
            "This simplicity enables businesses to shorten development cycles, allowing teams to launch solutions faster. It also empowers a broader range of employees, including those without a technical background, to contribute to the application development process, fostering collaboration across departments and speeding up innovation.",
        },
        {
          subheading: "Accelerating Innovation with AI-Powered Agents",
        },

        {
          paragraphs:
            "One of the key reasons drag-and-drop platforms are becoming the future of development is their ability to integrate AI-powered solutions seamlessly. With tools like Digisquares Agent Studio, businesses can create intelligent text and voice AI agents using a simple drag-and-drop interface. These AI agents can engage with customers across multiple languages and devices, improving engagement and automating customer support in real-time.",
        },
        {
          paragraphs:
            "This level of customization not only enhances the user experience but also allows businesses to deploy AI without the need for specialized expertise. By leveraging drag-and-drop capabilities, businesses can embed AI-powered chatbots, virtual assistants, and voice agents into their applications, delivering smarter, more personalized customer interactions with minimal development time.",
        },
        {
          subheading: "Streamlining Data Management and AI Integration",
        },
        {
          subimages:
            "/assets/predective-analytics-and-machine-learning-47billion.webp",
        },
        {
          paragraphs:
            "As AI continues to shape the future of business, the ability to manage and integrate data efficiently is crucial. Digisquares AI Studio enables organizations to train and fine-tune AI models using synthetic data, all through a drag-and-drop interface. By simplifying data workflows and enabling seamless AI integration, businesses can accelerate their AI initiatives and improve accuracy without requiring deep technical expertise.",
        },
        {
          paragraphs:
            "With drag-and-drop platforms, teams can build and deploy AI models faster, reducing the time and resources needed to bring AI-driven insights to market. This ability to streamline data management and AI integration allows businesses to unlock the full potential of their data, driving better decision-making and innovation at scale.",
        },

        {
          paragraphs:
            "Drag-and-drop platforms represent the future of software development. By simplifying complex processes, empowering non-technical users, and enabling seamless AI integration, these platforms are revolutionizing the way businesses create and deploy applications. With solutions like Digisquares AppStudio, Agent Studio, and AI Studio, organizations can innovate faster, reduce development costs, and respond to market demands more effectively. As businesses continue to prioritize speed, agility, and efficiency, drag-and-drop platforms will be the cornerstone of the next wave of digital transformation.",
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
        blogtitle={`Digisquares | Drag-and-Drop Platforms`}
        blogheading={`Why Drag-and-Drop Platforms Are the Key to Faster Innovation`}
        blogdescription={`As businesses across industries embrace digital transformation, the demand for intuitive and efficient development tools has skyrocketed.`}
        blogurl={`/blog/DragandDropPlatforms`}
        blogimg={`/assets/AI in DataCloud Main.webp`}
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

                {/* <form action="" className={styles.searchbar}>
                  <input
                    type="search"
                    name="search"
                    pattern=".*\S.*"
                    required
                  />
                  <button className={styles.searchbtn} type="submit">
                    <span>Search</span>
                  </button>
                </form> */}
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
                <Link href="/blog/CloudComputing">
                  {" "}
                  &nbsp;Learn more about a Cloud Computing approach and how it
                  applies to privacy, multicloud data integration and AI use
                  cases.
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

export default DragandDropPlatforms;
