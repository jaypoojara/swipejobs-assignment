/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */

import { takeLatest } from 'redux-saga/effects';
import jobMatchContainerSaga, {
  fetchJobs,
  fetchProfile,
  submitJob
} from '../saga';
import { jobMatchScreenTypes } from '../reducer';

describe('Tests for the sagas used in the ExampleScreen', () => {
  let generator = jobMatchContainerSaga();

  it('should start task to watch for saga actions', () => {
    expect(generator.next().value).toEqual(
      takeLatest(jobMatchScreenTypes.REQUEST_MATCH_JOBS, fetchJobs),
      takeLatest(jobMatchScreenTypes.REQUEST_PROFILE, fetchProfile),
      takeLatest(jobMatchScreenTypes.SUBMIT_JOB, submitJob)
    );
  });
});
