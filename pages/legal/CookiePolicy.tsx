import React from "react";
import { WebsiteHeaderProps } from "../../comp/base/WebsiteHeaderContent";
import styles from "../../styles/legal/CookiePolicy.module.css";
import WebHeadergrid from "../../comp/WebHeadergrid";
import Headseo from "../headseo";
import Screen from "../../comp/Screen";
import Link from "next/link";
import BaseLayout from "../../comp/BaseLayout";

const PrivacyStatement = () => {
  let WebHeaderListData: WebsiteHeaderProps[] = [
    {
      title: "Digisquares® Cookies Policy",
      paragraph:
        "Digisquares® Governance, Risk, and Compliance helps you comply with the Coolies",
    },
  ];

  return (
    <div>
      <Headseo
        title={`Digisquares | Cookie Policy`}
        heading={`Cookie Policy`}
        description={`Cookies are small pieces of information or text that are issued to your computer when you visit a website and are used to store or track information about your use of the site.`}
        url={`/statements/CookiePolicy`}
        keywords={`Cookies Policy, IP Addresses, cookies`}
      />
      <BaseLayout>
        <div className={styles.TermsandConditionMainContainer}>
          <WebHeadergrid HeaderBannerPropsList={WebHeaderListData} />
          <Screen>
            <div className={styles.TermsandConditionsInfoContainer}>
              <div className={styles.TermsandConditionsLeftContainer}>
                <div
                  className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}
                >
                  <p>
                    Digisquares, Inc. (“Digisquares” or the “Company”) respects
                    the privacy of visitors to its Website (as defined in our
                    <a href="https://www.Digisquares.com">Privacy Statement</a>
                    ). The Digisquares Cookies Policy (the “Policy”) applies to
                    the Digisquares Website and describes the information we
                    collect by automated means through the use of information
                    gathering tools, such as cookies and web beacons.
                  </p>
                </div>
                <div
                  className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}
                  id="cookies"
                >
                  <h2>Cookies</h2>
                  <p>
                    Cookies are small pieces of information or text that are
                    issued to your computer when you visit a website and are
                    used to store or track information about your use of the
                    site.
                    <b></b>
                  </p>
                  <p>
                    Digisquares uses both session‑based and persistent‑based
                    cookies. Session‑based cookies exist only during your web
                    session and expire when you close your internet browser.
                    Persistent‑based cookies are files that stay in one of your
                    browser&apos;s subfolders until you delete them manually or
                    your browser deletes them based on the duration period
                    contained within the persistent cookie&apos;s file.
                  </p>
                  <p>
                    Digisquares uses cookies for several reasons. Some cookies
                    are strictly necessary to enable core site functionality. We
                    refer to these as “required” cookies. For example, we may
                    use required cookies to authenticate your access to various
                    areas of our Website. Other cookies allow us to enhance your
                    browsing experience, tailor content to your preferences, and
                    make your interactions with our Website more meaningful. We
                    refer to these as “functional” cookies. For example, we may
                    use functional cookies to determine whether you have visited
                    our Website before and inform us about site features in
                    which you have interest, thereby permitting us to better
                    tailor our Website content. Functional cookies also allow us
                    to analyze Website traffic so we can measure and improve
                    performance and speed up your searches.
                  </p>
                  <p>
                    In addition to required and functional cookies, some third
                    parties issue cookies through our Website to serve ads that
                    are relevant to your interests based on your browsing
                    activities. These third parties may also collect your
                    browser history or other information to determine how you
                    reached our Website and the website you visit when you leave
                    our Website. Information gathered through these automated
                    means may be associated with the personal information you
                    previously submitted on our Website.
                    <p>
                      In addition to required and functional cookies, some third
                      parties issue cookies through our Website to serve ads
                      that are relevant to your interests based on your browsing
                      activities. These third parties may also collect your
                      browser history or other information to determine how you
                      reached our Website and the website you visit when you
                      leave our Website. Information gathered through these
                      automated means may be associated with the personal
                      information you previously submitted on our Website.
                    </p>
                  </p>
                </div>
                <div
                  className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}
                  id="do-not-track"
                >
                  <h2>Do Not Track</h2>
                  <p>
                    While Digisquares attempts to honor do not track (“DNT”)
                    instructions we receive from your browser, we cannot
                    guarantee that Digisquares will always respond to such
                    signals, in part because of the lack of common industry
                    standard for DNT technology. We continue to monitor
                    developments in DNT technology and stay apprised of DNT
                    industry standards as they evolve.
                  </p>
                </div>
                <div
                  className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}
                  id="web-beacon"
                >
                  <h2>Web Beacons</h2>
                  <p>
                    Web beacons (also known as internet tags, pixel tags, and
                    clear GIFs) are clear electronic images that can recognize
                    certain types of information on your computer, such as the
                    type of browser used to view a website page, when you viewed
                    a particular site linked to the Web beacon, and a
                    description of a site tied to the Web beacon. Certain pages
                    on our Website may contain such Web beacons, which the
                    Company uses to operate and improve the Website.
                  </p>
                </div>
                <div
                  className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}
                  id="ip-address"
                >
                  <h2>IP Addresses</h2>
                  <p>
                    An IP address is a unique identifier that certain electronic
                    devices use to identify and communicate with each other on
                    the Internet. When you visit our Website, we may view the IP
                    address of the device you use to connect to the Internet. We
                    use this information to determine the general physical
                    location of the device and the geographic regions of our
                    visitors.
                  </p>
                </div>
                <div
                  className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}
                  id="your-choice"
                >
                  <h2>Your Choices</h2>
                  <p>
                    You can stop cookies being downloaded to your computer by
                    selecting the appropriate settings on your
                    browser.&nbsp;Most browsers will tell you how to stop
                    accepting new cookies, how to be notified when you receive a
                    new cookie, and how to disable existing cookies.&nbsp; You
                    can find out how to do this for your particular browser by
                    clicking &ldquo;help&ldquo; on your browser&apos;s menu or
                    by visiting&nbsp;
                    <a
                      href="http://www.allaboutcookies.org/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      www.allaboutcookies.org
                    </a>
                    . You may also opt out of certain functional and advertising
                    cookies by clicking on our{" "}
                    <a id="cookie-preference-pop-up"></a>Cookie Preferences.
                    Please note that this does not opt you out of being served
                    generic ads. In addition, without cookies you may not be
                    able to take full advantage of our Website features.
                    <br />
                    <br />
                    In addition to the above, in EMEA and Switzerland, we do not
                    load cookies unless they are strictly necessary. In these
                    countries, you can opt in to us using other cookies.
                  </p>
                </div>
              </div>
              <div className={styles.TermsandConditionsRightContainer}>
                <div className={styles.TermsandConditionsLinks}>
                  <h3>Table of Contents</h3>
                  <ul>
                    <li className={`${styles.listitem} ${styles.listalign}`}>
                      <a href="#cookies">Cookies</a>
                    </li>

                    <li className={`${styles.listitem} ${styles.listalign}`}>
                      <a href="#do-not-track">Do Not Track</a>
                    </li>

                    <li className={`${styles.listitem} ${styles.listalign}`}>
                      <a href="#web-beacon">Web Beacons</a>
                    </li>

                    <li className={`${styles.listitem} ${styles.listalign}`}>
                      <a href="#ip-address">IP Addresses</a>
                    </li>

                    <li className={`${styles.listitem} ${styles.listalign}`}>
                      <a href="#your-choice">Your Choices</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Screen>
          {/* <div className={styles.TermsandConditionsCardLinks}>
               <div className={styles.CardLink1}>
                 <h3>FEATURED RESOURCES</h3>
                 <a href="#" target="_blank" className={`${styles.Carditem} ${styles.listalign}`}>Resource Center</a>
               </div>
               <div className={styles.CardLink2}>
                 <h3>LEARN MORE</h3>
                 <a href="#" target="_blank" className={`${styles.Carditem} ${styles.listalign}`}>Trademarks</a>
               </div>
             </div> */}
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

export default PrivacyStatement;
