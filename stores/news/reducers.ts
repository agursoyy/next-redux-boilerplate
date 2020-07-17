import { NewsState, NewsActionTypes, FETCH_NEWS_REQUEST, NEWS_RECEIVED } from './types';

const initialState: NewsState = {
  news: []
};

export const newsReducer = (state: NewsState = initialState, action: NewsActionTypes) => {
  switch (action.type) {
    case FETCH_NEWS_REQUEST:
      return { ...state, loading: true }
    case NEWS_RECEIVED:
      return { ...state, loading: false, news: action.payload }
    default:
      return state;
  }

}

