import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/Home.css";
import leftImage from "../assets/left.jpg";
import rightImage from "../assets/right.jpg";
import bannerImage from "../assets/banner.jpg";

const Home = () => {
    return (
        <>
            <main className="home-container">
                <img src={bannerImage} alt="Banner" className="home-banner" />
                <div className="home-content">
                    <div className="left-image-container">
                        <img src={leftImage} alt="Cleaning Left" className="left-image" />
                    </div>
                    <div className="text-section">
                        <h1>Your Trusted Cleaning Partner</h1>
                        <ul>
                            <li>✅ Home & Office Cleaning</li>
                            <li>✅ Reliable & Professional Service</li>
                            <li>✅ Affordable & Efficient</li>
                        </ul>
                        <p>Let us handle the cleaning while you focus on what matters! ✨</p>

                        {/* Booking Button */}
                        <Link to="/bookings" className="booking-button">
                            Make a Booking Now
                        </Link>
                    </div>
                    <div className="right-image-container">
                        <img src={rightImage} alt="Cleaning Right" className="right-image" />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
