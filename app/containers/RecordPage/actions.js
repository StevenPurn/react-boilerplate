import {
  LOAD_RECORDS,
  LOAD_RECORDS_SUCCESS,
  LOAD_RECORDS_ERROR,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRecords() {
  return {
    type: LOAD_RECORDS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} records The records returned from the db
 *
 *
 * @return {object}      An action object with a type of LOAD_RECORDS_SUCCESS passing the records
 */
export function recordsLoaded(records) {
  return {
    type: LOAD_RECORDS_SUCCESS,
    records,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_RECORDS_ERROR passing the error
 */
export function recordLoadingError(error) {
  return {
    type: LOAD_RECORDS_ERROR,
    error,
  };
}
