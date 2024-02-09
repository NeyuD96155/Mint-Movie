// Trong LogOut.js
import React from 'react';
import { auth } from "../firebase-config"; // Sửa đường dẫn nếu cần
import { signOut } from "firebase/auth";

function LogOut() {
  const handleLogout = () => {
    signOut(auth).then(() => {
      // Xử lý sau khi đăng xuất thành công
    }).catch((error) => {
      // Xử lý lỗi
    });
  };

  return <button onClick={handleLogout}>Đăng Xuất</button>;
}

export default LogOut;
