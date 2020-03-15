import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import FlightTable from "./FlightTable";

export default function Collaborator(props) {
  return (
    <div className="container">
      <NavLink to="/">
        <h1>Список рейсов</h1>
      </NavLink>
      <FlightTable data={props.data} />
    </div>
  );
}
