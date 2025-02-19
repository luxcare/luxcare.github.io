import React from "react";
import Footer from "../components/Footer";
import "../styles/Services.css";
import cleanerImage from "../assets/cleaner.jpg"; // Import image

const Services = () => {
    return (
        <>
            <main className="services-container">
                <h1>Cleaning Services</h1>

                <div className="services-content">
                    {/* Text Section */}
                    <div className="services-text">
                        <h2>General Cleaning - R250</h2>
                        <ul>
                            <li>✔ Dusting & vacuuming</li>
                            <li>✔ Mopping & Surface cleaning</li>
                            <li>✔ 2 hours duration</li>
                        </ul>

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
