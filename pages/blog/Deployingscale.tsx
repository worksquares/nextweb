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

const Deployingscale = () => {
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
      title: "Deploying AI at scale",
      // subtitle: "August 12, 2021",
      link: "#",
      img1700: "/assets/NewITManagement.webp",
      img1024: "/assets/NewITManagement.webp",
      img768: "/assets/NewITManagement.webp",
      img320: "/assets/NewITManagement.webp",
      paragraph: [
        {
          subheading: "What is the potential of AI?",
        },
        {
          paragraphs:
            "Simply put, AI is the simulation of human intelligence processes by computer systems2. Later in this paper we will look in more detail at the four main types of AI: assisted intelligence, augmented intelligence, autonomous intelligence and automation. Since the Industrial Revolution, factories have been rapidly and inexpensively mass-producing products to satisfy demand. However, manufacturers today are confronted with a wave of new challenges including:",
        },
        {
          paragraphs:
            "In addition, manufacturers are still contending with the problems they have always faced: higher production costs, equipment failure, and bottlenecks in the supply chain.",
        },
        {
          paragraphs:
            "AI is helping to address some, if not all, of the above issues. PwC’s AI analysis in 2017, Sizing the prize – What’s the real value of AI for your business and how can you capitalise, showed that global economic output, as measured by gross domestic product (GDP), could be 14% higher in 2030 than baseline projections of $114 trillion, as a result of the expected growth of AI. This translates to an additional $15.7 trillion3 (Figure 1).",
        },
        {
          subheading:
            "The economic benefits of AI will primarily be the result of:",
        },
        {
          subimages: "/assets/BenefitsofAI.webp",
        },
        {
          paragraphs:
            "Productivity gains from businesses that automate processes and augment the work of their existing labour force with different types of AI technologies.",
        },
        {
          paragraphs:
            "Increased consumer demand, resulting from the availability of personalised and/or higher-quality digital and AI-enhanced products and services.",
        },
        {
          subheading: "Potential by sector",
        },
        {
          paragraphs:
            "Since the manufacturing and construction industries are capital intensive by nature, the adoption of AI applications may increase the sectors’ contribution to GDP gains by more than 10% by 2030 ",
        },
        { subheading: "Potential by country" },
        {
          paragraphs:
            "When we looked at the forecast GDP impact by country, we found that China is expected to experience a GDP impact of $2.5 trillion, the largest absolute GDP gain as a result of AI. This is largely due to the size of the country’s manufacturing industry, as well as the significant emphasis China is placing on developing AI4.",
        },
        {
          subheading: "Potential within manufacturing organisations",
        },
        {
          subimages: "/assets/750px.webp",
        },
        {
          paragraphs:
            "Shows where AI capabilities are currently being used within manufacturing companies5. While the technology has been implemented throughout the key parts of the business, companies have put slightly more focus on adding AI solutions to their core production processes: product development, engineering, and assembly and quality testing.",
        },
        {
          paragraphs:
            "The core use cases for AI in manufacturing are becoming clearer as companies learn to better quantify the value of the technology. However, PwC research has shown that uncertainty around return on investment (ROI) remains one of the major challenges to implementing it more widely6. As Figure 5 shows, many companies also struggle with collecting and supplying the data that an AI system needs to operate, and lack people in their workforce with the right skills to implement AI at scale.",
        },
        {
          paragraphs:
            "Inevitably, one of the most influential factors in AI adoption is a company’s overall progress in digitising its operations. The organisations that have made the most progress in digitising core business processes also lead on AI adoption. In the Global Digital Operations study, PwC ranked companies by digital maturity and grouped them into four categories: digital novices, digital followers, digital innovators and digital champions7. The study showed that 69% of digital champions have implemented, piloted or plan to use AI within their business, compared to 10% of digital novices.",
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
        blogtitle={`Digisquares | Deploying scale at AI`}
        blogheading={`Deploying AI at scale`}
        blogdescription={`A glimpse into the future of manufacturing can be found at FANUC’s plant in Oshino, Japan.`}
        blogurl={`/blog/Deployingscale`}
        blogimg={`/assets/NewITManagement.webp`}
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

export default Deployingscale;
