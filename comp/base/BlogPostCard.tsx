import CustomImage from '../../components/CustomImage';
import Styles from "../../styles/comp/core/BlogPostCard.module.css";

export interface BlogPostContainProps {
  title: string;
  paragraph: para[];
  subtitle?: string;
  link?: string;
  dir?: string;
  img1700?: string;
  img1024?: string;
  img768?: string;
  img320: string;
  btnLink?: string;
  priority?: boolean;
}

export interface para {
  paragraphs?: string;
  subheading?: string;
  subimages?: string;
}

const BlogPostCard = ({
  title,
  paragraph,
  link,
  img1700,
  img1024,
  img768,
  img320,
  subtitle,
  priority, // ✅ properly included
}: BlogPostContainProps) => {
  return (
    <div>
      <div className={Styles.BlogHeading}>
        <h2>{title}</h2>

        <CustomImage
          type="blogsMain"
          src={img1700 ?? img1024 ?? img768 ?? img320}
          alt={title || "Blog Image"}
          className={Styles.cardImage}
          priority={priority}
        />

        <div className={Styles.Blogparas}>
          {paragraph.map((paras, index) => (
            <div key={`para-${index}`}>
              {paras.subheading && (
                <h3 className={Styles.BlogsSubheading}>
                  {paras.subheading}
                </h3>
              )}

              {paras.paragraphs && <p>{paras.paragraphs}</p>}

              {paras.subimages && (
                <div className={Styles.BlogsImg}>
                  <CustomImage
                    type="blogSmall"
                    src={paras.subimages}
                    alt="BlogSubImage"
                    className={Styles.blogSmall}
                    priority={true}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
