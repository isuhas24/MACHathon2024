import React from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./contactus.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <div className="details">
          <p>
            <strong>
              <FaWhatsapp /> WhatsApp:
            </strong>{" "}
            +9876543210
          </p>
          <p>
            <strong>
              <FaEnvelope /> Email:
            </strong>{" "}
            deepak.singhal@valtech.com
          </p>
          <p>
            <strong>
              <FaMapMarkerAlt /> Address:
            </strong>{" "}
            Mass Unique building,Valtech
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
