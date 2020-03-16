import React from "react";
import Image from "../index.jpg";
import { useHistory } from "react-router-dom";
import { Button, makeStyles } from "@material-ui/core";
import Cookies from "universal-cookie";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Auth = () => {
  const history = useHistory();

  function handleClick() {
    history.push("/Collaborator/");
  }
  const classes = useStyles();
  let login = () => {
    fetch("http://10.11.1.207:4000/api/login", {
      method: "POST",
      body: JSON.stringify(auth)
    })
      .then(res => {
        if (res.status !== 200) {
          throw new Error(res.status);
        } else {
          return res.json();
        }
      })
      .then(res => {
        // console.log(res);
        const cookies = new Cookies();
        let array = res.split(".");
        let role = atob(array[1]);
        role = JSON.parse(role);
        // console.log(role.Role);
        cookies.set("auth", res, { path: "/" });

        handleClick(res);
      })
      .catch(() => setAuth({ login: "", password: "" }));
  };
  const [auth, setAuth] = React.useState({ login: "", password: "" });
  const changeLog = evt => {
    setAuth({
      login: evt.target.value,
      password: auth.password
    });
  };
  const changePas = evt => {
    setAuth({
      login: auth.login,
      password: evt.target.value
    });
  };
  return (
    <div className="auth">
      <div className="logImg">
        <img src={Image} alt="lol" />
      </div>

      <div className="login">
        <input
          type="text"
          value={auth.login}
          placeholder="Введите логин"
          onChange={changeLog}
        />
        <input
          value={auth.password}
          type="password"
          placeholder="Введите пароль"
          onChange={changePas}
        />
      </div>
      <div className="submit">
        {/* <NavLink to="/collaborator"> */}
        <Button
          variant="outlined"
          size="large"
          color="inherit"
          float="right"
          className={classes.margin}
          onClick={login}
        >
          Войти
        </Button>
        {/* </NavLink> */}
      </div>
    </div>
  );
};

export default Auth;
