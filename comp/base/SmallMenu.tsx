import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/comp/core/SmallMenu.module.css";

const SmallMenu = () => {
  const [product, setProduct] = useState(false);
  const [partners, setPartners] = useState(false);
  const [resources, setResources] = useState(false);
  const [pricing, setPricing] = useState(false);
  const [solution, setSolution] = useState(false);
  const [industry, setIndustry] = useState(false);

  // Toggling functions for each menu
  const ChangeSolution = () => setSolution(!solution);
  const ChangePartner = () => setPartners(!partners);
  const ChangePricing = () => setPricing(!pricing);
  const ChangeIndustry = () => setIndustry(!industry);
  const ChangeResources = () => setResources(!resources);
  const ChangeProduct = () => setProduct(!product);

  return (
    <div className={styles.mobview}>
      <header className={styles.header}>
        <input className={styles.menubtn} type="checkbox" id="menu-btn" />
        <label className={styles.menuicon} htmlFor="menu-btn">
          <span className={styles.navicon}></span>
        </label>
        <div>
          <Link href="/" legacyBehavior>
            <a className={styles.newlogocontiner}>
              <Image
                src="/assets/DigisLogo.svg"
                alt="Digi-Logo-white"
                layout="intrinsic"
                width="200"
                height="200"
              />
            </a>
          </Link>
        </div>

        <ul className={styles.menu}>
          {/* Product Dropdown */}
          <li>
            <a
              style={{ display: "flex", alignItems: "center" }}
              onClick={ChangeProduct}
              aria-expanded={product ? "true" : "false"}
              aria-controls="product-menu"
            >
              Products
              <svg
                className={styles.drpdownsvg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

            {product && (
              <ul className={styles.submenu} id="product-menu">
                <li>
                  <a href="/product/Appstudio/">App Studio</a>
                </li>
                <li>
                  <a href="/product/AgentStudio/">Agent Studio</a>
                </li>
                <li>
                  <a href="/product/Aistudio/">AI Studio</a>
                </li>
              </ul>
            )}
          </li>

          {/* Partners Dropdown */}
          <li>
            <a
              style={{ display: "flex", alignItems: "center" }}
              onClick={ChangePartner}
              aria-expanded={partners ? "true" : "false"}
              aria-controls="partners-menu"
            >
              Partners
              <svg
                className={styles.drpdownsvg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

            {partners && (
              <ul className={styles.submenu} id="partners-menu">
                <li>
                  <a href="/partners/PartnerProgram/">Partner Program</a>
                </li>
                <li>
                  <a href="/partners/BecomePartner/">Become a Partner</a>
                </li>
                <li>
                  <a href="#">Partner Finder</a>
                </li>
              </ul>
            )}
          </li>

          {/* Resources Dropdown */}
          <li>
            <a
              style={{ display: "flex", alignItems: "center" }}
              onClick={ChangeResources}
              aria-expanded={resources ? "true" : "false"}
              aria-controls="resources-menu"
            >
              Resources
              <svg
                className={styles.drpdownsvg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

            {resources && (
              <ul className={styles.submenu} id="resources-menu">
                <li>
                  <a href="/more/Blog/">Blog</a>
                </li>
                <li>
                  <a href="/partners/PartnerProgram/">Podcast</a>
                </li>
                <li>
                  <a href="/partners/BecomePartner/">FAQ</a>
                </li>
                <li>
                  <a href="https://docs.digisquares.com/">App Studio Docs</a>
                </li>
              </ul>
            )}
          </li>

          {/* Pricing Dropdown */}
          <li>
            <a
              style={{ display: "flex", alignItems: "center" }}
              onClick={ChangePricing}
              aria-expanded={pricing ? "true" : "false"}
              aria-controls="pricing-menu"
            >
              Pricing
              <svg
                className={styles.drpdownsvg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

            {pricing && (
              <ul className={styles.submenu} id="pricing-menu">
                <li>
                  <a href="/pricing/AppStudio/">App Studio Pricing</a>
                </li>
                <li>
                  <a href="/pricing/AgentStudio/">Agent Studio Pricing</a>
                </li>
              </ul>
            )}
          </li>

          {/* Solution Dropdown */}
          <li>
            <a
              style={{ display: "flex", alignItems: "center" }}
              onClick={ChangeSolution}
              aria-expanded={solution ? "true" : "false"}
              aria-controls="solution-menu"
            >
              Solution
              <svg
                className={styles.drpdownsvg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

            {solution && (
              <ul className={styles.submenu} id="solution-menu">
                <li>
                  <a href="/solutions/ProcessAutomation/">Process Automation</a>
                </li>
                <li>
                  <a href="/solutions/LegacyModernization/">Legacy Modernization</a>
                </li>
                <li>
                  <a href="/solutions/CustomerExperience/">Customer Experiences</a>
                </li>
                <li>
                  <a href="/solutions/Integrations/">Integrations</a>
                </li>
              </ul>
            )}
          </li>

          {/* Industry Dropdown */}
          <li>
            <a
              style={{ display: "flex", alignItems: "center" }}
              onClick={ChangeIndustry}
              aria-expanded={industry ? "true" : "false"}
              aria-controls="industry-menu"
            >
              Industry
              <svg
                className={styles.drpdownsvg}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>

            {industry && (
              <ul className={styles.submenu} id="industry-menu">
                <li>
                  <a href="/industry/Medical/">Medical</a>
                </li>
                <li>
                  <a href="/industry/Education/">Education</a>
                </li>
                <li>
                  <a href="/industry/FinancialServices/">Financial Services</a>
                </li>
                <li>
                  <a href="/industry/TeleCommunication/">Telecommunications</a>
                </li>
                <li>
                  <a href="/industry/Technologies/">Technologies</a>
                </li>
                <li>
                  <a href="/industry/Banking/">Banking</a>
                </li>
                <li>
                  <a href="/industry/Government/">Government</a>
                </li>
                <li>
                  <a href="/industry/Manufacturing/">Manufacturing</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </header>
    </div>
  );
};

export default SmallMenu;
