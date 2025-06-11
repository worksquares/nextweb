import styles from "../../styles/pricing/PricingPage.module.css";
import Headseo from "../pages/headseo";

const PricingPageYearly = () => {
  return (
    <div>
      <Headseo
        title={`Digisquares | Pricing Page Yearly`}
        heading={`Pricing Page Yearly`}
        description={`Try one project for yourself or your team with no time-limits.`}
        url={`/pricing/PricingPageYearly`}
        keywords={`Pricing`}
      />
      <div className={styles.SelectPlanContainer}>
        <div className={styles.SelectPlanCard}>
          <div className={styles.HeaderContain}>
            <h3 className={styles.HeaderCategory}>Free</h3>
            <p className={styles.HeaderContainOffer}>Try one project for yourself or your team with no time-limits.</p>
            <h3 className={styles.HeaderPeriod}>₹ 0/mon</h3>
            <p className={styles.HeaderPeriodDesc}>No credit card required. One project, free forever.</p>
          </div>
          <div className={styles.buttonconatain}>
            <button className={styles.ButtonOffer} type="submit">
              Get Free
            </button>
          </div>
          <ul>
            <div style={{ display: "flex" }}>
              <span>&#10004;</span>
              <li> 1 active project</li>
            </div>
            <div style={{ display: "flex" }}>
              <span>&#10004;</span> <li> Up to 6 team members</li>
            </div>
            <div style={{ display: "flex" }}>
              <span>&#10004;</span> <li> 1 user test result per project</li>
            </div>
          </ul>
          {/* <Link  href="/">
            <a className={styles.PricingLink}>See all features</a>
          </Link> */}
        </div>
        <div className={styles.SelectPlanCard}>
          <div className={styles.HeaderContain}>
            <h3 className={styles.HeaderCategory}>Pro</h3>
            <p className={styles.HeaderContainOffer}>For individuals or small teams that need more projects</p>
            <h3 className={styles.HeaderPeriod}>₹ 10/mon</h3>
            <p className={styles.HeaderPeriodDesc}>Per team member. Billed yearly.</p>
          </div>
          <div className={styles.buttonconatain}>
            <button className={styles.ButtonOffer} type="submit">
              Get Pro
            </button>
          </div>
          <ul>
            <div style={{ display: "flex" }}>
              <span>&#10004;</span>
              <li> Unlimited active projects</li>
            </div>
            <div style={{ display: "flex" }}>
              <span>&#10004;</span>
              <li> Up to 6 team members</li>
            </div>
            <div style={{ display: "flex" }}>
              <span>&#10004;</span>
              <li> 2 user test results per project</li>
            </div>
            <div style={{ display: "flex" }}>
              <span>&#10004;</span> <li> Download code</li>
            </div>
          </ul>
          {/* <Link  href="/">
            <a className={styles.PricingLink}>See all features</a>
          </Link> */}
        </div>
        <div className={styles.SelectPlanCard}>
          <div className={styles.HeaderContain}>
            <h3 className={styles.HeaderCategory}>Team</h3>
            <p className={styles.HeaderContainOffer}>Great for teams that want to get started with more features</p>
            <h3 className={styles.HeaderPeriod}>₹ 30/mon</h3>
            <p className={styles.HeaderPeriodDesc}>Includes 3 team members, add new members at $8/mo. Billed yearly.</p>
          </div>
          <div className={styles.buttonconatain}>
            <button className={styles.ButtonOffer} type="submit">
              Get Team
            </button>
          </div>
          <ul>
            <div style={{ display: "flex" }}>
              <span>&#10004;</span>
              <li> Unlimited active projects</li>
            </div>
            <div style={{ display: "flex" }}>
              <span>&#10004;</span> <li> Up to 10 team members</li>
            </div>
            <div style={{ display: "flex" }}>
              <span>&#10004;</span> <li> 5 user test results per project</li>
            </div>
            <div style={{ display: "flex" }}>
              <span>&#10004;</span> <li> Download prototypes and designs</li>
            </div>
          </ul>
          {/* <Link  href="/">
            <a className={styles.PricingLink}>See all features</a>
          </Link> */}
        </div>
        <div className={styles.SelectPlanCard}>
          <div className={styles.HeaderContain}>
            <h3 className={styles.HeaderCategory}>Enterprise</h3>
            <p className={styles.HeaderContainOffer}>For large organisations with more than 10 users</p>
            <h3 className={styles.HeaderPeriod}>₹ 8/mon</h3>
            <p className={styles.HeaderPeriodDesc}>Per user, volume pricing. Billed yearly.</p>
          </div>
          <div className={styles.buttonconatain}>
            <button className={styles.ButtonOffer} type="submit">
              Get Free
            </button>
          </div>

          <ul>
            <div style={{ display: "flex" }}>
              <span>&#10004;</span> <li> Unlimited active projects</li>
            </div>
            <div style={{ display: "flex" }}>
              <span>&#10004;</span> <li> Unlimited team members</li>
            </div>
            <div style={{ display: "flex" }}>
              <span>&#10004;</span>
              <li> Unlimited user test results per project</li>
            </div>
            <div style={{ display: "flex" }}>
              <span>&#10004;</span> <li> Download prototypes and designs</li>
            </div>
            <div style={{ display: "flex" }}>
              <span>&#10004;</span> <li> Advanced security</li>
            </div>
            <div style={{ display: "flex" }}>
              <span>&#10004;</span>
              <li> Single Sign-On (SSO)</li>
            </div>
            <div style={{ display: "flex" }}>
              <span>&#10004;</span>
              <li> Pay by bank transfer/invoice</li>
            </div>
          </ul>
          {/* <Link  href="/">
            <a className={styles.PricingLink}>See all features</a>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default PricingPageYearly;
