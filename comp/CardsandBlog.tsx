import styles from "../styles/comp/CardsandBlog.module.css";
import Screen from "./Screen";

const CardsandBlog = ({
  CardHeader,
  CardBlogHeader,
  CardInformation,
  myCustomCards,
}: any) => {
  return (
    <div className={styles.CardsandBlogMain}>
      <Screen>
        {/* First Card Section */}
        {CardInformation && (
          <>
            <div className={styles.CardsTitleComp}>
              <h2>{CardHeader?.title || "Card Header Title"}</h2>
              <p>{CardHeader?.description || "Card header description here..."}</p>
            </div>
            <div className={styles.CardsMainComp}>
              {CardInformation.map((data: any, index: number) => (
                <div key={index} className={styles.CardComp}>
                  {data.Icon && (
                    <img
                      src={data.Icon}
                      alt="Icon"
                      width={32}
                      height={32}
                      className={styles.CardIcons}
                    />
                  )}
                  <h6>{data.heading}</h6>
                  <p className={styles.CardDesc}>{data.description}</p>
                  {data.linkName && (
                    <a
                      href={data.linkUrl || "#"}
                      className={styles.learnMoreButton}
                    >
                      {data.linkName}
                      <img
                        src="/svg/arrow.svg"
                        alt="Arrow Icon"
                        className={styles.arrowIcon}
                        width={12}
                        height={12}
                      />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Blog Card Section */}
        {myCustomCards && (
          <>
            <div className={styles.CardsBlogComp}>
              <h2>{CardBlogHeader?.title || "Blog Header"}</h2>
              <p>{CardBlogHeader?.description || "Blog header description here..."}</p>
            </div>
            <div className={styles.BlogCompMain}>
              {myCustomCards.map((card: any, index: number) => (
                <div key={index} className={styles.card}>
                  <img
                    src={card.image}
                    alt={card.title}
                    className={styles.cardImage}
                    width={400}
                    height={240}
                  />
                  <div className={styles.cardContent}>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <div className={styles.cardButtons}>
                      <a
                        href={card.learnMoreLink || "#"}
                        className={styles.learnMoreButton}
                      >
                        Learn More
                        <img
                          src="/svg/arrow.svg"
                          alt="Arrow Icon"
                          className={styles.arrowIcon}
                          width={12}
                          height={12}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </Screen>
    </div>
  );
};

export default CardsandBlog;
