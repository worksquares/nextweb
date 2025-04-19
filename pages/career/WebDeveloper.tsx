import React from "react";
import Styles from "../../styles/career/JobSelect.module.css";
import BaseLayout from "../../comp/BaseLayout";

const WebDeveloper = () => {
  return (
    <div>
      <BaseLayout>
        <div className={Styles.JobMainContainer}>
          <div className={Styles.JobMainInfo}>
            <h1>Web Developement Internship</h1>
            <p>
              <span>Location:</span> Coimbatore, India
            </p>
            <p>
              <span>Job Id:</span> 3445-TT22_390
            </p>
            <p>
              <span>No.of Openings:</span> 4
            </p>
          </div>
          <div className={Styles.JobInfo}>
            <p>
              The Web Developer Intern role supports and assists the web
              development team in coding, modifying and delivering technically
              feature rich websites web applications, portals and platforms with
              focus on robustness, security, technical superiority and
              innovative features in line with client expectations. We’re
              looking for a skilled web developer Intern to join our team of
              innovative designers who are consistently raising the bar on
              creativity and user experiences. The ideal candidate is a talented
              artist with extensive technical expertise who can work alongside a
              team and independently in the creation, maintenance, and updates
              of websites for clients in a variety of industries. Proficiency in
              JavaScript, HTML, CSS and other web services and program
              applications is essential to succeeding in this role. The web
              developer will have an immediate effect on our brand and that of
              our client&apos;s , as well as an ongoing impact in solidifying
              our industry-wide reputation for stellar design.
            </p>
          </div>
          <div className={Styles.JobInfo}>
            <h4>Desired Skills:</h4>
            <ul>
              <li>
                The roles are fungible to accommodate front end or server side
                development. Skills:- HTML/CSS, Javascript, Reactjs and Nodejs.
              </li>
              <li>
                Basic principles of clear navigation and interactive experiences
                is an essential.
              </li>
              <li>
                Collaborates with web designers to match intent of visual
                design.
              </li>
              <li>Determining the structure and design of web pages.</li>
              <li>
                Experience planning and developing websites across multiple
                products and organizations.
              </li>
              <li>
                Directly work with elements of design, development, and
                maintenance of the website.
              </li>
            </ul>
          </div>
          <div className={Styles.JobInfo}>
            <h4>Job Responsibilities and Expectations:</h4>
            <ul>
              <li>
                The UI/UX intern should actively own and contribute to product
                brainstorming, user research, interaction design, and visual
                design sessions.
              </li>
              <li>
                The Creative Designer is responsible for creating web and mobile
                designs for e-Learning websites and social media platforms.
              </li>
              <li>
                Designing the best possible user experience and creating a
                detailed design specification for target UI technologies.
              </li>
              <li>
                Passion to solve visual design problems and the ability to show
                different solutions.
              </li>
              <li>
                Must have good written and oral communication skills, be a fast
                learner and have the ability to adapt quickly to a fast-paced
                development environment.
              </li>
            </ul>
          </div>
          <div className={Styles.JobInfo}>
            {/* <p>We “Ask Why” a lot. It helps us connect our individual work to the bigger picture and often uncovers a better, more agile way.</p> */}
            <p>
              If you are willing to join with us send your resume to{" "}
              <a href="">hr@digisquares.com</a>
            </p>
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};

export default WebDeveloper;
