import React from "react";
import "./App.css";
import Auth from "./components/Auth";
import { BrowserRouter, Route } from "react-router-dom";
import Collaborator from "./components/Collaborator";
import Flights from "./components/Flights";
import Regions from "./components/Regions";
import Home from "./components/Home";
import Cookies from "universal-cookie";
let cookies = new Cookies();
let cookie = cookies.get("auth");
let array = cookie.split(".");
let role = atob(array[1]);
role = JSON.parse(role);
console.log(role.Role);
function App(props) {
  return (
    <BrowserRouter>
      <Route exact path="/" render={() => <Home />} />

      <Route exact path="/Auth" render={() => <Auth />} />
      <Route
        path="/Collaborator"
        render={() => <Collaborator data={props.data} />}
      />
      <Route path="/Flight/:id">
        <Flights data={props.data} />
      </Route>
      <Route path="/Region" render={() => <Regions />} />
    </BrowserRouter>
  );
}

export default App;
