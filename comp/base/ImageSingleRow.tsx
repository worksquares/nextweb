import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/comp/core/ImageSingleRow.module.css";

export interface SingleRowProps {
  image: string;
  category: string;
  title?: string;
  // heading? : string;
  description: string;
  link: string;
}

const ImageSingleRow = ({ image, category, title, description, link }: SingleRowProps) => {
  return (
    <div>
      <div className={styles.CardContainerNew}>
        <Link legacyBehavior href={link}>
          <div className={`${styles.Card1} ${styles.cardNew}`}>
            <div className={styles.ImageHoverContainer}>
              <Image className={styles.Imagehoverzoom} src={image} width="900" height="200" alt="ResourcesBlogImage" unoptimized={true} />
            </div>
            <div className={styles.CardInfo}>
              <p className={styles.CardInfoPara}>{category}</p>
              <h3>{title}</h3>
              {/* <h3>{heading}</h3> */}
              <p>{description}</p>
              <a href={link}>Read the Article</a>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ImageSingleRow;
