import { combineReducers, Store as ReduxStore } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';

import { authReducer } from './auth/reducers';
import { AuthState } from './auth/types';
const rootReducer = combineReducers({
  auth: authReducer
});

export type RootState = ReturnType<typeof rootReducer>
import { createLogger } from 'redux-logger';
const { composeWithDevTools } = require('redux-devtools-extension');


export type Store = ReduxStore<RootState>;

const makeStore = (initialState = {}): Store => {
  const middlewares = [thunkMiddleware, createLogger()];
  return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));
};



export const wrapper = createWrapper<RootState>(makeStore, { debug: true });





