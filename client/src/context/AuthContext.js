// src/context/AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [authData, setAuthData] = useState(null);

  useEffect(() => {
    // Kiểm tra localStorage để xem có token không
    const token = localStorage.getItem('token');
    if (token) {
      // Giả sử bạn lưu token và email khi đăng nhập
      const email = localStorage.getItem('email');
      setAuthData({ token, email });
    }
  }, []);

  const login = (data) => {
    localStorage.setItem('token', data.token);
    localStorage.setItem('email', data.email); // Lưu email hoặc bất kỳ dữ liệu nào bạn muốn từ phản hồi đăng nhập
    setAuthData(data);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setAuthData(null);
  };

  return (
    <AuthContext.Provider value={{ authData, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
export { AuthContext };