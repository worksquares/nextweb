import Link from "next/link";
import { useState } from "react";
import { BlogPostContainProps } from "../../comp/base/BlogPostCard";
import { BlogRightContainProps } from "../../comp/base/BlogRightImgCard";
import { BlogTopicsContainProps } from "../../comp/base/BlogTopicsCard";
import BaseLayout from "../../comp/BaseLayout";
import { BlogLists } from "../../comp/BlogData";
import BlogPostContent from "../../comp/BlogPostContent";
import BlogRightImg from "../../comp/BlogRight";
import BlogTopicContent from "../../comp/BlogTopicsContent";
import Screen from "../../comp/Screen";
import styles from "../../styles/Blog.module.css";
import Styles from "../../styles/comp/core/BlogPostCard.module.css";
import Headseo from "../headseo";

const GDPRCompliance = () => {
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
      if (DataList.Latest == true) {
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
      title: "GDPR Compliance to avoid fines",
      // subtitle: "August 12, 2021",
      link: "#",
      img1700: "/assets/DataSecureMainImg.webp",
      img1024: "/assets/DataSecureMainImg.webp",
      img768: "/assets/DataSecureMainImg.webp",
      img320: "/assets/DataSecureMainImg.webp",

      paragraph: [
        {
          paragraphs:
            "Since then there's been a boom of technology like things like the internet and people feel that they've lost control of how their data is being used and stored so the GDPR laws a positive thing because they're allowing the everyday person to take back control of what data people have on them to make sure, you’re e compliant with GDPR the first thing you need to know is what data do you have on people and that leads me to tip number one store all of the data you have on your employee’s suppliers and customers in an organized fashion this is going to be helpful for two reasons the first is that if a person said hey business what information do you have on me you want to be able to get all of that information to them as quickly as possible and as accurately as possible so make sure all the data you have is organized so you can do that second reason that's important is that if you were to ever be investigated by the GDPR are you want to make sure, that you're showing that you know what data you have on everyone so store it in a really organized way now what is data well personal data is any bit of information that you could use on its own or with another bit of information to identify a person so that's going to include their name their phone number their telephone number photos of them their IP address make sure you know what data you have on people.",
        },

        {
          subheading: "Make sure Data is Secure:",
        },
        {
          subimages: "/assets/DataSecure.webp",
        },
        {
          paragraphs:
            "The is safely secured so what measures have you got in place to make sure, that nobody could leak hack or misplace that data if you're storing that data digitally what safety measures could you put in place could the information be up there in the cloud do you have antivirus software on all of your devices if any of your devices were lost could you remotely wipe that data. so, nobody could access it start thinking of these things because you want to make sure, your data is always in safe hands similarly if you have hard copies of your data what are you doing are you securing that safely is it locked away is it in a fireproof box are you making sure that no one could access that? information who shouldn't be you also want to make sure you record in the risk assessment so actually write down what safety measures you've gone to make sure, that dates are safe this is going to make sure everybody in your team knows exactly what's happening and should you ever be investigated you're showing that you've already taken necessary precautions tip three for being GDPR compliant don't hold on to date up unnecessarily.",
        },
        {
          subheading: "Don’t keep Data Unnecessarily:",
        },

        {
          paragraphs:
            "So, this is a big one that's coming to their new laws you can't hold on to data if you don't know what you're going to do with it you need to be totally sure of why you've got  someone's name or email address so don't hold onto data just in case it might become handy in the future tip 4 is you want to have a really clearly written fair processing policy this is something you're likely to already have in this form of a privacy policy so something you might be familiar with all it is document that really clearly explains what data you're going to be taking from people and how you're going to be using it every time somebody hands over a bit of data to you want to make sure that they have clear access to your fair processing notice GDPR have asked that this fair policy notice has no jargon and legally and waffle bits in there that could be ambiguous so start with a blank piece of paper and just in layman's terms say what are you going to do with that information when right in this document here are some questions to keep in mind what information is being collected who is collecting it how is it being collected why is it being collected how is it going to be used who will it be shared with what will be the effect of this on the individuals. Concerned is the intended use likely to cause individuals to object or complain",
        },
        {
          subheading: "Have a process for providing an Information:",
        },
        {
          subimages: "/assets/DataSecure4.webp",
        },
        {
          paragraphs:
            "What information do you have on me do you have a process so that you can easily give that to them so with the new law you have to be able to supply people with what information you have on them if they ask you have to supply this information within one month of the mask in and you have to do it free of charge so make sure you've got a process in place so that you can quickly get all the information you have on them and send that over to them.",
        },
        {
          subheading: "Have a process for deleting data:",
        },
        {
          subimages: "/assets/DataSecure2.webp",
        },
        {
          paragraphs:
            "Process in place where if someone asks you to delete all them data you can so if someone ask you to delete all they don't so you have to that's part of the new law so makes sure you know where all of the information you have on them is so you can easily wipe that now let's talk marketing and how the laws are going to affect. Allow people to positively opt-in to you having their data and using it for marketing  purposes so what does this mean it means that if you're going to use someone's data for marketing they have to take some sort of action to say Yes, you can have my data and yes you can use it for these reasons that's known as positively opt-in it used to be the case that you would go on to a website and there would be a pre ticked box that says yeah you can use my data for whatever that's not the case anymore people have to actively tick that box or take another action some good examples of getting people to positively opt-in is having a tick box next to a contact form that says yes you can use my data and someone has to take that or to have a double opt-in this is when an email comes through to their inbox that says click this button to be part of us mailing list all so that we can use your information for X Y and says if you're collecting people's information in person you could get them to sign something to say that they're happy for you to use their data in this way or you could get them to take a box that says I'm happy for you to do this whatever it is make sure that someone is taking an action and you have evidence that they did that.",
        },
        {
          subheading: "Try a layered optin form:",
        },
        {
          paragraphs:
            "Try layered opt-in forms this is something the GDP are of simplifying with and something I really like so they look a little bit like this this layered opt-in form allows users to have easy access to understand them information and how it's going to be used but it doesn't look messy instead they can click on a button and delve into more information if they'd like about how you're going to use it tip 9 if you're using people's information to send their marketing make it really easy for them to opt out of it. if you're using emails you need to make sure people can unsubscribe same with things like text messages and call services  similarly if you're sending people mail make sure that you're writing something at the bottom that tells them how they can stop receiving this mail the information for opting out should be really clear and really obvious don't use any small print also make sure you have a really strict policy on how you're going to make sure someone that opt-out doesn't get any more marketing materials from you this is where you could really fall short to GDP our law and get reported and that's when the twenty million-euro fines are going to come knocking at your door which we don't want so you need that policy if someone doesn't want to receive anything anymore make sure everyone in your team knows that and then no longer receiving it.",
        },
        {
          subheading: "Make your team aware of new GDPR laws:",
        },
        {
          subimages: "/assets/DataSecure3.webp",
        },
        {
          paragraphs:
            "Making sure all your team know about the new GDPR laws I would actually put this in an email again just to show GDPR that you'll be in very conscious of the laws train all of your employees on everything we've spoke about today because it's just as important that they do it so your whole business isn't liable to be extra safe I would also appoint you or someone in your team to be the data protection officer and make sure you've got this in writing this means that person is responsible for enforcing all the tips we've spoke about today give you one person toll or responsibility means that these tips are much more likely to get enforced because their checks and balances are replacing your business now they're all the tips that you want to go and implement straight away because that's when you fifth of May is coming up soon but we've also been talking to a lot of our customers about GDPR and some questions just keep coming up time and time again so let me try and answer them for you know what if I want to buy data how do I ensure that that is GDPR compliant? great question well if you're going to buy data maybe like a big list of everybody's email addresses or phone numbers you need to make sure that the person that you're buying that information from has been GDPR compliant you also need to make sure that every single person on that list has actively opted in to receive information or have their data stored by a third party so make sure you check with the person you're buying this information from what if I want to sell the business in the future can I pass on the data I have on my employee’s suppliers and customers to the new business owner okay in this case you want to have an assignment within your fare processing notice the assignment Clause should really clearly state that if somebody else was to buy your business the new business owner will have all that data that you've collected on someone they will then own it and use it for the same purposes that you have you also just want to make it really clear to the new business owner this is what we said we were going to use the information for and you can't use the information for anything else unless you contact everyone again and ask them to positively opt in what about all of the existing data I have on people can I keep this after the 25th of May so when the new laws come in in May you need to make sure that everybody that you have information about is consented to that your safest bet is to contact all of your existing database and just explain that the law is changing and that they need to positively opt back in to be able to receive emails from you for you to continue to have their data etc.",
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
        blogtitle={`Digisquares | GDPR Compliance`}
        blogheading={`GDPR Compliance to avoid fines`}
        blogdescription={`There's been a boom of technology like things like the internet and people feel that they've lost control of how their data is being used and stored so the GDPR laws`}
        blogurl={`/blog/GDPRCompliance`}
        blogimg={`/assets/DataSecureMainImg.webp`}
      />
      <BaseLayout>
        <div>
          <label className={styles.dropdown}>
            <div className={styles.ddbutton}>Menu</div>

            <input type="checkbox" className={styles.ddinput} id="test" />

            <ul className={styles.ddmenu}>
              <li>
                <Link href="/more/Blog" onClick={ChangeHome}>
                  Home
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
                  <Link href="/more/Blog" className={styles.items}>
                    Home
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

export default GDPRCompliance;
