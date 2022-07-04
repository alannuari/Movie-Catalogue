import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
    return (
        <div className='movie-item'>
            <div className='movie-item__header'>
                <img className='movie-item__header__poster' alt={movie.title} src={`${movie.backdrop_path ? 'https://image.tmdb.org/t/p/w300/' + movie.backdrop_path : 'https://picsum.photos/id/666/800/450?grayscale'}`} />
                <div className='movie-item__header__rating'>
                    <p>⭐️<span className='movie-item__header__rating__score'>{movie.vote_average}</span></p>
                </div>
            </div>
            <div className='movie-item__content'>
                <h3>
                    <Link to={`${`detail/${movie.id}`}`}>{movie.title}</Link>
                </h3>
                <p>{movie.overview}</p>
            </div>
        </div>
    );
}
 
export default MovieItem;