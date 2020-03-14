import React, { useState } from "react";
import Region from "./Region";
import { Link, useHistory } from "react-router-dom";

function RegionList() {
  let history = useHistory();
  const [list, setList] = useState();
  var data = require("../lol.json");
  // {
  //   data.map(fly =>
  //     fly.passangers.map(passenger => console.log("passenger", passenger))
  //   );
  // }

  const handleLink = value => {
    const newList = data.map(fly =>
      fly.passangers.filter(passenger => passenger.to === value)
    );
    setList(newList);
    history.push(`/${value}`, { newList: newList });
  };

  return (
    <div>
      <header className="regionlist-header">
        <Link to="/" className="logout" href="#">
          Выход
        </Link>
      </header>
      <div className="list-container">
        <h2 className="list-header">Список регионов</h2>
        <ul className="list">
          {data.map(fly =>
            fly.passangers.map((passenger, index) => (
              <li
                key={index}
                onClick={() => handleLink(passenger.to)}
                className="list-element"
              >
                {passenger.to}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default RegionList;
