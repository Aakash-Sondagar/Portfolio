import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";

import { PiUploadThin } from "react-icons/pi";
import { RiVerifiedBadgeFill } from "react-icons/ri";

import ShareLayout from "./ShareLayout";
import EmailLayout from "./ResumeLayout";

import data from "../utils/data";

// https://images.pexels.com/photos/370470/pexels-photo-370470.jpeg?auto=compress&cs=tinysrgb&w=1600
// https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1600

const Header = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 0"],
  });

  return (
    <div>
      {/* Share */}
      {open && <ShareLayout open={open} setOpen={setOpen} />}

      {/* Scroll Header */}
      <motion.div
        ref={ref}
        className="fixed top-11 flex z-20 justify-center w-full "
        style={{ opacity: scrollYProgress }}
      >
        <div className="bg-[#161616] border p-2 rounded-lg  border-neutral-800 flex justify-between items-center  w-[640px]">
          <img
            width={800}
            height={800}
            className="w-9 h-9  rounded-md object-cover"
            src="https://avatars.githubusercontent.com/u/89018309?v=4"
            alt=""
          />
          <h1 className="text-white font-Intermedium">{data?.name}</h1>
          <button
            onClick={() => setOpen(true)}
            className="w-9 h-9 rounded-lg bg-neutral-700 text-neutral-300 flex items-center justify-center"
          >
            <PiUploadThin />
          </button>
        </div>
      </motion.div>
      {/* Background Image */}
      <div className="h-60 relative w-full -z-10">
        <img
          width={1000}
          height={1000}
          className="h-full w-full blur-sm object-cover absolute opacity-40"
          src={data?.backgroundPic}
          alt=""
        />
      </div>
      {/* Profile Image */}
      <div className="w-full flex justify-center z-10 relative -top-9">
        <div className="absolute  p-1 rounded-full bg-[#111111]">
          <img
            width={800}
            height={800}
            className="w-16 h-16 rounded-full object-cover"
            src={data?.profilePic}
            alt=""
          />
        </div>
      </div>
      {/* Profile Info */}
      <div className="bg-[#111111] p-3">
        <div className="h-screen max-w-lg mx-auto bg-[#111111] pt-14">
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
            <div className="flex justify-center gap-x-7">
              {data?.contactLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-x-2 hover:bg-neutral-900 transition-all ease-in duration-100 p-1 px-2 rounded-xl"
                >
                  {link.icon}
                  <div className="text-white font-Intermedium">{link.text}</div>
                </Link>
              ))}
            </div>
          </div>
          <EmailLayout />
        </div>
      </div>
    </div>
  );
};

export default Header;
