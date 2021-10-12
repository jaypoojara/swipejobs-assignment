import { createSelector } from 'reselect';
import get from 'lodash/get';
import { initialState } from './reducer';

export const selectJobMatch = state => (state.jobMatch || initialState).toJS();

export const selectJobs = () =>
  createSelector(selectJobMatch, substate => get(substate, 'jobs', []));

export const selectIsLoading = () =>
  createSelector(selectJobMatch, substate => get(substate, 'loading', null));

export const selectUserErrorMessage = () =>
  createSelector(selectJobMatch, substate =>
    get(substate, 'errorMessage', null)
  );

export const selectUser = () =>
  createSelector(selectJobMatch, substate => get(substate, 'user', {}));
