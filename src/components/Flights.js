import React from "react";
import "../App.css";
import { NavLink, useParams } from "react-router-dom";
import Flight from "./Flight";

export default function Flights(props) {
  return (
    <div className="container">
      <NavLink to="/collaborator">
        <h1>Список пассажиров</h1>
      </NavLink>

      <Flight id={useParams()} data={props.data} />
    </div>
  );
}
