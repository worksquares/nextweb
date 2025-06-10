import CustomImage from "../../@/components/customImage";
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
}: BlogPostContainProps) => {
  return (
    <div>
      <div className={Styles.BlogHeading}>
        <h1>{title}</h1>
        {/* <div className={Styles.Blogsub}></div> */}
        <picture>
          <source
            media="(min-width: 1700px)"
            srcSet={img1700 != null ? img1700 : img320}
            width={1050}
          />
          <source
            media="(min-width: 1024px)"
            srcSet={img1024 != null ? img1024 : img320}
            width={800}
          />
          <source
            media="(min-width: 768px)"
            srcSet={img768 != null ? img768 : img320}
            width={700}
          />
          <source media="(min-width: 320px)" srcSet={img320} width={340} />
          {/* <Images
            src={img320}
            layout="intrinsic"
            width="1350"
            height="750"
            alt="BlogSubImage"
            style={{
              maxHeight: "550px",
              minHeight: "280px",
              objectFit: "cover",
            }}
          /> */}
          <CustomImage
            type="blogsMain"
            src={img320}
            alt={title || "Blog Image"}
            className={Styles.cardImage}
          />
        </picture>
        <div className={Styles.Blogparas}>
          {paragraph.map((paras) => (
            <div key={paras.paragraphs}>
              {paras.subheading != null && paras.subheading != undefined ? (
                <h3 className={Styles.BlogsSubheading} key="parah3">
                  {paras.subheading}
                </h3>
              ) : (
                <div></div>
              )}
              {paras.paragraphs != null && paras.paragraphs != undefined ? (
                <p key="p">{paras.paragraphs}</p>
              ) : (
                <div></div>
              )}
              <div key="paradiv" className={Styles.BlogsImg}>
                {paras.subimages != null && paras.subimages != undefined ? (
                  <>
                    <CustomImage
                      type="blogSmall"
                      src={paras.subimages}
                      alt={"BlogSubImage"}
                      className={Styles.blogSmall}
                    />
                  </>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
