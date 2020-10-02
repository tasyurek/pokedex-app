import React from "react";
import AppContext from "./app-context";
import { ContextDevTool } from "react-context-devtool";

import MyPokesReducer from "../reducers/myPokes";

const ContextProvider = (props) => {
  let myPokesJSON = localStorage.getItem("my-pokes");
  let _myPokes = JSON.parse(myPokesJSON);
  const [myPokes, myPokesDispatch] = React.useReducer(
    MyPokesReducer,
    _myPokes ? _myPokes : []
  );

  return (
    <AppContext.Provider value={{ myPokes, myPokesDispatch }}>
      <ContextDevTool
        context={AppContext}
        id="uniqContextId"
        displayName="AppContext"
      />

      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
