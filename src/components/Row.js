import axios from "../axios";
import React, { useState, useEffect } from "react";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  //state => short term memory, the way to write varibles in react
  const [movies, setMovies] = useState([]);

  // A snippet of code which run based on a specific condition
  useEffect(() => {
    // if [], run once when the row loads, and don't run again
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(setMovies);
  return (
    <div className="row">
      <h2> {title} </h2>

      <div className="row__posters">
        {/* iterate through movies object */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
