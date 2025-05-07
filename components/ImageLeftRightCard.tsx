import { CodeSandboxSquareFilled, RobotFilled } from "@ant-design/icons";
import React, { JSX } from "react";
import CustomImage from "../components/CustomImage";
import Styles from "../styles/comp/ImageLeftRight.module.css";

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
    <div>
      <div className={Styles.cardHeader}>
        <h2
          className={Styles.cardtitle1}
          style={{
            textAlign: dir === "left" ? "right" : "left", // Title alignment
            marginLeft: dir === "left" ? "0" : "auto", // Title alignment left if image on right
            marginRight: dir === "right" ? "0" : "auto", // Title alignment right if image on left
          }}
        >
          {normalFirst}{" "}
          <span className={Styles.emphasized}>{emphasized}</span> {normalRest}
        </h2>
        {subtitle && (
          <span
            className={Styles.subtitle}
            style={{
              textAlign: dir === "left" ? "right" : "left", // Subtitle alignment
              marginLeft: dir === "left" ? "0" : "auto", // Subtitle alignment left if image on right
              marginRight: dir === "right" ? "0" : "auto", // Subtitle alignment right if image on left
            }}
          >
            {subtitle}
          </span>
        )}
      </div>

      <div
        className={Styles.container}
        style={{
          flexDirection: dir === "left" ? "row-reverse" : "row", // Switch content order based on direction
        }}
      >
        <div className={Styles.textSection}>
          {paragraph && (
            <h4 className={Styles.paragraph}>{renderIconText(paragraph)}</h4>
          )}
          {paragraph1 && <p className={Styles.paragraphText}>{paragraph1}</p>}
          {paragraph2 && (
            <h4 className={Styles.paragraph}>{renderIconText(paragraph2)}</h4>
          )}
          {paragraph3 && <p className={Styles.paragraphText}>{paragraph3}</p>}

          {/* {button && (
            <button className={Styles.learnMoreButton}>{button}</button>
            )}


          {link && (
            <a href={link} className={Styles.learnMoreLink}>
              Learn More
            </a>
          )} */}
        </div>

        <div className={Styles.imageSection}>
          <CustomImage type="rightLeft" src={img320} alt="Card Visual" />

          {/* Learn More Button and Link */}
          <div
            className={Styles.buttonLinkContainer}
            style={{
               justifyContent: dir === "right" ? "flex-end" : "flex-start", // Align button to the left or right based on image direction
              display: "flex", // Ensure the div behaves like a flex container
              flexDirection: "column", // Stack the button on top if needed
              alignItems: dir === "right" ? "flex-end" : "flex-start", // Align items (button) to the start or end of the container
              width: "100%", // Ensure the container takes up the full width of the image section
              marginTop: "auto", // Push button to the bottom if needed
            }}
          >
          {link && (
            <a href={link} className={Styles.learnMoreLink}>
             {button && (
            <button className={Styles.learnMoreButton}>{button}</button>
          )}
            </a>
          )}
        </div>
          {/* {button && (
            <button className={Styles.learnMoreButton}>{button}</button>
            )} */}


          {/* {link && (
            <a href={link} className={Styles.learnMoreLink}>
              {button && (
            <button className={Styles.learnMoreButton}>{button}</button>
            )}
            </a>
          )} */}

            {/* {link && (
            <a href={link} className={Styles.learnMoreLink}>
              {button && (
            <button className={Styles.learnMoreButton}>{button}</button>
            )}
            </a>
          )} */}

          <div
            className={Styles.divider}
            style={{
              marginLeft: dir === "left" ? "0" : "auto",
              marginRight: dir === "right" ? "0" : "auto",
            }}
          />

          </div>
        </div>
      </div>

  );
};

export default ImageLeftRightCard;




// import { CodeSandboxSquareFilled, RobotFilled } from "@ant-design/icons";
// import React, { JSX } from "react";
// import CustomImage from "../components/CustomImage";
// import Styles from "../styles/comp/ImageLeftRight.module.css";

