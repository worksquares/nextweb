import React from "react";
import styles from "../../styles/career/JobApply.module.css";
import { useState } from "react";
import Head from "next/head";
import Images from "../../comp/base/Images";
import Headseo from "../headseo";

const JobApply = () => {
  const [sample, setSample] = useState(false);

  const ChangeName = () => {
    setSample(true);
  };

  const ExpFormlist = () => {
    return (
      <div className={styles.ExperienceInfoFields}>
        <div className={styles.ExImgInfo}>
          <Images className={styles.BenefitsInfoImg} alt="Icon" layout="intrinsic" width="50%" height="40px" src="/assets/Experience Icon.webp"></Images>
        </div>
        <div className={styles.ExInputFields}>
          <form>
            <div className={styles.InfoFluxFields}>
              <div className={styles.PersonalInfoFields}>
                <label>Title</label>
                <br />
                <input type="text" required />
              </div>
              <div className={styles.PersonalInfoFields}>
                <label>Company</label>
                <br />
                <input type="text" required />
              </div>
            </div>
            <div className={styles.FieldLng}>
              <label>Office location</label>
              <br />
              <input type="text" required />
            </div>
            <div className={styles.FieldLng}>
              <label>Description</label>
              <br />
              <textarea className={styles.CheckboxAlign} />
            </div>
            <div className={styles.InfoFluxFields}>
              <div className={styles.PersonalInfoFields}>
                <label>From</label>
                <br />
                <input type="date" required />
              </div>
              <div className={styles.PersonalInfoFields}>
                <label>To</label>
                <br />
                <input type="date" required />
              </div>
            </div>
            <div className={styles.PersonalInfoFields}>
              <label>
                <input type="checkbox" />I currently work here
              </label>
            </div>
            <div className={styles.CancelOkBtnContainer}>
              <div className={styles.CancelOkBtns}>
                <button className={styles.CancelBtn}>Cancel</button>
                <button className={styles.OkBtn}>save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const EduFormlist = () => {
    return (
      <div className={styles.ExperienceInfoFields}>
        <div className={styles.ExImgInfo}>
          <Images className={styles.BenefitsInfoImg} alt="jnd" src="/assets/.webp" layout="intrinsic" width="40%" height="40px"></Images>
        </div>
        <div className={styles.ExInputFields}>
          <form>
            <div className={styles.FieldLng}>
              <label>Institution</label>
              <br />
              <input type="text" required />
            </div>
            <div className={styles.InfoFluxFields}>
              <div className={styles.PersonalInfoFields}>
                <label>Major</label>
                <br />
                <input type="text" required />
              </div>
              <div className={styles.PersonalInfoFields}>
                <label>Degree</label>
                <br />
                <input type="text" required />
              </div>
            </div>
            <div className={styles.FieldLng}>
              <label>School location</label>
              <br />
              <input type="text" required />
            </div>
            <div className={styles.FieldLng}>
              <label>Description</label>
              <br />
              <textarea className={styles.CheckboxAlign} />
            </div>
            <div className={styles.InfoFluxFields}>
              <div className={styles.PersonalInfoFields}>
                <label>From</label>
                <br />
                <input type="date" required />
              </div>
              <div className={styles.PersonalInfoFields}>
                <label>To</label>
                <br />
                <input type="date" required />
              </div>
            </div>
            <div className={styles.PersonalInfoFields}>
              <label>
                <input type="checkbox" />I currently attend
              </label>
            </div>
            <div className={styles.CancelOkBtnContainer}>
              <div className={styles.CancelOkBtns}>
                <button className={styles.CancelBtn}>Cancel</button>
                <button className={styles.OkBtn}>save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <>
      <Headseo title={`Digisquares | Job Apply`} heading={`JobApply`} description={`Let the company know about your interest working there`} url={`/career/JobApply`} keywords={`JobApply`} />
      
      <div className={styles.JobApplyMainContainer}>
        <div className={styles.JobApplyHeader}>
          <div className={styles.JobApplyLogo}>
            <h2>Digisquares</h2>
          </div>
          <div className={styles.JobApplyInfoHeading}>
            <h3>Dir, Head Of Corporate Strategy (North Asia)</h3>
            <p>Suntec Tower 4 6 Temasek Boulevard Suite 40-01, Singapore, Singapore</p>
          </div>
        </div>
        <div className={styles.EasyApplyContainer}>
          <div className={styles.EasyApplyInfoBox}>
            <h1>Easy Apply</h1>
            <p>Choose an option to autocomplete your application. You can still fill your profile manually.</p>
          </div>
          <div className={styles.DropandLinks}>
            <div className={styles.DropBox}>
              <p>Browse resume or just drop it here</p>
              <p>(Optional)</p>
            </div>
            <div className={styles.LinksBoxes}>
              <p>Please sign in to apply with LinkedIn</p>
              <button className={styles.LinkedInBtn}>Sign in with LinkedIn</button>
              <button className={styles.SmartrProfileBtn}>Apply with SmartrProfile</button>
              <button className={styles.IndeedBtn}>Apply with Indeed</button>
            </div>
          </div>
        </div>
        <div className={styles.PersonalInfoContainer}>
          <div className={styles.PersonalInfoBox}>
            <h3>Personal information</h3>
            <form>
              <div className={styles.PersonalInfoFields}>
                <label>First name</label>
                <br />
                <input type="text" required />
              </div>
              <div className={styles.PersonalInfoFields}>
                <label>Last name</label>
                <br />
                <input type="text" required />
              </div>
              <div className={styles.PersonalInfoFields}>
                <label>Email</label>
                <br />
                <input type="email" required />
              </div>
              <div className={styles.PersonalInfoFields}>
                <label>Confirm your email</label>
                <br />
                <input type="email" required />
              </div>
              <div className={styles.PersonalInfoFields}>
                <label>Place of residence</label>
                <br />
                <input type="email" required />
              </div>
              <div className={styles.PersonalInfoFields}>
                <label>Phone number</label>
                <br />
                <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required />
              </div>
            </form>
          </div>
        </div>
        <div className={styles.ExperienceContainer}>
          <div className={styles.ExperienceHeading}>
            <h3>Experience</h3>
            <button onClick={ChangeName}>+ Add</button>
          </div>
          <ExpFormlist />
          <ExpFormlist />
        </div>
        <div className={styles.ExperienceContainer}>
          <div className={styles.ExperienceHeading}>
            <h3>Education</h3>
            <button onClick={ChangeName}>+ Add</button>
          </div>
          <EduFormlist />
          <EduFormlist />
        </div>
        <div className={styles.OnTheWebContainer}>
          <h3>On the web</h3>
          <form>
            <div className={styles.OnTheWebFields}>
              <div className={styles.OnTheWebInfoFields}>
                <label>LinkedIn</label>
                <br />
                <input type="text" required />
              </div>
              <div className={styles.OnTheWebInfoFields}>
                <label>Facebook</label>
                <br />
                <input type="text" required />
              </div>
            </div>
            <div className={styles.OnTheWebFields}>
              <div className={styles.OnTheWebInfoFields}>
                <label>Twitter</label>
                <br />
                <input type="text" required />
              </div>
              <div className={styles.OnTheWebInfoFields}>
                <label>Website</label>
                <br />
                <input type="text" required />
              </div>
            </div>
          </form>
        </div>
        <div className={styles.ResumeMainContainer}>
          <div className={styles.ResumeContainer}>
            <h3>Resume</h3>
            <div className={styles.ResumeDrop}>
              <h4>Browse resume or just drop it here</h4>
            </div>
          </div>
        </div>
        <div className={styles.HiringManagerMainContainer}>
          <div className={styles.HiringManagerContainer}>
            <h3>Message to Hiring Manager</h3>
            <p>Let the company know about your interest working there</p>
            <textarea className={styles.HMCheckboxAlign} />
          </div>
        </div>
        <div className={styles.NextBtnContainer}>
          <div className={styles.NextBtn}>
            <button>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobApply;
