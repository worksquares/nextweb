import HeaderContent, { HeaderContentProps } from "./base/HeaderContent";
import React from "react";

interface AnotherContentProps {
  HeaderBannerPropsList: HeaderContentProps[];
}

const HeaderChange: React.FC<AnotherContentProps> = ({ HeaderBannerPropsList }) => {
  return (
    <div>
      {HeaderBannerPropsList.map((Anotherprop, i) => (
        console.log("vcdx",Anotherprop),
        <HeaderContent
          key={Anotherprop.title}
          title={Anotherprop.title}
          paragraph={Anotherprop.paragraph}
          link={Anotherprop.link}
          dir={Anotherprop.dir === null ? (i % 2 === 0 ? "left" : "right") : Anotherprop.dir}
          img320={Anotherprop.img320}
          btnLink={Anotherprop.btnLink}
          backgroundColor={Anotherprop.backgroundColor}
          isPodCast={Anotherprop.isPodCast}
          backgroundImg={Anotherprop.backgroundImg}
        />
      ))}
    </div>
  );
};

export default HeaderChange;
