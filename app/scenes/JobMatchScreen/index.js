import React, { useEffect } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { injectIntl } from 'react-intl';

import AppContainer from '@atoms/Container';
import Spinner from 'react-native-loading-spinner-overlay';

import PagerView from 'react-native-pager-view';
import PropTypes from 'prop-types';
import { selectIsLoading, selectJobs, selectUser } from './selectors';
import { jobMatchScreenActions } from './reducer';
import Header from '../../components/atoms/Header';
import JobDetails from '../../components/molecules/JobDetails';
import { WORKER_ID } from '../../utils/constants';
import styles from './styles';

const JobMatchScreen = ({
  dispatchMatchRequest,
  dispatchAcceptDeclineJob,
  loading,
  jobs,
  user
}) => {
  useEffect(() => {
    dispatchMatchRequest(WORKER_ID, true);
  }, []);

  const acceptRejectJobs = (acceptJobs, job) => {
    dispatchAcceptDeclineJob(job.jobId, acceptJobs, WORKER_ID);
  };
  return (
    <View style={styles.flex1}>
      <AppContainer>
        {user && (
          <Header
            name={`${user.firstName ? user.firstName : ''} ${
              user.lastName ? user.lastName : ''
            }`}
          />
        )}
        {jobs.length > 0 && (
          <PagerView
            style={styles.pagerContainer}
            initialPage={0}
            orientation="horizontal"
          >
            {/* {console.log(jobs)} */}
            {jobs.map((data, index) => (
              <JobDetails
                acceptRejectJobs={acceptRejectJobs}
                key={`${index}`}
                item={data}
              />
            ))}
          </PagerView>
        )}
        <Spinner visible={loading} testID="loader" />
      </AppContainer>
    </View>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectIsLoading(),
  jobs: selectJobs(),
  user: selectUser()
});

const mapDispatchToProps = dispatch => ({
  dispatchMatchRequest: (id, getProfileFlag) =>
    dispatch(jobMatchScreenActions.requestMatchJobs(id, getProfileFlag)),
  dispatchAcceptDeclineJob: (jobId, accept, profileId) =>
    dispatch(jobMatchScreenActions.submitJob(jobId, accept, profileId))
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

JobMatchScreen.propTypes = {
  dispatchMatchRequest: PropTypes.func,
  dispatchAcceptDeclineJob: PropTypes.func,
  loading: PropTypes.bool,
  jobs: PropTypes.arrayOf(PropTypes.object),
  user: PropTypes.object
};

export default compose(withConnect, injectIntl)(JobMatchScreen);
export { JobMatchScreen as MatchJobScreenTest };
