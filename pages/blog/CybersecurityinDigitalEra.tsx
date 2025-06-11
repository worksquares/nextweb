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

const CybersecurityinDigitalEra = () => {
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
      title:
        "Surveyed enterprises most commonly used software as a service for automation",
      link: "#",
      img1700: "/assets/Security.webp",
      img1024: "/assets/Security.webp",
      img768: "/assets/Security.webp",
      img320: "/assets/Security.webp",

      paragraph: [
        {
          paragraphs:
            "In their relationships with SaaS vendors, most respondents use questionnaires to gauge security capabilities but criticize the approach as imprecise, incomplete, and overly time consuming. Security executives tend to focus on four key issues when confronting SaaS capabilities encryption and key management, identity and access management (IAM), security monitoring, and incident response. Notable is that each of these issues has more to do with the interface between the customer and the SaaS provider than with the providers’ intrinsic technical protections, such as code security and endpoint  protection.",
        },
        {
          subheading: "Encryption and key management",
        },
        {
          paragraphs:
            "Applications running in the cloud and data stored there are not protected by a traditional corporatesecurity perimeter of firewalls and the like. As a result, security becomes essentially reliant on encryption and management of the keys that provide access to encrypted data. Our interviews revealed that most companies, especially large ones, do not entrust SaaS providers to host and manage their security keys. The majority prefer to hold their keys on premises through a hardware security module, retain management control of cloud-hosted keys, or use a combination of methods. These approaches allow companies to control access to sensitive information. It also ensures that government agencies cannot gain access to and unencrypt their data without contacting them first.",
        },

        {
          subheading: "Security telemetry and monitoring",
        },
        {
          subimages: "/assets/Saas3.webp",
        },
        {
          paragraphs:
            "Increasingly, CISOs acknowledge that they cannot prevent every instance in which security is compromised. They therefore want the necessary transparency to identify and assess emerging security risks quickly and thoroughly. As companies adopt SaaS offerings, data from SaaS providers about usage patterns become critical to this analysis. Security reporting is the baseline capability CISOs demand. They want a clear view usually consolidated in a dashboard – of the users that have been accessing their data and what they have done with it. Without this kind of transparency, implementing even the best security concepts can be a “nightmare,” as one security executive remarked.",
        },
        {
          paragraphs:
            "As new databases are identified, each database must be classified according to what type of sensitive data it contains. This is not a one-time event; ongoing process is needed to maintain information about sensitive data, because just as rogue databases can be found, so too can rogue sensitive data. For example, database administrators commonly create copies of tables before running data fix scripts. The accumulation of such tables, if they contain sensitive data, creates security risks and issues. Depending on the nature and risk classification of the data, organizations subject to the Payment Card Industry (PCI) data security standard or the Health Insurance Portability and Accountability Act (HIPAA) will need to closely consult their compliance requirements for automated discovery and scanning. The inventory process to identify both databases and sensitive data must be programmatic. For organizations with hundreds, if not thousands, of databases, tools such as Imperva, IBM Guardium, and Integrigy AppSentry can greatly assist in automating the discovery process.",
        },
        {
          subheading:
            "Saas providers with hosting and managing encryption keys and use different control methods",
        },
        {
          subimages: "/assets/Saas1.webp",
        },
        {
          paragraphs:
            "Many security teams seek to integrate data on SaaS usage with external-threat intelligence and information from the rest of their technology environment to determine the actions they must take to protect their company. To accomplish this, the security teams need SaaS providers to offer application programming interfaces (APIs), which will allow them to pull data into their security operations centers (SOCs) and security-incident and event-management platforms (SIEMs). As a health-services CISO explained, “On-premises security controls are getting extended into the cloud. Only a few SaaS providers allow us to pull logs to go into our SIEM.” A banking CISO said, “I want to integrate with SOC/SIEM. I want something flexible enough to work with hardened SIEM tools, and something capable of integrating as well.” In other words, CISOs want their vendors to make it easier to use APIs for integration. They also want timely service provision as well as accurate security information from their SaaS providers included in service-level agreements (SLAs).",
        },
        {
          paragraphs:
            "Every company can be breached. Therefore, security teams must implement tools and practices for managing, mitigating, and resolving incidents. Naturally, security monitoring plays a significant role in this, as greater transparency enables better incident response. Most organizations focus on SOC and SIEM integration. The more sophisticated security organizations we spoke with have dramatically broadened their incident-response requirements to include joint simulations, joint forensic activity, and intelligence sharing. One company even secured the right from one provider to send personnel to the provider’s SOC in the event of a major breach.",
        },
        {
          subheading: "Broader security concerns and pain points",
        },
        {
          subimages: "/assets/Saas2.webp",
        },
        {
          paragraphs:
            "As major data breaches proliferate and regulatory attention mounts, data privacy is becoming an issue in the decision-making process for SaaS contracting and implementation. Security teams, meanwhile, find vendors scrambling to provide adequate clarity on the data-privacy protections in their offerings. One medical-products CISO pointed out that SaaS providers struggled to fulfill data-residency requirements identifying the countries where the data are stored. Companies need to know the residency to meet local data regulations. CISOs often cannot tell whether SaaS products properly meet new data-privacy mandates, including the European Union’s General Data Protection Regulation (GDPR), Brazil’s General Data Protection Law, and the California Consumer Privacy Act. Companies need to know this information to configure critical features, like encryption, data purging, and data logging, as they ensure compliance. Respondents say that the claims SaaS providers make about product compliance are often overstated, so they don’t necessarily trust them. A technology company’s CISO said, “For things like GDPR, everyone is trying to figure it out; if anyone claims that they are mature in their process around GDPR, I would question this. I would prefer a sense of openness [and] honesty around what SaaS providers are doing and why they believe they are compliant.”",
        },
        {
          subheading: "Access Management Must Be Automated",
        },
        {
          paragraphs:
            "As much as possible, authentication and authorization should be integrated with the overall corporate identity management approach and strategy. Having a clean identity management source of truth will strengthen security by allowing cleaner designs and requirements with fewer exceptions. Ideally, named database accounts for staff and employees should be authenticated using the corporate Lightweight Directory Access Protocol (LDAP) or Active Directory. LDAP and AD group membership should also drive authorization decisions. For building on an identity management source of truth for an organization, database security tools such as BeyondTrust’s PowerBroker and password safes such as CyberArk are invaluable. Password safes can physically control access by restricting passwords to least-privilege or need-to-know. Without a password, a database connection cannot be made. By basing access to passwords directly on LDAP or AD group membership, passwords can be safeguarded and key access management processes can be automatically and programmatically enforced.",
        },

        {
          subheading:
            "Implications on software as a service purchasing and contracting",
        },
        {
          subimages: "/assets/Saas4.webp",
        },
        {
          paragraphs:
            "Security issues often disqualify providers from consideration. For those that are considered, security remains a major concern; a few of our respondents told us that they had reverted to a provider’s on-premises solution because they could not become comfortable with the security provisions of the SaaS offering. When deploying SaaS offerings, security executives cited the cost and complexity of the compensating controls they had to put in place to manage the accompanying risk. Many decide to invest in specialized thirdparty tools to manage encryption keys, ensure compliance with corporate policies, analyze vulnerabilities, enhance encryption, or track data usage for SaaS offerings. CISOs also say that they must expend scarce talent and resources in configuring and managing security offerings to meet their standards.",
        },
        {
          paragraphs:
            "In a few reported cases, large companies called off planned migrations from an on-premises platform to an SaaS offering for security reasons. In one case, the vendor failed to meet commitments to make the APIs mature for IAM and SIEM integration. After the company had devoted significant resources to use the required APIs, it gave up and reverted to the existing version of the application in order to ensure required performance. In another example, new charges for security-related features were significant enough to sour the business case for adoption of a SaaS offering, causing the company to continue using the on-premises version",
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
        blogtitle={`Digisquares | Surveyed enterprises for automation`}
        blogheading={`Surveyed enterprises most commonly used software as a service for automation`}
        blogdescription={`Priorities in attempting to secure software as a service`}
        blogurl={`/blog/CybersecurityinDigitalEra`}
        blogimg={`/assets/Security.webp`}
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

                  href="/assets/Books/Security and Privacy.pdf" target="_blank"
                >

                  &nbsp;Top best practices to boost your security performance.

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

export default CybersecurityinDigitalEra;
