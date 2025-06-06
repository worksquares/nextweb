import React from "react";
import styles from "../styles/comp/Footer.module.css";
import Link from "next/link";
import Screen from "./Screen";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footermain}>
        <Screen>
          <h2 className={styles.footerHeading}>Footer</h2>
          <div className={styles.footermaincontent}>
            <div className={styles.footerblogs}>
              <div className={styles.footerblogsfirst}>
                <Image
                  className={styles.footerImg}
                  width="200"
                  height="200"
                  src="/assets/DigiLogo.webp"
                  alt="Company name"
                />
                <div className={styles.footerInfo}>
                  <p style={{ color: "#777777" }}>
                    Our mission is to empower users to easily turn great ideas
                    into powerful business applications with less resources and
                    time.
                  </p>
                  <div className={styles.footerblogimg}>
                    <Link
                      legacyBehavior
                      href="https://www.facebook.com/digisquares/"
                    >
                      <a>
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                        >
                          <title>Facebook</title>
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    </Link>
                    <Link
                      legacyBehavior
                      href="https://www.youtube.com/channel/UC10Kqzxy547k75Kbnz-12hA/featured"
                    >
                      <a>
                        <span className={styles.footerHeading}>Youtube</span>
                        <svg
                          fill="currentColor"
                          height="100%"
                          version="1.1"
                          viewBox="0 0 512 512"
                          width="100%"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm153.315,178.978c-3.68,-13.769 -14.522,-24.61 -28.29,-28.29c-24.958,-6.688 -125.025,-6.688 -125.025,-6.688c0,0 -100.067,0 -125.025,6.688c-13.765,3.68 -24.61,14.521 -28.29,28.29c-6.685,24.955 -6.685,77.024 -6.685,77.024c0,0 0,52.067 6.685,77.02c3.68,13.769 14.525,24.614 28.29,28.293c24.958,6.685 125.025,6.685 125.025,6.685c0,0 100.067,0 125.025,-6.685c13.768,-3.679 24.61,-14.524 28.29,-28.293c6.685,-24.953 6.685,-77.02 6.685,-77.02c0,0 0,-52.069 -6.685,-77.024Zm-185.316,125.025l0,-96.002l83.137,48.001l-83.137,48.001Z" />
                        </svg>
                      </a>
                    </Link>
                    <Link legacyBehavior href="https://twitter.com/digisquares">
                      <a>
                        <span className={styles.footerHeading}>Twitter</span>
                        <svg
                          fill="currentColor"
                          height="100%"
                          version="1.1"
                          viewBox="0 0 512 512"
                          width="100%"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-46.848,391.04c113.536,0 175.616,-94.08 175.616,-175.616c0,-2.688 0,-5.376 -0.128,-7.936c12.032,-8.704 22.528,-19.584 30.848,-32c-11.008,4.864 -22.912,8.192 -35.456,9.728c12.8,-7.68 22.528,-19.712 27.136,-34.176c-11.904,7.04 -25.088,12.16 -39.168,14.976c-11.264,-12.032 -27.264,-19.456 -45.056,-19.456c-34.048,0 -61.696,27.648 -61.696,61.696c0,4.864 0.512,9.6 1.664,14.08c-51.328,-2.56 -96.768,-27.136 -127.232,-64.512c-5.248,9.088 -8.32,19.712 -8.32,30.976c0,21.376 10.88,40.32 27.52,51.328c-10.112,-0.256 -19.584,-3.072 -27.904,-7.68l0,0.768c0,29.952 21.248,54.784 49.536,60.544c-5.12,1.408 -10.624,2.176 -16.256,2.176c-3.968,0 -7.808,-0.384 -11.648,-1.152c7.808,24.576 30.592,42.368 57.6,42.88c-21.12,16.512 -47.744,26.368 -76.672,26.368c-4.992,0 -9.856,-0.256 -14.72,-0.896c27.008,17.664 59.52,27.904 94.336,27.904Z"
                            id="Dark_Blue"
                          />
                        </svg>
                      </a>
                    </Link>
                    <Link
                      legacyBehavior
                      href="https://in.linkedin.com/company/digisquares?trk=public_profile_experience-item_profile-section-card_subtitle-click"
                    >
                      <a>
                        <span className={styles.footerHeading}>LinkedIn</span>
                        <svg
                          fill="currentColor"
                          height="100%"
                          version="1.1"
                          viewBox="0 0 512 512"
                          width="100%"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M256,0c141.29,0 256,114.71 256,256c0,141.29 -114.71,256 -256,256c-141.29,0 -256,-114.71 -256,-256c0,-141.29 114.71,-256 256,-256Zm-80.037,399.871l0,-199.921l-66.464,0l0,199.921l66.464,0Zm239.62,0l0,-114.646c0,-61.409 -32.787,-89.976 -76.509,-89.976c-35.255,0 -51.047,19.389 -59.889,33.007l0,-28.306l-66.447,0c0.881,18.757 0,199.921 0,199.921l66.446,0l0,-111.65c0,-5.976 0.43,-11.95 2.191,-16.221c4.795,-11.935 15.737,-24.299 34.095,-24.299c24.034,0 33.663,18.34 33.663,45.204l0,106.966l66.45,0Zm-272.403,-296.321c-22.74,0 -37.597,14.95 -37.597,34.545c0,19.182 14.405,34.544 36.717,34.544l0.429,0c23.175,0 37.6,-15.362 37.6,-34.544c-0.43,-19.595 -14.424,-34.545 -37.149,-34.545Z" />
                        </svg>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className={styles.footerblogsec}>
                <div>
                  <h3>Solutions</h3>
                  <ul className={styles.footersolul}>
                    <li>
                      <Link legacyBehavior href="/solutions/ProcessAutomation/">
                        <a>Process Automation</a>
                      </Link>
                    </li>

                    <li>
                      <Link
                        legacyBehavior
                        href="/solutions/LegacyModernization/"
                      >
                        <a>Legacy Modernization</a>
                      </Link>
                    </li>

                    <li>
                      <Link
                        legacyBehavior
                        href="/solutions/CustomerExperience/"
                      >
                        <a>Customer Experience</a>
                      </Link>
                    </li>

                    <li>
                      <Link legacyBehavior href="/solutions/Integrations/">
                        <a>Integrations</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.footersup}>
                  <h3>Industry</h3>
                  <ul className={styles.footersolul}>
                    <li>
                      <Link legacyBehavior href="/industry/Medical/">
                        <a>Medical</a>
                      </Link>
                    </li>

                    <li>
                      <Link legacyBehavior href="/industry/Education/">
                        <a>Education</a>
                      </Link>
                    </li>

                    <li>
                      <Link legacyBehavior href="/industry/FinancialServices/">
                        <a>Financial Services</a>
                      </Link>
                    </li>

                    <li>
                      <Link legacyBehavior href="/industry/Banking/">
                        <a>Banking</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/industry/Government/">
                        <a>Government</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/industry/Technologies/">
                        <a>Technologies</a>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3>Platform</h3>
                  <ul className={styles.footersolul}>
                    <li>
                      <Link
                        legacyBehavior
                        href="/platform/DigisquaresPlatform/"
                      >
                        <a>Digisquares Platform</a>
                      </Link>
                    </li>

                    <li>
                      <Link legacyBehavior href="/platform/MobileDevelopment">
                        <a>Mobile Development</a>
                      </Link>
                    </li>

                    <li>
                      <Link legacyBehavior href="/platform/WebDevelopment/">
                        <a>Web Development</a>
                      </Link>
                    </li>

                    <li>
                      <Link
                        legacyBehavior
                        href="/platform/WorkflowDevelopment/"
                      >
                        <a>Workflow development</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3>Legal</h3>
                  <ul className={styles.footersolul}>
                    <li>
                      <Link legacyBehavior href="/legal/Privacy">
                        <a>Privacy</a>
                      </Link>
                    </li>

                    <li>
                      <Link legacyBehavior href="/legal/Terms">
                        <a>Terms</a>
                      </Link>
                    </li>

                    <li>
                      <Link legacyBehavior href="/legal/CookiePolicy">
                        <a>Cookie policy</a>
                      </Link>
                    </li>

                    <li>
                      <Link legacyBehavior href="/legal/GDPR">
                        <a>GDPR</a>
                      </Link>
                    </li>

                    <li>
                      <Link legacyBehavior href="/legal/Sitemap">
                        <a>Sitemap</a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/legal/RefundPolicy">
                        <a>Refund policy</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.footerend}>
              <p>© 2024 Digisquares, All rights reserved</p>
            </div>
          </div>
        </Screen>
      </footer>
    </div>
  );
};
export default Footer;
