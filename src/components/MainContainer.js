import { useDispatch, useSelector } from 'react-redux'

import VideoBackground from './VideoBackground';
import { useEffect } from 'react';
import { addNowPlayingTrailer } from '../utils/moviesSlice';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const MainContainer = () => {
    useNowPlayingMovies();

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies.nowPlayingMovies);
    const nowPlayingTrailer = useSelector(store => store.movies.nowPlayingTrailer);
    useEffect(()=> {
        if (movies) {
            if (nowPlayingTrailer.movie === null) {
                dispatch(addNowPlayingTrailer({movie: movies["upcoming"][0], trailer: null}));
            }
        }
    },[dispatch, movies, nowPlayingTrailer])

    if (!nowPlayingTrailer.movie) return;
    return (
        <div>
            <VideoBackground movie={nowPlayingTrailer.movie} />
        </div>
    )
}
export default MainContainer;