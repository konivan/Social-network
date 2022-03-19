import React from "react";
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img src="https://2code.info/demo/themes/Discy/Main/wp-content/themes/discy/images/logo.png" />
      <button className={s.loginBtn}>Log In</button>
    </header>
  );
}

export default Header;