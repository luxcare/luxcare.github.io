import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/About.css";

const About = () => {
    return (
        <>
            <main className="about-container">
                <h1>About Us</h1>
                <p>We specialize in high-quality cleaning services.</p>
                <img src="https://via.placeholder.com/800x400" alt="Our Team" />
            </main>
            <Footer />
        </>
    );
};

export default About;
