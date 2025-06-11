import Styles from "../../styles/comp/core/BlogNewsCard.module.css";
import Images from "./Images";

export interface BlogNewsContainProps {
  title?: string;
  heading?: string;
  subtitle?: string;
  link?: string;
  img1700?: string;
  img1024?: string;
  img768?: string;
  img320?: string;
}

const BlogNewsCardGrid = ({
  title,
  link,
  img1700,
  img1024,
  img768,
  img320,
  subtitle,
  heading,
}: BlogNewsContainProps) => {
  // Safe fallback image
  const fallbackImage = img320 || "/default-image.jpg";

  return (
    <div className={Styles.BlogNews}>
      <div className={Styles.BlogNewsContainer}>
        <div className={Styles.BlogNewsLeft}>
          {title && <h1>{title}</h1>}

          <div className={Styles.BlogNewsLeftContent}>
            <div className={Styles.picturecontain}>
              <picture>
                {img1700 && (
                  <source media="(min-width: 1700px)" srcSet={img1700} />
                )}
                {img1024 && (
                  <source media="(min-width: 1024px)" srcSet={img1024} />
                )}
                {img768 && (
                  <source media="(min-width: 768px)" srcSet={img768} />
                )}
                <source media="(min-width: 320px)" srcSet={fallbackImage} />
                <Images
                  alt={title || "Blog Image"}
                  layout="intrinsic"
                  width={1400}
                  height={800}
                  src={fallbackImage}
                  loading="lazy"
                />
              </picture>
            </div>

            <div className={Styles.paraContain}>
              {heading && <h3>{heading}</h3>}
              <div className={Styles.Newsspana}>
                {subtitle && <span>{subtitle}</span>}
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {link}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogNewsCardGrid;
