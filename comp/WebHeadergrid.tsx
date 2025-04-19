import React from "react";
import WebsiteHeaderContent, { WebsiteHeaderProps } from "./base/WebsiteHeaderContent";

interface AnotherContentProps {
  HeaderBannerPropsList: WebsiteHeaderProps[];
}

const WebHeadergrid = (WebHeaderContentList: AnotherContentProps) => {
  return (
    <div>
      {WebHeaderContentList.HeaderBannerPropsList.map((Anotherprop, i) => (
        <WebsiteHeaderContent
          key={Anotherprop.title}
          title={Anotherprop.title}
          paragraph={Anotherprop.paragraph}
          link={Anotherprop.link}
          dir={Anotherprop.dir === null ? (i % 2 == 0 ? "left" : "right") : Anotherprop.dir}
          btnLink={Anotherprop.btnLink}
        />
      ))}
    </div>
  );
};

export default WebHeadergrid;
