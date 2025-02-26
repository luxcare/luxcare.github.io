import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css"; // We'll create this file for styling
import logo from "../assets/logo.png";

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="LuxCare Logo" className="logo" />
            </Link>
            <nav>
                <ul className="navbar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/bookings">Bookings</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
