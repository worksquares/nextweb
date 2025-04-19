import React from "react";
import styles from "../styles/comp/Logo.module.css";
import Images from "./base/Images";
import Image from "next/image";

const Logo = () => {
  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
      <div className={styles.itemcenter3}>
        <h2>Trusted by enterprise customers</h2>
        <div className={styles.item3}>
          <Image src="/assets/CiscoLogo.webp" width="900" height="500" alt="BookImage" unoptimized={true} layout="intrinsic" />
          <Image src="/assets/logo-flowserve.webp" width="900" height="500" alt="BookImage" unoptimized={true} layout="intrinsic" />
          <Image src="/assets/eleven.webp" width="900" height="500" alt="BookImage" unoptimized={true} layout="intrinsic" />
          <Image src="/assets/deloitte.webp" width="900" height="500" alt="BookImage" unoptimized={true} layout="intrinsic" />
          <Image src="/assets/ricoh.webp" width="900" height="500" alt="BookImage" unoptimized={true} layout="intrinsic" />
        </div>
      </div>
    </div>
  );
};

export default Logo;
