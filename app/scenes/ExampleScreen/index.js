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

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const CustomButton = styled.Button`
  margin-top: 40px;
`;
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android:
    'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.'
});

class ExampleScreen extends React.Component {
  // componentDidMount() {
  //   this.requestFetchUser()();
  // }

  // requestFetchUser = () => () => {
  //   this.props.fetchUser();
  // };
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
        <View style={{ flex: 1, backgroundColor: 'red' }}>
          {/* <JobDetails item={this.data[0]} /> */}
          <FlatList
            data={this.data}
            style={{ flex: 1 }}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({ item }) => <JobDetails item={item} />}
          />
        </View>

        {/* <FlatList
          data={this.data}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => <JobDetails item={item} />}
        /> */}
      </AppContainer>
    );
  }
}

ExampleScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func
};

const mapStateToProps = createStructuredSelector({
  user: selectUser(),
  userIsLoading: selectUserIsLoading(),
  userErrorMessage: selectUserErrorMessage()
});

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(exampleScreenActions.requestFetchUser())
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, injectIntl)(ExampleScreen);
export { ExampleScreen as ExampleScreenTest };
