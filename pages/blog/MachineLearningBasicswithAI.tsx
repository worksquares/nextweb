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

const MachineLearningBasicswithAI = () => {
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
        "Discover Machine Learning Basics with AI Studio’s Intuitive Platform",
      img1700: "/assets/Blogs/blogheaders/MachineLearningBasicswithAI_Header.webp",
      img1024: "/assets/Blogs/blogheaders/MachineLearningBasicswithAI_Header.webp",
      img768: "/assets/Blogs/blogheaders/MachineLearningBasicswithAI_Header.webp",
      img320: "/assets/Blogs/blogheaders/MachineLearningBasicswithAI_Header.webp",

      paragraph: [
        {
          paragraphs:
            "Machine learning (ML) is at the heart of modern AI, transforming industries by enabling smarter insights, automation, and innovation. However, for beginners, the technical jargon and complex concepts can make ML seem intimidating. Digisquares AI Studio simplifies machine learning for newcomers, providing an intuitive platform where users can create, train, and deploy AI models without the need for extensive coding knowledge. By offering hands-on tools and guided workflows, AI Studio makes it easy to experiment with ML concepts, understand the fundamentals, and build real-world applications. Here’s how AI Studio is making machine learning accessible to everyone.",
        },
        {
          subheading:
            "Exploring Machine Learning Concepts with an Intuitive Platform",
        },
        {
          subimages: "/assets/Blogs/blogsmall/MachineLearningBasicswithAI_Small1.webp",
        },
        {
          paragraphs:
            "The first step in learning machine learning is understanding the basic concepts, from training data and algorithms to model evaluation and deployment. Digisquares AI Studio breaks down these elements into straightforward, guided steps, allowing beginners to focus on experimentation and learning rather than technical intricacies. With a user-friendly interface and clear explanations, AI Studio introduces users to core ML concepts, helping them gain practical experience without needing to write complex code.",
        },
        {
          paragraphs:
            "For instance, a user interested in predicting stock prices could start with AI Studio’s pre-built templates, designed to guide them through the process of selecting data, choosing algorithms, and training a model. By following simple prompts, users can see how changing data inputs and algorithm parameters affects the model’s performance. AI Studio transforms ML learning into an interactive experience, making it easier to grasp essential concepts and build foundational skills in a hands-on way.",
        },
        {
          subheading: "Building and Training Models Without Coding Expertise",
        },
        {
          paragraphs:
            "One of the biggest hurdles for beginners in machine learning is the need for coding knowledge. Digisquares AI Studio eliminates this barrier by offering tools that allow users to create and train models without writing any code. With drag-and-drop functionality and automated workflows, AI Studio makes it possible to build machine learning models in just a few clicks. This approach empowers beginners to focus on understanding the machine learning process rather than getting bogged down by syntax and programming.",
        },
        {
          paragraphs:
            "For example, an educator could use AI Studio to build a simple image classification model for a classroom project. By uploading a dataset of labeled images, the educator can train the model to recognize specific objects or animals without needing to code. AI Studio handles the heavy lifting behind the scenes, training the model based on the data provided and generating results that are easy to interpret. By making machine learning accessible to non-coders, AI Studio opens the door for beginners to explore AI and apply it in creative ways.",
        },
        {
          subheading:
            "Experimenting and Learning Through Real-World Applications",
        },
        {
          subimages: "/assets/Blogs/blogsmall/MachineLearningBasicswithAI_Small2.webp",
        },
        {
          paragraphs:
            "Learning machine learning is much more engaging when it’s tied to real-world applications. Digisquares AI Studio encourages users to experiment with different types of models and data, allowing them to see the impact of their choices on real projects. From sentiment analysis to predictive modeling, AI Studio offers a variety of project templates that showcase the versatility of machine learning. By experimenting with these applications, users can gain insights into how ML can solve practical problems across various industries.",
        },
        {
          paragraphs:
            "For instance, a small business owner might want to understand customer sentiment based on social media mentions. With AI Studio, they could use sentiment analysis to classify comments as positive, neutral, or negative, gaining valuable insights into customer opinions. The beginner-friendly tools in AI Studio allow users to adapt and personalize these applications, making it easier to see the direct impact of machine learning in everyday situations. By connecting ML concepts to real-world scenarios, AI Studio makes learning both practical and rewarding.",
        },
        {
          paragraphs:
            "Digisquares AI Studio is transforming the way beginners learn machine learning by offering a simplified, accessible platform that requires no prior coding knowledge. With tools that guide users through creating, training, and deploying models, AI Studio makes it possible for anyone to explore ML concepts and experiment with AI solutions. In a world where machine learning is becoming essential to business success, AI Studio provides an opportunity for newcomers to gain hands-on experience, develop practical skills, and unlock the potential of AI. Whether you’re a student, an educator, or a business owner, AI Studio can help you demystify machine learning and bring your ideas to life.",
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
        blogtitle={`Digisquares | Machine Learning Basics with AI Studio`}
        blogheading={`Discover Machine Learning Basics with AI Studio’s Intuitive Platform`}
        blogdescription={`Machine learning (ML) is at the heart of modern AI, transforming industries by enabling smarter insights, automation, and innovation.`}
        blogurl={`/blog/MachineLearningBasicswithAI`}
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

export default MachineLearningBasicswithAI;
