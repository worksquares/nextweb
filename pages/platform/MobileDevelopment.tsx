import React from "react";
import styles from "../../styles/platform/Platform.module.css";
import ImageContentCard from "../../comp/ImageLeftRight";
import { ImageContainProps } from "../../comp/base/ImageLeftRightCard";
import Headseo from "../headseo";
import BaseLayout from "../../comp/BaseLayout";

const MobileDevelopment = () => {
  let ImageCardListData: ImageContainProps[] = [
    {
      title: "Platforms set the stage for flexibility",
      paragraph:
        "Mobile application development platforms enable developers to use their preferred development approach when building apps for different devices and operating systems, and successful project teams are 31 percent more likely to use them. There’s no waiting for hardware to arrive and no complex set-up procedures. Developers simply select the services they need from the cloud, and they can jump right in.",
      link: " Read the Case Study",
      img1700: "/assets/mobile_3d.webp",
      img1024: "/assets/mobile_3d.webp",
      img768: "/assets/mobile_3d.webp",
      img320: "/assets/mobile_3d.webp",
    },
    {
      title: "Collaboration keeps the production on track",
      paragraph:
        "On nearly two-thirds of successful projects, the development team collaborates closely with business stakeholders throughout development something that less than half of the less successful projects do. Three quarters also work closely with IT ops. Given that mobile development requires frequent releases, this collaboration is increasingly vital. With the increased user expectations that come with the mobile mind shift, aligning to user needs early and often can help win fans.",
      link: "Read the Case Study",
      img1700: "/assets/MobDevImg1.webp",
      img1024: "/assets/MobDevImg1.webp",
      img768: "/assets/MobDevImg1.webp",
      img320: "/assets/MobDevImg1.webp",
    },
    {
      title: "Keep an analytical eye on your audience",
      paragraph:
        "Successful projects are improved by indirect audience feedback, such as how they interact with the apps. Whether gathering feedback during usability testing or after the app goes live, successful project teams keep a close analytical eye on their audience. Conduct usability testing during development, and use analytics after launch to identify popular features and functions. Continually improve the application by incorporating user feedback and analytical insights.",
      link: "Read the Case Study",
      img1024: "/assets/MobDevImg2.webp",
      img1700: "/assets/MobDevImg2.webp",
      img768: "/assets/MobDevImg2.webp",
      img320: "/assets/MobDevImg2.webp",
    },
    {
      title: "Satisfy the need for speed and flexibility with platforms",
      paragraph:
        "Platforms that use cloud services and APIs provide enormous speed and flexibility. Successful projects are less likely to feel locked into any particular mobile platform or technology. Consider cloud based platforms and APIs to boost development speed. Use standards based mobile application development platforms to avoid vendor lock in.",
      link: "Read the Case Study",
      img1024: "/assets/960x0.webp",
      img1700: "/assets/960x0.webp",
      img768: "/assets/960x0.webp",
      img320: "/assets/960x0.webp",
    },
  ];

  return (
    <>
      <Headseo
        title={`Digisquares | Mobile Development`}
        heading={`Mobile Development`}
        description={`Low code platform app development empowers the developer to create an application using a single language or tool set, and instantly deploy it across a variety of platforms.`}
        url={`/platform/MobileDevelopment/`}
        img={`/assets/Platform.webp`}
        keywords={`Mobile Development, Low code platform, Multiple platforms, Operating systems, Speed and flexibility, Boost development speed`}
      />
      <BaseLayout>
        <div className={styles.PlatformMain}>
          <div className={styles.MobileBackground}>
            <h2 style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
              Mobile Development
            </h2>
          </div>
          <div className={styles.Platformheader}>
            <h1 style={{ color: "#ffffff" }}>
              Low code platform app development empowers the developer to create
              an application using a single language or tool set, and instantly
              deploy it across a variety of platforms.
            </h1>
            <h2 style={{ color: "#293e40" }}>
              Drive mobile innovation with Digisquares all in one low-code
              Platform
            </h2>
          </div>
          <div className={styles.PlatformInfo}>
            <h2>
              Development cost is lower compared to native app development when
              making applications for multiple platforms as we code once and run
              everywhere.
            </h2>
          </div>

          <div className={styles.PlatformImageCards}>
            <ImageContentCard ImageCardPropsList={ImageCardListData} />
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default MobileDevelopment;
