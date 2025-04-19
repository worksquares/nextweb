import React, { JSX } from "react";
import CustomImage from "../components/CustomImage";
import Styles from "../styles/comp/ImageLeftRight.module.css"; 
import { CodeSandboxSquareFilled, RobotFilled } from "@ant-design/icons";

interface Props {
  title: string;
  subtitle?: string;
  paragraph: string;
  paragraph1?: string;
  paragraph2?: string;
  paragraph3?: string;
  img320: string;
  dir?: "left" | "right";
  button?: string;
  link?: string;
}

const ImageLeftRightCard: React.FC<Props> = ({
  title,
  subtitle,
  paragraph,
  paragraph1,
  paragraph2,
  paragraph3,
  img320,
  dir = "left",
  button,
  link,
}) => {
  const titleParts = title.split(" ");
  const normalFirst = titleParts[0];
  const emphasized = titleParts.slice(1, 6).join(" ");
  const normalRest = titleParts.slice(6).join(" ");

  const iconMap: { [key: string]: JSX.Element } = {
    "🛠": (
      <CodeSandboxSquareFilled style={{ fontSize: "20px", color: "#fff" }} />
    ),
    "⚙️": (
      <RobotFilled style={{ fontSize: "20px", color: "#fff" }} />
    ),
  };

  const renderIconText = (text: string) => {
    const words = text.split(" ");
    const iconKey = words[0];
    const remainingText = words.slice(1).join(" ");
    const iconComponent = iconMap[iconKey] || iconKey;

    return (
      <>
        <span
          style={{
            backgroundColor: "#FF0707",
            padding: "6px",
            borderRadius: "0px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "8px",
          }}
        >
          {iconComponent}
        </span>
        {remainingText}
      </>
    );
  };

  return (
    <div
      className={Styles.container}
      style={{
        flexDirection: dir === "left" ? "row-reverse" : "row",
      }}
    >
     
      <div className={Styles.textSection}>
        <h2>
          {normalFirst}{" "}
          <span className={Styles.emphasized}>{emphasized}</span> {normalRest}
        </h2>
        {subtitle && <span className={Styles.subtitle}>{subtitle}</span>}
        {paragraph && (
          <h4 className={Styles.paragraph}>{renderIconText(paragraph)}</h4>
        )}
        {paragraph1 && <p className={Styles.paragraphText}>{paragraph1}</p>}
        {paragraph2 && (
          <h4 className={Styles.paragraph}>{renderIconText(paragraph2)}</h4>
        )}
        {paragraph3 && <p className={Styles.paragraphText}>{paragraph3}</p>}

       
        {button && (
          <button className={Styles.learnMoreButton}>{button}</button>
        )}

        
        {link && (
          <a href={link} className={Styles.learnMoreLink}>
            Learn More
          </a>
        )}
      </div>

      
      <div className={Styles.imageSection}>
        <CustomImage type="rightLeft" src={img320} alt="Card Visual" />
        <div
          className={Styles.divider}
          style={{
            marginLeft: dir === "left" ? "0" : "auto",
            marginRight: dir === "right" ? "0" : "auto",
          }}
        />
      </div>
    </div>
  );
};

export default ImageLeftRightCard;
