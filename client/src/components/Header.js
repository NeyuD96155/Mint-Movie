import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Đảm bảo đường dẫn đúng
import '../styles/Header.css';

const Header = () => {
    const { authData, logout } = useAuth(); // Sử dụng useAuth để truy cập authData và hàm logout

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
                {authData ? (
                    // Hiển thị khi người dùng đã đăng nhập
                    <React.Fragment>
                        <span className="user-email">{authData.email}</span> {/* Giả sử authData chứa email */}
                        <button onClick={logout} className="logout-btn">Logout</button>
                    </React.Fragment>
                ) : (
                    // Hiển thị khi người dùng chưa đăng nhập
                    <React.Fragment>
                        <Link to="/login" className="signin-btn">Login</Link>
                        <Link to="/signup" className="signup-btn">Sign Up</Link>
                    </React.Fragment>
                )}
            </div>
        </header>
    );
};

export default Header;
