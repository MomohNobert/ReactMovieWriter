import React from 'react';
import FontAwesome from 'react-fontawesome';
import axios from 'axios';

const MovieList = ({ movies, setMovie, movieDeleted, editClicked }) => {
    const removeClicked = movie => {
        axios.delete(
            `${process.env.REACT_APP_API_URL}/api/movies/${movie.id}/`,  {
                headers: {
                    'Authorization' : 'Token 0fdaf556051d96034b31760a66ad61c9de1c9410',
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            movieDeleted(movie)
        }).catch(error => {
            console.log(error)
        });
    }

    const newMovie = () => {
        
    }

    return (
        <div>
        {
            movies.map( movie => {
                return (
                    <div
                        key={movie.id}
                    >
                        <h2
                            onClick={() => {
                                setMovie(movie)
                                editClicked(null)
                            }}
                        >
                            {movie.title}
                        </h2>
                        <FontAwesome name="edit" style={{padding: '15px', height: '15px', width: '15px'}} onClick={() => editClicked(movie)} />
                        <FontAwesome name="trash" style={{padding: '15px', height: '15px', width: '15px'}} onClick={() => removeClicked(movie)} />
                    </div>
                )
            })
        }
        <button onClick={newMovie} >Add New</button>
        </div>
    )
};

export default MovieList;