import React from "react";
import styles from "../../styles/explore/Diversity.module.css";
import ImageContentCard from "../../comp/ImageLeftRight";
import { ImageContainProps } from "../../comp/base/ImageLeftRightCard";
import Headseo from "../headseo";
import BaseLayout from "../../comp/BaseLayout";

const Diversity = () => {
  let ImageCardListData: ImageContainProps[] = [
    {
      title:
        "Creating an inclusive environment that meets employee needs is good business",
      paragraph:
        "While the definition of inclusion and belonging has and will continue to evolve with the way companies do business, it’s best understood as ensuring that everyone in an organization has the power to make change. True inclusion and belonging allow all employees in an organization to feel that they can contribute and have a voice in the work they do.",
      img1700: "/assets/Diversity1.webp",
      img1024: "/assets/Diversity1.webp",
      img768: "/assets/Diversity1.webp",
      img320: "/assets/Diversity1.webp",
    },
    {
      title: "Inclusion and Belonging improve core HR metrices",
      paragraph:
        "When U.S. businesses lose $1 trillion every year to turnover costs it’s worth starting the conversation with the fact that focusing on inclusion has allowed workplaces to lower turnover, improve retention and reduce absenteeism. These documented benefits underscore the reality that when employees feel they belong and have a stake in the organization, they’re more likely to stay and try to work through challenges than simply find a new job and employers reap many of those benefits.",
      img1700: "/assets/Diversity2.webp",
      img1024: "/assets/Diversity2.webp",
      img768: "/assets/Diversity2.webp",
      img320: "/assets/Diversity2.webp",
    },
    {
      title:
        "Inclusion and Belonging make it possible to experience the dividents of diversity",
      paragraph:
        "Because a culture of inclusion and belonging gives everyone the opportunity and incentive to contribute, it also allows organizations to more directly tap into the proven benefits of building a diverse workforce, such as improved innovation, problem solving and even profitability. That is, when everyone on board has the space to bring their full contributions to the table, the company’s processes, products and people will become stronger.",
      img1024: "/assets/Diversity3.webp",
      img1700: "/assets/Diversity3.webp",
      img768: "/assets/Diversity3.webp",
      img320: "/assets/Diversity3.webp",
    },
    {
      title:
        "Inclusion and Belonging allow your organization to acheive its full potential and purpose",
      paragraph:
        "One of the downsides of investing in inclusion and belonging is that it can often take a long time to recoup a return on investment (ROI). But that’s only if an organization ignores that it has a purpose and potential as a company outside of strictly bottom-line benefits.",
      img1024: "/assets/Diversity4.webp",
      img1700: "/assets/Diversity4.webp",
      img768: "/assets/Diversity4.webp",
      img320: "/assets/Diversity4.webp",
    },
  ];

  return (
    <div className={styles.DiversityMain}>
      <Headseo
        title={`Digisquares | Diversity, Equity, and Inclusion`}
        heading={`Diversity, Equity, and Inclusion`}
        description={`Inclusion and Belonging Remain Timeless Priorities for High-Performance Companies`}
        url={`/explore/Diversity/`}
        img={`/assets/Diversity1.webp`}
        keywords={`Employee needs, Investing, ROI`}
      />
      <BaseLayout>
        <div className={styles.Diversityheader}>
          <h1 style={{ color: "#293e40" }}>
            Inclusion and Belonging Remain Timeless Priorities for
            High-Performance Companies
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
