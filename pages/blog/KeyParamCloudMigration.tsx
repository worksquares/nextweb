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

const KeyParamCloudMigration = () => {
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
        ,
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
      title: "Key Parameters to be considered for Cloud Migration",
      link: "#",
      img1700: "/assets/CloudManagement.webp",
      img1024: "/assets/CloudManagement.webp",
      img768: "/assets/CloudManagement.webp",
      img320: "/assets/CloudManagement.webp",

      paragraph: [
        {
          subheading: "Choosing the right cloud provider",
        },
        {
          paragraphs:
            "Choosing the right cloud provider is the first step for any organization planning to adopt public cloud services. This is the most important and thus, the most confusing process. The provider chosen to work with will handle very confidential transactions and will have access and be involved in enhancing the core of the organizations IT strategy. Thus, it is imperative that the partner is chosen with at most cautiousness and evaluation. There are many parameters’ s to be considered and comparisons of services (offered by cloud providers) to be made before a customer can decide which cloud provider best suits their business and ethical requirement.",
        },
        {
          subheading: "Cost of cloud migration and tools",
        },
        {
          subimages: "/assets/CloudMigrationTools.webp",
        },
        {
          paragraphs:
            "Cloud migration is a big project that is time-consuming and involves various phases for any organization. The cost is one of the major factors that impact the decision to take the leap. To estimate the cost of migration and tools, most of the major cloud providers provide cost estimation calculators that help clients to include, estimate and calculate the cost for all tools and services required. This would also include the services of cloud SMEs and the team effort estimations.",
        },
        {
          subheading: "Cloud migration strategy",
        },
        {
          subimages: "/assets/ReimaginingDataWarehouse.webp",
        },
        {
          paragraphs:
            "The cloud migration strategy has one of the most important roles in any Cloud transformation journey and the whole migration project depends on the migration strategy that is adopted. Considering hybrid and multi-cloud helps to avoid vendor lock-in and a Single point of failure is considered the right choice. According to recent Gartner research, large enterprise customers are adopting at least two cloud providers when running mission critical workloads & applications in the public cloud and will remain predominantly Hybrid in the coming years. There are other benefits as well, e.g., High availability & DR Strategy, Cost differences, Services difference, Data security, etc.",
        },
        {
          subheading: "Integration with the existing application",
        },
        {
          subimages:
            "/assets/Top_Cloud_Computing_Companies_to_Work_for_in_2021.webp",
        },
        {
          paragraphs:
            "Any cloud migration within the existing application is extremely critical as they need to integrate with the home application as seamlessly as possible. If the applications are already cloud compliant, Integration with on-premise applications will not be as challenging. A few challenges such as legacy applications which are not compatible with public cloud platform or service model and require re-architecting or re-coding, might require more effort. In such scenarios, application migration strategy plays a significant role.",
        },
        {
          subheading: "Security & IT personnel training on cloud management",
        },
        {
          subimages: "/assets/CloudMigrationSecurity.webp",
        },
        {
          paragraphs:
            "Since there is a new environment involved in any migration process the most concerning to every organization is the security of data and processes and thus security and compliance must be considered as the most important by implementing appropriate security framework and access control. The public cloud is as secure as an on-premise environment; it goes through many security audits and vulnerability management steps.",
        },
        {
          paragraphs:
            "Training the current workforce to adapt and work on the unfamiliar environment is inevitable in any migration. When any modern technology gets implemented or launched in a company, the existing IT personnel are not familiar or comfortable with the latest technology. There must be a plan to train the IT personnel on cloud management areas such as Amazon web services, MS Azure, Google Cloud platform, Oracle Cloud, IBM Cloud, VMware, etc., so the migration is as seamless as possible.",
        },

        {
          subheading: "People and process",
        },
        {
          subimages: "/assets/DataWarehouse-1.webp",
        },
        {
          paragraphs:
            "During the public cloud migration, the major challenge isn’t the technology. It’s the existing staff and processes that must change and adapt. Existing IT personnel are not familiar with public cloud technologies and service model. The questions that everyone is anxious about in such a scenario are would it be safe to move the company workloads to a public cloud, is the public cloud more secure than an onpremise Datacenter, can cloud provider maintain maximum uptime, how will a legacy application be integrated with a public cloud and more. IT Management team that has been managing Systems and application for decades need to understand cloud better to be able to leverage and benefit from it. There is a psychological barrier among the leadership and this is a situation that’s difficult to deal. ",
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
        blogtitle={`Digisquares | Key Parameters to be considered for Cloud Migration`}
        blogheading={`Key Parameters to be considered for Cloud Migration`}
        blogdescription={`Choosing the right cloud provider is the first step for any organization planning to adopt public cloud services.`}
        blogurl={`/blog/KeyParamCloudMigration`}
        blogimg={`/assets/CloudMigration.webp`}
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

export default KeyParamCloudMigration;
