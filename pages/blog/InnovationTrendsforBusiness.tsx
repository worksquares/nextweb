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

const InnovationTrendsforBusiness = () => {
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
          title2: j == 0 ? "Latest" : null,
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
      title: "6 Innovation Trends and What They Mean for Your Business",
      img1700:
        "/assets/Blogs/blogheaders/InnovationTrendsforBusiness_Header.webp",
      img1024:
        "/assets/Blogs/blogheaders/InnovationTrendsforBusiness_Header.webp",
      img768:
        "/assets/Blogs/blogheaders/InnovationTrendsforBusiness_Header.webp",
      img320:
        "/assets/Blogs/blogheaders/InnovationTrendsforBusiness_Header.webp",

      paragraph: [
        // {
        //   subheading: "Enterprise cloud technology",
        // },
        {
          paragraphs:
            "As businesses navigate the fast-paced world of technology, innovation continues to shape the future of work, processes, and value creation. The rapid digital transformation happening across industries has unlocked numerous opportunities, but also introduced new complexities. To stay competitive, businesses must understand the trends that drive innovation and leverage them effectively.",
        },
        {
          subheading: "The Human Element in AI Development",
        },
        {
          paragraphs:
            "Here, we explore six key innovation trends and their impact on your business. These trends will help you rethink how you manage data, build applications, and engage with customers, and how the right tools like Digisquares' suite of products can help you thrive in this ever-changing landscape.",
        },
        {
          subheading: "Embracing Open Data Systems",
        },
        {
          subimages: "/assets/InnovationTrendsforBusiness_Small1.webp",
        },
        {
          paragraphs:
            "The days of siloed data architectures are over. As data volume increases exponentially, businesses need to embrace open data systems that facilitate real-time insights and faster decision-making. This trend highlights the importance of scalable platforms that support distributed architectures. With Digisquares AI Studio, businesses can train and fine-tune AI models using synthetic data, enabling them to manage large datasets efficiently while improving the accuracy and relevance of their models.",
        },
        {
          subheading: "Automating for Smarter Operations",
        },
        {
          paragraphs:
            "Automation is transforming the way organizations operate, making work more autonomous and decisions more data-driven. By integrating AI, machine learning, and automation-driven algorithms, businesses can create intelligent systems that act like a digital nervous system gathering and processing data, improving operations, and reducing human intervention. Platforms like Digisquares Agent Studio, which allows businesses to create intelligent AI agents with multi-language and multi-speaker support, are pivotal in enhancing automation capabilities while keeping human-like engagement at the core.",
        },
        {
          subheading: "Adapting to Distributed Workforces",
        },
        {
          paragraphs:
            "As work becomes more distributed, businesses need tools that can adapt to different environments and cloud ecosystems. Low-code platforms like Digisquares AppStudio empower teams to build applications that function seamlessly across various platforms, reducing the complexity of development and deployment. By integrating intelligent automation into app creation, businesses can build versatile applications that cater to the needs of a modern, distributed workforce.",
        },
        {
          subheading: "Empowering Everyone to Innovate",
        },
        {
          paragraphs:
            "As software development becomes more sophisticated, making it accessible to users at all levels is crucial. With low-code development platforms like Digisquares AppStudio, businesses can democratize app creation, allowing employees with minimal technical expertise to build applications. This trend not only empowers more people within an organization to innovate but also helps reduce overall development costs while boosting productivity.",
        },
        {
          subheading: "Building Strong Collaborative Networks",
        },
        {
          paragraphs:
            "The complexity of modern business ecosystems requires collaboration. To stay competitive, businesses need to form strong partnerships that help them co-create solutions, share knowledge, and adapt to technological shifts. In this context, platforms like Digisquares Agent Studio and Digisquares AI Studio are crucial. These platforms allow businesses to build powerful AI-driven tools that can be integrated into larger partner networks, enhancing value through collective expertise and resources.",
        },
        {
          paragraphs:
            "Innovation is more than just technology it’s about understanding the trends shaping the future of work and leveraging them to create real value. As businesses adapt to these six key trends accelerating innovation, embracing open data, automating operations, distributed workforces, democratized development, and collaborative networks platforms like Digisquares AppStudio, Agent Studio, and AI Studio play a vital role in driving growth and success. By embracing these trends, your business can stay ahead of the curve and unlock new opportunities for value creation.",
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
        blogtitle={`Digisquares | Innovation Trends for Business`}
        blogheading={`6 Innovation Trends and What They Mean for Your Business`}
        blogdescription={`As businesses navigate the fast-paced world of technology, innovation continues to shape the future of work, processes, and value creation.`}
        blogurl={`/blog/InnovationTrendsforBusiness`}
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

export default InnovationTrendsforBusiness;
