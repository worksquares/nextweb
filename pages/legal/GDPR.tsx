import React from "react";
import styles from "../../styles/legal/GDPR.module.css";
import Headseo from "../headseo";
import Screen from "../../comp/Screen";
import Link from "next/link";
import BaseLayout from "../../comp/BaseLayout";

const GDPR = () => {

  return (
    <div>
      <Headseo
        title={`Digisquares | GDPR`}
        heading={`GDPR`}
        description={`Keeping your data secure is our first priority.`}
        url={`/statements/GDPR`}
        keywords={`Data secure, Risk and Compliance, GDPR compliance, General Data Protection Regulation`}
      />
      <BaseLayout>
        <div className={styles.GDPRMainContainer}>
          <div className={styles.GDPRBanner}>
            <h1>Keeping your data secure is our first priority</h1>
            <p>
              Digisquares® Governance, Risk and Compliance helps you comply with
              the GDPR
            </p>
          </div>
          <Screen>
            <div className={styles.GDPRInformation}>
              <div className={styles.GDPRInfoContainer}>
                <div className={styles.Information1}>
                  <h2>Why we’re committed to GDPR compliance</h2>
                  <p>
                    The European Union’s General Data Protection Regulation
                    (GDPR) is all about protecting its citizens’ and residents’
                    data and privacy. The GDPR outlines global privacy
                    requirements governing how to manage and protect personal
                    data while respecting individual choice regardless of where
                    data is sent, processed, or stored.
                  </p>
                  <p>
                    Digisquares believes that the GDPR is essential for
                    strengthening data protection laws and individual privacy
                    rights across the European Union. That&apos;s why we have{" "}
                    <a href="#">announced</a> new service delivery developments
                    that will allow our customers to request to have their
                    EU-hosted data always handled exclusively within the EU.
                    <br />
                  </p>
                  <p>
                    Due to our principled approach to privacy, security, and
                    compliance, we have one of the most extensive compliance
                    portfolios in the industry. We comply with these key
                    standards: ISO 27001, ISO/IEC 27018, SSAE SOC 1 Type 2 and
                    SOC 2 Type, FedRAMP, and others.
                    <br />
                  </p>
                </div>
                <div className={styles.Information1}>
                  <h2>
                    Trust – Built upon a safe, secure, and compliant cloud
                  </h2>
                  <p>
                    As you prepare to comply with the GDPR, here is what else
                    you can expect from us:
                  </p>
                  <ul>
                    <li>
                      <b>You maintain control.</b> When you entrust your data to
                      the Digisquares cloud, you remain the sole owner. You
                      retain the rights, title, and interest in the data you
                      store in our cloud services. You can take advantage of the
                      features inherent in the Digisquares Platform<sup>®</sup>{" "}
                      to meet your GDPR obligations related to deletion,
                      rectification, transfer of, access to, and objection to
                      processing of personal data.
                    </li>
                    <li>
                      <b>You have full visibility.</b> The Digisquares cloud
                      protects your data from inappropriate access or use by
                      unauthorised individuals with robust measures, including
                      restricting access by Digisquares personnel and
                      subcontractors. In addition to these commitments, we
                      provide you with the ability to monitor how data is
                      managed and who has access to what data within your
                      organisation.
                      <br />
                      <span className={styles.listTop}>
                        Our world‑class data centres are certified to
                        internationally recognised security standards, protected
                        by 24‑hour physical surveillance, and continuously
                        monitored using strict access controls. Our
                        single‑tenant architecture keeps your data logically
                        isolated from the data of other customers.
                        <br />
                      </span>
                      <span className={styles.listTop}>
                        Securing our cloud infrastructure is only part of a
                        comprehensive security strategy. Each cloud service has
                        built‑in security features to help you secure your data,
                        including field‑level encryption, encryption in transit,
                        comprehensive role‑based access control, application
                        scoping, access and transaction logging and monitoring,
                        and support for multi‑factor authentication.
                      </span>
                    </li>
                    <li>
                      <b>We commit to rapid response.</b>Digisquares has robust
                      security incident response processes and contractually
                      commits to notifying our customers in accordance with the
                      GDPR. With active threat intelligence and advanced machine
                      learning capabilities, our security team does not have to
                      wait for an incident to occur. We use real‑time data to
                      predict issues, and then prioritise and resolve them based
                      on the impact to your data or services.
                    </li>
                  </ul>
                </div>
                <div className={styles.Information1}>
                  <h2>Partnering to comply with the GDPR</h2>
                  <p>
                    Because compliance is a shared responsibility, we are
                    committed to helping you comply with the GDPR. Requirements
                    such as greater data access and erasure rules, privacy by
                    design, and data breach notification processes may mean
                    changes for your organisation. Therefore, it is important to
                    understand your obligations related to the GDPR regardless
                    of where your organisation resides.
                  </p>
                  <p>
                    We have recently updated our data processing addendum (DPA)
                    in compliance with the requirements set forth in the GDPR.
                    Our DPA also gives our customers contractual assurances that
                    personal data can be lawfully transferred from the European
                    Economic Area to the Digisquares services. For more
                    information about our DPA, please review the FAQs.
                  </p>
                </div>
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

export default GDPR;
