import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Movies.css";
const dummyMovies = [
  {
    id: 1,
    title: "Movie Title 1",
    description: "This is a detailed description of Movie Title 1. Here you can add more information about the movie, such as cast, director, duration, genres, and maybe a longer synopsis.",
    releaseDate: "2024-01-01",
    img: "https://files.tofugu.com/articles/reviews/2017-02-14-your-name/header-1280x.jpg",
    status: "NowShowing",
  },
  
  {
    id: 2,
    title: "Movie Title 1",
    description: "This is a detailed description of Movie Title 1. Here you can add more information about the movie, such as cast, director, duration, genres, and maybe a longer synopsis.",
    releaseDate: "2024-01-01",
    img: "https://files.tofugu.com/articles/reviews/2017-02-14-your-name/header-1280x.jpg",
    status: "NowShowing",
  },
  {
    id: 3,
    title: "Movie Title 1",
    description: "This is a detailed description of Movie Title 1. Here you can add more information about the movie, such as cast, director, duration, genres, and maybe a longer synopsis.",
    releaseDate: "2024-01-01",
    img: "https://files.tofugu.com/articles/reviews/2017-02-14-your-name/header-1280x.jpg",
    status: "NowShowing",
  },
  {
    id: 4,
    title: "Movie Title 1",
    description: "This is a detailed description of Movie Title 1. Here you can add more information about the movie, such as cast, director, duration, genres, and maybe a longer synopsis.",
    releaseDate: "2024-01-01",
    img: "https://files.tofugu.com/articles/reviews/2017-02-14-your-name/header-1280x.jpg",
    status: "NowShowing",
  },
  {
    id: 5,
    title: "Movie Title 2",
    description: "This is a detailed description of Movie Title 2. Include information like cast members, the director's vision, movie duration, genres it belongs to, and a comprehensive story outline.",
    releaseDate: "2024-02-15",
    img: "./assets/2.jpg",
    status: "ComingSoon",
  },
  {
    id: 6,
    title: "Movie Title 2",
    description: "This is a detailed description of Movie Title 2. Include information like cast members, the director's vision, movie duration, genres it belongs to, and a comprehensive story outline.",
    releaseDate: "2024-02-15",
    img: "./assets/2.jpg",
    status: "ComingSoon",
  },
  {
    id: 7,
    title: "Movie Title 2",
    description: "This is a detailed description of Movie Title 2. Include information like cast members, the director's vision, movie duration, genres it belongs to, and a comprehensive story outline.",
    releaseDate: "2024-02-15",
    img: "./assets/2.jpg",
    status: "ComingSoon",
  },
  {
    id: 8,
    title: "Movie Title 2",
    description: "This is a detailed description of Movie Title 2. Include information like cast members, the director's vision, movie duration, genres it belongs to, and a comprehensive story outline.",
    releaseDate: "2024-02-15",
    img: "./assets/2.jpg",
    status: "ComingSoon",
  },
  {
    id: 9,
    title: "Movie Title 3",
    description: "This is a detailed description of Movie Title 3. You can discuss the cast, director, how long the movie runs, its genres, and give a full plot summary.",
    releaseDate: "2024-03-23",
    img: "./assets/3.jpg",
    status: "Popular",
  },
  {
    id: 10,
    title: "Movie Title 3",
    description: "This is a detailed description of Movie Title 3. You can discuss the cast, director, how long the movie runs, its genres, and give a full plot summary.",
    releaseDate: "2024-03-23",
    img: "./assets/3.jpg",
    status: "Popular",
  },
  {
    id: 11,
    title: "Movie Title 3",
    description: "This is a detailed description of Movie Title 3. You can discuss the cast, director, how long the movie runs, its genres, and give a full plot summary.",
    releaseDate: "2024-03-23",
    img: "./assets/3.jpg",
    status: "Popular",
  },
  {
    id: 12,
    title: "Movie Title 3",
    description: "This is a detailed description of Movie Title 3. You can discuss the cast, director, how long the movie runs, its genres, and give a full plot summary.",
    releaseDate: "2024-03-23",
    img: "./assets/3.jpg",
    status: "Popular",
  },
];

const Movies = () => {
  const [movies, setMovies] = useState({
    NowShowing: [],
    ComingSoon: [],
    Popular: [],
  });
  const [showMore, setShowMore] = useState({
    NowShowing: false,
    ComingSoon: false,
    Popular: false,
  });

  useEffect(() => {
    const NowShowingMovies = dummyMovies.filter(movie => movie.status === 'NowShowing');
    const ComingSoonMovies = dummyMovies.filter(movie => movie.status === 'ComingSoon');
    const PopularMovies = dummyMovies.filter(movie => movie.status === 'Popular');

    setMovies({
      NowShowing: NowShowingMovies,
      ComingSoon: ComingSoonMovies,
      Popular: PopularMovies,
    });
  }, []);

  const handleShowMore = (category) => {
    setShowMore((prevShowMore) => ({
      ...prevShowMore,
      [category]: !prevShowMore[category],
    }));
  };

  const renderMovies = (movieCategory) => {
    const moviesToShow = showMore[movieCategory] ? movies[movieCategory] : movies[movieCategory].slice(0, 4);
    return moviesToShow.map((movie) => (
      <div key={movie.id} className="movie">
        <Link to={`/movies/${movie.id}`}>
          <img src={movie.img} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <p>Release Date: {movie.releaseDate}</p>
        </Link>
      </div>
    ));
  };

  return (
    <div className="movies">
      {Object.keys(movies).map((category) => (
        <div key={category}>
          <h1>{category.replace(/([A-Z])/g, ' $1').trim()}</h1>
          <div className="movie-list">
            {renderMovies(category)}
          </div>
          {movies[category].length > 4 && (
            <button onClick={() => handleShowMore(category)}>
              {showMore[category] ? 'Show Less' : 'Show More'}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Movies;
