import React from "react";
import AnotherimgCard, { AnotherContainProps } from "./base/AnotherImgCard";

interface AnotherContentProps {
  AnotherCardPropsList: AnotherContainProps[];
}
const ImagecontentCard = (AnotherCardListData: AnotherContentProps) => {
  return (
    <>
      {AnotherCardListData.AnotherCardPropsList.map((Anotherprop, i) => (
        <AnotherimgCard
          key={Anotherprop.title}
          title={Anotherprop.title}
          paragraph={Anotherprop.paragraph}
          link={Anotherprop.link}
          dir={Anotherprop.dir === null ? (i % 2 == 0 ? "left" : "right") : Anotherprop.dir}
          img320={Anotherprop.img320}
          btnLink={Anotherprop.btnLink}
          btn={Anotherprop.btn}
        />
      ))}
    </>
  );
};

export default ImagecontentCard;
