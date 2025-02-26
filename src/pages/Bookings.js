import React, { useState } from "react";
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

    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");

    const timeSlots = [
        "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
        "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
        "04:00 PM", "05:00 PM"
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage("Submitting booking... Please wait");

        try {
            const response = await fetch("https://luxcare-cleaning-backend.onrender.com/book-service", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatusMessage("Booking request sent successfully!");
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
                setStatusMessage("Failed to send booking request: " + result.error);
            }
        } catch (error) {
            setStatusMessage("An error occurred: " + error.message);
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bookings-container">
            <h1>Book a Cleaning Service</h1>
            <form onSubmit={handleSubmit}>
                <label>Choose a Service:</label>
                <select name="service" value={formData.service} onChange={handleChange}>
                    <option value="General Cleaning">General Cleaning - R250</option>
                    <option value="Deep Cleaning">Deep Cleaning - R450</option>
                    <option value="Extra Deep Cleaning">Extra Deep Cleaning - R650</option>
                </select>

                <label>Select a Date:</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />

                <label>Select a Time:</label>
                <select name="time" value={formData.time} onChange={handleChange} required>
                    <option value="">Select a time</option>
                    {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>{slot}</option>
                    ))}
                </select>

                <label>Your Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />

                <label>Phone:</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

                <label>Address:</label>
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />

                <label>Special Notes:</label>
                <textarea name="notes" value={formData.notes} onChange={handleChange}></textarea>

                <button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit Booking"}
                </button>
                {statusMessage && <p>{statusMessage}</p>}
            </form>
        </div>
    );
};

export default Bookings;
