import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'typeface-roboto';
import AppContainer from "./containers/AppContainer";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";

import { store } from "./store/createStore";
import { healthCheck } from "./api/health";

ReactDOM.render(
  <Provider store={store}>
    <AppContainer healthCheck={healthCheck} />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
