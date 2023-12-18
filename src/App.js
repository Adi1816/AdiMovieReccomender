import React from "react";
import { useState, useEffect } from "react";

import MovieDiv from "./MovieDiv";

import "./App.css";
import searchIcon from "./search.svg";
const api = "https://www.omdbapi.com?apikey=5b489cba";

const movie1 = {
  Title: "Ta Ra Rum Pum",
  Year: "2007",
  imdbID: "tt0833553",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNGQ2Y2ViMWEtZWJmMS00ZjUzLTg1YzUtYTYzZTU0ZGI3YzY5XkEyXkFqcGdeQXVyNTkzNDQ4ODc@._V1_SX300.jpg",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${api}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="app">
      <h1>AdiMovieRecommendor</h1>
      <div className="search">
        <input
          placeholder="Showing results for Batman, Go ahead & search your Fav Movie"
          value={searchTerm}
          onChange={(elem) => setSearchTerm(elem.target.value)}
        />
        <img 
        src={searchIcon} 
        alt="search" 
        onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieDiv movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Sorry! Searched Movie Not Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
