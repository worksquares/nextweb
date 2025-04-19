import { useState } from "react";
import { BlogHomeheaderProps } from "../../comp/base/BlogHomeCard";
import { BlogRightContainProps } from "../../comp/base/BlogRightImgCard";
import { BlogTopicsContainProps } from "../../comp/base/BlogTopicsCard";
import BaseLayout from "../../comp/BaseLayout";
import { BlogLists } from "../../comp/BlogData";
import BlogHome from "../../comp/BlogHome";
import BlogRightImg from "../../comp/BlogRight";
import BlogTopicContent from "../../comp/BlogTopicsContent";
import Screen from "../../comp/Screen";
import styles from "../../styles/Blog.module.css";
import Headseo from "../headseo";

const Blog = () => {
  let BlogHomeCardListData: BlogHomeheaderProps[] = [];
  // {
  //   let i = 0;
  //   BlogLists.map((Data) => {
  //     if (Data.Latest == true) {
  //       BlogHomeCardListData.push({
  //         title: i == 0 ? "Latest" : null,
  //         img320: Data.Img,
  //         para: Data.Desc,
  //         links: Data.URL,
  //       });
  //     }
  //     i = 1;
  //   });
  // }

  // Filter for topic
  {
    let k = 0;
    BlogLists.filter((Tagdata) => {
      if (Tagdata.Tagname.includes("Database Management")) {
        BlogHomeCardListData.push({
          title: k == 0 ? "Database Management" : null,
          img320: Tagdata.Img,
          para: Tagdata.Desc,
          links: Tagdata.URL,
        });
        k = 1;
      }

      //  else if (Tagdata.year.valueOf(2022)) {
      //   BlogHomeCardListData.push({
      //     title: k == 0 ? "Database Management" : null,
      //     img320: Tagdata.Img,
      //     para: Tagdata.Desc,
      //     links: Tagdata.URL,
      //   });
      //   k = 1;
      // }
    });
  }

  let BlogRightCardListData: BlogRightContainProps[] = [];
  {
    let j = 0;
    BlogLists.map((DataList) => {
      if (DataList.Featured == true) {
        BlogRightCardListData.push({
          title2: j == 0 ? "Features" : null,
          image320: DataList.Img,
          paragraph: DataList.Desc,
          links: DataList.URL,
        });
        j = 2;
      }
    });
  }

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
      title2: "Year",
      list2: [{ lists2: "2023" }],
    },
  ];

  const [home, setHome] = useState(true);

  const ChangeHome = () => {
    setHome(true);
  };

  return (
    <div>
      <Headseo
        blogtitle={`Digisquares | Blog`}
        blogheading={`Blog`}
        blogdescription={`Yes, agility is still critical to business success, says IDCl`}
        blogurl={`/more/Blog`}
        blogimg={`/assets/blogimg22.webp`}
      />
      <BaseLayout>
        <div></div>
        <div className={styles.BlogContain}>
          {home ? (
            <Screen>
              <span id="BlogHome">
                <div className={styles.tapnews}>
                  <div className={styles.Maintab}>
                    <BlogHome BlogPostItem={BlogHomeCardListData} />
                  </div>
                  <div className={styles.BlogtapRight}>
                    <BlogRightImg
                      BlogRightCardPropsList={BlogRightCardListData}
                    />
                    <BlogTopicContent
                      BlogTopicCardPropsList={BlogTopicCardListData}
                    />
                  </div>
                </div>
              </span>
            </Screen>
          ) : null}
        </div>
      </BaseLayout>
    </div>
  );
};

export default Blog;
