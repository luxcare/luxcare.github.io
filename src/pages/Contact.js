import React from "react";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import "../styles/Contact.css";

const Contact = () => {
    return (
        <>            
            <main className="contact-container">
                <h1>Contact Us</h1>
                <ContactForm />
            </main>
            <Footer />
        </>
    );
};

export default Contact;
