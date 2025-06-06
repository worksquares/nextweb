import { useState } from 'react';
import { LearnMoreButton } from '../components/Button';
import styles from "../styles/comp/TabPanel.module.css";
import ImageLeftRight from './ImageLeftRight';
import Screen from "./Screen";

const TabPanel = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <Screen>
      <div className={styles.tabcontianermobile}>
        {tabs.map((tabs)=>(<ImageLeftRight ImageCardPropsList={tabs.ImageCardPropsList} />)) }
      </div>
        <div className={styles.navContainer}>
          {tabs.map((tab, index) => (
            // <button
            //   key={index}
            //   className={`${styles.navButton} ${activeTab === index ? styles.active : ''}`}
            //   onClick={() => setActiveTab(index)}
            // >
            //   {tab.title}
            // </button>

            <LearnMoreButton
            text={<span>{tab.title}</span>}
            onClick={() => setActiveTab(index)}
            className={`${styles.tabButton} ${activeTab === index ? styles.tabButtonActive : ""}`}
          />




          ))}
        </div>

        {/* Content Display */}
        <div className={styles.ContentDisplay}>
          <ImageLeftRight ImageCardPropsList={tabs[activeTab].ImageCardPropsList} />
        </div>
      </Screen>
    </div>
  );
};

export default TabPanel;
