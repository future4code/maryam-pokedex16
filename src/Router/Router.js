import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailPage from "../Pages/DetailPage/DetailPage";
import HomePage from "../Pages/HomePage/HomePage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/detail">
          <DetailPage />
        </Route>

        <Route exact path="/pokedex">
          <PokedexPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
