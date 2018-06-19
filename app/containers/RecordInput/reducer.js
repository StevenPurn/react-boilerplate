import { fromJS } from 'immutable';

import {
  CHANGE_INPUT,
  SUBMIT_INPUT,
  SUBMIT_INPUT_SUCCESS,
  SUBMIT_INPUT_FAIL,
} from './constants';

const initialState = fromJS({
  input: '',
  recordSent: false,
  error: false,
});

function inputReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return state
        .set('input', action.input)
        .set('recordSent', false)
        .set('error', false);
    case SUBMIT_INPUT:
      return state
        .set('recordSent', true);
    case SUBMIT_INPUT_SUCCESS:
      return state
        .set('input', '')
        .set('recordSent', true)
        .set('error', false);
    case SUBMIT_INPUT_FAIL:
      return state
        .set('error', action.error);
    default:
      return state;
  }
}

export default inputReducer;
