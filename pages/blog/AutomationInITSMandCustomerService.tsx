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

const DatabaseSoftware = () => {
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
      title:
        "Price Indexes for PC Database Software and the Value of Code Compatibility",
      link: "#",
      img1700: "/assets/Database.webp",
      img1024: "/assets/Database.webp",
      img768: "/assets/Database.webp",
      img320: "/assets/Database.webp",

      paragraph: [
        {
          paragraphs:
            "In today’s fast-paced digital landscape, businesses are under increasing pressure to deliver seamless IT service management (ITSM) and exceptional customer service. Automation, combined with AI-powered tools, offers a way to streamline these processes, enhancing efficiency and user satisfaction. By leveraging automation, businesses can optimize their IT operations and customer service in ways that were previously unachievable.",
        },
        {
          paragraphs:
            "Here are three key ways automation can transform ITSM and customer service, helping organizations improve workflows and deliver better outcomes.",
        },
        {
          subheading: "1. Enhance Service Experiences with Automation",
        },
        {
          paragraphs:
            "Automation enables IT teams to handle tasks with greater efficiency by eliminating repetitive manual processes. Platforms like Digisquares AppStudio play a crucial role in streamlining these workflows by integrating AI agents into app creation, making it easier for businesses to build solutions that enhance both IT and customer service operations.",
        },
        {
          paragraphs:
            "For ITSM, automating processes such as incident management, service-level agreements (SLAs), and change requests ensures faster resolution times. This not only leads to increased productivity but also reduces costs associated with manual task management. By automating core IT tasks, businesses can deliver a smoother, more cohesive service experience to both internal teams and customers.",
        },
        {
          subheading: "2. Increase Efficiency with Machine Learning",
        },
        {
          subimages: "/assets/DatabaseSoftware_Main.webp",
        },
        {
          paragraphs:
            "Automation doesn’t just stop at handling routine tasks—it can also harness machine learning to predict and resolve issues before they escalate. Tools like Digisquares AI Studio allow businesses to train and fine-tune AI models using synthetic data, enabling smarter decision-making and issue detection.",
        },
        {
          paragraphs:
            "For IT service management, machine learning can automatically classify incidents, suggest resolutions, and prioritize critical issues, significantly speeding up resolution times. By automating these key tasks, businesses can free up IT staff to focus on more complex challenges, while also ensuring that incidents are handled swiftly and accurately. Machine learning-driven automation makes ITSM more proactive, preventing service disruptions and improving overall operational efficiency.",
        },
        {
          subheading: "2. Increase Efficiency with Machine Learning",
        },
        {
          paragraphs:
            "A significant advantage of automation in customer service is the rise of AI-powered chatbots. With Digisquares Agent Studio, businesses can deploy intelligent text and voice AI agents that engage with customers in real time, offering personalized assistance across multiple languages and platforms. These chatbots can handle routine inquiries, such as password resets, system status checks, and frequently asked questions, allowing customers to resolve their issues without waiting for human intervention.",
        },
        {
          paragraphs:
            "By enhancing self-service capabilities, AI-powered chatbots not only reduce call volumes to customer support teams but also improve customer satisfaction. Automated chatbots can deliver accurate, timely information to customers, speeding up problem resolution and providing a seamless customer experience. This level of automation helps businesses scale their customer service efforts while maintaining a high level of quality.",
        },
        {
          paragraphs:
            "Automation is rapidly changing the way businesses approach ITSM and customer service, making it easier to deliver faster, more reliable services. By leveraging platforms like Digisquares AppStudio, Agent Studio, and AI Studio, businesses can automate key processes, reduce operational complexity, and deliver exceptional customer experiences. Whether through enhancing service delivery, improving operational efficiency, or empowering customers with self-service options, automation is a powerful tool for driving success in today’s digital-first world.",
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
        blogtitle={`Digisquares | 3 Key Ways Automation Enhances ITSM and Customer Service`}
        blogheading={`Price Indexes for PC Database Software and the Value of Code Compatibility`}
        blogdescription={`Automation, combined with AI-powered tools, offers a way to streamline these processes, enhancing efficiency and user satisfaction.`}
        blogurl={`/blog/AutomationInITSMandCustomerService`}
        blogimg={`/assets/Database.webp`}
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
                    <a className={styles.items}>Home</a>
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
                <Link legacyBehavior href="/ManagedDatabases">
                  &nbsp;Learn more about how to manage a database
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

export default DatabaseSoftware;
