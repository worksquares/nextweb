import Image from "next/image";

type ImageType =
  | "hero"
  | "hero_alt"
  | "card"
  | "slider"
  | "banner"
  | "tab"
  | "rightLeft"
  | "blogsMain"
  | "blogSmall"
  | "blogRight"
  | "header";

interface CustomImageProps {
  type: ImageType;
  src: string | any;
  alt: string;
  className?: string;
  priority?: boolean;
}

const imageSizes: Record<
  ImageType,
  { width: number | "auto"; height: number }
> = {
  hero: { width: 670, height: 560 },
  hero_alt: { width: 770, height: 435 },
  card: { width: 360, height: 200 },
  slider: { width: 300, height: 200 },
  banner: { width: 770, height: 435 },
  tab: { width: 650, height: 440 },
  rightLeft: { width: 770, height: 435 },
  blogsMain: { width: 1000, height: 500 },
  blogSmall: { width: 520, height: 280 },
  blogRight: { width: 360, height: 200 },
  header: { width: "auto", height: 290 },
};
const CustomImage: React.FC<CustomImageProps> = ({
  type,
  src,
  alt,
  className,
  priority,
}) => {
  const { width, height } = imageSizes[type];

  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      width={width === "auto" ? undefined : width}
      height={height}
      layout="responsive"
      className={className}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 670px"
    />
  );
};

export default CustomImage;
