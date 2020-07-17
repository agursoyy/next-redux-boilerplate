import { combineReducers, Store as ReduxStore } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
const { composeWithDevTools } = require('redux-devtools-extension');
import rootSaga from './sagas';

import { authReducer } from './auth/reducers';
import { alertReducer } from './alert/reducers';
import { newsReducer } from './news/reducers';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  news: newsReducer
});

export type RootState = ReturnType<typeof rootReducer>
export type Store = ReduxStore<RootState>;


export function initializeStore(initialState = {}) {
  const new_store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware, logger)));
  sagaMiddleware.run(rootSaga);
  return new_store;
}







