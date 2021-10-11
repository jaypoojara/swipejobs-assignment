import React from 'react';
import {
  Platform,
  View,
  ActivityIndicator,
  Image,
  FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { PropTypes } from 'prop-types';
import styled from 'styled-components/native';
import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';

import AppContainer from '@atoms/Container';

import {
  selectUser,
  selectUserIsLoading,
  selectUserErrorMessage
} from './selectors';
import { exampleScreenActions } from './reducer';
import Header from '../../components/atoms/Header';
import T from '../../components/atoms/T';
import colors from '../../themes/colors';
import fonts from '../../themes/fonts';
import JobDetails from '../../components/molecules/JobDetails';
import PagerView from 'react-native-pager-view';

class ExampleScreen extends React.Component {
  data = [
    {
      jobId: '5775d8e18a488e6c5bb08333',
      jobTitle: {
        name: 'Construction General Helper',
        imageUrl:
          'https://imgs.swipejobs.com/js/job-category/construction-1.jpg'
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
    }
  ];

  render() {
    return (
      <AppContainer>
        <Header name={'Jim Rose'} />
        <PagerView
          style={{ height: '100%', width: '100%' }}
          initialPage={0}
          orientation="horizontal"
        >
          {this.data.map((data, index) => (
            <JobDetails key={index} item={data} />
          ))}
        </PagerView>
      </AppContainer>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = dispatch => ({});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, injectIntl)(ExampleScreen);
export { ExampleScreen as ExampleScreenTest };
