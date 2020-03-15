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
      <table className="container">
        <thead>
          <tr>
            <th>
              <h1>Имя</h1>
            </th>
            <th>
              <h1>Фамилия</h1>
            </th>
            <th>
              <h1>ИИН</h1>
            </th>
            <th>
              <h1>Номер телефона</h1>
            </th>
          </tr>
        </thead>
        <Flight id={useParams()} data={props.data} />
      </table>
    </div>
  );
}
