import React from "react";
import "../App.css";
import FlightTable from "./FlightTable";

export default function Collaborator(props) {
  return (
    <div className="container">
      <h1>Список рейсов</h1>
      <FlightTable data={props.data} />
    </div>
  );
}
