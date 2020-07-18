import React from 'react';

const MovieList = ({ movies, setMovie }) => {
    return (
        <div>
        {
            movies.map( movie => {
                return (
                    <h2 
                        key={movie.id}
                        onClick={() => setMovie(movie)}
                    >
                        {movie.title}
                    </h2>
                )
            })
        }
        </div>
    )
};

export default MovieList;