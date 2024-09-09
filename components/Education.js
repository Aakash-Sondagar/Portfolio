import { Separator } from "@/components/ui/separator";
import { educationDetails } from "@/utils/data";
import { ResumeCard } from "@/components/ui/resume-card";

const Education = () => {
  return (
    <div className="pt-6 sm:pt-8 animate-slideFromDownAndFade text-[14px] sm:text-[16px] px-4 sm:px-0">
      <h1 className="font-semibold text-center sm:text-left">Education</h1>
      <Separator className="mt-2 bg-zinc-800 mb-2" />
      <div className="mt-3">
        {educationDetails?.map((education, index) => {
          return (
            <ResumeCard
              key={education.school}
              href={education.href}
              logoUrl={education.logoUrl}
              altText={education.school}
              title={education.school}
              subtitle={education.degree}
              period={`${education.start} - ${education.end}`}
              separator={index !== educationDetails.length - 1 ? true : false}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Education;
