import { Button } from "antd";
import React from "react";
import styles from "./ButtonStyles.module.css";

interface ButtonProps {
  htmlType?: "button" | "submit" | "reset";
  onClick?: () => void;
  style?: React.CSSProperties;
  text?: string;
  bgColor?: string;
  color?: string;
  className?: string;
  hoverBgColor?: string;  // Prop for hover background color
  hoverTextColor?: string;  // Prop for hover text color
  linkColor?: string; // Prop for link text color
  underline?: boolean;  // Prop to enable or disable underline
}

export const SmallButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      htmlType={props.htmlType}
      onClick={props.onClick}
      className={`${styles.smallButton} ${props.className ?? ""}`}
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        "--hoverBgColor": props.hoverBgColor || "#e0e0e0",  // Set dynamic hover background color
        "--hoverTextColor": props.hoverTextColor || "#000105e0",  // Set dynamic hover text color
        ...props.style,
      } as React.CSSProperties}
    >
      {props.text}
    </Button>
  );
};

export const MediumButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      htmlType={props.htmlType}
      onClick={props.onClick}
      className={`${styles.mediumButton} ${props.className ?? ""}`}
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        "--hoverBgColor": props.hoverBgColor || "#e0e0e0",  // Set dynamic hover background color
        "--hoverTextColor": props.hoverTextColor || "#000105e0",  // Set dynamic hover text color
        ...props.style,
      } as React.CSSProperties}
    >
      {props.text}
    </Button>
  );
};

export const LargeButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      htmlType={props.htmlType}
      onClick={props.onClick}
      className={`${styles.largeButton} ${props.className ?? ""}`}
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        "--hoverBgColor": props.hoverBgColor || "#e0e0e0",  // Set dynamic hover background color
        "--hoverTextColor": props.hoverTextColor || "#000105e0",  // Set dynamic hover text color
        ...props.style,
      } as React.CSSProperties}
    >
      {props.text}
    </Button>
  );
};

// export const LinkButton:React.FC<ButtonProps> = (props) =>{
//   return{
//     <a
//     <Button
//     htmlType={props.htmlType}
//     onClick={props.onClick}
//     className={`${styles.largeButton} ${props.className ?? ""}`}
//     style={{

//       color: props.color,
//       "--hoverTextColor": props.hoverTextColor || "#000105e0",  // Set dynamic hover text color
//       ...props.style,
//     } as React.CSSProperties}
//   >
//     {props.text}
//   </a>
//   }
// }
