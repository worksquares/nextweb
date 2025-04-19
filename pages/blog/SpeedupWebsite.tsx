import React, { useState } from "react";
import BlogPostContent from "../../comp/BlogPostContent";
import { BlogPostContainProps } from "../../comp/base/BlogPostCard";
import { BlogRightContainProps } from "../../comp/base/BlogRightImgCard";
import BlogRightImg from "../../comp/BlogRight";
import { BlogTopicsContainProps } from "../../comp/base/BlogTopicsCard";
import BlogTopicContent from "../../comp/BlogTopicsContent";
import styles from "../../styles/Blog.module.css";
import Styles from "../../styles/comp/core/BlogPostCard.module.css";
import Link from "next/link";
import Screen from "../../comp/Screen";
import { BlogLists } from "../../comp/BlogData";
import Headseo from "../headseo";
import BaseLayout from "../../comp/BaseLayout";

const SpeedupWebsite = () => {
  let BlogTopicCardListData: BlogTopicsContainProps[] = [
    {
      title: "Topics",
      list: [
        { lists: "AI and Automation" },
        { lists: "Cybersecurity and risk" },
        { lists: "Digital Transformation" },
        { lists: "IT Management" },
        { lists: "Cloud Management" },
        { lists: "Digisquares Platform" },
        { lists: "Database Management" },
        { lists: "Governance" },
      ],
      title2: "Years",
      list2: [{ lists2: "2022" }],
    },
  ];

  let BlogRightCardListData: BlogRightContainProps[] = [];
  {
    let j = 0;
    BlogLists.map((DataList) => {
      if (DataList.Featured == true) {
        BlogRightCardListData.push({
          title2: j == 0 ? "Featured" : null,
          image320: DataList.Img,
          paragraph: DataList.Desc,
          links: DataList.URL,
        });
        j = 2;
      }
    });
  }

  let BlogPostListData: BlogPostContainProps[] = [
    {
      title: "Top Tips To Speed Up Your Website",
      img1700: "/assets/WebsiteSpeed(5).webp",
      img1024: "/assets/WebsiteSpeed(5).webp",
      img768: "/assets/WebsiteSpeed(5).webp",
      img320: "/assets/WebsiteSpeed(5).webp",

      paragraph: [
        {
          subheading: "Do a quick analysis of your web page speed",
        },
        {
          paragraphs:
            "Tools such as WebPageTest or Pingdom will show you basic performance metrics along with exactly which elements are taking the longest time to load on your web page. Simply enter the URL of the page you’re looking to evaluate and wait for the results to come in. This test is for the homepage of beauty store Sephora: there are over 200 elements that make up this page, and by looking at the left column you can see what is taking the longest time to load. ",
        },
        {
          paragraphs:
            "Between the time a user attempts to load a page on your site to the time the page is fully loaded, dozens, sometimes hundreds, of different operations will take place. Content needs to be accessed from the server, images need to be retrieved, and style sheets need to be loaded. Before any of these operations can even start, the browser must look up your DNS address and connect to your server, and the server must send an HTML document back to the browser. The HTML document provides the instructions on what actions the browser needs to take and what files need to be retrieved to build the full webpage. The time it takes to deliver the HTML document from your server to your user’s browser is the Time to First Byte (TTFB). An ideal TTFB is around 200 milliseconds.",
        },
        {
          paragraphs:
            "The start render time is an important measure because it indicates when the viewer first sees the page appear in their browser. While the web page may still need to make dozens of additional server request to gather all the content needed, the faster a website begins to render the more likely the user will hang out long enough to load the entire page.",
        },
        {
          subheading: "Ensure your images are optimized for web",
        },
        {
          subimages: "/assets/WebsiteSpeed(2).webp",
        },
        {
          paragraphs:
            "Resize images using an image editing tool such as Photoshop or a free image re-sizer which allows you to size your images appropriately so you aren’t making users download large files. To do this, first find out what the maximum allowed image size is for your web page or blog layout - it usually won’t be more than 800px width, and even if you upload larger images they will be sized down Content Delivery Networks can also provide “on the fly“ image resizing and optimization services so you don’t need to make any change in your workflow in order to deliver optimized images to your browsers.",
        },
        {
          paragraphs:
            "If you use HTML tags such as a width or height specification, you usually aren’t reducing the image size on your server, only how it appears on the page. This is also the case if you are changing image sizes using a WSIWYG tool in your Content Management System. Once you determine your ideal image size, save as that size. If you’re using an image editor, you can also save at 80% quality which further reduces the file size, or using an online resizer you can select options which reduce the file size by your desired percentage (we don’t recommend saving at more than 50% quality). JPG and PNG are the best file types for web",
        },

        {
          subheading: "Fix broken links and missing files",
        },

        {
          paragraphs:
            "No one likes to click a broken link, but if your website has a lot of pages or hasn’t had a thorough review in a while, there’s a good chance you have a few broken links or missing images on your site. These broken links may be the result of you linking to external sites which have moved or shut down, or moving your own page addresses or changing file structures. Each time someone tries to click a broken link or loads a page with a missing file, they have a poor user experience and your page load time slows as the browser searches for the file. In addition, broken links have a negative effect on your SEO.",
        },
        {
          paragraphs:
            "Checking for broken links will vary in difficulty depending how many pages your website has. If you are a relatively small site, it may be simple enough to check the links on all your pages. However, bigger sites will have a large number of links to check and for those we recommend using a free tool such as LinkChecker or a platform specific plugin like the broken link checker for Wordpress. It should be considered a website best practice to check links at least once a month, especially external links that may be removed without you knowing. ",
        },
        {
          subheading: "Leverage server caching",
        },
        {
          subimages: "/assets/WebsiteSpeed(4).webp",
        },
        {
          paragraphs:
            "When properly configured, caching content on your server is the number 1 way to drastically improve the speed of your website while also reducing the stress on your website servers. Server Caching sets up a cache directly in front of your origin web server, so you can store copies of files which multiple users can access without needing to go back to your web server. The first visitor to a website after a cache has been installed or cleared will be directed to the web server, which will then send a copy of the pages to both the cache and the end-user. The next time someone requests the same pages, the cache will be able to directly fulfill their request, resulting in shorter page load times.",
        },
        {
          paragraphs:
            "There are multiple open-source options for server caching, which is more complex than browser caching but also will have a bigger impact on your website performance. We recommend Varnish Cache, a best-in-class caching solution that is designed to respond to requests extremely quickly. Varnish Cache can be configured to cache all sorts of files, including full HTML documents for maximum performance improvements.",
        },
        {
          subheading: "Use a Content Delivery Network",
        },
        {
          subimages: "/assets/WebsiteSpeed(1).webp",
        },
        {
          paragraphs:
            "Content Delivery Networks or CDNs are increasingly becoming the de-facto way websites who value their users’ experience improve their website performance and reduce strain on their website servers at the same time. CDNs are networks of servers distributed around the Internet. They are traditionally fixed networks of servers. Those servers are physically placed in locations called Points of Presence or “PoPs” which are designed to be closer to the Internet’s end users around the globe. CDNs’ PoPs act as a middleman proxy for your web server and will intercept the end users’ requests. By intercepting the request and acting as a proxy, the CDN PoP has an opportunity to serve the request directly, block the request if it is malicious, or in some other way improve the response to the user (and hence the speed and the security of the website).",
        },
        {
          subheading: "Choose a good hosting provider",
        },

        {
          paragraphs:
            "As with any technology, website hosting and server infrastructure is constantly being upgraded to be faster and have less downtime. However, it can be expensive for hosting companies to switch to the newest hardware, so many will lag behind by a year or two. One of the best ways to ensure your website is one of the fastest out there is to ensure your hosting provider is using  the most up-to-date technology, has minimal downtime, is able to utilize modern protocols such as HTTP/2, and has a 24/7 support system in case you run into any problems. It is also recommended that you choose a hosting system that has been around for a few years to minimize the risk that they shut down.",
        },
      ],
    },
  ];

  const [home, setHome] = useState(true);

  const ChangeHome = () => {
    setHome(true);
  };

  return (
    <div>
      <Headseo
        blogtitle={`Digisquares | Speedup Website`}
        blogheading={`Top Tips To Speed Up Your Website`}
        blogdescription={`Tools such as WebPageTest or Pingdom will show you basic performance metrics.`}
        blogurl={`/blog/SpeedupWebsite/`}
        blogimg={`/assets/WebsiteSpeed(5).webp`}
      />
      <BaseLayout>
        <div>
          <label className={styles.dropdown}>
            <div className={styles.ddbutton}>Menu</div>
            <input type="checkbox" className={styles.ddinput} id="test" />
            <ul className={styles.ddmenu}>
              <li>
                <Link legacyBehavior href="/more/Blog">
                  <a onClick={ChangeHome}>Home</a>
                </Link>
              </li>
            </ul>
          </label>
        </div>
        <div className={styles.BlogContain}>
          <div style={{ backgroundColor: "#293e40" }}>
            <Screen>
              <div className={styles.Blogs}>
                <div className={styles.Blogsitems}>
                  <Link legacyBehavior href="/more/Blog">
                    <a className={styles.items}> Home </a>
                  </Link>
                </div>

                <form action="" className={styles.searchbar}>
                  <input
                    type="search"
                    name="search"
                    pattern=".*\S.*"
                    required
                  />
                  <button className={styles.searchbtn} type="submit">
                    <span>Search</span>
                  </button>
                </form>
              </div>
            </Screen>
          </div>
        </div>
        <Screen>
          <div className={Styles.BlogPost}>
            <div className={Styles.BlogPostleft}>
              <BlogPostContent BlogPostCardPropsList={BlogPostListData} />
            </div>
            <div className={Styles.BlogPostRight}>
              <BlogRightImg BlogRightCardPropsList={BlogRightCardListData} />
              <BlogTopicContent
                BlogTopicCardPropsList={BlogTopicCardListData}
              />
            </div>
          </div>
        </Screen>
      </BaseLayout>
    </div>
  );
};

export default SpeedupWebsite;
