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

const FromIdeatoApp = () => {
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
      title: "From Concept to Launch: Real-Life Success with AppStudio",
      img1700: "/assets/Blogs/blogheaders/FromIdeatoApp_Header.webp",
      img1024: "/assets/Blogs/blogheaders/FromIdeatoApp_Header.webp",
      img768: "/assets/Blogs/blogheaders/FromIdeatoApp_Header.webp",
      img320: "/assets/Blogs/blogheaders/FromIdeatoApp_Header.webp",

      paragraph: [
        // {
        //   subheading: "Enterprise cloud technology",
        // },
        {
          paragraphs:
            "In the fast-paced world of modern business, turning ideas into reality quickly can be the difference between success and missed opportunities. Traditionally, app development has been a lengthy, resource-intensive process, requiring extensive coding and specialized expertise. But Digisquares AppStudio is changing the game by empowering users to transform their ideas into functional apps in a matter of minutes. From startups to large enterprises, businesses across industries are leveraging AppStudio’s low-code platform to launch custom applications swiftly, transforming concepts into impactful solutions faster than ever before. Here are some success stories that highlight how AppStudio is revolutionizing the way companies develop apps.",
        },

        {
          subheading: "Rapid Development for Startups: A Competitive Edge",
        },
        {
          subimages: "/assets/Blogs/blogsmall/FromIdeatoApp_Small1.webp",
        },

        {
          paragraphs:
            "For startups, speed is everything. With limited resources and tight deadlines, they need to bring products to market as quickly as possible to stay competitive. Digisquares AppStudio offers these businesses a unique advantage by providing an intuitive, drag-and-drop environment that minimizes the need for manual coding",
        },
        {
          paragraphs:
            "One tech startup, for instance, used AppStudio to build a customer-facing app that would normally have taken months to develop in just a few days. By leveraging pre-built components and AI-driven tools, the team was able to create a user-friendly interface, integrate essential functionality, and launch their app within a week. Not only did this fast turnaround time save them significant development costs, but it also allowed them to secure investor interest by demonstrating their solution’s viability almost instantly.",
        },
        {
          subheading: "Streamlining Internal Processes for Enterprises",
        },

        {
          paragraphs:
            "Large organizations face their own set of challenges when it comes to app development, particularly in streamlining internal processes. For these companies, Digisquares AppStudio has proven to be an invaluable tool in driving efficiency and fostering innovation. A global logistics firm, for example, used AppStudio to develop an internal tool that automated scheduling, tracking, and reporting, cutting down on hours of manual work each week.",
        },
        {
          paragraphs:
            "By enabling employees across various departments to collaborate on the development process, the company was able to launch the tool within days instead of months. The app’s AI-powered automation features helped streamline operations, reduce human error, and increase productivity. The success of this app inspired the company to continue using AppStudio to create other custom applications, helping them optimize different aspects of their business rapidly and cost-effectively.",
        },
        {
          subheading: "Empowering Non-Developers to Build Business Solutions",
        },
        {
          subimages: "/assets/Blogs/blogsmall/FromIdeatoApp_Small2.webp",
        },
        {
          paragraphs:
            "With its intuitive low-code environment, Digisquares AppStudio is designed to be accessible to users without formal coding backgrounds, enabling them to take their ideas from concept to launch on their own. In one notable case, a marketing team at a retail company used AppStudio to build a promotional app for a seasonal campaign. Despite having no technical expertise, the team was able to drag and drop components, configure AI-powered chatbots, and integrate social media features seamlessly.",
        },
        {
          paragraphs:
            "The app was developed and deployed in just a few hours, allowing the marketing team to react to market trends in real-time. By empowering non-developers to create solutions tailored to their needs, AppStudio has helped break down silos, enabling departments to contribute to the company’s digital transformation directly.",
        },

        {
          paragraphs:
            "Digisquares AppStudio has ushered in a new era of app development by making it easy for anyone to turn an idea into a fully functional app in minutes. From startups gaining a competitive edge to enterprises optimizing internal processes, AppStudio’s low-code platform is empowering users across industries to launch custom applications swiftly and efficiently. By reducing development time and lowering technical barriers, AppStudio is helping companies drive innovation, boost productivity, and respond to market demands faster than ever before. As more businesses discover the potential of low-code development, AppStudio is setting a new standard for rapid, scalable app creation.",
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
        blogtitle={`Digisquares | From Idea to App`}
        blogheading={`From Concept to Launch: Real-Life Success with AppStudio`}
        blogdescription={`In the fast-paced world of modern business, turning ideas into reality quickly can be the difference between success and missed opportunities.`}
        blogurl={`/blog/FromIdeatoApp`}
        blogimg={`/assets/AI in DataCloud Main.webp`}
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

export default FromIdeatoApp;
