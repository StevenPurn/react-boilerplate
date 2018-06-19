import Immutable from 'immutable';

import {
  selectRecordPage,
  makeSelectRecords,
  makeSelectLoading,
  makeSelectError,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = Immutable.fromJS({
      records: [],
      error: false,
      loading: false,
    });
    const mockedState = Immutable.fromJS({
      recordpage: homeState,
    });
    expect(selectRecordPage(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectRecords', () => {
  const recordSelector = makeSelectRecords();
  it('should select the records', () => {
    const records = Immutable.Map({ _id: 1, text: 'hello' });
    const mockedState = Immutable.fromJS({
      recordpage: {
        records,
      },
    });
    expect(Immutable.is(recordSelector(mockedState), records));
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the value for loading', () => {
    const loading = true;
    const mockedState = Immutable.fromJS({
      recordpage: {
        loading,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the value for error', () => {
    const error = true;
    const mockedState = Immutable.fromJS({
      recordpage: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});
