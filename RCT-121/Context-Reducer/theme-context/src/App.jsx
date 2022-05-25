import { useContext } from "react";
import "./App.css";
import { Button } from "./Components/Button";
import { ThemeContext } from "./ContextProvider/ThemeContext";
import style from "./Components/Button.module.css";
function App() {
  const [theme, toggleTheme] = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className={`App ${style.appbase} ${
        theme === "light" ? style.applight : style.appdark
      }`}
    >
      <Button text={theme === "light" ? "dark" : "light"} />
      Hey There
    </div>
  );
}

export default App;
