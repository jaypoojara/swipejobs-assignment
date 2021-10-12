import React from 'react';
import { renderProvider } from '../../../../utils/testUtils';
import Header from '../index';

describe('<Header /> Component tests', () => {
  it('should render and match the header snapshot', () => {
    const baseElement = renderProvider(<Header fromProfile={false} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render and match the header snapshot when profile is true', () => {
    const baseElement = renderProvider(<Header fromProfile={true} />);
    expect(baseElement).toMatchSnapshot();
  });
});
