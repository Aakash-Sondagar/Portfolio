import { useContext } from "react";
import ViewContext from "@/utils/viewContext";

import { BlurFade } from "@/components/ui/blur-fade";

import ProfileHeader from "@/components/ProfileHeader";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";

const SDE = () => {
  const { view } = useContext(ViewContext);
  const BLUR_FADE_DELAY = 0.04;

  return (
    <div className="mx-auto min-h-screen max-w-2xl overflow-x-hidden px-3 py-9 sm:py-16 md:overflow-x-visible">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <ProfileHeader view={view} />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <AboutMe view={view} />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <Skills view={view} />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 7}>
        <WorkExperience view={view} />
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 9}>
        <Education />
      </BlurFade>
      {/* <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <Projects view={view} />
      </BlurFade> */}
    </div>
  );
};

export default SDE;
