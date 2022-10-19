import React from "react";
import { TabTitle } from "../config/TabTitle";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import HôtelRivage from "../assets/images/hôtel-rivage/hotel-rivage.png";
import Space from "../assets/images/space/space.png";
import CallToAction from "../components/CallToAction";

const Works = () => {
  TabTitle("Réalisations – Maxence Vallée");
  return (
    <div className="works-page">
      <Navigation />
      <div className="works-wrapper">
        <section className="hero">
          <h1>
            Toutes mes <br /> réalisations
          </h1>
        </section>
        <section className="container">
          <div className="item">
            <NavLink to="/realisations/hotel-rivage">
              <div className="cover">
                <img src={HôtelRivage} alt="Hôtel Rivage" />
              </div>
              <h3>Hôtel Rivage</h3>
              <p>Service d'hébergement en chambres</p>
            </NavLink>
          </div>
          <div className="item">
            <NavLink to="/realisations/space">
              <div className="cover">
                <img src={Space} alt="Space" />
              </div>
              <h3>Space</h3>
              <p>Espace de travail partagé</p>
            </NavLink>
          </div>
        </section>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Works;
