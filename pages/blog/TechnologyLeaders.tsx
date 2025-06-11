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

const TechnologyLeaders = () => {
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
      title: "What are the New Expectations from Technology Leaders?",
      // subtitle: "August 12, 2021",
      link: "#",
      img1700: "/assets/shutterstock_430052296-897x500.webp",
      img1024: "/assets/shutterstock_430052296-897x500.webp",
      img768: "/assets/shutterstock_430052296-897x500.webp",
      img320: "/assets/shutterstock_430052296-897x500.webp",

      paragraph: [
        {
          subheading: "Value-based Technology Leadership",
          paragraphs:
            "Values-based leadership is the idea that leaders should draw upon their own and others values-including those established for your organization-for direction and motivation. At its core, values-based leadership philosophy asserts that people are mostly motivated by values and live according to these beliefs.",
          subimages: "/assets/HyattBlakePeck.webp",
        },
        {
          paragraphs:
            "Developing a personal leadership philosophy that is based on core principles and values is crucial for young technology leaders. As the scope of techology expands, so does the urge to implement it at all levels of the organization. However, having a strong sense of accountability is also important for leaders as it reflects on the mext managerial level of leadership. Having a value-based culture will attract like-minded individuals who will further enhance the culture and drive it towards a unified goal.",
        },

        {
          subheading: "Examples of value-based technology leadership:",
        },
        {
          paragraphs: "1. Customer-centric products and services",
        },
        { paragraphs: "2. Building a culture of gender inclusiveness" },
        { paragraphs: "3. Facilitating culture dialogues" },
        { paragraphs: "4. Creating a culture of accountability" },
        {
          paragraphs: "5. Developing culture metrics on a organizational level",
        },
        {
          paragraphs:
            "6. Improving systems for easy communication across the orgabization at all levels",
        },
        { paragraphs: "7. Updating HR practices as per new values" },
        {
          subimages: "/assets/getty_493578018_154441.webp",
        },
        { subheading: "Strength-Based Technology Leadership" },

        {
          paragraphs:
            "Strength-based technology leaders adopt a 'Laissez-faire' approach to organizational performance. By including a system of delegation, they can stimulate a culture of innovation, creativity, and confidence for everyone to express their own ideas. Leaders can use technology to derive ideas from their team members by using collaboration tool effectively. They can create R&D departments that encourage knowledge sharing. Countious education and learning can be easily adopted across the organizationm regardless of where the team members are placed, by providing them with online tools.",
        },

        {
          paragraphs:
            "Strength-based leadership can be built in four areas: execution, influence, strategic thinking, and relationship building. In a technology-based organization, these can be adopted in different ways:",
        },
        {
          subheading: "1. STRATEGIC THINKING",
        },
        {
          paragraphs:
            "Innovation and leadership programs focus on strengths and passions rather than loopholes, intellectual knowledge sharing through programs like Hackathons.",
        },
        {
          subheading: "2. EXECUTING",
        },
        {
          paragraphs:
            "Clearly defining roles and responsibilities, using tools to monitor performance, setting up mechanisms for feedback or updates.",
        },
        {
          subheading: "3. RELATIONSHIP BUILDING",
        },
        {
          paragraphs:
            "Clearly defining project goals, creating tools to update the project status real-time, clear collaboration channels, adhoc teaming, transparency.",
        },
        {
          subheading: "4. INFLUENCING",
        },
        {
          paragraphs:
            "Strong mentoring programs, tow-way performance reviews, and competency-based interviewing.",
        },
        { subheading: "Decision Making Skills for Techology Leaders" },
        {
          paragraphs:
            "Technology leaders are more scientifically oriented in the sense that their decisions are more data-and facts-driven. Today's leaders have to constantly upgrade their decision-making capabilities in order to move with the changing times. Techology has significantly increased the number of variables in the decision-making algorithm, and with the increasing use of knowledge workers, several other human-centric variables have also found their way into the equations. Every decision made by technology leaders in a comnination of strategic, tactical and operational.",
        },
        {
          subheading: "Re-engineered decision making is all about:",
          subimages:
            "/assets/decision-intelligence-gartner- E2 80 93-reengineering-the-decision-with-peak.webp",
        },
        {
          paragraphs:
            "Being more inclusive by gathering and optimizing multiple stakeholder and giving consideration to diffrent data perspectives.",
        },
        {
          paragraphs:
            "Being more transparent by making decisions more auditable and explainable for others, establishing clear accountablility.",
        },
        {
          paragraphs:
            "Being more accurate by using advance modelling capabilities and automated decisions that are more consistent and repeatable.",
        },
        {
          paragraphs:
            "Being more personalized by taking specific circumstances or conditions of peopele into account.",
        },
        {
          paragraphs:
            "Being more scalable by expending the management span of control with automated decision making and appropriate routing.",
        },
        {
          paragraphs:
            "Being more flexible with re-engineered decisions that respond to changing contexts.",
        },
        { subheading: "Influence and motivation" },
        { subimages: "/assets/960x0.webp" },
        {
          paragraphs:
            "The most important skill for technology leaders that work with Gen Z is motivation skills. Millennials are constantly seeking excitement. They are easily bored, have high energy levels. and constantly look for change. They don't relate with the 'secutity' culture which motivated their previous generations.",
        },
        {
          paragraphs:
            "Technology leaders of the moern era must create a 'flowing' culture-flexible timings, open workspaces, flat oragnization structures, informal dressing culture, openness to innovation. and divergence in the workforce. Roles too cannot be fixed. Rather than assigning a team to project, leaving the project open to whoever is most motivated, most interested, and best suits the skillstes required will work better.",
        },
        {
          paragraphs:
            "Technology leaders should also encourage unconventional ideas and risk-taking. Keeping the teams curious and bold and welcoming feedback of all kinds is the best way to guide new-age teams.",
        },
        { subheading: "Technology Leadership is a Dynamic Skill" },
        {
          paragraphs:
            "As the world moves more and more towards digital culture and global connectivity, there will be new challenges that leaders will face. Using technology to solve a proble is an old game-the new game is using technology to create a better now.",
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
        blogtitle={`Digisquares | Technology Leaders`}
        blogheading={`What are the New Expectations from Technology Leader`}
        blogdescription={`Values-based leadership is the idea that leaders should draw upon their own and others values-including those established for your organization-for direction and motivation.`}
        blogurl={`/blog/TechnologyLeaders`}
        blogimg={`/assets/shutterstock_430052296-897x500.webp`}
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
                <Link href="/assets/Books/TechnologyTrends.pdf" target="_blank">
                  &nbsp;Learn more about the Technology Trends and to
                  experience a Trending Techny ologies.

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

export default TechnologyLeaders;
