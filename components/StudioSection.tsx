import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Screen from '../comp/Screen';
import styles from '../styles/comp/StudioSection.module.css';
import { LearnMoreButton } from './Button/Button';

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
        <LearnMoreButton
          text={<>
            <span style={{ fontWeight: 700 }}>Learn more</span>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{
                fontSize: '15px',
                marginLeft: '10px',
                verticalAlign: 'middle',
                color: '#000000',
                width: '15px',
                height: '15px',
              }} />
          </>}
          bgColor="#ffffff"
          color="#000000"
          onClick={() => window.location.href = link}
          className={styles.learnMoreButton}
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
