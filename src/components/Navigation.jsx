import React from "react";
import { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.svg";

const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <div className="wrapper">
        <NavLink to="/">
          <img className="logo" src={Logo} alt="Logo de Maxence Vallée" />
        </NavLink>
        <div
          className="hamburger-hidden"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <Hamburger label="Show menu" />
        </div>
        <nav
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <NavLink to="/" className={a => (a.isActive ? "a-active" : "")}>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/realisations"
                className={a => (a.isActive ? "a-active" : "")}
              >
                Réalisations
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={a => (a.isActive ? "a-active" : "")}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
