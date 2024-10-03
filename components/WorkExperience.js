import { Separator } from "@/components/ui/separator";
import { workExp } from "@/utils/data";
import { ResumeCard } from "@/components/ui/resume-card";

const WorkExperience = ({ view }) => {
  return (
    <div className="pt-3 sm:pt-8 px-4 sm:px-0">
      <h1 className="font-medium text-center text-lg sm:indent-1 sm:text-left">
        Work Experience
      </h1>
      <Separator className="mt-1 bg-zinc-700 w-full" />
      {workExp.map((work, index) => {
        return (
          <ResumeCard
            key={index}
            logoUrl={work.logoUrl}
            altText={work.company}
            company={work.company}
            role={work.role}
            href={work.href}
            badges={work.badges}
            period={`${work.start} - ${work.end ?? "Present"}`}
            description={work.description}
          />
        );
      })}
    </div>
  );
};

export default WorkExperience;
