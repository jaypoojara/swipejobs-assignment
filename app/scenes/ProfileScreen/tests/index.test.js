import React from 'react';
import { renderProvider } from 'app/utils/testUtils';
import { ProfileScreenTest } from '../index';

describe('<ProfileScreen /> Container tests', () => {
  const users = {
    address: {
      formattedAddress: '1 Downing St, Chicago, IL 60654, USA',
      zoneId: 'America/Chicago'
    },
    email: 'jim.rose@gmail.com',
    firstName: 'Jim',
    lastName: 'Rose',
    maxJobDistance: 20.02,
    phoneNumber: '5096290220',
    workerId: '7f90df6e-b832-44e2-b624-3143d428001f'
  };
  it('should render and match the ProfileScreen snapshot', () => {
    const baseElement = renderProvider(<ProfileScreenTest user={users} />);
    expect(baseElement).toMatchSnapshot();
  });
});
