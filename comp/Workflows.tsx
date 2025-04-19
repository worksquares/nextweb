import React from "react";
import Screen from "./Screen";
import Image from "next/image";

const Workflows = () => {
  return (
    <Screen>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "100px",
        }}
      >
        <div style={{ marginRight: "50px" }}>
          <div className="ItWorkflow" style={{ height: "270px" }}>
            <div style={{ marginTop: "15px" }}>
              <span>
              <Image
                  src="/assets/IT-Operations.svg"
                  alt="ItWorkflow"
                  style={{ width: "88px" }}
                />
              </span>
            </div>
            <div>
              <p
                style={{
                  fontSize: "20px",
                  marginTop: "10px",
                  color: "#000",
                  fontFamily:
                    "Lato-Regular, Helvetica Neue, Helvetica, sans-serif",
                  fontWeight: 600,
                }}
              >
                Accelerated IT Operations
              </p>
              <p
                style={{
                  lineHeight: "1.5",
                  fontFamily:
                    "Lato-Regular, Helvetica Neue, Helvetica, sans-serif",
                  fontSize: "1rem",
                  color: "#22242b",
                }}
              >
                Our low-code platform reduces project timelines from months to
                days, streamlining IT workflows. Automation tools allow IT teams
                to focus on innovation, making operations more agile and
                responsive.
              </p>
            </div>
          </div>
          <div className="EmployeeWorkflows" style={{ height: "270px" }}>
            <div style={{ marginTop: "10px" }}>
              <span>
              <Image
                  src="/assets/SystemIntegration.svg"
                  alt="EmployeeWorkflows"
                  style={{ width: "88px" }}
                />
              </span>
            </div>
            <div>
              <p
                style={{
                  fontSize: "20px",
                  marginTop: "10px",
                  color: "#000",
                  fontFamily:
                    "Lato-Regular, Helvetica Neue, Helvetica, sans-serif",
                  fontWeight: 600,
                }}
              >
                Enhanced System Integration
              </p>
              <p
                style={{
                  lineHeight: "1.5",
                  fontFamily:
                    "Lato-Regular, Helvetica Neue, Helvetica, sans-serif",
                  fontSize: "1rem",
                  color: "#22242b",
                }}
              >
                Ensure smooth data flow between systems with our low-code
                platform’s interoperability. Easily connect existing databases
                and applications, reducing data silos and improving operational
                efficiency.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="CustomerWorkflows" style={{ height: "270px" }}>
            <div>
              <span>
              <Image
                  src="/assets/IT-Infrastructure.svg"
                  alt="CustomerWorkflows"
                  style={{ width: "88px" }}
                />
              </span>
            </div>
            <div>
              <p
                style={{
                  fontSize: "20px",
                  marginTop: "10px",
                  color: "#000",
                  fontFamily:
                    "Lato-Regular, Helvetica Neue, Helvetica, sans-serif",
                  fontWeight: 600,
                }}
              >
                Modern IT Infrastructure
              </p>
              <p
                style={{
                  lineHeight: "1.5",
                  fontFamily:
                    "Lato-Regular, Helvetica Neue, Helvetica, sans-serif",
                  fontSize: "1rem",
                  color: "#22242b",
                }}
              >
                Transform your IT infrastructure with our platform, supporting
                .NET, Java, Node.js, and Python. Seamlessly integrate with
                modern and legacy systems, enhancing efficiency and reliability.
              </p>
            </div>
          </div>
          <div className="CreatorWorkflows" style={{ height: "270px" }}>
            <div style={{ marginTop: "10px" }}>
              <span>
                <Image
                  src="/assets/Deployment.svg"
                  alt="Creator Workflows"
                  style={{ width: "88px" }}
                />
              </span>
            </div>
            <div>
              <p
                style={{
                  fontSize: "20px",
                  marginTop: "10px",
                  color: "#000",
                  fontFamily:
                    "Lato-Regular, Helvetica Neue, Helvetica, sans-serif",
                  fontWeight: 600,
                }}
              >
                Rapid Deployment and Updates
              </p>
              <p
                style={{
                  lineHeight: "1.5",
                  fontFamily:
                    "Lato-Regular, Helvetica Neue, Helvetica, sans-serif",
                  fontSize: "1rem",
                  color: "#22242b",
                }}
              >
                Deploy changes swiftly with our automated process, ensuring
                consistency across environments. Reduce downtime and quickly
                respond to market demands, implementing updates in hours or
                days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default Workflows;
