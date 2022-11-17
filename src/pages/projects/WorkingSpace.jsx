import React from "react";
import { TabTitle } from "../../config/TabTitle";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Illustration1 from "../../assets/images/working-space/illustration-1.png";
import Illustration2 from "../../assets/images/working-space/illustration-2.png";
import CallToAction from "../../components/CallToAction";

const Project = () => {
  TabTitle("Working Space - Maxence Vallée");

  return (
    <div className="project-page">
      <Navigation />
      <section className="hero">
        <h1>Working Space</h1>
        <h2>Projet fictif d'espace de travail partagé.</h2>
      </section>
      <section className="illustrations">
        <div className="container">
          <img src={Illustration1} alt="Mockup de l'interface'" />
          <img src={Illustration2} alt="Mockup de l'interface" />
        </div>
      </section>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Project;
