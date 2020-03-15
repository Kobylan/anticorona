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
import Passanger from "./Passanger";

function Flight(props) {
  let { id } = props.id;
  let { url } = useRouteMatch();
  let person = find(id, props.data);

  return (
    <tbody>
      {person.passangers.map(e => (
        <tr>
          <td>
            <NavLink to={"/Passanger/" + e.iin}>{e.name}</NavLink>
          </td>
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
