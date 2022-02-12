import React from 'react';
import { IState, initialState } from './state';
import { Actions } from './actions';


export const AppContext = React.createContext<{
  state: IState;
  dispatch: React.Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});