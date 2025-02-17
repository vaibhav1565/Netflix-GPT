import { useSelector } from 'react-redux'

import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies.nowPlayingMovies);
    if (!movies) return;
    const movie = movies[0];
    return (
        <div className="bg-white">
            <VideoBackground movie={movie} />
        </div>
    )
}
export default MainContainer;