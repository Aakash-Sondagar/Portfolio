import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

import { Skills } from "@/utils/data";

const SkillSection = ({ view }) => {
  const skill= Skills[view];
  
  return (
    <div className="pt-6 sm:pt-8 text-sm px-4 sm:px-0">
      <h1 className="font-semibold text-center sm:text-left">Skills</h1>
      <Separator className="mt-2 bg-zinc-800" />
      <div className="flex flex-wrap gap-2 sm:gap-3 mt-3">
        {skill?.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
