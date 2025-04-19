import React, { useState } from "react";
import styles from "../styles/comp/Tcv.module.css";
import Image from "next/image";

const Tcv = () => {
  const [videoShow, setVideoShow] = useState(false);

  const popupVideo = () => {
    setVideoShow(!videoShow);
  };

  const VideoClose = () => {
    setVideoShow(false);
  };

  return (
    <div>
      <div style={{ width: "100%", maxWidth: "2300px", margin: "0 auto" }}>
        {videoShow && (
          <div className={styles.PopupVideoBox}>
            <iframe width="750" height="380" src="https://www.youtube.com/embed/fdbln7j6XNw" frameBorder="0" allow="autoplay encrypted-media" />
                        <Image
                            src="/assets/IconClose.webp"
                            alt="asas"
                            style={{ width: "88px" }}
                            onClick={VideoClose}
                            className={styles.CloseVideo}
                          />
          </div>
        )}
      </div>

      <div className={styles.tcv}>
        <div className={styles.tvccontain}>
          <div>
            <div className={styles.tcvmain}>
              <div className={styles.tcvcontainer}>
                <nav className={styles.tvcnav} aria-label="Tabs">
                  <a className={styles.tcva} aria-current="page" onClick={popupVideo}>
                    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 32 32">
                      <title>Try a Demo</title>
                      <g>
                        <path
                          d="M29,2H3A3,3,0,0,0,0,5V21a3,3,0,0,0,3,3h9v1a3,3,0,0,1-3,3,1,1,0,0,0,0,2H23a1,1,0,0,0,0-2,3,3,0,0,1-3-3V24h9a3,3,0,0,0,3-3V5A3,3,0,0,0,29,2ZM19,28H13a4.98,4.98,0,0,0,1-3V24h4v1A4.98,4.98,0,0,0,19,28Zm11-7a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V5A1,1,0,0,1,3,4H29a1,1,0,0,1,1,1Z"
                          fill="#7060fe"
                        />
                        <path
                          d="M12.007,7.655,12,16.8a.5.5,0,0,0,.838.369l2.4-2.206,2.234,3.743a.5.5,0,0,0,.687.17l1.611-.973a.5.5,0,0,0,.169-.686l-2.235-3.743,3.068-1a.5.5,0,0,0,.081-.916L12.743,7.215A.5.5,0,0,0,12.007,7.655Z"
                          fill="#40d1ce"
                        />
                      </g>
                    </svg>
                    <span>Watch demo</span>
                  </a>
                  <a href="https://app.digisquares.com/register" className={styles.tcva} aria-current="page">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 32 32">
                      <title>Connect with Sales</title>
                      <g>
                        <path
                          d="M28.381,14.19a1.251,1.251,0,0,1-1.13-.713,12.823,12.823,0,0,0-4.864-5.452A1.249,1.249,0,1,1,23.693,5.9,15.3,15.3,0,0,1,29.509,12.4a1.25,1.25,0,0,1-1.128,1.787ZM3.569,14.141a1.235,1.235,0,0,1-.529-.119,1.25,1.25,0,0,1-.6-1.662A14.931,14.931,0,0,1,6.156,7.43,15.583,15.583,0,0,1,8.312,5.875a1.25,1.25,0,0,1,1.276,2.15,13,13,0,0,0-1.8,1.3,12.457,12.457,0,0,0-3.09,4.1A1.25,1.25,0,0,1,3.569,14.141Z"
                          fill="#40d1ce"
                        />
                        <path
                          d="M29,26H17V23H29a1,1,0,0,0,0-2,3,3,0,0,1-3-3,10.013,10.013,0,0,0-9-9.949V7.969A1.987,1.987,0,0,1,19,6h1a1,1,0,0,0,0-2H12a1,1,0,0,0,0,2h1a1.987,1.987,0,0,1,2,1.969v.082A10.013,10.013,0,0,0,6,18a3,3,0,0,1-3,3,1,1,0,0,0,0,2H15v3H3a1,1,0,0,0,0,2H29a1,1,0,0,0,0-2ZM8,18a8,8,0,0,1,16,0,4.98,4.98,0,0,0,1,3H7A4.98,4.98,0,0,0,8,18Z"
                          fill="#7060fe"
                        />
                      </g>
                    </svg>
                    <span>Contact Sales</span>
                  </a>
                  <a href="/platform/DigisquaresPlatform/" className={styles.tcva} aria-current="page">
                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 32 32">
                      <title>Discover</title>
                      <g>
                        <path
                          d="M19,1A11.991,11.991,0,0,0,8.413,18.638L1.525,25.525a3.5,3.5,0,0,0,4.95,4.95l6.887-6.888A12,12,0,1,0,19,1ZM5.061,29.061a1.537,1.537,0,0,1-2.122,0,1.5,1.5,0,0,1,0-2.121l6.593-6.593a12.107,12.107,0,0,0,2.122,2.122ZM19,23A10,10,0,1,1,29,13,10.011,10.011,0,0,1,19,23Z"
                          fill="#7060fe"
                        />
                        <path
                          d="M14.537,9.784l-2.68,2.482a1,1,0,0,0,0,1.468l2.68,2.482a6.569,6.569,0,0,0,8.926,0l2.68-2.482a1,1,0,0,0,0-1.468l-2.68-2.482A6.569,6.569,0,0,0,14.537,9.784ZM19,15a2.157,2.157,0,0,1-2.286-2A2.157,2.157,0,0,1,19,11a2.157,2.157,0,0,1,2.286,2A2.157,2.157,0,0,1,19,15Z"
                          fill="#40d1ce"
                        />
                      </g>
                    </svg>
                    <span>Explore the platform</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tcv;
