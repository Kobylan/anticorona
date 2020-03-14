import React from "react";

export default function Flight() {
  var data = require("../lol.json");
  const template = Object.keys(data).map(item => (
    <tr>
      <td>{data[item].number}</td>
      <td>{data[item].passangers.length}</td>
      <td style={{ color: col(data[item].status) }}>
        {infected(data[item].status)}
      </td>
    </tr>
  ));
  return template;
}

function infected(str) {
  if (str === "infected") {
    return "Заражен";
  }
  if (str === "notinfected") {
    return "Не заражен";
  }
  return "Проверяется";
}
function col(str) {
  if (str === "infected") {
    return "#f44";
  }
  if (str === "notinfected") {
    return "#29c850";
  }
  return "#fff";
}
// {
/* <div>{data.map(key => console.log("key", key))}</div> */
// }
// const template = Object.keys(data.books).map(item => (
//   <span key={data.books[item].id}>
//     {data.books[item].author} - {data.books[item].name}
//   </span>
// ));
