import Link from 'next/link';
import styles from '../../nextweb/styles/comp/JupiterLanding.module.css';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <h2 className={styles.ctaTitle}>Ready to Code at Light Speed?</h2>
      <p className={styles.sectionSubtitle}>
        Join thousands of developers building with Jupiter CLI
      </p>

      <div className={styles.heroCta}>
        <Link href="#" className={`${styles.btn} ${styles.btnPrimary}`}>
          Start Building Now <span>→</span>
        </Link>
      </div>
    </section>
  );
}
