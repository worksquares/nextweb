import { memo } from "react";
import IconCloud from "../components/magicui/icon-cloud";
import style from "./IconCloudDemo.module.css";

const slugs = [
  "zoho",
  "jira",
  "redis",
  "gmail",
  "slack",
  "asana",
  "oracle",
  "openai",
  "trello",
  "twilio",
  "stripe",
  "mongodb",
  "mariadb",
  "google",
  "shopify",
  "hubspot",
  "graphql",
  "zendesk",
  "facebook",
  "whatsapp",
  "linkedin",
  "microsoft",
  "mailchimp",
  "salesforce",
  "googlemaps",
  // "datastax",
  // "anthropic",
  // "amazonredshift",
  // "workday",
  // "amazons3",
];
const IconCloudDemo = ()=> {
  return (
    <div className={style.container}>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
export default memo(IconCloudDemo)