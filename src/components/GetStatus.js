import React from "react";
const GetStatus = props => {
  if (props.status === "infected") {
    return <td style={{ color: "#f44", float: "left" }}>Зараженный</td>;
  }
  if (props.status === "notinfected") {
    return <td style={{ color: "#29c850", float: "left" }}>Не зараженный</td>;
  }
  return <td style={{ color: "#000", float: "left" }}>Проверяется</td>;
};
export default GetStatus;
