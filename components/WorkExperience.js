import { Separator } from "@/components/ui/separator";
import { workExp } from "@/utils/data";
import { ResumeCard } from "@/components/ui/resume-card";

const WorkExperience = ({ view }) => {
  return (
    <div className="pt-6 sm:pt-8 text-sm px-4 sm:px-0">
      <h1 className="font-semibold text-center sm:text-left">
        Work Experience
      </h1>
      <Separator className="mt-2 bg-zinc-800 mb-2" />
      {workExp.map((work, index) => {
        return (
          <ResumeCard
            key={index}
            logoUrl={work.logoUrl}
            altText={work.company}
            title={work.company}
            subtitle={work.title}
            href={work.href}
            badges={work.badges}
            period={`${work.start} - ${work.end ?? "Present"}`}
            description={work.description}
            separator={index !== workExp.length - 1 ? true : false}
          />
        );
      })}
    </div>
  );
};

export default WorkExperience;
