import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import AppContainer from "../components/AppContainer";
import MyPokesPage from "../components/MyPokesPage";
import Navigator from "../components/Navigator.js";
import PokeDetails from "../components/PokeDetails";
import PokemonBrowserPage from "../components/PokemonBrowserPage";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Navigator />
      <AppContainer>
        <Switch>
          <Route exact path="/" component={PokemonBrowserPage} />
          <Route exact path="/mypokes" component={MyPokesPage} />
          <Route exact path="/pokemon/:id" component={PokeDetails} />
        </Switch>
      </AppContainer>
    </BrowserRouter>
  );
};

export default MainRouter;