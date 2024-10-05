import { useState } from "react";
import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from "@/components/ui/disclosure";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

export const CertificateCard = ({
  img,
  altImg,
  title,
  description,
  componentToShow,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const imageVariants = {
    collapsed: { scale: 1, filter: "blur(0px)" },
    expanded: { scale: 1.1, filter: "blur(3px)" },
  };

  const contentVariants = {
    collapsed: { opacity: 0, y: 0 },
    expanded: { opacity: 1, y: 0 },
  };

  const transition = {
    type: "spring",
    stiffness: 26.7,
    damping: 4.1,
    mass: 0.2,
  };

  return (
    <div className="p-1">
      <div className="relative h-[75px] w-full sm:h-[250px] sm:w-[290px] overflow-hidden rounded-xl">
        <div onClick={() => (componentToShow ? null : setIsOpen(!isOpen))}>
          <motion.img
            src={img}
            alt={altImg}
            className="pointer-events-none h-auto w-full select-none"
            animate={isOpen ? "expanded" : "collapsed"}
            variants={imageVariants}
            transition={transition}
          />
        </div>
        <Disclosure
          onOpenChange={componentToShow ? null : setIsOpen}
          open={isOpen}
          className="absolute bottom-0 left-0 right-0 rounded-xl bg-zinc-900 px-4 pt-2 dark:bg-zinc-50"
          variants={contentVariants}
          transition={transition}
        >
          <DisclosureTrigger>
            <button
              className="w-full pb-2 text-left text-[14px] font-medium text-white dark:text-zinc-900"
              type="button"
              onClick={() => (componentToShow ? null : setIsOpen(!isOpen))}
            >
              {title}
            </button>
          </DisclosureTrigger>
          <DisclosureContent>
            <div className="flex flex-col pb-4 text-[13px] text-zinc-300 dark:text-zinc-700">
              <ReactMarkdown>{description}</ReactMarkdown>
            </div>
          </DisclosureContent>
        </Disclosure>
      </div>
    </div>
  );
};
