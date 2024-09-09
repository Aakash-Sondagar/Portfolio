import { useContext } from "react";
import ViewContext from "@/utils/viewContext";

import ProfileHeader from "@/components/ProfileHeader";
import AboutMe from "@/components/AboutMe";

const Backend = () => {
  const { view } = useContext(ViewContext);
  return (
    <div className="mx-auto max-w-[692px] text-gray-1200 overflow-x-hidden px-6 py-12 text-gray-1200 sm:py-32 md:overflow-x-visible md:py-16">
      <ProfileHeader view={view} />
      <AboutMe view={view} />
    </div>
  );
};

export default Backend;
