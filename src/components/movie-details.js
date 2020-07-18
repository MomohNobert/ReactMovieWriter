import React from 'react';
import FontAwesome from 'react-fontawesome'

const MovieDetail = ({ movie }) => {
    return (
        <div>
        {
            movie ? 
            (
                <div>
                    <h3>{movie.title}</h3>
                    <FontAwesome name="star" className={movie.avg_ratings > 0 ? 'orange' : null} />
                    <FontAwesome name="star" className={movie.avg_ratings >= 1 ? 'orange' : null} />
                    <FontAwesome name="star" className={movie.avg_ratings >= 2 ? 'orange' : null} />
                    <FontAwesome name="star" className={movie.avg_ratings >= 3 ? 'orange' : null} />
                    <FontAwesome name="star" className={movie.avg_ratings >= 4 ? 'orange' : null} />
                    <span style={{ fontSize: '0.75rem', marginBottom : '2px' }}>({movie.no_of_ratings})</span>
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