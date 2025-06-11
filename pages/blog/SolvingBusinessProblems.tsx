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

const SolvingBusinessProblems = () => {
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
      title:
        "Unlocking Business Success Through the Now Platform’s Continuous Innovation",
      img1700: "/assets/CloudSecurity1.webp",
      img1024: "/assets/CloudSecurity1.webp",
      img768: "/assets/CloudSecurity1.webp",
      img320: "/assets/CloudSecurity1.webp",

      paragraph: [
        {
          paragraphs:
            "In today’s fast-evolving business landscape, organizations face increasing pressure to address complex challenges—from improving operational efficiency to enhancing customer experiences. Businesses need solutions that not only tackle these challenges but also adapt to ever-changing demands. Every release of the Now Platform is designed with this in mind, addressing pressing business problems through continuous innovation. With a focus on flexibility, automation, and seamless integration, each update provides companies with the tools they need to thrive in a dynamic world.",
        },

        {
          subheading: "Enhancing Productivity with Low-Code Solutions",
        },
        {
          subimages: "/assets/AI in DataCloud 1.webp",
        },

        {
          paragraphs:
            "One of the most common problems businesses face is the need to do more with fewer resources. Traditional development approaches can be time-consuming and require specialized expertise, making it difficult to keep up with the fast pace of innovation. Digisquares AppStudio, integrated into the Now Platform, solves this by offering a low-code development environment that supports .NET, Node.js, Java, and Python.",
        },
        {
          paragraphs:
            "By enabling users to drag-and-drop components and automate workflows without writing extensive code, businesses can dramatically reduce development time. This empowers non-technical teams to create solutions that drive productivity while freeing up IT teams to focus on more strategic initiatives. Each Now Platform release builds on this by incorporating the latest advancements in low-code development, making it easier for organizations to modernize their applications and respond quickly to market demands.",
        },
        {
          subheading:
            "Delivering Personalized Customer Experiences with AI-Powered Agents",
        },

        {
          paragraphs:
            "Customer expectations are higher than ever, and businesses must deliver fast, personalized support to stay competitive. Digisquares Agent Studio, part of the Now Platform, helps companies create intelligent AI-powered text and voice agents that interact with customers across multiple languages and platforms. These agents are designed to handle customer inquiries, provide personalized recommendations, and resolve issues in real-time.",
        },
        {
          paragraphs:
            "In every Now Platform release, AI-driven enhancements like natural language understanding (NLU) and machine learning algorithms are optimized to ensure even more accurate and human-like responses. This not only helps businesses enhance customer satisfaction but also reduces the workload on support teams. With AI-powered automation integrated seamlessly into customer service workflows, businesses can improve response times and deliver consistent, high-quality experiences.",
        },
        {
          subheading: "Streamlining Operations with Data-Driven Automation",
        },
        {
          subimages:
            "/assets/predective-analytics-and-machine-learning-47billion.webp",
        },
        {
          paragraphs:
            "Operational inefficiencies can hold businesses back, leading to delays, increased costs, and lost opportunities. The Now Platform tackles these challenges head-on by incorporating advanced automation tools, including Digisquares AI Studio. Through its synthetic data training capabilities, businesses can fine-tune AI models to automate critical processes, such as supply chain management, IT service operations, and compliance monitoring.",
        },
        {
          paragraphs:
            "With each release, the Now Platform introduces enhanced data analytics and AI-driven automation features, enabling businesses to streamline operations, improve decision-making, and optimize resource allocation. By automating repetitive tasks and using predictive analytics to anticipate issues before they arise, organizations can reduce manual intervention, minimize errors, and stay agile in the face of business challenges.",
        },

        {
          paragraphs:
            "At the heart of every Now Platform release is a commitment to solving the most pressing business problems through continuous innovation. Whether it’s enhancing productivity with low-code solutions, delivering personalized customer experiences through AI-powered agents, or streamlining operations with data-driven automation, the platform evolves to meet the needs of modern businesses. With tools like Digisquares AppStudio, Agent Studio, and AI Studio integrated into the platform, organizations have the flexibility and power to tackle their biggest challenges and drive lasting success. Each release brings businesses closer to achieving their goals, transforming how they work and compete in today’s fast-paced world.",
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
        blogtitle={`Digisquares | Solving Business Problems`}
        blogheading={`Unlocking Business Success Through the Now Platform’s Continuous Innovation`}
        blogdescription={`Fast-evolving business landscape, organizations face increasing pressure to address complex challenges—from improving operational efficiency to enhancing customer experiences.`}
        blogurl={`/blog/SolvingBusinessProblems`}
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

export default SolvingBusinessProblems;
