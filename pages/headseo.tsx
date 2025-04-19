import React from "react";
import Head from "next/head";

export interface HeadseoProps {
  title?: string;
  heading?: string;
  description?: string;
  img?: string;
  url?: string;
  keywords?: string;
  blogtitle?: string;
  blogheading?: string;
  blogdescription?: string;
  blogimg?: string;
  blogurl?: string;
}

const Headseo = ({
  heading,
  title,
  description,
  img,
  url,
  keywords,
  blogtitle,
  blogheading,
  blogdescription,
  blogimg,
  blogurl,
}: HeadseoProps) => {
  // Updated default values based on current content from Digisquares.com
  const defaultTitle =
    "Revolutionize Your Business with Low-Code Platforms | Digisquares";
  const defaultDescription =
    "Empower your digital transformation with Digisquares® – a next-generation low-code platform for building enterprise-grade web, mobile, and AI solutions swiftly and securely.";
  const defaultUrl = "https://www.digisquares.com/";
  const defaultImage =
    "https://www.digisquares.com/assets/images/default-og-image.jpg";
  const defaultKeywords =
    "low-code, app studio, agent studio, AI studio, digital transformation, web development, mobile apps, enterprise applications, no-code, AI solutions, chatbot, AI assistant, voice agents, natural language processing, AI model, fine tuning, synthetic data";

  const metaTitle = blogtitle ? blogtitle : title ? title : defaultTitle;
  const metaDescription = blogtitle
    ? blogdescription || defaultDescription
    : description || defaultDescription;
  const metaUrl = blogtitle ? blogurl || defaultUrl : url || defaultUrl;
  const metaImage = blogtitle ? blogimg || defaultImage : img || defaultImage;

  return (
    <Head>
      {/* Canonical URL */}
      <link rel="canonical" href={metaUrl} />

      {/* Basic Meta Tags */}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="robots" content="index,follow" />
      <meta name="author" content="Digisquares®" />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={blogtitle ? blogheading || metaTitle : metaTitle}
      />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      <meta name="twitter:site" content={metaUrl} />
      <meta name="twitter:creator" content="@Digisquares" />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} key="ogurl" />
      <meta property="og:image" content={metaImage} key="ogimage" />
      <meta property="og:site_name" content="Digisquares®" key="ogsitename" />
      <meta property="og:title" content={heading || metaTitle} key="ogtitle" />
      <meta
        property="og:description"
        content={metaDescription}
        key="ogdesc"
      />

      {/* Title & Description */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
    </Head>
  );
};

export default Headseo;
