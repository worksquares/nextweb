import React from "react";
import { WebsiteHeaderProps } from "../../comp/base/WebsiteHeaderContent";
import styles from "../../styles/more/Privacy.module.css";
import WebHeadergrid from "../../comp/WebHeadergrid";
import Headseo from "../headseo";
import Screen from "../../comp/Screen";
import Link from "next/link";
import BaseLayout from "../../comp/BaseLayout";

const Privacy = () => {
  const WebHeaderListData: WebsiteHeaderProps[] = [
    {
      title: "Digisquares Technologies Private Limited® Privacy Statement",
      paragraph: "Digisquares® Governance, Risk, and Compliance helps you comply with the Privacy",
    },
  ];
  return (
    <div>
      <Headseo
        title="Digisquares | Privacy"
        heading="Privacy"
        description="The privacy of its customers, business partners, event attendees and Website (as defined below) visitors."
        url="/more/Privacy"
        keywords="Privacy Statement, Privacy, PRIVACY STATEMENT, Tracking technologies"
      />
      <BaseLayout>
        <div className={styles.TermsandConditionMainContainer}>
          <WebHeadergrid HeaderBannerPropsList={WebHeaderListData} />
          <Screen>
            <div className={styles.TermsandConditionsInfoContainer}>
              <div className={styles.TermsandConditionsLeftContainer}>
                {/* Existing Sections */}
                <div className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}>
                  <p>
                    Digisquares Technologies Private Limited including its subsidiaries and affiliates (collectively,{" "}
                    <b>Digisquares,</b> <b>we,</b> or <b>us</b>) respects the privacy of its customers, business partners, event
                    attendees, job applicants and Website (as defined below) visitors.
                    <br />
                    <br />
                    The following Privacy Statement explains who we are and the different ways in which we collect, use, and share personal
                    information about you, and how you can exercise your privacy rights. Please take the time to read this Privacy Statement and the
                    related statements in their entirety to ensure you are fully informed. To access a specific policy, you may click on the relevant
                    link below. Note that we may provide additional information about our privacy practices that are specific to one of our websites,
                    events, products, or services.
                  </p>
                  <p>
                    If you have any questions or concerns about our use of your personal information, please contact us using the contact details
                    provided at the bottom of this Privacy Statement.
                  </p>
                  <p>
                    <b>
                      <a href="#">&apos;PRIVACY STATEMENT&apos;</a>
                    </b>
                    . Our Privacy Statement covers our privacy practices with respect to the collection, use, and disclosure of information obtained:
                    (i) through the Digisquares websites that link to this Privacy Statement (our <b>Website</b>); and (ii) events hosted by Digisquares or our
                    business partners and sponsors where we collect information from attendees (&quot;<b>Events</b>&quot;).
                  </p>
                  <p>
                    <a href="#">
                      <b>&apos;COOKIES POLICY&apos;</b>
                    </a>
                    . Our Cookies Policy addresses how we use cookies and other similar tracking technologies when you visit our websites or use our
                    products, services, and mobile applications.
                  </p>
                  <p>
                    <b>
                      <a href="#">&apos;SERVICES PRIVACY STATEMENT&apos;</a>
                    </b>
                    . Our Services Privacy Statement covers our privacy practices in connection with the use of our hosted software applications and
                    related support services, as well as expert services, including professional services, trainings and certifications that we
                    provide to customers. This Services Privacy Statement also describes our privacy practices with respect to customer and partner
                    contact information we process in connection with the purchase and use of our products and services or services or technology
                    provided by our partners to our customers.
                  </p>
                  <p>
                    <a href="#">
                      <b>&apos;APPLICANT PRIVACY STATEMENT&apos;</b>
                    </a>
                    . Our Applicant Privacy Statement covers our privacy practices in connection with an individual&apos;s application for employment
                    at Digisquares.
                  </p>
                </div>

                <div className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`} id="your-privacy-rights">
                  <h2>Your Privacy Rights</h2>
                  <p>
                    We provide you with certain choices regarding the information you provide to us. In particular, you can request access,
                    correction, or deletion of your personal information by contacting us at{" "}
                    <b>
                      <a href="mailto:privacy@Digisquares.com">privacy@Digisquares.com</a>
                    </b>
                    .
                  </p>
                </div>

                <div className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`} id="how-we-use-information-collected">
                  <h2>How We Use Information Collected</h2>
                  <p> We use collected information to: </p>
                  <ul>
                    <li>- Provide and improve our products, services, and events.</li>
                    <li>- Communicate with users about updates, security alerts, and support services.</li>
                    <li>- Manage business relationships, including billing and account management.</li>
                    <li>- Personalize user experiences on our Website.</li>
                    <li>- Comply with legal obligations and enforce our policies.</li>
                  </ul>
                </div>
                <br />

                <div className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`} id="how-we-share-information-collected">
                  <h2>How We Share Information Collected</h2>
                  <p> We may share personal information with: </p>
                  <ul>
                    <li>- Affiliates and subsidiaries for business operations and service improvements.</li>
                    <li>- Service providers that assist with data processing, IT services, and customer support.</li>
                    <li>- Business partners to facilitate co-hosted events and joint marketing efforts.</li>
                    <li>- Legal and regulatory authorities when required by law.</li>
                    <li>- Third parties in case of mergers, acquisitions, or business transfers.</li>
                  </ul>
                </div>
                <br />

                <div className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`} id="how-we-obtain-information">
                  <h2>How We Obtain Information</h2>
                  <p> We collect personal information through various means, including: </p>
                  <ul>
                    <li>
                      1. <b>Direct interactions:</b> When you register for an event, fill out forms on our Website, apply for a job, or communicate
                      with us.
                    </li>
                    <li>
                      2. <b>Automated technologies:</b> When you visit our Website, we collect information using cookies and other tracking
                      technologies.
                    </li>
                    <li>
                      3. <b>Third-party sources:</b> Business partners, service providers, and publicly available sources may provide us with
                      information.
                    </li>
                  </ul>
                </div>
                <br />

                <div className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`} id="legal-basis-for-processing">
                  <h2>Legal Basis for Processing</h2>
                  <p> Our legal basis for processing personal information includes: </p>
                  <ul>
                    <li>
                      1. <b>Consent:</b> When users provide explicit consent for specific processing activities.
                    </li>
                    <li>
                      2. <b>Contractual necessity:</b> When processing is required to fulfill a contract with users.
                    </li>
                    <li>
                      3. <b>Legitimate interests:</b> When processing is necessary for business operations without infringing on users&apos; rights.
                    </li>
                    <li>
                      4. <b>Legal compliance:</b> When required by law or regulatory obligations.
                    </li>
                  </ul>
                </div>
                <br />
                <br />

                <div className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`} id="security-and-confidentiality">
                  <h2>Security and Confidentiality</h2>
                  <p>
                    We implement appropriate security measures to protect personal information from unauthorized access, loss, misuse, or alteration.
                    These measures include encryption, access controls, and secure data storage practices.
                  </p>
                </div>

                <div className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`} id="retention">
                  <h2>Retention</h2>
                  <p>
                    We retain personal information as long as necessary to fulfill the purposes outlined in this Privacy Policy. Retention periods
                    vary based on legal, regulatory, and operational requirements. When information is no longer needed, we securely delete or
                    anonymize it.
                  </p>
                </div>

                <div className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`} id="international-transfer-of-data">
                  <h2>International Transfer of Data</h2>
                  <p>
                    Personal information may be transferred to and processed in countries outside the user&apos;s jurisdiction, including those with
                    different data protection laws. We take measures to ensure data is handled securely, including Standard Contractual Clauses and
                    other safeguards.
                  </p>
                </div>

                <div className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`} id="refund-policy">
                  <h2>Refund Policy</h2>
                  <p>
                    In line with our commitment to transparency, we have updated our refund policy. Refunds will now be processed within{" "}
                    <strong>5–7 working days</strong> from the date of approval. This timeframe covers both processing the refund and crediting your
                    bank account. We appreciate your patience and trust in our services.
                  </p>
                </div>

                <div className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`} id="purpose">
                  <h2>Purpose</h2>
                  <p>
                    Digisquares Technologies Private Limited including its subsidiaries and affiliates (collectively,{" "}
                    <b>Digisquares,</b> <b>we,</b> or <b>us</b>) respects the privacy of its Website (as defined below) and Events (as defined below)
                    registrants and attendees.
                    <br />
                    <br />
                    This Privacy Statement (the <b>Privacy Statement</b>) describes who we are, the information that we collect about you, how we
                    obtain your personal information, and how we may use or disclose that information in connection with the Website and Events. This
                    Privacy Statement also describes the measures we take to protect the security of your personal information and how you can contact
                    us about our privacy practices, including to exercise your privacy rights.
                  </p>
                </div>
                {/* ... other existing sections remain unchanged ... */}

                <div className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`} id="scope">
                  <h2>Scope</h2>
                  <p> This Privacy Policy applies to information obtained through:</p>
                  <ul>
                    <li>
                      - Digisquares websites that link to this Privacy Policy (our &quot;Website&quot;).
                    </li>
                    <li>- Events hosted or sponsored by Digisquares where attendee data is collected.</li>
                    <li>- Services and products provided to our customers, including software applications and support services.</li>
                  </ul>
                  <p>
                    This Privacy Policy does not cover third-party websites, applications, or services that may be linked from our Website or Events.
                  </p>
                </div>
                <br />

                <div className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`} id="about-us">
                  <h2>About Us</h2>
                  <p>
                    Digisquares Technologies Private Limited, along with its subsidiaries and affiliates (collectively,{" "}
                    <b>&quot;Digisquares,&quot; &apos;we,&apos; or &apos;us&apos;</b>), is committed to safeguarding the privacy of its customers,
                    business partners, event attendees, job applicants, and website visitors. This Privacy Policy outlines how we collect, use,
                    disclose, and protect personal information.
                  </p>
                </div>

                <div className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`} id="general">
                  <h2>General</h2>
                  <p>
                    <b>Do Not Track</b>
                    <br />
                    While Digisquares attempts to honor do not track (&quot;DNT&quot;) instructions we receive from a Visitor&apos;s browser, we
                    cannot guarantee that Digisquares will always respond to such signals, in part, because of the lack of common industry standard
                    for DNT technology. We continue to monitor developments in DNT technology and stay apprised of DNT industry standards as they
                    evolve.
                  </p>
                  <p>
                    <b>Third Party Websites and Applications</b>
                    <br />
                    This Website may link to websites that are not owned or controlled by Digisquares. As such, this Privacy Statement does not apply
                    to information collected on any third‑party site or by any third‑party application that may link to or be accessible from the
                    Website. This Privacy Statement does not apply to information collected by customers, our business partners, and other third
                    parties or third‑party applications or services, even if this information is collected using our Website or at Events.
                  </p>
                  <p>
                    <b>Public Forums and Blogs</b>
                    <br />
                    Please note that any information you post or disclose in public forums will become public information, and may be available to
                    users and the general public. We urge you to be very careful when deciding to disclose your personal information, or any other
                    information in our public forums. Proper access and use of information provided on the Website, including contributions to our
                    public forums, is governed by our Website Terms of Use and known or suspected violations should be reported to our Privacy team
                    via e‑mail at{" "}
                    <a href="mailto:privacy@Digisquares.com">privacy@Digisquares.com</a>.
                  </p>
                  <p>
                    <b>Children</b>
                    <br />
                    We do not knowingly collect personal information from anyone under the age of 16. If you are under 16, please do not attempt to
                    fill out our forms or send any personal information about yourself to us. If we learn that we have collected Personal Information
                    from a child under age 16, we will delete that information promptly.
                  </p>
                  <p>
                    <b>Changes to Our Privacy Statement</b>
                    <br />
                    Digisquares reserves the right to update or change this Privacy Statement from time to time. If we make material changes to this
                    Privacy Statement, we will notify you through an appropriate online notice or other means (which may include, if we have your
                    contact details, notification by e‑mail) and obtain your consent if and where required by applicable law. We ask that you review
                    the Privacy Statement periodically to stay informed about any updates or changes that we may have made.
                  </p>
                  <p>
                    You can see when this Privacy Statement was last updated by checking the &quot;effective as of&quot; date displayed at the top of
                    this Privacy Statement.
                  </p>
                  <p>
                    <b>Contact Information</b>
                    <br />
                  </p>
                  <p>
                    E‑mail: <a href="mailto:info@Digisquares.com">info@Digisquares.com</a>
                  </p>
                </div>
              </div>
              <div className={styles.TermsandConditionsRightContainer}>
                <div className={styles.TermsandConditionsLinks}>
                  <h3>Table of Contents</h3>
                  <ul>
                    {/* Reordered List Items based on privacy importance */}
                    <li className={`${styles.listitem} ${styles.PrivacyStatementlist11}`}>
                      <a href="#your-privacy-rights">Your Privacy Rights</a>
                    </li>
                    <li className={`${styles.listitem} ${styles.PrivacyStatementlist5}`}>
                      <a href="#how-we-use-information-collected">How We Use Information Collected</a>
                    </li>
                    <li className={`${styles.listitem} ${styles.PrivacyStatementlist6}`}>
                      <a href="#how-we-share-information-collected">How We Share Information Collected</a>
                    </li>
                    <li className={`${styles.listitem} ${styles.PrivacyStatementlist4}`}>
                      <a href="#how-we-obtain-information">How We Obtain Information</a>
                    </li>
                    <li className={`${styles.listitem} ${styles.PrivacyStatementlist7}`}>
                      <a href="#legal-basis-for-processing">Legal Basis for Processing</a>
                    </li>
                    <li className={`${styles.listitem} ${styles.PrivacyStatementlist9}`}>
                      <a href="#security-and-confidentiality">Security and Confidentiality</a>
                    </li>
                    <li className={`${styles.listitem} ${styles.PrivacyStatementlist10}`}>
                      <a href="#retention">Retention</a>
                    </li>
                    <li className={`${styles.listitem} ${styles.PrivacyStatementlist8}`}>
                      <a href="#international-transfer-of-data">International Transfer of Data</a>
                    </li>
                    <li className={`${styles.listitem}`}>
                      <a href="#refund-policy">Refund Policy</a>
                    </li>
                    <li className={`${styles.listitem} ${styles.PrivacyStatementlist1}`}>
                      <a href="#purpose">Purpose</a>
                    </li>
                    <li className={`${styles.listitem} ${styles.PrivacyStatementlist3}`}>
                      <a href="#scope">Scope</a>
                    </li>
                    <li className={`${styles.listitem} ${styles.PrivacyStatementlist2}`}>
                      <a href="#about-us">About Us</a>
                    </li>
                    <li className={`${styles.listitem} ${styles.PrivacyStatementlist12}`}>
                      <a href="#general">General</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Screen>
          <Link legacyBehavior href="/contact/ContactUs/">
            <div className={styles.FixedContainer}>
              <p className={styles.FixedOption}>Contact</p>
            </div>
          </Link>
        </div>
      </BaseLayout>
    </div>
  );
};

export default Privacy;
