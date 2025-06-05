import { Button } from "antd";
import React from "react";
import styles from "./ButtonStyles.module.css";

export interface ButtonProps {
  htmlType?: "button" | "submit" | "reset";
  onClick?: () => void;
  style?: React.CSSProperties;
  text?: React.ReactNode;
  icon?: React.ReactNode;
  bgColor?: string;
  color?: string;
  padding?: string;
  className?: string;
  borderRadius?: string;
  height?: string;
  width?:string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  linkColor?: string;
  underline?: boolean;
  fontsize?:string;
}

export const SmallButton: React.FC<ButtonProps> = (props) => {
  return (
    <div
      style={{
        "--hoverBgColor": props.hoverBgColor || "#e0e0e0",
        "--hoverTextColor": props.hoverTextColor || "#000105e0",
      } as React.CSSProperties}
    >
      <Button
        htmlType={props.htmlType}
        onClick={props.onClick}
        className={`${styles.smallButton} ${props.className ?? ""}`}
        style={{
          backgroundColor: props.bgColor,
          color: props.color,
          padding: props.padding,
          borderRadius: props.borderRadius,
          height: props.height,
          ...props.style,
        }}
      >
        {props.text}
      </Button>
    </div>
  );
};

export const MediumButton: React.FC<ButtonProps> = (props) => {
  return (
    <div
      style={{
        "--hoverBgColor": props.hoverBgColor || "#e0e0e0",
        "--hoverTextColor": props.hoverTextColor || "#000105e0",
      } as React.CSSProperties}
    >
      <Button
        htmlType={props.htmlType}
        onClick={props.onClick}
        className={`${styles.mediumButton} ${props.className ?? ""}`}
        style={{
          backgroundColor: props.bgColor,
          color: props.color,
          padding: props.padding,
          height: props.height,
          borderRadius: props.borderRadius,
          ...props.style,
        }}
      >
        {props.text}
      </Button>
    </div>
  );
};

export const LargeButton: React.FC<ButtonProps> = (props) => {
  return (
    <div
      style={{
        "--hoverBgColor": props.hoverBgColor || "#e0e0e0",
        "--hoverTextColor": props.hoverTextColor || "#000105e0",
      } as React.CSSProperties}
    >
      <Button
        htmlType={props.htmlType}
        onClick={props.onClick}
        className={`${styles.largeButton} ${props.className ?? ""}`}
        style={{
          backgroundColor: props.bgColor,
          color: props.color,
          padding: props.padding,
          height: props.height,
          borderRadius: props.borderRadius,
          ...props.style,
        }}
      >
        {props.text}
      </Button>
    </div>
  );
};

export const SignButton: React.FC<ButtonProps> = (props) => {
  return (
    <div
      style={{
        "--hoverBgColor": props.hoverBgColor || "#e0e0e0",
        "--hoverTextColor": props.hoverTextColor || "#000105e0",
      } as React.CSSProperties}
    >
      <Button
        htmlType={props.htmlType}
        onClick={props.onClick}
        className={`${styles.SignButton} ${props.className ?? ""}`}
        style={{
          backgroundColor: props.bgColor,
          color: props.color,
          padding: props.padding,
          borderRadius: props.borderRadius,
          ...props.style,
        }}
      >
        {props.text}
      </Button>
    </div>
  );
};

export const LearnMoreButton: React.FC<ButtonProps> = (props) => {
  return (
    <div
      style={{
        "--hoverBgColor": props.hoverBgColor || "#e0e0e0",
        "--hoverTextColor": props.hoverTextColor || "#000105e0",
      } as React.CSSProperties}
    >
      <Button
        htmlType={props.htmlType}
        onClick={props.onClick}
        className={`${styles.LearnMoreButton} ${props.className ?? ""}`}
        style={{
          backgroundColor: props.bgColor,
          color: props.color,
          padding: props.padding,
          height: props.height,
          width:props.width,
          fontSize:props.fontsize,
          borderRadius: props.borderRadius,
          ...props.style,
        }}
      >
        {props.text}
        {props.icon && (
          <span style={{ marginLeft: 0, display: "inline-flex", alignItems: "center" }}>
            {props.icon}
          </span>
        )}
      </Button>
    </div>
  );
};

export const LearnMoreButtonLink: React.FC<ButtonProps> = (props) => {
  return (
    <div
      style={{
        "--hoverBgColor": props.hoverBgColor || "#e0e0e0",
        "--hoverTextColor": props.hoverTextColor || "#000105e0",
      } as React.CSSProperties}
    >
      <Button
        htmlType={props.htmlType}
        onClick={props.onClick}
        className={`${styles.LearnMoreButtonLink} ${props.className ?? ""}`}
        style={{
          backgroundColor: props.bgColor,
          color: props.color,
          padding: props.padding,
          height: props.height,

          borderRadius: props.borderRadius,
          ...props.style,
        }}
      >
        {props.text}
        {props.icon && (
          <span style={{ marginLeft: 0, display: "inline-flex", alignItems: "center" }}>
            {props.icon}
          </span>
        )}
      </Button>
    </div>
  );
};
