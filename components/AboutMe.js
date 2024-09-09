import Markdown from "react-markdown";
import { Separator } from "@/components/ui/separator";

import { description } from "@/utils/data";

const AboutMe = ({ view }) => {
  return (
    <div className="pt-6 sm:pt-8 text-sm px-4 sm:px-0">
      <h1 className="font-semibold text-center sm:text-left">About Me</h1>
      <Separator className="mt-2 bg-zinc-800" />
      <div className="text-pretty text-justify sm:text-left mt-3">
        <Markdown>{description[view]}</Markdown>
      </div>
    </div>
  );
};

export default AboutMe;
