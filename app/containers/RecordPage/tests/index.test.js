import React from 'react';
import { shallow, mount } from 'enzyme';

import { Helmet } from 'react-helmet';
import RecordPage from '../index';

describe('<FeaturePage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(
      <RecordPage />
    );
    expect(renderedComponent.contains(
      <Helmet>
        <title>Records</title>
        <meta name="description" content="All of the current records in the database" />
      </Helmet>
    )).toBe(true);
  });

  it('should fetch from the database on page load', () => {
    const fetchSpy = jest.spyOn(RecordPage.prototype, 'onButtonClick');
    mount(<RecordPage />);
    expect(fetchSpy).toHaveBeenCalledTimes(1);
    fetchSpy.mock();
  });
});
