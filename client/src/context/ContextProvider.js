import React from "react";
import AppContext from "./app-context";
import { ContextDevTool } from "react-context-devtool";

import MyPokesReducer from "../reducers/myPokes";

const ContextProvider = (props) => {
  const [myPokes, myPokesDispatch] = React.useReducer(MyPokesReducer, []);

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
