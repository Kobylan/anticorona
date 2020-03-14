import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegionList from "./RegionList";
import Region from "./Region";
import NotFound from "./NotFound";
import Auth from "./Auth";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/region-list/" component={RegionList} />
        <Route path="/:region" component={Region} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
