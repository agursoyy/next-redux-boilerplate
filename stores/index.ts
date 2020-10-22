import { combineReducers, Store as ReduxStore } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
const { composeWithDevTools } = require('redux-devtools-extension');
import rootSaga from './sagas';
import { MakeStore, createWrapper, Context, HYDRATE } from 'next-redux-wrapper';

import { authReducer } from './auth/reducers';
import { alertReducer } from './alert/reducers';
import { newsReducer } from './news/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  news: newsReducer,
});

// *****FOR HYDRATE****
const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    //if (state.count.count) nextState.count.count = state.count.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;
export type Store = ReduxStore<RootState>;

const makeStore: MakeStore<RootState> = (context: Context) =>
  createStore(reducer, {}, composeWithDevTools(applyMiddleware(thunkMiddleware)));
export const wrapper = createWrapper<RootState>(makeStore, { debug: true });
