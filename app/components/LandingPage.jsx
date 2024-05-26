import dynamic from "next/dynamic";
import { useState } from "react";

import ScrollHeader from "./ScrollHeader";
import ImageComponent from "./ImageComponent";
import ProfileInfo from "./ProfileInfo";
import ResumeLayout from "./ResumeLayout";
import ShareLayout from "./ShareLayout";
import Stories from "./Stories";
import Links from "./Links";
import ProjectCard from "./ProjectCard";
const MapComponent = dynamic(() => import("./MapComponent"), { ssr: false });
import Message from "./Message";
import Footer from "./Footer";

const LandingPage = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Share */}
      {open && <ShareLayout open={open} setOpen={setOpen} />}

      {/* Scroll Header */}
      <ScrollHeader setOpen={setOpen} />

      {/* Images */}
      <ImageComponent />

      <div className="bg-[#ffffff] dark:bg-[#111111] p-3">
        <div className="max-w-lg mx-auto bg-[#ffffff] dark:bg-[#111111] pt-8 gap-y-3">
          {/* Profile Info */}
          <ProfileInfo />
          <ResumeLayout />
          {/* Stories */}
          {/* <div className="flex justify-center gap-x-7">
            <Stories />
          </div> */}
          <Links />
          <ProjectCard />
          <MapComponent />
          <Message />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
