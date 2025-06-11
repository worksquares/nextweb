import Link from "next/link";
import { WebsiteHeaderProps } from "../../comp/base/WebsiteHeaderContent";
import BaseLayout from "../../comp/BaseLayout";
import Screen from "../../comp/Screen";
import WebHeadergrid from "../../comp/WebHeadergrid";
import styles from "../../styles/legal/Privacy.module.css";
import Headseo from "../headseo";

const Privacy = () => {
  let WebHeaderListData: WebsiteHeaderProps[] = [
    {
      title: "Digisquares® Privacy Statement",
      paragraph:
        "Digisquares® Governance, Risk, and Compliance helps you comply with the Privacy",
    },
  ];
  return (
    <div>
      <Headseo
        title={`Digisquares | Privacy`}
        heading={`Privacy`}
        description={`The privacy of its customers, business partners, event attendees, job applicants and Website (as defined below) visitors.`}
        url={`/statements/PrivacyStatement`}
        keywords={`Privacy Statement, Privacy, PRIVACY STATEMENT, Tracking technologies`}
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
                    Digisquares Technologies Private Limited, including its
                    subsidiaries and affiliates (collectively, &quot;
                    <b>Digisquares,</b>&quot; &quot;<b>we,</b>&quot; or &quot;
                    <b>us</b>&quot;) respects the privacy of its customers,
                    business partners, event attendees, job applicants and
                    Website (as defined below) visitors.
                    <br />
                    <br />
                    The following Privacy Statement explains who we are and the
                    different ways in which we collect, use, and share personal
                    information about you, and how you can exercise your privacy
                    rights. Please take the time to read this Privacy Statement
                    and the related statements in their entirety to ensure you
                    are fully informed. To access a specific policy, you may
                    click on the relevant link below. Note that we may provide
                    additional information about our privacy practices that are
                    specific to one of our websites, events, products, or
                    services.
                  </p>
                  <p>
                    If you have any questions or concerns about our use of your
                    personal information, please contact us using the contact
                    details provided at the bottom of this Privacy Statement.
                  </p>
                  <p>
                    <b>
                      <a href="#">PRIVACY STATEMENT</a>
                    </b>
                    Our Privacy Statement covers our privacy practices with
                    respect to the collection, use, and disclosure of
                    information obtained: (i) through the Digisquares websites
                    that link to this Privacy Statement (our &quot;
                    <b>Website</b>&quot;); and (ii) events hosted by Digisquares
                    or our business partners and sponsors where we collect
                    information from attendees (“
                    <b>Events</b>”).
                  </p>
                  <p>
                    <a href="#">
                      <b>COOKIES POLICY</b>
                    </a>
                    Our Cookies Policy addresses how we use cookies and other
                    similar tracking technologies when you visit our websites or
                    use our products, services, and mobile applications.
                  </p>
                  <p>
                    <b>
                      <a href="#">SERVICES PRIVACY STATEMENT</a>
                    </b>
                    Our Services Privacy Statement covers our privacy practices
                    in connection with the use of our hosted software
                    applications and related support services, as well as expert
                    services, including professional services, trainings and
                    certifications that we provide to customers. This Services
                    Privacy Statement also describes our privacy practices with
                    respect to customer and partner contact information we
                    process in connection with the purchase and use of our
                    products and services or services or technology provided by
                    our partners to our customers.
                  </p>
                  <p>
                    <a href="#">
                      <b>APPLICANT PRIVACY STATEMENT</b>
                    </a>
                    Our Applicant Privacy Statement covers our privacy practices
                    in connection with an individual’s application for
                    employment at Digisquares.
                  </p>
                </div>
                <div
                  className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}
                  id="purpose"
                >
                  <h2>Purpose</h2>
                  <p>
                    Digisquares Technologies Private Limited including its
                    subsidiaries and affiliates (collectively, &quot;
                    <b>Digisquares,</b>&quot; &quot;<b>we,</b>&quot; or &quot;
                    <b>us</b>&quot;) respects the privacy of its Website (as
                    defined below) and Events (as defined below) registrants and
                    attendees.
                    <br />
                    <br />
                    This Privacy Statement (the &quot;<b>Privacy Statement</b>
                    &quot;) describes who we are, the information that we
                    collect about you, how we obtain your personal information,
                    and how we may use or disclose that information in
                    connection with the Website and Events. This Privacy
                    Statement also describes the measures we take to protect the
                    security of your personal information and how you can
                    contact us about our privacy practices, including to
                    exercise your privacy rights.
                  </p>
                </div>
                <div
                  className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}
                  id="about-us"
                >
                  <h2>About Us</h2>
                  <p>
                    Digisquares makes work, work better for people. Our
                    cloud‑based platform and products streamline and simplify
                    how work gets done. Our solutions, and the custom solutions
                    built by our customers and partners, help people do their
                    best work. We are headquartered in Coimbatore, Tamilnadu
                    but have subsidiaries and affiliates around the world.
                  </p>
                  <p>
                    For more information about Digisquares, please see the{" "}
                    <a href="https://www.Digisquares.com">About Us</a> section
                    of our Website.
                  </p>
                </div>
                <div
                  className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}
                  id="scope"
                >
                  <h2>Scope</h2>
                  <p>
                    This Privacy Statement only covers our privacy practices
                    with respect to the collection, use, and disclosure of
                    information obtained: (i) through the Digisquares websites
                    that link to this Privacy Statement (&quot;<b>Website</b>
                    &quot;); and (ii) event registration or attendance
                    information for events hosted by us or our business partners
                    where we collect information from registrants and attendees
                    (“<b>Events</b>”).
                  </p>
                </div>
                <div
                  className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}
                  id="how-we-obtain-information"
                >
                  <h2>How We Obtain Information</h2>
                  <p>
                    As further described below, we collect several types of
                    information from and about you that broadly falls into the
                    following categories:
                  </p>
                  <p>
                    <i>1. Information you voluntarily provide to us:</i>
                  </p>
                  <ul>
                    <li>
                      When filling out forms on our Website (including without
                      limitation, name, mailing address, email address, and
                      telephone number).
                    </li>
                    <li>
                      When you post material to our Website, participate in
                      bulletin boards, chat rooms, blogs, comment threads,
                      forums, or other interactive features of our Website,
                      register, or request further information or services from
                      us.&nbsp;
                    </li>
                    <li>
                      When you register to use a demo or developer instance of
                      our cloud service.
                    </li>
                    <li>When you enter a contest or promotion we sponsor.</li>
                    <li>When you report a problem with our Website.</li>
                    <li>When you contact us.</li>
                    <li>When you complete our surveys.</li>
                    <li>When you register for or attend an Event.</li>
                    <li>
                      Other information you may submit to us related to your use
                      of our Website or attendance to an Event, including
                      without limitation, billing information.
                    </li>
                  </ul>
                  <p>
                    <i>2. Information from third parties</i>
                    <br />
                    <br />
                    From time to time, we may collect and use information we
                    receive about you from third parties in connection with your
                    use of the Website or attendance to an Event. For instance,
                    we may receive information about you from our business
                    partners related to your registration information for
                    Events. We also use third parties for reporting and
                    analytics to measure the effectiveness of our Website and
                    marketing efforts, and to identify areas for improvement.
                    <br />
                    <br />
                    We may combine information we collect from third parties
                    with information you provide us to update, expand or provide
                    you with tailored information regarding our products,
                    services and Events.
                  </p>
                  <p>
                    3.{" "}
                    <i>
                      Information we collect as you navigate through the Website
                    </i>
                    <br />
                    <br />
                    As you navigate through the Website, we may also
                    automatically collect details about your visits Website,
                    including your IP address, usage patterns, traffic data,
                    location data, logs and other communication data and the
                    resources that you access, as well as information about your
                    computer and internet connection, including your operating
                    system and browser type.
                    <br />
                    <br />
                    We also collect some of this information using cookies and
                    similar tracking technologies. For detailed information,
                    please see our{" "}
                    <a href="https://www.Digisquares.com">Cookies Policy</a>.
                  </p>
                </div>
                <div
                  className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}
                  id="how-we-use-information-collected"
                >
                  <h2>How We Use Information Collected</h2>
                  <p>
                    We may use information that we collect about you for the
                    following purposes:
                  </p>
                  <ul>
                    <li>To operate, maintain and improve Website.</li>
                    <li>
                      To register you for Events you sign up for with us and
                      populate profiles for you in our records.&nbsp;&nbsp;
                    </li>
                    <li>
                      To provide you with information, products or services that
                      you request from us.
                    </li>
                    <li>
                      To carry out our obligations and enforce our rights
                      arising from any contracts entered into between you and
                      us, including without limitation, our Website Terms of
                      Use.
                    </li>
                    <li>
                      To notify you about changes to our Website or obtain any
                      required consent.
                    </li>
                    <li>
                      To allow you to participate in interactive features of our
                      Website, when you choose to do so.
                    </li>
                    <li>
                      For industry analysis, benchmarking, analytics, marketing,
                      and other business purposes.&nbsp;
                    </li>
                    <li>
                      To track your browsing behavior, such as the pages you
                      visited over time, for analytics and advertising purposes.
                    </li>
                    <li>To communicate with you about Events.</li>
                    <li>
                      To contact you for marketing purposes, in accordance with
                      your marketing preferences (for example, we may use your
                      information to contact you to further discuss your
                      interests in our services and products or other Events).
                    </li>
                  </ul>
                  <p>
                    By registering for Now Community, Now Learning, Now Creator,
                    or other future sites within the Digisquares ecosystem,
                    Digisquares will create a Now Profile on your behalf that
                    will allow you to access any of the other listed sites using
                    the same username and password for all sites. The personal
                    information that may be collected during registration and/or
                    use of any one of these sites that you choose to make
                    public, may be visible to other users of the sites. In
                    addition, your personal information may be used by the other
                    sites for the purposes of enhancing your experience and
                    improving the quality of our services.
                  </p>
                  <p>
                    If you ask us to contact you about goods and services, we
                    may use your personal information or permit selected third
                    parties to use your personal information to contact you
                    about such goods and services. You can withdraw consent at a
                    later time by clicking on the “unsubscribe” link located in
                    the emails we send you. For more information, see the
                    section on “
                    <a href="#your-privacy-rights">Your Privacy Rights</a>”
                    below.&nbsp;
                  </p>
                  <p>
                    Additional information about our privacy practices with
                    respect to our collection and use of information from Events
                    may be found in additional privacy statements on the
                    registration sites for Events hosted by us.
                  </p>
                </div>
                <div
                  className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}
                  id="how-we-share-information-collected"
                >
                  <h2>How We Share Information Collected</h2>
                  <p>
                    We may disclose personal information that you provide to us
                    to the following categories of recipients:
                  </p>
                  <ul>
                    <li>
                      To our <i>subsidiaries and affiliates</i> (including those
                      located outside the European Economic Area and
                      Switzerland) who will use it only for the purposes
                      described in this Privacy Statement.
                    </li>
                    <li>
                      To our{" "}
                      <i>
                        contractors, business partners and service providers
                      </i>{" "}
                      we use to support our business or who provide services on
                      our behalf. For clarity, Digisquares does not share Event
                      attendee data with business partners or sponsors unless
                      you opt in to such sharing via an Event registration form
                      or you attend an Event hosted by Digisquares and allow our
                      business partners or sponsors to scan your attendee badge.
                      If you do not wish for your information to be shared with
                      our business partners or sponsors, you may choose not to
                      opt in via the event registration forms and elect not to
                      have your badge scanned by a partner at an Event. If you
                      choose to share your information with business partners or
                      sponsors, your information will be subject to the
                      respective business partner or sponsor’s privacy
                      statement.
                    </li>
                    <li>
                      To a <i>potential buyer</i> (and its agents and advisors)
                      in connection with any proposed merger, acquisition, or
                      any form of sale or transfer of some or all of our assets
                      (including in the event of a reorganization, dissolution
                      or liquidation), in which case personal information held
                      by us about you will be among the assets transferred to
                      the buyer or acquirer.
                    </li>
                    <li>
                      To{" "}
                      <i>
                        any competent law enforcement body, regulatory,
                        government agency, court or other third party
                      </i>{" "}
                      to: (i) comply with any court order, a request from any
                      competent law enforcement agency, or any other legal
                      obligation; (ii) enforce or apply our Website Terms of Use
                      or terms of any other agreement; (iii) and protect the
                      rights, property, or safety of Digisquares or others.
                    </li>
                    <li>
                      To any <i>other person with your consent</i> to the
                      disclosure.
                    </li>
                  </ul>
                  <p>
                    We do not sell, rent or trade information collected through
                    the Website with third parties for their promotional
                    purposes.&nbsp;
                  </p>
                </div>
                <div
                  className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}
                  id="legal-basis-for-processing"
                >
                  <h2>Legal Basis for Processing</h2>
                  <p>
                    If you are from the European Economic Area, our legal basis
                    for collecting and using the personal information described
                    above will depend on the personal information concerned and
                    the specific context in which we collect it.
                  </p>
                  <p>
                    However, we will normally collect personal information from
                    you only where we have your consent to do so, where we need
                    the personal information to perform a contract with you, or
                    where the processing is in our legitimate interests and not
                    overridden by your data protection interests or fundamental
                    rights and freedoms. In some cases, we may also have a legal
                    obligation to collect personal information from you.
                  </p>
                  <p>
                    If you have questions about or need further information
                    concerning the legal basis on which we collect and use your
                    personal information, please contact us using the contact
                    details provided in the &quot;Contact Information&quot;
                    section below.
                  </p>
                </div>
                <div
                  className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}
                  id="international-transfer-of-data"
                >
                  <h2>International Transfer of Data</h2>
                  <p>
                    Digisquares stores and processes any information collected
                    in connection with the Website or an Event in: (i) any
                    country where we have facilities, (ii) any country in which
                    we engage service providers; or (iii) any country where
                    Events are held. A list of Digisquares’s global offices is
                    available&nbsp;
                    <a
                      href="http://www.Digisquares.com"
                      rel="noreferrer"
                      target="_blank"
                    >
                      here
                    </a>
                    .
                  </p>
                  <p>
                    If you are a visitor from the European Economic Area (&quot;
                    <b>EEA</b>&quot;), we will protect your personal information
                    when it is transferred outside of the EEA by:
                  </p>
                  <ul>
                    <li>
                      Processing it in a territory which the European Commission
                      has determined provides an adequate level of protection
                      for personal information; or
                    </li>
                    <li>
                      Otherwise implementing appropriate safeguards to protect
                      your personal information, including through the use of
                      Standard Contractual Clauses or another lawful transfer
                      mechanism approved by the European Commission.
                    </li>
                  </ul>
                  <p>
                    If you require further information about our international
                    transfers of personal information, please contact us using
                    the contract details in the “Contact Information” section
                    further below.
                  </p>
                </div>
                <div
                  className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}
                  id="security-and-confidentiality"
                >
                  <h2>Security and Confidentiality</h2>
                  <p>
                    Digisquares maintains appropriate technical and
                    organizational measures to protect the personal information
                    obtained through the Website and in connection with Events
                    from accidental or unlawful destruction, loss, alteration,
                    unauthorized disclosure and access. Digisquares personnel
                    and service providers with access to personal information
                    collected through our Websites or from Event attendees are
                    required to keep such information confidential and secure.
                  </p>
                </div>
                <div
                  className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}
                  id="retention"
                >
                  <h2>Retention</h2>
                  <p>
                    We will retain your personal information if we have a
                    business need to do so or for as long as is needed to
                    fulfill the purposes outlined in this Privacy Statement,
                    unless a longer retention period is required by law (for
                    example, to comply with applicable legal, tax or accounting
                    requirements).
                    <br />
                    <br />
                    When we have no ongoing legitimate business need to process
                    your personal information, we will either delete or
                    anonymize it or, if this is not possible (for example,
                    because your personal information has been stored in backup
                    archives), then we will securely store your personal
                    information and isolate it from any further processing until
                    deletion is possible. <br />
                  </p>
                </div>
                <div
                  className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}
                  id="your-privacy-rights"
                >
                  <h2>Your Privacy Rights</h2>
                  <p>
                    We provide you with certain choices regarding the
                    information you provide to us. In particular:
                  </p>
                  <ul>
                    <li>
                      If you wish to{" "}
                      <i>access, correct, update, or request deletion</i> of
                      <i> </i>your personal information, you can send us an
                      e‑mail at{" "}
                      <a href="mailto:privacy@Digisquares.com">
                        privacy@Digisquares.com
                      </a>
                      . Event registrants and attendees may update their user
                      profiles for Events we host by logging into the applicable
                      event website or registration page.
                    </li>
                    <li>
                      Certain jurisdictions, for example the European Economic
                      Area, provide their residents specific privacy rights
                      under applicable law. We will process your requests to
                      exercise such rights, including if you{" "}
                      <i>object to processing</i> of your personal information,
                      ask us to <i>restrict processing</i> of your personal
                      information or <i>request portability</i> of your personal
                      information, in accordance with applicable data protection
                      laws. You may send us an e‑mail at{" "}
                      <a href="mailto:privacy@Digisquares.com">
                        privacy@Digisquares.com
                      </a>{" "}
                      or using the contact details under the “Contact Us”
                      heading below.
                    </li>
                    <li>
                      If you do not wish to receive our email{" "}
                      <i>marketing communication</i> for promotional purposes,
                      you may opt‑out by clicking on the “unsubscribe” or
                      “opt‑out” link in the marketing e‑mails we send you. To
                      opt‑out of other forms of marketing (such as
                      telemarketing), please contact us using the contact
                      details provided under the “Contact Information” section
                      below.
                    </li>
                    <li>
                      In addition, if we process your personal information in
                      reliance upon your consent, you can contact us at any time
                      to <i>withdraw your consent</i>.
                    </li>
                    <li>
                      You have the{" "}
                      <i>right to complain to a data protection authority</i> if
                      you are unhappy about our collection and use of your
                      personal information. For more information, please contact
                      your local data protection authority. Contact details for
                      data protection authorities in the European Economic Area,
                      Switzerland, and certain non‑European countries (including
                      the US and Canada) are available
                      <a
                        href="http://ec.europa.eu/justice/data-protection/article-29/structure/data-protection-authorities/index_en.htm"
                        rel="noreferrer"
                        target="_blank"
                      >
                        here
                      </a>
                      .
                    </li>
                  </ul>
                  <p>
                    We will respond to such requests in accordance with the
                    requirements of applicable data protection laws. Please note
                    that in order to fulfil your request, we may need you to
                    provide certain information to verify your identity.
                  </p>
                </div>
                <div
                  className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}
                  id="general"
                >
                  <h2>General</h2>
                  <p>
                    <b>Do Not Track</b>
                    <br />
                    While Digisquares attempts to honor do not track (“DNT”)
                    instructions we receive from a Visitor’s browser, we cannot
                    guarantee that Digisquares will always respond to such
                    signals, in part, because of the lack of common industry
                    standard for DNT technology. We continue to monitor
                    developments in DNT technology and stay apprised of DNT
                    industry standards as they evolve.
                  </p>
                  <p>
                    <b>Third Party Websites and Applications</b>
                    <br />
                    This Website may link to websites that are not owned or
                    controlled by Digisquares. As such, this Privacy Statement
                    does not apply to information collected on any third‑party
                    site or by any third‑party application that may link to or
                    be accessible from the Website. This Privacy Statement does
                    not apply to information collected by customers, our
                    business partners, and other third parties or third‑party
                    applications or services, even if this information is
                    collected using our Website or at Events.
                  </p>
                  <p>
                    <b>Public Forums and Blogs</b>
                    <br />
                    Please note that any information you post or disclose in
                    public forums will become public information, and may be
                    available to users and the general public. We urge you to be
                    very careful when deciding to disclose your personal
                    information, or any other information in our public forums.
                    Proper access and use of information provided on the
                    Website, including contributions to our public forums, is
                    governed by our Website Terms of Use and known or suspected
                    violations should be reported to our Privacy team via e‑mail
                    at&nbsp;
                    <a href="mailto:privacy@Digisquares.com">
                      privacy@Digisquares.com
                    </a>
                    .
                  </p>
                  <p>
                    <b>Children</b>
                    <br />
                    We do not knowingly collect personal information from anyone
                    under the age of 16. If you are under 16, please do not
                    attempt to fill out our forms or send any personal
                    information about yourself to us. If we learn that we have
                    collected Personal Information from a child under age 16, we
                    will delete that information promptly.
                  </p>
                  <p>
                    <b>Changes to Our Privacy Statement</b>
                    <br />
                    Digisquares reserves the right to update or change this
                    Privacy Statement from time to time. If we make material
                    changes to this Privacy Statement, we will notify you
                    through an appropriate online notice or other means (which
                    may include, if we have your contact details, notification
                    by e‑mail) and obtain your consent if and where required by
                    applicable law. We ask that you review the Privacy Statement
                    periodically to stay informed about any updates or changes
                    that we may have made.
                  </p>
                  <p>
                    You can see when this Privacy Statement was last updated by
                    checking the “effective as of” date displayed at the top of
                    this Privacy Statement.
                  </p>
                  <p>
                    <b>Contact Information</b>
                    <br />
                  </p>
                  <p>
                    E‑mail:{" "}
                    <a href="mailto:info@Digisquares.com">
                      info@Digisquares.com
                    </a>
                  </p>
                </div>
              </div>
              <div className={styles.TermsandConditionsRightContainer}>
                <div className={styles.TermsandConditionsLinks}>
                  <h3>Table of Contents</h3>
                  <ul>
                    <li
                      className={`${styles.listitem} ${styles.PrivacyStatementlist1}`}
                    >
                      <a href="#purpose">Purpose</a>
                    </li>

                    <li
                      className={`${styles.listitem} ${styles.PrivacyStatementlist2}`}
                    >
                      <a href="#about-us">About Us</a>
                    </li>

                    <li
                      className={`${styles.listitem} ${styles.PrivacyStatementlist3}`}
                    >
                      <a href="#scope">Scope</a>
                    </li>

                    <li
                      className={`${styles.listitem} ${styles.PrivacyStatementlist4}`}
                    >
                      <a href="#how-we-obtain-information">
                        How We Obtain Information
                      </a>
                    </li>

                    <li
                      className={`${styles.listitem} ${styles.PrivacyStatementlist5}`}
                    >
                      <a href="#how-we-use-information-collected">
                        How We Use Information Collected
                      </a>
                    </li>

                    <li
                      className={`${styles.listitem} ${styles.PrivacyStatementlist6}`}
                    >
                      <a href="#how-we-share-information-collected">
                        How We Share Information Collected
                      </a>
                    </li>

                    <li
                      className={`${styles.listitem} ${styles.PrivacyStatementlist7}`}
                    >
                      <a href="#legal-basis-for-processing">
                        Legal Basis for Processing
                      </a>
                    </li>

                    <li
                      className={`${styles.listitem} ${styles.PrivacyStatementlist8}`}
                    >
                      <a href="#international-transfer-of-data">
                        International Transfer of Data
                      </a>
                    </li>

                    <li
                      className={`${styles.listitem} ${styles.PrivacyStatementlist9}`}
                    >
                      <a href="#security-and-confidentiality">
                        Security and Confidentiality
                      </a>
                    </li>

                    <li
                      className={`${styles.listitem} ${styles.PrivacyStatementlist10}`}
                    >
                      <a href="#retention">Retention</a>
                    </li>

                    <li
                      className={`${styles.listitem} ${styles.PrivacyStatementlist11}`}
                    >
                      <a href="#your-privacy-rights">Your Privacy Rights</a>
                    </li>

                    <li
                      className={`${styles.listitem} ${styles.PrivacyStatementlist12}`}
                    >
                      <a href="#general">General</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Screen>
          <Link href={"/contact/ContactUs/"}>
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
