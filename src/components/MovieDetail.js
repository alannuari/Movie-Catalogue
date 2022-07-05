import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Layout from './Layout';
import Error from './Error';
import Loading from './Loading';

const MovieDetail = () => {
    const { id } = useParams();
    const [error, setError] = useState('');
    const [movie, setMovie] = useState({});

    useEffect(() => {
        setError('');
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=385733ae9409fe3244ef39cb379d92b9&language=en-us`).then((getdata) => {
            setMovie(getdata.data);
        }).catch((err) => {
            setError(err.message);
        });
    }, [id]);

    return (
        <Layout> 
            <div className='movie__wrapper'>
                {error ? (
                    <Error error={error} />
                ) : (
                    <>
                        {Object.keys(movie).length === 0 ? (
                            <Loading />
                        ) : (
                            <div className="movie__container">
                                <div className="movie__poster">
                                    <img src={`${'https://image.tmdb.org/t/p/w300/' + movie.poster_path}`} alt={movie.title} />
                                </div>
                                <div className="movie__inner">
                                    <div className="movie__title">
                                        <h1>{movie.title}</h1>
                                        <div className='movie__facts'>
                                            <span className='movie__release'>{movie.release_date}</span>
                                            <span className='movie__genres'>
                                                {movie.genres ? movie.genres.map((genre, idx) => {
                                                    return (
                                                        <i key={genre.id}>
                                                            {genre.name}{idx + 1 < movie.genres.length ? ', ' : ''}
                                                        </i>
                                                    );
                                                }) : ''}
                                            </span>
                                            <span className='movie__runtime'>{movie.runtime} minutes</span>
                                        </div>
                                    </div>
                                    <div className='movie__rating'>
                                        <p>⭐️ {movie.vote_average}</p>
                                    </div>
                                    <div className='movie__info'>
                                        <p>{movie.tagline ? movie.tagline : '-'}</p>
                                        <h2>Overview</h2>
                                        <div className='movie__overview'>
                                            <p>{movie.overview}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                
                )}
            </div>
        </Layout>
    );
}
 
export default MovieDetail;