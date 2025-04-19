import React, { useState } from 'react';
import ImageLeftRight from './ImageLeftRight';
import Screen from "./Screen";
import styles from "../styles/comp/TabPanel.module.css";
import HomePanel from './HomePanel';

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
            <button
              key={index}
              className={`${styles.navButton} ${activeTab === index ? styles.active : ''}`}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
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
