import React from 'react';
import styles from '../styles/comp/StudioSection.module.css'

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
      <h1 className={styles.title}>{title}</h1>
      <p style={{fontSize:18}}className={styles.description}>{description}</p>
      <a href={link} style={{ textDecoration: 'none',marginLeft:"200px" }}>
        <button className={styles.learnMoreButton}>Learn more →</button>
      </a>
    </div>
  );
};

const StudioSection: React.FC<StudioSectionProps> = ({ cardsData }) => {
  return (
    <div className={styles.studioSection}>
      {cardsData.map((card, index) => (
        <StudioCard key={index} {...card} />
      ))}
    </div>
  );
};

export default StudioSection;

