import React from "react";
import { NavLink } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="cta">
      <div className="wrapper">
        <h2>Vous avez un projet en tête ?</h2>
        <NavLink to="/contact">Parlons-en ensemble!</NavLink>
      </div>
    </div>
  );
};

export default CallToAction;
