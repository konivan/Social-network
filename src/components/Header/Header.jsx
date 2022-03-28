import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css';

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://2code.info/demo/themes/Discy/Main/wp-content/themes/discy/images/logo.png" />
      {props.isAuth ? (
        props.login
      ) : (
        <NavLink to={"/login"}>
          <button className={s.loginBtn}>Log In</button>
        </NavLink>
      )}
    </header>
  );
};

export default Header;