import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import { BrowserRouter, Route } from "react-router-dom";
import Collaborator from "./components/Collaborator";
import Flights from "./components/Flights";

function App(props) {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <Auth />} />
      <Route
        path="/Collaborator"
        render={() => (
          <Collaborator flights={props.flights} passangers={props.passangers} />
        )}
      />
      <Route path="/Flight/:id">
        <Flights data={props.data} />
      </Route>
    </BrowserRouter>
  );
}

export default App;
