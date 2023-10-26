import React, { useState } from 'react';
import MovieList from './MovieList';
import MovieWrite from './MovieWrite';

const MovieApp = () => {
    const [movieList, setMovieList] = useState([]);
    const [searchKeyword, setSearchKeyword]= useState("");

    const createMovie = (movieId, title, url, genre, alt) => {
        const newInfo={movieId, title, url, genre, alt}
        setMovieList([...movieList,newInfo])
     }

     const createKW = (e) => {
       // const keyword=nkeyword;
       setSearchKeyword(e.target.value);
     }

    return (
        <div>
            <h1>Practice </h1>
            <hr/>
            <input type='text' onChange={createKW}></input>
            <hr/>
            <MovieList movieList={movieList} searchKeyword={searchKeyword}></MovieList>
            <MovieWrite createMovieProp={createMovie}></MovieWrite>
        </div>
    );
};

export default MovieApp;