import React, { useState } from 'react';
import axios from 'axios';
import FontAwesome from 'react-fontawesome'

const MovieDetail = ({ movie, updateMovie }) => {
    const [highlight, setHighlight] = useState(null)

    const postData = stars => {
        axios.post(
            `${process.env.REACT_APP_API_URL}/api/movies/${movie.id}/rate_movie/`, { stars: stars + 1 }, {
                headers: {
                    'Authorization' : 'Token 0fdaf556051d96034b31760a66ad61c9de1c9410',
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            return getUpdate();
        }).catch(error => {
            console.log(error)
        });
    };

    const getUpdate = () => {
        axios.get(
            `http://127.0.0.1:8000/api/movies/${movie.id}/`, {
                headers: {
                    'Authorization' : 'Token 0fdaf556051d96034b31760a66ad61c9de1c9410'
                }
            }
        ).then(response => {
            updateMovie(response.data);
        }).catch(error => {
            console.log(error)
        });
    }

    return (
        <div>
        {
            movie ? 
            (
                <div>
                    <h3>{movie.title}</h3>
                    <FontAwesome name="star" className={movie.avg_ratings > 0 ? 'orange' : null} />
                    <FontAwesome name="star" className={movie.avg_ratings > 1 ? 'orange' : null} />
                    <FontAwesome name="star" className={movie.avg_ratings > 2 ? 'orange' : null} />
                    <FontAwesome name="star" className={movie.avg_ratings > 3 ? 'orange' : null} />
                    <FontAwesome name="star" className={movie.avg_ratings > 4 ? 'orange' : null} />
                    <span style={{ fontSize: '0.75rem', marginBottom : '2px' }}>({movie.no_of_ratings})</span>
                    <p>{movie.description}</p>

                    <div className="rate-container">
                        <h3>Rate the movie!</h3>
                        {
                            [...Array(5)].map((e, i) => {

                                return (
                                    <FontAwesome 
                                        name="star"
                                        key={i} 
                                        className={highlight > i - 1 ? 'purple' : null}
                                        onMouseEnter={() => setHighlight(i)}
                                        onMouseLeave={() => setHighlight(null)}
                                        onClick={() => {
                                            postData(i);
                                            }
                                        }
                                    />
                                )   
                            })
                        }
                    </div>
                </div>

                
            )
            :
            null
        }
        </div>
    )
};

export default MovieDetail