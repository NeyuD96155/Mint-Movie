import React from 'react';
import '../styles/About.css'; // Adjusted path for CSS file if necessary

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <h1>About CinemaTicket</h1>
                <div className="about-content">
                    <p>CinemaTicket is your premier destination for booking movie tickets. Our platform offers an extensive collection of the latest movies, easy booking, and seamless ticketing experience.</p>
                    <p>Founded in 2024, we are dedicated to enhancing your cinematic journey with the best selection of movies in various genres, comfortable and convenient ticket purchasing, and exceptional customer service.</p>
                    <p>Our mission is to bring the magic of cinema to movie enthusiasts everywhere. We are passionate about movies and aim to provide our users with the most engaging and comprehensive movie-watching experience possible. Join us in our journey to make every movie experience unforgettable, as we continue to innovate and expand our services to meet and exceed your expectations.</p>
                </div>
                <div className="about-values">
                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Customer First:</strong> Your satisfaction is our top priority.</li>
                        <li><strong>Innovation:</strong> We strive to bring new and efficient solutions to enhance your movie-watching experience.</li>
                        <li><strong>Quality:</strong> We ensure the highest quality in every aspect of our service.</li>
                        <li><strong>Passion:</strong> Our love for movies drives us to excel and deliver the best experience to you.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
