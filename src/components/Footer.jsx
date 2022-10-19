import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="copyright">
          <span>© 2022 Maxence Vallée | </span>
          <NavLink
            to="/mentions-legales"
            className={a => (a.isActive ? "a-active" : "")}
          >
            Mentions légales
          </NavLink>
        </div>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/maxencevallee/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
