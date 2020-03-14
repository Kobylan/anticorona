import React from "react";
import "../App.css";
import Flight from "./Flight";

function App() {
  return (
    <table class="container">
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
      <tbody>
        <Flight />
      </tbody>
    </table>
  );
}

export default App;
