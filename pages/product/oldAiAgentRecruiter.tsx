// ./pages/product/AiAgentRecruiter.tsx
import { Typography } from "antd";
import Image from "next/image"; // ✅ Importing next/image
import React, { useState } from "react";
import styles from "../../styles/comp/AiAgentRecruiter.module.css";

const { Title } = Typography;

const AiAgentRecruiter: React.FC = () => {
  const agents = [
    {
      name: "AI Agent Recruiter",
      icon: "/assets/agent requiter/aiagentrequiter.svg",
      agentImage: "/assets/agent requiter/aiagentrequiteravatar.webp",
      question: "What is AI Agent Recruiter",
      answer:
        "An AI Agent Recruiter is a computer program that helps with hiring by automatically finding, screening, and contacting job candidates. It works like a virtual recruiter.",
    },
    {
      name: "Insurance Premium Collector",
      icon: "/assets/agent requiter/insurancecollectoragent.svg",
      agentImage: "/assets/agent requiter/insurancecollectoragentavatar.webp",
      question: "What is AI Agent Recruiter",
      answer: "",
    },
    {
      name: "Loan Payment Reminder",
      icon: "/assets/agent requiter/loanpayementreminder.svg",
      agentImage: "/assets/agent requiter/loanpayementreminderavatar.webp",
      question: "What is AI Agent Recruiter",
      answer: "",
    },
    {
      name: "Appointment Scheduler",
      icon: "/assets/agent requiter/appointmentscheduler.svg",
      agentImage: "/assets/agent requiter/appointmentscheduleravatar.webp",
      question: "What is AI Agent Recruiter",
      answer: "",
    },
  ];

  const [selectedAgent, setSelectedAgent] = useState("AI Agent Recruiter");
  const [answer, setAnswer] = useState("");

  return (
    <div className={styles.centerWrapper}>
      <div className={styles.appContainer}>
        {/* Sidebar Section */}
        <aside className={styles.sidebar}>
          <ul>
            {agents.map((agent) => (
              <li
                key={agent.name}
                className={
                  selectedAgent === agent.name
                    ? styles.activeAgent
                    : styles.agentItem
                }
                onClick={() => setSelectedAgent(agent.name)}
              >
                <div className={styles.sidebarIcon}>
                  <Image
                    src={agent.icon}
                    alt={`${agent.name} icon`}
                    width={30}
                    height={30}
                  />
                </div>
                {agent.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className={styles.mainContent}>
          <h3 className={styles.pageTitle}>{selectedAgent}</h3>

          <div className={styles.qaContainer}>
            {/* Avatar */}
            <div className={styles.avatar}>
              <Image
                src={
                  agents.find((a) => a.name === selectedAgent)?.agentImage ||
                  "/assets/agent requiter/aiagentrequiteravatar.webp"
                }
                alt={`${selectedAgent} avatar`}
                width={100}
                height={100}
              />
            </div>

            {/* Question bubble */}
            <div className={styles.questionBubble}>
              {agents.find((a) => a.name === selectedAgent)?.question ||
                "No question available"}
            </div>

            {/* Answer bubble */}
            <div className={styles.answerBubble}>
              {agents.find((a) => a.name === selectedAgent)?.answer ||
                "No answer available"}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AiAgentRecruiter;
