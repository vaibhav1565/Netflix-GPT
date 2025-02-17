import VideoList from './VideoList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(state=>state.movies?.nowPlayingMovies);
  if (!movies) return undefined;
  return (
    <div className="ml-1 text-white">
      <VideoList movies={movies.slice(0, 20)} title={"Upcoming"}/>
      <VideoList movies={movies.slice(20, 40)} title={"Now Playing"} />
      <VideoList movies={movies.slice(40, 60)} title={"Now Playing"} />
      <VideoList movies={movies.slice(60,80)} title={"Popular"}/>
    </div>
  )
}

export default SecondaryContainer