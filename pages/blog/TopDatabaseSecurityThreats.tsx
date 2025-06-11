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

const TopDatabaseSecurityThreats = () => {
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
          title2: j == 0 ? "Trends" : null,
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
      title: "Top Ten Database Security Threats",
      // subtitle: "August 12, 2021",
      link: "#",
      img1700: "/assets/SecurityThreatsMain.webp",
      img1024: "/assets/SecurityThreatsMain.webp",
      img768: "/assets/SecurityThreatsMain.webp",
      img320: "/assets/SecurityThreatsMain.webp",

      paragraph: [
        {
          subheading: "Excessive and Unused Privileges",
        },
        {
          paragraphs:
            "When someone is granted database privileges that exceed the requirements of their job function, these privileges can be abused. For example, a bank employee whose job requires the ability to change only account holder contact information may take advantage of excessive database privileges and increase the account balance of a colleague’s savings account. Further, when someone changes roles within an organization or leaves it altogether, often his or her access rights to sensitive data do not change. In the latter case, if these workers depart on bad terms, they can use their old privileges to steal high value data or inflict damage.",
        },
        {
          paragraphs:
            "How do users end up with excessive privileges? Usually, it’s because privilege control mechanisms for job roles have not been well defined or maintained. As a result, users may be granted generic or default access privileges that far exceed their specific job requirements, or they may simply accumulate such privileges over time. This creates unnecessary risk.",
        },
        {
          subheading: "Privilege Abuse",
        },
        {
          subimages: "/assets/SecurityThreads1.webp",
        },
        {
          paragraphs:
            "Users may abuse legitimate database privileges for unauthorized purposes. Consider an internal healthcare application used to view individual patient records via a custom web interface. The web application normally limits users to viewing an individual patient’s healthcare history – multiple patient records cannot be viewed simultaneously and electronic copies are not allowed. However, a rogue user might be able to circumvent these restrictions by connecting to the database using an alternative client such as MS-Excel. Using Excel and their legitimate login credentials, the user could retrieve and save all patient records to their laptop. Once patient records reach a client machine, the data then becomes susceptible to a wide variety of possible breach scenarios..",
        },
        {
          subheading: "Input Injection (Formerly SQL Injection)",
        },
        {
          subimages: "/assets/DataSecure4.webp",
        },
        {
          paragraphs:
            "There are two major types of database injection attacks: 1) SQL Injection that targets traditional database systems and 2) NoSQL Injection that targets Big Data platforms. SQL Injection attacks usually involve inserting (or “injecting”) unauthorized or malicious statements into the input fields of web applications. On the other hand, NoSQL injection attacks involve inserting malicious statements into Big Data components (e.g., Hive or MapReduce). In both types, a successful Input Injection attack can give an attacker unrestricted access to an entire database.",
        },
        {
          paragraphs:
            "A crucial point to realize here, is that although it is technically true that Big Data solutions are impervious to SQL Injection attacks – because they don’t actually use any SQL-based technology – they are, in fact, still susceptible to the same fundamental class of attack (i.e., Input Injection).",
        },
        {
          subheading: "Malware",
        },
        {
          subimages: "/assets/SecurityThreats2.webp",
        },
        {
          paragraphs:
            "Cybercriminals, state-sponsored hackers, and spies use advanced attacks that blend multiple tactics – such as spear phishing emails and malware – to penetrate organizations and steal sensitive data. Unaware that malware has infected their device, legitimate users become a conduit for these groups to access your networks and sensitive data.",
        },
        {
          subheading: "Weak Audit Trail",
        },
        {
          subimages: "/assets/SecurityThreads3.webp",
        },
        {
          paragraphs:
            "Automated recording of database transactions involving sensitive data should be part of any database deployment. Failure to collect detailed audit records of database activity represents a serious organizational risk on many levels.",
        },
        {
          paragraphs:
            "Organizations with weak (or sometimes non-existent) database audit mechanisms will increasingly find that they are at odds with industry and government regulatory requirements. For example, Sarbanes-Oxley (SOX), which protects against accounting errors and fraudulent practices, and the Healthcare Information Portability and Accountability Act (HIPAA) in the healthcare sector, are just two examples of regulations with clear database audit requirements.",
        },
        {
          paragraphs:
            "Many enterprises will turn to native audit tools provided by their database vendors or rely on ad-hoc and manual solutions. These approaches do not record details necessary to support auditing, attack detection, and forensics. Furthermore, native database audit mechanisms are notorious for consuming CPU and disk resources forcing many organizations to scale back or eliminate auditing altogether. Finally, most native audit mechanisms are unique to a database server platform. For example, Oracle logs are different from MS-SQL, and MS-SQL logs are different form DB2. For organizations with heterogeneous database environments, this imposes a significant obstacle to implementing uniform, scalable audit processes.",
        },
        {
          paragraphs:
            "When users access the database via enterprise web applications (such as SAP, Oracle E-Business Suite, or PeopleSoft) it can be challenging to understand which database access activity relates to a specific user. Most audit mechanisms have no awareness of who the end user is because all activity is associated with the web application account name. Reporting, visibility, and forensic analysis are hampered because there is no link to the responsible user.",
        },
        {
          paragraphs:
            "Finally, users with administrative access to the database, either legitimately or maliciously obtained, can turn off native database auditing to hide fraudulent activity. Audit capabilities and responsibilities should ideally be separate from both database administrators and the database server platform to ensure strong separation of duties policies.",
        },
        {
          subheading: "Storage Media Exposure",
        },
        {
          subimages: "/assets/SecurityThreats4.webp",
        },
        {
          paragraphs:
            "Backup storage media is often completely unprotected from attack. As a result, numerous security breaches have involved the theft of database backup disks and tapes. Furthermore, failure to audit and monitor the activities of administrators who have low-level access to sensitive information can put your data at risk. Taking the appropriate measures to protect backup copies of sensitive data and monitor your most highly privileged users is not only a data security best practice, but also mandated by many regulations.",
        },
        {
          subheading: "Exploitation of Vulnerable, Misconfigured Databases",
        },
        {
          subimages: "/assets/SecurityThreads5.webp",
        },
        {
          paragraphs:
            "It is common to find vulnerable and un-patched databases, or discover databases that still have default accounts and configuration parameters. Attackers know how to exploit these vulnerabilities to launch attacks against your organization. Unfortunately, organizations often struggle to stay on top of maintaining database configurations even when patches are available. Typical issues include high workloads and mounting backlogs for the associated database administrators, complex and time-consuming requirements for testing patches, and the challenge of finding a maintenance window to take down and work on what is often classified as a business-critical system. The net result is that it generally takes organizations months to patch databases, during which time they remain vulnerable.",
        },
        {
          subheading: "Unmanaged Sensitive Data",
        },
        {
          subimages: "/assets/SecurityThreats6.webp",
        },
        {
          paragraphs:
            "Many companies struggle to maintain an accurate inventory of their databases and the critical data objects contained within them. Forgotten databases may contain sensitive information, and new databases can emerge – e.g., in application testing environments without visibility to the security team. Sensitive data in these databases will be exposed to threats if the required controls and permissions are not implemented.",
        },
        {
          subheading: "Denial of Service",
        },
        {
          subimages: "/assets/SecurityThreats7.webp",
        },
        {
          paragraphs:
            "Denial of Service (DoS) is a general attack category in which access to network applications or data is denied to intended users. DoS conditions can be created via many techniques. The most common technique used in database environments is to overload server resources such as memory and CPU either by flooding them with an excessive number of queries, or with a smaller volume of wellcrafted queries that consume a disproportionate amount of system resources (e.g., because they lead to recursive look-ups or table operations). The result in either case is the same; the resource-starved servers become unresponsive and, in some instances, even crash. The motivations behind DoS attacks are often linked to extortion scams in which a remote attacker will repeatedly crash servers until the victim meets their demands. Whatever the source, DoS represents a serious threat for many organizations.",
        },
        {
          subheading: "Limited Security Expertise and Education",
        },
        {
          subimages: "/assets/SecurityThreats8.webp",
        },
        {
          paragraphs:
            "Internal security controls are not keeping pace with data growth and many organizations are ill-equipped to deal with a security breach. Often this is due to the lack of expertise required to implement security controls, enforce policies, or conduct incident response processes.",
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
        blogtitle={`Digisquares | Top Database Security Threats`}
        blogheading={`Top Ten Database Security Threats`}
        blogdescription={`When someone is granted database privileges that exceed the requirements of their job function, these privileges can be abused.`}
        blogurl={`/blog/TopDatabaseSecurityThreats`}
        blogimg={`/assets/SecurityThreatsMain.webp`}
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

export default TopDatabaseSecurityThreats;
