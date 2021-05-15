import React, { useContext, useState } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeToggler);

  return (
    <div
      onClick={() => {
        setThemeMode = themeMode === "light" ? "dark" : "light";
      }}
    >
      <p>{themeMode === "light" ? "Lights Off" : "Lights On"}</p>
    </div>
  );
};

export default ThemeToggler;
