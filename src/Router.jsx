import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import UserPage from "./Components/UserPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/users" component={UserPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
