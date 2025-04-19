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
import Head from "next/head";
import { BlogLists } from "../../comp/BlogData";
import Footer from "../../comp/Footer";
import Headseo from "../headseo";
import Screen from "../../comp/Screen";
import BaseLayout from "../../comp/BaseLayout";

const AIinDataCloud = () => {
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
      title: "Many Enterprises Fast-Tracked Their Cloud Migrations in 2020",
      img1700: "/assets/AI in DataCloud Main.webp",
      img1024: "/assets/AI in DataCloud Main.webp",
      img768: "/assets/AI in DataCloud Main.webp",
      img320: "/assets/AI in DataCloud Main.webp",

      paragraph: [
        {
          subheading: "Enterprise cloud technology",
        },
        {
          paragraphs:
            "Even before the events of 2020, enterprise cloud technology adoption was forecast to rise this year. But new research we have conducted shows that many organizations fast-tracked their cloud migration plans in response to COVID-19. Of the 100 US-based data and analytics leaders we surveyed, 98% say the pandemic has accelerated their move to the cloud. In fact, 64% say they’re at least two years ahead of where they would otherwise be and 26% say they are now at least four years ahead of schedule.",
        },
        {
          paragraphs:
            "A full 99% of our survey respondents say their enterprises now plan to move data into the cloud, and 88% of them have already done so. “The pandemic has significantly accelerated the need for cloudenabled business models,” says Ashish Verma, Managing Director and Data Modernization and Analytics Leader at Deloitte. “The cloud services market is now forecast to be worth $1 trillion USD by 2024, and it’s easy to see why.”",
        },
        {
          paragraphs:
            "“The cloud has proved essential for enabling remote working and helping enterprises whose finances have been stretched this year to generate cost savings,” he continues. “It’s also the foundation on which businesses are building data-driven capabilities to meet evolving customer expectations.” Dr Vlad Bacvanski, Principal Architect, Strategic Architecture at PayPal, agrees: “Companies realize that the offerings of cloud providers are getting not only on par but, in many ways, they are getting ahead of what they have or could deploy onpremise in their own data centers.”",
        },
        {
          subheading: "Enterprises Benefit from Cloud Migration",
        },
        {
          subimages: "/assets/AI in DataCloud 1.webp",
        },
        {
          paragraphs:
            "The perceived benefits of cloud data migration can vary depending on an organization’s size and the resources it has historically allocated to maintaining on-premises infrastructure. However, our research highlights six benefits that are widely acknowledged in the data and analytics community. The ability to upgrade data or IT infrastructure more easily is the most frequently cited advantage of cloud data migration. Almost half of our survey respondents say this is a factor in their decision-making.",
        },
        {
          paragraphs:
            "Cloud computing’s potential to yield cost saving and facilitate remote working tied as the second most frequently cited benefits, receiving 46% of the vote each. Meanwhile, 41% of respondents see the cloud’s ability to facilitate analytics and AI innovation as one of its key benefits. “One of the promises of the cloud is elasticity,” says Dr Bacvanski. “You can ramp up your infrastructure to handle the additional workloads that the organization may have. Then, after the time of a heavy traffic is over, you can scale down and significantly reduce your operational costs.”",
        },
        {
          paragraphs:
            "“The speed of innovation is another significant benefit of moving to the cloud,” he adds. “With the various service offerings in the cloud, there are a variety of technologies that are available to companies to immediately use.” In sectors such as healthcare, the cloud’s reliability is also a factor. Cloud migration can yield additional cost savings by removing the need to build and maintain highly redundant infrastructure in-house.",
        },

        {
          paragraphs:
            "“Cost was the primary driver for moving our Electronic Health Records to the cloud,” adds Dr Besa Bauta, CDO at human services agency MercyFirst. “We don’t have the capacity or individuals to maintain on-premise infrastructure.” The ability to easily scale infrastructure and the security improvements some enterprises can realize by moving to the cloud are the fifth and sixth most commonly cited benefits of the technology. Respectively, 31% and 21% of respondents cite these as key benefits of cloud migration. While larger enterprises may typically trust their in-house cybersecurity teams over a thirdparty to keep their data safe, smaller enterprises may lack the resources to build robust security teams in-house. For these organizations, outsourcing this work to a cloud provider can be a natural choice.",
        },

        {
          subheading: "Using Cloud Migration for Data Modernization",
        },
        {
          subimages: "/assets/AI in DataCloud 2.webp",
        },
        {
          paragraphs:
            "A key challenge for many cloud transformation leaders is how to deal with the patchwork of legacy applications they often inherit. So, when an organization decides to move data to the cloud, they have a choice. They can either attempt to ‘lift and shift’ their on-premises data architecture and replicate it in the cloud. Or, they can use the migration as an opportunity to transition to a more modernized data architecture.",
        },
        {
          paragraphs:
            "“I imagine most people usually do a ‘lift and shift’, as opposed to trying to re-engineer or rearchitect the system,” says Cetin Karakus, Global Head of Quantitative and Analytical Solutions at BP. “If you do the second one, it will become an engineering effort.” Smaller organizations or can replicate their on-premises architectures in the cloud. However, enterprises used to storing data in large, on-premises relational databases might find it hard to replicate their existing data infrastructure in the cloud. Dr Bacvanski explains: “You need to look for a more clustered solution. But the consequence of that is, the architecture of your data layer needs to change. This is a common pain point that organizations face, also when they’re moving from their large monolithic applications to microservices.”",
        },
        {
          paragraphs:
            "This reengineering challenge is one factor that may act as a drag on the trend of migrating data, apps and systems to the cloud. Despite the progress enterprises have made in recent months, just 37% of enterprises have more than half of their data in the cloud. However, most cloud-focused leaders do have a plan for creating modern data architectures in the cloud. Our research shows that 59% have at least ‘largely dealt with’ the task of creating a strategy for cloud migration. In the months ahead, we expect to see more enterprises building on their cloud migration momentum to execute these strategies and realize the benefits moving more data to the cloud can bring.",
        },
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
        blogtitle={`Digisquares | AI in Data-Cloud`}
        blogheading={`Many Enterprises Fast-Tracked Their Cloud Migrations in 2020`}
        blogdescription={`Even before the events of 2020, enterprise cloud technology adoption was forecast to rise this year.`}
        blogurl={`/blog/AIinDataCloud`}
        blogimg={`/assets/AI in DataCloud Main.webp`}
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
              <div className={Styles.AnotherLink}>
                Also Read:
                <Link href="/nextweb/CloudComputing">
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

export default AIinDataCloud;
