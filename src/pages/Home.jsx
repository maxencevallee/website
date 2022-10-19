import React from "react";
import { TabTitle } from "../config/TabTitle";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";
import Bitmoji from "../assets/images/image-hero.svg";
import Footer from "../components/Footer";
import CDC from "../assets/images/step-1.svg";
import Maquettes from "../assets/images/step-2.svg";
import Développement from "../assets/images/step-3.svg";
import Lancement from "../assets/images/step-4.svg";
import Maintenance from "../assets/images/step-5.svg";
import HôtelRivage from "../assets/images/hôtel-rivage/hotel-rivage.png";
import Space from "../assets/images/space/space.png";
import CallToAction from "../components/CallToAction";

const Home = () => {
  TabTitle("Maxence Vallée – Développeur & Designer d'interface");

  return (
    <div className="home-page">
      <Navigation />
      <section className="hero">
        <div className="content">
          <div className="text">
            <h1>Concrétisez vos projets digitaux</h1>
            <p>
              Je suis Maxence,{" "}
              <strong>Développeur & Designer d'interface</strong> indépendant,
              spécialisé dans la création et la refonte d'applications web.
            </p>
          </div>
          <div className="primary-button">
            <NavLink to="/contact">
              <span>Travaillons ensemble !</span>
            </NavLink>
          </div>
        </div>
        <img src={Bitmoji} alt="Illustration de Maxence Vallée" />
      </section>
      <section className="services">
        <div className="text">
          <h2>Mon processus de création</h2>
          <p>
            Bénéficiez de sites internet sur-mesure qui répondent à vos besoins
            pour atteindre vos objectifs.
          </p>
        </div>
        <div className="container">
          <div className="card">
            <img src={CDC} alt="Étape 1" />
            <div className="content">
              <h3>Cahier des charges</h3>
              <p>
                Nous définissons ensemble le périmètre de votre projet (vos
                besoins, vos objectifs, l'arborescence de votre site,
                fonctionnalités désirées, …). Cette étape va permettre de
                définir un budget et un délai de livraison.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Maquettes} alt="Étape 2" />
            <div className="content">
              <h3>Création des maquettes</h3>
              <p>
                À partir du cahier des charges, le wireframe est élaboré pour
                réfléchir à l’architecture et l’organisation de vos contenus.
                Après validation du wireframe, le design et l’apparence visuelle
                du site y sont ensuite intégrés.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Développement} alt="Étape 3" />
            <div className="content">
              <h3>Développement du projet</h3>
              <p>
                Une fois les maquettes graphiques terminées et validées, les
                pages sont ensuite intégrées pour rendre le contenu fonctionnel
                et pouvant être interprétées par les navigateurs web.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Lancement} alt="Étape 4" />
            <div className="content">
              <h3>Test et mise en ligne</h3>
              <p>
                Avant la mise en ligne de votre site, il devra passer quelques
                tests pour s'assurer de son bon fonctionnement. Une fois que
                tout est opérationnel et validé, il ne reste plus qu'à affilier
                un nom de domaine et un hébergement à votre site pour qu'il
                puisse être disponible sur internet.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={Maintenance} alt="Étape 5" />
            <div className="content">
              <h3>Maintenance et suivi</h3>
              <p>
                Une fois le site finalisé et en ligne, la maintenance d’un site
                internet est essentielle pour son bon fonctionnement, il est
                conseillé d’opter pour un contrat de maintenance. Ainsi, vous
                allez pouvoir régulièrement lui apporter des corrections, des
                modifications et des évolutions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="works">
        <div className="text">
          <h2>Mes dernières réalisations</h2>
          <p>Jetez un coup d'œil à mes dernières créations.</p>
        </div>
        <div className="container">
          <div className="item">
            <NavLink to="realisations/hotel-rivage">
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
        </div>
        <div className="primary-button">
          <NavLink to="/realisations">
            <span>Voir tous les projets</span>
          </NavLink>
        </div>
      </section>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
