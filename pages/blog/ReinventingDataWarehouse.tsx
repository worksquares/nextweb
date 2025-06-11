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

const ReinventingDataWarehouse = () => {
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
      title: "Reinventing Data Warehouse",
      // subtitle: "August 12, 2021",
      link: "#",
      img1700: "/assets/Data-Warehouse.webp",
      img1024: "/assets/Data-Warehouse.webp",
      img768: "/assets/Data-Warehouse.webp",
      img320: "/assets/Data-Warehouse.webp",

      paragraph: [
        {
          subheading: "Traditional Data Warehouses Can’t Keep Up",
        },
        {
          paragraphs:
            "The harsh reality of data warehousing is that conventional solutions are simply too costly, inflexible, and complex for today’s not to mention tomorrow’s data. These solutions were designed for managing predictable, slow-moving, and easily categorized data that largely came from internal enterprise applications under your control. They require customers to purchase everything they need for peak demand up front, spending hundreds of thousands of dollars (millions in some cases) just to get started. This all but guarantees that most of the technology will sit underutilized the majority of the time. s one Director of Analytics put it, “We have to buy for the 99th percentile even though we only reach that level one day per year.” ",
        },
        {
          subheading: "Big Data Platforms Are not the Answer",
        },
        {
          subimages: "/assets/BigData.webp",
        },
        {
          paragraphs:
            "Although new solutions such as Hadoop have emerged to offer lower cost and greater flexibility, these were never designed to be data warehouse and are ill-equipped to become one. They were designed for batch processing of data, not for SQL analytics in near real-time. As a result, many customers find that once they have transformed and organized data in Hadoop, they are forced to move it to a data warehouse for fast analysis.",
        },
        {
          paragraphs:
            "Equally challenging, these systems are so complex that they require specialized expertise and resources to deploy, manage, and use operations professionals, infrastructure engineers, and data scientists. The result access to data is restricted to a small handful of specially trained data scientists and developers charged with running analytics and deciphering their meanings, a process which often takes weeks.",
        },
        {
          subheading: "Reimagining the Data Warehouse",
        },
        {
          subimages: "/assets/ReimaginingDataWarehouse.webp",
        },
        {
          paragraphs:
            "If you were to start over, architecting the ideal data warehouse for today’s and tomorrow’s data needs, what would it look like? It would meet the following requirements:",
        },
        {
          paragraphs:
            "* Truly elastic It would be able to grow, shrink, and change in a matter of minutes to adapt to any processing demand, even going all the way back to zero when no queries are running",
        },
        {
          paragraphs:
            "* Store and process all your data It would provide unlimited storage capacity at such a low cost that you never have to think about throwing out data, and it would easily accept diverse forms of data from purely relational, structured forms (e.g. CSV files) to semi-structured data such as JSON or Avro.",
        },
        {
          paragraphs:
            "* Self-service easy It would make it possible for analysts to simply load data and run queries immediately without needing to worry about infrastructure, tuning, and availability.",
        },
        {
          subheading: "Cloud Is the Only Way to Get There",
        },
        {
          subimages:
            "/assets/Top_Cloud_Computing_Companies_to_Work_for_in_2021.webp",
        },
        {
          paragraphs:
            "Cloud infrastructure is the perfect platform for constructing this ideal data warehouse. Cloud infrastructure delivers near-unlimited resources, on demand, in minutes, and you pay only for what you use. That makes it possible to support virtually any scale of users and workloads without compromising performance or responsiveness. A data warehouse built for the cloud eliminates the obstacles and pains of deploying and managing infrastructure, enabling you to focus on using your data rather than on dealing with infrastructure.",
        },
        {
          paragraphs:
            "In addition, the cloud is the natural integration point for data. A rapidly increasing share of the data (as much as 80% by some estimates) that you want to analyze comes from applications and systems outside your datacenter—cloud applications like Salesforce, web applications, mobile devices, sensors, and more. Bringing that data together in the cloud is dramatically easier than building the internal infrastructure to hold all of that data —especially given that in many cases you need to experiment with and explore the data in order to determine if and where it has useful insight.",
        },
        {
          subheading: "Reinventing the Data Warehouse",
        },
        {
          subimages: "/assets/ReinventingDataWarehouse.webp",
        },
        {
          paragraphs:
            "The Snowflake Elastic Data Warehouse is the first data warehouse designed from the ground up for the cloud and for today’s needs. Delivered as a software service, it enables you and your analysts to focus on getting value out of your data while delivering the flexibility and performance to meet your ever-evolving needs. Data warehouse as a software service. Snowflake not only handles deploying and managing infrastructure, we also automate the most resource-intensive activities associated with data warehousing. You no longer have to spend time managing and installing hardware, configuring and updating software, managing data layout, maintaining indexes, or tuning the system.",
        },
        {
          paragraphs:
            "Standard SQL Snowflake is fully relational and designed for SQL processing from the start, unlike “big data” platforms that have struggled trying to bolt on incomplete SQL support. Use the skills and tools you already have, enabling any SQL analyst and any of the rich ecosystem of SQL-based tools to access data. “Load and go” for all your business data. Easily combine all of your business data in one place because Snowflake natively supports both structured and semistructured data in a SQL data warehouse. Snowflake understands and automatically optimizes how semistructured data is stored and queried, allowing you to correlate structured and semi-structured data in a single system with optimal performance.",
        },
        {
          paragraphs:
            "Multidimensional elasticity. Snowflake’s unique architecture enables it to flexibly support any scale of data, processing, and users. You can independently scale storage, compute, and users up and down without data movement or disruption to deliver exactly the scale you need, exactly when you need it. Snowflake’s technology makes it possible to run any number of workloads loading, querying, ad hoc analysis, and more—at the same time without performance degradation.",
        },
        {
          subheading: "New Standard in Data Warehousing",
        },
        {
          subimages: "/assets/DataWarehouse-1.webp",
        },
        {
          paragraphs:
            "The Snowflake Elastic Data Warehouse brings a new standard in innovation to data warehousing, innovation that is sorely needed. It offers a highly efficient, costeffective, and easily manageable data warehouse service designed for today’s business needs. Snowflake is a truly elastic data warehouse, one that can scale up and down on-demand to support any scale of data, processing, and users. That’s why Snowflake customers report up to ten times better performance at 90% lower cost than their existing solutions.",
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
        blogtitle={`Digisquares | Reinventing Data Warehouse`}
        blogheading={`Reinventing Data Warehouse`}
        blogdescription={`The harsh reality of data warehousing is that conventional solutions are simply too costly, inflexible, and complex for today’s not to mention tomorrow’s data.`}
        blogurl={`/blog/ReinventingDataWarehouse`}
        blogimg={`/assets/Data-Warehouse.webp`}
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
                  <Link href="/more/Blog">
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
              {/* <p>If you want to explore it further, you can sign-up for our free edition here. You can also watch the step-by-step demo here. </p> */}
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

export default ReinventingDataWarehouse;
