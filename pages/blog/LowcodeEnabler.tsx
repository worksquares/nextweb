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

const LowcodeEnabler = () => {
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
        "Low-Code as Enabler of Digital Transformation in Manufacturing Industry",
      // subtitle: "August 12, 2021",
      link: "#",
      img1700: "/assets/ImgMain.webp",
      img1024: "/assets/ImgMain.webp",
      img768: "/assets/ImgMain.webp",
      img320: "/assets/ImgMain.webp",

      paragraph: [
        {
          subheading: "Introduction",
          paragraphs:
            "Currently, enterprises have to face increasingly dicult problems due to the increasing complexity of their internal operations and the number and intensity of the relationships between the company and the entities of its supply network. Moreover, the changing market means enterprises need a rapid and flexible response to fulfil the variable requirements of the environment. For this reason, companies require the capacity to withstand the stresses of environmental loading. This capacity has been defined as enterprise resilience. Sanchis and Poler defines it as the capacity to prevent and anticipate to change enterprises’ nature and adapt to the changing environment; and to respond to the dynamic requirements.",
        },
        {
          paragraphs:
            "The term “low-code” was firstly coined by Forrester Research in 2014, which states that firms prefer to choose low-code alternatives for fast, continuous, and test-and-learn delivery. Low-code development platforms are ecosystems with which apps can be developed, minimizing hand-code definition manually, because it is already built and prefigured. Low-code development platforms emphasize visual interfaces to enable people, without a technological background, to create and deploy business apps with relative ease. The main objective of the low-code development platforms is to allow enterprises to develop apps without complex engineering facilitating their configuration, and then achieving, rapidity and agility. Moreover, these platforms also over enterprises a more economical way to fulfil the market and/or enterprises internal requirements. With the low-code development platforms, enterprises can create programs or apps for mobile or desktop devices, multifunctional and with high information-management capabilities.",
        },
        {
          subheading: "Scientific Literature Review",
          paragraphs:
            "Study is focused on the technical question and answer platforms, such as Stack Overflow. This platform is an instrument for users to ask and answer questions related to a wide variety of programming topics. Moreover, it overs hundreds of thousands of lines of source code that can be used by developers. One of the objectives of this study is to identify barriers that hinder code reuse. After an exploratory study and a survey, the authors found 3 main barriers to reuse code from Stack Overflow: ",
        },
        {
          subheading: "",
          paragraphs:
            "(i) too much code modification required to fit in their projects,",
        },
        {
          subheading: "",
          paragraphs: "(ii) incomprehensive code, low-code quality. ",
        },
        {
          subheading: "",
          paragraphs:
            "(iii) This third barrier requires the need for next-generation Q&A platforms to improve or verify the code quality of source code snippets and highlights the current importance of the low-code.",
        },
        {
          subimages: "/assets/LowCode 1.webp",
        },
        {
          paragraphs:
            "One of the results found in the literature is a summary-report of the Forum session at the 2018 Enterprise EngineeringWorking Conference (EEWC 2018). In this report, it is highlighted the use of low-code development platforms to further increase the speed and robustness of the digital transformation by a gradual expansion of the meta-model of the enterprise design approach, continuously applied on real-life cases.",
        },
        {
          subheading: "Context Analysis",
          paragraphs:
            "Software and apps development is increasingly necessary to deal with the great amount of information and data (big data) that companies have to manage, which is also becoming a more complex process. In order to facilitate the software and apps development, companies specialised in software development are demanding a higher level of automation in their software development work. Moreover, currently dierent technologies have become more accessible for non-professional users. In consequence, there is an increasingly need for more ecient methods and tools for automatically developing and maintaining computer systems . To deal with these needs, in the late 1980s the concept of computer-aided software engineering (CASE) emerged",
          subimages: "/assets/LowCode 2.webp",
        },
        {
          subheading: "Other Information Sources",
          paragraphs:
            "As the number of results obtained in the search performed in scientific databases is scarce, due to the novelty of this domain, alternative information sources are used to analyse the current status of the low-code paradigm. For this purpose, Google Academic is the information source selected. The number of results found is higher than in the other two scientific databases.",
          subimages: "/assets/LowCode 3.webp",
        },
        {
          paragraphs:
            "When the search is more narrowed down, adding “application, “platform” and “app” to the set of originals keywords (“low-code”), the number of results decreases considerably. Moreover, it is worth mentioning that more than 40% of the results identified in the search do not correspond to the purpose of the present research, as they are focused on the low code-rates when they are studying the error corrections codes. This concept is used for controlling errors in data over unreliable or noisy communication channels. To avoid problems, redundant bits are added to support the decodification and find out the true message encoded in the communication. The code-rate is defined as the ratio between the number of information bits and the total number of bits in a specific communication channel.",
        },
        {
          subheading: "Low-Code Development Platforms",
          subimages: "/assets/LowCode 4.webp",
          paragraphs:
            "Whilst a visual programming language (VPL) is any programming language allowing software developers to craft programs and applications by graphically manipulating elements rather than by hand-coding a low-code development platform is a software environment that allows these software developers to create application software through user interfaces (UIs) and configuration instead of traditional computer programming. In other words, VPL allows programming with visual expressions, or spatial arrangements of text and graphic symbols, while low-code development platforms may focus on design and development of a particular kind of application: such as databases, business processes, or user interfaces such as web applications.",
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
        blogtitle={`Digisquares | LowCode Enabler`}
        blogheading={`Low-Code as Enabler of Digital Transformation in Manufacturing Industry`}
        blogdescription={`Currently, enterprises have to face increasingly dicult problems due to the increasing complexity of their internal operations and the number and intensity of the relationships between the company and the entities of its supply network.`}
        blogurl={`/blog/LowcodeEnable`}
        blogimg={`/assets/ImgMain.webp`}
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

export default LowcodeEnabler;
