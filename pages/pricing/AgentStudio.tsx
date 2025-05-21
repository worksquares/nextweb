import { CaretRightOutlined, CheckOutlined } from "@ant-design/icons";
import { Collapse, Select } from "antd";
import Image from "next/image";
import router from "next/router";
import { useEffect, useState } from "react";
import BaseLayout from "../../comp/BaseLayout";
import styles from "../../styles/pricing/CopilotPricing.module.css";
const { Option } = Select;
const { Panel } = Collapse;

const CopilotPricing = () => {
  const TokenRowStyle = {
    borderRight: "1px solid #A5A5A5",
    padding: "20px",
    width: "20%",
    height: "125PX",
  };
  const Style = {
    borderRight: "1px solid #A5A5A5",
    padding: "20px",
    width: "20%",
    height: "100px",
  };
  const FeatureColStyle = {
    borderRight: "1px solid #A5A5A5",
    padding: "20px",
    width: "20%",
    height: "80px",
  };
  const FeatureColStyle1 = {
    borderRight: "1px solid #A5A5A5",
    padding: "15px",
    width: "20%",
    backgroundColor: "#1D4965",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const EnterpriseColStyle = {
    borderRight: "none",
    padding: "15px",
    width: "20%",
    backgroundColor: "#1D4965",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const FreeColStyle = {
    borderRight: "1px solid #A5A5A5",
    padding: "15px",
    width: "20%",
    backgroundColor: "#1D4965",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const StarterColStyle = {
    borderRight: "1px solid #A5A5A5",
    padding: "15px",
    width: "20%",
    backgroundColor: "#1D4965",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const ProfessionalColStyle = {
    borderRight: "1px solid #A5A5A5",
    padding: "15px",
    width: "20%",
    backgroundColor: "#1D4965",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const divStyle = {
    width: "23%",
    padding: "20px",
    border: "2px solid #DDDDDD",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    cursor: "pointer",
  };

  const selectedDivStyle = {
    transform: "scale(1.05)",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 2,
  };

  const exchangeRates: Record<string, number> = {
    INR: 80,
    USD: 1,
    EUR: 1,
    GBP: 0.75,
    AED: 4,
    AUD: 1.53,
    CAD: 1.37,
    SGD: 1.35,
    HKD: 7.75,
    CHF: 0.90,
    CNY: 7,
    JPY: 147,
    NZD: 1.67,
    SEK: 10.5,
    NOK: 10.4,
    DKK: 6.85,
    THB: 35.5,
    MYR: 4.67,
    PHP: 56.6,
    RUB: 93
  };
  const symbols: Record<string, string> = {
    INR: "₹",
    USD: "$",
    EUR: "€",
    GBP: "£",
    AED: "د.إ",
    AUD: "AU$",
    CAD: "CA$",
    SGD: "S$",
    HKD: "HK$",
    CHF: "CHF",
    CNY: "¥",
    JPY: "¥",
    NZD: "NZ$",
    SEK: "Skr",
    NOK: "Nkr",
    DKK: "Dkr",
    THB: "฿",
    MYR: "RM",
    PHP: "₱",
    RUB: "₽"
  };

  const contents = [
    {
      id: "1",
      button1: "Basic",
      paragraph: "Basic plan with essential features for individual users.",
      M_amount: "₹4,069",
      Y_amount: "₹49,000",
      M_amount_Usd: "$49.00",
      Y_amount_Usd: "$490.00",
      month: "/month",
      yearly: "/yearly",
      icon: <CheckOutlined style={{ fontSize: "12px" }} />,
      L1: "500 MB vector storage",
      L2: "1 million tokens",
      L3: "Essential AI tasks",
      L4: "Web access",
      L5: "User management",
      button2: "Get Started",
      isSwitchOn: true,
    },
    {
      id: "2",
      button1: "Standard",
      paragraph: "Advanced features for small teams and startups.",
      M_amount: "₹6,549",
      Y_amount: "₹79,000",
      M_amount_Usd: "$79.00",
      Y_amount_Usd: "$790.00",
      month: "/month",
      yearly: "/yearly",
      icon: <CheckOutlined style={{ fontSize: "12px" }} />,
      L1: "1 GB vector storage",
      L2: "1 million tokens",
      L3: "Essential AI tasks",
      L4: "OAuth support",
      L5: "Integration with Channels",
      button2: "Get Started",
      isSwitchOn: true,
    },
    {
      id: "3",
      button1: "Premium",
      paragraph: "Comprehensive features and support for growing businesses.",
      M_amount: "₹8,199",
      Y_amount: "₹99,000",
      M_amount_Usd: "$99.00",
      Y_amount_Usd: "$990.00",
      month: "/month",
      yearly: "/yearly",
      icon: <CheckOutlined style={{ fontSize: "12px" }} />,
      L1: "1 GB vector storage",
      L2: "1 million tokens",
      L3: "Essential AI tasks",
      L4: "Social sign-ins",
      L5: "Integration with External APIs and Services",
      button2: "Get Started",
      isSwitchOn: true,
    },
    {
      id: "4",
      button1: "Enterprise",
      paragraph: "Customized plan for large organizations with specific needs.",
      M_amount: "Let's Talk",
      Y_amount: "Let's Talk",
      M_amount_Usd: "Let's Talk",
      Y_amount_Usd: "Let's Talk",
      month: "",
      yearly: "",
      icon: <CheckOutlined style={{ fontSize: "12px" }} />,
      L1: "Unlimited vector storage",
      L2: "Custom tokens",
      L3: "Customizable Workflows",
      L4: "Custom Code",
      L5: "Dedicated support and training",
      button2: "Book a Call",
      isSwitchOn: true,
    },
  ];
  const handleScheme = (scheme, plan, currency) => {
    router.push(
      `https://app.digisquares.com/register?scheme=${scheme}&plan=${plan}&currency=${currency}&isactive=1&isagent=1`
    );
  };

  const [contents1, setContents1] = useState(contents);
  const [isGlowing, setIsGlowing] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("Premium");
  const [currency, setCurrency] = useState("USD");

  const handleCurrency = (val) => {
    setCurrency(val.target.value);
  };
  const handleDivClick = (planName) => {
    setSelectedPlan(planName);
  };

  useEffect(() => {
    let interval;
    if (!isGlowing) {
      interval = setInterval(() => {
        setIsGlowing(true);
        setTimeout(() => setIsGlowing(false), 15000);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isGlowing]);

  const handleSwitchToggle = (id) => {
    setContents1(
      contents1.map((content) =>
        content.id === id
          ? { ...content, isSwitchOn: !content.isSwitchOn }
          : content
      )
    );
  };


  const [activeKeys, setActiveKeys] = useState<any>([]);

  const handlePanelChange = (key) => {
    setActiveKeys((prevActiveKeys) =>
      prevActiveKeys.includes(key)
        ? prevActiveKeys.filter((k) => k !== key)
        : [...prevActiveKeys, key]
    );
  };

  const isPanelActive = (key) => activeKeys.includes(key);

  // useEffect(() => {
  //   if (filteredData.length > 0) {
  //     setContents1((prevContents) => {
  //       return prevContents.map((content) => {
  //         const matchedData = filteredData.find((item) =>content.button1 === item.name && item.name !== "Enterprise");
  //         // const conversionRates = {
  //         //   INR: 82,
  //         //   USD: 1,
  //         //   EUR: 0.85,
  //         //   GBP: 0.79,
  //         // };

  //         // const symbols = {
  //         //   INR: "₹",
  //         //   USD: "$",
  //         //   EUR: "€",
  //         //   GBP: "£",
  //         // };
  //         console.log("yearly money",matchedData?.features?.price?.monthly,matchedData?.features?.price?.yearly);
  //         if (content.button1 === "Enterprise") {
  //           return {
  //             ...content,
  //             M_amount_Usd: `Let's Talk!`,
  //             Y_amount_Usd: `Let's Talk!`,
  //           };
  //         }

  //         if (matchedData) {
  //           const conversionRate = exchangeRates[currency] || 1;
  //           const symbol = symbols[currency] || "$";

  //           let monthlyPriceInSelectedCurrency = (matchedData?.features?.price?.monthly * conversionRate).toFixed();

  //           let yearlyPriceInSelectedCurrency = (matchedData?.features?.price?.yearly * conversionRate).toFixed();

  //           // let monthlyPriceInSelectedCurrency = Math.round(
  //           //   matchedData?.features?.price?.monthly * conversionRate
  //           // );

  //           // let yearlyPriceInSelectedCurrency = Math.round(
  //           //   matchedData?.features?.price?.yearly * conversionRate
  //           // );

  //           // if (currency !== "USD") {
  //           //   monthlyPriceInSelectedCurrency = roundToNearest5or0(
  //           //     monthlyPriceInSelectedCurrency
  //           //   );
  //           //   yearlyPriceInSelectedCurrency = roundToNearest5or0(
  //           //     yearlyPriceInSelectedCurrency
  //           //   );
  //           // }

  //           return {
  //             ...content,
  //             M_amount_Usd: `${symbol}${monthlyPriceInSelectedCurrency}`,
  //             Y_amount_Usd: `${symbol}${yearlyPriceInSelectedCurrency}`,
  //           };
  //         } else {
  //           return content;
  //         }
  //       });
  //     });
  //   }
  // }, [filteredData, currency]);

  const formatPrice = (usdBase: number, currency: string): string => {
    const rate = exchangeRates[currency] || 1;
    const symbol = symbols[currency] || "$";
    return `${symbol} ${(usdBase * rate).toFixed(0)}/month`;
  };

  const formatYearly = (usdBase: number, currency: string): string => {
    const yearly = usdBase;
    const rate = exchangeRates[currency] || 1;
    const symbol = symbols[currency] || "$";
    return `${symbol} ${(yearly * rate).toFixed(0)}/year`;
  };

  const Data = [
    {
      name: "Pricing Plans",
      features: [
        {
          feature: "Pricing",
          basic: formatPrice(49, currency),
          standard: formatPrice(79, currency),
          premium: formatPrice(99, currency),
          enterprise: "Custom"
        },
        {
          className: "pricingRow",
          feature: "Yearly Pricing",
          basic: formatYearly(490, currency),
          standard: formatYearly(790, currency),
          premium: formatYearly(990, currency),
          enterprise: "Custom"
        },
        {
          feature: "Tokens Included",
          basic: "1 million",
          standard: "1 million",
          premium: "1 million",
          enterprise: "Custom",
        },
        {
          className: "TokenRow",
          feature: "Additional Tokens",
          basic: `${formatPrice(49, currency)} per million tokens, unused tokens can be carried over to the next month`,
          standard: `${formatPrice(79, currency)} per million tokens, unused tokens can be carried over to the next month`,
          premium: `${formatPrice(99, currency)} per million tokens, unused tokens can be carried over to the next month`,
          enterprise: "Custom pricing based on volume, unused tokens can be carried over to the next month"
        },
        {
          feature: "Vector Storage",
          basic: "500 MB included",
          standard: "1 GB included",
          premium: "1 GB included",
          enterprise: "No limit",
        },
        {
          feature: "Additional Vector Storage",
          basic: `${formatPrice(10, currency)} per GB`,
          standard: `${formatPrice(10, currency)} per GB`,
          premium: `${formatPrice(10, currency)} per GB`,
          enterprise: `${formatPrice(10, currency)} per GB`
        },
        {
          feature: "Essential AI tasks",
          basic: "Yes",
          standard: "Yes",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "Web access",
          basic: "Yes",
          standard: "Yes",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "Integration to custom web",
          basic: "Yes",
          standard: "Yes",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "User management",
          basic: "Yes",
          standard: "Yes",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "Role-based access control",
          basic: "Yes",
          standard: "Yes",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "OAuth support",
          basic: "No",
          standard: "Yes",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "Social sign-ins",
          basic: "No",
          standard: "No",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          className: "pricingRow",
          feature:
            "Integration with Channels (e.g., Slack, Messenger, Microsoft Teams)",
          basic: "No",
          standard: "Yes",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "Integration with External APIs and Services",
          basic: "No",
          standard: "Yes",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "Customizable Workflows and Automation",
          basic: "No",
          standard: "No",
          premium: "No",
          enterprise: "Yes",
        },
        {
          feature: "Custom Code",
          basic: "No",
          standard: "No",
          premium: "No",
          enterprise: "Yes",
        },
        {
          feature: "Dedicated Database",
          basic: "No",
          standard: "No",
          premium: "No",
          enterprise: "Yes",
        },
        {
          feature: "Mobile Apps (Android and iOS)",
          basic: "No",
          standard: "No",
          premium: "No",
          enterprise: "Yes",
        },
        {
          feature: "Dedicated support and training",
          basic: "No",
          standard: "No",
          premium: "No",
          enterprise: "Yes",
        },
        {
          feature: "Custom Integration Services",
          basic: "No",
          standard: "No",
          premium: "No",
          enterprise: "Yes",
        },
        {
          feature: "File vector management",
          basic: "Yes",
          standard: "Yes",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "Vector search for master database data",
          basic: "Yes",
          standard: "Yes",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "Vector search for API data",
          basic: "Yes",
          standard: "Yes",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "Vector search for file content",
          basic: "Yes",
          standard: "Yes",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "Vector search for website content",
          basic: "Yes",
          standard: "Yes",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "Q&A Capabilities",
          basic: "Basic",
          standard: "Enhanced",
          premium: "Advanced",
          enterprise: "Advanced",
        },
        {
          feature: "Database Search",
          basic: "Basic",
          standard: "Advanced",
          premium: "Advanced",
          enterprise: "Advanced",
        },
        {
          feature: "Dynamic Query Generation and Execution",
          basic: "Basic",
          standard: "Advanced",
          premium: "Advanced",
          enterprise: "Advanced",
        },
        {
          feature: "AI Builder",
          basic: "Basic",
          standard: "Advanced",
          premium: "Advanced",
          enterprise: "Advanced",
        },
        {
          feature: "Vector Search Capabilities",
          basic: "Limited by storage and tokens",
          standard: "Limited by storage and tokens",
          premium: "Limited by storage and tokens",
          enterprise: "Limited by storage and tokens",
        },
        {
          feature: "Monitoring and Reporting",
          basic: "No",
          standard: "Basic",
          premium: "Basic",
          enterprise: "Advanced",
        },
        {
          feature: "Data Analysis",
          basic: "No",
          standard: "No",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "Chart Creation",
          basic: "No",
          standard: "No",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "Report Creation",
          basic: "No",
          standard: "No",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "Image Generation",
          basic: "No",
          standard: "No",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "Text-to-Speech (TTS)",
          basic: "No",
          standard: "No",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "AI Flows API for custom web apps",
          basic: "No",
          standard: "No",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "Premium Support",
          basic: "No",
          standard: "No",
          premium: "Yes",
          enterprise: "Yes",
        },
        {
          feature: "SLA Guarantees",
          basic: "99%",
          standard: "99.5%",
          premium: "99.9%",
          enterprise: "99.95%",
        },
      ],
    },
  ];


  const items = [
    {
      key: "1",
      label: " What are the pricing options for the Ai Agent?",
      children: (
        <p>
          <strong>Basic Plan:</strong> $49/month or $490/year (14 months for the
          price of 12). <strong>Standard Plan:</strong> $79/month or $790/year
          (14 months for the price of 12). <strong>Premium Plan:</strong>{" "}
          $99/month or $990/year (14 months for the price of 12).{" "}
          <strong>Enterprise Plan:</strong> Custom pricing.
        </p>
      ),
      showArrow: false,
      extra: isPanelActive("1") ? (
        <Image
          src={"/assets/minus.svg"}
          width={20}
          height={30}
          alt="MinusIcon"
        />
      ) : (
        <Image
          src={"/assets/plus.svg"}
          width={20}
          height={30}
          alt="MinusIcon"
        />
      ),
    },
    {
      key: "2",
      label: "How many tokens are included in each plan, and what are the additional token costs?",
      children: (
        <p>
          <strong>Tokens Included:</strong> Basic, Standard, Premium plans
          include 1 million tokens each. Enterprise is custom.{" "}
          <strong>Additional Tokens:</strong> $49 per million tokens, with
          custom pricing for Enterprise based on volume.
        </p>
      ),
      showArrow: false,
      extra: isPanelActive("2") ? (
        <Image
          src={"/assets/minus.svg"}
          width={30}
          height={30}
          alt="MinusIcon"
        />
      ) : (
        <Image
          src={"/assets/plus.svg"}
          width={20}
          height={30}
          alt="MinusIcon"
        />
      ),
    },
    {
      key: "3",
      label: "What vector storage is included in each plan, and what are the additional storage costs?",
      children: (
        <p>
          <strong>Included Vector Storage:</strong> Basic: 500 MB, Standard: 1
          GB, Premium: 1 GB, Enterprise: No limit.{" "}
          <strong>Additional Vector Storage Cost:</strong> $10 per GB for all
          plans.
        </p>
      ),
      showArrow: false,
      extra: isPanelActive("3") ? (
        <Image
          src={"/assets/minus.svg"}
          width={20}
          height={30}
          alt="MinusIcon"
        />
      ) : (
        <Image
          src={"/assets/plus.svg"}
          width={20}
          height={30}
          alt="MinusIcon"
        />
      ),
    },
    {
      key: "4",
      label: "Which features are available in all plans?",
      children: (
        <p>
          All plans include essential AI tasks, web access, integration to
          custom web, user management, role-based access control, file vector
          management, and various vector search capabilities.
        </p>
      ),
      showArrow: false,
      extra: isPanelActive("4") ? (
        <Image
          src={"/assets/minus.svg"}
          width={20}
          height={30}
          alt="MinusIcon"
        />
      ) : (
        <Image
          src={"/assets/plus.svg"}
          width={20}
          height={30}
          alt="MinusIcon"
        />
      ),
    },
    {
      key: "5",
      label: "Which advanced features are exclusive to the Enterprise plan?",
      children: (
        <p>
          Enterprise plan includes customizable workflows and automation, custom
          code, dedicated database, mobile apps (Android and iOS), dedicated
          support and training, and custom integration services.
        </p>
      ),
      showArrow: false,
      extra: isPanelActive("5") ? (
        <Image
          src={"/assets/minus.svg"}
          width={20}
          height={30}
          alt="MinusIcon"
        />
      ) : (
        <Image
          src={"/assets/plus.svg"}
          width={20}
          height={30}
          alt="MinusIcon"
        />
      ),
    },
    {
      key: "6",
      label: "What support and service level agreements (SLA) are offered in each plan?",
      children: (
        <p>
          <strong>Basic Plan:</strong> No premium support, SLA of 99%.{" "}
          <strong>Standard Plan:</strong> No premium support, SLA of 99.5%.{" "}
          <strong>Premium Plan:</strong> Includes premium support, SLA of 99.9%.{" "}
          <strong>Enterprise Plan:</strong> Includes premium support, SLA of
          99.95%.
        </p>
      ),
      showArrow: false,
      extra: isPanelActive("6") ? (
        <Image
          src={"/assets/minus.svg"}
          width={20}
          height={30}
          alt="MinusIcon"
        />
      ) : (
        <Image
          src={"/assets/plus.svg"}
          width={20}
          height={30}
          alt="MinusIcon"
        />
      ),
    },
  ];
  const getAmount = (content, currency) => {
    switch (currency) {
      case "INR":
        return content.isSwitchOn ? content.Y_amount : content.M_amount;
      case "USD":
        return content.isSwitchOn ? content.Y_amount_Usd : content.M_amount_Usd;
      case "EUR":
        return content.isSwitchOn ? content.Y_amount_EUR : content.M_amount_Eur;
      case "GBP":
        return content.isSwitchOn ? content.Y_amount_GBP : content.M_amount_GBP;
      default:
        return content.isSwitchOn ? content.Y_amount_Usd : content.M_amount_Usd;
    }
  };
  const [planSelected, setPlanSelected] = useState("basic");

  const plans = ["basic", "standard", "premium", "enterprise"];

  const handlePlanChange = (value: any) => {
    setPlanSelected(value);
  };

  const MobFeatureCollapse = Data.map((item, index) => ({
    key: String(index + 1),
    label: item.name,
    children: (
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
        <tbody>
          {item.features.map((feature, featureIndex) => (
            <tr key={featureIndex} style={{ borderBottom: '1px solid #ddd', }}>
              <td style={{ padding: '10px', fontWeight: 600, color: '#1D4965', fontSize: '1rem' }}>{feature.feature}</td>
              <td style={{ padding: '10px', textAlign: 'center' }}>
                <h2 style={{ margin: '0px', fontSize: '.9rem', color: "black", textAlign: "left" }}>
                  {planSelected === "basic" && (feature.basic !== undefined ? feature.basic : '-')}
                  {planSelected === "standard" && (feature.standard !== undefined ? feature.standard : '-')}
                  {planSelected === "premium" && (feature.premium !== undefined ? feature.premium : '-')}
                  {planSelected === "enterprise" && (feature.enterprise !== undefined ? feature.enterprise : '-')}
                </h2>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ),
  }));
  return (
    <BaseLayout>
      <div className={styles.CopilotMain}>

        <div className={styles.CopilotHeadings}>
          <h2
          >
            Choose Your AI Agent!
          </h2>

          <span
            className={styles.CopilotCurrencySelectComp}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "100%",
              marginTop: 5,
            }}
          >
            <h6
              style={{
                // fontSize: "18px",
                // lineHeight: "30px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                gap: "20px",
                justifyContent: "center",
                margin: 0,
              }}
            >
              Pick your currency
              <Select
                defaultValue={currency}
                style={{ width: "100px", position: "relative" }}
                onChange={handleCurrency}
              >
                {Object.entries(symbols).map(([code, symbol]) => (
                  <Option key={code} value={code}>
                    {code}
                  </Option>
                ))}
              </Select>
            </h6>
          </span>
        </div>

        <div
          className={styles.CopilotPricing}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className={styles.CopilotPricingCardComp}
            style={{
              display: "flex",
              alignItems: "normal",
              borderRadius: "10px ",
              width: "100%",
              gap: "30px",
            }}
          >
            {contents1.map((content, index) => (
              <div
                className={styles.CopilotPricingCard}
                key={index}
                style={{
                  ...divStyle,
                  ...(selectedPlan === content.button1 ? selectedDivStyle : {}),
                  borderRadius: "10px",
                  borderColor:
                    selectedPlan === content.button1 ? "#1D4965" : "#DDDDDD",
                }}
                onClick={() => handleDivClick(content.button1)}
              >
                {content.button1 === "Premium" ? (
                  <div style={{ width: '100%', display: "flex", justifyContent: 'center' }}>  <div
                    className={`MostPopular ${isGlowing ? "glow" : ""}`}
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "#50B1ED",
                      width: "200px",
                      height: "30px",
                      textAlign: "center",
                      margin: "-20px 0px 7px 0px",
                      position:
                        selectedPlan === "Premium" ? "absolute" : "relative",
                      top: selectedPlan === "Premium" ? "0px" : "-20px",
                    }}
                  >
                    <p
                      style={{
                        position:
                          selectedPlan === "Premium" ? "relative" : "relative",
                        color: "#000000",
                        bottom: selectedPlan === "Premium" ? "10px" : "15px",
                      }}
                    >
                      Most Popular
                    </p>
                  </div></div>

                ) : (
                  ""
                )}
                <div
                  className={styles.CopilotPricingHeader}
                  style={{
                    backgroundColor: "#1D4965",
                    position:
                      selectedPlan === "Premium"
                        ? "static"
                        : content.id === "3"
                          ? "relative"
                          : "static",
                    top: selectedPlan === "Premium" ? "" : "-20px",
                  }}
                >
                  <div
                    style={{
                      color: "white",
                      fontSize: "20px",
                      padding: "10px",
                      textAlign: "center",
                      margin: "0px",
                    }}
                  >
                    {content.button1}
                  </div>
                </div>
                <p
                  className={styles.CopilotPricingPara}
                  style={{
                    padding: "10px",
                    color: "#656d76",
                    position:
                      selectedPlan === "Premium"
                        ? "static"
                        : content.id === "3"
                          ? "relative"
                          : "static",
                    top: selectedPlan === "Premium" ? "" : "-20px",
                  }}
                >
                  {content.paragraph}
                </p>
                <div
                  style={{
                    height: '50px',
                    display: content.button1 === "Free" ? " " : "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position:
                      selectedPlan === "Premium"
                        ? "static"
                        : content.id === "3"
                          ? "relative"
                          : "static",
                    top: selectedPlan === "Premium" ? "" : "-20px",
                  }}
                >
                  <div style={{}}>
                    {content.button1 === "Free" ? (
                      " "
                    ) : content.button1 === "Enterprise" ? (
                      " "
                    ) : (
                      <button
                        onClick={() => handleSwitchToggle(content.id)}
                        style={{
                          display: "inline-block",
                          width: "40px",
                          height: "20px",
                          backgroundColor: content.isSwitchOn
                            ? "#1D4965"
                            : "#ccc",
                          borderRadius: "20px",
                          border: "none",
                          cursor: "pointer",
                          position: "relative",
                          padding: "0",
                          transition: "background-color 0.3s",
                        }}
                      >
                        <span
                          style={{
                            display: "block",
                            width: "18px",
                            height: "18px",
                            backgroundColor: "#fff",
                            borderRadius: "50%",
                            position: "absolute",
                            top: "1px",
                            left: content.isSwitchOn ? "20px" : "1px",
                            transition: "left 0.3s",
                            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                          }}
                        />
                      </button>
                    )}
                  </div>
                  <div
                    style={{
                      border:
                        content.button1 === "Free" ||
                          content.button1 === "Enterprise"
                          ? ""
                          : content.isSwitchOn
                            ? "2px solid #1D4965"
                            : "1px solid grey",
                      borderRadius:
                        content.button1 === "Free" ||
                          content.button1 === "Enterprise"
                          ? ""
                          : "30px",
                      width:
                        content.button1 === "Free" ||
                          content.button1 === "Enterprise"
                          ? ""
                          : "110px",
                      textAlign: "center",
                    }}
                  >
                    <p
                      onClick={() => handleSwitchToggle(content.id)}
                      style={{
                        color:
                          content.isSwitchOn === false ? "grey" : "#1D4965",
                        margin: "0px",
                        textDecorationLine:
                          content.isSwitchOn === false ? "line-through" : "",
                        padding: "3px",
                      }}
                    >
                      {content.button1 === "Free"
                        ? " "
                        : content.button1 === "Enterprise"
                          ? " "
                          : content.isSwitchOn === true
                            ? "20% SAVING"
                            : "20% SAVING"}
                    </p>
                  </div>
                </div>
                <div
                  className={styles.CopilotAmount}
                  style={{
                    position:
                      selectedPlan === "Premium"
                        ? "static"
                        : content.id === "3"
                          ? "relative"
                          : "static",
                    top: selectedPlan === "Premium" ? "" : "-20px",
                  }}
                >
                  <h4 className={styles.H_tag}>
                    {getAmount(content, currency)}
                  </h4>
                  <p>{content.isSwitchOn ? content.yearly : content.month}</p>
                </div>
                <div
                  className={styles.FeaturesList}
                  style={{
                    position:
                      selectedPlan === "Premium"
                        ? "static"
                        : content.id === "3"
                          ? "relative"
                          : "static",
                    top: selectedPlan === "Premium" ? "" : "-20px",
                  }}
                >
                  <div className={styles.SubFeature}>
                    {content.icon}
                    <p>{content.L1}</p>
                  </div>
                  <div className={styles.SubFeature}>
                    {content.icon}
                    <p>{content.L2}</p>
                  </div>
                  <div className={styles.SubFeature}>
                    {content.icon}
                    <p>{content.L3}</p>
                  </div>
                  <div className={styles.SubFeature}>
                    {content.L4 === " " ? "" : content.icon}
                    <p>{content.L4}</p>
                  </div>
                  <div className={styles.SubFeature}>
                    {content.L5 === " " ? "" : content.icon}
                    <p>{content.L5}</p>
                  </div>
                </div>
                <div
                  className={styles.GetStarted}
                  style={{
                    position:
                      selectedPlan === "Premium"
                        ? "static"
                        : content.id === "3"
                          ? "relative"
                          : "static",
                    top: selectedPlan === "Premium" ? "" : "-20px",
                  }}
                >
                  <button
                    style={{
                      backgroundColor:
                        content.button2 === "Book a Call" ? "#1D4965" : "",
                      color: content.button2 === "Book a Call" ? "white" : "",
                    }}
                    onClick={() =>
                      handleScheme(
                        content.button1,
                        content.isSwitchOn ? "Yearly" : "Monthly",
                        currency
                      )
                    }
                  >
                    {content.button2}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.CopilotCompareFeatures}>
          <div
            style={{
              position: "sticky",
              top: "-20px",
              background: "white",
              height: "100px",
              width: '100%'
            }}
          >
            <h2
            >
              Compare features
            </h2>
          </div>
          <div
            className={styles.CopilotSubsFeatures}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid black",
              borderBottom: "1px solid black",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                height: "65px",
                textAlign: "center",
                fontSize: "16px",
                position: "sticky",
                top: "80px",
              }}
            >
              <div style={FeatureColStyle1}>
                <h2
                  className={styles.H_tag}
                  style={{ fontSize: "20px", color: "white" }}
                >
                  Features
                </h2>
              </div>
              <div style={FreeColStyle}>
                <h2
                  className={styles.H_tag}
                  style={{ fontSize: "20px", color: "white" }}
                >
                  Basic
                </h2>
              </div>
              <div style={StarterColStyle} className={styles.CopilotFeaturesH2}>
                <h2 className={styles.H_tag}>Standard</h2>
              </div>
              <div
                style={ProfessionalColStyle}
                className={styles.CopilotFeaturesH2}
              >
                <h2 className={styles.H_tag}>Premium</h2>
              </div>
              <div
                style={EnterpriseColStyle}
                className={styles.CopilotFeaturesH2}
              >
                <h2 className={styles.H_tag}>Enterprise</h2>
              </div>
            </div>
            <div className={styles.CopilotSubComp}>
              {Data.map((sData, i) => (
                <div key={i}>
                  <div className={styles.CopilotFeaturesTitle}>
                    <h3 className={styles.H_tag}>{sData.name}</h3>
                  </div>
                  {sData.features.map((fData, index) => (
                    <div
                      className={styles.Features}
                      style={{
                        backgroundColor: index % 2 === 1 ? "#f2f6f7" : "white",
                      }}
                      key={index}
                    >
                      <div
                        style={
                          fData.className === "TokenRow"
                            ? TokenRowStyle
                            : fData.className === "pricingRow"
                              ? Style
                              : FeatureColStyle
                        }
                        className={styles.FeaturesColumn}
                      >
                        <h4 className={styles.H_tag}>{fData.feature}</h4>
                      </div>
                      <div
                        style={
                          fData.className === "TokenRow"
                            ? TokenRowStyle
                            : fData.className === "pricingRow"
                              ? Style
                              : FeatureColStyle
                        }
                        className={styles.FreeCol}
                      >
                        <h5 className={styles.H_tag}>{fData.basic}</h5>
                      </div>
                      <div
                        style={
                          fData.className === "TokenRow"
                            ? TokenRowStyle
                            : fData.className === "pricingRow"
                              ? Style
                              : FeatureColStyle
                        }
                        className={styles.StarterCol}
                      >
                        <h5 className={styles.H_tag}>{fData.standard}</h5>
                      </div>
                      <div
                        style={
                          fData.className === "TokenRow"
                            ? TokenRowStyle
                            : fData.className === "pricingRow"
                              ? Style
                              : FeatureColStyle
                        }
                        className={styles.ProfessionalCol}
                      >
                        <h5 className={styles.H_tag}>{fData.premium}</h5>
                      </div>
                      <div
                        style={
                          fData.className === "TokenRow"
                            ? TokenRowStyle
                            : fData.className === "pricingRow"
                              ? Style
                              : FeatureColStyle
                        }
                        className={styles.Enterprise}
                      >
                        <h5 className={styles.H_tag}>{fData.enterprise}</h5>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.MobCompareFeatures}>
          <div
            style={{
              height: "70px",
              width: '100%'
            }}
          >
            <h2>
              Compare features
            </h2>
          </div>
          <div style={{ width: "100%", display: 'flex', alignItems: "baseline", justifyContent: 'space-between' }}>
            <h2 style={{ width: '30%' }}>Price Plans:</h2>
            <Select
              defaultValue={planSelected}
              onChange={(e) => handlePlanChange(e)}
              style={{ width: "68%", marginBottom: "20px" }}
            >
              {plans.map((plan, index) => (
                <Option key={index} value={plan}>
                  {plan.charAt(0).toUpperCase() + plan.slice(1)}
                </Option>
              ))}
            </Select>
          </div>


          <Collapse
            defaultActiveKey={['1']}
            accordion
            bordered={false}
            style={{ backgroundColor: "#F5F5F5", borderRadius: "4px", width: '100%' }}
            expandIcon={({ isActive }) => <CaretRightOutlined style={{ color: '#1D4965' }} rotate={isActive ? 90 : 0} />}
          >
            {MobFeatureCollapse.map((item) => (
              <Panel
                key={item.key}
                header={
                  <span style={{ fontWeight: "bold", color: "#1D4965" }}>
                    {item.label}
                  </span>
                }
                style={{
                  marginBottom: "10px",
                  borderRadius: "4px",
                  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
                }}
              >
                {item.children}
              </Panel>
            ))}
          </Collapse>
        </div>

        <div className={styles.FAQ}>
          <h2
          >
            Frequently Asked Questions
          </h2>
          <div className={styles.custom_collapse}>
            {items.map((item, index) => (
              <div
                key={item.key}
                className={styles.custom_collapse_item}
                style={{
                  borderTopLeftRadius: item.key === "1" ? "10px" : "",
                  borderTopRightRadius: item.key === "1" ? "10px" : "",
                  borderBottomLeftRadius:
                    index === items.length - 1 ? "10px" : "",
                  borderBottomRightRadius:
                    index === items.length - 1 ? "10px" : "",
                }}
              >
                <div
                  className={styles.custom_collapse_header}
                  onClick={() => handlePanelChange(item.key)}
                  style={{
                    height: "60px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "10px",
                    cursor: "pointer",
                    backgroundColor: "#FAFAFA",
                    borderTopLeftRadius: item.key === "1" ? "10px" : "",
                    borderTopRightRadius: item.key === "1" ? "10px" : "",
                    borderBottomLeftRadius:
                      index === items.length - 1 ? "10px" : "",
                    borderBottomRightRadius:
                      index === items.length - 1 ? "10px" : "",
                  }}
                >
                  <span style={{ width: '90%' }}>{item.label}</span>
                  <span>{item.extra}</span>
                </div>
                {isPanelActive(item.key) && (
                  <div
                    className={styles.custom_collapse_content_inner}
                    style={{ padding: "15px" }}
                  >
                    {item.children}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </BaseLayout>
  );
};

export default CopilotPricing;
