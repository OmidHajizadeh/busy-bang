import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProviders from "./lib/material/ThemeProvider.tsx";
import { QueryProvider } from "./lib/queries/QueryProvider.tsx";
import App from "./App.tsx";
import "./globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProviders>
      <QueryProvider>
        <App />
      </QueryProvider>
    </ThemeProviders>
  </React.StrictMode>
);
