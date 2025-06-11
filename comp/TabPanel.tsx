import { useState } from 'react';
import { LearnMoreButton } from '../components/Button';
import styles from "../styles/comp/TabPanel.module.css";
import ImageLeftRight from './ImageLeftRight';
import Screen from "./Screen";

const TabPanel = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0); // default to first tab

  return (
    <div>
      <Screen>
        {/* MOBILE TABS (All tabs shown) */}
        <div className={styles.tabcontianermobile}>
          {tabs.map((tab, index) => (
            <ImageLeftRight
              key={tab.title || `tab-${index}`} // key fix
              ImageCardPropsList={tab.ImageCardPropsList}
            />
          ))}
        </div>

        {/* DESKTOP TAB BUTTONS */}
        <div className={styles.navContainer}>
          {tabs.map((tab, index) => (
            <LearnMoreButton
              key={tab.title || `btn-${index}`} // key fix
              text={<span>{tab.title}</span>}
              onClick={() => setActiveTab(index)}
              className={`${styles.tabButton} ${activeTab === index ? styles.tabButtonActive : ""}`}
              hoverBgColor="transparent"
              hoverTextColor="#003c57"
              height="60px"
            />
          ))}
        </div>

        {/* ACTIVE TAB CONTENT DISPLAY */}
        <div className={styles.ContentDisplay}>
          <ImageLeftRight
            key={tabs[activeTab].title || `active-${activeTab}`} // optional but safe
            ImageCardPropsList={tabs[activeTab].ImageCardPropsList}

          />
        </div>
      </Screen>
    </div>
  );
};

export default TabPanel;
