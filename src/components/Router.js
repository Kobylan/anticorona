import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegionList from "./RegionList";
import NotFound from "./NotFound";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" />
        <Route path="/region-list/" component={RegionList} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
