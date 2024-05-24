import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { PiUploadThin, PiDownloadThin } from "react-icons/pi";
import { FcCheckmark } from "react-icons/fc";

import ShareLayout from "./ShareLayout";
import data from "../utils/data";

function EmailLayout() {
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);

  const downloadResume = () => {
    setClick(true);
    fetch(data.resumeUrl)
      .then((res) => res.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "AakashSondagar.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
    setTimeout(() => {
      setClick(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center gap-x-2 my-6">
      <button
        onClick={() => downloadResume()}
        className="w-72 gap-x-3 h-10 rounded-lg bg-slate-50 flex items-center justify-center hover:bg-neutral-100 duration-300 transition-all ease-in"
      >
        <div className="font-Intermedium text-black">
          {click ? "Downloaded" : data?.email}
        </div>

        <AnimatePresence>
          {click ? (
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
              <FcCheckmark className="w-4 h-4 text-black" />
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
              <PiDownloadThin className=" text-black" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
      <button
        onClick={() => setOpen(true)}
        className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center"
      >
        <PiUploadThin className="text-black" />
      </button>
      {open && (
        <ShareLayout
          open={open}
          setOpen={setOpen}
        />
      )}
    </div>
  );
}

export default EmailLayout;
