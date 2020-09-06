import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bulma/css/bulma.css";
import "./styles.scss";
import { appReducer } from "./reducers/AppReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(appReducer);
console.log("this is in index store state", store.getState());

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
