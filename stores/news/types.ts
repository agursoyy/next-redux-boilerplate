export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const GET_NEWS = 'GET_NEWS';
export const NEWS_RECEIVED = 'NEWS_RECEIVED';

export interface NewsState {
  loading?: boolean;
  news: Array<any>;
}

interface GetNews {
  //type of the action which will be returned by the action creator.
  type: typeof GET_NEWS;
}

interface FetchNews {
  //type of the action which will be returned by the action creator.
  type: typeof NEWS_RECEIVED;
  payload: Array<any>;
}

export type NewsActionTypes = GetNews | FetchNews;
