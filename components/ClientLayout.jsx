"use client";

const ClientLayout = ({ children }) => {
  return (
    <div className="content-wrapper page-transition">
      {children}
    </div>
  );
};

export default ClientLayout;