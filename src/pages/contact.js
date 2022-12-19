import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles.css"

const Contact = () => {
  return (
    <Layout>
      <div class="contactPagBox">
        <h1>Contactformulier</h1>
        <form
          className="contactForm"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <label for="name">Voornaam en Naam *</label>
          <input type="text" name="name" id="name" required={true} />
          <label for="email">E-mail *</label>
          <input type="email" name="email" id="email" required={true} />
          <label for="message">Boodschap *</label>
          <textarea
            name="message"
            id="message"
            rows="8"
            required={true}
          ></textarea>
          <input type="hidden" name="form-name" value="contact" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </Layout>
  )
}

export default Contact
