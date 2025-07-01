import styles from '../../nextweb/styles/comp/JupiterLanding.module.css';

export default function Stats() {
  const stats = [
    { number: '50K+', label: 'Active Developers' },
    { number: '2M+', label: 'Lines Generated' },
    { number: '10x', label: 'Faster Development' },
    { number: '99.9%', label: 'Uptime' },
  ];

  return (
    <section className={styles.stats}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Trusted by Developers</h2>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div className={styles.statItem} key={index}>
            <div className={styles.statNumber}>{stat.number}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
