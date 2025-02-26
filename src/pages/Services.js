import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "../components/Footer";
import "../styles/Services.css";
import cleanerImage from "../assets/cleaner.jpg"; // Import image

const Services = () => {
    const navigate = useNavigate(); // Initialize navigation

    return (
        <>
            <main className="services-container">
                <h1>Cleaning Services</h1>

                <div className="services-content">
                    {/* Text Section */}
                    <div className="services-text">
                        <h2>Deep Cleaning - R450</h2>
                        <ul>
                            <li>✔ General cleaning +</li>
                            <li>✔ Appliances & Windows</li>
                            <li>✔ 4 hours duration</li>
                        </ul>

                        <h2>Extra Deep Cleaning - R650</h2>
                        <ul>
                            <li>✔ Deep cleaning +</li>
                            <li>✔ Tile and grout cleaning, including hard-to-reach areas</li>
                            <li>✔ 6 hours duration</li>
                        </ul>

                        <h2>Office Space Cleaning</h2>
                        <p>We clean office spaces of all sizes. Contact us for a custom quote!</p>

                        {/* Contact Button */}
                        <button className="contact-button" onClick={() => navigate("/contact")}>
                            Contact Us
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="services-image">
                        <img src={cleanerImage} alt="Cleaner at work" />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Services;
