import React from "react";
import Menu from "../components/Menu";
import MainFooter from "../components/MainFooter";

const BaseLayout = ({ children }) => {

  return (
    <>
      <Menu />
      {children}
      <MainFooter />
    </>
  );
};

export default BaseLayout;
