import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants'
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);
    // Fetch data from TMDB api and update store
    useEffect(() => {
        const getNowPlayingMovies = async () => {
            let m = [];

            let movies = await fetch('https://api.themoviedb.org/3/movie/upcoming?region=IN', API_OPTIONS);
            let json = await movies.json();
            m = [...m, ...json.results];

            movies = await fetch('https://api.themoviedb.org/3/movie/now_playing?region=IN', API_OPTIONS);
            json = await movies.json();
            m = [...m, ...json.results];

            movies = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=2&region=IN', API_OPTIONS);
            json = await movies.json();
            m = [...m, ...json.results];

            movies = await fetch('https://api.themoviedb.org/3/movie/popular?region=IN', API_OPTIONS);
            json = await movies.json();
            m = [...m, ...json.results];

            // console.log(m);
            dispatch(addNowPlayingMovies(m));
        }
        !nowPlayingMovies && getNowPlayingMovies();
    }, [dispatch, nowPlayingMovies])
}

export default useNowPlayingMovies;