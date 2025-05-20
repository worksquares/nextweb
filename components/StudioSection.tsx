import React from 'react';
import Screen from '../comp/Screen';
import styles from '../styles/comp/StudioSection.module.css';

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
      <a href={link} style={{ textDecoration: 'none' }} className={styles.learnMoreLink}>
        <button className={styles.learnMoreButton}>Learn more →</button>
      </a>
    </div>
  );
};

const StudioSection: React.FC<StudioSectionProps> = ({ cardsData }) => {
  return (
      <Screen>
    <div className={styles.studioSection}>
      {cardsData.map((card, index) => (
        <StudioCard key={index} {...card} />
      ))}
    </div>
      </Screen>
  );
};

export default StudioSection;
