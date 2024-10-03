import { Separator } from "@/components/ui/separator";
import { educationDetails } from "@/utils/data";
import { ResumeCard } from "@/components/ui/resume-card";

const Education = () => {
  return (
    <div className="pt-3 sm:pt-8 px-4 sm:px-0">
      <h1 className="font-medium text-center text-lg sm:indent-1 sm:text-left">
        Education
      </h1>
      <Separator className="mt-1 bg-zinc-700 w-full" />
      {educationDetails?.map((education, index) => {
        return (
          <ResumeCard
            key={education.school}
            href={education.href}
            logoUrl={education.logoUrl}
            altText={education.school}
            company={education.school}
            role={education.degree}
            period={`${education.start} - ${education.end}`}
          />
        );
      })}
    </div>
  );
};

export default Education;
