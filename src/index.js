import React from "react";
import ReactDOM from "react-dom/client";
import { SWRConfig } from "swr";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SWRConfig
      value={{
        fetcher: ([url, headers]) =>
          fetch(url, { headers }).then((res) => res.json()),
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>
);

reportWebVitals();
