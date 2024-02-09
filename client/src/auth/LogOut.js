import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate để điều hướng
import { auth } from "../firebase-config"; // Đảm bảo đường dẫn đến firebase-config.js đúng
import { signOut } from "firebase/auth";

function LogOut() {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Xử lý sau khi đăng xuất thành công, điều hướng người dùng về trang đăng nhập hoặc trang chủ
      navigate("/login"); // Hoặc navigate('/') để điều hướng về trang chủ
      // Hiển thị thông báo đăng xuất thành công nếu bạn có hệ thống thông báo
      alert("Đăng xuất thành công!"); // Ví dụ đơn giản, nên sử dụng một giải pháp thông báo tốt hơn
    }).catch((error) => {
      // Xử lý lỗi và hiển thị thông báo cho người dùng
      alert("Có lỗi xảy ra: " + error.message); // Cũng như trên, sử dụng giải pháp thông báo tốt hơn
    });
  };

  return <button onClick={handleLogout}>Đăng Xuất</button>;
}

export default LogOut;
