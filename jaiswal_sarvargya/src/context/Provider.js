import React, {createContext, useReducer} from 'react';
import authInitialState from './initialStates/authInitialState.js';
import Userdetailinitial from './initialStates/Userdetailinitial.js';
import auth from './reducers/auth.js';
import userreduc from './reducers/UserReducer.js';
import ChangeLangreducer from './reducers/ChangeLangReduc.js';
import ChnageLanginitial from './initialStates/ChnageLanginitial.js';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {

  const [authState, authDispatch] = useReducer(auth,authInitialState);
  const [userState, userDispatch] = useReducer(userreduc,Userdetailinitial);
  const [langstate, langDiaspatch] = useReducer(ChangeLangreducer,ChnageLanginitial);

  return (
    <GlobalContext.Provider
      value={{authState, authDispatch,userState, userDispatch,langstate,langDiaspatch}}>
      {children}
    </GlobalContext.Provider>
  ); 
};

export default GlobalProvider;
