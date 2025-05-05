import React from "react";
import Screen from "./Screen";
import { Layout, Tabs, Typography } from "antd";
import styles from "../styles/comp/HomeTab.module.css";
import CustomImage from "../@/components/customImage";
import { url } from "inspector";
import Image from "next/image";
const { Title } = Typography;
const { TabPane } = Tabs;

const HomeTab = ({ tabData }) => {
  const tabs = tabData;

  return (
    <div className={styles.homeTab}>
      <Screen>
        <Tabs className={styles.HomeTabWeb} type="card" defaultActiveKey="1">
          {tabs.map((tab) => (
            <TabPane
              tab={tab.tabTitle}
              key={tab.key}
              className={styles.tabPane}
            >
              <Layout className={styles.container}>
                <div className={styles.videoContainer}>
                  <CustomImage
                    type="tab"
                    src={tab.videoUrl.replace(".mp4", ".svg")}
                    alt={tab.tabTitle}
                    className={styles.imagePlaceholder}
                  />
                </div>
                <div className={styles.contentContainer}>
                  <Title className={styles.title} level={3}>
                    {tab.title}
                  </Title>
                  <p className={styles.paragraph}>{tab.description}</p>
                  <a
                    href={tab.link}
                    target="_blank"
                    className={styles.learnMoreButton}
                  >
                    Learn More
                    <Image
                      src="/svg/arrow.svg"
                      alt="Arrow Icon"
                      className={styles.arrowIcon}
                      width={20}
                      height={20}
                    />
                  </a>
                </div>
              </Layout>
            </TabPane>
          ))}
        </Tabs>
        {tabs.map((tab) => (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div className={styles.HomeTabMob}>
              <div className={styles.HomeTabMob_Img}>
                {tab.tabTitle === "Integrations" ? (
                  // <img
                  //   style={{ objectFit: "none" }}
                  //   src={tab.videoUrl}
                  //   alt="Tab Image"
                  // />
                  <Image
                    src={tab.videoUrl}
                    alt="Tab Image"
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    src={tab.videoUrl}
                    alt="Tab Image"
                    width={20}
                    height={20}
                  />
                )}
              </div>

              <div className={styles.HomeTabMob_Description}>
                <Title className={styles.title} level={3}>
                  {tab.title}
                </Title>
                <p className={styles.paragraph}>{tab.description}</p>
                <a
                  href={tab.link}
                  target="_blank"
                  className={styles.learnMoreButton}
                >
                  Learn More
                  <Image
                    src="/svg/arrow.svg"
                    alt="Arrow Icon"
                    className={styles.arrowIcon}
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Screen>
    </div>
  );
};

export default HomeTab;
