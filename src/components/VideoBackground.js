import React from 'react';
import { useSelector } from 'react-redux';
import useNowPlayingTrailer from '../hooks/useNowPlayingTrailer';

const VideoBackground = ({ movie }) => {
  const { id, title, overview } = movie;
  useNowPlayingTrailer(id);
  const movieTrailer = useSelector(state => state.movies?.nowPlayingTrailer);
  if (!id) return null;

  return (
    <div className="w-screen mt-24 relative"
      style={{ pointerEvents: 'none' }}
    >
      <iframe
        className="w-full h-full aspect-video"
        title="YouTube video player"
        src={`https://www.youtube.com/embed/${movieTrailer}?autoplay=1&cc_load_policy=0&color=white&controls=0&disablekb=1fs=0iv_load_policy=3&loop=1&mute=1&playlist=${movieTrailer}&playsinline=1&rel=0`}
        loading='lazy'
      />
      <div className="w-full absolute top-0 flex justify-center mt-2 md:mt-8 overflow-hidden">
        <div className='flex flex-col items-center'>
        <span className="bg-white font-bold drop-shadow-md text-xl md:text-4xl whitespace-nowrap overflow-hidden">{title}</span>
        <p className="mt-8 leading-snug drop-shadow-md bg-white text-black bg-opacity-90 w-1/2 text-justify invisible lg:visible">{overview}</p>
        <div>
        <button className="my-2 py-2 px-12 text-lg bg-white text-black font-semibold rounded-2xl transition-all duration-300 invisible lg:visible">▶️ Play</button>
        <button className="my-2 py-2 px-12 text-lg bg-white text-black font-semibold rounded-2xl transition-all duration-300 invisible lg:visible ml-2">ⓘ More Info</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default VideoBackground;