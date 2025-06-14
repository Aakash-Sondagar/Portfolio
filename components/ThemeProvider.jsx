"use client";

const ThemeProvider = ({ children }) => {
  return (
    <div>
      {/* Dappled Light Effects */}
      <div id="dappled-light">
        <div id="glow"></div>
        <div id="glow-bounce"></div>
        <div className="perspective">
          <div id="leaves"></div>
          <div id="blinds">
            <div className="shutters">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="shutter"></div>
              ))}
            </div>
            <div className="vertical">
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
        <div id="progressive-blur">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* SVG Filter for wind effect */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="wind">
            <feTurbulence 
              baseFrequency="0.02 0.1" 
              numOctaves="3" 
              result="noise"
            />
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale="2"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ThemeProvider;