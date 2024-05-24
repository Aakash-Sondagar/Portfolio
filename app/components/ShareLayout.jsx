import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  PiXCircleLight,
  PiFacebookLogoLight,
  PiLinkedinLogoLight,
  PiLinkLight,
  PiDownloadThin,
} from "react-icons/pi";
import { BsWhatsapp } from "react-icons/bs";
import { FaAngleRight, FaTwitter } from "react-icons/fa";
import { TbCopy } from "react-icons/tb";
import { FcCheckmark } from "react-icons/fc";

import data from "../utils/data";

import { resumeDownload } from "../utils/commonFunctions";

const shareMessage = encodeURIComponent(data?.shareProfile);

const Click = (link) => {
  window.open(link, "_blank");
};

const links = [
  {
    iconFirst: <BsWhatsapp className="text-2xl" />,
    name: "Share on Whatsapp",
    lastIcon: <FaAngleRight />,
    onClick: () => {
      Click(`https://wa.me/?text=${shareMessage}`);
    },
  },
  {
    iconFirst: <PiLinkedinLogoLight className="text-2xl" />,
    name: "Share on LinkedIn",
    lastIcon: <FaAngleRight />,
    onClick: () => {
      Click(
        `https://www.linkedin.com/shareArticle?mini=true&url=${data?.shareUrl}`
      );
    },
  },
  {
    iconFirst: <FaTwitter className="text-2xl" />,
    name: "Share on X",
    lastIcon: <FaAngleRight />,
    onClick: () => {
      Click(`https://twitter.com/intent/tweet?text=${shareMessage}`);
    },
  },
  {
    iconFirst: <PiFacebookLogoLight className="text-2xl" />,
    name: "Share on Facebook",
    lastIcon: <FaAngleRight />,
    onClick: () => {
      Click(`https://www.facebook.com/sharer/sharer.php?u=${data?.shareUrl}`);
    },
  },
  {
    iconFirst: <PiDownloadThin className="text-2xl" />,
    name: "Resume",
    lastIcon: <FaAngleRight />,
    onClick: () => {
      resumeDownload();
    },
  },
  {
    iconFirst: <PiLinkLight className="text-2xl" />,
    name: data?.email,
    string: "Copy",
    lastIcon: <FaAngleRight className="ml-1" />,
  },
];

const ShareLayout = (props) => {
  const { open, setOpen } = props;

  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(data?.email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <>
      {open && (
        <motion.div
          initial={{
            display: !open ? "none" : "block",
          }}
          animate={{
            display: open ? "flex" : "none",
            transition: { duration: !open ? 1 : 0 },
          }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-xl flex justify-center items-center w-full bg-black/60 fixed bottom-0 z-50 overscroll-y-none right-0 left-0 h-full"
        >
          <div className="max-w-md  bg-[#161616] py-3 px-3 rounded-xl">
            <div className="flex justify-between items-center text-white">
              <p className="text-xl font-Intermedium">Share this profile</p>

              <div className="cursor-pointer" onClick={() => setOpen(false)}>
                <PiXCircleLight className="text-2xl text-neutral-300" />
              </div>
            </div>

            <div className="mt-3 ">
              {links.map((link, indx) => (
                <div
                  key={indx}
                  className={`flex items-center justify-between  text-neutral-300 hover:bg-neutral-800 duration-300 ease-in-out transition-all p-2 mt-1 rounded-xl cursor-pointer ${
                    indx === links.length - 1 &&
                    "bg-neutral-950 hover:bg-neutral-950"
                  }`}
                  onClick={link.onClick ? link.onClick : null}
                >
                  <div className="flex items-center gap-x-2 ">
                    {link.iconFirst}
                    <p
                      key={indx}
                      className={` font-Intermedium ${
                        indx === links.length - 1 ? "text-sm " : "text-lg"
                      }  `}
                    >
                      {link.name}
                    </p>
                  </div>
                  {indx === links.length - 1 ? (
                    <span
                      onClick={onCopy}
                      className="flex items-center bg-neutral-300 p-1 ml-2 rounded-lg px-1 gap-x-1 text-sm font-Intermedium text-neutral-600 cursor-pointer "
                    >
                      {copied ? "Copied" : link.string}

                      <AnimatePresence>
                        {copied ? (
                          <motion.span
                            initial={{ scale: 1 }}
                            animate={{ scale: 0.8 }}
                            exit={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 200,
                              damping: 100,
                            }}
                          >
                            <FcCheckmark className="w-4 h-4" />
                          </motion.span>
                        ) : (
                          <motion.span
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{
                              type: "spring",
                              stiffness: 200,
                              damping: 10,
                            }}
                          >
                            <TbCopy className="w-4 h-4" />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </span>
                  ) : (
                    link.lastIcon
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ShareLayout;
