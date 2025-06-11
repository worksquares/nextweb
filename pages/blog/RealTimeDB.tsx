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

const RealTimeDB = () => {
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
      title: "Real time database technology and its applications",
      link: "#",
      img1700: "/assets/Manageddatabase_3.webp",
      img1024: "/assets/Manageddatabase_3.webp",
      img768: "/assets/Manageddatabase_3.webp",
      img320: "/assets/Manageddatabase_3.webp",

      paragraph: [
        {
          paragraphs:
            "Real-time data and big data can play important roles in business decision making to help companies gain a competitive advantage by meeting ever increasing customer needs. Several studies have been conducted to investigate the impact of real-time databases and big data, on the corporate world. Yet very few studies have compared the features and feasibility of the existing real-time database products. This chapter will provide an overview of the existing literature on real-time database and applications, their performance and some previous studies in related areas",
        },

        {
          subheading: "Evolution of real-time databases",
        },
        {
          subimages: "/assets/Database2.webp",
        },
        {
          paragraphs:
            "In most of the applications we have been using over several decades, relational database management systems are used to manage transactions. They were able to maintain data integrity, provide concurrent access, and facilitate data storage over this period. Arguably, these databases were able to perform well in almost all types of applications under different environments. However, the performance expectations from a database have been evolving over the time and the complexity of user requirements like amount of data these servers must handle, speed, storage, retrieval, management or sorting has been growing over time. In 2017, Microsoft SQL Server stated that the maximum size of database it could handle was 524,272 terabytes.",
        },
        {
          paragraphs:
            "As a solution for the exponential growth of data and managing data integrity parallel to that growth, non-relational real-time databases were introduced. According to Strauch (2011), in most of the literature, a real-time database is defined as a database, where its transactions are defined considering the time of the validity of a data unit, the volume of data to be stored, the storage mechanism and the availability of the data.",
        },
        {
          paragraphs:
            "According to Bansal and Chauhan (2017), a real-time database is advantageous over a relational database in several ways. A real-time database is more flexible than a traditional relational database, being schema-less. Also, many real-time database products allow sharding, which allows the users to add more machines and scale the cluster. These real-time databases support multiple storage engines. Therefore, unlike most traditional relational databases, the realtime databases have a variety of services which can facilitate the ultimate user requirements",
        },
        {
          subheading: "Early misconceptions about real-time databases",
        },
        {
          subimages: "/assets/Database3.webp",
        },
        {
          paragraphs:
            "Stankovic, Son, & Hansson (1999) provided some examples for real-time databases and common misconceptions about the real-time aspects of databases. Several characteristics like transaction timing constraints, time semantics, correctness, and time consistency can be used to describe real-time databases to a user. The importance of these characteristics can be applied using real world scenarios like completion deadlines, stock market prices or sensor data (Stankovic, Son, & Hansson, 1999). Stankovic, Son, & Hansson (1999) find some confusions about real-time databases, which are based upon speed, database technology, and some real-time database properties: temporality, predictability and specialization. ",
        },
        {
          paragraphs:
            "For several decades, application developers and business managers were not well exposed to the real-time requirements of the consumers. Therefore, the difficulty of fulfilling real-time requirements with the traditional database systems were well hidden. As the amount of data in a database increases, it becomes difficult for the hardware to manage data. The accuracy of the transactions involving obsolete data cannot be guaranteed (Stankovic, Son, & Hansson, 1999). It was argued that the database being in the main memory can provide faster data access, but transaction scheduling and handling external interrupts cannot be effectively done",
        },
        {
          paragraphs:
            "The users were unable to recognize that these challenges are difficult to overcome only with advancement of the existing database technology and hardware. Traditional database systems cannot be used for real-time applications simply by adding a few functional improvements (Stankovic, Son, & Hansson, 1999). Stankovic, Son, & Hansson (1999) mention that real-time databases are sometimes mistaken for temporal databases. Temporal databases are built for providing application-independent database management system (DBMS) support for time-varying information. They can have some fixed timescales (seconds or milliseconds) and storing the changes in the formatted data, which looks like a time series of data. A relational DBMS stores changes on data over time, using a timestamp, which is a discretely stored value for each measurement. Real-time databases are commonly optimized to act as time-constrained databases. They can be much more efficient than temporal or relational databases, in real-time computing applications that require timely access to data.",
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
        blogtitle={`Digisquares | Real Time DB`}
        blogheading={`Real time database technology and its applications`}
        blogdescription={`Real-time data and big data can play important roles in business decision making to help companies gain a competitive advantage by meeting ever increasing customer needs.`}
        blogurl={`/blog/RealTimeDB`}
        blogimg={`/assets/Manageddatabase_3.webp`}
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

export default RealTimeDB;
