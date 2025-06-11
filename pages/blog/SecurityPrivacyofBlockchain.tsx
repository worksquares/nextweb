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

const SecurityPrivacyofBlockchain = () => {
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
      title: "Additional Security and Privacy Properties of Blockchain",
      // subtitle: "August 12, 2021",
      link: "#",
      img1700: "/assets/BlockChainMain.webp",
      img1024: "/assets/BlockChainMain.webp",
      img768: "/assets/BlockChainMain.webp",
      img320: "/assets/BlockChainMain.webp",

      paragraph: [
        {
          subheading:
            "Additional Security and Privacy Properties of Blockchain",
        },
        {
          paragraphs:
            "Although the blockchain in Bitcoin preserves the three basic security properties: consistency, tamper-resistance, and resistance to DoS attacks, a general purpose blockchain system may desire and benefit from a set of additional security and privacy properties that are critical to digital currency systems and distributed global ledger services. Due to space constraint, we here outline a couple of such additional properties.",
        },
        {
          subheading: "Unlinkability with high confidence",
        },
        {
          subimages: "/assets/Blockchain2.webp",
        },
        {
          paragraphs:
            "Unlinkability refers to the inability of stating the relation between two observations or two observed entities of the system with high confidence. Anonymity refers to the state of being anonymous and unidentified. Although the blockchain in Bitcoin ensures pseudonymity by offering pseudo-identity as the support for the anonymity of a user identity, it fails to provide users the protection of unlinkability for their transactions. Intuitively, the full anonymity of a user can only be protected by ensuring both pseudonymity and unlinkability if the user always uses her pseudoidentity to interact with the system. This is because unlinkability makes it hard to launch deanonymization inference attacks, which link the transactions of a user together to uncover the true identity of the user in the presence of background knowledge. Concretely, in Bitcoin like systems, a user can have multiple pseudonymous addresses. However, this does not provide perfect anonymity for users of blockchain, because every transaction is recorded on the ledger with the addresses of sender and receiver, and is traceable freely by anyone using the associated addresses of its sender and receiver. Thus, anyone can relate a user’s transaction to other transactions involving her accounts by a simple statistical analysis of the addresses used in Bitcoin transactions. For example, by analysis on a senderąŕs account, one can easily learn the number and total amount of bitcoins coming out or going into this account. Alternatively, one can link multiple accounts that send/receive transactions from one IP address. More seriously, a user may lose her anonymity and thus privacy for all the transactions associated with her Bitcoin address if the linkage of her bitcoin address to the user’s real-world identity is exposed.",
        },
        {
          paragraphs:
            "In addition, given the open nature of the public blockchain, anyone can make attempt to perform this type of de-anonymization attack silently and secretly without having the target user even realizing that she is being attacked or her true identity has been compromised. Therefore, the blockchain implementation in Bitcoin only achieves pseudonymity but not unlinkability and thus not full anonymity defined by pseudonymity with unlinkability. We argue that the blockchain system should be enhanced by other cryptographic techniques",
        },

        {
          subheading: "Confidentiality of Transactions and Data Privacy",
        },
        {
          subimages: "/assets/Blockchain3.webp",
        },
        {
          paragraphs:
            "Data privacy of blockchain refers to the property that blockchain can provide confidentiality for all data or certain sensitive data stored on it. Although the blockchain was originally devised as a distributed global ledger for the digital currency system Bitcoin, its potential scope of applications is much broader than virtual currencies. For example, blockchain can be leveraged for managing smart contract, copyrighted works, digitization of commercial or organizational registries. Not surprisingly, a desirable security property common in all the blockchain applications is the confidentiality of transaction information, such as transaction content (e.g., transaction amounts in Bitcoin), and addresses. Unfortunately, this security property is not supported in Bitcoin systems. In Bitcoin, the transaction content and addresses are publicly viewable, even though the pseudonym is used as the address of sender and receiver of a transaction instead of the real identity. We conjecture that the capability of keeping transaction content private will help to reduce the risk of linkage of pseudonym to the real user identity. This is critical for promoting the need-to-know based sharing instead of publicly viewable of the entire blockchain.",
        },
        {
          paragraphs:
            "Moreover, blockchain systems, which use smart contracts to implement complex transactions, such as Ethereum, require (1) the data of each contract and the code it runs on the data to be public and (2) every miner to emulate executing each contract. This will lead to the leakage of user information. For example, a user sets up a smart contract to transfer a certain amount of ETH to another user at a certain time. If an adversary has background information about one of the two parties, this adversary may expose and link this party to her real identity. Therefore, it is critical to design and implement stronger protection mechanisms for privacy-preserving smart contract",
        },
        {
          paragraphs:
            "the data privacy research in the past decades hasshown the risks of privacy leakage due to various inference attacks, which link sensitive transaction data and/or pseudonym to the true identity of the real users. Such privacy leakage can lead to breaching the confidentiality of transaction information. Thus, confidentiality and privacy pose a major challenge for blockchain and its applications that involve sensitive transactions and private data. We will dedicate Section 5 to discuss some main branches of technology that may help enhancing data privacy and transaction confidentiality on blockchain",
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
        blogtitle={`Digisquares | Security Privacy of Blockchain`}
        blogheading={`Additional Security and Privacy Properties of Blockchain`}
        blogdescription={`Unlinkability refers to the inability of stating the relation between two observations or two observed entities of the system with high confidence.`}
        blogurl={`/blog/SecurityPrivacyofBlockchain`}
        blogimg={`/assets/BlockChainMain.webp`}
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

                  href="/assets/Books/The business value of AI.pdf"
                >
                  <a
                    href="/assets/Books/The business value of AI.pdf"
                    target="_blank"
                  >
                    &nbsp;Connecting The business value of AI.
                  </a>
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

export default SecurityPrivacyofBlockchain;
