import axios from 'axios';
import React, { useState } from 'react';
import Error from './Error';
import MovieItem from './MovieItem';

const Search = () => {

    const [query, setQuery] = useState('');
    const [error, setError] = useState('');
    const [dataSearch, setDataSearch] = useState([]);

    const onSubmitHandler = () => {
        setError('');
        
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=385733ae9409fe3244ef39cb379d92b9&language=en-US&query=${query}&page=1`).then((getdata) => {
            setDataSearch(getdata.data.results);
        }).catch((err) => {
            setError(err.message);
        });
    }
    return (
        <>
            <div className='search__container'>
                <input placeholder="Search movies" onChange={(e) => setQuery(e.target.value)} required />
                <button onClick={onSubmitHandler}>Search</button>
            </div>
            <div className='search__result'>
                <div className='content'>
                    <div className='movies'>
                        {error ? (
                            <Error error={error} />
                        ) : (
                            <>
                                {dataSearch.map((movie) => {
                                    return (
                                        <MovieItem key={movie.id} movie={movie} />
                                    );
                                })}
                            </>
                        )}
                        
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Search;