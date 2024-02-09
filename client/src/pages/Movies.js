// Movies.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import only Link from react-router-dom
import "../styles/Movies.css";

const dummyMovies = [
  {
    id: 1,
    title: "Movie Title 1",
    description: "This is a short description of Movie Title 1.",
    releaseDate: "2024-01-01",
    img: "https://files.tofugu.com/articles/reviews/2017-02-14-your-name/header-1280x.jpg",
    status: "nowShowing",
  },
  {
    id: 2,
    title: "Movie Title 2",
    description: "This is a short description of Movie Title 2.",
    releaseDate: "2024-02-15",
    img: "./assets/2.jpg",
    status: "comingSoon",
  },
  {
    id: 3,
    title: "Movie Title 3",
    description: "This is a short description of Movie Title 3.",
    releaseDate: "2024-03-23",
    img: "./assets/3.jpg",
    status: "popular",
  },
];

const Movies = () => {
  const [nowShowing, setNowShowing] = useState([]);
  const [comingSoon, setComingSoon] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const nowShowingMovies = dummyMovies.filter(movie => movie.status === 'nowShowing');
    const comingSoonMovies = dummyMovies.filter(movie => movie.status === 'comingSoon');
    const popularMovies = dummyMovies.filter(movie => movie.status === 'popular');
    setNowShowing(nowShowingMovies);
    setComingSoon(comingSoonMovies);
    setPopular(popularMovies);
  }, []);

  return (
    <div className="movies">
      <div>
        <h1>Now Showing</h1>
        <div className="movie-list">
          {nowShowing.map((movie) => (
            <div key={movie.id} className="movie">
              <Link to={`/movies/${movie.id}`}> {/* Use Link instead of a */}
                <img src={movie.img} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <p>Release Date: {movie.releaseDate}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1>Coming Soon</h1>
        <div className="movie-list">
          {comingSoon.map((movie) => (
            <div key={movie.id} className="movie">
              <Link to={`/movies/${movie.id}`}> {/* Use Link instead of a */}
                <img src={movie.img} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <p>Release Date: {movie.releaseDate}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1>Popular</h1>
        <div className="movie-list">
          {popular.map((movie) => (
            <div key={movie.id} className="movie">
              <Link to={`/movies/${movie.id}`}> {/* Use Link instead of a */}
                <img src={movie.img} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <p>Release Date: {movie.releaseDate}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
