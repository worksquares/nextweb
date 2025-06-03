
import Image from "next/image";

type ImageType =
  | "hero"
  | "hero_alt"
  | "card"
  | "slider"
  | "herosection"
  | "banner"
  | "tab"
  | "rightLeft"
  | "blogsMain"
  | "blogSmall"
  | "blogRight"
  | "header"
  | "description";

interface CustomImageProps {
  type: ImageType;
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const imageSizes: Record<ImageType, { width: number| "auto" ; height: number }> = {
  hero: { width: 670, height: 560 },
  hero_alt: { width: 770, height: 435 },
  card: { width: 360, height: 200 },
  slider: { width: 300, height: 200 },
  banner: { width: 770, height: 435 },
  tab: { width: 650, height: 440 },
  rightLeft: { width: 700, height: 500 },
  blogsMain: { width: 1000, height: 500 },
  blogSmall: { width: 520, height: 280 },
  blogRight: { width: 360, height: 200 },
  header: { width: "auto", height: 290 },
  herosection: { width: 500, height: 500 },
  description:{width: 600, height: 450}
};

const CustomImage: React.FC<CustomImageProps> = ({
  type,
  src,
  alt,
  className,
  priority,
}) => {
  console.log('type: ', type);

  const imageSize = imageSizes[type] || { width: 0, height: 0 };

  const { width, height } = imageSize;
  console.log('height: ', height);
  console.log('width: ', width);


  return (
    <Image
      src={src}
      alt={alt}
      // priority={priority}
      width={width === "auto" ? undefined : width}
      height={height}
      style={{ objectFit:"contain" }}
      // layout="responsive"
      // style={{width:"400px",height:"200px"}}
      className={className}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 670px"

    />
  );
};

export default CustomImage;
