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

const ComprehensiveDbSecurity = () => {
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
      title: "Understanding Comprehensive Database Security",
      link: "#",
      img1700: "/assets/DBSecurityMain.webp",
      img1024: "/assets/DBSecurityMain.webp",
      img768: "/assets/DBSecurityMain.webp",
      img320: "/assets/DBSecurityMain.webp",

      paragraph: [
        {
          paragraphs:
            "To secure a database, especially large databases supporting ERP platforms such as SAP, PeopleSoft, or Oracle E-Business Suite, there are two primary challenges complexity and time. ERP platforms are designed to support complex business solutions on a global scale, inclusive of processes for finance, human resources, manufacturing, and sales/customer relationship management. A platform’s total technology stack includes the ERP application’s supporting operating system, database, and third-party tools and utilities. Simply ensuring that the various release levels of all these components interoperate successfully together in a robustly secure framework can be a challenge, as the combination of ERP functionality and the supporting technology stack creates a seemingly infinite number of permutations and combinations.",
        },
        {
          subheading:
            "Understanding the Need for a Formal Database Security Program",
        },
        {
          paragraphs:
            "While database security tends to deteriorate over time, what is needed to secure databases does not Effective database security requires a formal program to be in place that addresses people, processes, and tools. Such a program must address application as well as database issues. Applications are often the source of many database security vulnerabilities, as most attacks on a database come through the corresponding application. Database security is not provided by the application; and while much can be done within a database to promote effective security, databases cannot secure themselves. A database security program is a plan of action, not a piece of software. To secure databases, there are specific processes, procedures, and/or steps that people must perform. Some of these processes and/or steps may involve using software tools, but the security improvement created by performing the steps is created only by the actions of people. The physical, operational, personnel, and human resource aspects of database security are discussed in Part 2 of this white paper. Here we describe the technical components that must be in place directly in and around a database to establish an effective database security program..",
        },

        {
          subheading: "Database Security Program Component is Inventory",
        },
        {
          subimages: "/assets/DBSecurity-1.webp",
        },
        {
          paragraphs:
            "The first step in creating a database security program is to inventory the in-scope databases. This is not a one-time process. A process is required to scan regularly and identify databases throughout the entire organization. Rogue databases, or unknown databases, when found, must be officially vetted and brought under formal management processes. Especially for large Oracle ERP applications, production databases are commonly copied or cloned to create test, support, and development environments. This process is complicated when business-sponsored operational projects request additional database copies of varying lifetimes. As projects reach different milestones, database copies are deleted, and new copies are made. Likewise, new production databases can be introduced.",
        },
        {
          paragraphs:
            "As new databases are identified, each database must be classified according to what type of sensitive data it contains. This is not a one-time event; ongoing process is needed to maintain information about sensitive data, because just as rogue databases can be found, so too can rogue sensitive data. For example, database administrators commonly create copies of tables before running data fix scripts. The accumulation of such tables, if they contain sensitive data, creates security risks and issues. Depending on the nature and risk classification of the data, organizations subject to the Payment Card Industry (PCI) data security standard or the Health Insurance Portability and Accountability Act (HIPAA) will need to closely consult their compliance requirements for automated discovery and scanning. The inventory process to identify both databases and sensitive data must be programmatic. For organizations with hundreds, if not thousands, of databases, tools such as Imperva, IBM Guardium, and Integrigy AppSentry can greatly assist in automating the discovery process.",
        },
        {
          subheading: "Database Security Program Component as Configuration",
        },
        {
          subimages: "/assets/DBSecurity-3.webp",
        },
        {
          paragraphs:
            "Once a database inventory has been created, each identified database must have its configurations hardened according to security best practices. Configuration management is a core concept of the IT Infrastructure Library (ITIL) change management process. Change management aims to control the lifecycle of assets to enable beneficial changes to be made with a minimum of disruption to IT services. Over time, adjustments to database configurations and functionality will be required, and the older the database, the more changes will have occurred. Regardless of the type of change, configuration management ensures that these changes are tested and approved before being migrated to production, and that documentation on when, who, how, and where the changes were made is produced as well.",
        },
        {
          paragraphs:
            "Before deployment to production, each database (and application) should have its configurations documented, especially for those configurations that define or influence security. Also, as part of the go-live process, each database (and application) should utilize an appropriate secure baseline configuration representing recommended security best practices as defined by leading experts. Default configurations are rarely, if ever, designed with security best practices in mind. The default configurations for databases are designed for the speed and efficiency of the initial installation and setup. This includes the use of well-known default passwords, simple password requirements, and the creation of highprivileged as well as demo and test accounts (users). Such configurations are vulnerabilities that must be closed.",
        },
        {
          subheading:
            "Database Security Program Component on Access Management",
        },
        {
          subimages: "/assets/DBSecurity-2.webp",
        },
        {
          paragraphs:
            "Once the inventory has been created, and the database hardened per recommended security best practice configurations, access management must be reviewed. Almost all database security vulnerabilities require a valid database session (connection). Ensuring that both existing database accounts are valid, and that accounts created in the future will also be valid, requires several key processes to be in place. Granting DBA privileges unnecessarily, especially when granted to accounts with well-known default passwords, will easily defeat any and all security measures, both within the database and the supporting application. Finding database accounts with DBA privileges (or significantly elevated privileges) is common. Such occurrences are almost always not malicious, but rather the result of oversights, poor design or support, and/or development activity",
        },
        {
          subheading: "Access Management Must Be Automated",
        },
        {
          paragraphs:
            "As much as possible, authentication and authorization should be integrated with the overall corporate identity management approach and strategy. Having a clean identity management source of truth will strengthen security by allowing cleaner designs and requirements with fewer exceptions. Ideally, named database accounts for staff and employees should be authenticated using the corporate Lightweight Directory Access Protocol (LDAP) or Active Directory. LDAP and AD group membership should also drive authorization decisions. For building on an identity management source of truth for an organization, database security tools such as BeyondTrust’s PowerBroker and password safes such as CyberArk are invaluable. Password safes can physically control access by restricting passwords to least-privilege or need-to-know. Without a password, a database connection cannot be made. By basing access to passwords directly on LDAP or AD group membership, passwords can be safeguarded and key access management processes can be automatically and programmatically enforced.",
        },
        {
          subheading: "Database Security in Auditing",
        },
        {
          subimages: "/assets/Managingdatabase_2.webp",
        },
        {
          paragraphs:
            "Once a database has been inventoried, its configurations hardened and subjected to effective access management practices, much of the effort to secure it is complete. To maintain an effective security posture, and to verify the trust of privileged users such DBAs administering the database, auditing must be introduced. Auditing provides the data with which to verify trust. Users are authorized only for certain privileges. Auditing identifies when users’ privileges have changed or when they exercise privileges that they potentially have not been authorized to have and/or use. Database auditing cannot be done manually, and audit logs must be sent to a centralized solution for safekeeping, segregation of duties, and monitoring (correlation and reporting). Such tools are referred to as Database Activity Monitoring (DAM) solutions.",
        },
        {
          subheading: "Database Security on Monitoring",
        },
        {
          subimages: "/assets/Database2.webp",
        },
        {
          paragraphs:
            "Capturing audit data is easy; using it is not. Audit data must be transformed into actionable information to make decisions about violations of trust. The process of making such decisions is referred to as monitoring. Monitoring provides the constant vigilance required to support and enforce multiple layers of defense. Monitoring allows baseline configurations to be protected against drift and trust in operational processes to be verified. A database security program must have a monitoring solution that is outside the database. Not only does this create a segregation of duties by placing monitoring outside the reach of DBAs, but it also allows correlation among and between databases and other assets (such as firewalls, VPN activity, and applications). The overall success of a database security program is relative to the investment made by organizations in monitoring . The design and implementation  of auditing lends itself to a one-time project, whereas monitoring must be supported 24x7 for every day after that. To have an effective database security program, organizations must have an appropriate number of staff to support monitoring according to the size and number of databases being monitored.",
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
        blogtitle={`Digisquares | Understanding Comprehensive Database Security`}
        blogheading={`Understanding Comprehensive Database Security`}
        blogdescription={`To secure a database, especially large databases supporting ERP platforms there are two primary challenges complexity and time.`}
        blogurl={`/blog/ComprehensiveDbSecurity`}
        blogimg={`/assets/DBSecurityMain.webp`}
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

export default ComprehensiveDbSecurity;
