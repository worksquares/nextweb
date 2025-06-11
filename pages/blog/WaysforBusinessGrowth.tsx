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

const WaysforBusinessGrowth = () => {
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
      title: "4 Effective Ways to Harness Digitalization for Business Growth",
      img1700: "/assets/Blogs/blogheaders/WaysforBusinessGrowth_Header.webp",
      img1024: "/assets/Blogs/blogheaders/WaysforBusinessGrowth_Header.webp",
      img768: "/assets/Blogs/blogheaders/WaysforBusinessGrowth_Header.webp",
      img320: "/assets/Blogs/blogheaders/WaysforBusinessGrowth_Header.webp",

      paragraph: [
        // {
        //   subheading: "Enterprise cloud technology",
        // },
        {
          paragraphs:
            "Digitalization is no longer just an option for businesses it's a strategic necessity. As technology advances, companies across industries are realizing the significant benefits of embracing digital transformation. From customer service to internal operations, adopting digital tools can improve efficiency, reduce costs, and enhance user experiences. Whether you are just starting your digital transformation or refining your approach, here are four ways to embrace digitalization and unlock its full potential.",
        },
        {
          subheading: "1. Streamline App Development with Low-Code Platforms",
        },
        {
          subimages: "/assets/CloudEnabledAI%201.webp",
        },
        {
          paragraphs:
            "Building and maintaining digital applications can be a time-consuming and resource-heavy process. With the growing demand for digital solutions, companies need tools that simplify development without compromising functionality. This is where platforms like Digisquares AppStudio come into play. By offering low-code development for languages such as .NET, Node.js, Java, and Python, it enables businesses to build powerful applications quickly, even with limited coding expertise.",
        },
        {
          paragraphs:
            "Not only does this reduce the burden on IT teams, but it also empowers business users to create applications that address their specific needs. With AI agents integrated into the development process, AppStudio ensures faster time to market and a more seamless digital experience for users.",
        },
        {
          subheading: "2. Enhance Customer Engagement with AI-Powered Chatbots",
        },

        {
          paragraphs:
            "Today’s customers expect fast, personalized responses, and AI-powered chatbots are an effective way to meet these expectations. With Digisquares Agent Studio, businesses can create intelligent text and voice AI agents capable of handling customer inquiries in real time. These chatbots can engage users across multiple languages and devices, providing a consistent and responsive customer experience.",
        },
        {
          paragraphs:
            "By automating routine customer interactions, AI agents free up human resources for more complex tasks, improving both customer satisfaction and operational efficiency. This technology allows businesses to engage globally, while maintaining a personal touch, by tailoring responses to individual user needs.",
        },
        {
          subheading: "3. Leverage AI for Smarter Operations",
        },
        {
          subimages: "/assets/CloudEnabledAI%201.webp",
        },
        {
          paragraphs:
            "Artificial intelligence is transforming how organizations manage their operations. With tools like Digisquares AI Studio, businesses can train and fine-tune AI models using synthetic data, enabling faster, more accurate decision-making processes. AI-driven automation is especially useful in issue detection and resolution, helping companies identify anomalies, troubleshoot problems, and even prevent outages before they occur.",
        },
        {
          paragraphs:
            "By integrating AI into service operations, organizations can shift from reactive to proactive management. This not only reduces downtime but also enhances productivity, as issues are detected and resolved with minimal human intervention.",
        },
        {
          subheading: "Mitigate Risks in a Digital Environment",
        },
        {
          paragraphs:
            "As businesses embrace digitalization, they also expand their potential risk surfaces. With the increased reliance on digital tools and platforms, managing risks such as data breaches, system failures, and compliance issues becomes critical. Utilizing AI tools for risk management can help businesses stay secure in a rapidly evolving digital landscape.",
        },
        {
          paragraphs:
            "Platforms like Digisquares AI Studio not only enhance operational efficiency but also provide tools for identifying, assessing, and mitigating digital risks. By continuously monitoring systems and leveraging AI’s predictive capabilities, businesses can minimize their exposure to potential threats, keeping both data and operations secure.",
        },
        {
          paragraphs:
            "Embracing digitalization opens the door to a multitude of benefits, from streamlined operations to enhanced customer engagement. Platforms like Digisquares AppStudio, Agent Studio, and AI Studio provide the tools needed to build, manage, and optimize digital experiences with ease. By leveraging AI-powered solutions, businesses can navigate their digital transformation journey confidently, unlocking new opportunities for growth and innovation.",
        },

        // -----------------
        // {
        //   paragraphs:
        //     "Programmer, developer, coder, they’re all titles for the same occupation, someone who creates code. What they’re creating the code for can be anything from a video game to a critical element on board the International Space Station. How do you become a programmer though?",
        // },
        // {
        //   subheading: "MORE THAN CODE",
        // },
        // {
        //   paragraphs:
        //     "For those of you old enough to remember the ‘80s, the golden era of home computing the world of computing was a very diffrent sence to how it is today. 8-bit computers that you could purchase as a whole, as opposed to begin kit form and you having to solder the part together, were the stuff of dreams; and getting your hands on one was sheer bliss contained within a large plastic box. However, it wasn’t so much the new technology that computers then offered, moreover it was the fact that for the first time ever, you could control what was being viewed on the ‘television’.",
        // },
        // {
        //   subimages: "/assets/Programmer 1.webp",
        // },

        // {
        //   paragraphs:
        //     "Instead of simply playing one of the thousands of games available at the time, many users decided they wanted to create their own content, their own games; or simply something that could help them with their homework or home finances. The simplicity of the 8-bit home computer meant that creating something from a few lines of BASIC code was achievable and so the first generation of home-bred programmer was born.",
        // },

        // {
        //   paragraphs:
        //     "From that point on, programming expanded exponentially. It wasn’t long before the bedroom coder was a thing of the past and huge teams of designers, coders, artists and musicians were involved in making a single game. This of course led to the programmer becoming more then simply someone who could fashion a sprite on the screen and make it move at the press of a key.",
        // },
        // {
        //   paragraphs:
        //     "Naturally, time has moved on and with it the technology that we use. However, the fundamentals of programming remain the same; but what exactly does it take to be a programmer?",
        // },
        // {
        //   paragraphs:
        //     "The single most common trait of any programmer, regardless of what they’re doing, is the ability to see a logical pattern. By this we mean someone who can logically follow something from start to finish and envisage the intended outcome. While you may not feel you’re such a person, it is possible to train your brain into this way of thinking. Yes, it takes time but once you start to think in this particular way you will be able to construct and follow code.",
        // },
        // {
        //   paragraphs:
        //     "Second to logic is an understanding of mathematics. You don’t have to be at a genius level but you do need to understand the rudiments of maths. Maths is all about being able to solve a problem and code mostly falls under the umbrella of mathematics.",
        // },
        // {
        //   paragraphs:
        //     "begin able to see the big picture is certainly beneficial for the mordern programmer. Undoubtedly, as a programmer, you will be part of a team of other programmers, and more than likely part of an even bigger team of disgner, all of whom are creating a final product. while you may only be expected to create a small element of that final product beign able to understand what everyone else is doing will help you create something that’s ultimately better than simply being locked in your own coding cubicle.",
        // },
        // {
        //   paragraphs:
        //     "This process will not only trim the fat off the code before it's even written but will also help plug any gaps in the project before the hard work of enterning the code begins.",
        // },
        // {
        //   paragraphs:
        //     "Finally, there’s also a level of creativity needed to be a good programmer. Again though, you don’t need to be a creative genius, just have the imagination to be able to see the end product and how the user will interact with it.",
        // },
        // {
        //   paragraphs:
        //     "There is of Course a lot more involved in being a programmer, including learning the actual code itself. However, with time, patience and the determination to learn, anyone can become a programmer. Whether you want to be part of a triple-A video game team or simply create an automated routine to make your computing life easier, it’s up to you how far to take your coding adventure!",
        // },
        // },
        // ---------------------------
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
        blogtitle={`Digisquares | Effective Ways for Business Growth`}
        blogheading={`4 Effective Ways to Harness Digitalization for Business Growth`}
        blogdescription={`Digitalization is no longer just an option for businesses it's a strategic necessity. As technology advances, companies across industries are realizing the significant benefits of embracing digital transformation.`}
        blogurl={`/blog/WaysforBusinessGrowth`}
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

export default WaysforBusinessGrowth;
