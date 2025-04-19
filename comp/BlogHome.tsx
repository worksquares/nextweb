import React from "react";
import BlogHomeCard, { BlogHomeheaderProps } from "./base/BlogHomeCard";
import styles from "../styles/comp/BlogHome.module.css";

interface BlogHomeProps {
  BlogPostItem: BlogHomeheaderProps[];
}

// const BlogHome = ({ BlogPostItem }: BlogHomeProps) => {
//   const list = BlogPostItem.map((post, index) => {
//     if (index % 3 === 0 && BlogPostItem[index + 1] && BlogPostItem[index + 2]) {
//       return (
//         <div key={index} className={styles.blohomepage}>
//           <BlogHomeCard
//             title={post.title}
//             img320={post.img320}
//             para={post.para}
//             links={post.links}
//           />
//         </div>
//       );
//     } else if (index % 3 === 1 && BlogPostItem[index + 1]) {
//       return (
//         <div key={index} className={styles.BlogHomeCard}>
//           <BlogHomeCard
//             title={post.title}
//             img320={post.img320}
//             para={post.para}
//             links={post.links}
//           />
//           <BlogHomeCard
//             title={BlogPostItem[index + 1].title}
//             img320={BlogPostItem[index + 1].img320}
//             para={BlogPostItem[index + 1].para}
//             links={BlogPostItem[index + 1].links}
//           />
//         </div>
//       );
//     }
//     return null;
//   });

//   return <div>{list}</div>;
// };

// export default BlogHome;

const BlogHome = ({ BlogPostItem }: BlogHomeProps) => {
  const list = BlogPostItem.map((post, index) => {
    if (index % 3 === 0 && BlogPostItem[index + 1] && BlogPostItem[index + 2]) {
      return (
        <div key={index} className={styles.mainContainer}>
          {/* Main image */}
          <div className={styles.mainImage}>
            <BlogHomeCard
              title={post.title}
              img320={post.img320}
              para={post.para}
              links={post.links}
            />
          </div>
          {/* Two side-by-side images */}
          <div className={styles.sideImages}>
            <BlogHomeCard
              title={BlogPostItem[index + 1].title}
              img320={BlogPostItem[index + 1].img320}
              para={BlogPostItem[index + 1].para}
              links={BlogPostItem[index + 1].links}
            />
            <BlogHomeCard
              title={BlogPostItem[index + 2].title}
              img320={BlogPostItem[index + 2].img320}
              para={BlogPostItem[index + 2].para}
              links={BlogPostItem[index + 2].links}
            />
          </div>
        </div>
      );
    }
    return null;
  });

  return <div className={styles.blogContainer}>{list}</div>;
};

export default BlogHome;
