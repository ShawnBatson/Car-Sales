import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bulma/css/bulma.css";
import "./styles.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore();

const rootElement = document.getElementById("root");
ReactDOM.render(
  // this lets us use the store in whatever components
  // being rendered by <App>
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
