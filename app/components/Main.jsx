import { useState, useEffect } from "react";

import ThemeContext from "../utils/ThemeContext";
import LandingPage from "./LandingPage";

const Main = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme: theme, toggleTheme }}>
        <LandingPage />
      </ThemeContext.Provider>
    </>
  );
};

export default Main;
