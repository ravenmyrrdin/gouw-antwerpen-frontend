import React from "react";
import "../styles.css";

const ContactElement = () => {
    return (
        <div className="contactBox">
            <h2>Contacteer ons!</h2>
            <ul>
                <li>Mail: <a href="mailto:info@gouwantwerpen.be">info@gouwantwerpen.be</a></li>
                <li>Adres: <a href="https://goo.gl/maps/EFuQpXPb1c2ui9GN9">Wilrijkstraat 45, 2140 Antwerpen</a></li>
            </ul>
        </div>
    );
    }

export default ContactElement;