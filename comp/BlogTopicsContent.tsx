import React from "react";
import BlogTopicsCard, { BlogTopicsContainProps } from "./base/BlogTopicsCard";

interface BlogContentProps {
  BlogTopicCardPropsList: BlogTopicsContainProps[];
}
const BlogTopicsContent = (BlogTopicCardListData: BlogContentProps) => {
  return (
    <>
      {BlogTopicCardListData.BlogTopicCardPropsList.map((BlogTopicprop) => (
        <BlogTopicsCard key={BlogTopicprop.title} title={BlogTopicprop.title} title2={BlogTopicprop.title2} list={BlogTopicprop.list} list2={BlogTopicprop.list2} />
      ))}
    </>
  );
};

export default BlogTopicsContent;
