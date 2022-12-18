import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import "../styles.css"

const Contact = () => {
    return (
        <Layout>
            <h1>Contactformulier</h1>
        <form className="contactForm" name="contact" method="POST">
            <label for="name">
                Voornaam en Naam
            </label>
                <input type="text" name="name" id="name" />
            <label for="email">
                E-mail
            </label>
                <input type="text" name="email" id="email" />
            <label for="message">
                Boodschap
            </label>
                <input type="text" name="message" id="message" />
            <input type="hidden" name="form-name" value="contact" />
            <input type="submit" value="Submit" />
        </form>
        </Layout>
    )
    }

export default Contact;