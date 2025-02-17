import React, { useEffect } from 'react';
import VideoList from './VideoList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector(state => state.movies?.nowPlayingMovies);

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);
  if (!movies) return;
  return (
    <div className="ml-1 text-white">
      {Object.keys(movies).map(movie => {
        return movies[movie].length === 40 ? 
        <React.Fragment key={movie}>
          <VideoList movies={movies[movie].slice(0,20)} title={movie.charAt(0).toUpperCase() + movie.slice(1).replace('_', ' ')} />
          <VideoList movies={movies[movie].slice(20)} title={movie.charAt(0).toUpperCase() + movie.slice(1).replace('_', ' ')} />
        </React.Fragment>
        :
          <VideoList key={movie} movies={movies[movie]} title={movie.charAt(0).toUpperCase() + movie.slice(1).replace('_', ' ')} />
      }
      )}
    </div>
  )
}

export default SecondaryContainer