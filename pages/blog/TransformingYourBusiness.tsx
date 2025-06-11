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

const TransformingYourBusiness = () => {
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
        "How Digital-First Businesses Can Drive Growth with AI and Automation",
      img1700: "/assets/ManagedDatabases 1.webp",
      img1024: "/assets/ManagedDatabases 1.webp",
      img768: "/assets/ManagedDatabases 1.webp",
      img320: "/assets/ManagedDatabases 1.webp",

      paragraph: [
        {
          paragraphs:
            "In today’s hyper-connected world, the move toward digital-first business models is no longer an option it’s a necessity. As organizations navigate the complexities of digital transformation, the demand for innovative solutions continues to grow. Yet, despite the opportunities, businesses face several challenges, from outdated infrastructure to resource constraints. To thrive in this environment, companies must embrace technology-driven strategies to accelerate growth and streamline operations. Here are three steps to drive digital-first business transformation.",
        },
        {
          subheading: "1. Modernize Your IT Infrastructure for Agility",
        },
        {
          paragraphs:
            "The foundation of any digital-first business is a modernized IT infrastructure. Businesses are often weighed down by legacy systems and disconnected teams that hinder progress. By adopting a unified platform like Digisquares AppStudio, organizations can overcome these challenges. This multi-platform low-code development environment supports .NET, Node.js, Java, and Python, enabling teams to create powerful applications without extensive coding requirements.",
        },
        {
          paragraphs:
            "By modernizing IT infrastructure with integrated tools, companies can reduce inefficiencies, streamline processes, and focus on innovation. With automation and AI agents built into the platform, businesses gain broad visibility across their IT landscape, helping them prioritize tasks and optimize performance.",
        },
        {
          subheading: "2. Automate Routine Tasks with AI-Powered Solutions",
        },
        {
          subimages: "/assets/Database2.webp",
        },
        {
          paragraphs:
            "Once your IT infrastructure is modernized, the next step is to leverage automation. Digisquares Agent Studio provides businesses with AI-powered tools to create intelligent text and voice agents that can engage users across multiple languages and devices. These virtual agents can handle routine inquiries and offer 24/7 support, freeing up valuable time for employees to focus on more complex tasks.",
        },
        {
          paragraphs:
            "With predictive analytics and pattern recognition capabilities, AI can also prevent incidents before they happen, helping businesses ensure seamless operations and service availability. By automating mundane tasks, organizations can increase productivity and improve customer satisfaction, driving better outcomes with fewer resources.",
        },
        {
          subheading: "3. Accelerate Service Delivery for Maximum Impact",
        },
        {
          paragraphs:
            "Digital-first businesses must keep pace with rapid development cycles and fast-changing market demands. Digisquares AI Studio provides organizations with tools to train and fine-tune AI models using synthetic data, helping businesses deliver faster, more reliable services. By integrating AI into service delivery, companies can streamline operations, enhance product development, and improve time-to-market.",
        },
        {
          paragraphs:
            "With native products built on top of the platform, teams can work more efficiently, delivering high-quality services that meet the needs of both customers and employees. Accelerating service delivery not only ensures compliance and operational excellence but also maximizes return on investment.",
        },
        {
          paragraphs:
            "Embracing a digital-first strategy requires businesses to modernize, automate, and accelerate their processes. By leveraging platforms like Digisquares AppStudio, Agent Studio, and AI Studio, organizations can streamline their IT operations, enhance productivity, and unlock new opportunities for growth. In a world where digital transformation is key to staying competitive, these three steps will position businesses for success in the fast-paced digital age.",
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
        blogtitle={`Digisquares | Transforming Your Business`}
        blogheading={`How Digital-First Businesses Can Drive Growth with AI and Automation`}
        blogdescription={`Learn three key steps to accelerate digital-first business transformation.`}
        blogurl={`/blog/TransformingYourBusiness`}
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

export default TransformingYourBusiness;
