import { createContext, useState } from "react";

// Create the context
export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const defaultTheme = localStorage.getItem("theme") || "dim";
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
