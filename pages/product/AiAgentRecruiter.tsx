import { Typography } from "antd";
import React, { useState } from "react";
import styles from "../../styles/comp/AiAgentRecruiter.module.css";

const { Title } = Typography;

const AiAgentRecruiter: React.FC = () => {
  // const agents = [
  //   "AI Agent Recruiter",
  //   "Insurance Premium Collector",
  //   "Loan Payment Reminder",
  //   "Appointment Scheduler",
  // ];

  const agents = [
    { name: "AI Agent Recruiter",
      icon: "/assets/agent requiter/aiagentrequiter.svg",
      agentImage:"/assets/agent requiter/aiagentrequiteravatar.webp",
      question:"What is AI Agent Recruiter",
      answer:"An AI Agent Recruiter is a computer program that helps with hiring by automatically finding, screening, and contacting job candidates. It works like a virtual recruiter."
    },

    { name: "Insurance Premium Collector",
      icon: "/assets/agent requiter/insurancecollectoragent.svg",
      agentImage:"/assets/agent requiter/insurancecollectoragentavatar.webp",
      question:"What is AI Agent Recruiter",
      answer:""
    },

    { name: "Loan Payment Reminder",
      icon: "/assets/agent requiter/loanpayementreminder.svg",
      agentImage:"/assets/agent requiter/loanpayementreminderavatar.webp",
      question:"What is AI Agent Recruiter",
      answer:""
    },
    { name: "Appointment Scheduler",
      icon: "/assets/agent requiter/appointmentscheduler.svg",
      agentImage:"/assets/agent requiter/appointmentscheduleravatar.webp",
      question:"What is AI Agent Recruiter",
      answer:""
     },
  ];

  const [selectedAgent, setSelectedAgent] = useState("AI Agent Recruiter");
  // const [question, setQuestion]=useState("What is AI Agent Recruiter");
  const [answer, setAnswer]=useState("");
  // const [mobile, setMobile] = useState("");
  // const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  // const [code, setCode] = useState(Array(6).fill(""));
  // const [gender, setGender] = useState<"Male" | "Female">("Male");
  // const [selectedName, setSelectedName] = useState("Adam");

  // const maleNames = [
  //   { name: "Kevin", image: "/avatars/kevin.png" },
  //   { name: "Robert", image: "/avatars/robert.png" },
  //   { name: "Adam", image: "/avatars/adam.png" },
  //   { name: "Rohit" },
  // ];

  // const femaleNames = [
  //   { name: "Sophia", image: "/avatars/sophia.png" },
  //   { name: "Alia", image: "/avatars/alia.png" },
  //   { name: "Emily", image: "/avatars/emily.png" },
  //   { name: "Princy" },
  // ];

  // const availableNames = gender === "Male" ? maleNames : femaleNames;

  // const handleSendOtp = () => {
  //   if (mobile.length !== 10) {
  //     alert("Please enter a valid 10-digit mobile number");
  //     return;
  //   }
  //   console.log("Mobile Number:", mobile);
  //   console.log("Selected Gender:", gender);
  //   console.log("Selected Name:", selectedName);
  //   setIsVerifyOpen(true);
  // };

  // const handleVerify = () => {
  //   if (mobile.length !== 10) {
  //     return;
  //   }
  //   console.log("Entered Mobile Number:", mobile);
  //   console.log("OTP Code Entered:", code.join(""));
  //   setIsVerifyOpen(false);
  // };

  // const handleCancel = () => {
  //   setIsVerifyOpen(false);
  //   setCode(Array(6).fill(""));
  //   setMobile("");
  // };

  // const handleOtpChange = (value: string) => {
  //   setCode(value.split(""));
  // };

  return (
    <div className={styles.centerWrapper}>
      <div className={styles.appContainer}>
        {/* Sidebar Section */}
        {/* <aside className={styles.sidebar}>
          <ul>
            {agents.map((agent) => (
              <li
                key={agent}
                className={
                  selectedAgent === agent ? styles.activeAgent : styles.agentItem
                }
                onClick={() => setSelectedAgent(agent)}
              >
                {agent}
              </li>
            ))}
          </ul>
        </aside> */}
        <aside className={styles.sidebar}>
  <ul>
    {agents.map((agent) => (
      <li
        key={agent.name}
        className={
          selectedAgent === agent.name ? styles.activeAgent : styles.agentItem
        }
        onClick={() => setSelectedAgent(agent.name)}
      >
        <img
          src={agent.icon}
          alt={`${agent.name} icon`}
          className={styles.sidebarIcon}
        />
        {agent.name}
      </li>
    ))}
  </ul>
</aside>

        {/* Main Content */}
        <main className={styles.mainContent}>
          <h3 className={styles.pageTitle}>{selectedAgent}</h3>
          {/* Display this UI for all agents */}
          <div className={styles.qaContainer}>
          {/* Avatar */}
          <img
            src={agents.find((a) => a.name === selectedAgent)?.agentImage || "/assets/agent requiter/aiagentrequiteravatar.web"}
            alt={`${selectedAgent} avatar`}
            className={styles.avatar}
          />

          {/* Question bubble */}
          <div className={styles.questionBubble}>
            {agents.find((a) => a.name === selectedAgent)?.question || "No question available"}
          </div>

          {/* Answer bubble */}
          <div className={styles.answerBubble}>
            {agents.find((a) => a.name === selectedAgent)?.answer || "No answer available"}
          </div>
        </div>


          {/* <>
            <div className={styles.selectionRow}>
              <div className={styles.selectionGroup}>
                <label><h4>Select AI:</h4></label>
                <button
                  className={`${styles.radioButton} ${gender === "Male" ? styles.activeRadio : ""}`}
                  onClick={() => {
                    setGender("Male");
                    setSelectedName("Adam");
                  }}
                >
                 <span>Chat</span>
                </button>
                <button
                  className={`${styles.radioButton} ${gender === "Female" ? styles.activeRadio : ""}`}
                  onClick={() => {
                    setGender("Female");
                    setSelectedName("Sophia");
                  }}
                >
                 <span>Voice</span>
                </button>
              </div>
            </div>

            <div className={styles.avatarGrid}>
              {availableNames.map(({ name, image }) => (
                <div
                  key={name}
                  className={`${styles.avatarCard} ${selectedName === name ? styles.activeAvatar : ""}`}
                  onClick={() => setSelectedName(name)}
                >
                  <p>{name}</p>
                </div>
              ))}
            </div>

            <div className={styles.inputSection}>
              <input
                type="text"
                value={mobile}
                onChange={(e) => {
                  const input = e.target.value;
                  if (/^\d{0,10}$/.test(input)) {
                    setMobile(input);
                  }
                }}
                placeholder="+1 Enter mobile number"
                className={styles.inputField}
              />
              <div className={styles.buttonRow}>
                <button
                  className={styles.primaryButton}
                  onClick={handleSendOtp}
                >
                  <span className="sp">Send OTP</span>
                </button>
                <button
                  className={styles.primaryButton}
                  onClick={() => alert("AI Call Triggered")}
                >
                  <span className="sp">Test AI Call</span>
                </button>
              </div>
            </div>

            {isVerifyOpen && (
              <div className={styles.modalOverlay}>
                <div className={styles.modal}>
                  <h2>Verify Phone Number</h2>
                  <p>Enter the verification code sent to your mobile number</p>
                  <div className={styles.codeInputs}>
                    <Input.OTP
                      value={code.join("")}
                      onChange={handleOtpChange}
                      length={6}
                      formatter={(str) => str.replace(/\D/g, "")}
                    />
                  </div>
                  <div className={styles.modalButtons}>
                    <button
                      className={styles.cancelButton}
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                    <button
                      className={styles.primaryButton}
                      onClick={handleVerify}
                    >
                      Verify
                    </button>
                  </div>
                </div>
              </div>
            )}
          </> */}
        </main>
      </div>
    </div>
  );
};

export default AiAgentRecruiter;
