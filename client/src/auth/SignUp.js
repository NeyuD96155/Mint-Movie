import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase-config'; // Đảm bảo đường dẫn này đúng
import '../styles/SignUp.css'; // Kiểm tra để chắc chắn rằng file CSS tồn tại và được định dạng đúng

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(''); // Thêm trạng thái để hiển thị lỗi
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        try {
            // Sử dụng createUserWithEmailAndPassword từ Firebase auth để thực hiện đăng ký
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/login'); // Điều hướng đến trang đăng nhập sau khi đăng ký thành công
        } catch (error) {
            // Cập nhật trạng thái lỗi để hiển thị thông báo lỗi trên UI
            setError(error.message);
        }
    };

    return (
        <div className="signup">
            <h1>Sign Up</h1>
            {error && <p className="error">{error}</p>} {/* Hiển thị lỗi nếu có */}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
