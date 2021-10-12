import { createActions } from 'reduxsauce';
import { fromJS } from 'immutable';
import produce from 'immer';
export const {
  Types: jobMatchScreenTypes,
  Creators: jobMatchScreenActions
} = createActions({
  requestMatchJobs: ['id', 'getProfileFlag'],
  // User information was successfully fetched
  successMatchJobs: ['jobs'],
  // An error occurred
  failureMatchJobs: ['errorMessage'],

  requestProfile: ['id'],
  profileSuccess: ['user'],
  profileError: ['error'],
  submitJob: ['jobId', 'accept', 'profileId'],
  submitJobError: ['error'],
  submitJobSuccess: null
});

export const initialState = fromJS({
  jobs: [],
  loading: false,
  errorMessage: null,
  user: {}
});

export const fetchJobs = state =>
  state
    .set('loading', true)
    .set('jobs', [])
    .set('errorMessage', null);

export const successMatchJobs = (state, { jobs }) =>
  state
    .set('jobs', jobs)
    .set('loading', false)
    .set('errorMessage', null);

export const failureMatchJobs = (state, { errorMessage }) =>
  state
    .set('jobs', [])
    .set('loading', false)
    .set('errorMessage', errorMessage);

export const fetchProfile = state => state.set('user', {});
export const profileSuccess = (state, { user }) => state.set('user', user);
export const profileFail = (state, { error }) =>
  state.set('user', {}).set('errorMessage', error);
export const submitJobError = (state, { error }) =>
  state.set('loading', false).set('errorMessage', error);
export const submitJob = state => state.set('loading', true);
export const submitJobSuccess = state => state.set('loading', false);

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const jobMatchScreenContainerReducer = (state = initialState, action) =>
  produce(state, () => {
    switch (action.type) {
      case jobMatchScreenTypes.REQUEST_MATCH_JOBS:
        return fetchJobs(state, action);
      case jobMatchScreenTypes.SUCCESS_MATCH_JOBS:
        return successMatchJobs(state, action);
      case jobMatchScreenTypes.FAILURE_MATCH_JOBS:
        return failureMatchJobs(state, action);
      case jobMatchScreenTypes.REQUEST_PROFILE:
        return fetchProfile(state, action);
      case jobMatchScreenTypes.PROFILE_SUCCESS:
        return profileSuccess(state, action);
      case jobMatchScreenTypes.PROFILE_FAIL:
        return profileFail(state, action);
      case jobMatchScreenTypes.SUBMIT_JOB_ERROR:
        return submitJobError(state, action);
      case jobMatchScreenTypes.SUBMIT_JOB:
        return submitJob(state, action);
      case jobMatchScreenTypes.SUBMIT_JOB_SUCCESS:
        return submitJobSuccess(state, action);
      default:
        return state;
    }
  });
