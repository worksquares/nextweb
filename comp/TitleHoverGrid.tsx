import TitleHover, { TitleHoverProps } from "./base/TitleHover";

interface TitleHoverGridProps {
  TitleHoverPropsList: TitleHoverProps[];
}

const TitleHoverGrid = (TitleHoverListData: TitleHoverGridProps) => {
  return (
    <>
      {TitleHoverListData.TitleHoverPropsList.map((titleprop) => (
        <TitleHover key={titleprop.titlelink} icon={titleprop.icon} titlelink={titleprop.titlelink} link={titleprop.link} />
      ))}
    </>
  );
};

export default TitleHoverGrid;
