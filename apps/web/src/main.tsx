import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import "./styles/global.css";

const routerBase = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthContextProvider>
    <BrowserRouter basename={routerBase}>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
