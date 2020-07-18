import React from 'react';

const MovieDetail = ({ movie }) => {
    return (
        <div>
        {
            movie ? 
            (
                <div>
                    <h3>{movie.title}</h3>
                    <p>{movie.description}</p>
                </div>
            )
            :
            null

        }
        </div>
    )
};

export default MovieDetail