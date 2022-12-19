import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import "../styles.css";

const Succes = () => {
    return (
        <Layout>
            <div class="succesPagBox">
                <h1>Bedankt voor je bericht!</h1>
                <p>We nemen zo snel mogelijk contact met je op.</p>
                <StaticImage className="succesImg" src="../images/station_antwerpen.jpg" alt="Het Station van Antwerpen"/>
                <Link to="/" className="button2">Terug naar de homepage</Link>
            </div>
        </Layout>
    );
    }

export default Succes;