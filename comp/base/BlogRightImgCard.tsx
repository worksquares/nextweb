import Link from "next/link";
import Styles from "../../styles/comp/core/BlogRightImgCard.module.css";

export interface BlogRightContainProps {
  title2?: string | null;
  paragraph?: string;
  image1700?: string;
  image1024?: string;
  image768?: string;
  image320?: string;
  links?: string;
}

const BlogNewsCardGrid = ({
  title2,
  paragraph,
  image1700,
  image1024,
  image768,
  image320,
  links,
}: BlogRightContainProps) => {
  // Ensure fallback to a valid image
  const fallbackImg = image320 || "/assets/fallback-image.webp";

  return (
    <div className={Styles.BlogRightImg}>
      <Link href={`/blog${links || ""}`} passHref className={Styles.BlogRightContent}>
        <h2>
          <span>{title2 ?? ""}</span>
        </h2>

        <picture>
          {image1700 && (
            <source media="(min-width: 1700px)" srcSet={`${image1700}`} />
          )}
          {image1024 && (
            <source media="(min-width: 1024px)" srcSet={`${image1024}`} />
          )}
          {image768 && (
            <source media="(min-width: 768px)" srcSet={`${image768}`} />
          )}
          <source media="(min-width: 320px)" srcSet={fallbackImg} />
          <img
            src={fallbackImg}
            width="270"
            height="150"
            alt="Blog Image"
            className={Styles.BlogRightImage}
            loading="lazy"
            decoding="async"
          />
        </picture>

        <p>{paragraph ?? ""}</p>

      </Link>
    </div>
  );
};

export default BlogNewsCardGrid;
