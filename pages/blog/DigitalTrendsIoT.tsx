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

const DigitalTrendsIoT = () => {
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
      title: "Key digital trends shaping the future",
      // subtitle: "August 12, 2021",
      link: "#",
      img1700: "/assets/IoT-Main-Img.webp",
      img1024: "/assets/IoT-Main-Img.webp",
      img768: "/assets/IoT-Main-Img.webp",
      img320: "/assets/IoT-Main-Img.webp",

      paragraph: [
        {
          subheading: "Digital Twin",
        },
        {
          paragraphs:
            "Digital Twin is a dynamic virtual representation of a physical object or a system across its lifecycle, using real-time data to enable understanding, learning and reasoning. IoT sensors that gather information and data like real-time status, health and performance, live position, etc. are integrated with a physical object. Digital Twin ecosystem comprises of different technologies like IoT, AI, Big Data and cloud platform to enable this twin ecosystem. The diagram below depicts how the complete lifecycle of processes, products, components or services can be mapped from physical to virtual model by leveraging these technologies.",
        },
        {
          subheading: "Fog and Edge Computing",
        },
        {
          subimages: "/assets/IoT-1.webp",
        },
        {
          paragraphs:
            "Transition of IoT data processing to the network edge was expected to happen in the early IoT development lifecycle stage. However, decreasing connectivity costs and rising communication networks throughout led to a slow pace of this trend, which resulted in a shift towards centralized cloud processing. Now falling prices and the increasing processing power of edge devices have kickstarted the transition towards network edge. The change to edge computing may have a significant impact on an organization’s IT and Operational Technology (OT) systems, and have laid the foundation of new-age digital products..",
        },
        {
          paragraphs:
            "Fog Computing is a system-level horizontal architecture that distributes resources and services of computing, storage, control and networking anywhere along the continuum from cloud to things. By extending the cloud to be closer to the things that produce and act on IoT data, fog enables latency sensitive computing to be performed in proximity to the sensors, resulting in a more efficient network bandwidth and more functional and efficient IoT solutions. While Fog and Edge Computing terms are used interchangeably, the key differences lie where the computing takes place. Edge Computing pushes the intelligence, processing power and communication capabilities of an edge gateway or appliance directly into devices like programmable automation controllers (PACs) while Fog Computing pushes intelligence down to the local area network level of network architecture, processing the data in a fog node or an IoT gateway. Many IoT software companies have launched products that push the limits by embedding complex event processing, Machine Leaning and Artificial Intelligence in the Edge/ Fog Computing nodes catering to this expanding market segment.",
        },
        {
          paragraphs:
            "International Data Corporation (IDC) predicts that by 2025, nearly 45% of the world’s data will move closer to the network edge. Fog Computing architecture is a key to enable this large amount of data to be processed, stored and transported and also enables emerging technologies like IoT, 5G and AI. The overall market opportunity for Fog Computing is pegged to rise to US$18.2b by 2022, up from US$1.03b in 2018 and US$3.7b in 2019.",
        },

        {
          subheading: "5G and IoT",
        },
        {
          subimages: "/assets/IoT-2.webp",
        },
        {
          paragraphs:
            "The dawn of the 5G era is likely to reshape current wireless communication methods used for IoTbased applications. According to Aleksander Poniewierski, EY Global IoT Leader, “IoT cannot thrive without effective and affordable wireless connectivity, interoperability and common standards. We believe 5G has the potential to make a ground-breaking impact on the way in which future IoT ecosystems are designed, especially in the areas of scalability, latency, reliability, security and the level of individual control on connectivity parameters.”",
        },
        {
          subheading: "Virtual, augmented and mixed reality applications",
        },
        {
          subimages: "/assets/IoT-3.webp",
        },
        {
          paragraphs:
            "What information do you have on me do you have a process so that you can easily give that to them so with the new law you have to be able to supply people with what information you have on them if they ask you have to supply this information within one month of the mask in and you have to do it free of charge so make sure you've got a process in place so that you can quickly get all the information you have on them and send that over to them.",
        },
        {
          subheading: "Have a process for deleting data",
        },
        {
          subimages: "/assets/IoT-4.webp",
        },
        {
          paragraphs:
            "Virtual reality (VR) provides a computergenerated three-dimensional (3D) environment that surrounds a user and responds to that user’s actions in a natural way, usually through immersive head-mounted displays and head tracking. Augmented reality (AR), on the other hand, is a technology that bridges the physical and digital worlds by overlaying information, such as audio, text, images and interactive graphics, onto the physical environment. AR offers context based digital information right where you need it. Mixed reality (MR) is an overarching technology solution which merges the real and virtual worlds. It goes beyond to extend their capabilities that can best mix the real and virtual worlds. VR, AR and MR technologies are projected to grow at a fast pace reaching a CAGR of 71.6% reaching market size of US$147.4 billion by 2022. ",
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
        blogtitle={`Digisquares | Digital Trends IoT`}
        blogheading={`Key digital trends shaping the future`}
        blogdescription={`Digital Twin is a dynamic virtual representation of a physical object or a system across its lifecycle`}
        blogurl={`/blog/DigitalTrendsIoT`}
        blogimg={`/assets/IoT-Main-Img.webp`}
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
              <div className={Styles.AnotherLink}>
                Also Read:
                <Link

                  href="/assets/Books/Digital Transformation of Procurement.pdf" target="_blank"
                >

                  &nbsp;Learn more about the digital complexity paradigm and
                  to experience a smooth digital transformation.

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

export default DigitalTrendsIoT;
