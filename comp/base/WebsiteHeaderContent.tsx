import React from "react";
import Styles from "../../styles/comp/core/WebHeader.module.css";

export interface WebsiteHeaderProps {
  title: string;
  paragraph: string;
  link?: string;
  dir?: string;
  btnLink?: string;
}

const WebsiteHeaderContent = ({ title, paragraph, link, dir, btnLink }: WebsiteHeaderProps) => {
  return (
    <div>
      <div style={{ backgroundColor: "#b8d9e2" }}>
        <div className={Styles.Anothercontain}>
          <h1>{title}</h1>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default WebsiteHeaderContent;
