import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";  // Đảm bảo đường dẫn này phù hợp với vị trí của firebase-config trong dự án của bạn
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import "./App.css";
import MovieDetail from "./pages/MovieDetail";
import LogOut from './auth/LogOut'; // Giả sử 'LogOut' được lưu trong thư mục 'auth'


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, []);
  

  return (
    <Router>
      <div className="App">
        <Header />
        {isAuthenticated ? (
          <div>
            <p>Chào mừng bạn trở lại!</p>
            <button onClick={<LogOut/>}>Đăng Xuất</button>
          </div>
        ) : (
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {!isAuthenticated && <Route path="/login" element={<Login />} />}
              {!isAuthenticated && (
                <Route path="/signup" element={<SignUp />} />
              )}
              <Route path="/movies/:movieId" element={<MovieDetail />} />
              {/* Có thể thêm các route khác ở đây */}
            </Routes>
          </main>
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
