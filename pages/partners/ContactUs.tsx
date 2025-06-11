import React, { useState } from "react";
import Headseo from "../headseo";
import BaseLayout from "../../comp/BaseLayout";
import styles from "../../styles/partners/ContactUs.module.css";
import Screen from "../../comp/Screen";
import { Button, Checkbox, Form, Input, message, Select } from "antd";
import { countries } from "../../comp/countries";
import TextArea from "antd/es/input/TextArea";
import Image from "next/image";

const ContactUs = () => {
  const [form] = Form.useForm();
  const onFinish = async (values: string) => {
    console.log("values: ", values);
    try {
      const response = await fetch(
        "https://api.digisquares.com/partnercontactform",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      console.log("response: ", response);

      if (response.ok) {
        console.log("Form data sent successfully!");
        message.success("Submit success!");
        form.resetFields();
      } else {
        console.error("Failed to send form data.");
      }
    } catch (error) {
      console.error("Error sending form data:", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    message.error("Submit failed!");
  };

  const CardInformation = [
    {
      Icon: "/svg/Explore.svg",
      heading: "Unlock Benefits to Increase Growth",
      description:
        "Access dedicated Digisquares resources to develop your workforce, capture customer opportunities, and expand your practice.",
      linkName: "Learn More",
      linkUrl: "",
    },
    {
      Icon: "/svg/Explore.svg",
      heading: "Dedicated Resources to Succeed",
      description:
        "Access the tools needed to develop your workforce and grow your business.",
      linkName: "Learn More",
      linkUrl: "",
    },
    {
      Icon: "/svg/Explore.svg",
      heading: "Stand Out with Digisquares Partnership",
      description:
        "Achieve recognition with badges, specialization designations, awards, and event sponsorships.",
      linkName: "Learn More",
      linkUrl: "",
    },
    {
      Icon: "/svg/Explore.svg",
      heading: "Reseller Opportunities",
      description:
        "Promote and resell Digisquares products, expanding your offerings and boosting customer satisfaction.",
      linkName: "Learn More",
      linkUrl: "",
    },
    {
      Icon: "/svg/Explore.svg",
      heading: "Service Provider",
      description:
        "Deliver scalable, managed services on the Digisquares Platform to ensure client satisfaction and growth.",
      linkName: "Learn More",
      linkUrl: "",
    },
    {
      Icon: "/svg/Explore.svg",
      heading: "Custom Apps ",
      description:
        "Create custom apps on Digisquares Platform for streamlined workflows and operational improvements.",
      linkName: "Learn More",
      linkUrl: "",
    },
    {
      Icon: "/svg/Explore.svg",
      heading: "Technology Solutions",
      description:
        "Deliver industry-specific solutions with Digisquares, from healthcare to retail, driving customer success.",
      linkName: "Learn More",
      linkUrl: "",
    },
  ];

  const CardInformationData = [
    {
      Icon: "/svg/Explore.svg",
      heading: "Unlock Benefits to Increase Growth",
      description:
        "Achieve recognition with badges, specialization designations, awards, and event sponsorships.",
      linkName: "Learn More",
      linkUrl: "",
    },
    {
      Icon: "/svg/Explore.svg",
      heading: "Dedicated Resources to Succeed",
      description:
        "Access the tools needed to develop your workforce and grow your business.",
      linkName: "Learn More",
      linkUrl: "",
    },
    {
      Icon: "/svg/Explore.svg",
      heading: "Stand Out with Digisquares Partnership",
      description:
        "Achieve recognition with badges, specialization designations, awards, and event sponsorships.",
      linkName: "Learn More",
      linkUrl: "",
    },
    {
      Icon: "/svg/Explore.svg",
      heading: "Stand Out with Digisquares Partnership",
      description:
        "Achieve recognition with badges, specialization designations, awards, and event sponsorships.",
      linkName: "Learn More",
      linkUrl: "",
    },
  ];

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Headseo
        title={`Contact Us | Digisquares`}
        heading={`We're unstoppable together`}
        description={`At Digisquares, we embrace endless possibilities. Our unique platform and partner ecosystem bring intelligence and AI to every corner of the enterprise, making the world work better for everyone.`}
        url={`/partners/PartnerProgram`}
        img={`/assets/LowCode3D(1).webp`}
      />
      <BaseLayout>
        <div className={styles.ContactUsMain}>
          <div style={{ backgroundColor: "#154965" }}>
            <Screen>
              <div className={styles.ContactUsFormComp}>
                <div className={styles.ContactUsForm}>
                  <h2>Talk with a sales expert</h2>
                  <p>Log in now to connect with an expert</p>
                  <div className={styles.FormComp}>
                    <Form
                      layout="vertical"
                      name="basic"
                      form={form}
                      labelCol={{ span: 12 }}
                      initialValues={{ remember: true }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                    >
                      <Form.Item
                        label="Business E-mail"
                        name="businessemail"
                        rules={[
                          {
                            required: true,
                            message: "Please Enter your Business E-mail!",
                          },
                        ]}
                        className={styles.FormFieldsComp}
                      >
                        <Input className={styles.ContactInput} />
                      </Form.Item>

                      <Form.Item
                        label="First Name"
                        name="firstname"
                        rules={[
                          {
                            required: true,
                            message: "Please Enter your First Name!",
                          },
                        ]}
                      >
                        <Input className={styles.ContactInput} />
                      </Form.Item>
                      <Form.Item
                        label="Last Name"
                        name="lastname"
                        rules={[
                          {
                            required: true,
                            message: "Please Enter your Last Name!",
                          },
                        ]}
                      >
                        <Input className={styles.ContactInput} />
                      </Form.Item>
                      <Form.Item
                        label="Company"
                        name="company"
                        rules={[
                          {
                            required: true,
                            message: "Please Enter your Company!",
                          },
                        ]}
                      >
                        <Input className={styles.ContactInput} />
                      </Form.Item>
                      <Form.Item
                        label="Telephone"
                        name="telephone"
                        rules={[
                          {
                            required: true,
                            message: "Please Enter your Telephone!",
                          },
                        ]}
                      >
                        <Input className={styles.ContactInput} />
                      </Form.Item>
                      <Form.Item
                        label="Job Level"
                        name="joblevel"
                        rules={[
                          {
                            required: true,
                            message: "Please Select your Job Level!",
                          },
                        ]}
                      >
                        <Select
                          showSearch
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                          placeholder="Please Select"
                        >
                          <Select.Option value="IndividualContributor">
                            Individual Contributor
                          </Select.Option>
                          <Select.Option value="Developer/Engineer">
                            Developer / Engineer
                          </Select.Option>
                          <Select.Option value="Architech">
                            Architech
                          </Select.Option>
                          <Select.Option value="SystemAdministrator">
                            System Administrator
                          </Select.Option>
                          <Select.Option value="Manager/Sr">
                            Manager / Sr
                          </Select.Option>
                          <Select.Option value="Director/Sr">
                            Director / Sr
                          </Select.Option>
                          <Select.Option value="VicePresident/SVP">
                            Vice President / SVP
                          </Select.Option>
                          <Select.Option value="C-Level">C-Level</Select.Option>
                          <Select.Option value="PressAnalyst/Media">
                            Press Analyst / Media
                          </Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        label="Department"
                        name="department"
                        rules={[
                          {
                            required: true,
                            message: "Please Select your Department!",
                          },
                        ]}
                      >
                        <Input className={styles.ContactInput} />
                      </Form.Item>
                      <Form.Item
                        label="Job Function"
                        name="jobfunction"
                        rules={[
                          {
                            required: true,
                            message: "Please Enter your Job Function!",
                          },
                        ]}
                      >
                        <Input className={styles.ContactInput} />
                      </Form.Item>
                      <Form.Item
                        label="Country"
                        name="country"
                        rules={[
                          {
                            required: true,
                            message: "Please Select your Country!",
                          },
                        ]}
                      >
                        <Select
                          showSearch
                          style={{ width: "100%", height: "100%" }}
                          placeholder="Please Select"
                        >
                          {countries.map((country) => (
                            <Select.Option
                              value={country.countryName}
                              key={country.countryShortCode}
                            >
                              {country.countryName}
                            </Select.Option>
                          ))}
                        </Select>
                      </Form.Item>
                      <Form.Item
                        label="I would like to"
                        name="iwouldliketo"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the field",
                          },
                        ]}
                      >
                        <Select
                          showSearch
                          style={{ width: "100%", height: "100%" }}
                          placeholder="Please Select"
                        >
                          <Select.Option value="SpeakWithADigisquaresAccountExecutive">
                            Speak with A Digisquares Account Executive
                          </Select.Option>
                          <Select.Option value="ScheduleDemoWithDigisquaresExpert">
                            Schedule Demo with Digisquares Expert
                          </Select.Option>
                          <Select.Option value="LearnMoreAboutSpecificDigisquaresApplications">
                            Learn more about Specific Digisquares Applications
                          </Select.Option>
                          <Select.Option value="Other">Other</Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        label="I am Interested in"
                        name="iaminterestedin"
                        rules={[
                          {
                            required: true,
                            message: "Please enter the field!",
                          },
                        ]}
                      >
                        <Select
                          showSearch
                          style={{ width: "100%", height: "100%" }}
                          placeholder="I am interested in"
                        >
                          <Select.Option value="Aligning Enterprise Work">
                            Aligning Enterprise Work
                          </Select.Option>
                          <Select.Option value="Automating cloud processes">
                            Automating cloud processes
                          </Select.Option>
                          <Select.Option value="Automating manual workflow steps and connecting key systems">
                            Automating manual workflow steps and connecting key
                            systems
                          </Select.Option>
                          <Select.Option value="Creating unique workflows that automate end-to-end">
                            Creating unique workflows that automate end-to-end
                          </Select.Option>
                          <Select.Option value="Customer Service and Operations">
                            Customer Service and Operations
                          </Select.Option>
                          <Select.Option value="ESG and Sustainability">
                            ESG and Sustainability
                          </Select.Option>
                          <Select.Option value="Employee Growth and Development">
                            Employee Growth and Development
                          </Select.Option>
                          <Select.Option value="Enterprise Asset Management">
                            Enterprise Asset Management
                          </Select.Option>
                          <Select.Option value="Field Service Operations and Management">
                            Field Service Operations and Management
                          </Select.Option>
                          <Select.Option value="Global Business Services">
                            Global Business Services
                          </Select.Option>
                          <Select.Option value="Governance, Risk, and Compliance">
                            Governance, Risk, and Compliance
                          </Select.Option>
                          <Select.Option value="HR Service Delivery">
                            HR Service Delivery
                          </Select.Option>
                          <Select.Option value="Hardware and Software Asset Management">
                            Hardware and Software Asset Management
                          </Select.Option>
                          <Select.Option value="Improving lead to cash process">
                            Improving lead to cash process
                          </Select.Option>
                          <Select.Option value="Legal Service Delivery">
                            Legal Service Delivery
                          </Select.Option>
                          <Select.Option value="Moving apps to the cloud">
                            Moving apps to the cloud
                          </Select.Option>
                          <Select.Option value="Now Assist (GenAI)">
                            Now Assist (GenAI)
                          </Select.Option>
                          <Select.Option value="Operational Technology Management">
                            Operational Technology Management
                          </Select.Option>
                          <Select.Option value="Optimizing for a cloud first approach">
                            Optimizing for a cloud first approach
                          </Select.Option>
                          <Select.Option value="Planning and Tracking IT Work and Strategic Initiatives">
                            Planning and Tracking IT Work and Strategic
                            Initiatives
                          </Select.Option>
                          <Select.Option value="Security Operations and Integrated Risk Management">
                            Security Operations and Integrated Risk Management
                          </Select.Option>
                          <Select.Option value="Security Operations and Security Incident Response">
                            Security Operations and Security Incident Response
                          </Select.Option>
                          <Select.Option value="Security Operations and Vulnerability Response">
                            Security Operations and Vulnerability Response
                          </Select.Option>
                          <Select.Option value="Service Operations and AIOps">
                            Service Operations and AIOps
                          </Select.Option>
                          <Select.Option value="Source-to-Pay Operations">
                            Source-to-Pay Operations
                          </Select.Option>
                          <Select.Option value="Third Party Risk Management">
                            Third Party Risk Management
                          </Select.Option>
                          <Select.Option value="Workplace Service Delivery">
                            Workplace Service Delivery
                          </Select.Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        label="Additional Comments (Optional)"
                        name="additionalcomments"
                      >
                        <TextArea
                          autoSize={{
                            minRows: 5,
                            maxRows: 7,
                          }}
                        />
                      </Form.Item>
                      <Form.Item name="createanaccount" valuePropName="checked">
                        <Checkbox>
                          Create an account for instant downloads and other
                          premium resources
                        </Checkbox>
                      </Form.Item>
                      <p>
                        By submitting this form, I confirm that I have read and
                        agree to the Privacy Statement.
                      </p>

                      <Form.Item>
                        <Button
                          className={styles.SubmitButton}
                          htmlType="submit"
                        >
                          Contact Sales
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
                {/* --------------- Form Cards --------------- */}
                <div className={styles.ContactUsFormDesc}>
                  <h2>Welcome back! Ready to explore more?</h2>
                  {CardInformation.map((data, i) => {
                    return (
                      <div className={styles.CardComp} key={i}>
                        {data.Icon && (
                          <Image
                            src={data.Icon}
                            alt="check"
                            className={styles.CardIcons}
                            width={30}
                            height={30}
                            priority={true}
                          />
                        )}
                        <h3>{data.heading}</h3>
                        <p className={styles.CardDesc}>{data.description}</p>
                        <a
                          href={data.linkUrl}
                          className={styles.learnMoreButton}
                        >
                          {data.linkName}
                          <Image
                            src="/svg/arrow.svg"
                            alt="Arrow Icon"
                            className={styles.arrowIcon}
                            width={13}
                            height={13}
                            priority={true}
                          />
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Screen>
          </div>
          <Screen>
            <div className={styles.ContactUsCardsLine}></div>
            <div className={styles.ContactUsCards}>
              {CardInformationData.map((data, i) => {
                return (
                  <div className={styles.ContactUsCardComp} key={i}>
                    <p className={styles.ContactUsCardDesc}>
                      {data.description}
                    </p>
                    <a
                      href={data.linkUrl}
                      className={styles.ContactUsLearnMoreButton}
                    >
                      {data.linkName}
                      <Image
                        src="/svg/arrow.svg"
                        alt="Arrow Icon"
                        className={styles.ContactUsArrowIcon}
                        width={13}
                        height={13}
                        priority={true}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </Screen>
        </div>
      </BaseLayout>
    </div>
  );
};

// export async function getStaticProps() {

// return {
//   props: {
//     CardInformation,
//     CardInformationData,
//   },
// };
// }

export default ContactUs;
