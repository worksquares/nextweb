import React from "react";
import styles from "../../styles/platform/Platform.module.css";
import ImageContentCard from "../../comp/ImageLeftRight";
import { ImageContainProps } from "../../comp/base/ImageLeftRightCard";
import Headseo from "../headseo";
import BaseLayout from "../../comp/BaseLayout";

const DigisquaresPlatform = () => {
  let ImageCardListData: ImageContainProps[] = [
    {
      title: "Why Choose Digisquares",
      paragraph:
        "Time-Efficient: Deploy your applications in a fraction of the usual time, leapfrogging your competitors.",
      paragraph1:
        "Cost-Effective: Reduced development time means reduced labour cost and fewer resources needed.",
      paragraph2:
        "User-Friendly: Our intuitive platform makes it easy for anyone, even those without a background in coding, to build and launch applications.Flexible: Our platform is adaptable to your ever-changing business demands, keeping you one step ahead in your industry.",
      link: " Read the Case Study",
      img1700: "/assets/why-digisqares.webp",
      img1024: "/assets/why-digisqares.webp",
      img768: "/assets/why-digisqares.webp",
      img320: "/assets/why-digisqares.webp",
    },
    {
      title: "Advanced Features",
      paragraph:
        "Visual Development: Create applications using a visually intuitive interface.",
      paragraph1:
        "Integration-Centric: Effortlessly integrate with your existing systems, enhancing functionality and maximising efficiency.",
      paragraph2:
        "Scalability: Scale your applications as your business grows, without the need for a significant resource pivot.",
      paragraph3:
        "Security: Rest assured, our high-grade security protocols protect your data.",
      link: "Read the Case Study",
      img1700: "/assets/advance.webp",
      img1024: "/assets/advance.webp",
      img768: "/assets/advance.webp",
      img320: "/assets/advance.webp",
    },
    {
      title: "Ready to Accelerate Your Digital Journey?",
      paragraph:
        "Join the ranks of thriving businesses who have chosen Digisquares for their application development needs. Get started today and redefine what's possible for your organization.",
      link: "Read the Case Study",
      img1024: "/assets/Ready.webp",
      img1700: "/assets/Ready.webp",
      img768: "/assets/Ready.webp",
      img320: "/assets/Ready.webp",
    },
    {
      title: "Join the Low-Code Revolution",
      paragraph:
        "Embrace the future with our low-code platform that challenges traditional coding. Providing a fertile ground for your creative ideas, it enables you to expand your opportunities seamlessly. It goes beyond just app creation, aiming to unlock a world of numerous possibilities and opportunities for you.",
      link: "Read the Case Study",
      img1024: "/assets/join-lowcode.webp",
      img1700: "/assets/join-lowcode.webp",
      img768: "/assets/join-lowcode.webp",
      img320: "/assets/join-lowcode.webp",
    },
  ];

  return (
    <>
      <Headseo
        title={`Digisquares | Digisquares Platform`}
        heading={`DigisquaresPlatform`}
        description={`The Digisquares Platform is a single, unifying foundation for digital business drive transformation to build and automate quickly, future proof technologies, and deliver great experiences.`}
        url={`/platform/DigisquaresPlatform`}
        img={`/assets/Platform.webp`}
        keywords={`Platform, Digital business, Products and services, Technology, Financial services, Customer experience`}
      />
      <BaseLayout>
        <div className={styles.PlatformMain}>
          <div className={styles.PlatformBackground}></div>

          <div className={styles.PlatformInfo}>
            <h2>
              Discover Digisquares, where you can rapidly build and launch
              applications with our easy-to-use drag-and-drop interface. Say
              goodbye to complicated coding and integrations easily create
              everything from basic database applications to extensive
              enterprise systems.
            </h2>
          </div>
          {/* </Screen> */}
          <div className={styles.PlatformImageCards}>
            <ImageContentCard ImageCardPropsList={ImageCardListData} />
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default DigisquaresPlatform;
