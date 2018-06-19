import { createSelector } from 'reselect';

const selectRecordInput = (state) => state.get('recordinput');

const makeSelectInput = () => createSelector(
  selectRecordInput,
  (recordInputState) => recordInputState.get('input')
);

const makeSelectSentRequest = () => createSelector(
  selectRecordInput,
  (recordInputState) => recordInputState.get('recordSent')
);

const makeSelectError = () => createSelector(
  selectRecordInput,
  (recordInputState) => recordInputState.get('error')
);

export {
  selectRecordInput,
  makeSelectInput,
  makeSelectSentRequest,
  makeSelectError,
};
