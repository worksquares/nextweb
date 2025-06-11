import Link from "next/link";
import styles from "../../styles/career/SearchJobs.module.css";

import Images from "../../comp/base/Images";
import Headseo from "../headseo";

const SearchJobsCareer = () => {
  return (
    <>
      <Headseo
        title={`Digisquares | Search Job`}
        heading={`SearchJobs`}
        description={`Learn here. Grow here. Make a difference here`}
        url={`/career/SearchJobsCareer`}
        img={`/assets/gallery1.webp`}
        keywords={`Job Search`}
      />

      <div className={styles.SearchJobsMainContainer}>
        <div className={styles.TopContainer}>
          <div className={styles.TopContainerInfo}>
            <h2>Digisquares Careers</h2>
            <p>Change the way the world works. With us.</p>
          </div>
        </div>
        <div className={styles.SearchBar}>
          <Images src="/assets/search-icon.webp" width="30%" height="30px" alt="HeaderJob" priority={true} />
          <input placeholder="Search Job openings" className={styles.InputBox} />
        </div>

        <div className={styles.VideoInfoContainer}>
          <div className={styles.VideoInfo}>
            <p>Learn here. Grow here. Make a difference here.</p>
            <p>
              At Digisquares, our cloud‑based platform and solutions deliver digital workflows that create great experiences and unlock productivity for employees and enterprises. We’re growing fast,
              innovating even faster, and making an impact on our customers’ and employees’ lives in important ways. With ~6,900 customers, we serve ~80% of the Fortune 500, and we are #1 on FORTUNE®
              Future 50 2020. This is the future of work.
            </p>
            <p>Help us build on our incredible momentum, our diverse, engaged workforce, and our purpose to make the world of work, work better.</p>
            <p className={styles.smallInfo}>
              From FORTUNE. ©2021 FORTUNE Media IP Limited. All rights reserved. Used under license. Future 50 is a trademark of FORTUNE Media IP Limited and is used under license. FORTUNE and FORTUNE
              Media IP Limited are not affiliated with, and do not endorse products or services of, Digisquares.
            </p>
          </div>
          <div className={styles.Video}>
            <Images src="/assets/gallery1.webp" width="1000" height="550" alt="DescriptionImage" priority={true} />
          </div>
        </div>

        <div className={styles.JobsContainer}>
          <div className={styles.JobsHeading}>
            <h2>Jobs at Digisquares</h2>
            <span>
              <label>
                <input type="checkbox" />
                Employees can work remotely
              </label>
            </span>
          </div>
          <div className={styles.DepartmentLink}>
            <p>
              Browse by: <span className={styles.DepartmentHighlight}>Department</span>
            </p>
          </div>
          <div className={styles.SearchJobContainer}>
            <p>Business Strategy . 25 jobs</p>
            <div className={styles.JobsLinksContainer}>
              <div className={styles.LinksBox1}>
                <div className={styles.Links}>
                  <Link href="/Careers/JobSelection">
                    Dir, Head Of Corporate Strategy (North Asia)
                  </Link>
                  <p>Singapore, Singapore</p>
                </div>
                <div className={styles.Links}>
                  <Link href="/Careers/JobSelection">
                    Senior Manager, Customer Contract Enablement
                  </Link>
                  <p>Dublin, Ireland</p>
                </div>
                <div className={styles.Links}>
                  <Link href="/Careers/JobSelection">
                    Senior Partner Maturity Specialist
                  </Link>
                  <p>Hyderabad, India</p>
                </div>
                <div className={styles.Links}>
                  <Link href="/Careers/JobSelection">
                    Senior Manager, Business Strategy & Operations - SECURITY/ITOM
                  </Link>
                  <p>San Francisco, California</p>
                </div>
                <div className={styles.Links}>
                  <Link href="/Careers/JobSelection">
                    Sr Associate, Corporate Development
                  </Link>
                  <p>Santa Clara, California</p>
                </div>
              </div>
              <div className={styles.LinksBox2}>
                <div className={styles.Links}>
                  <Link href="/Careers/JobSelection">
                    Manager, Corporate Development
                  </Link>
                  <p>Santa Clara, California</p>
                </div>
                <div className={styles.Links}>
                  <Link href="/Careers/JobSelection">
                    Senior Business Analyst – GTM Programs & Excellence
                  </Link>
                  <p>Dublin, Ireland</p>
                </div>
                <div className={styles.Links}>
                  <Link href="/Careers/JobSelection">
                    Director, Product Platform Strategy & Business Operations
                  </Link>
                  <p>Santa Clara, California</p>
                </div>
                <div className={styles.Links}>
                  <Link href="/Careers/JobSelection">
                    Senior Business Analyst
                  </Link>
                  <p>Santa Clara, California</p>
                </div>
                <div className={styles.Links}>
                  <Link href="#"
                    className={styles.showMoreJobs}>Show more jobs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchJobsCareer;
