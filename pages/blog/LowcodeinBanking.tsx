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

const LowcodeinBanking = () => {
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
      title: "Low code digital automation platform for Connected Banking",
      img1700: "/assets/LowcodeBanking1.webp",
      img1024: "/assets/LowcodeBanking1.webp",
      img768: "/assets/LowcodeBanking1.webp",
      img320: "/assets/LowcodeBanking1.webp",

      paragraph: [
        {
          subheading: "Digital Automation Platform for Connected Banking",
        },
        {
          paragraphs:
            "Low-code platforms are generally focused on the developer experience, streamlining application development by automating tasks from initial design to iteration. The focus is to eliminate pain points and maximize reusability, allowing skilled dev resources to work effectively.",
        },
        {
          paragraphs:
            "low code digital automation platform integrates all the capabilities needed to transform a financial institution into a connected enterprise, through our core products in intelligent process automation (BPM), contextual content services (ECM), and omnichannel customer engagement (CCM). Our purpose-built banking solutions, built on our platform and deployed on cloud, on-premises, or in a hybrid environment, can help streamline end-to-end processes and future proof an organization.",
        },
        {
          subheading: "Connected Banking Help Financial Institutions",
        },
        {
          subimages: "/assets/LowcodeBanking2.webp",
        },
        {
          paragraphs:
            "Organizations can maintain the flexibility, adaptability, and scalability to stay future-ready by implementing Newgen's end-to-end lending solutions--including loan origination, management and collections built on our low code digital automation platform. They can ensure compliance with regulatory requirements and streamline lending processes by bridging operational silos and unifying front and back offices.",
        },
        {
          paragraphs:
            "We perform discovery specific to you and your business to better understand your unique needs. We then create and administer a custom RFI to selected vendors to assist you in making rapid and accurate vendor choices we spend time evaluating your business processes and requirements. Based on our knowledge of the market, we identify potential process or technology constraints and provide clear insights that will help you implement industry best practices.",
        },
        {
          paragraphs:
            "low code digital automation platform to automate and centralize standard trade finance processes, including export and import-related documentation, negotiation, quotation, and remittances. Ensure adherence to SLAs and regulatory requirements by implementing checklists, efficient tracking of credit documents and internal controls. Furthermore, increase the scale of operations by extending trade finance services to low-volume branches.",
        },

        {
          subheading: "Compliance and Reporting",
        },
        {
          subimages: "/assets/LowcodeBanking3.webp",
        },

        {
          paragraphs:
            "Empower employees with the tools to digitally capture images, process cheques in a paperless environment, increase efficiency and accuracy, and deliver a seamless customer experience across all channels and devices. Streamline and automate payment processes by implementing Newgen's low code digital automation platform, supporting a variety of new age technologies.",
        },
        {
          paragraphs:
            "Ensure compliance with various regulatory and internal requirements by leveraging industry-specific solutions, built on our low code digital automation platform. Automate compliance and reporting processes to increase visibility, guarantee data security, bridge operational silos, and stay future ready.",
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
        blogtitle={`Digisquares | Low code in Banking`}
        blogheading={`Low code digital automation platform for Connected Banking`}
        blogdescription={`Low-code platforms are generally focused on the developer experience, streamlining application development by automating tasks from initial design to iteration.`}
        blogurl={`/blog/LowcodeinBanking`}
        blogimg={`/assets/LowcodeBanking1.webp`}
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

export default LowcodeinBanking;
