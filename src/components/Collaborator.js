import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
// import Stepper from "./Stepper";

export default function Collaborator(props) {
  return (
    <div className="container">
      <NavLink to="/">
        <h1>Список рейсов</h1>
      </NavLink>
      <table className="container">
        <thead>
          <tr>
            <th>
              <h1>Номер рейса</h1>
            </th>
            <th>
              <h1>Количество людей</h1>
            </th>
            <th>
              <h1>Статус</h1>
            </th>
          </tr>
        </thead>
        <tbody>{props.flights}</tbody>
      </table>
    </div>
  );
}
