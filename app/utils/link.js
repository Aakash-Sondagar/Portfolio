import {
  PiLinkedinLogoLight,
  PiGithubLogoThin,
  PiXLogoThin,
} from "react-icons/pi";
import { SiLeetcode } from "react-icons/si";
import { TbMail, TbPhone } from "react-icons/tb";

export const socialLinks = [
  {
    icon: <PiLinkedinLogoLight />,
    link: "https://www.linkedin.com/in/aakash-sondagar/",
    text: "@LinkedIn",
  },
  {
    icon: <SiLeetcode />,
    link: "https://leetcode.com/u/Aakash_Sondagar/",
    text: "@Leetcode",
  },
  {
    icon: <PiGithubLogoThin />,
    link: "https://github.com/Aakash-Sondagar",
    text: "@Github",
  },
  {
    icon: <PiXLogoThin />,
    link: "https://x.com/AakashSondagar",
    text: "@Twitter",
  },
];

export const contactLinks = [
  {
    href: "mailto:aakashsondar@gmail.com?subject=Inquiry%20from%20Your%20Portfolio&body=Hi%20Aakash,%0D%0A%0D%0AI%20visited%20your%20portfolio%20website,%20and%20I%27m%20interested%20in%20discussing%20%0D%0A%0D%0ALooking%20forward%20to%20your%20response.%0D%0A%0D%0ABest%20regards,%0D%0A%5BYour%20Name%5D",
    icon: <TbMail className="text-xl text-neutral-500" />,
    text: `aakashsondagar@gmail.com`,
  },
  {
    href: "tel:+918080240015",
    icon: <TbPhone className="text-xl text-neutral-500" />,
    text: "+91 808024 0015",
  },
];
