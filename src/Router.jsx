import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";

const Router = () => {
  return;
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>;
};

export default Router;
