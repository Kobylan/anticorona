import React from "react";
const GetStatus = props => {
  if (props.status === "infected") {
    return <td style={{ color: "#f44" }}>Зараженный</td>;
  }
  if (props.status === "notinfected") {
    return <td style={{ color: "#29c850" }}>Не зараженный</td>;
  }
  return <td style={{ color: "#fff" }}>Проверяется</td>;
};
export default GetStatus;
