import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";

import { PiUploadThin } from "react-icons/pi";

import ProfileInfo from "./ProfileInfo";
import ResumeLayout from "./ResumeLayout";
import ShareLayout from "./ShareLayout";
import Links from "./Links";
const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });
import Message from "./Message";
import Footer from "./Footer";

import data from "../utils/data";

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
          <Image
            width={800}
            height={800}
            className="w-9 h-9  rounded-md object-cover"
            src="/images/profilepic2.jpg"
            alt="profile pic"
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
        <Image
          width={1000}
          height={1000}
          className="h-full w-full blur-sm object-cover absolute opacity-40"
          src="/images/bg.jpg"
          alt="background pic"
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
        <div className="max-w-lg mx-auto bg-[#111111] pt-8 gap-y-3">
          <ProfileInfo />
          <ResumeLayout />
          {/* <div className="flex justify-center  gap-x-5">
            <Stories stories={stories} />
          </div> */}
            <Links />
          {/* ProjectCard */}
            <MapComponent />
            <Message />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Header;
