import Link from 'next/link';
import styles from '../../nextweb/styles/comp/JupiterLanding.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerBrand}>
          <Link
            href="https://www.digisquares.com/"
            className={styles.footerLogo}
            target="_blank"
            rel="noopener noreferrer"
          >
            DIGISQUARES
          </Link>
          <p className={styles.footerDescription}>
            Building the future of AI-powered development tools.
            <br />
            Empowering developers to create amazing software faster.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.footerColumn}>
            <h4>Product</h4>
            <ul>
              <li><Link href="#features">Features</Link></li>
              <li><Link
                // https://docs.jupiter-cli.com
                href="https://docs.digisquares.com/">Documentation</Link></li>
              <li><Link href="/pricing/AppStudio">Pricing</Link></li>
              <li><Link href="/changelog">Changelog</Link></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Resources</h4>
            <ul>
              <li><Link href="/more/Blog/">Blog</Link></li>
              <li><Link href="/tutorials">Tutorials</Link></li>
              <li><Link href="/community">Community</Link></li>
              <li><Link href="/support">Support</Link></li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/contact/ContactUs/">Contact</Link></li>
              <li><Link href="/legal/Privacy">Privacy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2025 DigiSquares. All rights reserved.</p>
      </div>
    </footer>
  );
}
