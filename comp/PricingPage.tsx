import React, { useState } from "react";
import styles from "../../styles/pricing/PricingPage.module.css";
import Footer from "./Footer";
import Headseo from "../pages/headseo";
import PricingPageYearly from "./PricingPageYearly";
import PricingPageMonthly from "./PricingPageMonthly";

const PricingPage = () => {
  const [checkedd, setCheckedd] = useState(false);

  const onSwitchChange = () => {
    setCheckedd(!checkedd);
  };

  return (
    <div>
      <Headseo
        title={`Digisquares | Pricing Page`}
        heading={`Pricing Page`}
        description={`Digisquares is perfect for individuals and teams of all sizes. Start for free`}
        url={`/pricing/PricingPage`}
        keywords={`Pricing`}
      />
      <div className={styles.PricingPageContainer}>
        <div className={styles.PricingPageHeader}>
          <h1>Pay as you grow</h1>
          <p>Digisquares is perfect for individuals and teams of all sizes. Start for free</p>
          <div>
            <span>Monthly</span>
            <label className={styles.switch}>
              <input type="checkbox" onChange={onSwitchChange} />
              <span className={styles.slider}></span>
            </label>
            <span>Yearly</span>
          </div>
        </div>
        <div className="pricing-main-content">{checkedd ? <PricingPageYearly /> : <PricingPageMonthly />}</div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
