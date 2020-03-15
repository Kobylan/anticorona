import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import { BrowserRouter, Route } from "react-router-dom";
import Collaborator from "./components/Collaborator";
import Flights from "./components/Flights";
import Forms from "./components/Forms";

function App(props) {
  return (
    <BrowserRouter>
      <Route path="/form" render={() => <Forms data={props.data} />} />
      <Route exact path="/auth" render={() => <Auth />} />
      <Route
        path="/Collaborator"
        render={() => <Collaborator data={props.data} />}
      />
      <Route path="/Flight/:id">
        <Flights data={props.data} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
