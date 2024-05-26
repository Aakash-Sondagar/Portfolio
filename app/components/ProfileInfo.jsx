import React, { useContext } from "react";
import { useContext } from "react";
import Link from "next/link";

import { RiVerifiedBadgeFill } from "react-icons/ri";
import { PiSunDimThin, PiMoonThin } from "react-icons/pi";

import ThemeContext from "../utils/ThemeContext";
import data from "../utils/data";
import { contactLinks } from "../utils/link";

const ProfileInfo = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="relative text-center">
      <div className="font-Intermedium text-black dark:text-white text-2xl flex justify-center items-center gap-x-2">
        <div>{data?.name}</div>
        <RiVerifiedBadgeFill className="text-[#B5924F] text-xl mt-1" />

        {/* Dark Mode Toggle */}
        <div className="flex items-center self-start mt-2">
          <div className="relative flex items-center">
            <input
              type="checkbox"
              className="hidden"
              id="theme-toggle"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <label htmlFor="theme-toggle" className="cursor-pointer">
              <div className="relative">
                <span
                  className={`absolute transition-opacity duration-300 ${
                    theme === "light" ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <PiSunDimThin className="text-yellow-500 text-xl" />
                </span>
                <span
                  className={`absolute transition-opacity duration-300 ${
                    theme === "dark" ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <PiMoonThin className="text-blue-500 text-xl" />
                </span>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="mt-3 text-neutral-500 flex justify-center gap-x-2 items-center font-Interegular">
        {data?.infoList.map((item, index) => (
          <React.Fragment key={index}>
            <div>{item.text}</div>
            {item.separator && (
              <div className="w-[3px] h-[3px] bg-neutral-600 rounded-full" />
            )}
          </React.Fragment>
        ))}
      </div>

      <div>
        <p className="font-Intermedium text-neutral-500 text-center my-3">
          {data?.bio}
        </p>
        <div className="flex justify-center flex-col md:flex-row items-center gap-x-7">
          {contactLinks?.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-x-2 my-1 md:my-0 hover:bg-neutral-200 dark:hover:bg-neutral-900 transition-all ease-in duration-100 p-1 px-2 rounded-xl"
            >
              {link.icon}
              <div className="text-black dark:text-white font-Intermedium">
                {link.text}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
