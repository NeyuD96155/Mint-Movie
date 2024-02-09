import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/movies/:id" element={<MovieDetail/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;