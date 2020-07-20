import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import MovieList from './components/movie-list';
import MovieDetail from './components/movie-details';

function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie ] = useState(null);

  const movieDeleted = selMovie => {
    setMovies(movies.filter(mov => mov.id !== selMovie.id))
    setMovie(null)
  }

  useEffect(() => {
      const fetchData = async () => {
          const result = await axios(
              'http://127.0.0.1:8000/api/movies/', {
                  method: 'GET',
                  headers: {
                      'Authorization' : 'Token 0fdaf556051d96034b31760a66ad61c9de1c9410'
                  }
              }
          );
          setMovies(result.data)
      };

      fetchData();
  }, [setMovie])

  return (
    <div className="App">
      <h1>Movie Writer</h1>
      <div className="layout">
        <MovieList movies={movies} setMovie={setMovie} movieDeleted={movieDeleted}/>
        <MovieDetail movie={movie} updateMovie={setMovie} />
      </div>
    </div>
  );
}

export default App;
