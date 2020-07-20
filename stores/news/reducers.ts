import { NewsState, NewsActionTypes, GET_NEWS, NEWS_RECEIVED } from './types';

const initialState: NewsState = {
  news: []
};

export const newsReducer = (state: NewsState = initialState, action: NewsActionTypes) => {
  switch (action.type) {
    case GET_NEWS:
      return { ...state, loading: true }
    case NEWS_RECEIVED:
      return { ...state, loading: false, news: action.payload }
    default:
      return state;
  }

}

