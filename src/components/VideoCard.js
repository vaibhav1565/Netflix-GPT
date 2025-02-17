import React from 'react'
import { TMDB_IMAGE_URL } from '../utils/constants';

const VideoCard = ({ movie }) => {
  if (!movie.poster_path) return null;
  if (!movie) return null;
  return <div className="w-32 md:w-40 pr-3">
    <img src={TMDB_IMAGE_URL + movie.poster_path} alt="poster"
    />
  </div>
}

export default VideoCard;