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

const SocialEngineering = () => {
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
      title: "Social Engineering",
      // subtitle: "August 12, 2021",
      link: "#",
      img1700: "/assets/20200724-brandon2-karen.webp",
      img1024: "/assets/20200724-brandon2-karen.webp",
      img768: "/assets/20200724-brandon2-karen.webp",
      img320: "/assets/20200724-brandon2-karen.webp",

      paragraph: [
        {
          paragraphs:
            "With the rise of wider forms of communication, through social media and so on, comes a new wave of threats called social engineering, there are many forms of social engineering, so let's have a look at what you're up against, and how to combat it.",
        },

        {
          paragraphs:
            "Social engineering is the new modern way of manipulating people to give up their personal and confidential informatiom. it comes in many guises and under different sub-headings, such as phishing and the like, but it's essentially all a form of social engineering Essentially, the scammer will take your human nature and responses  and turn it against you for their own gain.",
        },
        {
          paragraphs:
            "The kind of information the scammer is after does vary, depending on the type of scam beign used, but for the most part they're usally after your passwords, bank and credit card details, or login information in order to gain any sort of financial data.",
        },
        {
          subimages: "/assets/gallery1.webp",
        },

        {
          paragraphs:
            "You're probably more familiar with social engineering that you suspect, even if you're new to the term. Recall the emails from someone, usually based in Nigeria, who has come into a fortune in the billions and for some inexplicable reason wants to put the money in your bank account. Needless to say the money was never there in the first place and should you go through the process you will eventually be persuaded to hand over some banking information which the scammer can then use to steal from you.",
        },

        {
          paragraphs:
            "There aren't too many Nigerian scams these days, mostly you get a phone call from someone climing to be from Microsoft or some other well-known company, who insists that they are tracking a virus or other harmful malware that's currently residing on your computer. They ask you to visit a webpage and download a piece of software that will allow them remote access to your computer. When in they run a script whilst in the background they run keylogging and hacking software to obtain your online banking details. They can even ask you to log into your bank while connected to make sure everything is working.",
        },
        {
          subimages: "/assets/1_ngNS4Bn7xqT5eShrxYlgVw.webp",
        },
        {
          paragraphs:
            "Other common social engineering tactics include emails from a friend, who has been hacked, with the scammer masquerading as them. it could be an email claiming to be from your bank an urgent request for help or someone asking for a donation to a charitable orfanisation. Be wary, and question everything.",
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
        blogtitle={`Digisquares | Social Engineering`}
        blogheading={`Social Engineering`}
        blogdescription={`With the rise of wider forms of communication, through social media and so on, comes a new wave of threats called social engineering, there are many forms of social engineering, so let's have a look at what you're up against, and how to combat it.`}
        blogurl={`/blog/SocialEngineering`}
        blogimg={`/assets/20200724-brandon2-karen.webp`}
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

export default SocialEngineering;
