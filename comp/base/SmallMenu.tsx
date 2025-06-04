import React, { useState } from "react";
import styles from "../../styles/comp/core/SmallMenu.module.css";
import Images from "./Images";
import Image from "next/image";
import Link from "next/link";
import Screen from "../Screen";

const SmallMenu = () => {
  const [platform, setPlatform] = useState(false);
  const [product, setProduct] = useState(false);
  const [partners, setPartners] = useState(false);
  const [pricing, setPricing] = useState(false);
  const [solution, setSolution] = useState(false);
  const [industry, setIndustry] = useState(false);
  const [more, setMore] = useState(false);
  const [resources, setResources] = useState(false);
  const [close, setClose] = useState(true);

  const ChangeSolution = () => {
    setSolution(!solution);
    setMore(false);
    setResources(false);
    setIndustry(false);
    setProduct(false);
    setPartners(false);
    setPricing(false);
  };
  const ChangePartner = () => {
    setSolution(false);
    setMore(false);
    setResources(false);
    setIndustry(false);
    setProduct(false);
    setPartners(!partners);
    setPricing(false);
  };
  const ChangePricing = () => {
    setSolution(false);
    setMore(false);
    setResources(false);
    setIndustry(false);
    setProduct(false);
    setPricing(!pricing);
    setPartners(false);
  };

  const ChangeIndustry = () => {
    setSolution(false);
    setMore(false);
    setResources(false);
    setIndustry(!industry);
    setProduct(false);
    setPartners(false);
    setPricing(false);
  };

  const ChangeMore = () => {
    setSolution(false);
    setMore(!more);
    setResources(false);
    setIndustry(false);
    setPlatform(false);
  };

  const ChangeResources = () => {
    setSolution(false);
    setMore(false);
    setResources(!resources);
    setIndustry(false);
    setProduct(false);
    setPartners(false);
    setPricing(false);
  };

  const ChangeClose = () => {
    setSolution(false);
    setMore(false);
    setIndustry(false);
    setProduct(false);
  };

  const ChangePlatform = () => {
    setSolution(false);
    setMore(false);
    setResources(false);
    setIndustry(false);
    setProduct(!product);
  };

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
              {/* <div className={styles.newlogo}>
                <span className={styles.newlogowrk}>Digisquares</span>
              </div> */}
            </a>
          </Link>
        </div>
        <ul className={styles.menu}>
          <li>
            <a
              style={{ display: "flex", alignItems: "center" }}
              onClick={ChangePlatform}
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

            {product ? (
              close ? (
                <ul className={styles.submenu}>
                  <li>
                    <a
                      href="/product/Appstudio/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      App Studio
                    </a>
                  </li>
                  <li>
                    <a
                      href="/product/AgentStudio/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Agent Studio
                    </a>
                  </li>
                  <li>
                    <a
                      href="/product/Aistudio/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      AI Studio
                    </a>
                  </li>
                </ul>
              ) : null
            ) : null}
          </li>

          <li>
            <a
              style={{ display: "flex", alignItems: "center" }}
              onClick={ChangePartner}
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

            {partners ? (
              close ? (
                <ul className={styles.submenu}>
                  <li>
                    <a
                      href="/partners/PartnerProgram/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Partner Program
                    </a>
                  </li>
                  <li>
                    <a
                      href="/partners/BecomePartner/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Become a Partner
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Partner Finder
                    </a>
                  </li>
                </ul>
              ) : null
            ) : null}
          </li>

          <li>
            <a
              style={{ display: "flex", alignItems: "center" }}
              onClick={ChangeResources}
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

            {resources ? (
              close ? (
                <ul className={styles.submenu}>
                   <li>
                    <a
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "#000",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Common
                    </a>
                  </li>
                  <li>
                    <a
                      href="/more/Blog/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/partners/PartnerProgram/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Podcast
                    </a>
                  </li>
                  <li>
                    <a
                      href="/partners/BecomePartner/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Faq
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "#000",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.digisquares.com/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      App Studio docs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.digisquares.com/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Agent Studio docs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.digisquares.com/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      AI Studio docs
                    </a>
                  </li>
                </ul>
              ) : null
            ) : null}
          </li>

          <li>
            <a
              style={{ display: "flex", alignItems: "center" }}
              onClick={ChangePricing}
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

            {pricing ? (
              close ? (
                <ul className={styles.submenu}>
                  <li>
                    <a
                      href="/pricing/AppStudio/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      App Studio Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pricing/AgentStudio/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Agent Studio Pricing
                    </a>
                  </li>
                </ul>
              ) : null
            ) : null}
          </li>
          <li>
            <a
              style={{ display: "flex", alignItems: "center" }}
              onClick={ChangeSolution}
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

            {solution ? (
              close ? (
                <ul className={styles.submenu}>
                  <li>
                    <a
                      href="/solutions/ProcessAutomation/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Process Automation
                    </a>
                  </li>
                  <li>
                    <a
                      href="/solutions/LegacyModernization/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Legacy Modernization
                    </a>
                  </li>
                  <li>
                    <a
                      href="/solutions/CustomerExperience/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Customer Experiences
                    </a>
                  </li>
                  <li>
                    <a
                      href="/solutions/Integrations/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Integrations
                    </a>
                  </li>
                </ul>
              ) : null
            ) : null}
          </li>

          {/* \---------------------------------------- */}
          <li>
            <a
              style={{ display: "flex", alignItems: "center" }}
              onClick={ChangeIndustry}
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

            {industry ? (
              close ? (
                <ul className={styles.submenu}>
                  <li>
                    <a
                      href="/industry/Medical/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Medical
                    </a>
                  </li>
                  <li>
                    <a
                      href="/industry/Education/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Education
                    </a>
                  </li>
                  <li>
                    <a
                      href="/industry/FinancialServices/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      FinancialServices
                    </a>
                  </li>
                  <li>
                    <a
                      href="/industry/TeleCommunication/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Telecommunications
                    </a>
                  </li>
                  <li>
                    <a
                      href="/industry/Technologies/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Technologies
                    </a>
                  </li>
                  <li>
                    <a
                      href="/industry/Banking/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Banking
                    </a>
                  </li>
                  <li>
                    <a
                      href="/industry/Government/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Government
                    </a>
                  </li>
                  <li>
                    <a
                      href="/industry/Manufacturing/"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      Manufacturing
                    </a>
                  </li>
                </ul>
              ) : null
            ) : null}

            {/* \---------------------------------------- */}
          </li>
        </ul>
      </header>
    </div>
  );
};

export default SmallMenu;
