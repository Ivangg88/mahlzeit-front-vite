import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import styledMainTheme from "./styles/styledMainTheme.tsx";
import { ThemeProvider } from "styled-components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={styledMainTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
