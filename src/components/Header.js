import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptState } from '../utils/gptSlice';
import { USER_AVATAR } from "../utils/constants";
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/languageSlice';

import logo_1 from "../utils/logo_1.png";
import logo_2 from "../utils/logo_2.jpeg";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedLanguage = useSelector(state => state.language.lang);
  const { gptState } = useSelector(state => state.gpt);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        dispatch(addUser({ uid: user.uid, displayName: user.displayName, email: user.email, photoURL: user?.photoURL ? user.photoURL : USER_AVATAR }));
        gptState && dispatch(toggleGptState());
        navigate("/browse");
        // console.log("Observed called. signed in");
      } else {
        // User is signed out
        navigate("/");
        dispatch(removeUser());
        // console.log('Observer called. signed out');
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate])

  function handleSignOut() {
    signOut(auth).then(() => {
      // console.log("Sign out button clicked");
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }
  const user = useSelector((state) => state.user);

  function toggleGptSearch() {
    dispatch(toggleGptState());
  }

  function handleLanguageChange(e) {
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className={`absolute top-0 left-0 z-10 w-screen mt-2 text-white flex ${!user ? "justify-center" : "justify-between"} items-center`}> 
      <div>
        <img src={logo_1}
          alt="netflix logo"
          className={`w-44 ${!user ? 'inline' : 'hidden'} sm:inline`} />
        <img src={logo_2}
          alt="netflix logo"
          className={`${gptState ? 'hidden' : (!user ? 'hidden' : 'inline')} sm:hidden w-8 mr-4 ml-6`} />
      </div>
      {user &&
        (
        <div className="flex gap-2 items-center mr-8">
          {gptState &&
            (
              <select
                className="bg-black text-white text-center border border-white md:px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                onChange={e => handleLanguageChange(e)}
                defaultValue={selectedLanguage}
              >
                {SUPPORTED_LANGUAGES.map(language => (
                  <option key={language.identifier} value={language.identifier} className="bg-black text-white">
                    {language.name}
                  </option>
                ))}
              </select>
            )
          }
          {/* <div className="flex items-center gap-3"> */}
            <button className="font-bold bg-purple-500 text-white rounded-xl border-2 border-white box-border px-4 py-2 m-2" onClick={toggleGptSearch}>{!gptState ? "GPT Search" : "Main page"}</button>
            <button
              className="font-bold bg-black text-white px-2 sm:px-4 py-2 rounded-lg border-2 box-border border-white hover:bg-gray-800 transition duration-300"
              onClick={handleSignOut}
            >
              (Sign out)
            </button>
            <img src={user?.photoURL}
              alt=""
              className="hidden sm:inline h-10"
              />
          {/* </div> */}
        </div>
        )
      }
    </div>
  )
}
export default Header