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

const ResponsibleAIModels = () => {
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
      if (DataList.Latest == true) {
        BlogRightCardListData.push({
          title2: j == 0 ? "Latest" : null,
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
      title: "Creating Responsible AI Models with AI Studio’s Ethical Tools",
      img1700: "/assets/Blogs/blogheaders/ResponsibleAIModels_Header.webp",
      img1024: "/assets/Blogs/blogheaders/ResponsibleAIModels_Header.webp",
      img768: "/assets/Blogs/blogheaders/ResponsibleAIModels_Header.webp",
      img320: "/assets/Blogs/blogheaders/ResponsibleAIModels_Header.webp",

      paragraph: [
        {
          paragraphs:
            "As AI technology becomes more integrated into our daily lives, the importance of ethical AI—focused on fairness, transparency, and compliance—continues to grow. Building ethical AI models means minimizing bias, ensuring accountability, and adhering to industry standards and regulations. Digisquares AI Studio supports businesses in developing AI solutions that prioritize ethical considerations, offering tools to build transparent, unbiased models while complying with regulatory guidelines. Here’s how AI Studio helps organizations create fair and responsible AI systems that promote trust, fairness, and ethical practices.",
        },
        {
          subheading: "Building Transparent Models for Greater Accountability",
        },
        {
          subimages: "/assets/Blogs/blogsmall/ResponsibleAIModels_Small1.webp",
        },
        {
          paragraphs:
            "Transparency is a cornerstone of ethical AI, allowing stakeholders to understand how AI models make decisions. Digisquares AI Studio enables users to track every step of the model-building process, providing insights into how data is processed and how the AI reaches specific conclusions. With built-in reporting features, AI Studio offers clear, interpretable results that facilitate accountability and help identify potential areas for improvement.",
        },
        {
          paragraphs:
            "For example, a financial institution using AI Studio to create a credit scoring model can access detailed reports showing which factors influenced each credit decision. By understanding the reasoning behind each output, the institution can ensure that the model treats applicants fairly and make adjustments to maintain transparency. This approach not only helps build trust with customers but also allows organizations to meet regulatory requirements for transparent AI practices. With AI Studio, businesses can create models that are both effective and explainable, fostering responsible AI usage.",
        },
        {
          subheading: "Reducing Bias to Promote Fairness",
        },
        {
          paragraphs:
            "Bias in AI can lead to unfair treatment, perpetuating discrimination and undermining trust. Digisquares AI Studio includes tools that help users identify and mitigate biases in their models, promoting fairness across different demographics. By allowing businesses to test models against various datasets and monitor for imbalances, AI Studio helps organizations create AI systems that are as fair and unbiased as possible.",
        },
        {
          paragraphs:
            "For instance, a hiring platform could use AI Studio to build a candidate screening model. By running the model on diverse datasets, the platform can check for biases related to gender, ethnicity, or age. If any biases are detected, the platform can adjust the model to ensure it evaluates candidates solely based on qualifications and skills. Through such tools, AI Studio empowers businesses to create models that treat all individuals equitably, promoting ethical practices and fostering inclusivity.",
        },
        {
          subheading: "Ensuring Compliance with Industry Regulations",
        },
        {
          subimages: "/assets/Blogs/blogsmall/ResponsibleAIModels_Small2.webp",
        },
        {
          paragraphs:
            "In sectors like healthcare, finance, and government, AI models are subject to stringent regulatory standards that protect user privacy and ensure fairness. Digisquares AI Studio provides compliance tools to help businesses meet these requirements, offering support for industry regulations like GDPR and HIPAA. With data anonymization, secure data handling, and access control features, AI Studio enables organizations to build models that respect user privacy and adhere to legal standards.",
        },
        {
          paragraphs:
            "For example, a healthcare organization using AI Studio to develop diagnostic tools can utilize data anonymization features to protect patient privacy. The organization can also use access controls to ensure that only authorized personnel can view or modify the data. By complying with healthcare regulations, the organization can confidently deploy its AI models, knowing they meet ethical and legal standards. With compliance built into its framework, AI Studio allows businesses to prioritize ethical practices throughout the AI development lifecycle.",
        },
        {
          paragraphs:
            "Digisquares AI Studio is committed to helping businesses develop ethical AI models that prioritize transparency, fairness, and compliance. By providing tools to promote accountability, reduce bias, and meet regulatory requirements, AI Studio empowers organizations to create AI solutions that reflect responsible practices. In an era where ethical considerations are crucial to AI’s success, AI Studio offers the resources needed to build trustworthy models that align with organizational values and industry standards. By embracing ethical AI, businesses can foster greater trust, enhance their reputation, and contribute to a more inclusive digital future.",
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
        blogtitle={`Digisquares | Creating Responsible AI Models`}
        blogheading={`Creating Responsible AI Models with AI Studio’s Ethical Tools`}
        blogdescription={`As AI technology becomes more integrated into our daily lives, the importance of ethical AI focused on fairness, transparency, and compliance continues to grow.`}
        blogurl={`/blog/ResponsibleAIModels`}
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

export default ResponsibleAIModels;
