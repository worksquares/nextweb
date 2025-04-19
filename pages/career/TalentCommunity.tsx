import Head from "next/head";
import React, { useState, useEffect } from "react";
import style from "../../styles/career/TalentCommunity.module.css";
import Image from "next/image";
import Headseo from "../headseo";

interface Iform {
  FirstName: string;
  LastName: string;
  Email: string;
  Location: number | string;
}

interface IJobform {
  JobLevel: string;
}

const TalentCommunity = () => {
  const [showInput, setShowInput] = useState(true);
  const [form, setForm] = useState<any>({
    FirstName: "",
    LastName: "",
    Email: "",
    Location: "",
  });

  const [validation, setValidation] = useState({
    fName: "",
    lName: "",
    eMail: "",
    location: "",
  });

  const [jobselect, setJobselect] = useState<any>({
    JobLevel: "",
  });

  const handleChecked = () => {
    setShowInput(true);
  };

  const handleChange = (event) => {
    event.preventDefault();
    // setForm({
    //   ...form,
    //   [event.target.name]: event.target.value,
    // });

    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(form);
  //   setForm({
  //     FirstName: "",
  //     LastName: "",
  //     Email: "",
  //     Location: "",
  //   });
  //   setShowInput(false);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSelect = (e) => {
    setJobselect({ JobLevel: e.target.value });
  };

  // const checkValidation = () => {
  //   let errors = validation;

  //   //first Name validation
  //   if (!form.FirstName.trim()) {
  //     errors.fName = "First name is required";
  //   } else {
  //     errors.fName = "";
  //   }
  //   //last Name validation
  //   if (!form.LastName.trim()) {
  //     errors.lName = "Last name is required";
  //   } else {
  //     errors.lName = "";
  //   }

  //   // email validation
  //   const emailCond = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
  //   if (!form.Email.trim()) {
  //     errors.eMail = "Email is required";
  //   } else if (!form.Email.match(emailCond)) {
  //     errors.eMail = "Please ingress a valid email address";
  //   } else {
  //     errors.eMail = "";
  //   }

  //   setValidation(errors);
  // };

  // useEffect(() => {
  //   checkValidation();
  // }, [form]);

  return (
    <div className={style.MainContainer}>
      <Headseo
        title={`Digisquares | Form Ebook`}
        heading={`Form Ebook`}
        description={`The Basics of Enterprise Service Management`}
        url={`/book/FormEbook/`}
        keywords={`Talent Community, Employee Role`}
      />

      <div className={style.TalentImg}>
        <Image src="/assets/Logo_notag (1).webp" width="240" height="32" alt="Picture of the author" layout="intrinsic" unoptimized={true} />
      </div>
      <div className={style.JoinTalent}>
        <h1>Join Our Talent Community!</h1>
      </div>

      {/* ------------------------------------ */}

      <div className={style.NextIcons}>
        <div className={style.IconAlign}>
          {showInput ? (
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#0064b3" stroke="none">
                <path
                  d="M2245 4944 c-1048 -142 -1868 -932 -2056 -1979 -21 -116 -24 -160
              -24 -405 0 -245 3 -289 24 -405 182 -1014 952 -1784 1966 -1966 116 -21 160
              -24 405 -24 245 0 289 3 405 24 1014 182 1784 952 1966 1966 21 116 24 160 24
              405 0 245 -3 289 -24 405 -188 1050 -1014 1842 -2064 1980 -146 19 -481 19
              -622 -1z m510 -464 c508 -57 959 -297 1283 -685 278 -332 432 -730 449 -1165
              18 -470 -143 -940 -449 -1305 -577 -689 -1548 -891 -2341 -488 -792 403 -1205
              1264 -1022 2129 121 576 518 1076 1057 1333 220 106 385 151 663 184 67 8 275
              6 360 -3z"
                />
                <path
                  d="M1995 3546 c-60 -28 -87 -56 -114 -116 -52 -114 -1 -254 112 -309 38
              -18 62 -21 185 -21 l142 0 0 -668 c0 -723 0 -726 54 -796 37 -49 117 -86 186
              -86 107 0 195 65 226 166 21 70 21 1618 0 1688 -20 66 -57 110 -118 140 l-52
              26 -285 0 c-280 0 -287 -1 -336 -24z"
                />
              </g>
            </svg>
          ) : (
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#0064b3" stroke="none">
                <path
                  d="M2265 5049 c-753 -90 -1432 -523 -1835 -1169 -84 -135 -194 -367
                -243 -517 -92 -278 -127 -501 -127 -803 0 -402 76 -739 244 -1085 132 -272
                276 -476 486 -685 323 -324 728 -554 1162 -660 233 -57 309 -65 613 -65 248 0
                295 3 408 23 270 49 501 126 732 246 248 128 431 261 625 456 204 203 335 385
                471 655 128 254 206 510 244 798 20 156 20 478 0 634 -73 556 -320 1058 -715
                1453 -209 210 -412 354 -685 486 -223 108 -411 168 -672 215 -95 17 -167 22
                -373 25 -140 1 -291 -2 -335 -7z m815 -2489 l0 -1240 -335 0 -335 0 0 965 0
                965 -185 0 -185 0 0 275 0 275 520 0 520 0 0 -1240z"
                />
              </g>
            </svg>
          )}

          <p className={style.IconTitle}>profile </p>
        </div>

        {/* <div className={showInput ? {style.line} : {style.line2}}></div> */}
        <div className={style.line} style={{ borderTop: showInput ? "1px solid #606060" : "1px solid #0064b3" }}></div>

        <div className={style.IconAlign}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#606060" stroke="none">
              <path
                d="M2245 4944 c-1048 -142 -1868 -932 -2056 -1979 -21 -116 -24 -160
                -24 -405 0 -245 3 -289 24 -405 182 -1014 952 -1784 1966 -1966 116 -21 160
                -24 405 -24 245 0 289 3 405 24 1014 182 1784 952 1966 1966 21 116 24 160 24
                405 0 245 -3 289 -24 405 -188 1050 -1014 1842 -2064 1980 -146 19 -481 19
                -622 -1z m510 -464 c508 -57 959 -297 1283 -685 278 -332 432 -730 449 -1165
                18 -470 -143 -940 -449 -1305 -577 -689 -1548 -891 -2341 -488 -792 403 -1205
                1264 -1022 2129 121 576 518 1076 1057 1333 220 106 385 151 663 184 67 8 275
                6 360 -3z"
              />
              <path
                d="M2432 3551 c-128 -32 -216 -83 -313 -180 -135 -136 -200 -283 -202
                -461 -1 -100 18 -147 83 -202 92 -79 229 -75 313 9 48 47 66 88 76 173 11 86
                42 138 103 174 94 55 174 39 216 -44 27 -53 28 -85 4 -130 -9 -19 -181 -247
                -380 -507 -200 -260 -369 -488 -377 -507 -22 -52 -19 -141 6 -193 25 -53 86
                -106 138 -121 26 -8 174 -12 483 -12 l444 0 52 26 c163 81 171 319 15 411 -47
                27 -52 28 -241 33 l-193 5 226 294 c127 165 238 321 255 356 84 176 79 404
                -12 578 -42 80 -165 205 -238 242 -103 52 -159 67 -275 71 -85 3 -127 0 -183
                -15z"
              />
            </g>
          </svg>
          <p className={style.IconTitle} style={{ color: "#606060" }}>
            Background
          </p>
        </div>
      </div>

      {/* --------1st phase-------- */}

      {showInput ? (
        <>
          <div className={style.JoinInfo}>
            <p>
              ascasDigisquares is growing! If you would like to join our Talent Community, please complete the form below. By joining, this will let our Recruiters know that your&apos;e interested in
              a specific area of interest and location.
            </p>
          </div>
          <div className={style.JoinInfoBox}>
            <form onSubmit={handleSubmit}>
              <div className={style.InputBoxContainer}>
                <div className={style.FloatingBox}>
                  <span className={style.floatinglabel}>
                    First Name<span style={{ color: "red" }}>*</span>
                  </span>
                  <input type="text" name="FirstName" value={form.FirstName} className={style.RightInfoInput} onChange={(e) => handleChange(e)} required />
                  {validation.fName && <p style={{ color: "red" }}>{validation.fName}</p>}
                </div>
                <div className={style.FloatingBox}>
                  <span className={style.floatinglabel}>
                    Last Name<span style={{ color: "red" }}>*</span>
                  </span>
                  <input type="text" name="LastName" value={form.LastName} className={style.RightInfoInput} onChange={(e) => handleChange(e)} required />
                  {validation.lName && <p style={{ color: "red" }}>{validation.lName}</p>}
                </div>
                <div className={style.FloatingBox}>
                  <span className={style.floatinglabel}>
                    Email<span style={{ color: "red" }}>*</span>
                  </span>
                  <input type="email" name="Email" value={form.Email} className={style.RightInfoInput} onChange={(e) => handleChange(e)} required />
                  {validation.eMail && <p style={{ color: "red" }}>{validation.eMail}</p>}
                </div>
                <div className={style.FloatingBox}>
                  <span className={style.floatinglabel}>
                    Location<span style={{ color: "red" }}>*</span>
                  </span>
                  <input type="text" name="Location" value={form.Location} className={style.RightInfoInput} onChange={(e) => handleChange(e)} required />
                </div>
                <div className={style.CheckPrivacy}>
                  <p>
                    Please review the Digisquares <a href="">Privacy Policy.</a>
                  </p>
                </div>
                <div className={style.CheckboxInfo}>
                  <input type="checkbox" id="checkinfo" required />
                  <label htmlFor="checkinfo">
                    By checking this box, you will declare that you read and understand the privacy policy of Digisquares.<span style={{ color: "red" }}>*</span>
                  </label>
                </div>
                <div className={style.FormButton}>
                  <button>NEXT</button>
                </div>
              </div>
            </form>
          </div>
        </>
      ) : (
        <>
          {/* ----1st phase ends */}
          <div className={style.JoinInfoBox}>
            <form onSubmit={handleSubmit}>
              <div className={style.InputBoxContainer}>
                <span className={style.SelectInfo}>
                  Please select your general area of interest: <span style={{ color: "red" }}>*</span>
                </span>
                <select name="Business Strategy" id="cars" className={style.SelectInterest} onChange={(e) => handleSelect(e)} value={jobselect.JobLevel}>
                  <option value="" disabled selected></option>
                  <option value="Business Strategy">Business Strategy</option>
                  <option value="Customer Success">Customer Success</option>
                  <option value="Early in Career">Early in Career</option>
                  <option value="Infrastructure">Engineering, Infrastructure and Operations</option>
                  <option value="Executive">Executive</option>
                  <option value="Finance">Finance & Accounting</option>
                  <option value="Global">Global Technical Support</option>
                  <option value="HumanResources">Human Resources</option>
                  <option value="IT">IT</option>
                  <option value="Legal">Legal</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Product">Product</option>
                  <option value="ProfessionalServices">Professional Services</option>
                  <option value="Sales">Sales</option>
                  <option value="WorkplaceServices">Workplace Services</option>
                </select>
                <div className={style.FormButton}>
                  <button>SIGN UP</button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default TalentCommunity;
