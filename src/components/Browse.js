import { useSelector } from 'react-redux';

import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Header from './Header';
import GptSearch from './GptSearch';

const Browse = () => {
  const state = useSelector(state=>state.gpt);
  useNowPlayingMovies();
  
  return (
    <div className="bg-black">
      <Header />
      <div>
        {state.gptState ? <GptSearch /> : (
          <>
          <MainContainer />
          <SecondaryContainer />
          </>
        )}
        </div>
    </div>
  );
};

export default Browse;