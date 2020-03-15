import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function RegionList() {
  var data = require("../lol.json");
  const [, setList] = useState();
  var history = useHistory();
  const classes = useStyles();
  const handleLink = value => {
    const newList = data.map(fly =>
      fly.passangers.filter(passenger => passenger.to === value)
    );
    setList(newList);
    history.push(`/${value}`, { newList: newList });
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folders">
        {data.map(fly =>
          fly.passangers.map((passenger, index) => (
            <ListItemLink key={index} onClick={() => handleLink(passenger.to)}>
              <ListItemText primary={passenger.to} />
            </ListItemLink>
          ))
        )}
        <Divider />
      </List>
    </div>
  );
}
// import React, { useState } from "react";
// import Region from "./Region";
// import { Link, useHistory } from "react-router-dom";

// function RegionList() {
//   let history = useHistory();
//   const [list, setList] = useState();
//   var data = require("../lol.json");
//   // {
//   //   data.map(fly =>
//   //     fly.passangers.map(passenger => console.log("passenger", passenger))
//   //   );
//   // }

//   const handleLink = value => {
//     const newList = data.map(fly =>
//       fly.passangers.filter(passenger => passenger.to === value)
//     );
//     setList(newList);
//     history.push(`/${value}`, { newList: newList });
//   };

//   return (
//     <div>
//       <header className="regionlist-header">
//         <Link to="/" className="logout" href="#">
//           Выход
//         </Link>
//       </header>
//       <div className="list-container">
//         <h2 className="list-header">Список регионов</h2>
//         <ul className="list">
//           {data.map(fly =>
//             fly.passangers.map((passenger, index) => (
//               <li
//                 key={index}
//                 onClick={() => handleLink(passenger.to)}
//                 className="list-element"
//               >
//                 {passenger.to}
//               </li>
//             ))
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default RegionList;
