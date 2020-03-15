import React from "react";
import "../App.css";
import PassangerTable from "./PassangerTable";

function Flight(props) {
  let { id } = props.id;
  let person = find(id, props.data);

  return <PassangerTable info={person.passangers} />;
}

function find(id, data) {
  return data.find(p => p.number === id);
}
export default Flight;
