import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { renderProvider } from '../../../../utils/testUtils';
import JobDetails from '../index';

describe('<JobDetails /> Component tests', () => {
  const acceptRejectJobsSpy = jest.fn();

  const mockItem = {
    jobId: '5775d8e18a488e6c5bb08333',
    jobTitle: {
      name: 'Construction General Helper',
      imageUrl: 'https://imgs.swipejobs.com/js/job-category/construction-1.jpg'
    },
    company: {
      name: 'Steve Smith Construction',
      address: {
        formattedAddress: '430 Smith St, Chicago, IL 60654, USA',
        zoneId: 'America/Chicago'
      },
      reportTo: {
        name: 'Judy Smith',
        phone: '2130010012'
      }
    },
    wagePerHourInCents: 950,
    milesToTravel: 3.4,
    shifts: [
      {
        startDate: '2019-09-04T21:00:00Z',
        endDate: '2019-09-05T05:00:00Z'
      }
    ],
    branch: 'Downtown',
    branchPhoneNumber: '2531233322'
  };

  it('should render and match the snapshot', () => {
    const baseElement = renderProvider(<JobDetails item={mockItem} />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should call acceptRejectJobs when user presses no thanks button', () => {
    const baseElement = renderProvider(
      <JobDetails item={mockItem} acceptRejectJobs={acceptRejectJobsSpy} />
    );
    fireEvent.press(baseElement.getByTestId('no-thanks-button'));
    expect(acceptRejectJobsSpy).toHaveBeenCalled();
  });
});
