import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Đảm bảo đã import useNavigate
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase-config';
import '../styles/Login.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

    const login = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/'); // Điều hướng đến trang chủ sau khi đăng nhập thành công
        } catch (error) {
            console.error(error.message);
            setLoginError(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            navigate('/'); // Điều hướng đến trang chủ sau khi đăng nhập Google thành công
        } catch (error) {
            console.error(error.message);
            setLoginError(error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Login</button>
            </form>
            <button onClick={handleGoogleSignIn}>Đăng nhập bằng Google</button>
            {loginError && <p className="error">{loginError}</p>}
        </div>
    );
};

export default Login;
