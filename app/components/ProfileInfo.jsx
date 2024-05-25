import React from "react";
import Link from "next/link";

import { RiVerifiedBadgeFill } from "react-icons/ri";

import data from "../utils/data";
import { contactLinks } from "../utils/link";

const profileInfo = () => {
  return (
    <>
      <div className="text-center">
        <h3 className="font-Intermedium text-white text-2xl flex justify-center items-center gap-x-2">
          {data?.name}
          <RiVerifiedBadgeFill className="text-[#B5924F] text-xl mt-1" />
        </h3>
        <div className="mt-3 text-neutral-500 flex justify-center gap-x-2 items-center font-Interegular">
          {data?.infoList.map((item, index) => (
            <React.Fragment key={index}>
              <div>{item.text}</div>
              {item.separator && (
                <div className="w-[3px] h-[3px]  bg-neutral-600 rounded-full" />
              )}
            </React.Fragment>
          ))}
        </div>
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
              className="flex items-center gap-x-2 my-1 md:my-0 hover:bg-neutral-900 transition-all ease-in duration-100 p-1 px-2 rounded-xl"
            >
              {link.icon}
              <div className="text-white font-Intermedium">{link.text}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default profileInfo;
