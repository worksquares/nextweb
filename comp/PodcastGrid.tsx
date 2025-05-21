import { Typography } from "antd";
import { useRouter } from "next/router";
import styles from "../styles/podcast/PodcastGrid.module.css";

const { Title } = Typography;

const PodcastCard = ({ podcast }) => {
  const router = useRouter();

  const handleClick = (category) => {
    const selectedCategory = category;
    router.push(`/resources/PodcastSearch?name=${encodeURIComponent(selectedCategory)}`);
  };

  return (
    <div className={styles.podcastContainer} onClick={() => handleClick(podcast.name)}>
      <div
        className={styles.imageWrapper}
        style={{ backgroundImage: `url(${podcast.image})` }}
      ></div>
      <div className={styles.content}>
        <div className={styles.title}>{podcast.name}</div>
        <div className={styles.description}>Description: {podcast.description}</div>
      </div>
    </div>
  );
};

const PodcastGrid = ({ podcasts }) => (
  <div className={styles.gridContainer}>
    <Title level={3} className={styles.gridTitle}>
      Top Podcasts
    </Title>
    <div className={styles.gridContent}>
      {podcasts?.slice(0, 4).map((podcast, index) => (
        <PodcastCard podcast={podcast} key={index} />
      ))}
    </div>
  </div>
);

export default PodcastGrid;
