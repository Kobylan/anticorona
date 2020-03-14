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
    const newList = [
      ...list,
      data.map(fly =>
        fly.passangers.filter(passenger => passenger.to === value)
      )
    ];
    console.log("newList", newList);
    setList(newList);
    // history.push(`/${value}`);
    console.log("list", list);
    // return <Region newList={newList} />;
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
          <li className="list-element">
            {data.map(fly =>
              fly.passangers.map((passenger, index) => (
                <a
                  key={index}
                  // href={passenger.to}
                  value={passenger.to}
                  onClick={() => handleLink(passenger.to)}
                  className="region-link"
                >
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
