import React from "react";
import BlogRightImgCard, { BlogRightContainProps } from "./base/BlogRightImgCard";

interface BlogRightContentProps {
  BlogRightCardPropsList: BlogRightContainProps[];
}
const list = [];
const BlogNews = (BlogRightCardListData: BlogRightContentProps) => {
  return (
    <>
      {BlogRightCardListData.BlogRightCardPropsList.map((BlogRightprop) => (
        <BlogRightImgCard key={BlogRightprop.title2} title2={BlogRightprop.title2} paragraph={BlogRightprop.paragraph} image320={BlogRightprop.image320} links={BlogRightprop.links} />
      ))}
    </>
  );
};

export default BlogNews;
