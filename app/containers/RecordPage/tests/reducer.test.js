import { fromJS } from 'immutable';

import recordPageReducer from '../reducer';
import {
  recordsLoaded,
} from '../actions';

describe('recordPageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      records: [],
      error: false,
      isLoading: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(recordPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the recordsLoaded action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('records', fixture);

    expect(recordPageReducer(state, recordsLoaded(fixture))).toEqual(expectedResult);
  });
});
