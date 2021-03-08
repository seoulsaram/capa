import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import RequestInfo from "./service/request_info";

const requestInfo = new RequestInfo();

ReactDOM.render(
  <React.StrictMode>
    <App requestInfo={requestInfo} />
  </React.StrictMode>,
  document.getElementById("root")
);
