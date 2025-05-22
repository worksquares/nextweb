import { useRef, useState } from "react";
import styles from "../../styles/comp/AiAgentRecruiterDashboard.module.css";

const modules = [
  { id: "ai-agent", label: "AI Agent Recruiter", icon: "user" },
  { id: "insurance", label: "Insurance Premium Collector", icon: "doc" },
  { id: "loan", label: "Loan Payment Reminder", icon: "clock" },
  { id: "appointment", label: "Appointment Scheduler", icon: "calendar" },
];

const interactionModes = [
  { id: "chat", label: "Chat", icon: "chat" },
  { id: "voice", label: "Voice", icon: "mic" },
];

const personas = [
  { id: "sophia", name: "Sophia", desc: "Professional", voice: "Female Voice" },
  { id: "alia", name: "Alia", desc: "Friendly", voice: "Female Voice" },
  { id: "emily", name: "Emily", desc: "Energetic", voice: "Female Voice" },
  { id: "princy", name: "Princy", desc: "Empathetic", voice: "Female Voice" },
];

// Icons JSX reused (same as before)
const Icons = {
  user: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.iconSmall}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4 1.79 4 4 4zM12 14c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4z"
      />
    </svg>
  ),
  doc: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.iconSmall}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h6M9 8h6M5 20h14v-2H5v2z" />
    </svg>
  ),
  clock: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.iconSmall}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  calendar: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.iconSmall}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6h6v6M7 7h10v2H7z" />
    </svg>
  ),
  chat: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.iconSmall}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 8h10M7 12h6M21 12c0 4.418-4.03 8-9 8a9.83 9.83 0 01-4-.83L3 20l1.17-3.66A7.97 7.97 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  ),

  mic: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.iconSmall}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 1a3 3 0 013 3v7a3 3 0 01-6 0V4a3 3 0 013-3z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 10v1a7 7 0 01-14 0v-1"
      />
      <line
        x1="12"
        y1="19"
        x2="12"
        y2="23"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  check: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.iconMedium}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  send: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.iconMedium}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h11M14 3l7 7-7 7" />
    </svg>
  ),
  phone: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles.iconMedium}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M4 6v12a2 2 0 002 2h7a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2z"
      />
    </svg>
  ),
};

export default function AIAgentRecruiterDashboard() {
  const [selectedModule, setSelectedModule] = useState("ai-agent");
  const [interactionMode, setInteractionMode] = useState("chat");
  const [selectedPersona, setSelectedPersona] = useState("sophia");
  const [mobileNumber, setMobileNumber] = useState("");
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  // Mobile number input: only digits max 10
  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, "");
    if (input.length <= 10) setMobileNumber(input);
  };

  // OTP input change
  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  // Send OTP button click
  const handleSendOtpClick = () => {
    if (mobileNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }
    setShowOtpForm(true);
  };

  // Verify OTP submit
  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length < 4) {
      alert("Please enter all 4 digits");
      return;
    }
    alert("OTP Verified: " + code);
    setShowOtpForm(false);
    setOtp(["", "", "", ""]);
  };

  // Cancel OTP
  const handleCancelOtp = () => {
    setShowOtpForm(false);
    setOtp(["", "", "", ""]);
  };

  if (showOtpForm) {
    return (
      <div className={styles.otpOverlay}>
        <form className={styles.otpForm} onSubmit={handleVerify}>
          <div className={styles.otpTitle}>OTP</div>
          <div className={styles.otpTitle}>Verification Code</div>
          <p className={styles.otpMessage}>
            We have sent a verification code to your mobile number
          </p>
          <div className={styles.otpInputs}>
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={inputRefs[i]}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleOtpChange(i, e.target.value)}
                className={styles.otpInput}
                onFocus={(e) => e.target.select()}
              />
            ))}
          </div>
          <div className={styles.otpButtons}>
            <button
              type="button"
              onClick={handleCancelOtp}
              className={styles.otpCancelButton}
            >
              Cancel
            </button>
            <button type="submit" className={styles.otpVerifyButton}>
              Verify Me
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div>
          <h3 className={styles.headerTitle}>AI Agent Recruiter Dashboard</h3>
          <p className={styles.headerSubtitle}>
            Configure your automated recruitment calls
          </p>
        </div>
      </header>

      {/* Select Module */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Select Module</p>
        <div className={styles.modules}>
          {modules.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setSelectedModule(id)}
              className={`${styles.moduleButton} ${
                selectedModule === id ? styles.selected : ""
              }`}
            >
              {Icons[icon]} {label}
            </button>
          ))}
        </div>
      </section>

      {/* Interaction Mode */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Interaction Mode</p>
        <div className={styles.interactionModes}>
          {interactionModes.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setInteractionMode(id)}
              className={`${styles.modeButton} ${
                interactionMode === id ? styles.selected : ""
              }`}
            >
              {Icons[icon]} {label}
            </button>
          ))}
        </div>
      </section>

      {/* Select AI Persona */}
      <section className={styles.section}>
        <p className={styles.sectionLabel}>Select AI Persona</p>
        <div className={styles.personas}>
          {personas.map(({ id, name, desc, voice }) => {
            const selected = selectedPersona === id;
            return (
              <button
                key={id}
                onClick={() => setSelectedPersona(id)}
                className={`${styles.personaButton} ${
                  selected ? styles.personaButton_selected : ""
                }`}
              >
                <div
                  className={styles.personaIcon}
                  style={{
                    borderColor: selected ? "#4338ca" : undefined,
                    backgroundColor: selected ? "#F59E0B" : undefined,
                    color: selected ? "white" : undefined,
                  }}
                >
                  {Icons.user}
                </div>
                <div className={styles.personaDetails}>
                  <p className={styles.personaName}>{name}</p>
                  <p className={styles.personaDesc}>{desc}</p>
                  <p className={styles.personaVoice}>{voice}</p>
                </div>
                {selected && <span className={styles.checkmark}>{Icons.check}</span>}
              </button>
            );
          })}
        </div>
      </section>

      {/* Recipient Mobile Number */}
      <section className={styles.mobileNumberSection}>
        <p className={styles.sectionLabel}>Recipient Mobile Number</p>
        <div className={styles.mobileNumberInputContainer}>
          <select className={styles.countryCodeSelect} defaultValue="+1">
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+91">+91</option>
          </select>
          <input
            type="tel"
            placeholder="Enter mobile number"
            value={mobileNumber}
            onChange={handleMobileChange}
            className={styles.mobileNumberInput}
          />
          <button
            type="button"
            className={styles.sendOtpButton}
            onClick={handleSendOtpClick}
          >
            {Icons.send} Send OTP
          </button>
          <button type="button" className={styles.testCallButton}
          onClick={() => alert("Test AI Call triggered for " + selectedModule)}>
            {Icons.phone} Test AI Call
          </button>
        </div>
      </section>
    </div>
  );
}
