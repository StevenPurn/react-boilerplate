import { call, select, put, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';
import { SUBMIT_INPUT } from './constants';
import { makeSelectInput } from './selectors';
import { submitInputFail, submitInputSuccess } from './actions';

export function* submitRecord() {
  const input = yield select(makeSelectInput());
  const rec = {
    text: input,
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(rec),
  };
  const requestURL = 'http://localhost:3000/api/records/';

  try {
    yield call(request, requestURL, options);
    yield put(submitInputSuccess());
  } catch (err) {
    yield put(submitInputFail(err));
  }
}

export default function* postRecord() {
  yield takeLatest(SUBMIT_INPUT, submitRecord);
}
