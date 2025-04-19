import React, { useState } from "react";
import BlogPostContent from "../../comp/BlogPostContent";
import { BlogPostContainProps } from "../../comp/base/BlogPostCard";
import { BlogRightContainProps } from "../../comp/base/BlogRightImgCard";
import BlogRightImg from "../../comp/BlogRight";
import { BlogTopicsContainProps } from "../../comp/base/BlogTopicsCard";
import BlogTopicContent from "../../comp/BlogTopicsContent";
// import styles from "../styles/Blog.module.css";
import styles from "../../styles/Blog.module.css";
import Styles from "../../styles/comp/core/BlogPostCard.module.css";
import Link from "next/link";
import { BlogLists } from "../../comp/BlogData";
import Headseo from "../headseo";
import Screen from "../../comp/Screen";
import BaseLayout from "../../comp/BaseLayout";

const APIEnabledEcosystem = () => {
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
          title2: j == 0 ? "Trends" : null,
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
        "Role of analytics in unlocking the power of API enabled ecosystems",
      link: "#",
      img1700: "/assets/DigitalManagement.webp",
      img1024: "/assets/DigitalManagement.webp",
      img768: "/assets/DigitalManagement.webp",
      img320: "/assets/DigitalManagement.webp",

      paragraph: [
        {
          paragraphs:
            "APIs have become the mechanism of choice for connecting internal services, applications, data, identities, and other digital assets. As a result, APIs now have the potential to serve as a similarly valuable mechanism. Then can also provide a significantly easier-to-use alternative to the traditional, ad hoc approaches to data collection and data analysis that have slowed the process of converting information into the intelligence required by today’s data-driven organisations.",
        },
        {
          paragraphs:
            "Further, updating the analytics capabilities can be achieved by updating the API management software one system managed by a single group, rather than involving multiple systems and teams in the organisation. Data collected at the API layer could include information about the following:",
        },
        {
          paragraphs:
            "• Request and response, including time stamps, headers, full message, message size, and request path URL",
        },
        {
          paragraphs: "• Invocation, IP address, username, and user agent",
        },
        {
          paragraphs:
            "• Processing, including time started, time ended, outcome, errors, API name, hostname, and protocol This data then can be used not merely by creating dashboards and reports but also to predict using complex analysis",
        },
        {
          subheading: "Substenance of ecosystems’ growth",
        },
        {
          subimages: "/assets/DigitalEcosystem-1.webp",
        },
        {
          paragraphs:
            "Initial stages of adopting a new business model are known for the rapid pace at which companies develop innovative solutions to increase speed to market. This enables them to receive immediate feedback on prototypes and rapidly improve their products and services, making them more relevant for their customers. However, when they scale they make it difficult to quickly adapt to innovation due to their sheer size and established processes.",
        },
        {
          paragraphs:
            "Just as aircraft manufacturers hire aeronautical engineers to design products and software vendors employ legions of coders with specific skills, companies must pursue API strategies to hire the right people or reskill existing people for the job. Help create synergies for consumers by lowering their costs or create production/sales/service synergies for their offerings.",
        },
        {
          subheading: "Adopt an agile approach",
        },
        {
          subimages: "/assets/AgileApproach-2.webp",
        },
        {
          paragraphs:
            "Go to market and iterate often. As you explore possible API strategies and use cases, consider using lightweight prototypes and rapid experimentation. This way, you can factor in feasibility concerns but you will not be saddled (at least for the time being) with the burden of “enterprise” constraints. As compelling ideas gain momentum, you can then shape your solution, refine the business case for it, and explore it at scale. Many organisations have troves of raw data they have never used. By working with data scientists to analyse these assets before embarking on API initiatives, companies can better understand their data’s current value. Data should not be valued based on the applicability today but also determine future value with a higher activity.",
        },
        {
          subheading: "Competitive advantage",
        },
        {
          subimages: "/assets/CompetativeAdv.webp",
        },
        {
          paragraphs:
            "Not competing with price, but through value will help create a competitive advantage as the willingness to pay will increase. The more sustainable the competitive advantage, the more difficult competitors find it to neutralise the advantage. companies have built up masses of valuable data about their customers, products, supply chains, operations, and more. However, they are not always good at making it available in useful ways. That is a missed opportunity at best and a fatal error at worst. Within today’s digital ecosystems, business is driven by getting information to the right people at the right time. ",
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
        blogtitle={`Digisquares | API Enabled Ecosystem`}
        blogheading={`Role of analytics in unlocking the power of API enabled ecosystems`}
        blogdescription={`APIs have become the mechanism of choice for connecting internal and external services, applications, data, identities, and other digital assets.`}
        blogurl={`/blog/APIEnabledEcosystem`}
        blogimg={`/assets/APIEnabledEcosystemMain.webp`}
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

export default APIEnabledEcosystem;
