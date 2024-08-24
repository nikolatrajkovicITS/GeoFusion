import React, { useReducer } from 'react';
import AppContext from '@/context/AppContext';
import { AppReducer, initialState } from '@/context/AppReducer';

const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
