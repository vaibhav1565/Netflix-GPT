import VideoList from './VideoList';

import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { API_OPTIONS, getMovieSearchUrl } from '../utils/constants';
import LANGUAGE_CONSTANTS from "../utils/languageConstants";
import { openai } from "../utils/openai";
import { addGptMovies } from '../utils/gptSlice';

const GptSearch = () => {
  const { gptMovies, gptNames } = useSelector((store) => store.gpt);
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const selectedLanguage = useSelector(state => state.language.lang);

  async function tmdbSearch(movie) {
    const url = getMovieSearchUrl(movie);

    const p = await fetch(url, API_OPTIONS);
    const json = await p.json();
    return json.results;
  }

  async function handleGPTsearch(value) {
    const result = await openai(value);
    // console.log(result);
    const promiseArray = result.map(movie => tmdbSearch(movie));
    const movies = await Promise.all(promiseArray);
    // console.log(movies);

    dispatch(addGptMovies({ movieNames: result, movieResults: movies }));
  }
  return (
    <div className="min-h-screen bg-black mt-24">
      <div className="pt-40 flex justify-center text-black">
        <form onSubmit={e => {
          e.preventDefault()
          handleGPTsearch(searchText.current.value);
        }}
          className="grid grid-cols-12 w-5/6 md:w-1/2">
          <input placeholder={LANGUAGE_CONSTANTS[selectedLanguage].gptSearchPlaceholder}
            className="col-span-9 mx-2 px-4 py-2"
            ref={searchText}></input>
          <button className="col-span-3 bg-red-700 text-white">{LANGUAGE_CONSTANTS[selectedLanguage].search}</button>
        </form>
      </div>
      {/* <GptSearchBar /> */}

      <div className="text-white bg-black mt-4">
        {gptMovies && gptMovies.flat(Infinity).length > 0 ? (gptNames.map((movie, index) => (
            <VideoList key={movie} title={movie} movies={gptMovies[index]} />
          ))) : null
        }
      </div>
      {/* <GptMovieSuggestions/> */}
    </div>
  )
}

export default GptSearch