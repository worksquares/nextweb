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

const CloudComputing = () => {
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
      title: "What is Cloud Computing?",
      link: "#",
      img1700: "/assets/The_Top_30_Important_Cloud_Computing_Terms.webp",
      img1024: "/assets/The_Top_30_Important_Cloud_Computing_Terms.webp",
      img768: "/assets/The_Top_30_Important_Cloud_Computing_Terms.webp",
      img320: "/assets/The_Top_30_Important_Cloud_Computing_Terms.webp",

      paragraph: [
        {
          paragraphs:
            "The way use technology is ever changing. It's an evolution of how and where we access our private, personal and work related data. From the earliest days of the home computer, assessing data and enterainment from cassettes, to the rise of the Internet and terabytes of storage, technology has revolutionised the way we interact with the world around us.",
        },

        {
          paragraphs:
            "One form of this techological evolution is the cloud. The cloud is a term used often without knowing exactly what the cloud is what it does how it works and what it can offer both the home and business user. The cloud offers many great benefits for those who use it. Storage, email development, collaboration, sharing streaming the list goes on.",
        },
        {
          paragraphs:
            "The future of work and entertainment lies in the cloud. So let's see what silver linings cast a gleam on this modern way of life.",
        },
        { subheading: "The Definition of the Cloud" },
        {
          paragraphs:
            "What is the cloud? Where is it? what can you do with it? How does it work? These are questions that both home and business users ask regularly. The term 'cloud computing' has been bandied about for so long, it's become just another technology phrase. But what does it really mean?",
          subimages:
            "/assets/Top_Cloud_Computing_Companies_to_Work_for_in_2021.webp",
        },
        { subheading: "SILVER LININGS" },
        {
          paragraphs:
            "The meaning of the cloud has changed somewhat in recent years, more as it became the new buzzword that pundits and marketing executives liked to throw about. In its most basic, layman's terms. cloud computing is simply accessing a form of digital resource, or service, that isn't installed locally on your computer.",
        },
        {
          paragraphs:
            "For the home, consumer user that could mean accessing Gmail. Google Drive, Dropbox, or in some circumstances, even viewing content through the likes of Netflix or listening to music via Spotify. It's a loose interpretation of what a cloud is but essentially, it's the same.",
        },
        {
          paragraphs:
            "From the Smalll Medium Bussiness(SMB), or Small Medium Enterprise's (SME)point of view it's a way of consolidating your digital resources and mission-critical cintent into an always available, online and accessible solution. This way mobile workers and clients can access the compant content, and you don't need to employ technical expertise to maintain the company servers and hardware continually. The ability to offer those shared resources without the technical or financial impact of setting it up, or keeping it maintained is one of the main draws of using cloud computing over the more traditional setup of an air-conditional room full of servers; therefore making it a more appealing proposition to both consumer and SMB/SME users.'",
        },
        {
          subimages:
            "/assets/5-Top-Trends-Influencing-the-Cloud-Computing-Market.webp",
        },
        {
          paragraphs:
            "The NIST went on to list five essential characteristics of cloud computing: on-demand self-service, broad network access, resource pooling, rapid elasticity or expansion and measured service. Furthermore, there are three listed Service Models: software platform and infrastructure and four Deployment Models: public, community, hybrid and private.",
        },
        {
          paragraphs:
            "The cloud, therefore has quite a broad definition encompassing pretty much everything we do and interact with on a dialy basis. Throughout this book, we'll take a more indepth look into the cloud. We'll discover what it consists of how it works for you as an individual or business user, and how we can build our own cloud service.",
        },
        {
          paragraphs:
            "In 2011, the National of Standards and Technology (NIST) brought together a final definition of the term cloud computing. 'Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources(e.g. networks, servers,stage, applications and services). It can be rapidly provisioned and released with minimal management effort or service provider interaction.",
        },
        {
          subheading: "Why Cloud?",
          paragraphs:
            "Why should you use a cloud computing solution when having your own in-house IT setup is more traditional? What is it that makes using a cloud provider more logical in today's interconnected world?",
        },

        {
          subheading: "AHEAD IN THE CLOUD",
          paragraphs:
            "We've touched on a few areas and benefits of using a cloud provider for your business and home use, so let's break these down a little more.",
        },
        {
          subheading: "FLEXIBILITY",
          paragraphs:
            "Cloud-based solutions are incredibly flexible in their design. They can grow as your business needs increase and they can be scaled back, should you ever require it. It's this level of operational agility, or elasticity, that makes a cloud solution perfect for the business and consumer IT model.",
        },
        {
          subheading: "REDUCED COSTS",
          paragraphs:
            "Cloud computing is a pay-as-you-go model, in that you simply invest in what you need at that particular point. Using this, in conjunction with the elasticity of a cloud, means that you'll only pay for additional services or storage as you and your business grow.",
        },
        {
          subheading: "AUTOMATIC UPDATES",
          paragraphs:
            "Updating a server is a time-consuming and comparatively stressful affair. Making sure the relevant security patch is in place and that, once applied, everything works the same way as it did previously takes cinsiderable planning. Using a cloud, on the other hand, removes that stress, as the engineers off-site handle the cloud's servers.",
        },
        {
          subheading: "COLLABORATION",
          paragraphs:
            "Using the cloud means that you and your ci-workers can gain access to the company's data as a single unit. This makes collaborating on a project with remote workers, or teams on the other side of the planet, far easier. Data updates are in real-time and the workflow is fas less confusing.",
        },
        {
          subheading: "DISASTER RECOVERY",
          paragraphs:
            "Both businesses, of any size, and home users should be concerned with building a robust disaster recoveru solution. In the event of a localised catastrophe, the loss of personal files or critical business data is a nightmare situation. However, recovering it can be quick and easy if it's stored in a remote cloud location.",
        },
        {
          subheading: "SECURITY",
          paragraphs:
            "Although there are incidents of cloud hacking, keeping data in the cloud is regarded as being far more secure than having it avilable locally. Lost laptops, USB flash drives, hard drives recovered from old computers can all be a huge security risk, with each containing data, bank details and images.",
        },
        {
          subheading: "COMPETITIVENESS",
          paragraphs:
            "Potentially, using a cloud model to run your business can significantly improve your competitiveness in the marketplace. you'll have access to 24/7 servers, cutting edge applications, and you can keep the costs down by only paying for what you use.",
        },
        {
          subheading: "ACCESS FROM ANYWHERE",
          paragraphs:
            "As long as an employee or individual, has access to the Internet, they can access the cloud solution  behind the company. This allows the utilisation of expertise from around the world without the expense of relocation.Home users can also upload images and documents from any Internet available device.",
        },
        {
          subheading: "DOCUMENT CONTROL",
          paragraphs:
            "When you have numerous users all working off a single document, you'll eventually come across conflicting copies and formats. By using a cloud model, document control is kept in line by all users working from a single, stored document source. Also the digital storage cost of multiple documents emailed to and from, users in drastically reduced.",
        },
        {
          subheading: "GREEN COMPUTING",
          paragraphs:
            "The datacentres that house cloud services are vast, energy-hungry places. However, since you only use the computing resources for which you pay, as does everyone else in the cloud, the overall energy required by the datacentre is as minimal as possible. No wasted power makes for a greener carbon footprint than a traditional server room setup.",
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
        blogtitle={`Digisquares | Cloud Computing`}
        blogheading={`What is Cloud Computing`}
        blogdescription={`The way use technology is ever changing. It's an evolution of how and where we access our private, personal and work related data.`}
        blogurl={`/blog/CloudComputing`}
        blogimg={`/assets/The_Top_30_Important_Cloud_Computing_Terms.webp`}
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

export default CloudComputing;
