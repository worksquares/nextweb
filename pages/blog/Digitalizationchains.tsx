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

const Digitalizationchains = () => {
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
      title: "The digitalization of production chains",
      // subtitle: "August 12, 2021",
      link: "#",
      img1700: "/assets/Digitalization-Main.webp",
      img1024: "/assets/Digitalization-Main.webp",
      img768: "/assets/Digitalization-Main.webp",
      img320: "/assets/Digitalization-Main.webp",

      paragraph: [
        {
          paragraphs:
            "In the era of digital transformation, public and private activities are seeking to take advantage of the efficiency revolution brought about by the use and management of large volumes of data, thus benefiting from new economies of scope and scale. The new Industry 4.0 technologies create the potential for changes in emerging economies’ production processes to yield gains in productivity and competitiveness that are sustainable over time.",
        },
        {
          subheading: "Advanced analytics and artificial intelligence:",
        },
        {
          paragraphs:
            "Algorithms and high-performance computers can be used to identify patterns and perform predictive analytics to facilitate automated learning and decision-making. This typically involves combining traditional analytics methodologies (such as regression, search algorithms and linear optimization) with machine learning techniques, which employ methods such as clustering algorithms, dimensionality reduction, deep learning networks and neural networks. By 2023, advanced analytics is expected to represent a market worth more than US$ 270 billion globally. ",
        },
        {
          subheading: "The Internet of things:",
        },
        {
          subimages: "/assets/IOT_1_ (1).webp",
        },
        {
          paragraphs:
            "Sensors and actuators enable the use of smart interconnected devices or products that can be remotely accessed or tracked. The Internet of things (IoT) allows “smart networks” to be developed to automate or improve the effectiveness of production and distribution processes, particularly when it interacts with technologies such as advanced analytics. The main applications of the Internet of things are in smart cities, smart industry, telemedicine and smart homes. In 2018, Amazon launched Amazon Go, a fully automated supermarket concept where consumers can shop without having to interact with anyone or pay at the store. Technologies such as computer vision, deep learning and sensor networks make it possible to identify consumers and the products they carry and to charge them automatically and fully digitally at the end of their visit.",
        },
        {
          subheading: "Cloud services and digital platforms:",
        },
        {
          subimages: "/assets/Cloud security 2.webp",
        },
        {
          paragraphs:
            "Digital or virtual platforms are spaces on the Internet that facilitate the execution of applications or programmes in one place to meet different needs. Most digital interactions take place remotely in the cloud, reducing the need for storage and processing on local computers and devices. Cloud computing enables computing services to be delivered over a network, which reduces usage costs and facilitates the transmission of information. By 2023, these services are expected to represent a market of more than US$ 350 billion worldwide.",
        },
        {
          subheading: "Blockchain:",
        },
        {
          subimages: "/assets/Blockchain.webp",
        },
        {
          paragraphs:
            "A blockchain is a digital ledger that works with a single decentralized, consensual register to validate information and transactions. The ledger is distributed across multiple nodes in a network and each block stores a number of valid records or transactions, along with information about that block and how it is linked to the previous and next block via a unique digital fingerprint. As new records are created, they are first verified and validated by the nodes in the network and then added to a new block that is linked to the chain. Furthermore, if this information is stored in encrypted form, its confidentiality is assured because only those with the encryption key can access it. This would make it possible, for example, to unify health records, such as individual patients’ medical histories, in a secure and convenient way. The pharmaceutical industry could use this technology to check medicines and prevent counterfeiting. Cryptocurrencies, meanwhile, can be thought of as a ledger where every transaction is recorded.",
        },
        {
          subheading: "Autonomous and semi-autonomous navigation:",
        },
        {
          subimages: "/assets/SecurityThreads3.webp",
        },
        {
          paragraphs:
            "This encompasses vehicles operated with reduced or no human intervention. It includes cars, trains and trucks as well as drones piloted by an operator. Drones can be used in different types of projects, such as underwater research, shipwreck searches and salvage operations. They are particularly employed in offshore installations to supplement hull inspections of ships. Unmanned aircraft have been used mainly to deliver objects to remote locations and in disaster areas, as they have the advantage of being able to reach and deliver to out-of-the-way places. Amazon is preparing to deliver orders within 30 minutes of purchase up to 10 miles from the company’s warehouse using a fleet of drones.",
        },
        {
          subheading: "Virtual reality and augmented reality:",
        },
        {
          subimages: "/assets/VR-Img.webp",
        },
        {
          paragraphs:
            "Immersive technologies such as virtual reality and augmented reality are being used to reinvent the way content is created and experienced. For example, at Stanford University’s Neurosurgical Simulation and Virtual Reality Center, virtual reality is being used for detailed planning of complex brain surgery (e.g., to remove tumours) based on simulations created using information obtained from CT scans. Immersive technologies have multiple impacts for businesses, such as reduced production costs thanks to the use of virtual prototypes and lower barriers to entry for new content creators.",
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
        blogtitle={`Digisquares | The digitalization of production chains`}
        blogheading={`The digitalization of production chains`}
        blogdescription={`In the era of digital transformation, public and private activities are seeking to take advantage of the efficiency revolution.`}
        blogurl={`/blog/Digitalizationchains`}
        blogimg={`/assets/Digitalization-Main.webp`}
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

export default Digitalizationchains;
