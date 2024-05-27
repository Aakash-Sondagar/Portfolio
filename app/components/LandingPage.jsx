import dynamic from "next/dynamic";
import { useState, useContext } from "react";

import { PiSunDuotone, PiMoonDuotone } from "react-icons/pi";

import ScrollHeader from "./ScrollHeader";
import ImageComponent from "./ImageComponent";
import ProfileInfo from "./ProfileInfo";
import ResumeLayout from "./ResumeLayout";
import ShareLayout from "./ShareLayout";
import Stories from "./Stories";
import Links from "./Links";
import ProjectCard from "./ProjectCard";
const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });
import Message from "./Message";
import Footer from "./Footer";

import ThemeContext from "../utils/ThemeContext";

const LandingPage = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      {open && <ShareLayout open={open} setOpen={setOpen} />}

      <ScrollHeader setOpen={setOpen} />

      <ImageComponent />

      <div className="bg-[#ffffff] dark:bg-[#111111] relative p-3">
        <div className="absolute top-1 right-2 sm:left-[82%] md:left-[76%] lg:left-[64.5%] bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 px-2 py-1 text-sm rounded-full flex justify-center items-center h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              className="theme-controller"
              value={theme === "dark"}
              onChange={toggleTheme}
            />
            <PiSunDuotone className="text-yellow-500 swap-off text-xl" />
            <PiMoonDuotone className="text-blue-500 swap-on text-xl" />
          </label>
        </div>
        <div className="max-w-lg mx-auto bg-[#ffffff] dark:bg-[#111111] pt-8 gap-y-3">
          <ProfileInfo />
          <ResumeLayout />
          {/* <div className="flex justify-center gap-x-7">
            <Stories />
          </div> */}
          <Links />
          <ProjectCard />
          <MapComponent />
          <Message />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
