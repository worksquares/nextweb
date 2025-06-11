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

const Buildingblocks = () => {
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
      title: "Six building blocks for successfully implementing AI",
      // subtitle: "August 12, 2021",
      link: "#",
      img1700: "/assets/AI-carriere.webp",
      img1024: "/assets/AI-carriere.webp",
      img768: "/assets/AI-carriere.webp",
      img320: "/assets/AI-carriere.webp",

      paragraph: [
        {
          paragraphs:
            "Manufacturing companies such as ZF show that to take a lead in using AI solutions at scale, specific technological investments and organisational decisions are required. In this section, we look at the necessary business, technical and organisational changes that will form the basis of successful AI implementation. These fall into six categories:",
        },

        {
          subheading: "1. Business applications",
        },
        {
          subimages:
            "/assets/Top-Applications-for-Using-Artificial-Intelligence-in-Business.webp",
        },

        {
          paragraphs:
            "Business applications must be the starting point for an AI strategy. Manufacturers need to ask themselves where they want to use AI in the near, mid and long term, and gather all the use cases across their operations in a structured way, grouping them together by function and prioritising projects based on expected business outcomes and effort of implementation. This helps to identify potential pilot and ‘lighthouse’ use cases to lead the way in the company’s AI plans. Such early and high-profile use cases are a key success factor, because they help to drive adoption of AI across the business. Once the overall vision and specific use cases have been established, the technology and organisational requirements will follow on.",
        },
        {
          subheading: "2. Data",
        },

        {
          paragraphs:
            "Data is the foundation of any AI endeavor. As a result, reliable and accurate data acquisition, management and governance are key to effectively applying AI algorithms to the company’s processes. Sensor data from connected factory equipment is a key data source in the manufacturing sector, so the production line and factories play a critical role in the data-acquisition process. Many enterprises are building ‘data lakes’ to collect raw data from sensors, Manufacturing Execution Systems (MES), maintenance processes and quality checks in one central place. They are also enriching it with external data to get a 360° view of both their production process and the product.",
        },
        {
          subimages:
            "/assets/predective-analytics-and-machine-learning-47billion.webp",
        },
        {
          paragraphs:
            "These large data-management systems require proper data cataloging and data lineage to keep track of all available information and flows, and to make the data easily accessible to a large number of users. Manufacturers should start by mapping their main data objects, such as production facilities, machinery and products, and the associated data sources to understand the data volumes, velocities and varieties they will be dealing with. Furthermore, they need to define data quality metrics and systematically monitor these to create awareness of their importance, which is often a major challenge for implementing AI. ",
        },
        {
          subheading: "3. Technology",
        },
        {
          subimages: "/assets/8bEfxy8skS6fUVZnfaLWxj-1200-80.webp",
        },
        {
          paragraphs:
            "Technology for Big Data, Analytics and AI is still rapidly evolving, often causing uncertainty for companies around what their future IT architecture should look like, and which tools and vendors they should choose. Manufacturers should start using a ‘functional reference architecture’, which maps which tools the company needs to gather, store, manage and process data, as well as the necessary analytics and visualisation tools. Based on this functional architecture, they can define their requirements for an evaluation of the most suitable technologies available in the market and also set out the technical and infrastructure set-up they want to use. ",
        },
        {
          paragraphs:
            "Some open-source technologies have become the de-facto standards for Big Data management (these include HDFS11 and Spark) and AI (for example, TensorFlow in Python), and have been integrated into most commercial Big Data and AI platform services (for example on Microsoft’s Azure cloud-computing service or Amazon Web Services). These technologies allow for scalable distributed data processing and the training of sophisticated machine-learning models. These machine-learning models enable machines to detect complex patterns and anomalies.",
        },
        {
          paragraphs:
            "Manufacturers should give special focus to ‘time series’ data processing and analytics capabilities to best handle data streams from sensors in a production environment.",
        },
        {
          subheading: "4. Talent and organisation",
        },
        { subimages: "/assets/attract-talent-organization.webp" },
        {
          paragraphs:
            "More data and new technologies also require people with specific analytical skills in the manufacturing field. Companies have started to hire data scientists over the past few years, but are still struggling to find the right organisational set-up to make effective use of these new skills alongside those of traditional engineers.",
        },
        {
          paragraphs:
            "We typically see manufacturers on a transformational journey, starting with fragmented and uncoordinated use of data and AI experts, moving on to a more centralised organisational model (for example, an AI center of excellence or lab, as described at ZF), which drives the AI maturity level of the organisation. In the final stage, AI capabilities may become decentralised again, as a fully integrated part of the organisation. ",
        },
        {
          paragraphs:
            "A central AI team should be comprised not only of data scientists, but should also include data engineers, data stewards, solution architects and analytics translators. These central resources then collaborate with teams from the various manufacturing functions to jointly develop and put into practice AI solutions for specific use cases. Often, the central team also drives the development of a central AI platform, based on the technologies described above, and this means hiring platform architects and DevOps staff.",
        },
        {
          subheading: "5. Processes",
        },
        {
          subimages:
            "/assets/The-Symbiotic-Relationship-Between-BI-and-Business-Process-Management.webp",
        },
        {
          paragraphs:
            "To operate efficiently, enterprises need to define a minimum level of AI governance and processes. An example of such a process is AI use-case pipeline management, to identify and evaluate new use cases in the business on an ongoing basis, plan their agile development and ensure a smooth transition into operations. Another example is a defined development process for AI solutions. These typically build on the cross-industry standard process for data mining (CRISP-DM) and define the phases of data analysis and AI solution development.",
        },
        {
          paragraphs:
            "Data and analytical model governance is a key capability for effectively operating AI solutions in manufacturing. Enterprises need properly to define data ownership, access and security along with AI model performance criteria. Furthermore, they need to assure AI model fairness, explainability and robustness, as well as consider ethics and regulation, as outlined in PwC’s Responsible AI Toolkit12.",
        },
        {
          subheading: "6. Culture",
        },
        {
          paragraphs:
            "Finally, manufacturers need to enable a data and AI-driven culture. To meet this objective, they must build trust in data and algorithms by not only educating the workforce about AI and its capabilities and value, but also its risks and limitations. At the same time, they need to manage the concerns of their workforce and create a compelling vision of effective human-machine collaboration to counter fears of AI replacing thousands of jobs in manufacturing.",
        },
        { subimages: "/assets/Culture-circle.webp" },
        {
          paragraphs:
            "Senior executives need to drive the change by showing commitment and ‘connecting’ with AI methods and technologies. They can also foster innovation by supporting a fail-fast experimentation approach for AI use cases. And while failure is condoned, success should be duly celebrated and communicated to drive adoption of AI across the organisation.",
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
        blogtitle={`Digisquares | Building Blocks`}
        blogheading={`Six building blocks for successfully implementing AI`}
        blogdescription={`We look at the necessary business, technical and organisational changes that will form the basis of successful AI implementation.`}
        blogurl={`/blog/Buildingblocks`}
        blogimg={`/assets/AI-carriere.webp`}
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
        <div className={Styles.BlogPostHead}></div>
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

export default Buildingblocks;
