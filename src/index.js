import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import GetStatus from "./components/GetStatus";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { NavLink } from "react-router-dom";

let data = require("./lol.json");
const flights = data.map(el => (
  <tr>
    <td>
      <NavLink to={"/flight/" + el.number}>{el.number}</NavLink>
    </td>
    <td>{el.passangers.length}</td>
    <GetStatus status={el.status} />
  </tr>
));

const flight = data[0].passangers.map(item => (
  <tr>
    <td>{item.name}</td>
    <td>{item.surname}</td>
    <td>{item.iin}</td>
    <td>{item.phone_number}</td>
  </tr>
));

ReactDOM.render(
  <App flights={flights} flight={flight} data={data} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
