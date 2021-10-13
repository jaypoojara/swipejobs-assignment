import { fromJS } from 'immutable';
import {
  selectUser,
  selectIsLoading,
  selectUserErrorMessage,
  selectJobs
} from '../selectors';

describe('Tests for selectors to get data from state for the JobMatchScreen', () => {
  let mockedState;
  let loading;
  let errorMessage;
  const jobs = [];
  const user = {};

  beforeEach(() => {
    errorMessage = null;
    loading = false;

    mockedState = {
      example: fromJS({
        user,
        errorMessage,
        loading,
        jobs
      })
    };
  });

  it('should select the user state data', () => {
    const userSelector = selectUser();
    expect(userSelector(mockedState)).toEqual(user);
  });

  it('should select loading', () => {
    const userIsLoadingSelector = selectIsLoading();
    expect(userIsLoadingSelector(mockedState)).toEqual(loading);
  });

  it('should select the userErrorMessage', () => {
    const userErrorMessageSelector = selectUserErrorMessage();
    expect(userErrorMessageSelector(mockedState)).toEqual(errorMessage);
  });

  it('should select the jobs', () => {
    const userErrorMessageSelector = selectJobs();
    expect(userErrorMessageSelector(mockedState)).toEqual(jobs);
  });
});
