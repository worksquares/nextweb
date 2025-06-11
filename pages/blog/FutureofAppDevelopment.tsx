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

const FutureofAppDevelopment = () => {
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
        "Transforming App Development with AppStudio: The Low-Code Advantage",
      img1700: "/assets/Blogs/blogheaders/FutureofAppDevelopment_Header.webp",
      img1024: "/assets/Blogs/blogheaders/FutureofAppDevelopment_Header.webp",
      img768: "/assets/Blogs/blogheaders/FutureofAppDevelopment_Header.webp",
      img320: "/assets/Blogs/blogheaders/FutureofAppDevelopment_Header.webp",

      paragraph: [
        // {
        //   subheading: "Enterprise cloud technology",
        // },
        {
          paragraphs:
            "As businesses increasingly rely on software to drive growth and innovation, the need for efficient, flexible app development has never been more pressing. Traditional development methods often require extensive time and coding expertise, making it difficult for organizations to keep pace with the speed of digital transformation. Enter the low-code revolution—a shift in app development that’s empowering both technical and non-technical users to build powerful applications quickly and with minimal coding. At the forefront of this movement is Digisquares AppStudio, a platform that’s transforming app development by providing intuitive, low-code solutions that streamline the entire process.",
        },

        {
          subheading:
            "Accelerating Development with Intuitive, Drag-and-Drop Tools",
        },
        {
          subimages: "/assets/Blogs/blogsmall/FutureofAppDevelopment_Small1.webp",
        },

        {
          paragraphs:
            "One of the most significant benefits of Digisquares AppStudio is its ability to simplify the development process through a visual, drag-and-drop interface. By supporting a range of programming languages, including .NET, Node.js, Java, and Python, AppStudio enables developers to rapidly build applications that meet their unique requirements. With pre-built components and automation features, even non-developers can contribute to the development process, reducing the need for extensive coding expertise.",
        },
        {
          paragraphs:
            "This intuitive approach not only accelerates development but also empowers more people within an organization to participate in creating solutions. By breaking down technical barriers, businesses can bring new applications to market faster, fostering a culture of innovation and collaboration. Each application can be customized and scaled as needed, allowing teams to create solutions that are precisely aligned with their business needs.",
        },
        {
          subheading: "Enhancing App Functionality with AI Integration",
        },

        {
          paragraphs:
            "In today’s digital landscape, AI is no longer a luxury—it’s a necessity. Digisquares AppStudio integrates AI capabilities directly into the development environment, allowing users to build applications that leverage the power of machine learning and natural language processing without requiring advanced AI expertise. This means developers can quickly add AI-driven features like predictive analytics, chatbots, and automated workflows to their applications, enhancing functionality and delivering smarter, more responsive user experiences.",
        },
        {
          paragraphs:
            "With built-in AI components, users can train models on synthetic data, customize machine learning algorithms, and deploy AI-powered solutions seamlessly. This capability transforms AppStudio into a comprehensive development platform that not only accelerates app creation but also enables businesses to integrate cutting-edge technology that drives value and efficiency.",
        },
        {
          subheading:
            "Democratizing Development and Enabling Cross-Functional Collaboration",
        },
        {
          subimages: "/assets/Blogs/blogsmall/FutureofAppDevelopment_Small2.webp",
        },
        {
          paragraphs:
            "One of the most revolutionary aspects of Digisquares AppStudio is its accessibility. The platform is designed to be used by both experienced developers and those with limited technical skills, making app development a collaborative effort across departments. By removing the need for specialized coding knowledge, AppStudio democratizes development, enabling teams from IT, marketing, operations, and beyond to contribute to the creation of applications that improve workflows and customer engagement.",
        },
        {
          paragraphs:
            "This cross-functional approach to app development fosters a more innovative and inclusive culture, where solutions are developed by the people who understand the challenges and needs of the business best. Whether it’s creating internal tools to streamline operations or building customer-facing applications that enhance user experiences, AppStudio empowers organizations to build smarter, more impactful solutions together.",
        },

        {
          paragraphs:
            "The low-code revolution is reshaping the future of app development, and Digisquares AppStudio is leading the way. By combining an intuitive, drag-and-drop interface with AI integration and cross-functional collaboration, AppStudio is transforming how businesses create and deploy applications. This powerful platform accelerates development, democratizes access to technology, and enables organizations to drive innovation at scale. As businesses continue to embrace digital transformation, AppStudio provides the tools needed to stay competitive, agile, and ahead of the curve in a rapidly evolving market.",
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
        blogtitle={`Digisquares | uture of App Development`}
        blogheading={`Transforming App Development with AppStudio: The Low-Code Advantage`}
        blogdescription={`As businesses increasingly rely on software to drive growth and innovation, the need for efficient, flexible app development has never been more pressing.`}
        blogurl={`/blog/FutureofAppDevelopment`}
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

export default FutureofAppDevelopment;
