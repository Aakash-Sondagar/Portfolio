import { TbMail, TbPhone } from "react-icons/tb";

const url = "https://aakashsondagar.vercel.app/";

const data = {
  name: "Aakash Sondagar",
  email: "aakashsondar@gmail.com",
  resumeUrl:
    "https://media.instahyre.com/resume/2381689/642c0b1a03/Aakash_Sondagar.pdf",
  backgroundPic:
    "https://images.pexels.com/photos/370470/pexels-photo-370470.jpeg?auto=compress&cs=tinysrgb&w=1600",
  profilePic:
    "https://media.licdn.com/dms/image/D4D03AQGkL1FChAujPg/profile-displayphoto-shrink_400_400/0/1696109469593?e=1721865600&v=beta&t=w3m16C7HhTFRQtV6uGiC_ZFQ_4s4qagiQpJ4XtDmo5o",
  infoList: [{ text: "Mumbai, IND", separator: true }, { text: "He/Him" }],
  bio: "Greetings! I'm a Software Engineer on a mission to create a positive impact through code. My love for innovation keeps me exploring new frontiers, like DevOps and Open Source. Let's collaborate!",
  shareProfile: `Check out this profile! ${url}`,
  shareUrl: `${url}`,
  contactLinks: [
    {
      href: `mailto:aakashsondagar@gmail.com?subject=Hello&body=This is a test email`,
      icon: <TbMail className="text-xl text-neutral-500" />,
      text: `aakashsondagar@gmail.com`,
    },
    {
      href: "tel:+918080240015",
      icon: <TbPhone className="text-xl text-neutral-500" />,
      text: "+91 8080240015",
    },
  ],
};

export default data;
