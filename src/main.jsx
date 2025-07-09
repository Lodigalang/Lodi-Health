import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./main.css";
import App from "./App.jsx";
import { FormProvider } from "./Components/Context/FormContext";
import AuthContextProvider from "./Components/Context/AuthContext.jsx";
import { UnderDevProvider } from "./Components/Context/UnderDevContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <FormProvider>
          <UnderDevProvider>
            <App />
          </UnderDevProvider>
        </FormProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
