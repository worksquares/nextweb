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

const SaasforGovt = () => {
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
      title:
        "Security-as-a-Service Transformation for State and Local Government",
      link: "#",
      img1700: "/assets/SaasGovtMain.webp",
      img1024: "/assets/SaasGovtMain.webp",
      img768: "/assets/SaasGovtMain.webp",
      img320: "/assets/SaasGovtMain.webp",

      paragraph: [
        {
          paragraphs:
            "Traditionally, each State agency built out its own network and designed its own security architecture. Each one of these IT and security silos in a State agency, lead to continued duplication of effort and ever increasing costs for the overall design. As a result of these inefficiencies, State and Local government agencies established consolidated Enterprise Architecture Frameworks with the goal of a unified way in which agencies would modernize their information technology networks. An enterprise framework helped ensure that agencies and mission partners could share information securely while reducing wasted manpower and continued infrastructure expenditures.",
        },
        {
          subheading:
            "Moving from a network-centric to resource-centric framework",
        },
        {
          paragraphs:
            "Most legacy enterprise designs are network centric, meaning that the focus is on securing the network itself with the assumption that once the network is secured, resources and users will be protected as well. This belief has been experientially proven wrong and there are many examples of exploitations that have occurred because too much trust was placed on the secured network. What State and Local Governments need now is a modern approach that adopts the zero trust architecture as it is being defined by NIST. All data sources and computing services are considered resources access to resources is determined by dynamic policy including the observable state of client identity, application, and the requesting asset and may include other behavioral attributes. The enterprise ensures that all owned and associated devices are in the most secure state possible and monitors assets to ensure that they remain in the most secure state possible The enterprise collects as much information as possible about the current state of network infrastructure and communications and uses it to improve its security posture.",
        },
        {
          subheading: "Zscaler Internet Access",
        },
        {
          subimages: "/assets/Internet AccessImg.webp",
        },
        {
          paragraphs:
            "Zscaler Internet Access (ZIA) is a secure internet and cloud service provider (CSP) gateway delivered as a service. Think of it as a secure on-ramp to the internet and CSP — all you do is make Zscaler your gateway to the CSP. For on-premise installations, simply set up a router tunnel (GRE or IPsec) to the closest ZIA Public Service Edge. For mobile employees, you can forward traffic via our lightweight Zscaler Client Connector or PAC file",
        },
        {
          paragraphs:
            "The main function of the IAP and CAP within the SSA is to provide a comprehensive and robust security stack to protect the DISN from the internet and CSP, respectively. ZIA has a proven track record of providing this a comprehensive and robust security stack to protect its customers worldwide, from the internet and the CSP. ZIA sits between your users and the internet or CSP, inspecting every byte of traffic inline across multiple security techniques, even within SSL.",
        },
        {
          subheading: "Zero trust access is based on key tenets",
        },
        {
          subimages: "/assets/VPNImg.webp",
        },
        {
          paragraphs:
            "Application/service access no longer requires access to the network or use of VPN inside-out connections ensure apps and services are invisible to unauthorized users. App segmentation, not network segmentation, connects users to a specific app or service and limits lateral movement Secure network communication is achieved via end-to-end encrypted TLS tunnels ZPA provides a simple, secure, and effective way to access internal services. Access is based on policies created by the IT admin within the ZPA Admin Portal and hosted within the Zscaler cloud. On each user device, a piece of software called Client Connector is installed. Client Connector ensures the user’s device posture and extends a secure microtunnel out to the Zscaler cloud when a user attempts to access an internal service.",
        },
        {
          paragraphs:
            "Both services integrate with an agency’s existing identity providers via an industry standardsbased SAML 2.0 connection and also have the ability to stream transaction logging information to the agencie’s SIEM architecture. This means that Zscaler will integrate with the agencie’s existing cybersecurity platform and big data initiatives. Both ZIA and ZPA can be extended on-premises allowing for highly efficient traffic engineering. ZIA provides cloud-based protection at the perimeter, and ZPA provides a zero trust architecture to protect connections within the office.",
        },
        {
          subheading: "Stronger through partnerships",
        },
        {
          subimages: "/assets/ItPartnership.webp",
        },
        {
          paragraphs:
            "Zscaler provides a robust and mature security-as-a-service platform but leverages tight integration with industry partners to ensure that the service can be easily deployed and integrated for a bestof-breed overall solution. Zscaler performs some basic device posture checking as part of the ZPA service and takes that capability further through integration with endpoint detection and response (EDR) companies, such as CrowdStrike, Carbon Black, and SentinelOne. By integrating with leading industry partners, Zscaler ensures that the EDR capability is active on the endpoint before connecting a user to any resources. ZIA and CrowdStrike also share threat intelligence between their clouds, meaning a threat signature detected by Zscaler anywhere around the world can be detected on an endpoint subscribed to the CrowdStrike Falcon service. Zscaler also integrates with a variety of SIEM vendors, such as Splunk, Elastic, ArcSight, and others to make it easy for those solutions to ingest our real-time streaming data.",
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
        blogtitle={`Digisquares | Security-as-a-Service Transformation for State and Local Government`}
        blogheading={`Security-as-a-Service Transformation for State and Local Government`}
        blogdescription={`Traditionally, each State agency built out its own network and designed its own security architecture.`}
        blogurl={`/blog/SaasforGovt`}
        blogimg={`/assets/SaasGovtMain.webp`}
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

export default SaasforGovt;
