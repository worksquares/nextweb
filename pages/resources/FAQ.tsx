import React, { useState } from "react";
import { Collapse } from "antd";
import BaseLayout from "../../comp/BaseLayout";
import styles from "../../styles/comp/FAQComponent.module.css";
import Screen from "../../comp/Screen";
// import NewMenu from "../../comp/newMenu";
import NewHeroSection from "../../comp/NewHeroSection";
// import NewFooter from "../../comp/newFooter";
import Image from "next/image";


const { Panel } = Collapse;

const FAQComponent = () => {
  const [activeKeys, setActiveKeys] = useState([]);

  const faqData = [
    {
      key: "1",
      question: "What is your return policy?",
      answer: "Our return policy allows returns within 30 days of purchase.",
    },
    {
      key: "2",
      question: "How do I track my order?",
      answer: "You can track your order using the tracking link sent to your email.",
    },
    {
      key: "3",
      question: "Do you offer customer support?",
      answer: "Yes, we offer 24/7 customer support via chat and email.",
    },
    {
      key: "4",
      question: "Can I change my order after placing it?",
      answer: "Changes can be made within 24 hours of placing the order.",
    },
    {
      key: "5",
      question: "What payment methods do you accept?",
      answer: "We accept Visa, MasterCard, American Express, and PayPal.",
    },
    {
      key: "6",
      question: "How long does shipping take?",
      answer: "Shipping typically takes 5-7 business days for standard delivery.",
    },
    {
      key: "7",
      question: "Do you ship internationally?",
      answer: "Yes, we ship to many countries around the world.",
    },
    {
      key: "8",
      question: "Can I cancel my order?",
      answer: "Orders can be canceled within 24 hours of placement.",
    },
    {
      key: "9",
      question: "Is there a warranty on your products?",
      answer: "Yes, we offer a one-year warranty on all products.",
    },
    {
      key: "10",
      question: "How do I apply a discount code?",
      answer: "You can apply the code at checkout in the discount code field.",
    },
  ];

  const onChange = (key) => {
    setActiveKeys(key);
  };

  return (
    <div>
      {/* <NewMenu/> */}
      <BaseLayout>
      <div className={styles.faq}>
      <Screen>
        <h2 className={styles.faqHeader}>Need a hand? We have got you.</h2>
        <div className={styles.faqContainer}>
          {faqData.map((item) => (
            <div key={item.key} className={styles.faqItem}>
              <Collapse
                expandIconPosition="end"
                bordered={false}
                activeKey={activeKeys}
                onChange={(key) => onChange(key)}
                expandIcon={({ isActive }) => (
                  <Image
                    src="/svg/ArrowDown.svg"
                    alt="arrow icon"
                    width ={25}
                    height={25}
                    style={{
                      transform: isActive ? "rotate(180deg)" : "rotate(0deg)", 
                    }}
                  />
                )}
                className={styles.siteCollapseCustomCollapse}
              >
                <Panel
                  header={item.question}
                  key={item.key}
                  className={styles.siteCollapseCustomPanel}
                >
                  <p>{item.answer}</p>
                </Panel>
              </Collapse>
            </div>
          ))}
        </div>
      </Screen>
      </div>
      {/* <NewFooter /> */}
      </BaseLayout>
    </div>
  );
};

export default FAQComponent;
