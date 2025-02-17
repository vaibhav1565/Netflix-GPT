import VideoCard from './VideoCard'

const VideoList = ({ movies, title }) => {
    return !movies ? [] : (
        <div className="ml-1 lg:ml-3">
            <h1 className="text-2xl md:text-3xl">{title}</h1>
            <div className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto scrollbar-hide">                
                {movies.map(movie => <VideoCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default VideoList