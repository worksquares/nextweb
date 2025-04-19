import React from "react";
import Styles from "../../styles/career/JobSelect.module.css";
import BaseLayout from "../../comp/BaseLayout";

const JobSelect = () => {
  return (
    <div>
      <BaseLayout>
        <div className={Styles.JobMainContainer}>
          <div className={Styles.JobMainInfo}>
            <h1>Front End Developer</h1>
            <p>
              <span>Location:</span> Coimbatore, India
            </p>
            <p>
              <span>Job Id:</span> 3445-RT22_LIF_127
            </p>
            <p>
              <span>No.of Openings:</span> 3
            </p>
          </div>
          <div className={Styles.JobInfo}>
            <p>
              We are looking for a skilled React.js developer to join our
              front-end development team. In this role, you will be responsible
              for developing and implementing user interface components using
              React.js concepts and workflows such as Redux, Flux, and Webpack.
              You will also be responsible for profiling and improving front-end
              performance and documenting our front-end codebase. To ensure
              success as a React.js developer, you should have in-depth
              knowledge of JavaScript and React concepts, excellent front-end
              coding skills, and a good understanding of progressive web
              applications. Ultimately, as a top-class React.js developer, you
              should be able to design and build modern user interface
              components to enhance application performance.
            </p>
            <p></p>
          </div>
          <div className={Styles.JobInfo}>
            <h4>Desired Skills & Experience:</h4>
            <ul>
              <li>
                0 to 2 years of front-end software development experience in
                React or similar UI frameworks, including
              </li>
              <li>
                Implementing responsive designs (including grids), Component
                design, ReactJS, HTML, CSS, and other UI related technologies
              </li>
              <li>
                Strong understanding of responsive design techniques and
                principles
              </li>
              <li>
                Good understanding of functional programming using JavaScript
              </li>
              <li>
                Developing and implementing front-end architecture to support
                user interface concepts
              </li>
              <li>Think logical while developing any models</li>
              <li>
                Strong verbal and written communication skills and the ability
                to work in a fast-paced environment.
              </li>
            </ul>
          </div>
          <div className={Styles.JobInfo}>
            <h4>Job Responsibilities and Expectations:</h4>
            <ul>
              <li>
                Work with Architects to design efficient and reusable front-end
                systems that drive complex web applications
              </li>
              <li>
                Maintain quality and ensure the responsiveness of applications
              </li>
              <li>
                Create front end of interactive websites incorporating HTML5,
                CSS3, JavaScript as well as other techniques
              </li>
              <li>
                Must have good interpersonal and communication skills & should
                be adaptable
              </li>
              <li>
                Understanding of web usability issues, accessibility and
                information architecture
              </li>
              <li>
                Integrate data from various back-end services and databases
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

export default JobSelect;
