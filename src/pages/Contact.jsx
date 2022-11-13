import React from "react";
import { TabTitle } from "../config/TabTitle";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const API_URL = process.env.REACT_APP_API_URL;

const Contact = () => {
  TabTitle("Contact – Maxence Vallée");

  const [sent, setSent] = useState(false);

  const onSubmit = async (_values, actions) => {
    setSent(true);
    axios.post(`${API_URL}/api/emails`, formik.values);
    // await new Promise(resolve => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Ce champ est obligatoire."),
      lastname: Yup.string().required("Ce champ est obligatoire."),
      email: Yup.string()
        .email("Saisissez une adresse e-mail valide.")
        .required("Ce champ est obligatoire."),
      message: Yup.string().required("Ce champ est obligatoire."),
    }),
    onSubmit,
  });

  return (
    <div className="contact-page">
      <Navigation />
      <div className="contact-wrapper">
        <section className="hero">
          <h1>Me contacter</h1>
          <p>
            Vous avez des questions ? Vous souhaitez obtenir un devis pour votre
            projet ? C'est par ici !
          </p>
        </section>
        {!sent ? (
          <form onSubmit={formik.handleSubmit}>
            <div className="fullname">
              <div className="firstname">
                <input
                  className="field"
                  id="firstname"
                  type="text"
                  placeholder=" "
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstname}
                />
                <label htmlFor="firstname">Votre prénom *</label>
                {formik.touched.firstname && formik.errors.firstname ? (
                  <span>{formik.errors.firstname}</span>
                ) : null}
              </div>
              <div className="lastname">
                <input
                  className="field"
                  id="lastname"
                  type="text"
                  placeholder=" "
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastname}
                />
                <label htmlFor="lastname">Votre nom *</label>
                {formik.touched.lastname && formik.errors.lastname ? (
                  <span>{formik.errors.lastname}</span>
                ) : null}
              </div>
            </div>
            <div className="email">
              <input
                className="field"
                id="email"
                type="text"
                placeholder=" "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <label htmlFor="email">Votre e-mail *</label>
              {formik.touched.email && formik.errors.email ? (
                <span>{formik.errors.email}</span>
              ) : null}
            </div>
            <div className="message">
              <textarea
                className="field"
                id="message"
                placeholder=" "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              ></textarea>
              <label htmlFor="textarea">Détaillez votre demande...</label>
              {formik.touched.message && formik.errors.message ? (
                <span className="span-last-child">{formik.errors.message}</span>
              ) : null}
            </div>
            <div className="submit-button">
              <button disabled={formik.isSubmitting} type="submit">
                <span>Envoyer le message</span>
              </button>
            </div>
          </form>
        ) : (
          <div className="success-message">
            <span>Votre message a bien été envoyé ! 🙂</span>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
