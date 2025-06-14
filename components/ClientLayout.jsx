"use client";
import { useState } from "react";

const ClientLayout = ({ children }) => {
  return (
    <>
      <div className="transition-opacity duration-500 opacity-100">
        {children}
      </div>
    </>
  );
};

export default ClientLayout;