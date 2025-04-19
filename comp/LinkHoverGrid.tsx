import React from "react";
import LinkHover, { LinkHoverProps } from "./base/LinkHover";

interface LinkHoverGridProps {
  LinkHoverPropsList: LinkHoverProps[];
}

const LinkHoverGrid = (LinkHoverListData: LinkHoverGridProps) => {
  return (
    <>
      {LinkHoverListData.LinkHoverPropsList.map((linkprop) => (
        <LinkHover key="LinkHover" icon={linkprop.icon} title={linkprop.title} links={linkprop.links} />
      ))}
    </>
  );
};

export default LinkHoverGrid;
