import React from "react";
import Styles from "../../styles/comp/core/BlogTopicsCard.module.css";
import Link from "next/link";

export interface BlogTopicsContainProps {
  title?: string;
  title2?: string;
  list: any[];
  list2: listcontent2[];
}
export interface listcontent {
  lists: string;
  links?: string;
}
export interface listcontent2 {
  lists2: string;
}

const BlogTopicsCard = ({
  title,
  list,
  title2,
  list2,
}: BlogTopicsContainProps) => {
  return (
    <div>
      <div className={Styles.BlogTopics}>
        <h2>
          <span>{title}</span>
        </h2>
        <div className={Styles.topictitle}>
          {list.map((listcontent) => (
            <ul
              key={listcontent.lists}
              style={{ width: "100%" }}
              className={Styles.TopicLinks}
            >
              <li>
                {/* <Link legacyBehavior href={`/blog${listcontent.links}`} passHref>
                  <a>{listcontent.lists}</a>
                </Link> */}
                <p>{listcontent.lists}</p>
              </li>
              {/* <ul className={styles.TopicLinks}>
                    <li>
                      <Link legacyBehavior href="/solutions/ProcessAutomation/">
                        <a>Process Automation</a>
                      </Link>
                    </li>
                  </ul> */}
            </ul>
          ))}
        </div>

        {/* <div className={Styles.topicyear}>
          <h2>
            <span>{title2}</span>
          </h2>
          {list2.map((listcontent2) => (
            <ul key={listcontent2.lists2} className={Styles.TopicLinks}>
              <li>
                <p>{listcontent2.lists2}</p>
              </li>
            </ul>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default BlogTopicsCard;
