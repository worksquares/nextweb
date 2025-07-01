import { useEffect } from 'react';
import styles from '../../nextweb/styles/comp/JupiterLanding.module.css';
import Link from 'next/link';

export default function Hero() {
  useEffect(() => {
    const box = document.querySelector(`.${styles.installBox}`);
    if (!box) return;

    box.addEventListener('click', () => {
      navigator.clipboard.writeText('npm install -g @digisquares/jupiter-cli');
      const textEl = box.querySelector(`.${styles.installText}`) as HTMLElement;
      const cursor = box.querySelector(`.${styles.cursorBlink}`) as HTMLElement;
      const original = textEl.textContent || '';
      textEl.textContent = 'Copied to clipboard!';
      cursor.style.display = 'none';
      setTimeout(() => {
        textEl.textContent = original;
        cursor.style.display = 'inline-block';
      }, 2000);
    });
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.jupiterSystem}>
        <div className={styles.jupiter}></div>
        <div className={styles.jupiterRing}></div>
        <div className={`${styles.moon} ${styles.moon1}`}></div>
        <div className={`${styles.moon} ${styles.moon2}`}></div>
        <div className={`${styles.moon} ${styles.moon3}`}></div>
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>JUPITER CLI</h1>
        <p className={styles.heroSubtitle}>AI-Powered Coding Assistant</p>

        <div className={styles.installBox}>
          <span className={styles.installText}>
            npm install -g @digisquares/jupiter-cli
          </span>
          <span className={styles.cursorBlink}></span>
        </div>

        <div className={styles.heroCta}>
          <Link href="#" className={`${styles.btn} ${styles.btnPrimary}`}>
            Get Started <span>→</span>
          </Link>
          <Link href="#demo" className={`${styles.btn} ${styles.btnSecondary}`}>
            Watch Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
