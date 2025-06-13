import React from "react";
import styles from "../styles/comp/ButtonStyles.module.css"; // Import your CSS file

// ButtonProps interface remains the same
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
  width?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  linkColor?: string;
  underline?: boolean;
  fontsize?: string;
  "aria-label"?: string;
  border?: string;
}

// Custom Button component (without Ant Design)
const CustomButton: React.FC<ButtonProps> = (props) => {
  return (
    <div
      className={styles.buttonWrapper} // Use a wrapper class to apply hover effects and styles
      style={{
        "--hoverBgColor": props.hoverBgColor || "#e0e0e0",
        "--hoverTextColor": props.hoverTextColor || "#000105e0",
      } as React.CSSProperties}
    >
      <button
        type={props.htmlType || "button"}
        onClick={props.onClick}
        className={`${styles.customButton} ${props.className ?? ""}`}
        style={{
          backgroundColor: props.bgColor,
          color: props.color,
          padding: props.padding,
          borderRadius: props.borderRadius,
          height: props.height,
          width: props.width,
          fontSize: props.fontsize,
          border: props.border || "none",
          ...props.style,
        }}
        aria-label={props["aria-label"] || (props.text ? String(props.text) : "Button")}
      >
        {props.text}
        {/* {props.icon && (
          <span style={{ marginLeft: 0, display: "inline-flex", alignItems: "center" }}>
            {props.icon}
          </span>
        )} */}
      </button>
    </div >
  );
};

// SmallButton component using CustomButton
export const SmallButton: React.FC<ButtonProps> = (props) => {
  return (
    <CustomButton
      {...props}
      className={`${styles.smallButton} ${props.className ?? ""}`}
    />
  );
};

// MediumButton component using CustomButton
export const MediumButton: React.FC<ButtonProps> = (props) => {
  return (
    <CustomButton
      {...props}
      className={`${styles.mediumButton} ${props.className ?? ""}`}
    />
  );
};

// LargeButton component using CustomButton
export const LargeButton: React.FC<ButtonProps> = (props) => {
  return (
    <CustomButton
      {...props}
      className={`${styles.largeButton} ${props.className ?? ""}`}
    />
  );
};

// SignButton component using CustomButton
export const SignButton: React.FC<ButtonProps> = (props) => {
  return (
    <CustomButton
      {...props}
      className={`${styles.SignButton} ${props.className ?? ""}`}
    />
  );
};

// LearnMoreButton component using CustomButton
export const LearnMoreButton: React.FC<ButtonProps> = (props) => {
  return (
    <CustomButton
      {...props}
      className={`${styles.LearnMoreButton} ${props.className ?? ""}`}
    />
  );
};

// LearnMoreButtonLink component using CustomButton
export const LearnMoreButtonLink: React.FC<ButtonProps> = (props) => {
  return (
    <CustomButton
      {...props}
      className={`${styles.LearnMoreButtonLink} ${props.className ?? ""}`}
    />
  );
};
