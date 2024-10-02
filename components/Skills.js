import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

import { Skills } from "@/utils/data";

const SkillSection = ({ view }) => {
  const skill= Skills[view];
  
  return (
    <div className="pt-3 sm:pt-8 px-4 sm:px-0">
      <h1 className="font-medium text-center text-lg sm:indent-1 sm:text-left">
        Skills
      </h1>
      <Separator className="mt-1 bg-zinc-800" />
      <div className="flex flex-wrap mt-2 gap-1 sm:gap-2">
        {skill?.map((skill) => (
          <Badge className={"z-0 m-[2px] text-xs"} key={skill}>
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
