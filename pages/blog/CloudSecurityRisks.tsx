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

const CloudSecurityRisks = () => {
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
      title: "Minimize the Cloud security risks and threads",
      // subtitle: "August 12, 2021",
      link: "#",
      img1700: "/assets/CloudSecurityRisk_Main.webp",
      img1024: "/assets/CloudSecurityRisk_Main.webp",
      img768: "/assets/CloudSecurityRisk_Main.webp",
      img320: "/assets/CloudSecurityRisk_Main.webp",

      paragraph: [
        {
          subheading: "Low code development can boost AI adoption:",
        },
        {
          paragraphs:
            "The past decade has witnessed many organizations embracing cloud adoption ans this makes cloud security a prominent player for them to thrive in the business game. According to IDC in 2021 the manufacturing industry spend $20 billion, professional services spend $18 billion and the banking sector spend $16 billion for cloud adoption. Also, research says on an average  employee uses 30 plus cloud services at the workplace.",
        },
        {
          paragraphs:
            "With the ongoing cloud adoption spree, the cloud-security threats are also becoming rampant. The worldwide statistics say that the average cost of data compromise sums up to $3.86 million. Research also says if an organisation can fix data breach issues within 30 days of occurrence, they tend to save $1 million. Moreover, if an organization can ensure a complete fool proof system against security compromise millions of dollars are saved. it is important for organizations to understand that cloud infrastructure itself cannot insulate organizational IT resources from security threats. They need strong security tools to neutralize cloud-security threats.",
        },
        {
          paragraphs:
            "A wide range of cloud-security challenges like data breaches, compliance with regular mandates, cloud migration challenges, insider threats, lack of IT expertise,  and managing unsecured APIs are to be addressed while devising cloud security practices. Organizations must ensure better Cloud Security Posture management( CSPM ) and use of Cloud Workload Protection ( CWP ). While the CSPm tools help organizations to quickly idebtify risks by monitoring multi cloud environments, workloads, teams and to produce useful insights the CMP assists to ensure server workload protection in modern day hybrid data center aechitectures. Here we have identified 6 best practices to be religiously put into action to build a robust cloud security system.",
        },
        {
          subheading:
            "Maintain comprehensive inventory of Cloud-native applications and services",
        },
        {
          subimages: "/assets/CloudsecurityImg.webp",
        },
        {
          paragraphs:
            "As Cloud adoption has gained momentum across big, small, and medium-sized organizations, the demand for cloud-nativce application development and container services has soarde. Organizations continuously deploy applications and services to the cloud and these newly deplyed cloud-native apps and sevices are vulnerable to security threats. So, from a cloud-security perspective organizations need to have a comprehensive inventory of all their cloud-native services and applications. Importantly, they can employ various CSPM tools to monitor the assests and applications in real-time. Thus, having a comprehensive inventory of newly deployed applications and services help organizations to nullify cloud security threats.",
        },
        {
          subheading:
            "Well-defined Access Management, Data Protection and Monitoring",
        },
        {
          paragraphs:
            "Granting'Read, Write and Execute' access for all members is not a wisw move, isn't it? Often mismanaged access grants prove costly for organizations from security prespective. So, having a robust access managemant policy is a key ingredient of a good cloud security practice. The access management policy should ensure proper identification and aunthrntication od users, wisely granting access rights to users, and systematic enforcement of resource access policy.",
        },
        {
          paragraphs:
            "The next step is ensuring a reliable data protection mechanism, Implementing Data Loss Prevention (DLP) policies helps to detect, monitor, and prevent acidental or intentional sharing of sensitive data.",
        },
        {
          paragraphs:
            "In addition, employing data classification techniques is vital to understand which type of data needs protection and prevention.",
        },
        {
          paragraphs:
            "Continuous Monitoring and Analysis of IT resources are vital for every organizations. An organization cannot show complacency just because they have hired a best in industry Cloud Services Provider(CSP). It is Important to understand that a CSP monitors only the infrastructure and services they offer and will not monitor the on premises applications and services developed by your organization. Also, it is improtant to employ Security Information and Event Managemant (SIEM) tools to continuously monitor the behaviour of IT infrastructure. SIEM tools helps to analyze threats and set the automated response to remediate.",
        },
        {
          subheading:
            "Rope in encryption and security measures at development stage",
        },
        {
          subimages: "/assets/Cloud Img.webp",
        },
        {
          paragraphs:
            "Often the misconception amongst many organizations is that implementation of cloud security measures happens only after the resources are deployed to the cloud. But best practise is to prepare a pre-deployment , on deployment and post deployment checklist to assess the types of encryptions and security measures that must be implemented during the design, development and deployment stages of a software application. So, it becomes mandatory are taken during the early development stage of applications by roping in encryption and security features throughout the software development life cycle.",
        },
        {
          subheading: "Ensure multi-cloud security coverage",
        },
        {
          subimages: "/assets/Cloud security 2.webp",
        },
        {
          paragraphs:
            "Multi-cloud strategy means using services of more then one CSP to leverage the best cutting edge technology features for various needs. As organizations of modern days prefer to use multiple clouds for different services, ensuring that all assets across the clouds are secured becomes important. So, while devising multi-cloud security coverage emplasis should be laid upon consistent security policies, automation of security tasks, minimized point security solutions, and single point of control across the multiple CSPs.",
        },
        {
          subheading: "Timely security review through external audits",
        },
        {
          paragraphs:
            "We all got our automobiles serviced at regular intervals to ensure no sudden breakdowns are faced, isn't it? Similarly, it is vital for all organizations to get their cloud assets audited at regular periods by an external agency to fix vulnerabilities in your IT resources. As the adage goes, prevention is always better than cure. Getting periodic security reviews is one of the best practices to security risks.",
        },
        {
          subheading:
            "Upskill employees and create awareness across the organization",
        },
        {
          paragraphs:
            "Creating general awareness amongst all employees on the importance of IR security skill earn certification from prominent cloud providers like Azure and AWS through trainings offered by authorized training partners helps to reinforce awareness amongst employees that the cloud-security is not the sole responsibility of one single department and it demands collective responsibility of development, operations, and senior management teams.",
        },
        {
          paragraphs:
            "To conclude, organizations adopting cloud should first choose the right CSP and understanding the security tools provided by them in depth. They can easily avoid major security tools which the right access control configuration, proper encryption methods and multifactor authentication features offered by the CSPs.",
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
        blogtitle={`Digisquares | Cloud Security Risks`}
        blogheading={`Minimize the Cloud security risks and threads`}
        blogdescription={`The past decade has witnessed many organizations embracing cloud adoption ans this makes cloud security a prominent player for them to thrive in the business game.`}
        blogurl={`/blog/CloudSecurityRisks`}
        blogimg={`/assets/CloudSecurity1.webp`}
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
                <Link href="/assets/Books/hybridcloud.pdf" target="_blank">

                  &nbsp;Things The Pandemic Taught Us About Cloud Computing

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

export default CloudSecurityRisks;
