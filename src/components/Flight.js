import React from "react";
import "../App.css";

function Flight(props) {
  let { id } = props.id;
  let person = find(id, props.data);

  return (
    <tbody>
      {person.passangers.map(e => (
        <tr>
          <td>{e.name}</td>
          <td>{e.surname}</td>
          <td>{e.iin}</td>
          <td>{e.phone_number}</td>
        </tr>
      ))}
    </tbody>
  );
}

function find(id, data) {
  return data.find(p => p.number === id);
}
export default Flight;
