import { call, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { LOAD_RECORDS } from './constants';
import { recordsLoaded, recordLoadingError } from './actions';

export function* getRecords() {
  const options = {
    method: 'GET',
  };
  const requestURL = 'http://localhost:3000/api/records/';

  try {
    const records = yield call(request, requestURL, options);
    yield put(recordsLoaded(records, options));
  } catch (err) {
    yield put(recordLoadingError(err));
  }
}

export default function* githubData() {
  yield takeLatest(LOAD_RECORDS, getRecords);
}
