import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const breakpoints = {
  breakpoints: {
    base: "0",
    sm: "552px",
    md: "768px",
    lg: "992px",
    xl: "1280px",
    "2xl": "1440px",
    "3xl": "1920px",
  },
};

const theme = extendTheme({ breakpoints });
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
);
