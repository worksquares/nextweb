import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from '../../nextweb/styles/comp/JupiterLanding.module.css';

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Link href="#" className={styles.navLogo}>
          ⚡ Jupiter CLI
        </Link>

        {/* Desktop Links */}
        {!isMobile && (
          <ul className={styles.navLinks}>
            <li>
              <Link href="#features" >Features</Link>
            </li>
            <li>
              <Link href="#demo">Demo</Link>
            </li>
            <li>
              <Link
                href="https://docs.digisquares.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/digisquares/jupiter-cli"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Link>
            </li>
          </ul>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '24px',
              color: '#22c55e',
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && menuOpen && (
        <ul className={styles.mobileMenu}>
          <li>
            <Link href="#features" onClick={closeMenu}>Features</Link>
          </li>
          <li>
            <Link href="#demo" onClick={closeMenu}>Demo</Link>
          </li>
          <li>
            <Link
              href="https://docs.digisquares.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Documentation
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/digisquares/jupiter-cli"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              GitHub
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
