import React from "react";
import styles from "../../styles/legal/Sitemap.module.css";
import WebHeadergrid from "../../comp/WebHeadergrid";
import { WebsiteHeaderProps } from "../../comp/base/WebsiteHeaderContent";
import Link from "next/link";
import Headseo from "../headseo";
import Screen from "../../comp/Screen";
import BaseLayout from "../../comp/BaseLayout";

const Sitemap = () => {
  let WebHeaderListData: WebsiteHeaderProps[] = [
    {
      title: "Digisquares® Sitemap",
      paragraph:
        "Digisquares® Governance, Risk, and Compliance helps you comply with the Privacy",
    },
  ];
  return (
    <div>
      <Headseo
        title={`Digisquares | Sitemap`}
        heading={`Sitemap`}
        description={`Digisquares® Governance, Risk, and Compliance helps you comply with the Privacy.`}
        url={`/statements/Sitemap`}
        keywords={`Sitemap`}
      />
      <BaseLayout>
        <div className={styles.SitemapMainContainer}>
          <WebHeadergrid HeaderBannerPropsList={WebHeaderListData} />
          <Screen>
            <div className={styles.SitemapContainer}>
              <div className={styles.SitemapSections}>
                <h3>PRODUCTS FOR IT</h3>
                <h4>
                  <a href="#">IT Service Management</a>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Agent Intelligence</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Agent Workspace</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Asset and Cost Management</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Benchmarks</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Change and Release Management</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Configuration Management</a>
                  </li>
                </ul>
                <h4>
                  <a href="#">IT Operations Management</a>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Cloud Management</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">CMDB</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Discovery</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Event Management</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Operational Intelligence</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Orchestration</a>
                  </li>
                </ul>
                <h4>
                  &nbsp;<a href="#">IT Business Management</a>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Agile Development</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Application Portfolio Management</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Demand Management</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Financial Charging</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Financial Modeling</a>
                  </li>
                </ul>
                <h4>
                  <a href="#">IT Asset Management</a>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Asset Management</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Software Asset Management</a>
                  </li>
                </ul>
              </div>
              <div className={styles.SitemapSections}>
                <h3>PRODUCTS FOR APP DEV</h3>
                <h4>
                  <a href="#">Application Development</a>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Agile Development</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">APIs and Integration Tools</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Automated Testing Framework</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Connect</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Delegated Development</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Flow Designer</a>
                  </li>
                </ul>
              </div>
              <div className={styles.SitemapSections}>
                <h3>PRODUCTS BY FUNCTION</h3>
                <h4>
                  <b>Customer Service</b>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Customer Service Management</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Agent Intelligence</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Communities</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Field Service Management</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Financial Modeling</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Knowledge Management</a>
                  </li>
                </ul>
                <h4>
                  <b>Human Resources</b>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">HR Service Delivery</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Case and Knowledge Management</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Employee Document Management</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Employee Onboarding and Transitions</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Employee Service Center</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#"></a>
                    <a href="#">
                      Performance Analytics for HR Service Delivery
                    </a>
                  </li>
                </ul>
                <h4>
                  <b>Security &amp; Risk</b>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Governance, Risk, and Compliance</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Performance Analytics</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Security Operations</a>
                  </li>
                </ul>
                <h4>
                  <b>Instance Management</b>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#"></a>
                    <a href="#">Edge Encryption</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#"></a>
                    <a href="#"></a>
                    <a href="#">Subscription Management</a>
                  </li>
                </ul>
              </div>
              <div className={styles.SitemapSections}>
                <h3>SOLUTIONS</h3>
                <h4>
                  <a href="#">Solutions by Industry</a>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <Link legacyBehavior href="/industry/FinancialServices/">
                      Financial Services
                    </Link>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <Link legacyBehavior href="/industry/Government/">
                      Government
                    </Link>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <Link legacyBehavior href="/industry/Medical/">
                      Healthcare
                    </Link>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <Link legacyBehavior href="/industry/Education/">
                      Higher Education
                    </Link>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <Link legacyBehavior href="/industry/Manufacturing/">
                      Manufacturing
                    </Link>
                  </li>
                </ul>
                <h4>
                  <a href="#">Solutions by Use Case</a>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Transform the IT experience</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1} ${styles.SitemaplistHeight}`}
                  >
                    <a href="#">
                      Deliver a next-generation employee experience
                    </a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1} ${styles.SitemaplistHeight}`}
                  >
                    <a href="#">
                      Delight customers with proactive, end-to-end service
                    </a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1} ${styles.SitemaplistHeight}`}
                  >
                    <a href="#">
                      Respond faster to security incidents, vulnerabilities, and
                      risk
                    </a>
                    <u></u>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">AIOps</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1} `}
                  >
                    <a href="#">Build enterprise workflow apps fast</a>
                  </li>
                </ul>
              </div>
            </div>
          </Screen>
          <Screen>
            <div className={styles.SitemapContainer}>
              <div className={styles.SitemapSections}>
                <h3>COMPANY</h3>
                <h4>
                  <a href="#">About Digisquares</a>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Analyst Relations</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Customer Stories</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Diversity, Inclusion, and Belonging</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Global Impact</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Investor Relations</a>
                  </li>
                </ul>
                <h4>
                  <a href="#">Newsroom</a>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Analyst Reports</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Blog</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">In the News</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Media Contacts</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Media Resources</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#"></a>
                    <a href="#">Press Releases</a>
                  </li>
                </ul>
                <h4>
                  <a href="#">Events</a>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Knowledge User Conference</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Now at Work</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#"></a>
                    <a href="#">Webinars</a>
                  </li>
                </ul>
                <h4>
                  <a href="#">Careers</a>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Search Jobs</a>
                  </li>
                </ul>
              </div>
              <div className={styles.SitemapSections}>
                <h3>SERVICES AND SUPPORT</h3>
                <h4>
                  <a href="#">Services</a>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Consulting Services</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Implementation Services</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Optimization Services</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Training</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Find a Course</a>
                  </li>
                </ul>
                <h4>
                  <b>Support</b>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Request a Callback from Sales</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Support Portal</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">User Community</a>
                  </li>
                </ul>
              </div>
              <div className={styles.SitemapSections}>
                <h3>PARTNERS</h3>
                <h4>
                  <a href="#">Partner Programs</a>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Become a Partner</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Find a Partner</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Partner Portal</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Developer Portal</a>
                  </li>
                </ul>
              </div>
              <div className={styles.SitemapSections}>
                <h3>RESOURCES</h3>
                <h4>
                  <a href="#">Best Practices and Tips</a>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Customer Stories</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Customer Success Center</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Developer Portal</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Product Documentation</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">User Community</a>
                  </li>
                </ul>
                <h4>
                  <a href="">Resource Library</a>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Analyst Reports</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Data Sheets</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Infographics</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Solution Briefs</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Videos</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">White Papers</a>
                  </li>
                </ul>
                <h4>
                  <a href="">Certified Apps</a>
                </h4>
                <ul>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">App Showcase</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Digisquares Store</a>
                  </li>
                  <li
                    className={`${styles.listitem} ${styles.CookiePolicylist1}`}
                  >
                    <a href="#">Share</a>
                  </li>
                </ul>
              </div>
            </div>
          </Screen>
          <Link legacyBehavior href={"/contact/ContactUs/"}>
            <div className={styles.FixedContainer}>
              <p className={styles.FixedOption}>Contact</p>
              {/* <p className={styles.FixedOption}>Demo</p> */}
            </div>
          </Link>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Sitemap;
