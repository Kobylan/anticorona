import React from "react";
import Image from "../index.jpg";

const Auth = () => (
  <div className="auth">
    <div className="logImg">
      <img src={Image} />
    </div>

    <div className="login">
      <input type="text" placeholder="Введите логин" />
      <input type="password" placeholder="Введите пароль" />
    </div>
    <div className="submit">
      <input type="submit" value="Войти" />
    </div>
  </div>
);

export default Auth;
