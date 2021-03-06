import React from 'react';
import renderer from 'react-test-renderer';

import Header from './index';

describe('components/Header', () => {
  it('should render', () => {
    const component = renderer.create(<Header />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
