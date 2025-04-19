import React, { useState } from "react";
import BlogPostContent from "../../comp/BlogPostContent";
import { BlogPostContainProps } from "../../comp/base/BlogPostCard";
import { BlogRightContainProps } from "../../comp/base/BlogRightImgCard";
import BlogRightImg from "../../comp/BlogRight";
import { BlogTopicsContainProps } from "../../comp/base/BlogTopicsCard";
import BlogTopicContent from "../../comp/BlogTopicsContent";
import styles from "../../styles/Blog.module.css";
import Styles from "../../styles/comp/core/BlogPostCard.module.css";
import Link from "next/link";
import { BlogLists } from "../../comp/BlogData";
import Headseo from "../headseo";
import Screen from "../../comp/Screen";
import BaseLayout from "../../comp/BaseLayout";

const AIToolsforRealWorld = () => {
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
        "Exploring how human involvement enhances AI tools for real-world value",
      img1700: "/assets/Blogs/blog1.webp",
      img1024: "/assets/Blogs/blog1.webp",
      img768: "/assets/Blogs/blog1.webp",
      img320: "/assets/Blogs/blog1.webp",

      paragraph: [
        // {
        //   subheading: "Enterprise cloud technology",
        // },
        {
          paragraphs:
            "Generative AI is transforming industries, enabling faster workflows, automating tasks, and boosting productivity. However, its true potential is unlocked when humans are actively involved in the process. Integrating human expertise and feedback at various stages of AI development ensures that AI tools deliver real, consistent value to users. This is where Digisquares' suite of AI-powered platforms stands out—by focusing on keeping humans at the center of AI integration, companies can achieve greater precision, accuracy, and meaningful results.",
        },
        {
          subheading: "The Human Element in AI Development",
        },
        {
          paragraphs:
            "Generative AI can automate complex tasks, but real value comes when the outputs are validated by human input. Digisquares believes that AI tools should complement, not replace, human decision-making. By embedding human-in-the-loop processes into its products, Digisquares enables businesses to better harness the power of AI.",
        },
        {
          subheading:
            "Digisquares AppStudio: Streamlined Development with Human Touch",
        },
        {
          subimages: "/assets/FutureofAppDevelopment.webp",
        },
        {
          paragraphs:
            "Digisquares AppStudio is a multi-platform low-code development platform that supports .NET, Node.js, Java, and Python. While the platform integrates AI agents to simplify app creation, it ensures that human users retain control. AppStudio empowers developers to build applications faster, using AI-driven tools like code generation and automation while allowing users to make adjustments and ensure accuracy. This approach guarantees that every app meets the specific needs of its users and stakeholders, preserving the human touch.",
        },
        {
          subheading:
            "Digisquares Agent Studio: AI-Driven, Human-Enhanced Interaction",
        },
        {
          paragraphs:
            "For businesses looking to elevate customer engagement, Digisquares Agent Studio provides a unique solution. It enables the creation of intelligent text and voice AI agents with multi-language and multi-speaker support. However, these agents work best when backed by human expertise. Human feedback is vital in training the AI to understand context, improve responses, and deliver better customer experiences. By keeping humans in the loop, businesses can deploy AI agents that offer personalized, trustworthy, and relevant interactions.",
        },
        {
          subheading: "Digisquares AI Studio: Training AI with Human Expertise",
        },
        {
          paragraphs:
            "Training AI models is a critical step in AI development, and Digisquares AI Studio simplifies this process by providing tools to train and fine-tune models using synthetic data. Yet, AI Studio also emphasizes the importance of human expertise in the training loop. By leveraging domain-specific knowledge and human input during the training phase, businesses can improve the accuracy and relevance of their AI models. This method not only accelerates the training process but also ensures that the AI is solving real-world problems effectively.",
        },
        {
          subheading: "Why Humans Still Matter",
        },
        {
          subimages: "/assets/AIToolsforRealWorld_Small2.webp",
        },
        {
          paragraphs:
            "Generative AI can’t exist in a vacuum. While automation is powerful, it is the human input—expertise, decision-making, and validation—that makes AI truly valuable. Platforms like Digisquares ensure that humans remain part of the equation by offering tools that balance automation with human oversight. This not only prevents errors and biases in AI outputs but also fosters trust in AI technologies among users.",
        },
        {
          paragraphs:
            "Incorporating human feedback at each stage of AI integration helps businesses develop AI solutions that are more accurate, relevant, and aligned with their unique challenges. By keeping humans in the loop, Digisquares delivers AI tools that not only enhance productivity but also create lasting value across industries.",
        },
        {
          paragraphs:
            "The future of generative AI lies in the collaboration between humans and machines. By integrating human expertise into the AI development process, platforms like Digisquares AppStudio, Agent Studio, and AI Studio allow businesses to achieve real value. Whether it's streamlining app development, enhancing customer engagement, or training AI models with human insights, the key to success is maintaining human involvement every step of the way. In the rapidly evolving AI landscape, putting humans in the loop is what will ensure long-term value and trust in AI solutions.",
        },

        // -----------------
        // {
        //   paragraphs:
        //     "APIs have become the mechanism of choice for connecting internal services, applications, data, identities, and other digital assets. As a result, APIs now have the potential to serve as a similarly valuable mechanism. Then can also provide a significantly easier-to-use alternative to the traditional, ad hoc approaches to data collection and data analysis that have slowed the process of converting information into the intelligence required by today’s data-driven organisations.",
        // },
        // {
        //   paragraphs:
        //     "Further, updating the analytics capabilities can be achieved by updating the API management software one system managed by a single group, rather than involving multiple systems and teams in the organisation. Data collected at the API layer could include information about the following:",
        // },
        // {
        //   paragraphs:
        //     "• Request and response, including time stamps, headers, full message, message size, and request path URL",
        // },
        // {
        //   paragraphs: "• Invocation, IP address, username, and user agent",
        // },
        // {
        //   paragraphs:
        //     "• Processing, including time started, time ended, outcome, errors, API name, hostname, and protocol This data then can be used not merely by creating dashboards and reports but also to predict using complex analysis",
        // },
        // {
        //   subheading: "Substenance of ecosystems’ growth",
        // },
        // {
        //   subimages: "/assets/DigitalEcosystem-1.webp",
        // },
        // {
        //   paragraphs:
        //     "Initial stages of adopting a new business model are known for the rapid pace at which companies develop innovative solutions to increase speed to market. This enables them to receive immediate feedback on prototypes and rapidly improve their products and services, making them more relevant for their customers. However, when they scale they make it difficult to quickly adapt to innovation due to their sheer size and established processes.",
        // },
        // {
        //   paragraphs:
        //     "Just as aircraft manufacturers hire aeronautical engineers to design products and software vendors employ legions of coders with specific skills, companies must pursue API strategies to hire the right people or reskill existing people for the job. Help create synergies for consumers by lowering their costs or create production/sales/service synergies for their offerings.",
        // },
        // {
        //   subheading: "Adopt an agile approach",
        // },
        // {
        //   subimages: "/assets/AgileApproach-2.webp",
        // },
        // {
        //   paragraphs:
        //     "Go to market and iterate often. As you explore possible API strategies and use cases, consider using lightweight prototypes and rapid experimentation. This way, you can factor in feasibility concerns but you will not be saddled (at least for the time being) with the burden of “enterprise” constraints. As compelling ideas gain momentum, you can then shape your solution, refine the business case for it, and explore it at scale. Many organisations have troves of raw data they have never used. By working with data scientists to analyse these assets before embarking on API initiatives, companies can better understand their data’s current value. Data should not be valued based on the applicability today but also determine future value with a higher activity.",
        // },
        // {
        //   subheading: "Competitive advantage",
        // },
        // {
        //   subimages: "/assets/CompetativeAdv.webp",
        // },
        // {
        //   paragraphs:
        //     "Not competing with price, but through value will help create a competitive advantage as the willingness to pay will increase. The more sustainable the competitive advantage, the more difficult competitors find it to neutralise the advantage. companies have built up masses of valuable data about their customers, products, supply chains, operations, and more. However, they are not always good at making it available in useful ways. That is a missed opportunity at best and a fatal error at worst. Within today’s digital ecosystems, business is driven by getting information to the right people at the right time. ",
        // },
        // ---------------------------
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
        blogtitle={`Digisquares | AI tools in real-world`}
        blogheading={`Exploring how human involvement enhances AI tools for real-world value`}
        blogdescription={`Generative AI is transforming industries, enabling faster workflows, automating tasks, and boosting productivity.`}
        blogurl={`/blog/AIToolsforRealWorld`}
        blogimg={`/assets/AI in DataCloud Main.webp`}
      />
      <BaseLayout>
        <div>
          <label className={styles.dropdown}>
            <div className={styles.ddbutton}>Menu</div>
            <input type="checkbox" className={styles.ddinput} id="test" />
            <ul className={styles.ddmenu}>
              <li>
                <Link legacyBehavior href="/more/Blog">
                  <a onClick={ChangeHome}>Home</a>
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
                  <Link legacyBehavior href="/more/Blog">
                    <a className={styles.items}> Home </a>
                  </Link>
                </div>

                {/* <form action="" className={styles.searchbar}>
                  <input
                    type="search"
                    name="search"
                    pattern=".*\S.*"
                    required
                  />
                  <button className={styles.searchbtn} type="submit">
                    <span>Search</span>
                  </button>
                </form> */}
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
                <Link href="/blog/CloudComputing">
                  {" "}
                  &nbsp;Learn more about a Cloud Computing approach and how it
                  applies to privacy, multicloud data integration and AI use
                  cases.
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

export default AIToolsforRealWorld;
