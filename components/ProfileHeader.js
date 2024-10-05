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
    <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-center sm:space-y-0 animate-slideFromDownAndFade">
      <div className="flex items-center flex-col sm:flex-row">
        <Avatar profile={true} className="h-16 w-16 hover:scale-105 sm:mr-5">
          <AvatarImage
            className="object-cover"
            src={profileHeader.ProfilePic}
          />
          <AvatarFallback>{profileHeader.ProfilePicAlt}</AvatarFallback>
        </Avatar>
        
        <div className="text-center mt-2 sm:text-left sm:mt-0">
          <h1 className="font-semibold text-lg">{profileHeader.Name}</h1>
          <div className="font-light text-base">{role[view]}</div>
        </div>
      </div>
      <div className="flex gap-4 sm:gap-3 items-center justify-center font-semibold mt-3">
        {/* Resume Button */}
        <Button
          variant="ghost"
          onClick={downloadResume}
          className="text-base p-0 sm:p-2 group relative overflow-hidden"
        >
          <span className="hidden sm:flex text-base">Resume</span>
          {download === "true" ? (
            <LuCheck className="h-6 w-6 sm:h-5 sm:w-5 sm:ml-1 transition-all duration-300 ease-in-out opacity-100 transform scale-100" />
          ) : (
            <LuArrowDownToLine className="h-6 w-6 sm:h-5 sm:w-5 sm:ml-1 transition-all duration-300 ease-in-out opacity-100 transform scale-100" />
          )}
        </Button>

        {/* Social Icons */}
        {profileHeader.social.map((item, index) => (
          <Link key={index} href={item.link}>
            <item.icon className="h-6 w-6 sm:h-5 sm:w-5" />
          </Link>
        ))}
      </div>
    </div>
  );
}
