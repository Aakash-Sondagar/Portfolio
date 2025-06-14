"use client";

const ThemeProvider = () => {
  return (
    <div className="atmospheric-container">
      {/* Dappled Light Effect */}
      <div className="dappled-light"></div>
      
      {/* Leaves Effect */}
      <div className="leaves-container">
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
        <div className="leaf"></div>
      </div>
      
      {/* Window Shutters */}
      <div className="shutters-container">
        <div className="shutter shutter-left"></div>
        <div className="shutter shutter-right"></div>
      </div>
    </div>
  );
};

export default ThemeProvider;