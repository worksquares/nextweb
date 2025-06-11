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

const AIPoweredAutomation = () => {
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
        "Learn how to reduce MTTR by streamlining workflows and automating processes",
      img1700: "/assets/Blogs/blogheaders/AIPoweredAutomation_Header.webp",
      img1024: "/assets/Blogs/blogheaders/AIPoweredAutomation_Header.webp",
      img768: "/assets/Blogs/blogheaders/AIPoweredAutomation_Header.webp",
      img320: "/assets/Blogs/blogheaders/AIPoweredAutomation_Header.webp",

      paragraph: [
        {
          paragraphs:
            "In the fast-paced world of IT, reducing Mean Time to Repair (MTTR) is critical for maintaining operational efficiency and minimizing the impact of incidents and outages. While advanced technologies and tools are often viewed as the solution, the reality is that much of the delay in incident resolution stems from human factors waiting for the right information, miscommunication, and lack of collaboration. By addressing these human challenges, businesses can significantly reduce MTTR and improve their overall performance.",
        },
        {
          subheading: "Streamlining Communication and Team Collaboration",
        },
        {
          paragraphs:
            "One of the biggest time sinks in resolving IT incidents is team engagement and communication. Platforms like Digisquares AppStudio are designed to streamline workflows and improve collaboration between teams by integrating low-code development with AI-powered automation. By unifying communication channels and providing real-time insights into ongoing incidents, businesses can reduce the amount of time spent waiting for responses or chasing down information from different departments.",
        },
        {
          paragraphs:
            "Effective communication also ensures that the right teams are engaged quickly, minimizing the delays that come from manually identifying and involving the appropriate personnel. With automated workflows, businesses can eliminate many of the inefficiencies that typically extend MTTR, leading to faster resolutions.",
        },
        {
          subheading: "Automating Incident Detection and Response",
        },
        {
          subimages: "/assets/Database2.webp",
        },
        {
          paragraphs:
            "Automation plays a critical role in reducing the inactive time associated with incident management. Digisquares AI Studio offers advanced tools to train and fine-tune AI models, allowing businesses to leverage synthetic data for accurate incident detection and response. By automating the identification of critical incidents and prioritizing tasks, IT teams can act swiftly without the need for manual intervention.",
        },
        {
          paragraphs:
            "Incorporating AI into the incident response process allows for predictive analytics and real-time monitoring, ensuring that incidents are resolved before they escalate. With automated systems in place, businesses can cut down on the time wasted waiting for data or responses, improving overall MTTR",
        },
        {
          subheading: "Enhancing User Engagement with AI-Powered Agents",
        },
        {
          paragraphs:
            "User engagement is another key factor in incident resolution. Delays often occur when users are unsure of how to report issues or don’t have the tools to resolve problems independently. Digisquares Agent Studio provides businesses with intelligent text and voice agents that engage users across multiple languages, offering real-time assistance for common issues.",
        },
        {
          paragraphs:
            "By empowering users to resolve simple problems through AI-powered self-service tools, businesses can reduce the volume of incidents that require manual intervention. This not only shortens MTTR but also enhances user satisfaction by providing faster resolutions to their problems.",
        },
        {
          paragraphs:
            "Reducing MTTR isn’t just about implementing the latest technology it’s about removing the human barriers that slow down incident response. By streamlining communication, automating incident management, and empowering users with AI-powered tools, businesses can help their teams get out of their own way and resolve issues faster. Platforms like Digisquares AppStudio, Agent Studio, and AI Studio provide the integrated solutions needed to make this transformation a reality, driving efficiency and improving incident resolution across the board.",
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
        blogtitle={`Digisquares | AI-Powered Automation`}
        blogheading={`Learn how to reduce MTTR by streamlining workflows and automating processes`}
        blogdescription={`In the fast-paced world of IT, reducing Mean Time to Repair (MTTR) is critical for maintaining operational efficiency and minimizing the impact of incidents and outages.`}
        blogurl={`/blog/AIPoweredAutomation`}
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

export default AIPoweredAutomation;