// interface Props {
//   title: string;
//   subtitle?: string;
//   paragraph: string;
//   paragraph1?: string;
//   paragraph2?: string;
//   paragraph3?: string;
//   img320: string;
//   dir?: "left" | "right";
//   button?: string;
//   link?: string;
// }

// const ImageLeftRightCard: React.FC<Props> = ({
//   title,
//   subtitle,
//   paragraph,
//   paragraph1,
//   paragraph2,
//   paragraph3,
//   img320,
//   dir = "left",
//   button,
//   link,
// }) => {
//   const titleParts = title.split(" ");
//   const normalFirst = titleParts[0];
//   const emphasized = titleParts.slice(1, 6).join(" ");
//   const normalRest = titleParts.slice(6).join(" ");

//   const iconMap: { [key: string]: JSX.Element } = {
//     "🛠": (
//       <CodeSandboxSquareFilled style={{ fontSize: "20px", color: "#fff" }} />
//     ),
//     "⚙️": (
//       <RobotFilled style={{ fontSize: "20px", color: "#fff" }} />
//     ),
//   };

//   const renderIconText = (text: string) => {
//     const words = text.split(" ");
//     const iconKey = words[0];
//     const remainingText = words.slice(1).join(" ");
//     const iconComponent = iconMap[iconKey] || iconKey;

//     return (
//       <>
//         <span
//           style={{
//             backgroundColor: "#FF0707",
//             padding: "6px",
//             borderRadius: "0px",
//             display: "inline-flex",
//             alignItems: "center",
//             justifyContent: "center",
//             marginRight: "8px",
//           }}
//         >
//           {iconComponent}
//         </span>
//         {remainingText}
//       </>
//     );
//   };

//   return (
//     <div>
//         <div
//           className={Styles.cardtitle}
//           style={{
//             textAlign: dir === "left" ? "right" : "left",
//             marginLeft: dir === "left" ? "0" : "auto",
//             marginRight: dir === "right" ? "0" : "auto",
//           }}
//         />
//         <h2 className={Styles.cardtitle1}>
//           {normalFirst}{" "}
//           <span className={Styles.emphasized}>{emphasized}</span> {normalRest}
//         </h2>
//         {subtitle && <span className={Styles.subtitle}>{subtitle}</span>}
//     <div
//       className={Styles.container}
//       style={{
//         // flexDirection: dir === "left" ? "row-reverse" : "row",
//         flexDirection: dir === "left" ? "row-reverse" : "row",
//       }}
//     >


//       <div className={Styles.textSection}>
//         {/* <h2>
//           {normalFirst}{" "}
//           <span className={Styles.emphasized}>{emphasized}</span> {normalRest}
//         </h2>
//         {subtitle && <span className={Styles.subtitle}>{subtitle}</span>} */}
//         {paragraph && (
//           <h4 className={Styles.paragraph}>{renderIconText(paragraph)}</h4>
//         )}
//         {paragraph1 && <p className={Styles.paragraphText}>{paragraph1}</p>}
//         {paragraph2 && (
//           <h4 className={Styles.paragraph}>{renderIconText(paragraph2)}</h4>
//         )}
//         {paragraph3 && <p className={Styles.paragraphText}>{paragraph3}</p>}


//         {button && (
//           <button className={Styles.learnMoreButton}>{button}</button>
//         )}


//         {link && (
//           <a href={link} className={Styles.learnMoreLink}>
//             Learn More
//           </a>
//         )}
//       </div>


//       <div className={Styles.imageSection}>
//         <CustomImage type="rightLeft" src={img320} alt="Card Visual" />
//         <div
//           className={Styles.divider}
//           style={{
//             marginLeft: dir === "left" ? "0" : "auto",
//             marginRight: dir === "right" ? "0" : "auto",
//           }}
//         />
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ImageLeftRightCard;
