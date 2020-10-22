import { GET_NEWS, NewsActionTypes } from './types';

export const fetchNews = (): NewsActionTypes => ({ type: GET_NEWS });
