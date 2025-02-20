import React, { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://luxcare-backend.onrender.com/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.text();
        alert(result);
    };

    return (
        <div className="contact-form">
            <h2>We would like to hear from you.</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
                
                <label>Email:</label>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                
                <label>Message:</label>
                <textarea name="message" placeholder="Message" onChange={handleChange} required></textarea>
                
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
