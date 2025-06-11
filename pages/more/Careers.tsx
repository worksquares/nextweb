import Link from "next/link";
import AnotherImgCardGrid from "../../comp/AnotherImg";
import { AnotherContainProps } from "../../comp/base/AnotherImgCard";
import Images from "../../comp/base/Images";
import { TitleHoverProps } from "../../comp/base/TitleHover";
import BaseLayout from "../../comp/BaseLayout";
import Screen from "../../comp/Screen";
import TitleHoverGrid from "../../comp/TitleHoverGrid";
import styles from "../../styles/more/Career.module.css";
import Headseo from "../headseo";

const Careers = () => {
  let TitleHoverGridData: TitleHoverProps[] = [
    {
      icon: "/assets/ExploreMoreconList1.webp",
      titlelink: "Diversity, Inclusion, and Belonging",
      link: "/Diversity",
    },
    {
      icon: "/assets/ExploreMoreconList2.webp",
      titlelink: "Global Impact",
      link: "/GlobalImpact",
    },
    {
      icon: "/assets/ExploreMoreconList3.webp",
      titlelink: "Code of Ethics",
      link: "/CodeofEthics",
    },
  ];

  let AnotherimgListData: AnotherContainProps[] = [
    {
      title: "Stay connected",
      paragraph:
        "Whether you want to learn more about Digisquares, are waiting for the right position to open up, or simply want to receive company updates, take the first step to connect by completing our simple sign‑up form.",
      // btn: "Join Our Talent Community",
      btnLink: "/career/TalentCommunity",
      // link: "#",
      img1700: "/assets/StayConnected.webp",
      img1024: "/assets/StayConnected.webp",
      img768: "/assets/StayConnected.webp",
      img320: "/assets/StayConnected.webp",
      dir: "left",
    },
  ];

  return (
    <>
      <Headseo
        title={`Digisquares | Career`}
        heading={`Careers`}
        description={`We make the world of work, work better for people`}
        url={`/more/Careers`}
        img={`/assets/StayConnected.webp`}
        keywords={`Career, Talent Community, Employee roles, Job page`}
      />
      <BaseLayout>
        <div className={styles.MainContainer}>
          <div
            style={{
              backgroundColor: "white",
              boxShadow: "0 13px 13px -16px var(--grey)",
            }}
          >
            <Screen>
              <div className={styles.CareerNavbarContainer}>
                {/* <h2>Digisquares Platform</h2> */}
                <nav className={styles.CareerNavbarHubNav}>
                  <ul className={styles.CareerNavbarLinks}>
                    <li className={styles.CareerNavbarli}>
                      <a href="#OurValuesCareer">Our Values</a>
                    </li>
                    <li className={styles.CareerNavbarli}>
                      <a href="#EmployeeStories">Employee Stories</a>
                    </li>
                    <li className={styles.CareerNavbarli}>
                      <a href="#Benefits">Benefits</a>
                    </li>
                    <li className={styles.CareerNavbarli}>
                      <a href="#FeaturedRoles">Featured Roles</a>
                    </li>
                    <li className={styles.CareerNavbarli}>
                      <a href="#TalentCommunity">Talent Community</a>
                    </li>
                  </ul>
                </nav>
                <div className={styles.NavbarSideHeading}>
                  <Link href="/career/SearchJobsCareer">
                    <a>Search Jobs</a>
                  </Link>
                </div>
              </div>
            </Screen>
          </div>
          <Screen>
            <span id="OurValuesCareer">
              <div className={styles.OurValuesCareerContainer}>
                <div className={styles.OurValuesCareerImgContainer}>
                  <Images
                    className={styles.OVCImg}
                    src="/assets/CareersOurValuesImg.webp"
                    layout="intrinsic"
                    width="1500"
                    height="1300"
                    alt="CareerheaderImage"
                  />
                </div>
                <div className={styles.OurValuesCareerInfoContainer}>
                  <div className={styles.InfoContainerHeading}>
                    <h1>We make the world of work, work better for people</h1>
                    <p>
                      Making work better for our customers starts with our core
                      values. Together, they guide our people to do the right
                      thing no matter the circumstances.
                    </p>
                    <ul>
                      <li>Win as a team</li>
                      <li>Innovate and execute</li>
                      <li>Stay hungry and humble</li>
                      <li>Deliver customer success</li>
                      <li>Embrace diversity, create belonging</li>
                      <li>Enjoy the journey</li>
                    </ul>
                    {/* <button>Hear Our Execs</button> */}
                  </div>
                </div>
              </div>
            </span>
          </Screen>
          <Screen>
            <span id="EmployeeStories">
              <div className={styles.EmployeeStoriesMainContainer}>

                <div className={styles.EmployeeStoriesSecondContainer}>
                  <div className={styles.SecondContainerInfo}>
                    <h3 className={styles.SecondContainerInfoHeading}>
                      Featured Teams
                    </h3>
                    <hr className={styles.EShrLine} />
                    <h2>
                      We&lsquo;re growing fast and looking for motivators,
                      problem solvers, original thinkers whatever inspires you,
                      join us for a thriving career
                    </h2>
                  </div>
                  <div className={styles.ImageHoverContainer}>
                    <div className={styles.ImageHoverCards}>
                      <div className={styles.ImageBox}>
                        <Images
                          className={styles.ImageHoverImg}
                          src="/assets/Emp1.webp"
                          layout="responsive"
                          width="100"
                          height="100"
                          alt="EmployeeImage"
                        />
                        <p
                          className={styles.LinkAnimate}
                          style={{ margin: "0px", cursor: "auto" }}
                        >
                          Engineering
                        </p>
                      </div>
                    </div>
                    <div className={styles.ImageHoverCards}>
                      <div className={styles.ImageBox}>
                        <Images
                          className={styles.ImageHoverImg}
                          src="/assets/Emp2.webp"
                          layout="responsive"
                          width="100"
                          height="100"
                          alt="EmployeeImage"
                        />
                        <p
                          className={styles.LinkAnimate}
                          style={{ margin: "0px", cursor: "auto" }}
                        >
                          User Experience
                        </p>
                      </div>
                    </div>
                    <div className={styles.ImageHoverCards}>
                      <div className={styles.ImageBox}>
                        <Images
                          className={styles.ImageHoverImg}
                          src="/assets/Emp5.webp"
                          layout="responsive"
                          width="100"
                          height="100"
                          alt="EmployeeImage"
                        />
                        <p
                          className={styles.LinkAnimate}
                          style={{ margin: "0px", cursor: "auto" }}
                        >
                          Sales
                        </p>
                      </div>
                    </div>
                    <div className={styles.ImageHoverCards}>
                      <div className={styles.ImageBox}>
                        <Images
                          className={styles.ImageHoverImg}
                          src="/assets/Emp3.webp"
                          layout="responsive"
                          width="100"
                          height="100"
                          alt="EmployeeImage"
                        />
                        <p
                          className={styles.LinkAnimate}
                          style={{ margin: "0px", cursor: "auto" }}
                        >
                          Digital Sales
                        </p>
                      </div>
                    </div>
                    <div className={styles.ImageHoverCards}>
                      <div className={styles.ImageBox}>
                        <Images
                          className={styles.ImageHoverImg}
                          src="/assets/Emp6.webp"
                          layout="responsive"
                          width="100"
                          height="100"
                          alt="EmployeeImage"
                        />
                        <p
                          className={styles.LinkAnimate}
                          style={{ margin: "0px", cursor: "auto" }}
                        >
                          Early Careers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </Screen>
          <Screen>
            <span id="Benefits">
              <div className={styles.BenefitsMainContainer}>
                <div className={styles.BenefitsContainerInfo}>
                  <h3>BENEFITS</h3>
                  <h2>People-centric to the core</h2>
                  <p>
                    We make work better for people including our own. From work
                    environments that help us do our best work, to benefits and
                    a culture that encourage employees to stay healthy, happy,
                    engaged, and growing, we keep our people at the center of
                    everything we do.
                  </p>
                </div>
                <div className={styles.BenefitsIconListContainer}>
                  <div className={styles.IconListBoxes}>
                    <div className={styles.BenefitsImg}>
                      <Images
                        className={styles.BenefitsInfoImg}
                        src="/assets/benefitsIconList1.webp"
                        layout="intrinsic"
                        width="50"
                        height="50"
                        alt="Icon"
                      />
                    </div>
                    <div className={styles.BenefitsIconInfo}>
                      <p>Generous family leave</p>
                    </div>
                  </div>
                  <div className={styles.IconListBoxes}>
                    <div className={styles.BenefitsImg}>
                      <Images
                        className={styles.BenefitsInfoImg}
                        src="/assets/benefitsIconList2.webp"
                        layout="intrinsic"
                        width="50"
                        height="50"
                        alt="Icon"
                      />
                    </div>
                    <div className={styles.BenefitsIconInfo}>
                      <p>Flexible PTO</p>
                    </div>
                  </div>
                  <div className={styles.IconListBoxes}>
                    <div className={styles.BenefitsImg}>
                      <Images
                        className={styles.BenefitsInfoImg}
                        src="/assets/benefitsIconList3.webp"
                        layout="intrinsic"
                        width="50"
                        height="50"
                        alt="Icon"
                      />
                    </div>
                    <div className={styles.BenefitsIconInfo}>
                      <p>Matched donations</p>
                    </div>
                  </div>
                  <div className={styles.IconListBoxes}>
                    <div className={styles.BenefitsImg}>
                      <Images
                        className={styles.BenefitsInfoImg}
                        src="/assets/benefitsIconList4.webp"
                        layout="intrinsic"
                        width="50"
                        height="50"
                        alt="Icon"
                      />
                    </div>
                    <div className={styles.BenefitsIconInfo}>
                      <p>401(k) matching</p>
                    </div>
                  </div>
                  <div className={styles.IconListBoxes}>
                    <div className={styles.BenefitsImg}>
                      <Images
                        className={styles.BenefitsInfoImg}
                        src="/assets/benefitsIconList5.webp"
                        layout="intrinsic"
                        width="50"
                        height="50"
                        alt="Icon"
                      />
                    </div>
                    <div className={styles.BenefitsIconInfo}>
                      <p>Annual learning stipends</p>
                    </div>
                  </div>
                  <div className={styles.IconListBoxes}>
                    <div className={styles.BenefitsImg}>
                      <Images
                        className={styles.BenefitsInfoImg}
                        src="/assets/benefitsIconList6.webp"
                        layout="intrinsic"
                        width="50"
                        height="50"
                        alt="Icon"
                      />
                    </div>
                    <div className={styles.BenefitsIconInfo}>
                      <p>Paid volunteer time</p>
                    </div>
                  </div>
                </div>
              </div>
            </span>
          </Screen>
          <Screen>
            <span id="FeaturedRoles">
              <div className={styles.FeaturedRolesMainContainer}>
                {/* <div className={styles.FeaturedRolesInfoContainer}>
              <div className={styles.FeaturedRolesHeadings}>
                <h4>SEARCH JOBS</h4>
                <h2>Apply, interview, and start working digitally</h2>
                <p>We remain committed to our purpose and to growing our team with digital hiring.</p>
              </div>
            </div>
            <div className={styles.FeaturedRolesSearchContainer}>
              <form>
                <input type="text" placeholder="Enter role or Keyword" />
                <select name="language" id="language" className={styles.FeaturedRoleSelect} defaultValue="Addison, Texas, United States">
                  <option value="select location" selected className={styles.SelectOptionLabel}>
                    Location
                  </option>
                  <option value="Addison, Texas, United States">Addison, Texas, United States</option>
                  <option value="Amsterdam, Netherlands">Amsterdam, Netherlands</option>
                  <option value="Atlanta, GEORGIA, United States">Atlanta, GEORGIA, United States</option>
                  <option value="Austin, Texas, United States">Austin, Texas, United States</option>
                  <option value="waltham, MASS, United States">waltham, MASS, United States</option>
                </select>
                <button>Search</button>
              </form>
            </div> */}
                <div className={styles.FeaturedRolesLinkContainer}>
                  <h4>FEATURED ROLES</h4>
                  <div className={styles.LinkContainer}>
                    <Link href="/career/JuniorDeveloper/">
                      Junior Software Developer
                    </Link>
                    <Link href="/career/WebDeveloper/">
                      Web Development Internship
                    </Link>
                    <Link href="/career/JobSelect/">
                      Front End Developer
                    </Link>
                    <Link href="/career/JobSelect/">
                      Content Creator
                    </Link>
                    <Link href="/career/JobSelect/">
                      Testing
                    </Link>
                    <Link href="/career/JobSelect/">
                      Back End Developer
                    </Link>
                    <Link href="/career/JobSelect/">
                      IT Services
                    </Link>
                  </div>
                </div>
              </div>
            </span>
          </Screen>

          <span id="TalentCommunity">
            <div className={styles.TalentCommunityMainContainer}>
              <div className={styles.TalentCommunityStayConnected}>
                <Screen>
                  <AnotherImgCardGrid
                    AnotherCardPropsList={AnotherimgListData}
                  />
                </Screen>
              </div>
              <Screen>
                <div className={styles.TalentCommunityExploreMore}>
                  <h2>Explore more</h2>
                  <div className={styles.ExploreMoreIconsContainer}>
                    <TitleHoverGrid TitleHoverPropsList={TitleHoverGridData} />
                  </div>
                </div>
                <div className={styles.ExploreMorePara}>
                  <p>
                    Digisquares is an Equal Employment Opportunity Employer. All
                    qualified applicants will receive consideration for
                    employment without regard to race, color, creed, religion,
                    sex, sexual orientation, national origin or nationality,
                    ancestry, age, disability, gender identity or expression,
                    marital status, veteran status or any other category
                    protected by law.
                  </p>
                </div>
              </Screen>
            </div>
          </span>

        </div>
      </BaseLayout>
    </>
  );
};

export default Careers;
