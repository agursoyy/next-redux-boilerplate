import { FETCH_NEWS_REQUEST, GET_NEWS, NewsActionTypes } from './types';

export const fetchNews = (): NewsActionTypes => ({ type: GET_NEWS });

export const fetchNewsRequest = (): NewsActionTypes => ({ type: FETCH_NEWS_REQUEST });
