import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-config";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import "./App.css";
import MovieDetail from "./pages/MovieDetail";
import LogOut from "./auth/LogOut";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        {isAuthenticated && (
          <div>
            <p>Chào mừng bạn trở lại!</p>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/movies/:movieId" element={<MovieDetail />} />
              </Routes>
            </main>
            <LogOut />
          </div>
        )}
        {!isAuthenticated && (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/movies/:movieId" element={<MovieDetail />} />
          </Routes>
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
