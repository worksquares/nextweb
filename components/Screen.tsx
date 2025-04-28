import Styles from "../styles/comp/Screen.module.css";

export interface BoxProps {
  children: React.ReactNode;
  style? : React.CSSProperties;
}

const Screen = ({ children, style}: BoxProps) => {
  return <div style={style} className={Styles.ScreenMain}>{children}</div>;
};

export default Screen;