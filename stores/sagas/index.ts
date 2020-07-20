import { put, takeEvery, all } from 'redux-saga/effects';
import { GET_NEWS, NEWS_RECEIVED, } from '../news/types';

function* helloSaga() {
  console.log('Hello Sagas!')
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

function* incrementAsync() {
  yield delay(3000);
  yield console.log('async event');
}
function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}


function* fetchNews() {
  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
    .then(response => response.json());
  yield put({ type: NEWS_RECEIVED, payload: json.articles });
}

function* watchNewsAsync() {
  yield takeEvery(GET_NEWS, fetchNews)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchNewsAsync()
  ])
}