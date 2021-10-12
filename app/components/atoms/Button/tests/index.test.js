import React from 'react';
import { renderProvider } from '../../../../utils/testUtils';
import Button from '../index';

describe('<Button /> Component tests', () => {
  it('should render and match the button snapshot', () => {
    const baseElement = renderProvider(<Button />);
    expect(baseElement).toMatchSnapshot();
  });
});
