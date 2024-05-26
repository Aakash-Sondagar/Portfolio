import Image from "next/image";
import { PiGithubLogoThin, PiLinkLight } from "react-icons/pi";

import projects from "../utils/project";

const ProjectCard = () => {
  return (
    <div>
      {projects.map((item, index) => (
        <div
          key={index}
          className="bg-neutral-100 dark:bg-[#161616] gap-x-6 p-3 rounded-xl mt-3 flex justify-between items-center md:items-start"
        >
          <Image
            width={800}
            height={800}
            className="w-10 h-9 rounded-lg object-cover"
            src={item.imgSrc}
            alt=""
          />
          <div className="flex-1">
            <h4 className="font-Interegular text-black dark:text-white text-lg text-center md:text-left">
              {item.title}
            </h4>
            <p className="font-Interegular text-sm text-neutral-700 dark:text-neutral-500 hidden md:block">
              {item.description}
            </p>
            <div className="uppercase text-black dark:text-white border border-neutral-200 dark:border-neutral-800 h-7 w-fit px-2 justify-center text-xs font-Interegular items-center rounded-md mt-3 hidden md:flex">
              {item.label}
            </div>
          </div>
          {item.githubLink && (
            <button
              onClick={() => window.open(item.githubLink, "_blank")}
              className="text-black bg-neutral-200 dark:text-white dark:bg-neutral-800 flex items-center gap-x-2 h-fit p-2 rounded-lg"
            >
              <span className="font-Intermedium text-xs hidden md:block">
                GitHub
              </span>
              <PiGithubLogoThin />
            </button>
          )}
          {item?.liveLink && (
            <button
              onClick={() => window.open(item?.liveLink, "_blank")}
              className="text-black bg-neutral-200 dark:text-white dark:bg-neutral-800 flex items-center gap-x-2 h-fit  p-2 rounded-lg"
            >
              <span className="font-Intermedium text-xs hidden md:block">
                link
              </span>
              <PiLinkLight />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
