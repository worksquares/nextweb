import React, { useState } from "react";
import { Input, Typography } from "antd";
import styles from "../../styles/comp/AiAgentRecruiter.module.css";

const { Title } = Typography;

const AiAgentRecruiter: React.FC = () => {
  const agents = [
    "AI Agent Recruiter",
    "Insurance Premium Collector",
    "Loan Payment Reminder",
    "Appointment Scheduler",
  ];

  const [selectedAgent, setSelectedAgent] = useState("AI Agent Recruiter");
  const [mobile, setMobile] = useState("");
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const [code, setCode] = useState(Array(6).fill(""));
  const [gender, setGender] = useState<"Male" | "Female">("Male");
  const [selectedName, setSelectedName] = useState("Adam");

  const maleNames = [
    { name: "Kevin", image: "/avatars/kevin.png" },
    { name: "Robert", image: "/avatars/robert.png" },
    { name: "Adam", image: "/avatars/adam.png" },
    { name: "Rohit" },
  ];

  const femaleNames = [
    { name: "Sophia", image: "/avatars/sophia.png" },
    { name: "Alia", image: "/avatars/alia.png" },
    { name: "Emily", image: "/avatars/emily.png" },
    { name: "Princy" },
  ];

  const availableNames = gender === "Male" ? maleNames : femaleNames;

  const handleSendOtp = () => {
    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }
    console.log("Mobile Number:", mobile);
    console.log("Selected Gender:", gender);
    console.log("Selected Name:", selectedName);
    setIsVerifyOpen(true);
  };

  const handleVerify = () => {
    if (mobile.length !== 10) {
      return;
    }
    console.log("Entered Mobile Number:", mobile);
    console.log("OTP Code Entered:", code.join(""));
    setIsVerifyOpen(false);
  };

  const handleCancel = () => {
    setIsVerifyOpen(false);
    setCode(Array(6).fill(""));
    setMobile("");
  };

  const handleOtpChange = (value: string) => {
    setCode(value.split(""));
  };

  return (
    <div className={styles.centerWrapper}>
      <div className={styles.appContainer}>
        {/* Sidebar Section */}
        <aside className={styles.sidebar}>
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
        </aside>

        {/* Main Content */}
        <main className={styles.mainContent}>
          <h1 className={styles.pageTitle}>{selectedAgent}</h1>

          {/* Display this UI for all agents */}
          <>
            <div className={styles.selectionRow}>
              <div className={styles.selectionGroup}>
                <label><strong>Select AI:</strong></label>
                <button
                  className={`${styles.radioButton} ${gender === "Male" ? styles.activeRadio : ""}`}
                  onClick={() => {
                    setGender("Male");
                    setSelectedName("Adam");
                  }}
                >
                  Chat
                </button>
                <button
                  className={`${styles.radioButton} ${gender === "Female" ? styles.activeRadio : ""}`}
                  onClick={() => {
                    setGender("Female");
                    setSelectedName("Sophia");
                  }}
                >
                  Voice
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
                  Send OTP
                </button>
                <button
                  className={styles.primaryButton}
                  onClick={() => alert("AI Call Triggered")}
                >
                  Test AI Call
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
          </>
        </main>
      </div>
    </div>
  );
};

export default AiAgentRecruiter;
