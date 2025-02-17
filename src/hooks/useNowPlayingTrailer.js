import { useEffect } from 'react';

import { API_OPTIONS } from '../utils/constants'

import { useDispatch, useSelector } from 'react-redux';

import { addNowPlayingTrailer } from '../utils/moviesSlice';

const useNowPlayingTrailer = (movieId)=>{
    const dispatch = useDispatch();
    const nowPlayingTrailer = useSelector(store=>store.movies.nowPlayingTrailer);
    useEffect(() => {
        const getMovieTrailer = async () => {
            const videos = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
            const json = await videos.json();
            const filteredData = json.results.filter(movie => movie.type === "Trailer");
            const selectedVideo = filteredData.length ? filteredData[0] : json.results[0];
            !nowPlayingTrailer && dispatch(addNowPlayingTrailer(selectedVideo.key));
        }
        getMovieTrailer();
    }, [dispatch, movieId, nowPlayingTrailer]);
}

export default useNowPlayingTrailer;