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
  let i = 0;
  return (
    <div className={Styles.BlogRightImg}>
      <Link legacyBehavior href={`/blog${links}`} passHref>
        <div className={Styles.BlogRightContent}>
          <h2>
            <span>{title2}</span>
          </h2>
          <picture>
            <source
              media="(min-width: 1700px)"
              srcSet={image1700 != null ? image1700 : image320}
            />
            <source
              media="(min-width: 1024px)"
              srcSet={image1024 != null ? image1024 : image320}
            />
            <source
              media="(min-width: 768px)"
              srcSet={image768 != null ? image768 : image320}
            />
            <source media="(min-width: 320px)" srcSet={image320} />
            <img
              src={image320}
              width="270px"
              height="150px"
              alt="BlogImage"
              className={Styles.BlogRightImage}
            />
          {/* <CustomImage
            type="blogSmall"
            src={image320}
            alt={title2 || "Image"}
            className={Styles.BlogSmallImage}
          /> */}
          </picture>
          <p>{paragraph}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogNewsCardGrid;
