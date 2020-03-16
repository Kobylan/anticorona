import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import PassangerTable from "./PassangerTable";

export default function Flights(props) {
  return (
    <div className="container">
      <h1>Список пассажиров</h1>

      <PassangerTable id={useParams()} data={props.data} />
    </div>
  );
}
