import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Screen from '../comp/Screen';
import styles from '../styles/comp/StudioSection.module.css';
import { LearnMoreButtonLink } from './Button';

interface StudioCardProps {
  title: string;
  description: string;
  backgroundColor: string;
  link: string;
}

interface StudioSectionProps {
  cardsData: StudioCardProps[];
}

const StudioCard: React.FC<StudioCardProps> = ({ title, description, backgroundColor, link }) => {
  return (
    <div className={styles.studioCard} style={{ backgroundColor }}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttonWrapper}>
        <LearnMoreButtonLink
          text={<>
            <span style={{ fontWeight: 700 }}>Learn more</span>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{
                fontSize: '18px',
                marginLeft: '10px',
                verticalAlign: 'middle',
                color: '#fff',
                width: '15px',
                height: '15px',
              }} />
          </>}
          // bgColor="#ffffff"
          bgColor="transparent"
          height="40px"
          width="175"
          color="#fff"
          fontsize="18px"

          onClick={() => window.location.href = link}
          className={styles.learnMoreButtonLink}
        />
      </div>
    </div>
  );
};

const StudioSection: React.FC<StudioSectionProps> = ({ cardsData }) => {
  return (
    <Screen>
      <div className={styles.studioSection}>
        <h2 className={styles.sectionHeading}>Products</h2> {/* Added heading */}
        <div className={styles.cardWrapper}>
          {cardsData.map((card, index) => (
            <StudioCard key={index} {...card} />
          ))}
        </div>
      </div>
    </Screen>
  );
};

export default StudioSection;
