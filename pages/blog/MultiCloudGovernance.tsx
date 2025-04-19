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

const MultiCloudGovernance = () => {
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
      title: "AI-powered Multi-Cloud Governance at Scale",
      subtitle: "August 12, 2021",
      link: "#",
      img1700: "/assets/MultiManagement.webp",
      img1024: "/assets/MultiManagement.webp",
      img768: "/assets/MultiManagement.webp",
      img320: "/assets/MultiManagement.webp",
      paragraph: [
        {
          paragraphs:
            "When looking to innovate faster and make the most of the resources, large organizations use CoreStack, a Softwareas-a-Service (SaaS) platform, that provides the utmost simplicity and flexibility in multi-cloud governance. Unlike other solutions, CoreStack allows full visibility of cloud infrastructure across the major cloud providers (AWS, Azure, Google, Oracle), providing the best opportunity to proactively manage cloud costs, security risks, compliance needs, and operationa complexities.",
        },
        {
          paragraphs:
            "With a customer base of over 300 enterprise clients and a network of strategic partners, CoreStack serves mid-tolarge organizations across many industries such as healthcare, financial, media, gaming, and retail. CoreStack helps its customers cut costs, make operations more efficient, and ensure 100% compliance with standards such as ISO, FedRAMP, NIST, HIPAA, PCI-DSS, Azure CIS, AWS CIS, and AWS Well-Architected Framework.",
        },
        {
          paragraphs:
            "This is especially vital in regions where access to supplies and technology have a detrimental impact in educational outcomes. Where schools are very under equipped-where they don't have science labs and equipment, which can be very costly-emerging technologies and [affordable] connectivity can be a viable,quick and effective alternative to brick-and-mortar solutions, She said.",
        },
        { subheading: "CLOUD VISIBILITY AND GOVERNANCE" },
        {
          subimages: "/assets/Multi-Cloud-2.webp",
        },
        {
          paragraphs:
            "CoreStack was founded in 2016 with the mission to helping companies unleash the power of the cloud through continuous and autonomous cloud governance at scale. As a SaaS platform provider,CoreStack offers a broad service from applications of shared, browser-based products for clients to manage their services to white labeling of complete solutions, allowing customers to leverage their partner ecosystems.",
        },
        {
          subheading: "PARTNERSHIPS STARTING FROM CLOUD VENDORS",
        },
        {
          subimages: "/assets/Multi-Cloud-3.webp",
        },
        {
          paragraphs:
            "“We have tiers of partnerships starting from cloud vendors, including Microsoft, AWS, Google, Oracle, to MSPs/SIs/ Resellers to Global Systems Integrators,” CoreStack’s CEO Ezhilarasan Natarajan explained. “CoreStack is the only platform that provides a single pane of glass for cloud operations, financial operations and security operations.”",
        },
        {
          paragraphs:
            "The company has identified the importance of partnerships in developing the customer experience, and its strategic partnership with Virtusa has allowed CoreStack to fill a gap in the market. Focusing on digital transformation and cloud adoption for its customers, Virtusa was looking for a solution that could help them be more efficient at driving customer satisfaction, lowering operating costs, and providing best-in-class service. Virtusa became one of CoreStack’s premier partners and leverages the CoreStack platform to flawlessly execute cost management and optimization (FinOps), security and compliance (SecOps), and automation and governance (CloudOps).",
        },
        {
          paragraphs:
            "We have built, and we continue to build, specific pointed solutions, which we build ourselves and in partnership with some of the specialist niche companies in the industry. This is so that companies can accelerate the movement to cloud. Building patterns, tools and assets can integrate with the technology so that it meshes seamlessly with how technology is adopted and moved to cloud.",
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
        blogtitle={`Digisquares | Multi Cloud Governance`}
        blogheading={`AI-powered Multi-Cloud Governance at Scale`}
        blogdescription={`When looking to innovate faster and make the most of the resources, large organizations use CoreStack, a Softwareas-a-Service (SaaS) platform, that provides the utmost simplicity and flexibility in multi-cloud governanceWhen looking to innovate faster and make the most of the resources, large organizations use CoreStack, a Softwareas-a-Service (SaaS) platform, that provides the utmost simplicity and flexibility in multi-cloud governance`}
        blogurl={`/blog/MultiCloudGovernance`}
        blogimg={`/assets/MultiManagement.webp`}
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
                <Link legacyBehavior href="/SaasforGovt">
                  &nbsp; The relationship between small business Software as a
                  Service (SaaS) providers and Government.
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

export default MultiCloudGovernance;
