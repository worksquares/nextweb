import React from "react";
import styles from "../../styles/explore/Diversity.module.css";
import ImageContentCard from "../../comp/ImageLeftRight";
import { ImageContainProps } from "../../comp/base/ImageLeftRightCard";
import Headseo from "../headseo";
import BaseLayout from "../../comp/BaseLayout";

const Diversity = () => {
  let ImageCardListData: ImageContainProps[] = [
    {
      title: "Diversity and inclusion",
      paragraph:
        "We are committed to fostering a diverse and inclusive culture. Such a culture directly supports our mission to help our people and our clients excel. The rich mix of individuals, viewpoints, talents, and experiences found at the firm is respected and valued. Our human resources policies aim for the highest standards of fairness and equal opportunity, covering recruitment and employment, promotions, team opportunities, and training programs. ",
      img1700: "/assets/CodeEthics1.webp",
      img1024: "/assets/CodeEthics1.webp",
      img768: "/assets/CodeEthics1.webp",
      img320: "/assets/CodeEthics1.webp",
    },
    {
      title: "Licensing and professional certifications",
      paragraph:
        "In order to deliver on our promise of exceptional client service and to comply with relevant regulations, many of our professionals maintain professional licenses and certifications . All personnel holding professional licenses and certifications have a personal responsibility to maintain such licenses and certifications in good standing through timely renewals, and (where required), the attainment of the appropriate level of continuing professional education.",
      img1700: "/assets/CodeEthics2.webp",
      img1024: "/assets/CodeEthics2.webp",
      img768: "/assets/CodeEthics2.webp",
      img320: "/assets/CodeEthics2.webp",
    },
    {
      title: "Government transactions and relations",
      paragraph:
        "Our business transactions frequently involve governmental entities. The laws and regulations pertaining to doing business with governmental entities may include special rules and a more stringent set of requirements, not typical of other businesses. For example, providing meals or hosting social events may be acceptable for a “non-governmental” client.",
      img1024: "/assets/CodeEthics3.webp",
      img1700: "/assets/CodeEthics3.webp",
      img768: "/assets/CodeEthics3.webp",
      img320: "/assets/CodeEthics3.webp",
    },
    {
      title: "Supplier, contractor and alliance partner relationships",
      paragraph:
        "Our success depends on building productive relationships with all suppliers, contractors, and alliance partners based on integrity, ethical behaviour, and mutual trust. Regardless of whether there is an existing or future client relationship, we select suppliers, contractors, and alliance partners based on the quality, price, service, delivery, and supply of needed goods and services. Procurement decisions should be based on objective business rationale and not on personal interest or bias.",
      img1024: "/assets/CodeEthics4.webp",
      img1700: "/assets/CodeEthics4.webp",
      img768: "/assets/CodeEthics4.webp",
      img320: "/assets/CodeEthics4.webp",
    },
  ];

  return (
    <div className={styles.DiversityMain}>
      <Headseo
        title={`Digisquares | Code of Ethics`}
        heading={`Code of Ethics`}
        description={`We commit to inspiring our talented professionals to deliver outstanding value`}
        url={`/explore/CodeofEthics/`}
        img={`/assets/CodeEthics1.webp`}
        keywords={`Professional certifications, Government transactions, Procurement decisions`}
      />
      <BaseLayout>
        <div className={styles.Diversityheader}>
          <h1 style={{ color: "#293e40" }}>
            We commit to inspiring our talented professionals to deliver
            outstanding value
          </h1>
        </div>
        <div className={styles.DiversityImageCards}>
          <ImageContentCard ImageCardPropsList={ImageCardListData} />
        </div>
      </BaseLayout>
    </div>
  );
};

export default Diversity;
