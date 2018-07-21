import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { healthCheck } from "./api/health";

ReactDOM.render(
  <App healthCheck={healthCheck} />,
  document.getElementById("root")
);
registerServiceWorker();
