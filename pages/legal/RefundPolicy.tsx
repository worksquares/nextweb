import React from "react";
import Headseo from "../headseo";
import styles from "../../styles/legal/Terms.module.css";
import WebHeadergrid from "../../comp/WebHeadergrid";
import Screen from "../../comp/Screen";
import { WebsiteHeaderProps } from "../../comp/base/WebsiteHeaderContent";
import Link from "next/link";
import BaseLayout from "../../comp/BaseLayout";

const RefundPolicy = () => {
  let WebHeaderListData: WebsiteHeaderProps[] = [
    {
      title: "Digisquares Refund Policy",
      paragraph:
        "Digisquares® Governance, Risk, and Compliance helps you comply with the Privacy",
    },
  ];
  return (
    <div>
      <Headseo
        title={`Digisquares | Refund Policy`}
        heading={`Refund Policy`}
        description={`Digisquares Website Refund Policy.`}
        url={`/statements/RefundPolicy`}
        keywords={`Refund Policy`}
      />
      <BaseLayout>
        <div className={styles.TermsandConditionMainContainer}>
          <WebHeadergrid HeaderBannerPropsList={WebHeaderListData} />
          <Screen>
            <div className={styles.TermsandConditionsInfoContainer}>
              <div className={styles.TermsandConditionsLeftContainer}>
                <div
                  className={`${styles.TermsandConditionsfirstContainer} ${styles.statements}`}
                  id="acceptance"
                >
                  <h2> Our Refund Policy</h2>
                  <p>
                    At DigiSquares, we take pride in providing an excellent
                    customer experience and believe in the value of our low-code
                    platform. Our policy details have been crafted with
                    transparency and fairness in mind to respect our
                    relationship with our esteemed clients.
                  </p>
                  <h2>Trial Period</h2>
                  <p>
                    We offer a free trial period so potential customers can
                    evaluate if our platform fits their needs. This period will
                    allow customers to understand the capabilities of our
                    platform without any financial commitment.
                  </p>
                  <h2>Subscription Services</h2>
                  <p>
                    Upon opting for our subscription services, we recommend
                    users to ensure the fitment of the platform to their
                    requirements before committing to a paid scheme.
                    <br />
                    However, we understand that not all plans might work out as
                    expected. If you are not satisfied with our services within
                    the initial 14 days of your purchase, we offer a full
                    refund.
                  </p>
                  <h2>Annual Subscription</h2>
                  <p>
                    For annually subscribed services, refund requests made after
                    the 14-day window will not qualify for a full refund.
                    Instead, each case will be reviewed individually, and a
                    prorated refund may be given based on the remaining time on
                    the subscription.
                  </p>
                  <h2>Non-Refundable</h2>
                  <p>
                    Please note that setup fees and add-on service charges are
                    not refundable. These charges are for services rendered and
                    cannot be returned, cancelled, or transferred.
                  </p>
                  <h2>Requesting Refunds</h2>
                  <p>
                    To initiate a refund, please contact our customer support
                    team at <b>sales@digisquares.com</b> and provide all necessary
                    order details. Upon receiving your refund request, our team
                    will verify your claim within 5-7 working days. Once approved,
                    the refund will be processed and the amount credited to your
                    bank account within the same period.
                  </p>
                  <h2>Changes to Our Refund Policy</h2>
                  <p>
                    DigiSquares reserves the right to modify this refund policy.
                    Any changes or modifications will be effective immediately,
                    and you waive any right you may have to receive specific notice
                    of such changes or modifications.
                  </p>
                  <p>
                    Your continued use of the platform after any changes are made
                    to this policy implies your acceptance of those changes. If you
                    do not agree to the amended policy, you should stop using our
                    platform immediately.
                  </p>
                  <p>
                    Reach out to our team at DigiSquares if you have any questions
                    or need help with our refund policy. We are here to help!
                  </p>
                </div>
              </div>
            </div>
          </Screen>
          <Link legacyBehavior href={"/contact/ContactUs/"}>
            <div className={styles.FixedContainer}>
              <p className={styles.FixedOption}>Contact</p>
            </div>
          </Link>
        </div>
      </BaseLayout>
    </div>
  );
};

export default RefundPolicy;
