
export const FETCH_NEWS_REQUEST = 'FETCH_NEWS_REQUEST';
export const GET_NEWS = 'GET_NEWS';
export const NEWS_RECEIVED = 'NEWS_RECEIVED';

export interface NewsState {
  loading?: boolean,
  news: Array<any>
}

interface FetchNewsRequest {
  type: typeof FETCH_NEWS_REQUEST
}
interface GetNews {
  type: typeof GET_NEWS
}

interface FetchNews {
  type: typeof NEWS_RECEIVED,
  payload: Array<any>
}

export type NewsActionTypes = FetchNewsRequest | FetchNews | GetNews