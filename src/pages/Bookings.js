import React, { useState } from "react";
import Footer from "../components/Footer";
import "../styles/Bookings.css";

const Bookings = () => {
    const [formData, setFormData] = useState({
        service: "General Cleaning",
        time: "",
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/book-service", {

            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Booking request sent successfully!");
            setFormData({
                service: "General Cleaning",
                time: "",
                name: "",
                email: "",
                phone: "",
                address: "",
            });
        } else {
            alert("Failed to send booking request.");
        }
    };

    return (
        <>
            <main className="bookings-container">
                <h1>Book a Cleaning Service</h1>
                <form onSubmit={handleSubmit}>
                    {/* Service Selection */}
                    <label>Choose a Service:</label>
                    <select name="service" value={formData.service} onChange={handleChange}>
                        <option value="General Cleaning">General Cleaning - R250</option>
                        <option value="Deep Cleaning">Deep Cleaning - R450</option>
                        <option value="Extra Deep Cleaning">Extra Deep Cleaning - R650</option>
                    </select>

                    {/* Time Selection */}
                    <label>Select a Time:</label>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} required />

                    {/* Contact Information */}
                    <label>Your Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                    <label>Email Address:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                    <label>Phone Number:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

                    <label>Address:</label>
                    <textarea name="address" value={formData.address} onChange={handleChange} required />

                    {/* Submit Button */}
                    <button type="submit">Submit Booking</button>
                </form>
            </main>
            <Footer />
        </>
    );
};

export default Bookings;
