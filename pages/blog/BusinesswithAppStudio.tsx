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

const BusinesswithAppStudio = () => {
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
      title: "Empower Your Growth: The Low-Code Advantage with AppStudio",
      img1700: "/assets/Blogs/blogheaders/BusinesswithAppStudio_Header.webp",
      img1024: "/assets/Blogs/blogheaders/BusinesswithAppStudio_Header.webp",
      img768: "/assets/Blogs/blogheaders/BusinesswithAppStudio_Header.webp",
      img320: "/assets/Blogs/blogheaders/BusinesswithAppStudio_Header.webp",

      paragraph: [
        // {
        //   subheading: "Enterprise cloud technology",
        // },
        {
          paragraphs:
            "As businesses grow, so do their technical needs. From expanding operational capabilities to addressing new customer demands, scaling requires robust, adaptable solutions that can keep pace with rapid change. However, traditional app development can be slow and resource-intensive, making it difficult for companies to respond to growth challenges in real-time. Digisquares AppStudio is transforming the way businesses scale by offering low-code solutions that accelerate app development, reduce technical overhead, and provide the flexibility needed to adapt to an evolving market. Here’s how AppStudio is helping companies scale effortlessly and stay ahead of the competition.",
        },
        {
          subheading: "Accelerating App Development to Drive Growth",
        },
        {
          subimages: "/assets/Blogs/blogsmall/BusinesswithAppStudio_Small1.webp",
        },
        {
          paragraphs:
            "One of the biggest hurdles to scaling is the time it takes to build and deploy new applications. Digisquares AppStudio addresses this challenge by enabling businesses to create custom solutions quickly through a drag-and-drop interface that minimizes the need for extensive coding. With support for .NET, Node.js, Java, and Python, AppStudio offers a flexible development environment that allows teams to design applications tailored to their specific needs.",
        },
        {
          paragraphs:
            "For example, a rapidly growing e-commerce business used AppStudio to build an order management system to keep up with increasing demand. Instead of months of traditional development, the team was able to deploy the solution in a matter of weeks. This quick turnaround allowed the company to scale its operations seamlessly, handle larger order volumes, and improve customer satisfaction. By drastically reducing development time, AppStudio empowers businesses to bring solutions to market faster, facilitating sustainable growth.",
        },
        {
          subheading: "Adapting to Market Changes with Flexible Solutions",
        },

        {
          paragraphs:
            "In a dynamic business environment, flexibility is key. As companies scale, they must be able to pivot and adjust their operations to respond to new opportunities and market trends. Digisquares AppStudio provides the adaptability businesses need by offering a low-code platform that can be easily customized and updated as requirements change.",
        },
        {
          paragraphs:
            "A financial services firm, for example, used AppStudio to build a client-facing app for managing investments. When new regulatory requirements were introduced, the firm was able to quickly update the app’s features and workflows to stay compliant. With AppStudio’s flexible environment, the firm could adapt to regulatory changes with minimal disruption, ensuring uninterrupted service for clients. This ability to evolve applications as needs change enables businesses to scale with confidence, staying competitive and relevant in an ever-changing market.",
        },
        {
          subheading: "Reducing Technical Overhead with Built-In AI",
        },
        {
          subimages:
            "/assets/Blogs/blogsmall/predective-analytics-and-machine-learning-47billion.webp",
        },
        {
          paragraphs:
            "Scaling a business often requires managing additional technical complexity, from infrastructure expansion to data integration. Digisquares AppStudio helps reduce this technical overhead by incorporating AI-powered tools directly into the platform. Businesses can leverage these tools to automate routine tasks, analyze data in real-time, and streamline workflows—all without the need for extensive technical expertise.",
        },
        {
          paragraphs:
            "For instance, a logistics company used AppStudio to automate parts of its supply chain operations. By integrating AI capabilities, the company was able to optimize route planning, reduce delivery times, and cut costs, all while keeping up with the growing volume of orders. These automated processes allowed the company to maintain high performance as it scaled, without having to expand its IT team. AppStudio’s built-in AI tools make it easier for businesses to scale efficiently, keeping costs down while delivering enhanced performance.",
        },
        {
          paragraphs:
            "As businesses scale, they need technology that grows with them. Digisquares AppStudio offers the low-code solutions that make scaling effortless, enabling companies to accelerate app development, adapt to market changes, and reduce technical overhead. By providing a flexible, AI-powered platform, AppStudio empowers organizations to meet the challenges of growth head-on, staying agile and competitive in a fast-paced digital world. Whether you’re a startup looking to expand or an established enterprise ready to scale up, AppStudio delivers the tools you need to build, deploy, and optimize solutions that drive sustainable growth.",
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
        blogtitle={`Digisquares | Business with AppStudio`}
        blogheading={`Empower Your Growth: The Low-Code Advantage with AppStudio`}
        blogdescription={`From expanding operational capabilities to addressing new customer demands, scaling requires robust, adaptable solutions that can keep pace with rapid change.`}
        blogurl={`/blog/BusinesswithAppStudio`}
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

export default BusinesswithAppStudio;
