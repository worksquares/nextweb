import Link from "next/link";
import { useState } from "react";
import { BlogPostContainProps } from "../../comp/base/BlogPostCard";
import { BlogRightContainProps } from "../../comp/base/BlogRightImgCard";
import { BlogTopicsContainProps } from "../../comp/base/BlogTopicsCard";
import { BlogLists } from "../../comp/BlogData";
import BlogPostContent from "../../comp/BlogPostContent";
import BlogRightImg from "../../comp/BlogRight";
import BlogTopicContent from "../../comp/BlogTopicsContent";
import styles from "../../styles/Blog.module.css";
import Styles from "../../styles/comp/core/BlogPostCard.module.css";

import BaseLayout from "../../comp/BaseLayout";
import Screen from "../../comp/Screen";
import Headseo from "../headseo";

const AcceleratingCustomer = () => {
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
      title: "Accelerating Customer Communications",
      img1700: "/assets/CustomerCommunication1.webp",
      img1024: "/assets/CustomerCommunication1.webp",
      img768: "/assets/CustomerCommunication1.webp",
      img320: "/assets/CustomerCommunication1.webp",

      paragraph: [
        {
          subheading: "Low Code’s Impact on Personal Communications",
        },
        {
          paragraphs:
            "“Low Code” is a concept originating in software development which allows users to dynamically create new applications with little or no requirement for specialist skills or IT support. In the context of communications, this approach enables business users to construct new touchpoints, setup business rules, design interaction workflows, or produce customer communications from pre-defined components without having to write extensive software code or employ specialist IT skills. When leveraging Low Code applications, employees with limited technical knowledge can configure everything from letters and emails to mobile apps and even personalized video using a simple “drag-and-drop” workflow without the involvement of IT.",
        },
        {
          paragraphs:
            "This makes the individual LOB groups much more agile, giving them greater freedom to make any necessary adjustments to their customer communications strategy without having to await budget approval or endure long development cycles, ultimately accelerating the whole organization’s progress toward desired business outcomes. Note that Low Code, as opposed to No Code, has the added benefit of enabling more technical users to add custom code when required. For business users, this would not be a typical requirement, but for IT specialists, Low Code platforms can dramatically cut down on software development time and application modernization.",
        },
        {
          subheading: "Market Disruption Has Accelerated This Evolution",
        },
        {
          subimages: "/assets/CustomerCommunication2.webp",
        },
        {
          paragraphs:
            "When we asked participants about the impact the virus has had on their budgets, half reported that they have cancelled, frozen, or reduced marketing spend while around 30% have increased spending on digital transformation along with customer experience and communications. Similarly, customer retention outpaced customer acquisition to become the top communications priority for nearly all of the 300 businesses we surveyed.",
        },
        {
          paragraphs:
            "A comparison of strategic objectives pre-and-post-COVID reveals a significant uptick in enterprise focus on improving customer experience, facilitating omni-channel communications, and especially in realizing digital transformation. Taken together, these findings point to a shift in emphasis away from customer acquisition through marketing to customer retention through superior communications. Businesses are now working to boost retention and maximize customer lifetime value by providing  superior omni-channel communications experience.",
        },

        {
          subheading: "How Enterprises are Reacting to this Acceleration",
        },
        {
          subimages: "/assets/CustomerCommunication3.webp",
        },
        {
          paragraphs:
            "To accomplish this objective, around two-thirds of the enterprises we surveyed have or are planning to make organizational and technological changes to their customer communications processes. With over a third of employees in the U.S. now working from home at least part-time, the top organizational change undertaken in response to COVID-19 has been for businesses to work toward giving employees the tools they need to manage communications while working remotely. Hampered by complex systems and reliance on slow and expensive IT projects, these efforts have been heavily weighted toward the large enterprises who have the funds and resources to devote to it.",
        },
        {
          paragraphs:
            "The surge in digital adoption and the accelerated pace of the CCM to CXM transformation resulting from the unprecedented disruption of the last two years has already shifted the balance in favor of subscription/cloud solutions. It is expensive and difficult for enterprises to individually procure and integrate the capabilities they need to improve communications experience. Going forward, an ever-growing share of businesses will turn to the cloud in order to take advantage of its faster path to innovation and next-gen capabilities, the ability to instantly update solutions through the cloud, and crucially the chance to rely on browser-based CCM to empower business users to manage customer communications while working remotely.",
        },
        {
          paragraphs:
            "Improvements in modern solution building, such as componentbased microservices architectures, serverless cloud execution, Robotic Process Automation (RPA), standard Open APIs and messaging systems, as well as business-orientated Artificial Intelligence and Machine Learning (AI/ML) services, have made it possible to design Low Code CCM-CXM solutions which allow business users to repurpose individual existing elements to build new communications without special skills or IT involvement. Reusable workflow templates and visual drag-and-drop design enable employees with limited technical knowledge to leverage graphical user interfaces and modern tools, making Low Code customer communications a valuable innovation accelerator.",
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
        blogtitle={`Digisquares | Accelerating Customer`}
        blogheading={`Accelerating Customer Communications`}
        blogdescription={`Low Code is a concept originating in software development which allows users to dynamically create new applications with little or no requirement for specialist skills or IT support.`}
        blogurl={`/blog/AcceleratingCustomer`}
        blogimg={`/assets/CustomerCommunication1.webp`}
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

export default AcceleratingCustomer;
