import React from "react";
import "./Footer.css";
import Logo from "../assets/Vector.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="footer__info">
        <div className="footer__column">
          <h4>COMPANY</h4>
          <p>About Us</p>
          <p>Partnerships</p>
          <p>FAQ</p>
        </div>
        <div className="footer__column">
          <h4>COMPANY</h4>
          <p>About Us</p>
          <p>Partnerships</p>
          <p>FAQ</p>
        </div>
        <div className="footer__column">
          <h4>COMPANY</h4>
          <p>About Us</p>
          <p>Partnerships</p>
          <p>FAQ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
