import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import ContextProvider from "./context/ContextProvider";
import MainRouter from "./routers/MainRouter";
import "./styles/styles.scss";

ReactDOM.render(
  <ContextProvider>
    <MainRouter />
  </ContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
