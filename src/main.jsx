import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import toast, { Toaster } from 'react-hot-toast';
import { ThemeContextProvider } from "./Store/ThemeContext.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <Toaster position="top-center"/>
      <App />
    </ThemeContextProvider>
  </StrictMode>
);
