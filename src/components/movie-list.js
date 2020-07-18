import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

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
    }, [])

    return (
        <div>
        {
            
            movies.map( movie => {
                return <h2 key={movie.id}>{movie.title}</h2>
            })
            
        }
        </div>
    )
};

export default MovieList;