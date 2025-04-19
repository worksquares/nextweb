import React from "react";
import InfoCard, { InfoCardProps } from "./base/InfoCard";

interface InfoCardGridProps {
  InfoCardPropsList: InfoCardProps[];
}

const InfoCardGrid = (InfoCardListData: InfoCardGridProps) => {
  return (
    <>
      {InfoCardListData.InfoCardPropsList.map((cardprop) => (
        <InfoCard key="InfoCard" title={cardprop.title} information={cardprop.information} subtitle={cardprop.subtitle} />
      ))}
    </>
  );
};

export default InfoCardGrid;
