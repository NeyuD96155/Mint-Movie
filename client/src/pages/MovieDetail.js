// MovieDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/MovieDetail.css";

const dummyMovies = [
  {
    id: 1,
    title: "Omohide Poro Poro",
    description: 'Only Yesterday (おもひ で ぽろぽろ Omohide Poro Poro?, lit. "ký ức đổ về" [1]) là một phim hoạt hình công chiếu năm 1991 bộ phim truyền hình phim đạo diễn bởi Isao Takahata, dựa trên manga cùng tên của Okamoto Hotaru và Tone Yuko.[2] Toshio Suzuki sản xuất bộ phim và Studio Ghibli thực hiện. Nó đã được phát hành vào ngày 20 tháng 7 năm 1991 [3] Bài hát chủ đề kết thúc (愛 は 花, 君 は その 種子 Ai wa Hana Kimi wa sono Tane, thắp sáng." Tình yêu là một bông hoa, bạn là hạt giống của nó ") là một bản dịch tiếng Nhật bài hát của Amanda McBroom, " The Rose. "',
    releaseDate: "2024-01-01",
    img: "/assets/img/1.jpg",
    status: "nowShowing",
  },
  {
    id: 2,
    title: "Movie Title 1",
    description: "This is a detailed description of Movie Title 1. Here you can add more information about the movie, such as cast, director, duration, genres, and maybe a longer synopsis.",
    releaseDate: "2024-01-01",
    img: "https://files.tofugu.com/articles/reviews/2017-02-14-your-name/header-1280x.jpg",
    status: "nowShowing",
  },
  {
    id: 3,
    title: "Movie Title 1",
    description: "This is a detailed description of Movie Title 1. Here you can add more information about the movie, such as cast, director, duration, genres, and maybe a longer synopsis.",
    releaseDate: "2024-01-01",
    img: "https://files.tofugu.com/articles/reviews/2017-02-14-your-name/header-1280x.jpg",
    status: "nowShowing",
  },
  {
    id: 4,
    title: "Movie Title 1",
    description: "This is a detailed description of Movie Title 1. Here you can add more information about the movie, such as cast, director, duration, genres, and maybe a longer synopsis.",
    releaseDate: "2024-01-01",
    img: "https://files.tofugu.com/articles/reviews/2017-02-14-your-name/header-1280x.jpg",
    status: "nowShowing",
  },
  {
    id: 5,
    title: "Movie Title 2",
    description: "This is a detailed description of Movie Title 2. Include information like cast members, the director's vision, movie duration, genres it belongs to, and a comprehensive story outline.",
    releaseDate: "2024-02-15",
    img: "./assets/2.jpg",
    status: "comingSoon",
  },
  {
    id: 6,
    title: "Movie Title 2",
    description: "This is a detailed description of Movie Title 2. Include information like cast members, the director's vision, movie duration, genres it belongs to, and a comprehensive story outline.",
    releaseDate: "2024-02-15",
    img: "./assets/2.jpg",
    status: "comingSoon",
  },
  {
    id: 7,
    title: "Movie Title 2",
    description: "This is a detailed description of Movie Title 2. Include information like cast members, the director's vision, movie duration, genres it belongs to, and a comprehensive story outline.",
    releaseDate: "2024-02-15",
    img: "./assets/2.jpg",
    status: "comingSoon",
  },
  {
    id: 8,
    title: "Movie Title 2",
    description: "This is a detailed description of Movie Title 2. Include information like cast members, the director's vision, movie duration, genres it belongs to, and a comprehensive story outline.",
    releaseDate: "2024-02-15",
    img: "./assets/2.jpg",
    status: "comingSoon",
  },
  {
    id: 9,
    title: "Movie Title 3",
    description: "This is a detailed description of Movie Title 3. You can discuss the cast, director, how long the movie runs, its genres, and give a full plot summary.",
    releaseDate: "2024-03-23",
    img: "./assets/3.jpg",
    status: "popular",
  },
  {
    id: 10,
    title: "Movie Title 3",
    description: "This is a detailed description of Movie Title 3. You can discuss the cast, director, how long the movie runs, its genres, and give a full plot summary.",
    releaseDate: "2024-03-23",
    img: "./assets/3.jpg",
    status: "popular",
  },
  {
    id: 11,
    title: "Movie Title 3",
    description: "This is a detailed description of Movie Title 3. You can discuss the cast, director, how long the movie runs, its genres, and give a full plot summary.",
    releaseDate: "2024-03-23",
    img: "./assets/3.jpg",
    status: "popular",
  },
  {
    id: 12,
    title: "Movie Title 3",
    description: "This is a detailed description of Movie Title 3. You can discuss the cast, director, how long the movie runs, its genres, and give a full plot summary.",
    releaseDate: "2024-03-23",
    img: "./assets/3.jpg",
    status: "popular",
  },
];

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams(); // Retrieve movieId from URL parameters

  useEffect(() => {
    const foundMovie = dummyMovies.find((movie) => movie.id === parseInt(movieId));
    setMovie(foundMovie);
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <img src={movie.img} alt={movie.title} className="movie-detail-image" />
      <div className="movie-detail-info">
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <p>Release Date: {movie.releaseDate}</p>
        {/* Add more movie details here as needed */}
      </div>
    </div>
  );
};

export default MovieDetail;
