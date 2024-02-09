import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Ensure you have a CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Mint Ticket</Link>
            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/movies">Movies</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <div className="header-right">
                <Link to="/login" className="signin-btn">Login</Link>
                <Link to="/signup" className="signup-btn">Sign Up</Link>
            </div>
        </header>
    );
};

export default Header;
