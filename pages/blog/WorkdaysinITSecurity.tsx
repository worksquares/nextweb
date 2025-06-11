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

const WorkdaysinITSecurity = () => {
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
        "Learn how collaboration and automation reduce long IT security workdays",
      img1700: "/assets/Database Main.webp",
      img1024: "/assets/Database Main.webp",
      img768: "/assets/Database Main.webp",
      img320: "/assets/Database Main.webp",

      paragraph: [
        {
          paragraphs:
            "For IT security professionals, few things are more frustrating than a late-day security alert that derails their workday and delays their personal plans. Managing cybersecurity incidents often involves multiple teams and disconnected systems, which leads to extended hours spent manually tracking down issues. However, modern IT security tools and platforms can bring greater collaboration and efficiency, preventing these long workdays through seamless integration and automation.",
        },
        {
          subheading: "Collaborative Security Solutions for Seamless Workflow",
        },
        {
          paragraphs:
            "One key to avoiding the long hours associated with cybersecurity incidents is implementing a platform that integrates IT security with other essential services. Platforms like Digisquares AppStudio allow organizations to streamline app development while ensuring the integration of security features. By centralizing workflows and automating vulnerability tracking, businesses can bring together IT security, IT operations, and risk management teams, ensuring faster issue resolution.",
        },
        {
          paragraphs:
            "With this integrated approach, teams no longer need to rely on siloed systems. Instead, they can quickly identify vulnerabilities, prioritize them, and track their impact across the entire IT infrastructure, leading to faster responses and less time spent firefighting security issues.",
        },
        {
          subheading: "Automating Security Operations to Save Time",
        },
        {
          subimages: "/assets/ManagedDatabases 1.webp",
        },
        {
          paragraphs:
            "Automation plays a crucial role in preventing IT teams from being overwhelmed by late-day incidents. With platforms like Digisquares AI Studio, businesses can train AI models to monitor networks and systems, continuously identifying threats and initiating patching actions when necessary. By combining agent-based and agentless discovery, IT teams can automate the process of detecting vulnerabilities, prioritizing risks, and applying fixes—without manual intervention.",
        },
        {
          paragraphs:
            "Additionally, using Digisquares Agent Studio for intelligent chatbots enables real-time communication across departments, allowing teams to stay informed of ongoing security events without requiring constant meetings or manual updates. This reduces the need for cross-functional firefighting sessions and helps keep workdays manageable.",
        },
        {
          subheading: "Enhancing Risk Management and Compliance",
        },
        {
          paragraphs:
            "Data security is also about compliance and governance. AI-driven platforms can continuously assess risks and track all actions, leaving a digital trail for audit purposes. With the right tools, organizations can ensure that cybersecurity issues are managed properly, minimizing risk while maintaining full transparency. Real-time risk assessment and automated workflows ensure that incidents are resolved within work hours, preventing unnecessary overtime and improving overall team productivity.",
        },
        {
          subimages: "/assets/Db_2.webp",
        },
        {
          paragraphs:
            "Preventing long IT security workdays is achievable through better collaboration, automation, and integrated workflows. Platforms like Digisquares AppStudio, Agent Studio, and AI Studio offer tools that help businesses streamline their security operations, automate vulnerability responses, and keep all stakeholders informed in real time. By leveraging these modern solutions, IT teams can tackle security issues quickly and efficiently—without sacrificing their evenings.",
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
        blogtitle={`Digisquares | Workdays in IT Security`}
        blogheading={`Learn how collaboration and automation reduce long IT security workdays`}
        blogdescription={`For IT security professionals, few things are more frustrating than a late-day security alert that derails their workday and delays their personal plans.`}
        blogurl={`/blog/WorkdaysinITSecurity`}
        blogimg={`/assets/AI in DataCloud Main.webp`}
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

export default WorkdaysinITSecurity;
