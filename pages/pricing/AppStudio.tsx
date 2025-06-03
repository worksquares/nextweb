import { CaretRightOutlined, CheckOutlined } from "@ant-design/icons";
import { Collapse, Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import router from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import BaseLayout from "../../comp/BaseLayout";
import styles from "../../styles/pricing/newPricing.module.css";
const { Option } = Select;
const { Panel } = Collapse;
const FeatureColStyle = {
  borderRight: "1px solid #A5A5A5",
  padding: "15px",
  width: "20%",
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

const StandardColStyle = {
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

const FeatureCol2Style = {
  borderRight: "1px solid #A5A5A5",
  padding: "15px",
  width: "20%",
  borderLeft: "1px solid black",
  backgroundColor: "white",
};
const NewPricing = () => {

  const contents = useMemo(() => [
    {
      id: "1",
      button1: "Starter",
      paragraph:
        "Ideal for those who have already got their website up and running and are seeking assistance to enhance and update it further.",
      M_amount: "₹12,000",
      Y_amount: "₹1,29,600",
      M_amount_Usd: "$150",
      Y_amount_Usd: "$1,620",
      M_amount_eur: "€150",
      Y_amount_eur: "€1,620",
      M_amount_aed: "د.إ600",
      Y_amount_aed: "د.إ6,480",
      M_amount_pnd: "£120",
      Y_amount_pnd: "£1,300",
      M_amount_aud: "AU$230",
      Y_amount_aud: "AU$2,479",
      M_amount_cad: "CA$205",
      Y_amount_cad: "CA$2,219",
      M_amount_sgd: "S$203",
      Y_amount_sgd: "S$2,187",
      M_amount_hkd: "HK$1,163",
      Y_amount_hkd: "HK$12,555",
      M_amount_chf: "CHF135",
      Y_amount_chf: "CHF1,458",
      M_amount_cny: "¥1,050",
      Y_amount_cny: "¥11,340",
      M_amount_jpy: "¥22,050",
      Y_amount_jpy: "¥2,38,140",
      M_amount_nzd: "NZ$250",
      Y_amount_nzd: "NZ$2,705",
      M_amount_sek: "Skr1,575",
      Y_amount_sek: "Skr17,010",
      M_amount_nok: "Nkr1,560",
      Y_amount_nok: "Nkr16,850",
      M_amount_dkk: "Dkr1,028",
      Y_amount_dkk: "Dkr11,097",
      M_amount_thb: "฿5,325",
      Y_amount_thb: "฿57,510",
      M_amount_myr: "RM701",
      Y_amount_myr: "RM7,569",
      M_amount_php: "₱8,490",
      Y_amount_php: "₱91,692",
      M_amount_rub: "₽13,950",
      Y_amount_rub: "₽1,50,660",
      month: "/month",
      yearly: "/yearly",
      icon: <CheckOutlined style={{ fontSize: "12px" }} />,
      L1: "Included Users",
      L2: "1 environment",
      L3: "1 app included",
      L4: "Workflow available",
      L5: " ",
      button2: "Get Started",
      isSwitchOn: false,
    },
    {
      id: "2",
      button1: "Standard",
      paragraph:
        "Ideal for those who have already got their website up and running and are seeking assistance to enhance and update it further.",
      M_amount: "₹24,000",
      Y_amount: "₹2,59,200",
      M_amount_Usd: "$300",
      Y_amount_Usd: "$3,240",
      M_amount_eur: "€300",
      Y_amount_eur: "€3,240",
      M_amount_aed: "د.إ1,200",
      Y_amount_aed: "د.إ12,960",
      M_amount_pnd: "£240",
      Y_amount_pnd: "£2,600",
      M_amount_aud: "AU$459",
      Y_amount_aud: "AU$5,008",
      M_amount_cad: "CA$411",
      Y_amount_cad: "CA$4,438",
      M_amount_sgd: "S$406",
      Y_amount_sgd: "S$4,374",
      M_amount_hkd: "HK$2,325",
      Y_amount_hkd: "HK$25,110",
      M_amount_chf: "CHF270",
      Y_amount_chf: "CHF2,916",
      M_amount_cny: "¥2,100",
      Y_amount_cny: "¥23,688",
      M_amount_jpy: "¥44,100",
      Y_amount_jpy: "¥4,76,280",
      M_amount_nzd: "NZ$500",
      Y_amount_nzd: "NZ$5,410",
      M_amount_sek: "Skr3,150",
      Y_amount_sek: "Skr35,020",
      M_amount_nok: "Nkr3,120",
      Y_amount_nok: "Nkr33,700",
      M_amount_dkk: "Dkr2,056",
      Y_amount_dkk: "Dkr22,194",
      M_amount_thb: "฿10,650",
      Y_amount_thb: "฿1,15,020",
      M_amount_myr: "RM1,402",
      Y_amount_myr: "RM15,138",
      M_amount_php: "₱16,980",
      Y_amount_php: "₱1,83,384",
      M_amount_rub: "₽27,900",
      Y_amount_rub: "₽3,01,320",
      month: "/month",
      yearly: "/yearly",
      icon: <CheckOutlined style={{ fontSize: "12px" }} />,
      L1: "Third-Party API Integrations",
      L2: "5 apps included",
      L3: "Dashboard builder",
      L4: "Support (Email)",
      L5: " ",
      button2: "Get Started",
      isSwitchOn: false,
    },
    {
      id: "4",
      button1: "Premium",
      paragraph:
        "Ideal if you want to build or Scale your website fast,with the strategy calls included.",
      M_amount: "₹48,000",
      Y_amount: "₹5,18,400",
      M_amount_Usd: "$600",
      Y_amount_Usd: "$6,480",
      M_amount_eur: "€600",
      Y_amount_eur: "€6,480",
      M_amount_aed: "د.إ2,400",
      Y_amount_aed: "د.إ25,920",
      M_amount_pnd: "£480",
      Y_amount_pnd: "£5,200",
      M_amount_aud: "AU$918",
      Y_amount_aud: "AU$10,016",
      M_amount_cad: "CA$822",
      Y_amount_cad: "CA$8,876",
      M_amount_sgd: "S$812",
      Y_amount_sgd: "S$8,748",
      M_amount_hkd: "HK$4,650",
      Y_amount_hkd: "HK$50,220",
      M_amount_chf: "CHF540",
      Y_amount_chf: "CHF5,832",
      M_amount_cny: "¥4,200",
      Y_amount_cny: "¥47,376",
      M_amount_jpy: "¥88,200",
      Y_amount_jpy: "¥9,52,560",
      M_amount_nzd: "NZ$1,000",
      Y_amount_nzd: "NZ$10,820",
      M_amount_sek: "Skr6,300",
      Y_amount_sek: "Skr70,040",
      M_amount_nok: "Nkr6,240",
      Y_amount_nok: "Nkr67,400",
      M_amount_dkk: "Dkr4,112",
      Y_amount_dkk: "Dkr44,388",
      M_amount_thb: "฿21,300",
      Y_amount_thb: "฿2,30,040",
      M_amount_myr: "RM2,804",
      Y_amount_myr: "RM30,276",
      M_amount_php: "₱33,960",
      Y_amount_php: "₱3,66,768",
      M_amount_rub: "₽55,800",
      Y_amount_rub: "₽6,02,640",
      month: "/month",
      yearly: "/yearly",
      icon: <CheckOutlined style={{ fontSize: "12px" }} />,
      L1: "3 environments",
      L2: "Unlimited apps",
      L3: "Theme designer for controls",
      L4: "Support (live chat)",
      L5: " ",
      button2: "Get Started",
      isSwitchOn: false,
    },
    {
      id: "5",
      button1: "Enterprise",
      paragraph:
        "If these plans don't fit,let's create one that suits.Customize your subscription for a perfect fit,bigger or smaller!",
      M_amount: "let's Talk!",
      Y_amount: "let's Talk!",
      M_amount_Usd: "let's Talk!",
      Y_amount_Usd: "let's Talk!",
      M_amount_eur: "let's Talk!",
      Y_amount_eur: "let's Talk!",
      M_amount_aed: "let's Talk!",
      Y_amount_aed: "let's Talk!",
      M_amount_pnd: "let's Talk!",
      Y_amount_pnd: "let's Talk!",
      M_amount_aud: "let's Talk!",
      Y_amount_aud: "let's Talk!",
      M_amount_cad: "let's Talk!",
      Y_amount_cad: "let's Talk!",
      M_amount_sgd: "let's Talk!",
      Y_amount_sgd: "let's Talk!",
      M_amount_hkd: "let's Talk!",
      Y_amount_hkd: "let's Talk!",
      M_amount_chf: "let's Talk!",
      Y_amount_chf: "let's Talk!",
      M_amount_cny: "let's Talk!",
      Y_amount_cny: "let's Talk!",
      M_amount_jpy: "let's Talk!",
      Y_amount_jpy: "let's Talk!",
      M_amount_nzd: "let's Talk!",
      Y_amount_nzd: "let's Talk!",
      M_amount_sek: "let's Talk!",
      Y_amount_sek: "let's Talk!",
      M_amount_nok: "let's Talk!",
      Y_amount_nok: "let's Talk!",
      M_amount_dkk: "let's Talk!",
      Y_amount_dkk: "let's Talk!",
      M_amount_thb: "let's Talk!",
      Y_amount_thb: "let's Talk!",
      M_amount_myr: "let's Talk!",
      Y_amount_myr: "let's Talk!",
      M_amount_php: "let's Talk!",
      Y_amount_php: "let's Talk!",
      M_amount_rub: "let's Talk!",
      Y_amount_rub: "let's Talk!",
      month: "",
      yearly: "",
      icon: <CheckOutlined style={{ fontSize: "12px" }} />,
      L1: "Custom domain support",
      L2: "Priority support",
      L3: "Source code availability",
      L4: "Dedicated customer success",
      L5: "Custom Code & Components",
      button2: "Book a Call",
      isSwitchOn: false,
    },
  ], []); // no dependencies so it only creates once

  const [currency, setCurrency] = useState("USD");
  const [cloudOrSelf, setCloudOrSelf] = useState("Cloud");
  const symbols = {
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
  const SelfHostedData = [
    {
      name: "Users",
      features: [
        {
          feature: "Price (Per Developer)",
          starter: {
            value:
              currency === "INR"
                ? "₹12,000/month ₹1,29,600/year"
                : currency === "USD"
                ? "$150/month $1,620/year"
                : currency === "EUR"
                ? "€150/month €1,620/year"
                : currency === "GBP"
                ? "£120/month £1,300/year"
                : currency === "AED"
                ? "د.إ600/month د.إ6,480/year"
                : currency === "AUD"
                ? "AU$230/month AU$2,479/year"
                : currency === "CAD"
                ? "CA$205/month CA$2,219/year"
                : currency === "SGD"
                ? "S$203/month S$2,187/year"
                : currency === "HKD"
                ? "HK$1,163/month HK$12,555/year"
                : currency === "CHF"
                ? "CHF135/month CHF1,458/year"
                : currency === "CNY"
                ? "¥1,050/month ¥11,340/year"
                : currency === "JPY"
                ? "¥22,050/month ¥2,38,140/year"
                : currency === "NZD"
                ? "NZ$250/month NZ$2,705/year"
                : currency === "SEK"
                ? "Skr1,575/month Skr17,010/year"
                : currency === "NOK"
                ? "Nkr1,560/month Nkr16,850/year"
                : currency === "DKK"
                ? "Dkr1,028/month Dkr11,097/year"
                : currency === "THB"
                ? "฿5,325/month ฿57,510/year"
                : currency === "MYR"
                ? "RM701/month RM7,569/year"
                : currency === "PHP"
                ? "₱8,490/month ₱91,692/year"
                : currency === "RUB"
                ? "₽13,950/month ₽1,50,660/year"
                : "$49/month",
            hasStar: false,
          },
          standard: {
            value:
              currency === "INR"
                ? "₹24,000/month ₹2,59,200/year (10% Off)"
                : currency === "USD"
                ? "$300/month $3,240/year (10% Off)"
                : currency === "EUR"
                ? "€300/month €3,240/year (10% Off)"
                : currency === "GBP"
                ? "£240/month £2,600/year (10% Off)"
                : currency === "AED"
                ? "د.إ1,200/month د.إ12,960/year (10% Off)"
                : currency === "AUD"
                ? "AU$459/month AU$5,008/year (10% Off)"
                : currency === "CAD"
                ? "CA$411/month CA$4,438/year (10% Off)"
                : currency === "SGD"
                ? "S$406/month S$4,374/year (10% Off)"
                : currency === "HKD"
                ? "HK$2,325/month HK$25,110/year (10% Off)"
                : currency === "CHF"
                ? "CHF270/month CHF2,916/year (10% Off)"
                : currency === "CNY"
                ? "¥2,100/month ¥23,688/year (10% Off)"
                : currency === "JPY"
                ? "¥44,100/month ¥4,76,280/year (10% Off)"
                : currency === "NZD"
                ? "NZ$500/month NZ$5,410/year (10% Off)"
                : currency === "SEK"
                ? "Skr3,150/month Skr35,020/year (10% Off)"
                : currency === "NOK"
                ? "Nkr3,120/month Nkr33,700/year (10% Off)"
                : currency === "DKK"
                ? "Dkr2,056/month Dkr22,194/year (10% Off)"
                : currency === "THB"
                ? "฿10,650/month ฿1,15,020/year (10% Off)"
                : currency === "MYR"
                ? "RM1,402/month RM15,138/year (10% Off)"
                : currency === "PHP"
                ? "₱16,980/month ₱1,83,384/year (10% Off)"
                : currency === "RUB"
                ? "₽27,900/month ₽3,01,320/year (10% Off)"
                : "$99/month",
            hasStar: false,
          },
          Premium: {
            value:
              currency === "INR"
                ? "₹48,000/month ₹5,18,400/year (10% Off)"
                : currency === "USD"
                ? "$600/month $6,480/year (10% Off)"
                : currency === "EUR"
                ? "€600/month €6,480/year (10% Off)"
                : currency === "GBP"
                ? "£480/month £5,200/year (10% Off)"
                : currency === "AED"
                ? "د.إ2,400/month د.إ25,920/year (10% Off)"
                : currency === "AUD"
                ? "AU$918/month AU$10,016/year (10% Off)"
                : currency === "CAD"
                ? "CA$822/month CA$8,876/year (10% Off)"
                : currency === "SGD"
                ? "S$812/month S$8,748/year (10% Off)"
                : currency === "HKD"
                ? "HK$4,650/month HK$50,220/year (10% Off)"
                : currency === "CHF"
                ? "CHF540/month CHF5,832/year (10% Off)"
                : currency === "CNY"
                ? "¥4,200/month ¥47,376/year (10% Off)"
                : currency === "JPY"
                ? "¥88,200/month ¥9,52,560/year (10% Off)"
                : currency === "NZD"
                ? "NZ$1,000/month NZ$10,820/year (10% Off)"
                : currency === "SEK"
                ? "Skr6,300/month Skr70,040/year (10% Off)"
                : currency === "NOK"
                ? "Nkr6,240/month Nkr67,400/year (10% Off)"
                : currency === "DKK"
                ? "Dkr4,112/month Dkr44,388/year (10% Off)"
                : currency === "THB"
                ? "฿21,300/month ฿2,30,040/year (10% Off)"
                : currency === "MYR"
                ? "RM2,804/month RM30,276/year (10% Off)"
                : currency === "PHP"
                ? "₱33,960/month ₱3,66,768/year (10% Off)"
                : currency === "RUB"
                ? "₽55,800/month ₽6,02,640/year (10% Off)"
                : "$199/month",
            hasStar: false,
          },
          enterprise: {
            value: "Custom Pricing (Contact Us)",
            hasStar: false,
          },
        },
        {
          feature: "Unlimited Users",
          starter: { value: "Included", hasStar: false },
          standard: { value: "Included", hasStar: false },
          Premium: { value: "Included", hasStar: false },
          enterprise: { value: "Included", hasStar: false },
        },
        {
          feature: "Number of Environments",
          starter: { value: "1", hasStar: false },
          standard: { value: "2", hasStar: true },
          Premium: { value: "3", hasStar: true },
          enterprise: { value: "4", hasStar: true },
        },
        {
          feature: "Number of Apps",
          starter: { value: "1", hasStar: false },
          standard: { value: "5", hasStar: true },
          Premium: { value: "Unlimited", hasStar: true },
          enterprise: { value: "Unlimited", hasStar: false },
        },
        {
          feature: "Web Application",
          starter: { value: "Available", hasStar: false },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Mobile Application",
          starter: { value: "Available", hasStar: false },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Dashboard Builder",
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Available", hasStar: true },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Workflow",
          starter: { value: "Available", hasStar: false },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Pageflow",
          starter: { value: "Available", hasStar: false },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Third-Party API Integrations",
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Available", hasStar: true },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Custom Code",
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Not available", hasStar: false },
          Premium: { value: "Not available", hasStar: false },
          enterprise: { value: "Available", hasStar: true },
        },
        {
          feature: "Custom Components",
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Not available", hasStar: false },
          Premium: { value: "Not available", hasStar: false },
          enterprise: { value: "Available", hasStar: true },
        },
        {
          feature: "Theme Designer for Controls",
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Not available", hasStar: false },
          Premium: { value: "Available", hasStar: true },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Advanced Report Building",
          starter: { value: "Available", hasStar: false },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Charts",
          starter: { value: "Available", hasStar: false },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Document Designing",
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Available", hasStar: true },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Email Designing",
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Available", hasStar: true },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Source Code Availability",
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Not available", hasStar: false },
          Premium: { value: "Not available", hasStar: false },
          enterprise: { value: "Available", hasStar: true },
        },
        {
          feature: "Support (Live Chat)",
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Not available", hasStar: false },
          Premium: { value: "Available", hasStar: true },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Support (Email)",
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Available", hasStar: true },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Support (Forum/Community)",
          starter: { value: "Available", hasStar: false },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Support (FAQ/Knowledgebase)",
          starter: { value: "Available", hasStar: false },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Support (Phone)",
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Not available", hasStar: true },
          Premium: { value: "Not available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Dedicated Customer Success Manager",
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Not available", hasStar: true },
          Premium: { value: "Not available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
      ],
    },
  ];

  const CloudHostedData = [
    {
      name: "Users",
      features: [
        {
          feature: "Price (Per Developer)",
          starter: {
            value:
              currency === "INR"
                ? "₹8,000/month ₹86,400/year (10% Off)"
                : currency === "USD"
                ? "$100/month $1,080/year (10% Off)"
                : currency === "EUR"
                ? "€100/month €1,080/year (10% Off)"
                : currency === "GBP"
                ? "£80/month £860/year (10% Off)"
                : currency === "AED"
                ? "د.إ400/month د.إ4,320/year (10% Off)"
                : currency === "AUD"
                ? "AU$153/month AU$1,652/year (10% Off)"
                : currency === "CAD"
                ? "CA$137/month CA$1,478/year (10% Off)"
                : currency === "SGD"
                ? "S$135/month S$1,458/year (10% Off)"
                : currency === "HKD"
                ? "HK$775/month HK$8,370/year (10% Off)"
                : currency === "CHF"
                ? "CHF90/month CHF972/year (10% Off)"
                : currency === "CNY"
                ? "¥700/month ¥7,560/year (10% Off)"
                : currency === "JPY"
                ? "¥14,700/month ¥1,58,760/year (10% Off)"
                : currency === "NZD"
                ? "NZ$167/month NZ$1,803/year (10% Off)"
                : currency === "SEK"
                ? "Skr1,050/month Skr11,340/year (10% Off)"
                : currency === "NOK"
                ? "Nkr1,040/month Nkr11,232/year (10% Off)"
                : currency === "DKK"
                ? "Dkr685/month Dkr7,398/year (10% Off)"
                : currency === "THB"
                ? "฿3,550/month ฿38,340/year (10% Off)"
                : currency === "MYR"
                ? "RM467/month RM5,042/year (10% Off)"
                : currency === "PHP"
                ? "₱5,660/month ₱61,560/year (10% Off)"
                : currency === "RUB"
                ? "₽9,300/month ₽1,01,160/year (10% Off)"
                : "$50/month $600/year",
            hasStar: false,
          },
          standard: {
            value:
              currency === "INR"
                ? "₹20,000/month ₹2,16,000/year (10% Off)"
                : currency === "USD"
                ? "$250/month $2,700/year (10% Off)"
                : currency === "EUR"
                ? "€250/month €2,700/year (10% Off)"
                : currency === "GBP"
                ? "£200/month £2,160/year (10% Off)"
                : currency === "AED"
                ? "د.إ1,000/month د.إ10,800/year (10% Off)"
                : currency === "AUD"
                ? "AU$383/month AU$4,130/year (10% Off)"
                : currency === "CAD"
                ? "CA$342/month CA$3,696/year (10% Off)"
                : currency === "SGD"
                ? "S$338/month S$3,645/year (10% Off)"
                : currency === "HKD"
                ? "HK$1,938/month HK$20,088/year (10% Off)"
                : currency === "CHF"
                ? "CHF225/month CHF2,430/year (10% Off)"
                : currency === "CNY"
                ? "¥1,750/month ¥18,900/year (10% Off)"
                : currency === "JPY"
                ? "¥36,750/month ¥3,96,900/year (10% Off)"
                : currency === "NZD"
                ? "NZ$417/month NZ$4,508/year (10% Off)"
                : currency === "SEK"
                ? "Skr2,625/month Skr28,350/year (10% Off)"
                : currency === "NOK"
                ? "Nkr2,600/month Nkr28,080/year (10% Off)"
                : currency === "DKK"
                ? "Dkr1,712/month Dkr18,480/year (10% Off)"
                : currency === "THB"
                ? "฿8,875/month ฿95,850/year (10% Off)"
                : currency === "MYR"
                ? "RM1,168/month RM12,636/year (10% Off)"
                : currency === "PHP"
                ? "₱14,150/month ₱1,52,880/year (10% Off)"
                : currency === "RUB"
                ? "₽23,250/month ₽2,51,400/year (10% Off)"
                : "$100/month $1,200/year",
            hasStar: false,
          },
          Premium: {
            value:
              currency === "INR"
                ? "₹40,000/month ₹4,32,000/year (10% Off)"
                : currency === "USD"
                ? "$500/month $5,400/year (10% Off)"
                : currency === "EUR"
                ? "€500/month €5,400/year (10% Off)"
                : currency === "GBP"
                ? "£400/month £4,320/year (10% Off)"
                : currency === "AED"
                ? "د.إ2,000/month د.إ21,600/year (10% Off)"
                : currency === "AUD"
                ? "AU$765/month AU$8,260/year (10% Off)"
                : currency === "CAD"
                ? "CA$684/month CA$7,392/year (10% Off)"
                : currency === "SGD"
                ? "S$676/month S$7,290/year (10% Off)"
                : currency === "HKD"
                ? "HK$3,875/month HK$40,176/year (10% Off)"
                : currency === "CHF"
                ? "CHF450/month CHF4,860/year (10% Off)"
                : currency === "CNY"
                ? "¥3,500/month ¥37,800/year (10% Off)"
                : currency === "JPY"
                ? "¥73,500/month ¥7,93,800/year (10% Off)"
                : currency === "NZD"
                ? "NZ$833/month NZ$9,016/year (10% Off)"
                : currency === "SEK"
                ? "Skr5,250/month Skr56,700/year (10% Off)"
                : currency === "NOK"
                ? "Nkr5,200/month Nkr56,160/year (10% Off)"
                : currency === "DKK"
                ? "Dkr3,424/month Dkr36,960/year (10% Off)"
                : currency === "THB"
                ? "฿17,750/month ฿1,91,700/year (10% Off)"
                : currency === "MYR"
                ? "RM2,336/month RM24,972/year (10% Off)"
                : currency === "PHP"
                ? "₱28,300/month ₱3,05,760/year (10% Off)"
                : currency === "RUB"
                ? "₽46,500/month ₽5,02,800/year (10% Off)"
                : "$200/month $2,400/year",
            hasStar: false,
          },
          enterprise: {
            value: "Custom Pricing (Contact Us)",
            hasStar: false,
          },
        },
        {
          feature: "Default End-App Users",
          free: { value: "5 users", hasStar: false },
          starter: { value: "Not applicable", hasStar: false },
          standard: { value: "Not applicable", hasStar: false },
          Premium: { value: "Not applicable", hasStar: false },
          enterprise: { value: "Unlimited", hasStar: false },
        },
        {
          feature: "Additional End-App Users",
          free: { value: "Not Applicable", hasStar: false },
          starter: {
            value:
              currency === "INR"
                ? "₹850/user/month"
                : currency === "USD"
                ? "$10/user/month"
                : currency === "EUR"
                ? "€10/user/month"
                : currency === "GBP"
                ? "£8/user/month"
                : currency === "AED"
                ? "د.إ36.7/user/month"
                : currency === "AUD"
                ? "AU$15.3/user/month"
                : currency === "CAD"
                ? "CA$13.7/user/month"
                : currency === "SGD"
                ? "S$13.5/user/month"
                : currency === "HKD"
                ? "HK$77.5/user/month"
                : currency === "CHF"
                ? "CHF9/user/month"
                : currency === "CNY"
                ? "¥70/user/month"
                : currency === "JPY"
                ? "¥1,470/user/month"
                : currency === "NZD"
                ? "NZ$16.7/user/month"
                : currency === "SEK"
                ? "Skr105/user/month"
                : currency === "NOK"
                ? "Nkr104/user/month"
                : currency === "DKK"
                ? "Dkr68.5/user/month"
                : currency === "THB"
                ? "฿355/user/month"
                : currency === "MYR"
                ? "RM46.7/user/month"
                : currency === "PHP"
                ? "₱566/user/month"
                : currency === "RUB"
                ? "₽930/user/month"
                : "$50/month",
            hasStar: false,
          },
          standard: {
            value:
              currency === "INR"
                ? "₹1275/user/month"
                : currency === "USD"
                ? "$15/user/month"
                : currency === "EUR"
                ? "€15/user/month"
                : currency === "GBP"
                ? "£12/user/month"
                : currency === "AED"
                ? "د.إ55.05/user/month"
                : currency === "AUD"
                ? "AU$23/user/month"
                : currency === "CAD"
                ? "CA$20.55/user/month"
                : currency === "SGD"
                ? "S$20.25/user/month"
                : currency === "HKD"
                ? "HK$116.25/user/month"
                : currency === "CHF"
                ? "CHF13.5/user/month"
                : currency === "CNY"
                ? "¥105/user/month"
                : currency === "JPY"
                ? "¥2,205/user/month"
                : currency === "NZD"
                ? "NZ$25/user/month"
                : currency === "SEK"
                ? "Skr157.5/user/month"
                : currency === "NOK"
                ? "Nkr156/user/month"
                : currency === "DKK"
                ? "Dkr102.75/user/month"
                : currency === "THB"
                ? "฿532.5/user/month"
                : currency === "MYR"
                ? "RM70.1/user/month"
                : currency === "PHP"
                ? "₱849/user/month"
                : currency === "RUB"
                ? "₽1,395/user/month"
                : "$75/month",
            hasStar: false,
          },
          Premium: {
            value:
              currency === "INR"
                ? "₹2125/user/month"
                : currency === "USD"
                ? "$25/user/month"
                : currency === "EUR"
                ? "€25/user/month"
                : currency === "GBP"
                ? "£20/user/month"
                : currency === "AED"
                ? "د.إ91.75/user/month"
                : currency === "AUD"
                ? "AU$38.25/user/month"
                : currency === "CAD"
                ? "CA$34.25/user/month"
                : currency === "SGD"
                ? "S$33.75/user/month"
                : currency === "HKD"
                ? "HK$193.75/user/month"
                : currency === "CHF"
                ? "CHF22.5/user/month"
                : currency === "CNY"
                ? "¥175/user/month"
                : currency === "JPY"
                ? "¥3,675/user/month"
                : currency === "NZD"
                ? "NZ$41.75/user/month"
                : currency === "SEK"
                ? "Skr262.5/user/month"
                : currency === "NOK"
                ? "Nkr260/user/month"
                : currency === "DKK"
                ? "Dkr171.25/user/month"
                : currency === "THB"
                ? "฿887.5/user/month"
                : currency === "MYR"
                ? "RM116.75/user/month"
                : currency === "PHP"
                ? "₱1,415/user/month"
                : currency === "RUB"
                ? "₽2,325/user/month"
                : "$100/month",
            hasStar: false,
          },
          enterprise: {
            value: "Custom Pricing",
            hasStar: false,
          },
        },
        {
          feature: "Number of Environments",
          free: { value: "1", hasStar: false },
          starter: { value: "1", hasStar: false },
          standard: { value: "2", hasStar: true },
          Premium: { value: "3", hasStar: true },
          enterprise: { value: "4", hasStar: true },
        },
        {
          feature: "Number of Apps",
          free: { value: "1", hasStar: false },
          starter: { value: "1", hasStar: false },
          standard: { value: "5", hasStar: true },
          Premium: { value: "Unlimited", hasStar: true },
          enterprise: { value: "Unlimited", hasStar: false },
        },
        {
          feature: "Web Application",
          free: { value: "Available", hasStar: false },
          starter: { value: "Available", hasStar: false },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Mobile Application",
          free: { value: "Available", hasStar: false },
          starter: { value: "Available", hasStar: false },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Dashboard Builder",
          free: { value: "Not available", hasStar: false },
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Available", hasStar: true },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Workflow",
          free: { value: "Available", hasStar: false },
          starter: { value: "Available", hasStar: false },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Pageflow",
          free: { value: "Available", hasStar: false },
          starter: { value: "Available", hasStar: false },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Third-Party API Integrations",
          free: { value: "Not available", hasStar: false },
          starter: { value: "Available", hasStar: true },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Custom Code",
          free: { value: "Not available", hasStar: false },
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Not available", hasStar: false },
          Premium: { value: "Available", hasStar: true },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Custom Components",
          free: { value: "Not available", hasStar: false },
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Not available", hasStar: false },
          Premium: { value: "Available", hasStar: true },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Theme Designer for Controls",
          free: { value: "Not available", hasStar: false },
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Not available", hasStar: false },
          Premium: { value: "Available", hasStar: true },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Advanced Report Building",
          free: { value: "Available", hasStar: false },
          starter: { value: "Available", hasStar: false },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Charts",
          free: { value: "Available", hasStar: false },
          starter: { value: "Available", hasStar: false },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Document Designing",
          free: { value: "Not available", hasStar: false },
          starter: { value: "Available", hasStar: true },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Email Designing",
          free: { value: "Not available", hasStar: false },
          starter: { value: "Available", hasStar: true },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Custom Domain",
          free: { value: "Not available", hasStar: false },
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Not available", hasStar: false },
          Premium: { value: "Available", hasStar: true },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "High Availability",
          free: { value: "Not available", hasStar: false },
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Not available", hasStar: false },
          Premium: { value: "Available", hasStar: true },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Source Code Availability",
          free: { value: "Not available", hasStar: false },
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Not available", hasStar: false },
          Premium: { value: "Not available", hasStar: false },
          enterprise: { value: "Available", hasStar: true },
        },
        {
          feature: "Support (Live Chat)",
          free: { value: "Not available", hasStar: false },
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Available", hasStar: true },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Support (Email)",
          free: { value: "Not available", hasStar: false },
          starter: { value: "Available", hasStar: true },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Support (Forum/Community)",
          free: { value: "Available", hasStar: false },
          starter: { value: "Available", hasStar: false },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Support (FAQ/Knowledgebase)",
          free: { value: "Available", hasStar: false },
          starter: { value: "Available", hasStar: false },
          standard: { value: "Available", hasStar: false },
          Premium: { value: "Available", hasStar: false },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Support (Phone)",
          free: { value: "Not available", hasStar: false },
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Not available", hasStar: false },
          Premium: { value: "Available", hasStar: true },
          enterprise: { value: "Available", hasStar: false },
        },
        {
          feature: "Dedicated Customer Success Manager",
          free: { value: "Not available", hasStar: false },
          starter: { value: "Not available", hasStar: false },
          standard: { value: "Not available", hasStar: false },
          Premium: { value: "Not available", hasStar: false },
          enterprise: { value: "Available", hasStar: true },
        },
      ],
    },
  ];


  const [contents1, setContents1] = useState(contents);
  const [getScheme, SetGetScheme] = useState("");
  const [getPlan, SetgetPlan] = useState("");
  const [getCurrency, SetgetCurrency] = useState("");

  const handleSwitchToggle = (id) => {
    setContents1(
      contents1.map((content) =>
        content.id === id
          ? { ...content, isSwitchOn: !content.isSwitchOn }
          : content
      )
    );
  };

  const handleChangeCloudOrSelf = (option) => {
    setCloudOrSelf(option);
  };

  const commonPStyle = {
    margin: "5px",
    transition: "background-color 0.3s ease-in-out",
  };

  const MonthlySelected = {
    ...commonPStyle,
    backgroundColor: cloudOrSelf === "Cloud" ? "#1D4965" : "",
    color: cloudOrSelf === "Cloud" ? "white" : "",
  };

  const YearlySelected = {
    ...commonPStyle,
    backgroundColor: cloudOrSelf === "Self" ? "#1D4965" : "",
    color: cloudOrSelf === "Self" ? "white" : "",
  };

  const [activeKeys, setActiveKeys] = useState<string[]>([]);

  const onPanelChange = (keys: string | string[]) => {
    setActiveKeys(Array.isArray(keys) ? keys : [keys]);
  };

  const isPanelActive = (key: string) => {
    return activeKeys.includes(key);
  };

  const items = [
    {
      key: "1",
      label:
        "What types of applications can I build with Digisquares' low-code platform?",
      children: (
        <p>
          Users can develop a wide range of applications with Digisquares,
          including both web and mobile apps. The platforms flexibility allows
          for various industry-specific solutions.
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
      label:
        "How user-friendly is the drag-and-drop interface for non-technical users?",
      children: (
        <p>
          The drag-and-drop interface is designed to be intuitive, making it
          accessible for non-technical users while also providing advanced
          features for Premium developers.
        </p>
      ),
      showArrow: false,
      extra: isPanelActive("2") ? (
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
      key: "3",
      label:
        "Can Digisquares' platform integrate with existing systems and databases?",
      children: (
        <p>
          {" "}
          Digisquares supports integration with existing systems and databases,
          offering seamless connectivity and data exchange.
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
      label:
        "What level of customization is possible with the platform for specific business needs?",
      children: (
        <p>
          The platform offers significant customization options, allowing users
          to tailor applications to their specific business requirements.
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
      label:
        "Does Digisquares offer support and training resources for new users of the platform?",
      children: (
        <p>
          Digisquares provides support and training resources to assist new
          users in navigating and utilizing the platform effectively.
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
      label:
        "How does Digisquares ensure the security of applications developed on its platform?",
      children: (
        <p>
          Digisquares incorporates advanced security measures in its low-code
          platform, including data encryption, user authentication, and
          comprehensive access controls, to ensure that applications developed
          are secure and adhere to industry best practices and standards.
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

  useEffect(() => {
    if (cloudOrSelf === "Cloud") {
      setContents1([
        {
          id: "2",
          button1: "Starter",
          paragraph:
            "Ideal for those who have already got their website up and running and are seeking assistance to enhance and update it further.",
          M_amount: "₹8,000",
          Y_amount: "₹86,400",
          M_amount_Usd: "$100",
          Y_amount_Usd: "$1,080",
          M_amount_eur: "€100",
          Y_amount_eur: "€1,080",
          M_amount_aed: "د.إ400",
          Y_amount_aed: "د.إ4,320",
          M_amount_pnd: "£80",
          Y_amount_pnd: "£860",
          M_amount_aud: "AU$153",
          Y_amount_aud: "AU$1,652",
          M_amount_cad: "CA$137",
          Y_amount_cad: "CA$1,478",
          M_amount_sgd: "S$135",
          Y_amount_sgd: "S$1,458",
          M_amount_hkd: "HK$775",
          Y_amount_hkd: "HK$8,370",
          M_amount_chf: "CHF90",
          Y_amount_chf: "CHF972",
          M_amount_cny: "¥700",
          Y_amount_cny: "¥7,560",
          M_amount_jpy: "¥14,700",
          Y_amount_jpy: "¥158,760",
          M_amount_nzd: "NZ$167",
          Y_amount_nzd: "NZ$1,803",
          M_amount_sek: "Skr1,050",
          Y_amount_sek: "Skr11,340",
          M_amount_nok: "Nkr1,040",
          Y_amount_nok: "Nkr11,232",
          M_amount_dkk: "Dkr685",
          Y_amount_dkk: "Dkr7,398",
          M_amount_thb: "฿3,550",
          Y_amount_thb: "฿38,340",
          M_amount_myr: "RM467",
          Y_amount_myr: "RM5,042",
          M_amount_php: "₱5,660",
          Y_amount_php: "₱61,560",
          M_amount_rub: "₽9,300",
          Y_amount_rub: "₽101,160",
          month: "/month",
          yearly: "/yearly",
          icon: <CheckOutlined style={{ fontSize: "12px" }} />,
          L1: "Email Designing",
          L2: "Third-Party API Integrations",
          L3: "Document Designing",
          L4: " Support Email",
          L5: " ",
          button2: "Get Started",
          isSwitchOn: false,
        },
        {
          id: "3",
          button1: "Standard",
          paragraph:
            "For teams looking for essential tools to get started quickly and effectively.",
          M_amount: "₹20,000",
          Y_amount: "₹2,16,000",
          M_amount_Usd: "$250",
          Y_amount_Usd: "$2,700",
          M_amount_eur: "€250",
          Y_amount_eur: "€2,700",
          M_amount_aed: "د.إ1,000",
          Y_amount_aed: "د.إ10,800",
          M_amount_pnd: "£200",
          Y_amount_pnd: "£2,160",
          M_amount_aud: "AU$383",
          Y_amount_aud: "AU$4,130",
          M_amount_cad: "CA$342",
          Y_amount_cad: "CA$3,696",
          M_amount_sgd: "S$338",
          Y_amount_sgd: "S$3,645",
          M_amount_hkd: "HK$1,938",
          Y_amount_hkd: "HK$20,088",
          M_amount_chf: "CHF225",
          Y_amount_chf: "CHF2,430",
          M_amount_cny: "¥1,750",
          Y_amount_cny: "¥18,900",
          M_amount_jpy: "¥36,750",
          Y_amount_jpy: "¥396,900",
          M_amount_nzd: "NZ$417",
          Y_amount_nzd: "NZ$4,508",
          M_amount_sek: "Skr2,625",
          Y_amount_sek: "Skr28,350",
          M_amount_nok: "Nkr2,600",
          Y_amount_nok: "Nkr28,080",
          M_amount_dkk: "Dkr1,712",
          Y_amount_dkk: "Dkr18,480",
          M_amount_thb: "฿8,875",
          Y_amount_thb: "฿95,850",
          M_amount_myr: "RM1,168",
          Y_amount_myr: "RM12,636",
          M_amount_php: "₱14,150",
          Y_amount_php: "₱152,880",
          M_amount_rub: "₽23,250",
          Y_amount_rub: "₽251,400",
          month: "/month",
          yearly: "/yearly",
          icon: <CheckOutlined style={{ fontSize: "12px" }} />,
          L1: "2 Environments Included",
          L2: "5 Apps Supported",
          L3: "Dashboard Builder",
          L4: "Support Live Chat",
          L5: " ",
          button2: "Get Started",
          isSwitchOn: false,
        },
        {
          id: "4",
          button1: "Premium",
          paragraph:
            "Ideal if you want to build or Scale your website fast,with the strategy calls included.",
          M_amount: "₹40,000",
          Y_amount: "₹4,32,000",
          M_amount_Usd: "$500",
          Y_amount_Usd: "$5,400",
          M_amount_eur: "€500",
          Y_amount_eur: "€5,400",
          M_amount_pnd: "£400",
          Y_amount_pnd: "£4,320",
          M_amount_aed: "د.إ2,000",
          Y_amount_aed: "د.إ21,600",
          M_amount_aud: "AU$765",
          Y_amount_aud: "AU$8,260",
          M_amount_cad: "CA$684",
          Y_amount_cad: "CA$7,392",
          M_amount_sgd: "S$676",
          Y_amount_sgd: "S$7,290",
          M_amount_hkd: "HK$3,875",
          Y_amount_hkd: "HK$40,176",
          M_amount_chf: "CHF450",
          Y_amount_chf: "CHF4,860",
          M_amount_cny: "¥3,500",
          Y_amount_cny: "¥37,800",
          M_amount_jpy: "¥73,500",
          Y_amount_jpy: "¥793,800",
          M_amount_nzd: "NZ$833",
          Y_amount_nzd: "NZ$9,016",
          M_amount_sek: "Skr5,250",
          Y_amount_sek: "Skr56,700",
          M_amount_nok: "Nkr5,200",
          Y_amount_nok: "Nkr56,160",
          M_amount_dkk: "Dkr3,424",
          Y_amount_dkk: "Dkr36,960",
          M_amount_thb: "฿17,750",
          Y_amount_thb: "฿191,700",
          M_amount_myr: "RM2,336",
          Y_amount_myr: "RM24,972",
          M_amount_php: "₱28,300",
          Y_amount_php: "₱305,760",
          M_amount_rub: "₽46,500",
          Y_amount_rub: "₽502,800",
          month: "/month",
          yearly: "/yearly",
          icon: <CheckOutlined style={{ fontSize: "12px" }} />,
          L1: "High Availability",
          L2: "Unlimited Apps",
          L3: "Theme Designer for Controls",
          L4: "Custom Domain",
          L5: " ",
          button2: "Get Started",
          isSwitchOn: false,
        },
        {
          id: "5",
          button1: "Enterprise",
          paragraph:
            "If these plans don't fit,let's create one that suits.Customize your subscription for a perfect fit,bigger or smaller!",
          M_amount: "let's Talks!",
          Y_amount: "let's Talks!",
          M_amount_Usd: "let's Talks!",
          Y_amount_Usd: "let's Talks!",
          M_amount_eur: "let's Talks!",
          Y_amount_eur: "let's Talks!",
          M_amount_aed: "let's Talks!",
          Y_amount_aed: "let's Talks!",
          M_amount_pnd: "let's Talks!",
          Y_amount_pnd: "let's Talks!",
          M_amount_aud: "let's Talks!",
          Y_amount_aud: "let's Talks!",
          M_amount_cad: "let's Talks!",
          Y_amount_cad: "let's Talks!",
          M_amount_sgd: "let's Talks!",
          Y_amount_sgd: "let's Talks!",
          M_amount_hkd: "let's Talks!",
          Y_amount_hkd: "let's Talks!",
          M_amount_chf: "let's Talks!",
          Y_amount_chf: "let's Talks!",
          M_amount_cny: "let's Talks!",
          Y_amount_cny: "let's Talks!",
          M_amount_jpy: "let's Talks!",
          Y_amount_jpy: "let's Talks!",
          M_amount_nzd: "let's Talks!",
          Y_amount_nzd: "let's Talks!",
          M_amount_sek: "let's Talks!",
          Y_amount_sek: "let's Talks!",
          M_amount_nok: "let's Talks!",
          Y_amount_nok: "let's Talks!",
          M_amount_dkk: "let's Talks!",
          Y_amount_dkk: "let's Talks!",
          M_amount_thb: "let's Talks!",
          Y_amount_thb: "let's Talks!",
          M_amount_myr: "let's Talks!",
          Y_amount_myr: "let's Talks!",
          M_amount_php: "let's Talks!",
          Y_amount_php: "let's Talks!",
          M_amount_rub: "let's Talks!",
          Y_amount_rub: "let's Talks!",
          month: "",
          yearly: "",
          icon: <CheckOutlined style={{ fontSize: "12px" }} />,
          L1: "4 Environments Included",
          L2: "Unlimited Apps",
          L3: "Source Code Available",
          L4: "Dedicated Customer Success",
          L5: "Custom Code & Components",
          button2: "Book a Call",
          isSwitchOn: false,
        },
      ]);
    } else {
      setContents1(contents);
    }
  }, [cloudOrSelf,contents]);

  const [selectedPlan, setSelectedPlan] = useState("Premium");

  const handleDivClick = (planName) => {
    setSelectedPlan(planName);
  };

  const divStyle = {
    width: "300px",
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

  const [isGlowing, setIsGlowing] = useState(false);

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

  const handleScheme = (scheme, plan, currency) => {
    // SetGetScheme(scheme);
    // SetgetPlan(plan);
    // SetgetCurrency(currency);
    router.push(
      `https://app.digisquares.com/register?scheme=${scheme}&plan=${plan}&currency=${currency}&host=${cloudOrSelf}&isactive=1`
    );
  };

  const handlePanelChange = (key) => {
    setActiveKeys((prevActiveKeys) =>
      prevActiveKeys.includes(key)
        ? prevActiveKeys.filter((k) => k !== key)
        : [...prevActiveKeys, key]
    );
  };

  const [planSelected, setPlanSelected] = useState("starter");

  const plans = ["starter", "Premium", "enterprise", "standard"];

  const handlePlanChange = (value: any) => {
    setPlanSelected(value);
  };

  const MobFeatureCollapse = (
    cloudOrSelf === "Cloud" ? CloudHostedData : SelfHostedData
  ).map((item, index) => ({
    key: String(index + 1),
    label: item.name,
    children: (
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}
      >
        <tbody>
          {item.features.map((feature, featureIndex) => (
            <tr key={featureIndex} style={{ borderBottom: "1px solid #ddd" }}>
              {/* Feature Name */}
              <td
                style={{
                  padding: "10px",
                  fontWeight: 600,
                  color: "#1D4965",
                  fontSize: "1rem",
                }}
              >
                {feature.feature}
              </td>
              {/* Selected Plan Value with Star Icon */}
              <td
                style={{
                  padding: "10px",
                  textAlign: "center",
                  fontSize: ".9rem",
                  color: "black",
                }}
              >
                {planSelected && feature[planSelected] ? (
                  <span>
                    {feature[planSelected].hasStar && (
                      <span className="StarIcon" style={{ color: "gold" }}>
                        ⭐
                      </span>
                    )}
                    {feature[planSelected].value || "-"}
                  </span>
                ) : (
                  "-"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ),
  }));

  const handleCurrency = (val) => {
    setCurrency(val);
  };

  const getCurrencyAmount = (content, isYearly) => {
    switch (currency) {
      case "INR":
        return isYearly ? content.Y_amount : content.M_amount;
      case "USD":
        return isYearly ? content.Y_amount_Usd : content.M_amount_Usd;
      case "EUR":
        return isYearly ? content.Y_amount_eur : content.M_amount_eur;
      case "AED":
        return isYearly ? content.Y_amount_aed : content.M_amount_aed;
      case "GBP":
        return isYearly ? content.Y_amount_pnd : content.M_amount_pnd;
      case "AUD":
        return isYearly ? content.Y_amount_aud : content.M_amount_aud;
      case "CAD":
        return isYearly ? content.Y_amount_cad : content.M_amount_cad;
      case "SGD":
        return isYearly ? content.Y_amount_sgd : content.M_amount_sgd;
      case "HKD":
        return isYearly ? content.Y_amount_hkd : content.M_amount_hkd;
      case "CHF":
        return isYearly ? content.Y_amount_chf : content.M_amount_chf;
      case "CNY":
        return isYearly ? content.Y_amount_cny : content.M_amount_cny;
      case "JPY":
        return isYearly ? content.Y_amount_jpy : content.M_amount_jpy;
      case "NZD":
        return isYearly ? content.Y_amount_nzd : content.M_amount_nzd;
      case "SEK":
        return isYearly ? content.Y_amount_sek : content.M_amount_sek;
      case "NOK":
        return isYearly ? content.Y_amount_nok : content.M_amount_nok;
      case "DKK":
        return isYearly ? content.Y_amount_dkk : content.M_amount_dkk;
      case "THB":
        return isYearly ? content.Y_amount_thb : content.M_amount_thb;
      case "MYR":
        return isYearly ? content.Y_amount_myr : content.M_amount_myr;
      case "PHP":
        return isYearly ? content.Y_amount_php : content.M_amount_php;
      case "RUB":
        return isYearly ? content.Y_amount_rub : content.M_amount_rub;
      default:
        return isYearly ? content.Y_amount : content.M_amount;
    }
  };


  return (
    <>
      <BaseLayout>
        <div className={styles.SubsComp}>
          <div className={styles.SubsHeaderComp} style={{ padding: "20px" }}>
            <div className={styles.SubsHeadings}>
              <h2
                style={{
                  fontSize: "37px",
                  lineHeight: "48px",
                  margin: "0px",
                }}
              >
                Choose your right plan!
              </h2>
              <div className={styles.head}>
                <div
                  className={styles.SubsCloudSelf}
                  style={{ position: "relative" }}
                >
                  <div
                    className={styles.SubsCloud}
                    onClick={() => handleChangeCloudOrSelf("Cloud")}
                    style={MonthlySelected}
                  >
                    <p style={{ fontSize: "16px", lineHeight: "22px" }}>
                      Cloud (we host)
                    </p>
                  </div>

                  <div
                    className={styles.SubsSelf}
                    onClick={() => handleChangeCloudOrSelf("Self")}
                    style={YearlySelected}
                  >
                    <p style={{ fontSize: "16px", lineHeight: "22px" }}>
                      Self-host (You host)
                    </p>
                  </div>
                </div>
              </div>
              <div
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginRight: "10px",
  }}
>
<div
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
            <h4>Pick your currency</h4>
  <Select
    defaultValue={currency}
    style={{ width: "100px", position: "relative" }}
    onChange={handleCurrency}
  >
    <Option value="INR">INR</Option>
    <Option value="USD">USD</Option>
    <Option value="EUR">EUR</Option>
    <Option value="GBP">GBP</Option>
    <Option value="AED">AED</Option>
    <Option value="AUD">AUD</Option>
    <Option value="CAD">CAD</Option>
    <Option value="SGD">SGD</Option>
    <Option value="HKD">HKD</Option>
    <Option value="CHF">CHF</Option>
    <Option value="CNY">CNY</Option>
    <Option value="JPY">JPY</Option>
    <Option value="NZD">NZD</Option>
    <Option value="SEK">SEK</Option>
    <Option value="NOK">NOK</Option>
    <Option value="DKK">DKK</Option>
    <Option value="THB">THB</Option>
    <Option value="MYR">MYR</Option>
    <Option value="PHP">PHP</Option>
    <Option value="RUB">RUB</Option>
  </Select>
  </div>
</div>
            </div>
          </div>

          <div
            className={styles.SubsPricingComp}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              className={styles.NewPricingCardComp}
              style={{
                display: "flex",
                alignItems: "center",
                borderRadius: "10px ",
                justifyContent: "center",
                width: "100%",
                gap: "20px",
              }}
            >
              {contents1.map((content, index) => (
                <div
                  className={styles.DivCard}
                  key={index}
                  style={{
                    ...divStyle,
                    ...(selectedPlan === content.button1
                      ? selectedDivStyle
                      : {}),
                    borderRadius: "10px",
                    borderColor:
                      selectedPlan === content.button1 ? "#1D4965" : "#DDDDDD",
                  }}
                  onClick={() => handleDivClick(content.button1)}
                >
                  {content.button1 === "Premium" ? (
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <div
                        className={`MostPopular ${isGlowing ? "glow" : ""}`}
                        style={{
                          borderRadius: "10px",
                          backgroundColor: "#50B1ED",
                          width: "200px",
                          height: "30px",
                          textAlign: "center",
                          margin: "-20px 0px 7px 0px",
                          position:
                            selectedPlan === "Premium"
                              ? "absolute"
                              : "relative",
                          top: selectedPlan === "Premium" ? "0px" : "-20px",
                        }}
                      >
                        <p
                          style={{
                            padding: "5px",
                            color: "#000000",
                            margin: "-5px",
                          }}
                        >
                          Most Popular
                        </p>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div
                    className={styles.SubsPricingHeader}
                    style={{
                      backgroundColor: "#1D4965",
                      position:
                        selectedPlan === "Premium"
                          ? "static"
                          : content.id === "4"
                          ? "relative"
                          : "static",
                      top: selectedPlan === "Premium" ? "" : "-20px",
                    }}
                  >
                    <div
                      style={{
                        color: "white",
                        // fontSize: "20px",
                        padding: "10px",
                        textAlign: "center",
                        margin: "0px",
                      }}
                    >
                      {content.button1}
                    </div>
                  </div>
                  <p className={styles.tabparagraph}
                    style={{
                      padding: "10px",
                      color: "#3f4245",
                      height: "150px",
                      position:
                        selectedPlan === "Premium"
                          ? "static"
                          : content.id === "4"
                          ? "relative"
                          : "static",
                      top: selectedPlan === "Premium" ? "" : "-20px",
                    }}
                  >
                    {content.paragraph}
                  </p>
                  <div
                    style={{
                      height: "35px",
                      display: content.button1 === "Free" ? " " : "flex",
                      flexDirection: "row",
                      alignItems: "end",
                      justifyContent: "space-between",
                      paddingTop: content.id === "3" ? "17px" : "",
                      position:
                        selectedPlan === "Premium"
                          ? "static"
                          : content.id === "4"
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
                        <>
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
                        </>
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
                          fontSize: "14px",
                        }}
                      >
                        {content.button1 === "Free"
                          ? " "
                          : content.button1 === "Enterprise"
                          ? " "
                          : content.isSwitchOn === true
                          ? "10% SAVING"
                          : "10% SAVING"}
                      </p>
                    </div>
                  </div>
                  <div
                    className={styles.SubsAmount}
                    style={{
                      position:
                        selectedPlan === "Premium"
                          ? "static"
                          : content.id === "4"
                          ? "relative"
                          : "static",
                      top: selectedPlan === "Premium" ? "" : "-20px",
                    }}
                  >
                    <h4>{getCurrencyAmount(content, content.isSwitchOn)}</h4>
                    <p>{content.isSwitchOn ? content.yearly : content.month}</p>
                  </div>
                  <div
                    className={styles.SubsFeaturesList}
                    style={{
                      position:
                        selectedPlan === "Premium"
                          ? "static"
                          : content.id === "4"
                          ? "relative"
                          : "static",
                      top: selectedPlan === "Premium" ? "" : "-20px",
                      height: content.id === "5" ? "230px" : "220px",
                    }}
                  >
                    <div className={styles.SubsFeature}>
                      {content.icon}
                      <p>{content.L1}</p>
                    </div>
                    <div className={styles.SubsFeature}>
                      {content.icon}
                      <p>{content.L2}</p>
                    </div>
                    <div className={styles.SubsFeature}>
                      {content.icon}
                      <p>{content.L3}</p>
                    </div>
                    <div className={styles.SubsFeature}>
                      {content.L4 === " " ? "" : content.icon}
                      <p>{content.L4}</p>
                    </div>
                    <div className={styles.SubsFeature}>
                      {content.L5 === " " ? "" : content.icon}
                      <p>{content.L5}</p>
                    </div>
                  </div>
                  <div
                    className={styles.SubsGetStarted}
                    style={{
                      position:
                        selectedPlan === "Premium"
                          ? "static"
                          : content.id === "4"
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
                      <span
                        className={styles.fontshead}
                        style={{
                          fontWeight: "bold",
                          backgroundColor:
                            content.button2 === "Book a Call" ? "#1D4965" : "",
                          color:
                            content.button2 === "Book a Call" ? "white" : "",
                        }}
                      >
                        {content.button2}
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.CompareFeatures}>
            <div className={styles.CompareFeaturesContainer}>
              <h2
                style={{
                  // fontSize: "50px",
                  color: "black",
                }}
              >
                Compare features
              </h2>
            </div>

            <div
              className={styles.SubsFeaturesComp}
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
                className={styles.Featurehead}
              >
                <div style={FeatureColStyle1}>
                  <h5 style={{color: "white" }}>Features</h5>
                </div>
                {/* {cloudOrSelf === "Cloud" && (
                  <div style={FreeColStyle}>
                    <h2 style={{ fontSize: "20px", color: "white" }}>Free</h2>
                  </div>
                )} */}
                <div style={StarterColStyle} className={styles.FeaturesH5}>
                  <h5>Starter</h5>
                </div>
                <div style={StandardColStyle} className={styles.FeaturesH5}>
                  <h5>Standard</h5>
                </div>
                <div style={ProfessionalColStyle} className={styles.FeaturesH5}>
                  <h5>Premium</h5>
                </div>
                <div style={EnterpriseColStyle} className={styles.FeaturesH5}>
                  <h5>Enterprise</h5>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  height: "65px",
                  textAlign: "center",
                  fontSize: "16px",
                  position: "sticky",
                  top: "145px",
                }}
                className={styles.Featurehead2}
              >
                <div style={FeatureCol2Style}></div>
                {/* {cloudOrSelf === "Cloud" && (
                  <div className={styles.ColStyle}>
                    <a
                      className={styles.CompareFeaturesDivStyle}
                      href="https://app.digisquares.com/register"
                      target="_blank"
                      rel="nofollow"
                    >
                      <span>Start building</span>
                    </a>
                  </div>
                )} */}
                <div className={styles.ColStyle}>
                  <div className={styles.signUpbtn}>
                    <Link
                      legacyBehavior
                      href={`https://app.digisquares.com/register?scheme=Starter&plan=Monthly&currency=${currency}&host=${cloudOrSelf}&isactive=1`}
                    >
                      <a rel="nofollow">Start a Trial </a>
                    </Link>
                  </div>
                </div>
                <div className={styles.ColStyle}>
                  <div className={styles.signUpbtn}>
                    <Link
                      legacyBehavior
                      href={`https://app.digisquares.com/register?scheme=Standard&plan=Monthly&currency=${currency}&host=${cloudOrSelf}&isactive=1`}
                    >
                      <a rel="nofollow">Start a Trial </a>
                    </Link>
                  </div>
                </div>
                <div className={styles.ColStyle}>
                  <div className={styles.signUpbtn}>
                    <Link
                      legacyBehavior
                      href={`https://app.digisquares.com/register?scheme=Premium&plan=Monthly&currency=${currency}&host=${cloudOrSelf}&isactive=1`}
                    >
                      <a rel="nofollow">Start a Trial </a>
                    </Link>
                  </div>
                </div>
                <div className={styles.ColStyle}>
                  <div className={styles.signInBtn}>
                    <Link
                      legacyBehavior
                      href={`https://app.digisquares.com/register?scheme=Enterprise&plan=Monthly&currency=${currency}&host=${cloudOrSelf}&isactive=1`}
                    >
                      <a
                        className={styles.CompareFeaturesDivStyle}
                        rel="nofollow"
                      >
                        Book a demo
                      </a>
                    </Link>
                  </div>
                </div>
              </div>

              <div className={styles.FeaturesSubComp}>
                {(cloudOrSelf === "Cloud"
                  ? CloudHostedData
                  : SelfHostedData
                ).map((sData, i) => (
                  <React.Fragment key={i}>
                    <div className={styles.FeaturesTitle}>
                      <h3>{sData.name}</h3>
                    </div>
                    {sData.features.map((fData, index) => (
                      <div
                        className={styles.FeaturesComp}
                        style={{
                          backgroundColor:
                            index % 2 === 1 ? "#F2F3F7" : "white",
                        }}
                        key={index}
                      >
                        <div
                          style={FeatureColStyle}
                          className={styles.FeaturesCol}
                        >
                          <h6 className={styles.H_tag}>{fData.feature}</h6>
                        </div>
                        <div
                          style={FeatureColStyle}
                          className={styles.StarterCol}
                        >
                          <p>
                            {fData.starter?.hasStar && (
                              <span className="StarIcon">⭐</span>
                            )}
                            {fData.starter?.value}
                          </p>
                        </div>

                        <div
                          style={FeatureColStyle}
                          className={styles.StandardCol}
                        >
                          <p>
                            {fData.standard?.hasStar && (
                              <span className="StarIcon">⭐</span>
                            )}
                            {fData.standard?.value}
                          </p>
                        </div>

                        <div
                          style={FeatureColStyle}
                          className={styles.ProfessionalCol}
                        >
                          <p>
                            {fData.Premium?.hasStar && (
                              <span className="StarIcon">⭐</span>
                            )}
                            {fData.Premium?.value}
                          </p>
                        </div>
                        <div
                          style={FeatureColStyle}
                          className={styles.EnterpriseCol}
                        >
                          <p>
                            {fData.enterprise?.hasStar && (
                              <span className="StarIcon">⭐</span>
                            )}
                            {fData.enterprise?.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.MobCompareFeatures}>
            <div
              style={{
                height: "70px",
                width: "100%",
              }}
            >
              <h2 className={styles.MobCompareFeaturesH2}>Compare features</h2>
            </div>
            <div
              style={{
                width: "100%",
                alignItems: "baseline",
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <h2 style={{ width: "32%"}}>Pricing Plan:</h2>
              <Select
                defaultValue={planSelected}
                onChange={(e) => handlePlanChange(e)}
                style={{ width: "65%", marginBottom: "20px" }}
              >
                {plans.map((plan, index) => (
                  <Option key={index} value={plan}>
                    {plan.charAt(0).toUpperCase() + plan.slice(1)}
                  </Option>
                ))}
              </Select>
            </div>

            <Collapse
              accordion
              bordered={false}
              style={{
                backgroundColor: "#F5F5F5",
                borderRadius: "4px",
                width: "100%",
              }}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined
                  style={{ color: "#1D4965" }}
                  rotate={isActive ? 90 : 0}
                />
              )}
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
            <h2 style={{color: "black" }}>
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
                    <span className={styles.custom_collapse_header_span}>
                      {item.label}
                    </span>
                    <span>{item.extra}</span>
                  </div>
                  {isPanelActive(item.key) && (
                    <div
                      className={styles.custom_collapse_content_inner}
                      style={{ padding: "15px", backgroundColor: "#f1f1f1" }}
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
    </>
  );
};

export default NewPricing;
