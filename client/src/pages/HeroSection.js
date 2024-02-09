import React from 'react';
import '../styles/HeroSection.css'; // Make sure to create a HeroSection.css file for styling

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1>Welcome to CinemaTicket</h1>
                <p>Your ultimate destination for all movie experiences.</p>
                <button className="explore-button">Explore Now</button>
            </div>
        </div>
    );
};

export default HeroSection;
