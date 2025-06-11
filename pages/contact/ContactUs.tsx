import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import Images from "../../comp/base/Images";
import BaseLayout from "../../comp/BaseLayout";
import Screen from "../../comp/Screen";
import styles from "../../styles/contact/contactus.module.css";
import Headseo from "../headseo";

const ContactUs = () => {
  const [form] = Form.useForm();
  return (
    <>
      <Headseo
        title={`Digisquares | Contact Us`}
        heading={`Contact Us`}
        description={`Digisquares Website Contact Us.`}
        url={`/statements/RefundPolicy`}
        keywords={`Contact Us`}
      />
      <BaseLayout>
        <div className={styles.contactBackground}>
          <Screen>
            <h1>Contact Us</h1>
          </Screen>
        </div>
        <Screen>
          <div className={styles.contactuscontainer}>
            <div style={{ width: "100%" }}>
              <div
                style={{ display: "flex", gap: "15px", alignItems: "center", marginBottom: "5px" }}
              >
                <Images
                  alt="ImageContent"
                  layout="intrinsic"
                  width="30"
                  height="30"
                  src="/assets/globeimg.webp"
                />
                <h3>Location</h3>
              </div>
              <p>
                Digisquares Technologies Private Limited is headquartered in
                Coimbatore
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "50px", marginTop: "35px" }}>
                <div>
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      alignItems: "center",
                      marginBottom: "5px"
                    }}
                  >
                    <Images
                      src="/assets/icons8-location-24.webp"
                      width="30"
                      height="30"
                    />
                    <h3>India</h3>
                  </div>
                  <h4>Coimbatore</h4>
                  <p>Villankurichi Rd,</p>
                  <p>Coimbatore, Tamil Nadu,</p>
                  <p>641035.</p>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      alignItems: "center",
                      marginBottom: "5px"
                    }}
                  >
                    <Images
                      src="/assets/icons8-phone-50.webp"
                      width="30"
                      height="30"
                    />
                    <h3>Phone</h3>
                  </div>
                  <p>0422-464-2299</p>
                  <p>+91 99526-44882</p>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      alignItems: "center",
                    }}
                  >
                    <Images
                      src="/assets/icons8-email-100.webp"
                      width="30"
                      height="30"
                    />
                    <h3>Email</h3>
                  </div>
                  <p>contact@digisquares.com</p>
                </div>
              </div>
            </div>
            <div style={{ width: "100%" }} className={styles.contactusform}>
              <h2>Contact Us</h2>
              <Form
                layout="vertical"
                name="basic"
                form={form}
                initialValues={{ remember: true }}
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              >
                {/* <h1>Contact Us</h1> */}
                <Form.Item
                  label="Full Name"
                  name="businessemail"
                  style={{ fontFamily: "sans-serif" }}
                // rules={[
                //   {
                //     required: true,
                //     message: "Please Enter your Full Name ",
                //   },
                // ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Email Address"
                  name="firstname"
                // rules={[
                //   {
                //     required: true,
                //     message: "Please Enter your Email Address!",
                //   },
                // ]}
                >
                  <Input />
                </Form.Item>



                <Form.Item
                  label="Message(Optional)"
                  name="additionalcomments"
                >
                  <TextArea

                    autoSize={{
                      minRows: 5,
                      maxRows: 7,
                    }}
                  />

                </Form.Item>


                <Form.Item>
                  <Button
                    htmlType="submit"
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>

        </Screen>
      </BaseLayout>
    </>
  );
};

export default ContactUs;
