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
import Screen from "../../comp/Screen";
import { BlogLists } from "../../comp/BlogData";
import Headseo from "../headseo";
import BaseLayout from "../../comp/BaseLayout";

const DrivingDigitalTransformation = () => {
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
      title: "Driving Digital Transformation",
      // subtitle: "August 12, 2021",
      link: "#",
      img1700: "/assets/Driving Digital Transformation.webp",
      img1024: "/assets/Driving Digital Transformation.webp",
      img768: "/assets/Driving Digital Transformation.webp",
      img320: "/assets/Driving Digital Transformation.webp",

      paragraph: [
        {
          paragraphs:
            "As the speed of business continues to rapidly evolve, so do the technologies that help manufacturers digitize their factories, drive financial and operational impact, and improve productivity and customer satisfaction. Yet digital transformation is not simply about the deployment of digital technologies, and the introduction of new technologies alone does not necessarily ensure success. It is more important to understand what your organization must do to succeed on the crucial journey to digital transformation, and to take the right steps to enable it, including leveraging Industry 4.0 and Integrated Business Planning. ",
        },
        {
          subheading:
            "How Digital Transformation Is Driving Change for Manufacturers",
        },
        {
          paragraphs:
            "Changes in customer demand, industry standards and public policy regulations are rapidly transforming manufacturing organizations of all sizes and types. The pace of change in manufacturing is further accelerated by Industry 4.0 and Smart Manufacturing/Smart Factories initiatives. Due to increased outsourcing to trading partners when working with a global supply chain operating model, today’s manufacturers are interacting with a much broader, more diverse and complex set of partners in the value chain. Expansion into new markets and segments makes their supply chains more complicated than ever, and such complexity in supply chains often prevents a manufacturer’s ability to accurately predict demand and assess the impact of supply chain disruption, often due to lack of end-to-end visibility.",
        },
        {
          paragraphs:
            "Despite the challenges, continuous innovation, improved quality, and increased customer satisfaction remain the top priority. In today’s competitive markets, manufacturers cannot afford to be slow in their response to adapting to emerging trends. To thrive, manufacturers must be agile, stay aligned with a rapidly evolving business environment, and exploit new growth opportunities efficiently. This calls for manufacturers to embrace digital technologies to improve business processes and corresponding business models. This will allow them to effectively compete and grow, and create real benefits for the future.",
        },
        {
          subheading: "DATA DRIVES SMART BUSINESS DECISIONS",
        },
        {
          subimages: "/assets/Business-1.webp",
        },
        {
          paragraphs:
            "All agreed that the future must include tying the supply chains, suppliers and contract manufacturers together in a way that allows them to be managed more tightly and allows the speed of information to flow more quickly through the organization. This will help ensure that quality, manufacturing, supply side, and sales and purchasing departments have the information much faster, allowing them to make decisions without having to rely on the rest of the organization when the situations warrants.",
        },
        {
          paragraphs:
            "This can culminate in real-time data collection from anywhere, including deriving actionable data insights through advanced analytics in an easy-touse user mobile interface that can shape and impact day-to-day operations. It can also include monitoring performance to make the right decisions at the right time, and to improve the velocity of business execution. To this end, digital transformation helps manufacturers establish a foundation for agility and flexibility",
        },
        {
          subheading: "THE IMPORTANCE OF INTEGRATING TECHNOLOGY",
        },
        {
          subimages: "/assets/Integrated-_1_.webp",
        },
        {
          paragraphs:
            "In today’s rapidly changing manufacturing world, users of any kind should be able to look at complex data and independently unlock actionable business insights with ease, speed and agility. Real-time data analysis capabilities, predictive analytics and AI can help workers and leadership teams leverage data, interpret the results, and ultimately provide decision-making agility and performance predictability. Bringing the power of analytics into the hands of the workforce, leadership teams, decision-makers and stakeholders that are driving value for the business will be a critical component of digital transformation.",
        },
        {
          paragraphs:
            "Delivering real benefits for the future is, therefore, about the integration of technologies that are better aligned with the business. This needs to be coupled with effective management of these suites of technologies. These changes will help orchestrate a digitally transformed, data-driven organization for the future. Collaboration and organizational and cultural change have to be driven from the leadership group",
        },
        {
          paragraphs:
            "In addition, companies are rapidly moving from a hierarchal organizational structure to one that is far more collaborative. Not just because employees need to work together to do things more quickly and cut down on delays between organizational silos, but also because all parties can now share information and get a common view of what needs to be done, end to end, within the organization.",
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
        blogtitle={`Digisquares | Driving Digital Transformation`}
        blogheading={`Driving Digital Transformation`}
        blogdescription={`As the speed of business continues to rapidly evolve, so do the technologies that help manufacturers digitize their factories.`}
        blogurl={`/blog/DrivingDigitalTransformation`}
        blogimg={`/assets/Driving Digital Transformation.webp`}
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

export default DrivingDigitalTransformation;
