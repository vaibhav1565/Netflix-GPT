import { useSelector } from 'react-redux';

import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import Header from './Header';
import GptSearch from './GptSearch';

const Browse = () => {
  const state = useSelector(state=>state.gpt);
  
  return (
    <div className="bg-black overflow-x-hidden">
      <Header />
      <>
        {state.gptState ? <GptSearch /> : (
          <>
          <MainContainer />
          <SecondaryContainer />
          </>
        )}
      </>
    </div>
  );
};

export default Browse;