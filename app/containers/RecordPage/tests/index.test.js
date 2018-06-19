import React from 'react';
import { mount } from 'enzyme';

import { RecordPage, mapDispatchToProps } from '../index';
import { loadRecords } from '../actions';

describe('<RecordPage />', () => {
  it('should fetch records on initial mount', () => {
    const clickSpy = jest.fn();
    mount(
      <RecordPage
        loading={false}
        error={{}}
        records={[]}
        onButtonClick={clickSpy}
      />
    );
    expect(clickSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onButtonClick', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onButtonClick).toBeDefined();
      });

      it('should dispatch loadRecords when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onButtonClick();
        expect(dispatch).toHaveBeenCalledWith(loadRecords());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onButtonClick(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
