import { memo } from "react";
import Marquee from "../components/magicui/marquee";
import styles from "./MarqueeDemo.module.css";
import Image from "next/image";

const reviews = [
  {
    name: "Web Project",
    username: "",
    body: "Build enterprise apps quickly with low-code solutions.",
    img: "/assets/WebApp.svg",
  },
  {
    name: "Mobile Project",
    username: "",
    body: "Create cross-platform apps with faster deployment and lower costs.",
    img: "/assets/MobileApp.svg",
  },
  {
    name: "AI Agent",
    username: "",
    body: "Automate tasks and improve decisions with AI-driven tools.",
    img: "/assets/AiAgent.svg",
  },
  {
    name: "AI Studio",
    username: "",
    body: "Easily create, train, and deploy AI models.",
    img: "/assets/AiStudio.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure className={`${styles.reviewCard}`}>
      <div className="flex flex-row items-center gap-2">
        <Image
          className={styles.userImage}
          width="20"
          height="20"
          alt=""
          src={img}
        />
        <div className={styles.userDetails}>
          <figcaption className={styles.caption}>{name}</figcaption>
          <p className={styles.username}>{username}</p>
        </div>
      </div>
      <blockquote className={styles.blockquote}>{body}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className={styles.container}>
      <Marquee pauseOnHover className={styles.marquee}>
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <div
        className={`${styles.gradientLeft} ${styles.gradientDarkLeft}`}
      ></div>
    </div>
  );
};
export default memo(MarqueeDemo);
