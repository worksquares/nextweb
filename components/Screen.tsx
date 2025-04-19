import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Screen: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={className}
      style={{
        padding: "60px 40px",
        maxWidth: "1440px",
        margin: "0 auto",
        boxSizing: "border-box",
      }}
    >
      {children}
    </div>
  );
};

export default Screen;
