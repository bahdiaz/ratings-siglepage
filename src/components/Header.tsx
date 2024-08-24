import React from "react";
import "../components/Header.css";
import Logo from "../assets/Vector.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__left">
        <img src={Logo} alt="Logo" className="header__logo" />
      </div>
      <div className="header__right">
        <div className="header__menu">
          <div className="hamburguer">
            <div></div>
          </div>
          <span className="menu-text">MENU</span>
        </div>
        <div className="header__search">
          <input type="text" placeholder="search" />
        </div>
        <button className="header__login">login</button>
      </div>
    </header>
  );
};

export default Header;
