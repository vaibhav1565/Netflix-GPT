import VideoCard from './VideoCard'

const VideoList = ({ movies, title }) => {
    return (
        <div className="ml-1 lg:ml-3">
            <h1 className="text-2xl sm:text-3xl sm:my-1">{title}</h1>
            <div className="grid grid-flow-col auto-cols-max gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide">                
                {movies.map(movie => <VideoCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    )
}

export default VideoList