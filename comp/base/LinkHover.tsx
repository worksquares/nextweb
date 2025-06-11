import styles from "../../styles/comp/core/LinkHover.module.css";
import Images from "./Images";

export interface LinkHoverProps {
  icon: string;
  title: string;
  links: sublink[];
}

export interface sublink {
  link: string;
  pagelink?: string | any;
}

const LinkHover = ({ icon, title, links }: LinkHoverProps) => {
  return (
    // <div>
    //  </div>
    <div className={styles.ResourcesCards}>
      <div className={styles.Carditems}>
        <div className={styles.CardimgHeading}>
          <Images alt="sds" width="50" height="50" className={styles.imgresponsiveChange} src={icon}></Images>
          <h5>{title}</h5>
        </div>
        <div className={styles.CardBoxHighlight}>
          {/* {links.map((alink) => (
            <Link  href={alink.pagelink || "#"} key="a2">
              <a className={styles.LineAnimate} target="_blank">
                {alink.link}
              </a>
            </Link>
          ))} */}
          {links.map((alink) => (
            <div className={styles.CardHighlight}>
              <p className={styles.LineAnimate}>{alink.link}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.ReResourcesCards}>
        <div className={styles.ReDropdownContainer}>
          <details>
            <summary className={styles.SummaryHeading}>
              <Images alt="sds" width="50" height="50" className={styles.imgReresponsiveChange} src={icon}></Images>
              {title}
            </summary>
            <span className={styles.SelectOptionsFlex}>
              {links.map((alink) => (
                <a key="a1" href={alink.pagelink} className={`${styles.LineAnimate}, ${styles.Summaryoptions}`}>
                  {alink.link}
                </a>
              ))}
            </span>
          </details>
        </div>
      </div>
    </div>
  );
};

export default LinkHover;
