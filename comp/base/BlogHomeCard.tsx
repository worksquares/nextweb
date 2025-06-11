import Link from "next/link";
import Styles from "../../styles/comp/core/BlogHomeCard.module.css";
// import CustomImage from "../../@/components/customImage";
import CustomImage from '../../components/CustomImage';

export interface BlogHomeheaderProps {
  title?: string | null;
  img1700?: string;
  img1024?: string;
  img768?: string;
  img320?: string;
  para?: string;
  links?: string;
}

const BlogHomeCard = ({
  title,
  img1700,
  img1024,
  img768,
  img320,
  para,
  links,
}: BlogHomeheaderProps) => {
  return (
    <div className={Styles.LeftHome}>
      <Link legacyBehavior href={`/blog${links}`}>
        <a>
          {/* {title && (
            <h2>
              <span>{title}</span>
            </h2>
          )} */}
          <div className={Styles.BigImageComp}>
            {/* <picture>
              <source
                media="(min-width: 1700px)"
                srcSet={img1700 != null ? img1700 : img320}
              />
              <source
                media="(min-width: 1024px)"
                srcSet={img1024 != null ? img1024 : img320}
              />
              <source
                media="(min-width: 768px)"
                srcSet={img768 != null ? img768 : img320}
              />
              <source media="(min-width: 320px)" srcSet={img320} /> */}
            {/* <Images
                alt="sds"
                layout="intrinsic"
                width="1500"
                height="800"
                src={img320}
                style={{
                  // width: "1058px",
                  maxHeight: "550px",
                  minHeight: "280px",
                  objectFit: "cover",
                  // border: "1px solid red",
                }}
              ></Images> */}
              {img320 && (
            <CustomImage
              type="blogsMain"
              src={img320}
              alt={title || "Blog Image"}
              className={Styles.cardImage}
            />
          )}
            {/* </picture> */}
            <></>
            <p className={Styles.BigImageDesc}>{para}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default BlogHomeCard;
