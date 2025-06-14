"use client";
import { useState } from "react";
import HelloLoader from "./HelloLoader";

const ClientLayout = ({ children }) => {
  const [showLoader, setShowLoader] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  const handleLoaderComplete = () => {
    setShowLoader(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setContentVisible(true);
    }, 100);
  };

  return (
    <>
      {showLoader && <HelloLoader onComplete={handleLoaderComplete} />}
      <div 
        className={`transition-opacity duration-500 ${
          contentVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default ClientLayout;