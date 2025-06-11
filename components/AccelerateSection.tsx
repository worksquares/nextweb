import Screen from "../comp/Screen";
import Headseo from "../pages/headseo";
import styles from '../styles/comp/Accelerate.module.css';
import { LargeButton } from "./Button";



const AccelerateSection = () => {
  return (

    <>
      <Headseo
        title={`Low-Code Development Platform | Digisquares`}
        heading={`Ideas to Apps`}
        description={`Digisquares empowers businesses to thrive in the AI age by enabling them to create applications, deploy AI agents, and train custom AI models tailored to their specific use cases.`}
        url={`/nextweb/Home`}
        img={`/assets/newheroimg.webp`}
      />

      <div className={styles.accelerateWrapper}>
        <Screen>
          <div className={styles.agentSection}>
            <div className={styles.content}>
              <h1 className={styles.title_accelerate}>Accelerate</h1>
              <h1 className={styles.title_accelerate}>with AI</h1>
              <h5 className={styles.description_accelerate}>
                Build apps, create chatbots, and deploy AI models effortlessly - no code required.
              </h5>
              <LargeButton
                text="Register"
                bgColor="#F9CB2E"
                color="#000000"
                onClick={() => window.location.href = "https://app.digisquares.com/register"}
                className="MediumButton"
                hoverBgColor="#ffffff"
                hoverTextColor="#000000"
              />



            </div>

            <div className={styles.imageContainer}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className={styles.mainImage}
                width={500}
                height={500}
                preload="metadata"
              >
                <source src="/assets/Hero & cards/HeroSection/Hero2.webm" type="video/webm" />
                <source src="/assets/Hero & cards/HeroSection/Hero1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </Screen>
      </div>
    </>
  );
};

export default AccelerateSection;

// import React from "react";
// import styles from '../styles/comp/Accelerate.module.css'
// import Link from "next/link";
// import Image from "next/image";
// import Screen from "../comp/Screen";
// import Headseo from "../pages/headseo";

// const AccelerateSection = () => {
//   return (
// <>         <Headseo
//         title={`Low-Code Development Platform | Digisquares`}
//         heading={`Ideas to Apps`}
//         description={`Digisquares empowers businesses to thrive in the AI age by enabling them to create applications, deploy AI agents, and train custom AI models tailored to their specific use cases.`}
//         url={`/nextweb/Home`}
//         img={`/assets/newheroimg.webp`}
//       />
//     <div className={styles.accelerateWrapper}>
//       <Screen>
//       <div className={styles.agentSection}>
//         <div className={styles.content}>
//           <h2 className={styles.title_accelerate}>Accelerate</h2>
//           <h2 className={styles.title_accelerate}>with AI</h2>

//           <h4 className={styles.description_accelerate}>
//           Build apps, create chatbots, and deploy AI models effortlessly - no code required.
//           </h4>

//           <div className={styles.GetStartedBtn}>
//             <Link  href="https://app.digisquares.com/register">
//               <a rel="nofollow">
//                 <div className={styles.buttonText}>Register</div>
//               </a>
//             </Link>
//           </div>
//         </div>


// <div className={styles.imageContainer}>
//   <Image
//     src="/assets/Hero & cards/HeroSection/Hero.gif"
//     alt="AI Box"
//     className={styles.mainImage}
//     width={50}
//     height={50}
//     priority
//   />
// </div>
//       </div>
//       </Screen>
//     </div>
//     </>

//   );
// };
