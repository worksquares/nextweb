import React from "react";
import BlogPostCardGrid, { BlogPostContainProps } from "./base/BlogPostCard";

interface BlogPostContentProps {
  BlogPostCardPropsList: BlogPostContainProps[];
}
const BlogPostContent = (BlogPostCardListData: BlogPostContentProps) => {
  return (
    <>
      {BlogPostCardListData.BlogPostCardPropsList.map((BlogPostprop) => (
        <BlogPostCardGrid
          key={BlogPostprop.title}
          title={BlogPostprop.title}
          subtitle={BlogPostprop.subtitle}
          paragraph={BlogPostprop.paragraph}
          link={BlogPostprop.link}
          img320={BlogPostprop.img320}
          btnLink={BlogPostprop.btnLink}
        />
      ))}
    </>
  );
};

export default BlogPostContent;
