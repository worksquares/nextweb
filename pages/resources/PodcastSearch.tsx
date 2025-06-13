import Image from "next/image";
import Screen from "../../comp/Screen";
import { useRouter } from "next/router";
import IPodcast from "../../comp/PodcastData";
import BaseLayout from "../../comp/BaseLayout";
import { podcast } from "../../comp/PodcastData";
import React, { useEffect, useState } from "react";
import styles from "../../styles/podcast/PodcastSearch.module.css";
import { FileUnknownOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Dropdown, Input, List, Menu, Space, Typography } from "antd";

const { Title } = Typography;

const PodcastSearch = () => {
  const router = useRouter();
  const { category, tag, name } = router.query as {
    category?: string;
    tag?: string;
    name?: string;
  };
  const clickedRouteCard = podcast.find((item) => item.name === name);
  const selectedCategoryList: any = podcast.filter(
    (item) => item.category === category
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState("");
  const [selectedEpisode, setSelectedEpisode] = useState<IPodcast | null>(null);
  const [lastSearchQuery, setLastSearchQuery] = useState("");
  const [filteredEpisodes, setFilteredEpisodes] = useState<IPodcast[]>([]);

  useEffect(() => {
    let filteredPodcasts;
    if (selectedCategory || (category && !(selectedTags || tag))) {
      if (selectedCategory) {
        filteredPodcasts = podcast.filter(
          (p) => p.category === selectedCategory
        );
      } else if (category) {
        filteredPodcasts = podcast.filter((p) => p.category === category);
      }
    }
    if (selectedTags || (tag && !(selectedCategory || category))) {
      if (selectedTags) {
        filteredPodcasts = podcast.filter((p) => p.tags.includes(selectedTags));
      } else if (tag) {
        filteredPodcasts = podcast.filter((p) => p.tags.includes(tag));
      }
    }

    if (
      clickedRouteCard &&
      !(selectedCategory || category || selectedTags || tag)
    ) {
      setFilteredEpisodes([clickedRouteCard]);
      setSelectedEpisode(clickedRouteCard);
    } else {
      setFilteredEpisodes(filteredPodcasts);
      setSelectedEpisode(null);
    }
  }, [clickedRouteCard, selectedCategory, selectedTags, category, tag, name]);

  // const handleSearch = () => {
  //     const lowerCaseQuery = searchQuery.toLowerCase();
  //     const filtered = podcast.filter(
  //         (episode) =>
  //             episode.name.toLowerCase().includes(lowerCaseQuery) ||
  //             episode.tags.some((tag) => tag.toLowerCase().includes(lowerCaseQuery)) ||
  //             episode.category.toLowerCase().includes(lowerCaseQuery)
  //     );
  //     setFilteredEpisodes(filtered);
  //     setLastSearchQuery(searchQuery)
  //     setSearchQuery('');
  // };
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      return; // Exit the function if searchQuery is empty or just whitespace
    }

    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = podcast.filter(
      (episode) =>
        episode.name.toLowerCase().includes(lowerCaseQuery) ||
        episode.tags.some((tag) =>
          tag.toLowerCase().includes(lowerCaseQuery)
        ) ||
        episode.category.toLowerCase().includes(lowerCaseQuery)
    );

    setFilteredEpisodes(filtered);
    setLastSearchQuery(searchQuery); // Save the search term for "No results" message
    setSearchQuery(""); // Clear the search input
  };

  const handleEpisodeClick = (episode: IPodcast) => {
    setSelectedEpisode(episode);
  };
  const handleCardClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  const uniqueCategories = Array.from(new Set(podcast.map((e) => e.category)));

  const uniqueTags = Array.from(new Set(podcast.flatMap((e) => e.tags)));

  const displayedEpisodes = filteredEpisodes;

  const menu = (
    <Menu style={{ display: "flex" }}>
      <Menu.ItemGroup
        title={
          <>
            <h3>Filter by Category</h3>
          </>
        }
        style={{ maxHeight: "300px", overflowY: "auto" }}
      >
        {uniqueCategories.map((category, index) => (
          <Menu.Item
            key={`category-${index}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
      <Menu.ItemGroup
        title="Filter by Tags"
        style={{ maxHeight: "300px", overflowY: "auto" }}
      >
        {uniqueTags.map((tag, index) => (
          <Menu.Item key={`tag-${index}`} onClick={() => setSelectedTags(tag)}>
            {tag}
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    </Menu>
  );

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <BaseLayout>
        <div className={styles.podcastContainer}>
          <div style={{ width: "100%", height: "100%" }}>
            <div className={styles.podcastBox}>
              <div className={styles.podCastHeading}>
                <div className={styles.player}>
                  <div className={styles.searchBar} style={{ gap: "1%" }}>
                    <Input
                      prefix={
                        <SearchOutlined className={styles.searchIcon} />
                      }
                      type="text"
                      placeholder="What do you want to listen to?"
                      className={styles.searchInput}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      required
                    />
                    <Button
                      type="primary"
                      className={styles.searchButton}
                      onClick={handleSearch}
                    >
                      Search
                    </Button>
                    <Dropdown overlay={menu} trigger={["click"]}>
                      <a onClick={(e) => e.preventDefault()}>
                        <Space>
                          <Button
                            className={styles.FilterButton}
                            style={{ backgroundColor: "#50B1ED" }}
                          >
                            filter
                            <span
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                fontSize: "8px",
                              }}
                            >
                              ▼
                            </span>
                          </Button>
                        </Space>
                      </a>
                    </Dropdown>
                  </div>
                  {selectedEpisode && (<div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "352px",
                      overflow: "hidden",
                    }}
                  >
                    <iframe
                      src={`${selectedEpisode.embedUrl}?autoplay=true`}
                      width="100%"
                      height="500"
                      frameBorder="0"
                      className={styles.PlayerIframe}
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                      style={{
                        position: "relative",
                        opacity: 0.8,
                        color: "white",
                      }}
                    ></iframe>
                  </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Screen>
          <Title level={3} className={styles.PodcastSearchTitle}>
            Search results
          </Title>
          {displayedEpisodes?.length > 0 ? (
            <List
              itemLayout="horizontal"
              dataSource={displayedEpisodes}
              renderItem={(episode) => (
                <List.Item
                  onClick={() => {
                    handleEpisodeClick(episode);
                    // handleCardClick();
                  }}
                  style={{
                    cursor: "pointer",
                    justifyContent: "center",
                    borderBlockEnd: "none",
                  }}
                >
                  <div className={styles.HorizontalCard}>
                    <div className={styles.podcastSearch_RecommendImg}>
                      <Image
                        src={episode.image}
                        className={styles.podcastImage}
                        alt={episode.name}
                        width={175}
                        height={100}
                        priority={true}
                      />
                    </div>
                    <div className={styles.HorizontalCardContent}>
                      <div className={styles.HorizontalCardTitle}>
                        {episode.name}
                      </div>
                      <div className={styles.HorizontalCardDescription}>
                        Description: {episode.description}
                      </div>
                    </div>
                  </div>
                </List.Item>
              )}
            />
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px",
                color: "#555",
              }}
            >
              <FileUnknownOutlined
                style={{ fontSize: "100px", marginBottom: "10px" }}
              />
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "500",
                  textAlign: "center",
                  color: "#333",
                }}
              >
                No episodes found for {lastSearchQuery}.
              </p>
              <p
                style={{
                  fontSize: "0.9rem",
                  textAlign: "center",
                  color: "#777",
                  maxWidth: "80%",
                }}
              >
                Try adjusting your search criteria or explore other categories
                and tags.
              </p>
            </div>
          )}
        </Screen>

        <Screen>
          <Title level={3} className={styles.PodcastSearchTitle}>
            Recommended
          </Title>
          <List
            itemLayout="horizontal"
            dataSource={podcast.slice(0, 4)}
            renderItem={(episode) => (
              <List.Item
                onClick={() => {
                  handleEpisodeClick(episode);
                  handleCardClick();
                }}
                style={{
                  cursor: "pointer",
                  justifyContent: "center",
                  borderBlockEnd: "none",
                }}
              >
                <div className={styles.HorizontalCard}>
                  <div className={styles.podcastSearch_RecommendImg}>
                    <Image
                      src={episode.image}
                      className={styles.podcastImage}
                      alt={episode.name}
                      width={175}
                      height={100}
                      priority={true}
                    />
                  </div>
                  <div className={styles.HorizontalCardContent}>
                    <div className={styles.HorizontalCardTitle}>
                      {episode.name}
                    </div>
                    <div className={styles.HorizontalCardDescription}>
                      Description: {episode.description}
                    </div>
                  </div>
                </div>
              </List.Item>
            )}
          />
        </Screen>
      </BaseLayout>
    </div>
  );
};

export default PodcastSearch;
