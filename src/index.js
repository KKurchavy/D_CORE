import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import configureStore from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-browser-router";
import Auth from "./components/authorization/Welcome";

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <div>
        <Route path="/home" component={App} />
        <Route exact path="/" component={Auth} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
