import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { PiUploadThin, PiDownloadThin } from "react-icons/pi";
import { FcCheckmark } from "react-icons/fc";

import ShareLayout from "./ShareLayout";
import { resumeDownload } from "../utils/commonFunctions";

function ResumeLayout() {
  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);

  const downloadResume = async () => {
    setClick(true);
    await resumeDownload();

    setTimeout(() => {
      setClick(false);
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center gap-x-2 my-6">
      <button
        onClick={() => downloadResume()}
        className="w-64 gap-x-3 h-10 rounded-lg bg-neutral-500 dark:bg-slate-50 text-white dark:text-black flex items-center justify-center duration-300 transition-all ease-in"
      >
        <div className="font-Intermedium">
          {click ? "Downloaded" : "Resume"}
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
              <FcCheckmark />
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
              <PiDownloadThin />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
      <button
        onClick={() => setOpen(true)}
        className="w-10 h-10 rounded-lg bg-neutral-500 dark:bg-slate-50 text-white dark:text-black flex items-center justify-center"
      >
        <PiUploadThin />
      </button>
      {open && <ShareLayout open={open} setOpen={setOpen} />}
    </div>
  );
}

export default ResumeLayout;
