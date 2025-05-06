import React, { useEffect, useState } from "react";
import BaseLayout from "../../comp/BaseLayout";
import HeaderCard from "../../comp/HeaderChange";
import { HeaderContentProps } from "../../comp/base/HeaderContent";
import PodcastGrid from "../../comp/PodcastGrid";
import Screen from "../../comp/Screen";
import Title from "antd/es/typography/Title";
import { Tag } from "antd";
import { useRouter } from "next/router";
import  {podcast} from  "../../comp/PodcastData"

let AnotherimgListData: HeaderContentProps[] = [
  {
    title: "Tech Talks",
    paragraph:"",
    btnLink: "#",
    img1700: "/assets/PodcastHeroimg.webp",
    img1024: "/assets/PodcastHeroimg.webp",
    img768: "/assets/PodcastHeroimg.webp",
    img320: "/assets/PodcastHeroimg.webp",
    backgroundColor: "#154965",
    isPodCast: 1,
    backgroundImg:'/assets/Podcast/podcast_bg.webp'
  },
];

const Tags = ({ podcast }) => {
  const router = useRouter();

  const handleClick = (tag) => {
    const SelectedTag = tag;
    router.push(
      `/resources/PodcastSearch?tag=${encodeURIComponent(SelectedTag)}`
    );
  };

  const tags = Array.from(new Set(podcast?.flatMap((podcast) => podcast.tags)));
  const randomColor = "#E6F4FF";

  return (
    <div style={{ margin: "40px auto" }}>
      <Title
        level={3}
        style={{
          fontWeight: 700,
          fontSize: "30px",
          lineHeight: "68.2px",
          color: "#1D4965",
          textAlign:"center"
        }}
      >
        Tags
      </Title>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {tags.map((tag, index) => (
          <Tag
            key={index}
            style={{
              backgroundColor: randomColor,
              color: "#3159D9",
              padding: "10px",
              borderRadius: "28px",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #91CAFF",
              cursor: "pointer",
              minWidth:100,
            }}
            onClick={() => handleClick(tag)}
          >
            {`# ${tag}`}
          </Tag>
        ))}
      </div>
    </div>
  );
};

const CategoryCard = ({ podcast }) => {
 let url= podcast?.map(item=>item?.embedUrl)
  const router = useRouter();

  const handleClick = (category) => {
    const SelectedCategory = category;
    console.log('SelectedCategory: ', SelectedCategory);
    router.push(`/resources/PodcastSearch?category=${encodeURIComponent(SelectedCategory)}`);
  };

  function getCategories(podcasts) {
    const categories = {};

    podcasts?.forEach((podcast) => {
      const category = podcast.category;
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(podcast.name);
    });

    return categories;
  }

  const categoryJson = getCategories(podcast);
  const uniqueCategories = Object.keys(categoryJson).slice(0, 8);

  return (
    <div style={{ margin: "40px auto" }}>
      <Title
        level={3}
        style={{
          fontWeight: 700,
          fontSize: "30px",
          lineHeight: "68.2px",
          color: "#154965",
          textAlign:"center"
        }}
      >
        Categories
      </Title>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {uniqueCategories.map((category, index) => (
          <div
            key={index}
            style={{
              backgroundColor: [
                "#1E3264",
                "#27856A",
                "#503750",
                "#BA5D07",
                "#608108",
                "#1E3264",
                "#DC148C",
                "#8D67AB",
              ][index % 8],
              padding: "50px",
              borderRadius: "8px",
              flex: "1 1 calc(25% - 16px)",
              width: "262px",
              height: "177px",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => handleClick(category)}
          >
            <h3 style={{ fontSize: "26px", color: "#FFFFFF" }}>{category}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const Podcast = () => {

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <BaseLayout>
        <HeaderCard HeaderBannerPropsList={AnotherimgListData} />
        <Screen>
          <PodcastGrid podcasts={podcast} />
        </Screen>
        <Screen>
          <CategoryCard podcast={podcast} />
        </Screen>
        <Screen>
          <Tags podcast={podcast} />
        </Screen>
      </BaseLayout>
    </div>
  );
};

export default Podcast;
