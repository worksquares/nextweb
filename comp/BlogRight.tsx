import BlogRightImgCard, { BlogRightContainProps } from "./base/BlogRightImgCard";

interface BlogRightContentProps {
  BlogRightCardPropsList: BlogRightContainProps[];
}

const BlogNews = ({ BlogRightCardPropsList }: BlogRightContentProps) => {
  return (
    <>
      {BlogRightCardPropsList.map((BlogRightprop, index) => (
        <BlogRightImgCard
          key={BlogRightprop.title2 ?? `blogright-${index}`}
          title2={BlogRightprop.title2}
          paragraph={BlogRightprop.paragraph}
          image320={BlogRightprop.image320}
          links={BlogRightprop.links}
        />
      ))}
    </>
  );
};

export default BlogNews;
