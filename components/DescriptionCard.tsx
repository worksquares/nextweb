import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useMemo, useState } from 'react';
import styles from "../styles/comp/DescriptionCard.module.css";
import { LearnMoreButton, SmallButton } from "./Button";
import CustomImage from './CustomImage';

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
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setActiveIndices(groupedFeatures.map(() => 0));

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 799);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [groupedFeatures]);

  const setActive = (groupIdx: number, featureIdx: number) => {
    setActiveIndices((prev) => {
      const copy = [...prev];
      copy[groupIdx] = featureIdx;
      return copy;
    });
  };

  if (features.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>{heading}</div>

        {isMobile ? (
          <div className={styles.group}>
            {features.map((feature, idx) => {
              const isActive = activeIndices[0] === idx;
              return (
                <div key={idx} className={styles.accordionItem}>
                  <button
                    className={`${styles.accordionHeader} ${isActive ? styles.activeHeader : ""}`}
                    onClick={() => setActiveIndices([isActive ? -1 : idx])}
                  >
                    <span>{feature.title}</span>
                    <span className={styles.icon}>
                      {isActive ? "−" : "+"}
                    </span>
                  </button>

                  {isActive && (
                    <div className={styles.accordionContent}>
                      <p>{feature.description}</p>
                      {feature.image && (
                        <div className={styles.imageBlock}>
                          <CustomImage
                            type="rightLeft"
                            src={feature.image}
                            alt={feature.title ?? ""}
                            className={styles.imageCover}
                            priority={true}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ) : (
          groupedFeatures.map((group, groupIdx) => {
            const activeIndex = activeIndices[groupIdx] ?? 0;
            const isEvenGroup = groupIdx % 2 === 0;

            return (
              <div
                key={groupIdx}
                className={`${styles.group} ${isEvenGroup ? styles.row : styles.rowReverse}`}
              >
                {isEvenGroup ? (
                  <>
                    <div className={styles.subheadings}>
                      {group.map((feature, idx) => (
                        <div
                          key={idx}
                          className={`${styles.contentWrapper} ${idx === activeIndex ? styles.activeContentWrapper : ""}`}
                        >
                          <SmallButton
                            className={`${styles.heading} ${idx === activeIndex ? styles.active : ""}`}
                            onClick={() => setActive(groupIdx, idx)}
                            style={{ textAlign: "left" }}
                            text={feature.title}
                          />
                          {idx === activeIndex && (
                            <div className={styles.content}>
                              <p>{feature.description}</p>
                              <LearnMoreButton
                                onClick={() => {
                                  if (feature.link) {
                                    window.location.href = feature.link;
                                  }
                                }}
                                text={
                                  <>
                                    <span style={{ fontWeight: 700 }}>Learn more</span>
                                    <FontAwesomeIcon
                                      icon={faArrowRight}
                                      style={{
                                        fontSize: '15px',
                                        marginLeft: '10px',
                                        verticalAlign: 'middle',
                                        color: '#fff',
                                        width: '15px',
                                        height: '15px',
                                      }}
                                    />
                                  </>
                                }
                                bgColor="#0050b3"
                                color="#fff"
                                hoverBgColor="#009EEB"
                                hoverTextColor="#fff"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className={styles.imageBlock}>
                      {group[activeIndex].image && (
                        <CustomImage
                          type="rightLeft"
                          src={group[activeIndex].image}
                          alt={group[activeIndex].title ?? ""}
                          className={`${styles.image} ${styles.imageCover}`}
                          priority={true}
                        />
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.imageBlock}>
                      {group[activeIndex].image && (
                        <CustomImage
                          type="rightLeft"
                          src={group[activeIndex].image}
                          alt={group[activeIndex].title ?? ""}
                          className={`${styles.image} ${styles.imageCover}`}
                          priority={true}
                        />
                      )}
                    </div>
                    <div className={styles.subheadings}>
                      {group.map((feature, idx) => (
                        <div
                          key={idx}
                          className={`${styles.contentWrapper} ${idx === activeIndex ? styles.activeContentWrapper : ""}`}
                        >
                          <SmallButton
                            className={`${styles.heading} ${idx === activeIndex ? styles.active : ""}`}
                            onClick={() => setActive(groupIdx, idx)}
                            style={{ textAlign: "left" }}
                            text={feature.title}
                          />
                          {idx === activeIndex && (
                            <div className={styles.content}>
                              <p>{feature.description}</p>
                              <LearnMoreButton
                                onClick={() => {
                                  if (feature.link) {
                                    window.location.href = feature.link;
                                  }
                                }}
                                text={
                                  <>
                                    <span style={{ fontWeight: 700 }}>Learn more</span>
                                    <FontAwesomeIcon
                                      icon={faArrowRight}
                                      style={{
                                        fontSize: '15px',
                                        marginLeft: '10px',
                                        verticalAlign: 'middle',
                                        color: '#fff',
                                        width: '15px',
                                        height: '15px',
                                      }}
                                    />
                                  </>
                                }
                                bgColor="#0050b3"
                                color="#fff"
                                hoverBgColor="#009EEB"
                                hoverTextColor="#fff"
                              />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
