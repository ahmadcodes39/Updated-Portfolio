import React from "react";
import Home from "./Pages/Home";
import { useContext } from "react";
import { ThemeContext } from "./Store/ThemeContext.jsx";
const App = () => {
  const {theme,setTheme} = useContext(ThemeContext)
  return (
    <div data-theme={theme}>
      <Home/>
    </div>
  );
};

export default App;
