import React from "react";
import { TabTitle } from "../../config/TabTitle";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Header from "../../assets/images/space/illustration-1.png";
import CallToAction from "../../components/CallToAction";

const Project = () => {
  TabTitle("Space - Maxence Vallée");

  return (
    <div className="project-page">
      <Navigation />
      <section className="hero">
        <h1>Space</h1>
        <h2>Projet fictif d'espace de travail partagé.</h2>
      </section>
      <section className="illustrations">
        <div className="container">
          <img src={Header} alt="Mockup de la section accueil" />
        </div>
      </section>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Project;
