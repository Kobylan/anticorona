import React from "react";
import Image from "../index.jpg";
import { NavLink } from "react-router-dom";

const Auth = () => (
  <div className="auth">
    <div className="logImg">
      <img src={Image} alt="lol" />
    </div>

    <div className="login">
      <input type="text" placeholder="Введите логин" />
      <input type="password" placeholder="Введите пароль" />
    </div>
    <div className="submit">
      <NavLink to="/Collaborator">
        <input type="submit" value="Войти" />
      </NavLink>
    </div>
  </div>
);

export default Auth;
