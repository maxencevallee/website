import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="copyright">
          <span>© 2022 Maxence Vallée</span>
        </div>
        <div className="legals">
          <NavLink to="/mentions-legales">Mentions légales</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
