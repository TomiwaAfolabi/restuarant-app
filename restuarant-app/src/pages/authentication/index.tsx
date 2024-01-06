import React, { useState } from "react";
import "./style.scss";
import Logo from "../../assets/svg/general/logo.svg";
import Login from "./login";
import Signup from "./signup";

const Authentication = () => {
  const [navState, toggleNav] = useState(true);

  const toggleNavBar = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    if (navState) {
      toggleNav(false);
    } else if (!navState) {
      toggleNav(true);
    }
  };

  return (
    <div className="auth_container">
      <div className="auth_nav">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="nav_buttons">
          <div className="login" onClick={toggleNavBar}>
            <p>Login</p>
          </div>
          <div className="register" onClick={toggleNavBar}>
            <p> Register</p>
          </div>
        </div>
      </div>
      <div className="form_container">
        <form>{navState ? <Login /> : <Signup />}</form>
      </div>
    </div>
  );
};

export default Authentication;
