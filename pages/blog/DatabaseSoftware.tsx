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

const DatabaseSoftware = () => {
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
      title:
        "Price Indexes for PC Database Software and the Value of Code Compatibility",
      // subtitle: "August 12, 2021",
      link: "#",
      img1700: "/assets/Database.webp",
      img1024: "/assets/Database.webp",
      img768: "/assets/Database.webp",
      img320: "/assets/Database.webp",

      paragraph: [
        {
          subheading: "Introduction",
          paragraphs:
            "Information technology has become an important segment of production and services. For example, the German information technology (IT) market was valued at about 37 Billion ECU in 1994 - equivalent to 4.5 percent of Germany’s Gross Domestic Product. Most of these goods and services are demanded by firms, but the household share of IT consumption has been increasing lately. During the last decades, product and service quality has changed dramatically in the information technology market, particularly in computer hardware and software. At the same time, nominal prices have either decreased slightly or just maintained their level. It is well-known by now that in the presence of substantial changes in product and service quality, standard methods of computing price indexes may lead to biased results (Griliches 1971). Such biases can have a number of drastic consequences and may be particularly relevant for the formulation of research policies. For example, studies of productivity growth depend crucially on the availability of correct price index series. The impact of IT on productivity growth has caught the attention of many researchers and policy-makers, but any results obtained on the basis of questionable price indexes (either on the input or output side) will not provide conclusive evidence of the impact of, say, the application of modern computer hardware and software.1 Moreover, the results of international comparisons are likely to be distorted by the use of price indexes originating from different methods of calculation.",
        },
        {
          subheading: "Theoretical Background",
        },
        {
          paragraphs:
            "Statistical agencies often use the matched-model method to compute price series. The resulting indexes are also referred to as chained price indexes. This procedure is described in detail by Triplett (1990) for the United States and in Szenzenstein (1995) for Germany. In essence, the price index is computed as the ratio of successive prices for the same good (or bundle of goods). Obviously, in employing the matched model approach a decision has to be made whether a given product is similar enough to some product from the previous period such that a link can be established. The price index is then computed as a weighted average over all price changes computed from linked products. This classical method is appropriate for products that maintain their quality charateristics over time either fully or to a large event. Thus, computing price indexes for commodities like crude oil, cement, or grain, to give just a few examples, is indeed a relatively simple task.",
        },
        {
          subimages: "/assets/DatabaseSoftware_Main.webp",
        },
        {
          subheading: "Data on PC Database Products and Variable Definitions",
          paragraphs:
            "The empirical use of hedonic techniques to construct price indexes requires detailed information on prices and quality-related product characteristics. To study the relationship between quality and product price, we collected a relatively large dataset on PC database software products that were sold from 1986 to 1994 in the Federal Republic of Germany. Only products that included German language support and a German language manual were selected. This restriction excludes a number of products like Quicksilver or dbXL that were imported from the US, but  only available in an English language version. These products were of some importance in the US market, but never gained commercial relevance in Germany. Moreover, we confined our efforts to construct price-indexes for PC database software compatible with MS-DOS. Products for the Macintosh and other computers not compatible with MS-DOS were not included. Furthermore, we excluded software packages that were exclusively compatible with MS-WINDOWS or OS/2 operating systems. ",
        },
        {
          subheading:
            "Relevant Quality Characteristics and Definitions of Variables",
          paragraphs:
            "Hedonic regressions require information on the product’s quality characteristics as independent variables. Typically, product quality is difficult to observe retrospectively, since information on previous versions of a software product is hard to obtain. For the purpose of this study, the relevant quality information had to be combined from various sources. Several computer magazines8 were consulted for tests and product specifications. Manuals and documentation were collected and searched for information. In some cases, we simply obtained an old version of the respective product and generated the required data via experimentation.9 In our hedonic regressions, we concentrate on four dimensions of quality and attempt to measure the software product’s quality using objectively measurable characteristics of the product.",
        },
        {
          subheading: "Price Indexes",
          paragraphs:
            "Three sets of regression results are summarized in Table 1. In column (1), we simply regress the price variable on time dummies. The dummy variables then reflect the decline of average prices in our sample. The results show that by 1994, average prices had declined by about 35 percent from their initial 1986 levels. While we can compute a price index on the basis of these dummies, that index would be subject to the criticism that quality improvements are not taken into account. It will therefore merely serve as a baseline result against which our hedonic estimates computed from the results in columns (2) and (3) can be compared.",
        },
        {
          subheading: "Matched-Model Indexes",
          paragraphs:
            "To test for differences between the hedonic index and indexes based on the matched-model procedure, we apply the latter at three different levels of aggregation. First, we establish links at the level of software versions, i.e. we deem products comparable only if the version of the software remains the same. At the product level, we disregard differences between versions, but we consider dBASEIII, dBASEIV and dBASEV as distinct products. Finally, disregarding different products, we only compute prices at the brand level which assures that there are virtually no missing price data due to new products, except in cases when a new brand is introduced or another brand exits the market. Again, we use the number of observations at any particular level of aggregation to generate a weighting scheme, since the advertising behavior of the producers is likely to reflect their relative market position.",
        },
        {
          subheading: "Conclusions",
          paragraphs:
            "The results of this study demonstrate that quality-adjusted prices for PC databasesoftware in Germany have declined by about 7.4 percent during the past nine years. But the average annual price decline is only about one third of the average annual rate that has been observed for PC hardware in the United States. Similarly, another study of software prices (Gandal 1994) arrives at an estimate for the average price decline of 14 percent per annum in the case of spreadsheet packages. While there may also be differences in the market structures between the US and Germany there are also product specific differences. The market for spreadsheets has grown faster and earlier than the market for database software. As software production has high fixed cost for development and low variable production cost, one would expect stronger price decline in larger markets. The difference between the findings of Gandal and our results may also be explained by the fact that Gandal uses list prices while we are using transaction prices. In Germany and in the U.S., software producers were forced to bring down list prices because list prices were about two or three times higher than the respective „street“ prices. Assuming that the companies’ policy on list prices has been a global one, we would expect a sharper price decline in list prices than in street prices.",
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
        blogtitle={`Digisquares | Database Software`}
        blogheading={`Price Indexes for PC Database Software and the Value of Code Compatibility`}
        blogdescription={`Information technology has become an important segment of production and services`}
        blogurl={`/blog/DatabaseSoftware`}
        blogimg={`/assets/Database.webp`}
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
              <div className={Styles.AnotherLink}>
                Also Read:
                <Link legacyBehavior href="/ManagedDatabases">
                  &nbsp;Learn more about how to manage a database
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

export default DatabaseSoftware;
