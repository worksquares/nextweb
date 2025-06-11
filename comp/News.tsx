import Link from "next/link";
import styles from "../styles/comp/News.module.css";

const News = () => {
  return (
    <div style={{ width: "100%", maxWidth: "2300px", margin: "0 auto" }}>
      <div>
        <div className={styles.item5}>
          <h2>What’s new at Digisquares</h2>
          <span>
            <Link href="/more/Blog">See All News</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default News;
