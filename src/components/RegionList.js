import React from "react";
import Region from "./Region";

function RegionList() {
  var data = require("../lol.json");
  return (
    <div>
      <header className="regionlist-header">
        <a className="logout" href="#">
          Выход
        </a>
      </header>
      <div className="list-container">
        <h2 className="list-header">Список регионов</h2>
        <ul className="list">
          <li className="list-element">
            {data.map(fly =>
              fly.passangers.map((passenger, index) => (
                <a key={index} href={passenger.to} className="region-link">
                  {passenger.to}
                </a>
              ))
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RegionList;
