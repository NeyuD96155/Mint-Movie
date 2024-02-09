import React from 'react';
import '../styles/Home.css'; // Ensure you have a CSS file for the Home page styling
import HeroSection from '../components/HeroSection';

const Home = () => {
    return (
        <div className="home">
            <section className="home-page">
                <HeroSection/>
                
            </section>
            {/* Additional content can be added here */}
        </div>
    );
};

export default Home;
