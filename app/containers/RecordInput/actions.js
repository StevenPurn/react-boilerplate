import {
  CHANGE_INPUT,
  SUBMIT_INPUT,
  SUBMIT_INPUT_SUCCESS,
  SUBMIT_INPUT_FAIL,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} input The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeInput(input) {
  return {
    type: CHANGE_INPUT,
    input,
  };
}

export function submitInput(input) {
  return {
    type: SUBMIT_INPUT,
    input,
  };
}

export function submitInputSuccess() {
  return {
    type: SUBMIT_INPUT_SUCCESS,
  };
}

export function submitInputFail(error) {
  return {
    type: SUBMIT_INPUT_FAIL,
    error,
  };
}
