import React from "react";
import Styles from "../../styles/career/JobSelect.module.css";
import BaseLayout from "../../comp/BaseLayout";

const JuniorDeveloper = () => {
  return (
    <div>
      <BaseLayout>
        <div className={Styles.JobMainContainer}>
          <div className={Styles.JobMainInfo}>
            <h1>Junior Software Developer</h1>
            <p>
              <span>Location:</span> Coimbatore, India
            </p>
            <p>
              <span>Job Id:</span> 3445-T67_320
            </p>
            <p>
              <span>No.of Openings:</span> 3
            </p>
          </div>
          <div className={Styles.JobInfo}>
            <p>
              We are looking for a passionate, hard-working, and talented
              Software Development Engineer who can build innovative & mission
              critical system software applications & tools. You will have an
              enormous opportunity to make a large impact on the design,
              architecture, and development of consumer products. You will be
              responsible for delivery and support of large-scale, multi-tiered,
              distributed software applications and tools. Ability to design and
              code right solutions starting with broadly defined problems drive
              best practices and engineering excellence. Work with other team
              members to develop the architecture and design of new and current
              systems.
            </p>
          </div>
          <div className={Styles.JobInfo}>
            <h4>Desired Skills:</h4>
            <ul>
              <li>Interest and ability to work across the stack</li>
              <li>
                Willingness to learn new frameworks and languages where required
              </li>
              <li>
                Good programming skills (HTML5, CSS, JavaScript, Reactjs and
                Nodejs) & Interest to take on complex problems and proactively
                finding out ways to solve them.
              </li>
              <li>Cross-browser development, Building user interfaces</li>
              <li>Approaching problems and creating solutions</li>
              <li>Knowledge of app development</li>
            </ul>
          </div>
          <div className={Styles.JobInfo}>
            <h4>Job Responsibilities and Expectations:</h4>
            <ul>
              <li>
                Collaborate with other developers and help in development of
                current system & adding new features to the platform.
              </li>
              <li>Proactively learning about new technologies.</li>
              <li>
                Strong understanding of one or more of these domains - frontend
                web development, web application / backend development, web
                application.
              </li>
              <li>
                Must have good written and oral communication skills, be a fast
                learner and have the ability to adapt quickly to a fast-paced
                development environment.
              </li>
              <li>
                Flexible working hours and deadlines to encourage personal
                projects and contribution to the open source community.
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

export default JuniorDeveloper;
