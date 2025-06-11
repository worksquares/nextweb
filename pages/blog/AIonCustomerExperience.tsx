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

const AIonCustomerExperience = () => {
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
      title: "How Artificial Intelligence is Transforming Customer Experience",
      img1700: "/assets/Blogs/blogheaders/AIonCustomerExperience_Header.webp",
      img1024: "/assets/Blogs/blogheaders/AIonCustomerExperience_Header.webp",
      img768: "/assets/Blogs/blogheaders/AIonCustomerExperience_Header.webp",
      img320: "/assets/Blogs/blogheaders/AIonCustomerExperience_Header.webp",

      paragraph: [
        // {
        //   subheading: "Enterprise cloud technology",
        // },
        {
          paragraphs:
            "Artificial intelligence (AI) has become a buzzword in the tech world, but can it truly deliver on its promise of improving customer experience? From chatbots that engage with customers in real time to predictive analytics that prevent issues before they arise, AI is redefining the way businesses interact with their customers. But as AI becomes more integrated into customer service strategies, businesses need to ensure they are leveraging this technology in meaningful and impactful ways.",
        },
        {
          subheading: "Personalized Interactions at Scale",
        },
        {
          paragraphs:
            "One of the key benefits of AI is its ability to scale personalized interactions. Platforms like Digisquares Agent Studio allow businesses to create AI agents that interact with customers through both text and voice, across multiple languages and devices. These AI-powered agents can analyze customer inquiries and respond with relevant, context-aware answers, delivering a seamless, personalized experience.",
        },
        {
          paragraphs:
            "For instance, instead of a customer navigating through a series of links and articles to find an answer, an AI agent can provide instant, tailored responses. This ability to read between the lines and understand customer sentiment in real time significantly enhances customer satisfaction and engagement. By automating these routine interactions, businesses can also reduce response times and free up human resources for more complex issues.",
        },
        {
          subheading: "AI for Customer Insights and Predictions",
        },
        {
          subimages: "/assets/CloudsecurityImg.webp",
        },
        {
          paragraphs:
            "AI isn't just about responding to customer queries it’s about anticipating them. Digisquares AI Studio empowers businesses to use data-driven predictions to enhance customer service. AI models trained on historical data can detect patterns and correlations that humans might overlook, allowing businesses to predict potential issues before they escalate.",
        },
        {
          paragraphs:
            "Imagine a scenario where a customer frequently experiences a particular technical issue. AI can predict this recurrence based on past interactions and provide the customer with a proactive solution, potentially preventing the problem altogether. By offering early warnings and personalized solutions, AI shifts customer service from reactive to proactive, ensuring a more seamless customer journey.",
        },
        {
          subheading: "Enhancing Internal Processes for Better Support",
        },
        {
          paragraphs:
            "AI’s benefits extend beyond customer-facing applications it can also be used internally to empower teams. Platforms like Digisquares AppStudio allow businesses to build AI-powered apps that streamline internal operations, helping customer support teams respond faster and more accurately. AI can provide real-time insights and recommendations, speeding up employee onboarding, training, and daily tasks.",
        },
        {
          paragraphs:
            "For example, an AI-powered system can help employees quickly access relevant knowledge base articles, understand common customer issues, and resolve queries faster. By embedding AI into the workflow, companies ensure that their employees are better equipped to provide top-tier customer support, ultimately improving the customer experience.",
        },
        {
          subheading: "Prescribing Solutions with AI",
        },
        {
          subimages: "/assets/Cloud Img.webp",
        },
        {
          paragraphs:
            "AI can also take customer service to the next level by offering prescriptive solutions. This means that when an issue arises, AI doesn’t just highlight the problem but suggests the best course of action based on previous data. This shift from reactive troubleshooting to proactive problem-solving transforms how businesses address customer concerns.",
        },
        {
          paragraphs:
            "By leveraging the capabilities of Digisquares AI Studio, businesses can use AI to recommend solutions that have worked in the past for similar problems. This not only reduces downtime but also enhances customer trust, as customers feel reassured that their issues are being handled in the best possible way.",
        },
        {
          subheading: "A New Era of AI-Driven Customer Experience",
        },
        {
          paragraphs:
            "As AI continues to evolve, we will likely see even more sophisticated applications that enhance customer experience. AI-powered chatbots and virtual agents will not only respond to customer queries but will also recommend personalized products, offer solutions to potential problems, and even create dynamic, customized interfaces for each individual.",
        },
        {
          paragraphs:
            "The integration of AI into customer service strategies is not just a trend it’s becoming a necessity for businesses aiming to stay competitive in an increasingly digital world. Platforms like Digisquares AppStudio, Agent Studio, and AI Studio are paving the way for businesses to use AI to create more meaningful, efficient, and personalized customer experiences. With AI, companies can meet customer expectations at scale while reducing costs and streamlining operations.",
        },
        {
          paragraphs:
            "Artificial intelligence has proven that it can indeed improve customer experience, from personalized, real-time interactions to proactive problem-solving. Businesses that adopt AI-powered platforms like Digisquares Agent Studio, AppStudio, and AI Studio are positioning themselves at the forefront of this transformation, delivering faster, more tailored experiences while maintaining operational efficiency. As AI continues to evolve, its potential to enhance customer service and business processes will only grow, offering a new era of digital-first customer experiences.",
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
        blogtitle={`Digisquares | Impact of AI on Customer Experience`}
        blogheading={`How Artificial Intelligence is Transforming Customer Experience`}
        blogdescription={`Artificial intelligence (AI) has become a buzzword in the tech world, but can it truly deliver on its promise of improving customer experience?`}
        blogurl={`/blog/AIonCustomerExperience`}
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

export default AIonCustomerExperience;
