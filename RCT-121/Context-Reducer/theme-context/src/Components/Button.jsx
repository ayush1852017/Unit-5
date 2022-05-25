import React, { useContext } from "react";
import { ThemeContext } from "../ContextProvider/ThemeContext";

export const Button = ({ text }) => {
  const [theme, toggleTheme] = useContext(ThemeContext);
  console.log(theme);
  return (
    <div>
      <button onClick={toggleTheme}>{text}</button>
    </div>
  );
};
