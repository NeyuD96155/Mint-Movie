import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

// Giả sử bạn có AuthContext để quản lý trạng thái đăng nhập
import { AuthContext } from '../context/AuthContext';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const [isLoading, setIsLoading] = useState(false); // Thêm trạng thái loading
    const navigate = useNavigate();
    const { setAuthData } = useContext(AuthContext); // Sử dụng AuthContext

    const login = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Bắt đầu loading
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token); // Lưu token
                setAuthData(data); // Cập nhật trạng thái đăng nhập trong context
                navigate('/'); // Điều hướng đến trang chủ
            } else {
                setLoginError(data.message || "An error occurred");
            }
        } catch (error) {
            console.error("Login failed:", error);
            setLoginError("An error occurred during login");
        }
        setIsLoading(false); // Kết thúc loading
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={login}>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        required 
                        disabled={isLoading} // Disable input khi đang loading
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        required 
                        disabled={isLoading} // Disable input khi đang loading
                    />
                </div>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Logging In...' : 'Login'}
                </button>
            </form>
            {loginError && <p className="error">{loginError}</p>}
        </div>
    );
};

export default Login;
