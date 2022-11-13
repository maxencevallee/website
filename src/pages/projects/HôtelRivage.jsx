import React from "react";
import { TabTitle } from "../../config/TabTitle";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Header from "../../assets/images/hôtel-rivage/illustration-1.png";
import Illustration1 from "../../assets/images/hôtel-rivage/illustration-2.png";
import Illustration2 from "../../assets/images/hôtel-rivage/illustration-3.png";
import CallToAction from "../../components/CallToAction";

const Project = () => {
  TabTitle("Hôtel Rivage – Maxence Vallée");

  return (
    <div className="project-page">
      <Navigation />
      <section className="hero">
        <h1>Hôtel Rivage</h1>
        <h2>Projet fictif de service d'hébergement en chambres.</h2>
      </section>
      <section className="illustrations">
        <div className="container">
          <img src={Header} alt="Mockup de la section accueil" />
          <img src={Illustration1} alt="Mockup de l'interface" />
          <img src={Illustration2} alt="Mockup de l'interface" />
        </div>
      </section>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Project;
