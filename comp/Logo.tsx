import Image from "next/image";
import styles from "../styles/comp/Logo.module.css";

const Logo = () => {
  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
      <div className={styles.itemcenter3}>
        <h2>Trusted by enterprise customers</h2>
        <div className={styles.item3}>
          <Image src="/assets/CiscoLogo.webp" width="900" height="500" alt="BookImage" unoptimized={true} priority={true} />
          <Image src="/assets/logo-flowserve.webp" width="900" height="500" alt="BookImage" unoptimized={true} priority={true} />
          <Image src="/assets/eleven.webp" width="900" height="500" alt="BookImage" unoptimized={true} priority={true} />
          <Image src="/assets/deloitte.webp" width="900" height="500" alt="BookImage" unoptimized={true} priority={true} />
          <Image src="/assets/ricoh.webp" width="900" height="500" alt="BookImage" unoptimized={true} priority={true} />
        </div>
      </div>
    </div>
  );
};

export default Logo;
