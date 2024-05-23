import { PiPhoneLight, PiGlobeSimpleThin } from "react-icons/pi";

const url = "https://multiphaceportfolio.vercel.app/";

const data = {
  name: "Aakash Sondagar",
  email: "aakashsondar@gmail.com",
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
      href: `${url}`,
      icon: <PiGlobeSimpleThin className="text-xl text-neutral-500" />,
      text: `AakashSondagar.com`,
    },
    {
      href: "tel:+918080240015", // Ensures correct phone call handling
      icon: <PiPhoneLight className="text-xl text-neutral-500" />,
      text: "+91 8080240015",
    },
  ],
};

export default data;
