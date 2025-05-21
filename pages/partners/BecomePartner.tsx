import { ImageContainProps } from "../../comp/base/ImageLeftRightCard";
import BaseLayout from "../../comp/BaseLayout";
import CardsandBlog from "../../comp/CardsandBlog";
import ImageContentCard from "../../comp/ImageLeftRight";
import Screen from "../../comp/Screen";
import styles from "../../styles/partners/BecomePartner.module.css";
import Headseo from "../headseo";

const BecomePartner = () => {
  const CardInformationData = [
    {
      heading: "Showcase Your Expertise",
      description:
        "Stand out in a crowded market by earning badges, specialization designations, awards, and event sponsorships.",
      linkName: "Learn More",
      linkUrl: "",
    },
    {
      heading: "Reseller Opportunity",
      description:
        "Achieve recognition by building expertise and showcasing your accomplishments through badges and special designations.",
      linkName: "Learn More",
      linkUrl: "",
    },
    {
      heading: "Market Differentiation",
      description:
        "Highlight your achievements with awards, specialization badges, and by sponsoring events that showcase your strengths.",
      linkName: "Learn More",
      linkUrl: "",
    },
  ];

  let ImageCardListData: ImageContainProps[] = [
    {
      title: "Create or Sign Into Your Account",
      paragraph:
        "With your Digisquares account, you gain a single, unified identity, streamlining your digital experience across all our platforms and partner resources.",
      link: "",
      img1700: "/assets/why-digisqares.webp",
      img1024: "/assets/why-digisqares.webp",
      img768: "/assets/why-digisqares.webp",
      img320: "/assets/why-digisqares.webp",
    },
    {
      title: "Let's Grow Together",
      paragraph:
        "We’re excited to collaborate with you. Together, we’ll explore new markets, discover opportunities, and drive digital transformation through AI-powered solutions.",
      link: "",
      img1700: "/assets/advance.webp",
      img1024: "/assets/advance.webp",
      img768: "/assets/advance.webp",
      img320: "/assets/advance.webp",
    },
    {
      title: "Quick Application Review",
      paragraph:
        "Our streamlined application process won’t keep you waiting. We’ll promptly review your application and reach out if we need more information to proceed.",
      link: "",
      img1024: "/assets/Ready.webp",
      img1700: "/assets/Ready.webp",
      img768: "/assets/Ready.webp",
      img320: "/assets/Ready.webp",
    },
    {
      title: "Access the Partner Portal",
      paragraph:
        "Once approved, you’ll receive an email detailing how to access the Digisquares Partner Portal, where tools and resources await to help you thrive.",
      link: "",
      img1024: "/assets/Ready.webp",
      img1700: "/assets/Ready.webp",
      img768: "/assets/Ready.webp",
      img320: "/assets/Ready.webp",
    },
  ];

  const CardHeaderInfo = {
    title: "Choose Your Ideal Partner Path",
    description:
      "Find the path that best matches your expertise and experience, or explore multiple paths to expand your impact",
  };

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Headseo
        title={` Become a Partner | Digisquares`}
        heading={`It’s both a partnership and a relationship`}
        description={`Digisquares’ redesigned partner program is built on mutual
                trust, offering both a partnership and a relationship. It
                delivers increased flexibility, new benefits, and an enhanced
                experience for our valued partners.`}
        url={`/partners/BecomePartner`}
        img={`/assets/LowCode3D(1).webp`}
      />
      <BaseLayout>
        <div className={styles.PartnerHeaderMain}>
          <Screen>
            <div className={styles.PartnerHeaderComp}>
              <h2>It’s both a partnership and a relationship</h2>
              <p>
                Digisquares’ redesigned partner program is built on mutual
                trust, offering both a partnership and a relationship. It
                delivers increased flexibility, new benefits, and an enhanced
                experience for our valued partners.
              </p>
            </div>
          </Screen>
        </div>
        <CardsandBlog
          CardHeader={CardHeaderInfo}
          CardInformation={CardInformationData}
        />
        <div style={{ margin: "65px 0px" }}>
          <ImageContentCard ImageCardPropsList={ImageCardListData} />
        </div>
        <div className={styles.PartnerBannerMain}>
          <Screen>
            <div className={styles.PartnerBannerComp}>
              <h2>Explore the all new partner program</h2>
              <p>
                A unique business relationship and a powerful partnership. This
                program is designed to deepen our collaboration and drive mutual
                success. Join us, work together, and be part of something truly
                special.
              </p>
              <button>Get Insights</button>
            </div>
          </Screen>
        </div>
      </BaseLayout>
    </div>
  );
};

export default BecomePartner;
