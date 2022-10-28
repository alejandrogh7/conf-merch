import React, { createContext } from 'react';
import useInitialState from '../hooks/useInitialState';

const AppContext = createContext(null);

export function AppContextProvider({ children }) {
  const initialState = useInitialState();

  return <AppContext.Provider value={ initialState }>
    { children }
  </AppContext.Provider>;
}

export default AppContext;