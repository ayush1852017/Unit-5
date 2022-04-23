import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AppStyle } from "../component/Appstyle";
export const Navbar = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <nav
      style={{
        border: "1px solid tomato",
        height: "70px",
        display: "flex",
        justifyContent: "end",
        padding: "10px",
        margin: "10px",
      }}
    >
      <button
        onClick={() => {
          handleTheme();
        }}
      >
        {theme}
      </button>
      <AppStyle>Hello</AppStyle>
    </nav>
  );
};
