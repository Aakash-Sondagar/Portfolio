import Markdown from "react-markdown";

import { Separator } from "@/components/ui/separator";

import { description } from "@/utils/data";

const AboutMe = ({ view }) => {
  return (
    <div className="pt-3 sm:pt-8 px-4 sm:px-0">
      <h1 className="font-medium text-center text-lg sm:indent-1 sm:text-left">
        About Me
      </h1>
      <Separator className="mt-1 bg-zinc-700 w-full" />
      <div className="text-sm text-justify indent-3 sm:indent-8 sm:text-left sm:text-base mt-2">
        <Markdown>{description[view]}</Markdown>
      </div>
    </div>
  );
};

export default AboutMe;
