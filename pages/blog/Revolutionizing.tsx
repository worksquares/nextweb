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

const Revolutionizing = () => {
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
        "What Is GPT-3 And Why Is It Revolutionizing Artificial Intelligence?",
      // subtitle: "August 12, 2021",
      link: "#",
      img1700: "/assets/AI-foto-generale.webp",
      img1024: "/assets/AI-foto-generale.webp",
      img768: "/assets/AI-foto-generale.webp",
      img320: "/assets/AI-foto-generale.webp",
      paragraph: [
        {
          subheading: "INTRODUCTION",
        },

        {
          paragraphs:
            "There's been a lot of publicity and energy in the fake intelligence (AI) world around a recently evolved innovation known as GPT-3. Set forth plainly; it's an AI that is better at making content that has a language structure – human or machine language-than anything that has preceded it. GPT-3 has been made by OpenAI, an examination business helped to establish by Elon Musk and has been depicted as the most significant and valuable development in AI for quite a long time. Be that as it may, there's some disarray over precisely what it does (and to be sure doesn't do), so here I will attempt to separate it into straightforward terms for any non-geek perusers keen on understanding the central standards behind it [1]. I'll additionally cover a portion of the issues it raises, just as why a few people think its hugeness has been overinflated fairly by publicity.",
        },
        {
          subheading: "What is GPT-3?",
        },

        {
          paragraphs:
            "Beginning with the very fundamentals, GPT-3 represents Generative Pre-prepared Transformer 3-it's the third form of the device to be delivered [2]. To put it plainly, this implies it produces text utilizing calculations that are pre-prepared-they've just been taken care of everything of the information they require to do their assignment. In particular, they've been taken care of around 570 gb of text data accumulated by slithering the web (a freely accessible dataset known as Common Crawl) alongside different writings chose by OpenAI, including the content of Wikipedia. On the off chance that you ask it an inquiry, you would expect the most valuable reaction would be an answer. On the off chance that you request that it complete an assignment, for example, making a synopsis or composing a sonnet, you will get a rundown or a sonnet. All the more in fact, it has likewise been portrayed as the biggest counterfeit neural organization each made-I will cover that further down.",
        },

        {
          subheading: "What can GPT-3 do? ",
        },
        {
          paragraphs:
            "GPT-3 can make whatever has a language structure-which implies it can address questions, compose papers, sum up long messages, interpret dialects, take updates, and even make PC code. Actually, in one demo accessible on the web, it is demonstrated making an application that looks and capacities also to the Instagram application, utilizing a module for the product device Figma, which is broadly utilized for application plan [3]. This is, obviously, really progressive, and on the off chance that it ends up being usable and valuable in the long haul, it could have gigantic ramifications for the way programming and applications are created later on. As the code itself isn't accessible to the general population yet (more on that later), access is just accessible to choose engineers through an API kept up by OpenAI. Since the API was made accessible in June this year, models have developed of verse, composition, news reports, and inventive fiction. This article is  especially intriguing-where you can see GPT-3 creation a-very influential-endeavor at persuading us people that it doesn't mean any mischief. In spite of the fact that its automated genuineness implies it is compelled to concede that I realize that I won't have the option to abstain from wrecking mankind, if detestable individuals cause it to do as such!",
        },
        {
          subheading: "How accomplishes GPT-3 work? ",
        },
        {
          paragraphs:
            "As far as where it fits inside the overall classifications of AI applications, GPT-3 is a language expectation model. This implies it is an algorithmic structure intended to take one bit of language (an info) and change it into what it predicts is the most valuable after bit of language for the client. It can do this gratitude to the preparation investigation it has completed on the immense assortment of text used to pre-train it. Dissimilar to different calculations that, in their crude state, have not been prepared, OpenAI has just consumed the enormous measure of figure assets essential for GPT-3 to see how dialects work and are organized. The process time important to accomplish this is said to have cost OpenAI $4.6 million. To figure out how to manufacture language develops, for example, sentences, it utilizes semantic examination-contemplating the words and their implications, yet additionally assembling a comprehension of how the utilization of words contrasts relying upon different words likewise utilized in the content. It's additionally a type of AI named unaided learning on the grounds that the preparation information does exclude any data on what is a right or wrong reaction, similar to the case with managed learning. Everything of the data it requires to figure the likelihood that its yield will be what the client needs is assembled from the preparation messages themselves. This is finished by examining the use of words and sentences, at that point dismantling them and endeavoring to reconstruct them itself. For instance, during preparing, the calculations may experience the expression the house has a red entryway. It is then given the expression once more, however with a word missing –, for example, the house has a red X. It at that point filters the entirety of the content in its preparation information – many billions of words, organized into significant language-and figures out what word it should use to reproduce the first expression. First and foremost, it will most likely miss the point-conceivably a large number of times. Yet, inevitably, it will think of the correct word. By checking its unique info information, it will realize it has the right yield, and weight is doled out to the calculation cycle that gave the right answer. This implies it continuously realizes what strategies are destined to think of the right reaction later on. The size of this dynamic weighting measure is the thing that makes GPT-3 the biggest counterfeit neural organization ever made. It has been brought up that here and there, what it does isn't anything that new, as transformer models of language forecast have been around for a long time. Be that as it may, the quantity of loads the calculation powerfully holds in its memory and utilizations to handle each inquiry is 175 billionmultiple times more than its nearest rival, created by Nvidia ",
        },
        {
          subheading: "What are a portion of the issues with GPT-3?",
        },
        {
          paragraphs:
            "GPT-3's capacity to deliver language has been hailed as the best that has yet been found in AI; notwithstanding, there is some significant contemplation. The CEO of OpenAI himself, Sam Altman, has stated, The GPT-3 Hype is excessively. Simulated intelligence will change the world, yet GPT-3 is only an early impression. Firstly, it is a gigantically costly apparatus to utilize at this moment, because of the immense measure of figure power expected to do its capacity. This implies the expense of utilizing it would be past the financial plan of littler associations. Besides, it is a shut or discovery framework. Open AI has not uncovered the full subtleties of how its calculations work, so anybody depending on it to address questions or make items valuable to them would not, as things stand, be completely certain how they had been made. Thirdly, the yield of the framework is as yet not great. While it can deal with assignments, for example, making short  messages or fundamental applications, its yield turns out to be less valuable (actually, depicted as jabber) when it is approached to create something longer or more perplexing. These are unmistakably gives that we can hope to be tended to after some time-as figure power keeps on dropping in cost, normalization around transparency of AI stages is set up, and calculations are tweaked with expanding volumes of information. With everything taken into account, it's a reasonable end that GPT-3 produces results that are a far cry in front of what we have seen beforehand. Any individual who has seen the aftereffects of AI language realizes the outcomes can be variable, and GPT-3's yield verifiably appears as though a stage forward. At the point when we see it appropriately in the possession of people in general and accessible to everybody, its exhibition should turn out to be considerably more amazing.",
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
        blogtitle={`Digisquares | Revolutionizing`}
        blogheading={`Reinventing Data Warehouse`}
        blogdescription={`There's been a lot of publicity and energy in the fake intelligence (AI) world around a recently evolved innovation known as GPT-3.`}
        blogurl={`/blog/Revolutionizing`}
        blogimg={`/assets/AI-foto-generale.webp`}
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

export default Revolutionizing;
