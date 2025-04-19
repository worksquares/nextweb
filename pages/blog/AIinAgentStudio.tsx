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

const AIinAgentStudio = () => {
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
      title:
        "How Conversational AI in Agent Studio Enhances Customer Satisfaction",
      img1700: "/assets/Blogs/blogheaders/AIinAgentStudio_Header.webp",
      img1024: "/assets/Blogs/blogheaders/AIinAgentStudio_Header.webp",
      img768: "/assets/Blogs/blogheaders/AIinAgentStudio_Header.webp",
      img320: "/assets/Blogs/blogheaders/AIinAgentStudio_Header.webp",

      paragraph: [
        // {
        //   subheading: "Enterprise cloud technology",
        // },
        {
          paragraphs:
            "In today’s digital-first world, customer expectations are higher than ever. They demand fast, personalized service that is available 24/7, across a range of channels. Meeting these demands can be a challenge, especially for companies that rely on traditional customer service models. Digisquares Agent Studio is changing the game by integrating conversational AI into customer service operations, enabling companies to provide round-the-clock support and enhance customer engagement. With multi-language capabilities and natural language understanding (NLU), Agent Studio’s conversational AI offers seamless, personalized interactions that improve customer satisfaction and streamline service processes. Here’s how Agent Studio is transforming customer service.",
        },

        {
          subheading: "Delivering 24/7 Support with AI-Powered Conversations",
        },
        {
          subimages: "/assets/Blogs/blogsmall/AIinAgentStudio_Small1.webp",
        },

        {
          paragraphs:
            "One of the biggest advantages of Digisquares Agent Studio is its ability to provide always-on support. With AI-powered chatbots, businesses can handle customer inquiries at any time of day, reducing wait times and ensuring customers receive prompt assistance. These conversational agents can resolve common questions, direct customers to relevant resources, and even escalate issues to human agents when necessary.",
        },
        {
          paragraphs:
            "For instance, a telecommunications company used Agent Studio to implement an AI-driven virtual assistant for customer support. The assistant handled basic inquiries, such as troubleshooting steps and account information, enabling customers to receive help instantly, without needing to wait for a live agent. By offering 24/7 service, the company was able to reduce operational costs and improve customer satisfaction, as users received the assistance they needed when they needed it. Agent Studio’s AI-powered conversations create a more convenient, efficient experience, driving customer loyalty and retention.",
        },
        {
          subheading:
            "Multi-Language and Multi-Channel Capabilities for Seamless Interactions",
        },

        {
          paragraphs:
            "In today’s global marketplace, customer service needs to be flexible and accessible to a diverse audience. Digisquares Agent Studio supports multiple languages and channels, allowing companies to provide consistent, personalized support to customers around the world. Whether through web chat, mobile apps, or social media platforms, Agent Studio’s AI agents offer a unified customer experience across all touchpoints.",
        },
        {
          paragraphs:
            "For example, a retail company with an international customer base used Agent Studio to develop an AI chatbot capable of conversing in multiple languages. Customers from different regions could interact with the chatbot in their preferred language, making the service more accessible and user-friendly. By offering multilingual support, Agent Studio helped the company enhance its global reach and provide a more inclusive customer experience. This capability is especially valuable for businesses looking to expand into new markets, as it allows them to provide consistent service across regions and platforms.",
        },
        {
          subheading:
            "Enhancing Customer Satisfaction with Natural Language Understanding",
        },
        {
          subimages: "/assets/Blogs/blogsmall/AIinAgentStudio_Small2.webp",
        },
        {
          paragraphs:
            "At the core of Digisquares Agent Studio is its powerful natural language understanding (NLU) engine, which enables AI agents to interpret and respond to customer inquiries accurately. Unlike simple keyword-based chatbots, Agent Studio’s NLU-driven conversational AI can understand context, recognize intent, and handle complex questions, leading to more meaningful and satisfying interactions.",
        },
        {
          paragraphs:
            "For instance, a financial services company integrated Agent Studio’s conversational AI to assist clients with account inquiries and transaction details. With NLU capabilities, the AI agent was able to understand nuanced customer questions and respond with relevant information, providing a more personalized experience. This not only improved the accuracy of the responses but also enhanced customer trust and satisfaction. By leveraging NLU, Agent Studio ensures that interactions feel natural and tailored to each customer’s needs, making the experience more engaging and effective.",
        },
        {
          paragraphs:
            "Digisquares Agent Studio is revolutionizing customer service by harnessing the power of conversational AI. Through 24/7 availability, multi-language and multi-channel capabilities, and advanced natural language understanding, Agent Studio enables companies to deliver fast, personalized, and seamless customer experiences. In an era where customer satisfaction is a key differentiator, Agent Studio’s conversational AI empowers businesses to meet and exceed expectations, driving engagement, loyalty, and growth. As companies continue to embrace digital transformation, Agent Studio provides the tools needed to elevate customer service to a new level, paving the way for a more connected and responsive future.",
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
        blogtitle={`Digisquares | AI in Agent Studio`}
        blogheading={`How Conversational AI in Agent Studio Enhances Customer Satisfaction`}
        blogdescription={`They demand fast, personalized service that is available 24/7, across a range of channels. `}
        blogurl={`/blog/AIinAgentStudio`}
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

export default AIinAgentStudio;
