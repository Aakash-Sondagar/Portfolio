import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion";

import { PiUploadThin } from "react-icons/pi";

import data from "../utils/data";

const ScrollHeader = (props) => {
  const { setOpen } = props;
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 0"],
  });

  return (
    <motion.div
      ref={ref}
      className="fixed top-11 flex z-20 justify-center w-full "
      style={{ opacity: scrollYProgress }}
    >
      <div className="bg-neutral-100 dark:bg-[#161616] border p-2 rounded-lg border-neutral-200 dark:border-neutral-800 flex justify-between items-center  w-[640px]">
        <Image
          width={800}
          height={800}
          className="w-9 h-9  rounded-md object-cover"
          src="/images/profilepic.jpg"
          alt="profile pic"
        />
        <h1 className="text-black dark:text-white font-Intermedium">
          {data?.name}
        </h1>
        <button
          onClick={() => setOpen(true)}
          className="h-10 rounded-lg bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200 flex items-center justify-center px-2"
        >
          Share
          <PiUploadThin className="ml-2" />
        </button>
      </div>
    </motion.div>
  );
};

export default ScrollHeader;