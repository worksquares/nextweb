import Image from "next/image";
import Link from "next/link";
import styles from "../styles/comp/MainFooter.module.css";

const MainFooter = () => {
    return (
        <footer className={styles.footerWrapper}>
            {/* Main content container */}
            <div className={styles.footerMainContent}>
                <h2 className={styles.footerHeading}>Footer</h2>

                <div className={styles.footerColumns}>
                    {/* Left column with info */}
                    <div className={styles.footerInfoColumn}>
                        <p className={styles.footerDescription}>
                            Digisquares empowers businesses to thrive in the AI age by enabling them to create applications, deploy AI agents, and train custom AI models tailored to their specific use cases.
                        </p>
                        <div className={styles.socialIcons}>
                            <Link href="https://www.facebook.com/digisquares/" passHref target="_blank" rel="noopener noreferrer">

                                <Image src="/svg/footer/facebook.svg" alt="Facebook" width={20} height={20} />

                            </Link>
                            <Link href="https://www.youtube.com/channel/UC10Kqzxy547k75Kbnz-12hA/featured" passHref target="_blank" rel="noopener noreferrer">
                                <Image src="/svg/footer/youtube.svg" alt="Youtube" width={25} height={25} />

                            </Link>
                            <Link href="https://twitter.com/digisquares" passHref target="_blank" rel="noopener noreferrer">
                                <Image src="/svg/footer/twitter.svg" alt="Twitter" width={20} height={20} />

                            </Link>
                            <Link href="https://in.linkedin.com/company/digisquares" passHref target="_blank" rel="noopener noreferrer">
                                <Image src="/svg/footer/linkedin.svg" alt="Linkedin" width={20} height={20} />

                            </Link>
                        </div>
                    </div>

                    {/* Right columns with links */}
                    <div className={styles.footerLinksColumns}>
                        <div className={styles.linkColumn}>
                            <h4>Product</h4>
                            <ul className={styles.footerLinksList}>
                                <li><Link href="/product/AppStudio/">App Studio</Link></li>
                                <li><Link href="/product/AgentStudio/">Agent Studio</Link></li>
                                <li><Link href="/product/Aistudio/">AI Studio</Link></li>
                            </ul>
                        </div>

                        <div className={styles.linkColumn}>
                            <h4>Solutions</h4>
                            <ul className={styles.footerLinksList}>
                                <li><Link href="/solutions/ProcessAutomation/">Process Automation</Link></li>
                                <li><Link href="/solutions/LegacyModernization/">Legacy Modernization</Link></li>
                                <li><Link href="/solutions/CustomerExperience/">Customer Experience</Link></li>
                                <li><Link href="/solutions/Integrations/">Integrations</Link></li>
                            </ul>
                        </div>

                        <div className={styles.linkColumn}>
                            <h4>Industry</h4>
                            <ul className={styles.footerLinksList}>
                                <li><Link href="/industry/Medical/">Medical</Link></li>
                                <li><Link href="/industry/Education/">Education</Link></li>
                                <li><Link href="/industry/FinancialServices/">Financial Services</Link></li>
                                <li><Link href="/industry/Banking/">Banking</Link></li>
                                <li><Link href="/industry/Government/">Government</Link></li>
                                <li><Link href="/industry/Technologies/">Technologies</Link></li>
                            </ul>
                        </div>

                        {/* <div className={styles.linkPrivacy}>
                            <h3>Legal</h3>
                            <ul className={styles.footerLinksPrivacyList}>
                                <li><Link href="/legal/Privacy">Privacy</Link></li>
                                <li><Link href="/legal/Terms">Terms</Link></li>
                                <li><Link href="/legal/CookiePolicy">Cookie policy</Link></li>
                                <li><Link href="/legal/GDPR">GDPR</Link></li>
                                <li><Link href="/legal/RefundPolicy">Refund policy</Link></li>
                            </ul>
                        </div> */}
                        <div className={styles.linkColumn}>
                            <h4>Legal</h4>
                            <ul className={styles.footerLinksList}>
                                <li><Link href="/legal/Privacy">Privacy</Link></li>
                                <li><Link href="/legal/Terms">Terms</Link></li>
                                <li><Link href="/legal/CookiePolicy">Cookie policy</Link></li>
                                <li><Link href="/legal/GDPR">GDPR</Link></li>
                                <li><Link href="/legal/RefundPolicy">Refund policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full-width footer bottom */}
            <div className={styles.footerBottom}>
                <div className={styles.footerBottomContent}>
                    {/* <div className={styles.footerLogo}>
                        <Link href="/" passHref >
                            <a>
                                <Image
                                    src="/assets/logo/Logo.svg"
                                    width={30}
                                    height={30}
                                    alt="DIGISQUARES Logo"
                                    className={styles.logoImage}
                                />
                            </a>
                        </Link>
                    </div> */}
                    {/* <div className={styles.linkPrivacy}> */}
                    {/* <h3>Legal</h3> */}
                    {/* <ul className={styles.footerLinksPrivacyList}>
                                <li><Link href="/legal/Privacy">Privacy</Link></li>
                                <li><Link href="/legal/Terms">Terms</Link></li>
                                <li><Link href="/legal/CookiePolicy">Cookie policy</Link></li>
                                <li><Link href="/legal/GDPR">GDPR</Link></li>
                                <li><Link href="/legal/RefundPolicy">Refund policy</Link></li>
                            </ul>
                        </div> */}
                    <p className={styles.copyright}>© 2025 Digisquares, All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;
