import React, { useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import "../styles/Bookings.css";

const Bookings = () => {
    const [formData, setFormData] = useState({
        service: "General Cleaning",
        date: "",
        time: "",
        name: "",
        email: "",
        phone: "",
        address: "",
        notes: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("https://luxcare-backend.onrender.com/book-service", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
});

        if (response.ok) {
            alert("Booking request sent successfully!");
            setFormData({
                service: "General Cleaning",
                date: "",
                time: "",
                name: "",
                email: "",
                phone: "",
                address: "",
                notes: "",
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
                    <label>Choose a Service:</label>
                    <select name="service" value={formData.service} onChange={handleChange}>
                        <option value="General Cleaning">General Cleaning - R250</option>
                        <option value="Deep Cleaning">Deep Cleaning - R450</option>
                        <option value="Extra Deep Cleaning">Extra Deep Cleaning - R650</option>
                    </select>

                    {/* Date Selection */}
                    <label>Select a Date:</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required />

                    {/* Time Selection with a Dropdown */}
                    <label>Select a Time:</label>
                    <select name="time" value={formData.time} onChange={handleChange} required>
                        <option value="">Select a Time</option>
                        <option value="08:00 AM">08:00 AM</option>
                        <option value="09:00 AM">09:00 AM</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                    </select>

                    {/* User Details */}
                    <label>Your Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                    <label>Email Address:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                    <label>Phone Number:</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

                    {/* Address Input (No Suggestions) */}
                    <label>Address:</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} required />

                    <label>Special Notes:</label>
                    <textarea name="notes" value={formData.notes} onChange={handleChange} />

                    <button type="submit">Submit Booking</button>
                </form>
            </main>
            <Footer />
        </>
    );
};

export default Bookings;
