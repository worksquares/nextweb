import React from "react";
import BlogNewsCard, { BlogNewsContainProps } from "./base/BlogNewsCard";

interface BlogNewsContentProps {
  BlogNewsPropsList: BlogNewsContainProps[];
}
const BlogNews = (BlogNewsCardListData: BlogNewsContentProps) => {
  return (
    <>
      {BlogNewsCardListData.BlogNewsPropsList.map((BlogNewsprop) => (
        <BlogNewsCard key={BlogNewsprop.subtitle} title={BlogNewsprop.title} subtitle={BlogNewsprop.subtitle} link={BlogNewsprop.link} img320={BlogNewsprop.img320} heading={BlogNewsprop.heading} />
      ))}
    </>
  );
};

export default BlogNews;
