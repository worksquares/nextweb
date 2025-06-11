import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/comp/core/ImageCard.module.css";

export interface CardProps {
  image: string;
  category: string;
  heading: string;
  description: string;
  link: string;
  linktext: string;
}

const ImageCardsGrid = ({ image, category, heading, description, link, linktext }: CardProps) => {
  return (
    <div>
      <div className={styles.CardContainerNew}>
        <Link href={link}>

          <div className={`${styles.Card1} ${styles.cardNew}`}>
            <div className={styles.ImageHoverContainer}>
              <Image
                className={styles.Imagehoverzoom}
                src={image}
                width="900"
                height="200"
                alt="BookImage"
                unoptimized={true}
              />
            </div>
            <div className={styles.CardInfo}>
              <p className={styles.CardInfoCategory}>{category}</p>
              <h3>{heading}</h3>
              <p className={styles.CardInfodescription}>{description}</p>
              {/* <p className={styles.DownloadInfo}>Download the book</p> */}
              <p className={styles.DownloadInfo}>{linktext}</p>
            </div>
          </div>

        </Link>
      </div>
      {/* ------------------------------------------------ */}

      {/* <div className={styles.CardReContainer}>
    //   <div className={styles.Recard1}>
    //     <div className={styles.ReImageHoverContainer}>
    //     <img className={styles.ReImagehoverzoom} src='/assets/Integration-hub-Card-1.webp'/>
    //     </div>
    //         <div className={styles.ReCardInfo}>
    //           <p>{category}</p>
    //           <h2>{heading}</h2>
    //           <span className={styles.AlignlinkHubimg}>
    //            <a href="">{link}</a>
    //            </span>
    //         </div>
    //   </div>
    // </div> */}
    </div>
  );
};

export default ImageCardsGrid;
