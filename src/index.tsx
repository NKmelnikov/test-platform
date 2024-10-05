import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/app";
import { ChakraProvider } from "@chakra-ui/react";
import { StepsProvider } from "./components/app/StepContext";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <StepsProvider>
        <App />
      </StepsProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
