// Contact.js
import React from 'react';
import '../styles/Contact.css'; // Ensure you have a CSS file for the Contact page styling

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <p>If you have any questions or feedback, please don't hesitate to reach out to us. We're here to help!</p>
            <div className="contact-info">
                <p>Email: support@cinematicket.com</p>
                <p>Phone: +123 456 7890</p>
            </div>
        </div>
    );
};

export default Contact;
