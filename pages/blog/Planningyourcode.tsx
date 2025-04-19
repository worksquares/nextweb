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
import Screen from "../../comp/Screen";
import { BlogLists } from "../../comp/BlogData";
import Headseo from "../headseo";
import BaseLayout from "../../comp/BaseLayout";

const Planningyourcode = () => {
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
      if (DataList.Trend == true) {
        BlogRightCardListData.push({
          title2: j == 0 ? "Trend" : null,
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
      title: "Planning Your Code",
      // subtitle: "August 12, 2021",
      link: "#",
      img1700: "/assets/1_jIt9fOkdMWqgeb07WkjbOA.webp",
      img1024: "/assets/1_jIt9fOkdMWqgeb07WkjbOA.webp",
      img768: "/assets/1_jIt9fOkdMWqgeb07WkjbOA.webp",
      img320: "/assets/1_jIt9fOkdMWqgeb07WkjbOA.webp",
      paragraph: [
        {
          paragraphs:
            "Knowing how to code is grate, but it's not going to get you very far if you don't know what it is your's supposed to be coding. Small samples of code don't need much planning, but bigger projects do, so here are some tips on planning your code.",
        },

        {
          paragraphs:
            "You will find that nearly all the professional developers out there will set aside some time to plan out how their code is going to fit into the wider project on which they're working. Regardless of whgether they're working as part of a team on the latest game, developing a workflow user interface for the company, or creating a set of automated tasks that can bve used across a number of diffrent platforms, each developer will set out their code in a plan.",
        },
        {
          paragraphs:
            "The planning stages can be unique to the devloper, unique to the company for which they're working, or the project on which they're working. Planning meetings will often sketch out a rough plan of how the end product will function, with each developer team then working on their element within the project. Lone developers will someties go back to basics, grab paper and a pencil and start getting their ideas down. the end result is always the same, though, a plan of action that enables the developer to plan without worring about the actual code at this early stage.",
        },

        { subheading: "PSEUDOCODE" },

        {
          paragraphs:
            "One of the more popular methods of planning to code is using pseudocode. It's terms used in programming circles that allows the developer to repersent the implementation of code, the sequence of the actions, using plain English and a mixture of code examples together with a flowchart or two to help “picture” loops within the coding project.",
        },
        {
          paragraphs:
            "For example, a developer who is planning to write a program that will check user input for odd or even numbers will probable begin with a basic statement of pseudocode.",
        },
        {
          paragraphs:
            "A Program to allow a user to check if the number is odd or even. Then the basic statement can be expanded.",
        },
        {
          paragraphs:
            "It's very simplistic, but form there the developer can continue to plan the remainder of the code needed without taking up too much valuable time-but while also havinbg a readable plan of action  for how the code is going to be formed.",
        },
        {
          paragraphs:
            "The actual wrinting of the code, therefore, takes place later on in the project. Once there's a plan of action in place, the developer can share the plan with their colleagues, lead developers, managers and so on. Then the plan can be further tweaked to include other aspects that the original developer may have missed or may have been removed due to being classed as unnecessary.",
        },
        {
          paragraphs:
            "This process will not only trim the fat off the code before it's even written but will also help plug any gaps in the project before the hard work of enterning the code begins.",
        },
        { subheading: "GRAPH  PAPER" },
        {
          paragraphs:
            "If you're planning to include graphics in your project, such as a platform game, then one the best resources you can use-and one that has been used since the early days of coding games-is graph paper.",
        },
        {
          paragraphs:
            "Super Mario Bros, launched for the Nintendo Entertainment System in 1985 was bearly exculsively drawn out-both characters and levels-on graph paper before being applied to code. Entire game maps were often created this way, especially on the older 8-bit machines such as the Commodore 64 and Sinclair ZX Soectrum home computers. 8-bit graphics were ideal for graph paper since the sprites used then were made up of eight or sixteen blocks; the developer could then visualise the layout of the sprite using the drawing on the graph peper and apply that to the code. The end result of course is the character appearing on the screen.",
        },
        {
          paragraphs:
            "Once the graphical planning stage is complete, it's then down to you as the developer to fill in the blanks as it were. This means creating the code that will place and animate your characters within the game, as well as developing interactions, collision detection, number of lives, and so on. With the help of some pseudocode, you could easily plan out what modeules you'd use or create, the number of variables needed, and the various endgame states that will arise when someone plays your game.",
        },
        {
          subheading: "GET PLANNING",
        },
        { subimages: "/assets/blogimg20.webp" },
        {
          paragraphs:
            "The whole point of planning is to create something easy to follow that will help you write the code for your project. Planning isn't supposed to be a chore; it's there to aid you when you get stuck trying to work out which variables you've used, where you are in the game, with what you're left and how the game will eventlually pan out and end.",
        },
        {
          paragraphs:
            "When planning, begin with small steps. Coding a Hangman game, for example, begins with the plan to get the palyer's name, then includes the word bank, drawing out the stages of the Hangman game,asking the right questions, and finishing the game in one of two states-a win or a lose-then asking if the player wants another go.",
        },
        {
          paragraphs:
            "Once you're used to planning it'll come naturally, and you'll find yourself thankful for all those post-it notes stuck to a sheet of A3 paper, as well as the reams of graph paper that details your characters and level designs.",
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
        blogtitle={`Digisquares | Planning your code`}
        blogheading={`Planning Your Code`}
        blogdescription={`Knowing how to code is grate, but it's not going to get you very far if you don't know what it is your's supposed to be coding.`}
        blogurl={`/blog/Planningyourcode`}
        blogimg={`/assets/1_jIt9fOkdMWqgeb07WkjbOA.webp`}
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
                    <a className={styles.items}>Home</a>
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

export default Planningyourcode;
