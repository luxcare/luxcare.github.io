import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Bookings from "./pages/Bookings"; // Import the Bookings page
import Contact from "./pages/Contact";
import Header from "./components/Header"; // Make sure Header is imported only here
import "./App.css";

function App() {
    return (
        <Router>
            <Header /> {/* This should be the only Header */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/bookings" element={<Bookings />} /> {/* New Bookings Page */}
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
