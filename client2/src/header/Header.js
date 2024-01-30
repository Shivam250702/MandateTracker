import React from "react";
import Logo from "../assets/logo.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className="left">
        <div className="headerlogo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="header-text">
          <h1 className="heading">Mandate Creation</h1>
          <p className="subheading">Empowering Your Business Processes</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
