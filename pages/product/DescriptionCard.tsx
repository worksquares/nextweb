import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import styles from "../../styles/comp/DescriptionCard.module.css";

interface Feature {
  title?: string;
  description?: string;
  link?: string;
  image?: string;
}

interface FeaturesDescriptionProps {
  heading: React.ReactNode;
  features?: Feature[];
}

function chunkArray<T>(arr: T[] | undefined, chunkSize: number): T[][] {
  if (!arr || !Array.isArray(arr)) return [];
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
}

export function FeaturesDescription({ heading, features = [] }: FeaturesDescriptionProps) {
  const groupedFeatures = useMemo(() => chunkArray<Feature>(features, 3), [features]);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    setActiveIndices(groupedFeatures.map(() => 0));
  }, [groupedFeatures]);

  if (features.length === 0) {
    return null;
  }

  const setActive = (groupIdx: number, featureIdx: number) => {
    setActiveIndices((prev) => {
      const copy = [...prev];
      copy[groupIdx] = featureIdx;
      return copy;
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>{heading}</div>

        {groupedFeatures.map((group, groupIdx) => {
          const activeIndex = activeIndices[groupIdx] ?? 0;
          const isEvenGroup = groupIdx % 2 === 0;
          const subheadingsContent = (
            <div className={styles.subheadings}>
              {group.map((feature, idx) => (
                // <div key={idx} style={{ display: "flex", flexDirection: "column" }}>
                //   <button
                //     className={`${styles.heading} ${idx === activeIndex ? styles.active : ""}`}
                //     onClick={() => setActive(groupIdx, idx)}
                //     style={{ textAlign: "left" }}
                //     type="button"
                //   >
                //     {feature.title}
                //   </button>

                //   {idx === activeIndex && (
                //     <div className={styles.content}>
                //       <p>{feature.description}</p>
                //       <a
                //         href={feature.link}
                //         className={styles.button}
                //         target="_blank"
                //         rel="noreferrer"
                //       >
                //         Explore All
                //       </a>
                //     </div>
                //   )}
                // </div>
                <div
  key={idx}
  className={`${styles.contentWrapper} ${idx === activeIndex ? styles.activeContentWrapper : ""}`}
>
  <button
    // className={styles.heading}
    className={`${styles.heading} ${idx === activeIndex ? styles.active : ""}`}
    onClick={() => setActive(groupIdx, idx)}
    style={{ textAlign: "left"}}
    type="button"
    >
    {feature.title}
  </button>

  {idx === activeIndex && (
    <div className={styles.content}>
      <p>{feature.description}</p>
      <a
        href={feature.link}
        className={styles.button}
        target="_blank"
        rel="noreferrer"
      >
        Explore All
      </a>
    </div>
  )}
</div>

              ))}
            </div>
          );

          const imageBlock = (
            <div className={styles.imageBlock}>
              {group[activeIndex].image && (
                <Image
                  src={group[activeIndex].image}
                  alt={group[activeIndex].title ?? ""}
                  width={400}
                  height={300}
                  className={styles.image}
                  style={{ objectFit: "contain", borderRadius: 8 }}
                />
              )}
            </div>
          );

          return (
            <div
              key={groupIdx}
              className={`${styles.group} ${isEvenGroup ? styles.row : styles.rowReverse}`}

            >
              {isEvenGroup ? (
                <>
                  {subheadingsContent}
                  {imageBlock}
                </>
              ) : (
                <>
                  {imageBlock}
                  {subheadingsContent}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
