import React from "react";
import "../App.css";
import { NavLink, useParams } from "react-router-dom";
import Passanger from "./Passanger";

export default function Passangers(props) {
  return (
    <div className="container">
      <NavLink to="/collaborator">
        <h1>Список пассажиров</h1>
      </NavLink>
      <table className="container">
        <Passanger id={useParams()} data={props.data} />
      </table>
    </div>
  );
}
