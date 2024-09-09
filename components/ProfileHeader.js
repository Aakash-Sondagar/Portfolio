import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { LuArrowDownToLine, LuCheck } from "react-icons/lu";

import { role, profileHeader } from "@/utils/data";

export default function ProfileHeader({ view }) {
  const [download, setDownload] = useState("false");
  const downloadResume = () => {
    const anchorElement = document.createElement("a");
    anchorElement.href = profileHeader.ResumeLink;
    anchorElement.download = "Aakash Sondagar Resume";
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
    setDownload("true");
    setTimeout(() => {
      setDownload("false");
    }, 3000);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-center sm:space-y-0 space-y-4 animate-slideFromDownAndFade">
      <div className="flex items-center">
        <Avatar className="sm:mr-4 mr-2 h-16 w-16  hover:scale-105">
          <AvatarImage
            className="object-cover"
            src={profileHeader.ProfilePic}
          />
          <AvatarFallback>{profileHeader.ProfilePicAlt}</AvatarFallback>
        </Avatar>

        <div className="text-center sm:text-left text-[14px] sm:text-[16px]">
          <h1 className="font-medium text-lg">{profileHeader.Name}</h1>
          <div className="text-base">{role[view]}</div>
        </div>
      </div>
      <div className="flex gap-4 sm:gap-3 items-center justify-center font-semibold mt-4 sm:mt-0">
        {/* Resume Button */}
        <Button
          variant="ghost"
          onClick={downloadResume}
          className="text-base p-0 sm:p-2 group relative overflow-hidden"
        >
          <span className="hidden sm:flex text-base">Resume</span>
          {download === "true" ? (
            <LuCheck className="h-6 w-6 sm:h-4 sm:w-4 sm:ml-1 hover:h-5 transition-all duration-300 ease-in-out opacity-100 transform scale-100" />
          ) : (
            <LuArrowDownToLine className="h-6 w-6 sm:h-4 sm:w-4 sm:ml-1 hover:h-5 transition-all duration-300 ease-in-out opacity-100 transform scale-100" />
          )}
        </Button>

        {/* Social Icons */}
        {profileHeader.social.map((item, index) => (
          <Link key={index} href={item.link}>
            <item.icon className="h-6 w-6 sm:h-5 sm:w-5 hover:animate-squeeze" />
          </Link>
        ))}
      </div>
    </div>
  );
}
