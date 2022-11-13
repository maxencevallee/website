import React from "react";
import { NavLink } from "react-router-dom";
import { TabTitle } from "../config/TabTitle";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Error = () => {
  TabTitle("Page introuvable - Maxence Vallée");

  return (
    <div className="error-page">
      <Navigation />
      <div className="error-wrapper">
        <h1>Erreur 404</h1>
        <h2>Oups! Cette page est introuvable.</h2>
        <div className="primary-button">
          <NavLink to="/">
            <span>Retour à l'accueil</span>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
