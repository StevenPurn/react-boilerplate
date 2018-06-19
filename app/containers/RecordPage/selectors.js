import { createSelector } from 'reselect';

const selectRecordPage = (state) => state.get('recordpage');

const makeSelectRecords = () => createSelector(
  selectRecordPage,
  (selectRecordState) => selectRecordState.get('records')
);

const makeSelectLoading = () => createSelector(
  selectRecordPage,
  (selectRecordState) => selectRecordState.get('loading')
);

const makeSelectError = () => createSelector(
  selectRecordPage,
  (selectRecordState) => selectRecordState.get('error')
);

export {
  selectRecordPage,
  makeSelectRecords,
  makeSelectLoading,
  makeSelectError,
};
