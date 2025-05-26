import styles from "../styles/comp/core/ImageSingleRow.module.css";
import ImageCard, { SingleRowProps } from "./base/ImageSingleRow";

interface ImageSingleGridProps {
  ImageSinglePropsList: SingleRowProps[];
}

const ImageSingleRowGrid = (InfoRowListData: ImageSingleGridProps) => {
  return (
    <div className={styles.GridAlignCards}>
      {InfoRowListData.ImageSinglePropsList.map((Imageprop) => (
        <ImageCard key={Imageprop.title} image={Imageprop.image} category={Imageprop.category} title={Imageprop.title} description={Imageprop.description} link={Imageprop.link} />
      ))}
    </div>
  );
};

export default ImageSingleRowGrid;
