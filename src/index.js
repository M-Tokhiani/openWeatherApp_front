import React from "react";
import ReactDOM from "react-dom/client";
import { Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import App from "./App";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";


Auth.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AmplifyProvider>
      <App />
    </AmplifyProvider>
  </React.StrictMode>
);
