import React from "react";
import { Route, Switch } from "react-router";
import { HomePage, DetailsPage } from "../pages";

function Main() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:id" component={DetailsPage} />
      </Switch>
    </div>
  );
}

export default Main;