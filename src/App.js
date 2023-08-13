import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import api from "./api/axiosConfig";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Header from "./components/Header";
import Trailer from "./components/Trailer";
import Reviews from "./review/Reviews";

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");

      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);

      const singleMovie = response.data;

      setMovie(singleMovie);

      setReviews(singleMovie.reviews);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/" element={<Layout />} />
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} />
          <Route
            path="/Reviews/:movieId"
            element={
              <Reviews
                getMovieData={getMovieData}
                movie={movie}
                reviews={reviews}
                setReviews={setReviews}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
