import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import { NavLink } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));
const Home = () => {
  const classes = useStyles();

  return (
    <div className="home">
      <NavLink to="/idi nahui">
        <Button
          variant="outlined"
          size="large"
          color="inherit"
          className={classes.margin}
        >
          Запольнить анкету
        </Button>
      </NavLink>
      <NavLink to="/auth">
        <Button
          variant="outlined"
          size="large"
          color="inherit"
          className={classes.margin}
        >
          Авторизация
        </Button>
      </NavLink>
    </div>
  );
};

export default Home;
