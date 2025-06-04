import React, { useEffect, useState } from "react";
import SmallMenu from "./base/SmallMenu";
import styles from "../styles/comp/NewMenu.module.css";
import Link from "next/link";
import Screen from "./Screen";
import UsergroupAddOutlined from "@ant-design/icons/lib/icons/UsergroupAddOutlined";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const NewMenu = () => {
  const [product, setProduct] = useState(false);
  const [platform, setPlatform] = useState(false);
  const [company, setCompany] = useState(false);
  const [pricing, setPricing] = useState(false);
  const [partners, setPartners] = useState(false);
  const [resources, setResources] = useState(false);
  const [global, setGlobal] = useState(false);
  const [close, setClose] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [videoShow, setVideoShow] = useState(false);
  const [viewPlatform, setViewPlatform] = useState(false);
  const [dropdownLeave, setDropdownLeave] = useState(false);
  // console.log('dropdownLeave: ', dropdownLeave);
  const [platformRight, setProductRight] = useState("Featured products");

  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const ChangePlatform = () => {
    setPlatform(true);
    setCompany(false);
    setPartners(false);
    setProduct(false);
    setPricing(false);
    setResources(false);
    setGlobal(false);
  };
  const ChangePartners = () => {
    setPlatform(false);
    setProduct(false);
    setCompany(false);
    setPartners(true);
    setPricing(false);
    setResources(false);
    setGlobal(false);
  };
  const ChangeResources = () => {
    setPlatform(false);
    setProduct(false);
    setCompany(false);
    setPartners(false);
    setPricing(false);
    setResources(true);
    setGlobal(false);
  };
  const ChangeCompany = () => {
    setPlatform(false);
    setCompany(true);
    setPartners(false);
    setProduct(false);
    setPricing(false);
    setResources(false);
    setGlobal(false);
  };
  const ChangePricing = () => {
    setPlatform(false);
    setCompany(false);
    setPartners(false);
    setProduct(false);
    setPricing(true);
    setResources(false);
    setGlobal(false);
  };

  const ChangeGlobal = () => {
    setPlatform(false);
    setCompany(false);
    setPartners(false);
    setProduct(false);
    setPricing(false);
    setResources(false);
    setGlobal(true);
  };

  const ChangeClose = () => {
    setPlatform(false);
    setCompany(false);
    setMobile(false);
    setPartners(false);
    setProduct(false);
    setVideoShow(false);
    setResources(false);
  };
  const ChangeProduct = () => {
    setPlatform(false);
    setCompany(false);
    setMobile(false);
    setPartners(false);
    setProduct(true);
    setPricing(false);
    setResources(false);
    setGlobal(false);
  };

  const CloseMenu = () => {
    setPlatform(false);
    setCompany(false);
    setMobile(false);
    setPartners(false);
    setProduct(false);
    setPricing(false);
    setResources(false);
    setGlobal(false);
  };

  const handleLanguageChange = (language) => {
    changeLanguage(language);
    setGlobal(false);
  };

  const popupVideo = () => {
    setVideoShow(!videoShow);
  };

  const videoClose = () => {
    setVideoShow(false);
  };

  const handlePlatformContent = (e) => {
    setProductRight(e);
  };

  const handleBlurOrMouseLeave = () => {
    setTimeout(() => {
      CloseMenu();
    }, 20000); // 20 seconds = 20000 milliseconds
  };

  return (
    <div className={styles.MainMenu}>
      <SmallMenu />
      <div className={styles.menucontainer}>
        <div className={styles.relative} onMouseLeave={CloseMenu}>
          <div className={styles.relative}>
            <Screen>
              <div className={styles.menumaincontent} style={{ gap: "25px" }}>
                <div className={styles.mob} style={{ width: "170px" }}>
                  <Link legacyBehavior href="/">
                    <a
                      style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src="/assets/DigisLogo.svg"
                        className={styles.objectcontain}
                        width={150}
                        height={150}
                        alt="Picture of the author"
                      />
                    </a>
                  </Link>
                </div>
                <div className={styles.menulisthead}>
                  <nav className={styles.menuheadnav}>
                    <div className={styles.relative}>
                      <button
                        onClick={ChangeProduct}
                        type="button"
                        className={styles.fontshead}
                        style={{ width: "112px" }}
                      >
                        <span className={styles.spans}>Products</span>
                      </button>
                    </div>

                    <div className={styles.relative}>
                      <button
                        onClick={ChangePartners}
                        type="button"
                        className={styles.fontshead}
                        style={{ width: "104px" }}
                      >
                        <span className={styles.spans}>Partners</span>
                      </button>
                    </div>

                    <div className={styles.relative}>
                      <button
                        onClick={ChangeResources}
                        type="button"
                        className={styles.fontshead}
                        style={{ width: "104px" }}
                      >
                        <span className={styles.spans}>Resources</span>
                      </button>
                    </div>

                    <div className={styles.relative}>
                      <button
                        onClick={ChangePricing}
                        type="button"
                        className={styles.fontshead}
                        style={{ width: "100px" }}
                      >
                        <span className={styles.spans}>Pricing</span>
                      </button>
                    </div>

                    <div className={styles.relative}>
                      <a style={{
                        color: "#5A6072",
                        fontWeight:600
                      }}  href="/contact/ContactUs/">Contact Us</a>
                    </div>

                  </nav>
                  <div className={styles.signinsignup}>
                    <button onClick={ChangeGlobal} type="button">
                      <Image
                        src="/svg/global-svg.svg"
                        alt="AI Agents"
                        height={30}
                        width={30}
                        style={{
                          marginRight: "10px",
                          cursor: "pointer",
                        }}
                      />
                    </button>

                    <div className={styles.signInBtn}>
                      <Link
                        legacyBehavior
                        href="https://app.digisquares.com/login"
                      >
                        <a className={styles.fontshead} rel="nofollow">
                          Sign in
                        </a>
                      </Link>
                    </div>

                    <div className={styles.signUpbtn}>
                      <Link
                        legacyBehavior
                        href="https://app.digisquares.com/register"
                      >
                        <a rel="nofollow">Sign up</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {videoShow && (
                  <div className={styles.VideoBox}>
                    <div className={styles.PopupVideoBox}>
                      <iframe
                        width="750"
                        height="380"
                        src="https://www.youtube.com/embed/fdbln7j6XNw"
                        frameBorder="0"
                        allow="autoplay encrypted-media"
                      />
                      <Image
                        src="/assets/IconClose.webp"
                        alt="asas"
                        onClick={videoClose}
                        className={styles.CloseVideo}
                      />
                    </div>
                  </div>
                )}
              </div>
            </Screen>
          </div>

          {product ? (
            close ? (
              <div className={styles.moremenu}>
                <Screen>
                  <div className={styles.Platformdrpdown}>
                    <nav
                      className={styles.menunav}
                      style={{
                        width: window.innerHeight > 768 ? "20%" : "25%",
                      }}
                    >
                      <ul className={styles.platformlistbtn}>
                        <li className={styles.PlatformMenu}>
                          <button
                            style={{
                              background:
                                platformRight === "Featured products"
                                  ? "#E2F1F9"
                                  : "none",
                            }}
                            onClick={() =>
                              handlePlatformContent("Featured products")
                            }
                          >
                            Featured products
                          </button>
                        </li>
                        <li className={styles.PlatformMenu}>
                          <button
                            style={{
                              background:
                                platformRight === "By solution"
                                  ? "#E2F1F9"
                                  : "none",
                            }}
                            onClick={() => handlePlatformContent("By solution")}
                          >
                            By solution
                          </button>
                        </li>

                        <li className={styles.PlatformMenu}>
                          <button
                            style={{
                              background:
                                platformRight === "By industry"
                                  ? "#E2F1F9"
                                  : "none",
                            }}
                            onClick={() => handlePlatformContent("By industry")}
                          >
                            By industry
                          </button>
                        </li>
                      </ul>
                    </nav>

                    {platformRight === "Featured products" && (
                      <div
                        className={styles.platformrightside}
                        style={{ justifyContent: "space-around" }}
                      >
                        <a
                          href="/product/Appstudio/"
                          style={{
                            display: "block",
                            width: "250px",
                            borderRadius: "4px",
                            overflow: "hidden",
                            textDecoration: "none",
                          }}
                        >
                          <img
                            alt="Low Code Platform"
                            src="/assets/Hero & cards/AppStudio_Hero.webp"
                            style={
                              {
                                // border: "1px solid red",
                                // maxHeight: "200px",
                              }
                            }
                          />
                          <div
                            style={{
                              padding: "7px",
                              borderTop: "1px solid #d9d9d9",
                              marginTop: "10px",
                            }}
                          >
                            <h3 className={styles.solutionTitle}>App Studio</h3>
                            <p className={styles.solutionDescription}>
                              AI-powered tool for faster web and mobile app
                              development.
                            </p>
                          </div>
                        </a>

                        {/* <div
                          onClick={() =>
                            (window.location.href = "/product/Agentbuilder/")
                          }
                          style={{
                            width: "250px",
                            borderRadius: "4px",
                            overflow: "hidden",
                            cursor: "pointer",
                          }}
                        > */}
                        <a
                          href="/product/AgentStudio/"
                          style={{
                            display: "block",
                            width: "250px",
                            borderRadius: "4px",
                            overflow: "hidden",
                            textDecoration: "none",
                          }}
                        >
                          <img
                            alt="AI Agent"
                            src="/assets/Hero & cards/menu_agentstudio.webp"
                          />
                          <div
                            style={{
                              padding: "7px",
                              borderTop: "1px solid #d9d9d9",
                              marginTop: "10px",
                            }}
                          >
                            <h3 className={styles.solutionTitle}>
                              Agent Studio
                            </h3>
                            <p className={styles.solutionDescription}>
                              Automates banking, support, and workflows using AI
                              decisions.
                            </p>
                          </div>
                        </a>

                        {/* <div
                          onClick={() =>
                            (window.location.href = "/product/Aistudio/")
                          }
                          style={{
                            width: "250px",
                            borderRadius: "4px",
                            overflow: "hidden",
                            cursor: "pointer",
                          }}
                        > */}

                        <a
                          href="/product/Aistudio/"
                          style={{
                            display: "block",
                            width: "250px",
                            borderRadius: "4px",
                            overflow: "hidden",
                            textDecoration: "none",
                          }}
                        >
                          <img
                            alt="AI Studio"
                            src="/assets/Hero & cards/menu_aistudio.webp"
                          />
                          <div
                            style={{
                              padding: "7px",
                              borderTop: "1px solid #d9d9d9",
                              marginTop: "10px",
                            }}
                          >
                            <h3 className={styles.solutionTitle}>AI Studio</h3>
                            <p className={styles.solutionDescription}>
                              AI-driven platform for rapid cross-platform app
                              deployment.
                            </p>
                          </div>
                        </a>
                      </div>
                    )}

                    {platformRight === "By solution" && (
                      <div
                        className={styles.platformrightside}
                        style={{
                          justifyContent: "space-around",
                          paddingLeft: "0px",
                          width: "60%",
                        }}
                      >
                        <div className={styles.grid}>
                          <div className={styles.solutionCard}>
                            <a href="/solutions/ProcessAutomation/">
                              <h3 className={styles.solutionTitle}>
                                Process Automation
                              </h3>
                              <p className={styles.solutionDescription}>
                                Automate your workflows and improve efficiency.
                              </p>
                            </a>
                          </div>

                          <div className={styles.solutionCard}>
                            <a href="/solutions/LegacyModernization/">
                              <h3 className={styles.solutionTitle}>
                                Legacy Modernization
                              </h3>
                              <p className={styles.solutionDescription}>
                                Upgrade your systems to modern infrastructure.
                              </p>
                            </a>
                          </div>
                        </div>

                        <div className={styles.grid}>
                          <div className={styles.solutionCard}>
                            <a href="/solutions/CustomerExperience/">
                              <h3 className={styles.solutionTitle}>
                                Customer Experiences
                              </h3>
                              <p className={styles.solutionDescription}>
                                Deliver personalized and seamless experiences.
                              </p>
                            </a>
                          </div>

                          <div className={styles.solutionCard}>
                            <a href="/solutions/Integrations/">
                              <h3 className={styles.solutionTitle}>
                                Integrations
                              </h3>
                              <p className={styles.solutionDescription}>
                                Connect with third-party tools that you are
                                already using.
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                    {platformRight === "By industry" && (
                      <div className={styles.platformrightside}>
                        <div className={styles.grid}>
                          <div className={styles.solutionCard}>
                            <a href="/industry/Medical/">
                              <h3 className={styles.solutionTitle}>Medical</h3>
                              <p className={styles.solutionDescription}>
                                Discover the latest advancements in medical
                                technology.
                              </p>
                            </a>
                          </div>

                          <div className={styles.solutionCard}>
                            <a href="/industry/Education/">
                              <h3 className={styles.solutionTitle}>
                                Education
                              </h3>
                              <p className={styles.solutionDescription}>
                                Empowering learning through innovative
                                educational products.
                              </p>
                            </a>
                          </div>

                          <div className={styles.solutionCard}>
                            <a href="/industry/FinancialServices/">
                              <h3 className={styles.solutionTitle}>
                                Financial Services
                              </h3>
                              <p className={styles.solutionDescription}>
                                Enhance your financial services with our
                                cutting-edge solutions.
                              </p>
                            </a>
                          </div>
                        </div>

                        <div className={styles.grid}>
                          <div className={styles.solutionCard}>
                            <a href="/industry/TeleCommunication/">
                              <h3 className={styles.solutionTitle}>
                                Telecommunications
                              </h3>
                              <p className={styles.solutionDescription}>
                                Revolutionizing communication with the latest
                                telecom products.
                              </p>
                            </a>
                          </div>

                          <div className={styles.solutionCard}>
                            <a href="/industry/Technologies/">
                              <h3 className={styles.solutionTitle}>
                                Technologies
                              </h3>
                              <p className={styles.solutionDescription}>
                                Stay ahead with our innovative technology
                                solutions.
                              </p>
                            </a>
                          </div>

                          <div className={styles.solutionCard}>
                            <a href="/industry/Banking/">
                              <h3 className={styles.solutionTitle}>Banking</h3>
                              <p className={styles.solutionDescription}>
                                Drive your banking operations with
                                state-of-the-art tools.
                              </p>
                            </a>
                          </div>
                        </div>

                        <div className={styles.grid}>
                          <div className={styles.solutionCard}>
                            <a href="/industry/Government/">
                              <h3 className={styles.solutionTitle}>
                                Government
                              </h3>
                              <p className={styles.solutionDescription}>
                                Improving governance with modern, reliable
                                solutions.
                              </p>
                            </a>
                          </div>

                          <div className={styles.solutionCard}>
                            <a href="/industry/Manufacturing/">
                              <h3 className={styles.solutionTitle}>
                                Manufacturing
                              </h3>
                              <p className={styles.solutionDescription}>
                                Boost productivity with our advanced
                                manufacturing tools.
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Screen>
              </div>
            ) : null
          ) : null}

          {partners ? (
            close ? (
              <div className={styles.moremenu}>
                <Screen>
                  <div className={styles.Platformdrpdown}>
                    <div className={styles.menunav}>
                      <div
                        className={styles.grid}
                        style={{ paddingLeft: "30px" }}
                      >
                        <div className={styles.solutionCard}>
                          <h3 className={styles.PlatFormTitle}>For Partners</h3>
                        </div>
                        <div className={styles.solutionCard}>
                          <h3
                            className={styles.solutionTitle}
                            onClick={() =>
                            (window.location.href =
                              "/partners/PartnerProgram/")
                            }
                          >
                            Partner program
                          </h3>
                        </div>
                        <div className={styles.solutionCard}>
                          <h3
                            className={styles.solutionTitle}
                            onClick={() =>
                            (window.location.href =
                              "/partners/BecomePartner/")
                            }
                          >
                            Become a partner
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className={styles.platformrightside}>
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "relative",
                          }}
                        >
                          <img
                            src="/assets/PartnerFinder.webp"
                            alt="Partner Finder"
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "10px",
                            }}
                          />
                        </div>

                        <button
                          style={{
                            padding: "10px 20px",
                            position: "absolute",
                            bottom: "20px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            color: "white",
                            borderRadius: "20px",
                            backgroundColor: "#4eaae3",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          <UsergroupAddOutlined /> Partner Finder
                        </button>
                      </div>
                    </div>
                  </div>
                </Screen>
              </div>
            ) : null
          ) : null}

          {pricing ? (
            close ? (
              <div className={styles.moremenu}>
                <Screen>
                  <div className={styles.Platformdrpdown}>
                    <div
                      className={styles.menunav}
                      style={{
                        width: window.innerHeight > 768 ? "20%" : "25%",
                      }}
                    >
                      <div
                        className={styles.grid}
                        style={{ paddingLeft: "30px" }}
                      >
                        <div className={styles.solutionCard}>
                          <h3 className={styles.PlatFormTitle}>Pricing</h3>
                        </div>
                        <div className={styles.solutionCard}>
                          <h3
                            className={styles.solutionTitle}
                            onClick={() =>
                              (window.location.href = "/pricing/AppStudio")
                            }
                          >
                            App Studio Pricing
                          </h3>
                        </div>
                        <div className={styles.solutionCard}>
                          <h3
                            className={styles.solutionTitle}
                            onClick={() =>
                              (window.location.href = "/pricing/AgentStudio")
                            }
                          >
                            Agent Studio Pricing
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div
                      className={styles.platformrightside}
                      style={{
                        paddingLeft: "0px",
                        width: window.innerHeight > 768 ? "80%" : "75%",
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "relative",
                        }}
                      >
                        <img
                          src="/assets/Pricingimg.webp"
                          alt="Resourcesimg"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Screen>
              </div>
            ) : null
          ) : null}

          {resources ? (
            close ? (
              <div className={styles.moremenu}>
                <Screen>
                  <div className={styles.Platformdrpdown}>
                    <div
                      className={styles.menunav}
                      style={{
                        display: "flex",
                        width: "40%",
                        justifyContent: "space-around",
                      }}
                    >
                      <div className={styles.grid}>
                        <div className={styles.solutionCard}>
                          <h3 className={styles.PlatFormTitle}>
                            Documentation
                          </h3>
                        </div>
                        <div className={styles.solutionCard}>
                          <a
                            target="_blank"
                            className={styles.solutionTitle}
                            href="https://docs.digisquares.com/"
                          >
                            App Studio docs
                          </a>
                        </div>
                        <div className={styles.solutionCard}>
                          <a
                            target="_blank"
                            className={styles.solutionTitle}
                            href="https://docs.digisquares.com/"
                          >
                            Agent Studio docs
                          </a>
                        </div>
                        <div className={styles.solutionCard}>
                          <a
                            target="_blank"
                            className={styles.solutionTitle}
                            href="https://docs.digisquares.com/"
                          >
                            AI Studio docs
                          </a>
                        </div>
                      </div>

                      <div className={styles.grid}>
                        <div className={styles.solutionCard}>
                          <h3 className={styles.PlatFormTitle}>Common</h3>
                        </div>
                        <div className={styles.solutionCard}>
                          <h3
                            className={styles.solutionTitle}
                            onClick={() =>
                              (window.location.href = "/more/Blog/")
                            }
                          >
                            Blog
                          </h3>
                        </div>
                        <div className={styles.solutionCard}>
                          <h3
                            className={styles.solutionTitle}
                            onClick={() =>
                              (window.location.href = "/resources/Podcast")
                            }
                          >
                            Podcast
                          </h3>
                        </div>
                        <div className={styles.solutionCard}>
                          <h3
                            className={styles.solutionTitle}
                            onClick={() =>
                              (window.location.href = "/resources/FAQ/")
                            }
                          >
                            FAQs
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className={styles.platformrightside}>
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "relative",
                          }}
                        >
                          <Image
                            src="/assets/Resourcesimg.webp"
                            alt="Resourcesimg"
                            width={100}
                            height={100}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              borderRadius: "10px",
                            }}
                          />
                        </div>
                        <button
                          style={{
                            padding: "10px 20px",
                            position: "absolute",
                            bottom: "20px",
                            right: "0%",
                            transform: "translateX(-50%)",
                            color: "white",
                            borderRadius: "20px",
                            backgroundColor: "#4eaae3",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                          onClick={() =>
                            (window.location.href = "/contact/ContactUs/")
                          }
                        >
                          <UsergroupAddOutlined /> Contact us
                        </button>
                      </div>
                    </div>
                  </div>
                </Screen>
              </div>
            ) : null
          ) : null}

          {global ? (
            <div className={styles.moremenu}>
              <Screen>
                <div className={styles.Platformdrpdown}>
                  <div className={styles.menunav}>
                    <div className={styles.grid}>
                      <div className={styles.solutionCard}>
                        <h3
                          className={styles.PlatFormTitle}
                          style={{ marginBottom: "3%" }}
                        >
                          localization
                        </h3>
                        <div
                          className={styles.grid}
                          style={{ flexWrap: "wrap", height: "250px" }}
                        >
                          <div className={styles.solutionCard}>
                            <h3
                              className={styles.solutionTitle}
                              onClick={() => handleLanguageChange("en")}
                            >
                              United Kingdom - English
                            </h3>
                          </div>
                          <div className={styles.solutionCard}>
                            <h3
                              className={styles.solutionTitle}
                              onClick={() => handleLanguageChange("zh")}
                            >
                              Chinese
                            </h3>
                          </div>
                          <div className={styles.solutionCard}>
                            <h3
                              className={styles.solutionTitle}
                              onClick={() => handleLanguageChange("hi")}
                            >
                              Hindi
                            </h3>
                          </div>
                          <div className={styles.solutionCard}>
                            <h3
                              className={styles.solutionTitle}
                              onClick={() => handleLanguageChange("es")}
                            >
                              Spanish
                            </h3>
                          </div>
                          <div className={styles.solutionCard}>
                            <h3
                              className={styles.solutionTitle}
                              onClick={() => handleLanguageChange("ar")}
                            >
                              Arabic
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={styles.platformrightside}
                    style={{ paddingLeft: "0px" }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundImage:
                          "url(/assets/languagelocalization.webp)",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        position: "relative",
                      }}
                    ></div>
                  </div>
                </div>
              </Screen>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NewMenu;
