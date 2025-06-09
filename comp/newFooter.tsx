import React from "react";
import styles from "../styles/comp/newFooter.module.css";
import Link from "next/link";
import Images from "./base/Images";
import Screen from "./Screen";
import Image from "next/image";

const NewFooter = () => {
  return (
    <div>
      <footer className={styles.footermain}>
        <Screen>
          <h2 className={styles.footerHeading}>Footer</h2>
          <div className={styles.footermaincontent}>
            <div className={styles.footerblogs}>
              {/* ------------ */}
              <div className={styles.footerblogsfirst}>
                <div className={styles.footerInfo}>
                  <h3 style={{ color: "#1D4965", maxHeight: "110px" ,marginBottom:'2rem'}}>
                  Digisquares empowers businesses to thrive in the AI age by enabling them to create applications, deploy AI agents, and train custom AI models tailored to their specific use cases.
                  </h3>
                  <div className={styles.footerblogimg}>
                    <Link
                      legacyBehavior
                      href="https://www.facebook.com/digisquares/"
                    >
                      <a target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/svg/footer/facebook.svg"
                          alt="Facebook"
                          width={13}
                          height={13}
                        />
                      </a>
                    </Link>

                    <Link
                      legacyBehavior
                      href="https://www.youtube.com/channel/UC10Kqzxy547k75Kbnz-12hA/featured"
                    >
                      <a target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/svg/footer/youtube.svg"
                          alt="Youtube"
                          width={30}
                          height={30}
                        />
                      </a>
                    </Link>

                    <Link legacyBehavior href="https://twitter.com/digisquares">
                      <a target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/svg/footer/twitter.svg"
                          alt="Twitter"
                          width={20}
                          height={20}
                        />
                      </a>
                    </Link>

                    <Link
                      legacyBehavior
                      href="https://in.linkedin.com/company/digisquares?trk=public_profile_experience-item_profile-section-card_subtitle-click"
                    >
                      <a target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/svg/footer/linkedin.svg"
                          alt="Linkedin"
                          width={25}
                          height={25}
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              {/* --------------- */}
              <div className={styles.footerblogsec}>
                <div>
                  <h3>Product</h3>
                  <ul className={styles.footersolul}>
                    <li>
                      <Link legacyBehavior href="/product/AppStudio/">
                        <a>App Studio</a>
                      </Link>
                    </li>

                    <li>
                      <Link legacyBehavior href="/product/AgentStudio/">
                        <a>Agent Studio</a>
                      </Link>
                    </li>

                    <li>
                      <Link legacyBehavior href="/product/Aistudio/">
                        <a>AI Studio</a>
                      </Link>
                    </li>
                  </ul>
                </div>
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
                      <Link legacyBehavior href="/legal/RefundPolicy">
                        <a>Refund policy</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.footerblogimg2}>
                    <Link
                      legacyBehavior
                      href="https://www.facebook.com/digisquares/"
                    >
                      <a target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/svg/footer/facebook.svg"
                          alt="Facebook"
                          width={25}
                          height={25}
                        />
                      </a>
                    </Link>

                    <Link
                      legacyBehavior
                      href="https://www.youtube.com/channel/UC10Kqzxy547k75Kbnz-12hA/featured"
                    >
                      <a target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/svg/footer/youtube.svg"
                          alt="Youtube"
                          width={30}
                          height={30}
                        />
                      </a>
                    </Link>

                    <Link legacyBehavior href="https://twitter.com/digisquares">
                      <a target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/svg/footer/twitter.svg"
                          alt="Twitter"
                          width={20}
                          height={20}
                        />
                      </a>
                    </Link>

                    <Link
                      legacyBehavior
                      href="https://in.linkedin.com/company/digisquares?trk=public_profile_experience-item_profile-section-card_subtitle-click"
                    >
                      <a target="_blank" rel="noopener noreferrer">
                        <Image
                          src="/svg/footer/linkedin.svg"
                          alt="Linkedin"
                          width={25}
                          height={25}
                        />
                      </a>
                    </Link>
             </div>
            <div className={styles.footerend}>
              <p style={{color: "#1D4965"}}>© 2024 Digisquares, All rights reserved</p>
            </div>
          </div>
        </Screen>
      </footer>
    </div>
  );
};
export default NewFooter;
