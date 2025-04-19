import styles from "./Marquee.module.css";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={`${styles.marqueeContainer} ${
        vertical ? styles.flexCol : styles.flexRow
      } ${className} ${pauseOnHover ? styles.pauseOnHover : ""}`}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`${styles.marqueeItem} ${
              vertical ? styles.marqueeVertical : styles.marqueeHorizontal
            } ${reverse ? styles.reverseDirection : ""}`}
          >
            {children}
          </div>
        ))}
    </div>
  );
}