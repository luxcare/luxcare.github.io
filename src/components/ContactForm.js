import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://luxcare-cleaning-backend.onrender.com/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Failed to send message: " + result.error);
            }
        } catch (error) {
            alert("An error occurred: " + error.message);
            console.error("Error:", error);
        }
    };

    return (
        <div className="contact-form">
            <h2>We would like to hear from you.</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} placeholder="Name" onChange={handleChange} required />

                <label>Email:</label>
                <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} required />

                <label>Message:</label>
                <textarea name="message" value={formData.message} placeholder="Message" onChange={handleChange} required></textarea>

                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
