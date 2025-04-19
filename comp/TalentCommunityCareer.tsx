import React from "react";
import styles from "../styles/comp/TalentCommunityCareer.module.css";
import { TitleHoverProps } from "./base/TitleHover";
import TitleHoverGrid from "./TitleHoverGrid";
import { AnotherContainProps } from "./base/AnotherImgCard";
import AnotherImgCardGrid from "./AnotherImg";

const TalentCommunityCareer = () => {
  let TitleHoverGridData: TitleHoverProps[] = [
    { icon: "/assets/ExploreMoreconList1.webp", titlelink: "Diversity, Inclusion, and Belonging" },
    { icon: "/assets/ExploreMoreconList2.webp", titlelink: "Global Impact" },
    { icon: "/assets/ExploreMoreconList3.webp", titlelink: "Code od Ethics" },
  ];

  let AnotherimgListData: AnotherContainProps[] = [
    {
      title: "Stay connected",
      paragraph:
        "Whether you want to learn more about ServiceNow, are waiting for the right position to open up, or simply want to receive company updates, take the first step to connect by completing our simple sign‑up form.",
      btn: "Join Our Talent Community",
      link: "Get Details",
      img1700: "/assets/StayConnected.webp",
      img1024: "/assets/StayConnected.webp",
      img768: "/assets/StayConnected.webp",
      img320: "/assets/StayConnected.webp",
      dir: "left",
    },
  ];

  return (
    <div className={styles.TalentCommunityMainContainer}>
      <div className={styles.TalentCommunityStayConnected}>
        <AnotherImgCardGrid AnotherCardPropsList={AnotherimgListData} />
      </div>
      <div className={styles.TalentCommunityExploreMore}>
        <h2>Explore more</h2>
        <div className={styles.ExploreMoreIconsContainer}>
          <TitleHoverGrid TitleHoverPropsList={TitleHoverGridData} />
        </div>
      </div>
      <div className={styles.ExploreMorePara}>
        <p>
          ServiceNow is an Equal Employment Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, creed, religion, sex, sexual
          orientation, national origin or nationality, ancestry, age, disability, gender identity or expression, marital status, veteran status or any other category protected by law.
        </p>
        <p>
          ©2020 FORTUNE Media IP Limited. All rights reserved. Used under license. Future 50 is a trademark of FORTUNE Media IP Limited and is used under license. FORTUNE and FORTUNE Media IP Limited
          are not affiliated with, and do not endorse products or services of, ServiceNow.
        </p>
        <p>
          ©2021 FORTUNE Media IP Limited. All rights reserved. Used under license. FORTUNE and FORTUNE World’s Most Admired Companies are registered trademarks of FORTUNE Media IP Limited and are used
          under license. FORTUNE is not affiliated with, and does not endorse the products or services of, ServiceNow.
        </p>
      </div>
    </div>
  );
};

export default TalentCommunityCareer;
