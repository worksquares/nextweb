import { Collapse } from "antd";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/comp/FAQComponent.module.css";
import Screen from "./Screen";


const { Panel } = Collapse;

const FAQComponent = ({ faqData }) => {
  const [activeKeys, setActiveKeys] = useState([]);

  const onChange = (key) => {
    setActiveKeys(key);
  };

  return (
    <div className={styles.faq}>
      <Screen>
        <h2 className={styles.faqHeader}>Need a hand? We've got you</h2>
        <div className={styles.faqContainer}>
          {faqData.map((item) => (
            <div key={item.key} className={styles.faqItem}>
              <Collapse
                expandIconPosition="end"
                bordered={false}
                activeKey={activeKeys}
                onChange={(key) => onChange(key)}
                expandIcon={({ isActive }) => (
                  // <img
                  //   src="/svg/ArrowDown.svg"
                  //   alt="arrow icon"
                  //   style={{
                  //     transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                  //   }}
                  // />
                  <Image
                    src="/svg/ArrowDown.svg"
                    alt="arrow icon"
                    priority={true}
                    width={25}
                    height={25}
                    layout="responsive"
                    unoptimized={false}
                    style={{
                      transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                    className={styles.ArrowRotate}
                  />
                )}
                className={styles.siteCollapseCustomCollapse}
              >
                <Panel
                  header={item.question}
                  key={item.key}
                  className={styles.siteCollapseCustomPanel}
                >
                  <p>{item.answer}</p>
                </Panel>
              </Collapse>
            </div>
          ))}
        </div>
      </Screen>
    </div>
  );
};

export default FAQComponent;
