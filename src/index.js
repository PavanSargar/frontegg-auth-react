import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { FronteggProvider } from "@frontegg/react";

const contextOptions = {
  baseUrl: process.env.REACT_APP_BASE_URL,
  clientId: process.env.REACT_APP_CLIENT_ID,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
    <App />
  </FronteggProvider>
);
