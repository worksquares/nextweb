import styles from '../../nextweb/styles/comp/JupiterLanding.module.css';

export default function Demo() {
  return (
    <section className={styles.demo} id="demo">
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>See It In Action</h2>
        <p className={styles.sectionSubtitle}>
          Watch Jupiter build a full-stack application
        </p>
      </div>

      <div className={styles.terminal}>
        <div className={styles.terminalHeader}>
          <div className={styles.dotred}></div>
          <div className={styles.dotyellow}></div>
          <div className={styles.dotgreen}></div>
        </div>
        <div className={styles.terminalBody}>
          <div className={styles.terminalLine}>
            <span className={styles.prompt}>$</span>{' '}
            <span className={styles.command}>
              jupiter create app social-network --stack mern
            </span>
          </div>
          <div className={styles.terminalLine}>
            <span className={styles.output}>🧠 Analyzing requirements...</span>
          </div>
          <div className={styles.terminalLine}>
            <span className={styles.output}>📦 Setting up MERN stack...</span>
          </div>
          <div className={styles.terminalLine}>
            <span className={styles.output}>🔐 Implementing authentication...</span>
          </div>
          <div className={styles.terminalLine}>
            <span className={styles.output}>📝 Creating post management...</span>
          </div>
          <div className={styles.terminalLine}>
            <span className={styles.output}>💬 Building real-time chat...</span>
          </div>
          <div className={styles.terminalLine}>
            <span className={`${styles.output} ${styles.success}`}>
              ✅ Project created successfully!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
