import React from "react";
import "../App.css";
import {
  Link,
  useRouteMatch,
  useParams,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function Passanger(props) {
  let { id } = props.id;
  console.log(id);
  let person = find(id, props.data);

  return (
    <tbody>
      {person.passangers.map(e => (
        <tr>
          <td>{e.iin}</td>
          <td>{e.phone_number}</td>
        </tr>
      ))}
    </tbody>
  );
}

function find(id, data) {
  return data.find(p => p.iin === id);
}
export default Passanger;
