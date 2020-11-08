import axios from './axios';
import React, { useState, useEffect } from 'react';

function Row({ title, fetchUrl}) {
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

  console.log(movies);
  return (
    <div>
      <h2> { title } </h2>
    </div>
  )
}

export default Row
