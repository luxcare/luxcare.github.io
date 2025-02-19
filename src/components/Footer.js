import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} LuxCare Cleaning Services. All Rights Reserved.</p>
            <p>
                Contact: <a href="tel:0661290984" className="footer-link">066 129 0984</a> |  
                Email: <a href="mailto:luxcarecleaning@gmail.com" className="footer-link">luxcarecleaning@gmail.com</a>
            </p>
        </footer>
    );
};

export default Footer;
