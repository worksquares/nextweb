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

const IntelligentAutomationInITSM = () => {
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
        "Explore how ITIL 4 and intelligent automation transform IT service management",
      img1700: "/assets/AI-foto-generale_Main.webp",
      img1024: "/assets/AI-foto-generale_Main.webp",
      img768: "/assets/AI-foto-generale_Main.webp",
      img320: "/assets/AI-foto-generale_Main.webp",

      paragraph: [
        {
          paragraphs:
            "As the digital landscape evolves, so too must the tools and strategies that support it. The Information Technology Infrastructure Library (ITIL) has long been a cornerstone of IT service management (ITSM), advocating for automation as a key driver of efficiency, innovation, and business value. With the release of ITIL 4, the focus has shifted toward integrating intelligent automation powered by AI, machine learning (ML), and natural language understanding (NLU) to meet the needs of modern IT operations.",
        },
        {
          subheading: "Streamlining ITSM with Intelligent Automation",
        },
        {
          paragraphs:
            "Intelligent automation is the future of ITSM. Platforms like Digisquares AppStudio provide organizations with the tools they need to modernize IT service management by integrating low-code, AI-powered workflows. This helps eliminate manual processes, freeing up IT teams to focus on more complex tasks while enhancing overall service efficiency.",
        },
        {
          paragraphs:
            "AI-driven automation enables organizations to automate service requests and incident management, improving accuracy and speed while reducing the risk of human error. By leveraging intelligent platforms, businesses can create end-to-end workflows that deliver faster and more reliable services, ensuring smoother operations across the enterprise.",
        },
        {
          subheading: "Enhancing User Experience with AI-Powered Agents",
        },
        {
          subimages: "/assets/Database2.webp",
        },
        {
          paragraphs:
            "Customer and employee engagement is crucial to the success of ITSM operations. Digisquares Agent Studio allows businesses to create AI-driven text and voice agents that engage users in real-time. These AI agents use natural language understanding to offer immediate, personalized responses, guiding users through tasks without human intervention.",
        },
        {
          paragraphs:
            "This level of automation not only speeds up response times but also improves user satisfaction. By automating routine inquiries and service requests, ITSM teams can provide always-on support while minimizing disruptions to critical IT services. AI-powered agents ensure seamless, intuitive experiences across platforms, enhancing the overall ITSM ecosystem.",
        },
        {
          subheading: "Data-Driven Decision Making with Predictive Analytics",
        },
        {
          paragraphs:
            "The integration of AI and ML into ITSM allows for data-driven decision-making at every stage of the service lifecycle. Digisquares AI Studio offers businesses the ability to train and fine-tune AI models using synthetic data, enabling predictive analytics to identify trends, anticipate service disruptions, and recommend proactive measures.",
        },
        {
          paragraphs:
            "By using predictive analytics to monitor performance and optimize workflows, ITSM teams can prevent issues before they arise, automate change management, and streamline service delivery. This approach not only boosts productivity but also improves long-term business outcomes, making IT service operations more resilient and adaptable.",
        },
        {
          paragraphs:
            "Intelligent automation, as outlined in ITIL 4, is transforming IT service management by integrating AI, ML, and NLU into core processes. Platforms like Digisquares AppStudio, Agent Studio, and AI Studio offer businesses the tools they need to modernize their ITSM operations, improve user experiences, and make data-driven decisions. By embracing intelligent automation, organizations can create faster, more efficient, and more reliable IT services that meet the demands of today’s digital first world.",
        },

        // -----------------
        // {
        //   paragraphs:
        //     "Programmer, developer, coder, they’re all titles for the same occupation, someone who creates code. What they’re creating the code for can be anything from a video game to a critical element on board the International Space Station. How do you become a programmer though?",
        // },

        // {
        //   subheading: "MORE THAN CODE",
        // },
        // {
        //   paragraphs:
        //     "For those of you old enough to remember the ‘80s, the golden era of home computing the world of computing was a very diffrent sence to how it is today. 8-bit computers that you could purchase as a whole, as opposed to begin kit form and you having to solder the part together, were the stuff of dreams; and getting your hands on one was sheer bliss contained within a large plastic box. However, it wasn’t so much the new technology that computers then offered, moreover it was the fact that for the first time ever, you could control what was being viewed on the ‘television’.",
        // },
        // {
        //   subimages: "/assets/Programmer 1.webp",
        // },

        // {
        //   paragraphs:
        //     "Instead of simply playing one of the thousands of games available at the time, many users decided they wanted to create their own content, their own games; or simply something that could help them with their homework or home finances. The simplicity of the 8-bit home computer meant that creating something from a few lines of BASIC code was achievable and so the first generation of home-bred programmer was born.",
        // },

        // {
        //   paragraphs:
        //     "From that point on, programming expanded exponentially. It wasn’t long before the bedroom coder was a thing of the past and huge teams of designers, coders, artists and musicians were involved in making a single game. This of course led to the programmer becoming more then simply someone who could fashion a sprite on the screen and make it move at the press of a key.",
        // },
        // {
        //   paragraphs:
        //     "Naturally, time has moved on and with it the technology that we use. However, the fundamentals of programming remain the same; but what exactly does it take to be a programmer?",
        // },
        // {
        //   paragraphs:
        //     "The single most common trait of any programmer, regardless of what they’re doing, is the ability to see a logical pattern. By this we mean someone who can logically follow something from start to finish and envisage the intended outcome. While you may not feel you’re such a person, it is possible to train your brain into this way of thinking. Yes, it takes time but once you start to think in this particular way you will be able to construct and follow code.",
        // },
        // {
        //   paragraphs:
        //     "Second to logic is an understanding of mathematics. You don’t have to be at a genius level but you do need to understand the rudiments of maths. Maths is all about being able to solve a problem and code mostly falls under the umbrella of mathematics.",
        // },
        // {
        //   paragraphs:
        //     "begin able to see the big picture is certainly beneficial for the mordern programmer. Undoubtedly, as a programmer, you will be part of a team of other programmers, and more than likely part of an even bigger team of disgner, all of whom are creating a final product. while you may only be expected to create a small element of that final product beign able to understand what everyone else is doing will help you create something that’s ultimately better than simply being locked in your own coding cubicle.",
        // },
        // {
        //   paragraphs:
        //     "This process will not only trim the fat off the code before it's even written but will also help plug any gaps in the project before the hard work of enterning the code begins.",
        // },
        // {
        //   paragraphs:
        //     "Finally, there’s also a level of creativity needed to be a good programmer. Again though, you don’t need to be a creative genius, just have the imagination to be able to see the end product and how the user will interact with it.",
        // },
        // {
        //   paragraphs:
        //     "There is of Course a lot more involved in being a programmer, including learning the actual code itself. However, with time, patience and the determination to learn, anyone can become a programmer. Whether you want to be part of a triple-A video game team or simply create an automated routine to make your computing life easier, it’s up to you how far to take your coding adventure!",
        // },
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
        blogtitle={`Digisquares | Intelligent Automation in ITSM`}
        blogheading={`Explore how ITIL 4 and intelligent automation transform IT service management`}
        blogdescription={`The Information Technology Infrastructure Library (ITIL) has long been a cornerstone of IT service management (ITSM), advocating for automation as a key driver of efficiency, innovation, and business value.`}
        blogurl={`/blog/IntelligentAutomationInITSM`}
        blogimg={`/assets/Manageddatabase_3.webp`}
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

export default IntelligentAutomationInITSM;
