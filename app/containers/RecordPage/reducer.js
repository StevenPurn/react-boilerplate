import { fromJS } from 'immutable';

import {
  LOAD_RECORDS,
  LOAD_RECORDS_ERROR,
  LOAD_RECORDS_SUCCESS,
} from './constants';

const initialState = fromJS({
  records: [],
  error: false,
  isLoading: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_RECORDS:
      return state
        .set('isLoading', true)
        .set('error', false);
    case LOAD_RECORDS_ERROR:
      return state
        .set('records', [])
        .set('error', action.error)
        .set('isLoading', false);
    case LOAD_RECORDS_SUCCESS:
      return state
        .set('records', action.records)
        .set('isLoading', false)
        .set('error', false);
    default:
      return state;
  }
}

export default homeReducer;
