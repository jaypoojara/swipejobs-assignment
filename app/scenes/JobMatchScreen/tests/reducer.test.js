import {
  jobMatchScreenContainerReducer,
  initialState,
  jobMatchScreenTypes
} from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('Tests for reducers used in the JobMatchScreen', () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it('should return the initial state of job match reducer', () => {
    expect(jobMatchScreenContainerReducer(state, {})).toEqual(state);
  });

  it('should ensure that loading = true when an action of type REQUEST_MATCH_JOBS is dispatched', () => {
    const expectedResult = state
      .set('loading', true)
      .set('errorMessage', null)
      .set('jobs', []);
    expect(
      jobMatchScreenContainerReducer(state, {
        type: jobMatchScreenTypes.REQUEST_MATCH_JOBS
      })
    ).toEqual(expectedResult);
  });

  it('should ensure that the job data is present and loading = false when SUCCESS_MATCH_JOBS is dispatched', () => {
    const expectedResult = state
      .set('jobs', [])
      .set('loading', false)
      .set('errorMessage', null);
    expect(
      jobMatchScreenContainerReducer(state, {
        type: jobMatchScreenTypes.SUCCESS_MATCH_JOBS,
        jobs: []
      })
    ).toEqual(expectedResult);
  });

  it('should ensure that the error has some data and loading = false when FAILURE_MATCH_JOBS is dispatched', () => {
    const expectedResult = state
      .set('jobs', [])
      .set('loading', false)
      .set('errorMessage', 'There was some error');
    expect(
      jobMatchScreenContainerReducer(state, {
        type: jobMatchScreenTypes.FAILURE_MATCH_JOBS,
        errorMessage: 'There was some error'
      })
    ).toEqual(expectedResult);
  });
  it('should ensure that user is empty when an action of type REQUEST_PROFILE is dispatched', () => {
    const expectedResult = state.set('user', {});
    expect(
      jobMatchScreenContainerReducer(state, {
        type: jobMatchScreenTypes.REQUEST_PROFILE
      })
    ).toEqual(expectedResult);
  });
  it('should ensure that user is success when an action of type PROFILE_SUCCESS is dispatched', () => {
    const expectedResult = state.set('user', { userName: 'Jay Poojara' });
    expect(
      jobMatchScreenContainerReducer(state, {
        type: jobMatchScreenTypes.PROFILE_SUCCESS,
        user: { userName: 'Jay Poojara' }
      })
    ).toEqual(expectedResult);
  });
  it('should ensure that user is fail when an action of type PROFILE_FAIL is dispatched', () => {
    const error = 'something went wrong';
    const expectedResult = state.set('user', {}).set('errorMessage', error);
    expect(
      jobMatchScreenContainerReducer(state, {
        type: jobMatchScreenTypes.PROFILE_ERROR,
        error
      })
    ).toEqual(expectedResult);
  });
  it('should ensure that submit job type SUBMIT_JOB is dispatched', () => {
    const expectedResult = state.set('loading', true);
    expect(
      jobMatchScreenContainerReducer(state, {
        type: jobMatchScreenTypes.SUBMIT_JOB
      })
    ).toEqual(expectedResult);
  });
  it('should ensure that submit job is success when an action of type SUBMIT_JOB_SUCCESS is dispatched', () => {
    const expectedResult = state.set('loading', false);
    expect(
      jobMatchScreenContainerReducer(state, {
        type: jobMatchScreenTypes.SUBMIT_JOB_SUCCESS
      })
    ).toEqual(expectedResult);
  });
  it('should ensure that submit job is fail when an action of type SUBMIT_JOB_ERROR is dispatched', () => {
    const expectedResult = state
      .set('loading', false)
      .set('errorMessage', 'submit error');
    expect(
      jobMatchScreenContainerReducer(state, {
        type: jobMatchScreenTypes.SUBMIT_JOB_ERROR,
        error: 'submit error'
      })
    ).toEqual(expectedResult);
  });
});
