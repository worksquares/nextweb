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

const CloudEnabledAI = () => {
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
      }
      j = 2;
    });
  }

  let BlogPostListData: BlogPostContainProps[] = [
    {
      title: "How Cloud-Enabled AI will Drive Business Value in the Future",
      subtitle: "August 12, 2021",
      link: "#",
      img1700: "/assets/CloudEnabledAI%20Main.webp",
      img1024: "/assets/CloudEnabledAI%20Main.webp",
      img768: "/assets/CloudEnabledAI%20Main.webp",
      img320: "/assets/CloudEnabledAI%20Main.webp",
      paragraph: [
        {
          paragraphs:
            "There are three major landmarks on the road to AI maturity. The first is using data to describe how things are. The second is using it to predict what will happen next. Then, there’s using data to prescribe the best course of action based on the information at hand. In 2018, that 4% of organizations had deployed AI capabilities. Of the 100 data and analytics leaders we surveyed, 69% say their enterprises are at least using predictive analytics or AI models. What’s more, 25% have made the jump to prescriptive analytics. MercyFirst CDO Dr Besa Bauta explains: “A few years ago, a lot of this was new. But there are many organizations out there that have pretty much codified providing AI as a service.”",
        },
        {
          paragraphs:
            "With a customer base of over 300 enterprise clients and a network of strategic partners, CoreStack serves mid-tolarge organizations across many industries such as healthcare, financial, media, gaming, and retail. CoreStack helps its customers cut costs, make operations more efficient, and ensure 100% compliance with standards such as ISO, FedRAMP, NIST, HIPAA, PCI-DSS, Azure CIS, AWS CIS, and AWS Well-Architected Framework.",
        },
        { subheading: "How AI is Driving Business Value Today" },
        {
          subimages: "/assets/CloudEnabledAI%201.webp",
        },
        {
          paragraphs:
            "With 71% of survey respondents citing it, ‘generating additional revenue’ is one of the most critical applications of AI for businesses today. ‘Improving risk management’, ‘business process automation’ and ‘automating business decisions’ came in as a distant second, third and fourth with 43%, 42% and 38%, respectively. “For us, it’s not replacing the person but instead augmenting decision-making processes by sourcing information,” says Dr Bauta. “AI algorithms uncover insights that otherwise we wouldn’t have sourced because of the scale and the volume of the information that’s being processed.”",
        },
        {
          paragraphs:
            "‘Enhancing cyber security’, ‘supply chain optimization’ and ‘improving CX’ were cited by 37%, 32% and 31% of respondents, respectively. Meanwhile, 30% of respondents say they’re using AI to augment existing decision-making processes. As BP Global Head of Quantitative and Analytical Solutions Cetin Karakus says, it might not be ideal for enterprises to fully automate business-critical decisions. “AI definitely is a good tool to use where you could scale the processing of large datasets,” he says. “But you have to integrate it with the existing technologies to make it really valuable and create value.” He adds: “You still need to have some sort of operational system where certain subject matter experts can have a final say or review of the results.” Lastly, 16% of enterprises are using AI to enhance fraud detection and just 7% are using it to improve recruitment processes.",
        },
        {
          subheading: "Choosing the Right Problems to Solve with AI",
        },
        {
          subimages: "/assets/CloudEnabledAI%201.webp",
        },
        {
          paragraphs:
            "Choosing the right business problems to solve with AI has emerged as one of the greatest challenges facing AI-focused business leaders today. Just 4% of our survey respondents say they’ve completely dealt with this challenge. Meanwhile, 82% describe the task as at least ‘quite challenging’ and 32% say it’s ‘very challenging’. ‘Developing AI models in house’ and ‘choosing the right type of model for a given use case’ emerged as other key barriers AI leaders need to overcome. Respectively, 60% and 59% of respondents describe these aspects of AI deployment as being at least ‘quite challenging’.",
        },
        {
          paragraphs:
            "“These findings demonstrate the difficulty enterprises face with respect to attracting and retaining AI talent,” adds Ashish Verma, Managing Director and Data Modernization and Analytics Leader at Deloitte. “They also highlight how central the ability to innovate has become for AIfocused executives.” Enterprises that successfully overcome these challenges often do so by building AI teams with deep data science expertise. In fact, 57% of the AI leaders we surveyed have developed efficient processes for implementing, operationalizing and scaling AI capabilities to set their strategies up for success. Meanwhile, 47% have developed efficient processes for developing AI tools in-house.",
        },
        {
          paragraphs:
            "However, AI and analytics leaders must also pair this technical knowledge with deep domain and industry expertise to uncover the most fertile opportunities for AI innovation and prioritize them accordingly. It’s important for AI leaders to ensure alignment with stakeholders from the business units they serve to understand what the most pressing business pain points are and which should be addressed in their AI innovation roadmaps. “It’s critical for AI-focused executives to think about themselves as the centers of innovation, focused on creating products that deliver high business value,” Verma concludes. “Achieving this goal requires an in-depth knowledge of the industry an enterprise operates in and the broader competitive landscape.”",
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
        blogtitle={`Digisquares | Cloud Enabled AI`}
        blogheading={`How Cloud-Enabled AI will Drive Business Value in the Future`}
        blogdescription={`There are three major landmarks on the road to AI maturity.`}
        blogurl={`/blog/CloudEnabledAI`}
        blogimg={`/assets/CloudEnabledAI%20Main.webp`}
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
                <form action="" className={styles.searchbar}>
                  <input
                    type="search"
                    name="search"
                    pattern=".*\S.*"
                    required
                  />
                  <button className={styles.searchbtn} type="submit">
                    <span>Search</span>
                  </button>
                </form>
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
                <Link href="/CloudComputing">
                  {" "}
                  &nbsp;Learn more about a Cloud Computing approach and how it
                  applies to privacy and multicloud data integration
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

export default CloudEnabledAI;
