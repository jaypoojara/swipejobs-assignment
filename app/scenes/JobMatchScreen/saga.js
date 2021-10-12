import { put, call, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import {
  getJobs,
  getProfile,
  acceptJob,
  rejectJob
} from 'app/services/UserService';
import { jobMatchScreenTypes, jobMatchScreenActions } from './reducer';
import { showMessageToUser } from '../../utils/uiUtils';
import { NOTIFICATION_TYPE } from '../../utils/constants';
/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchJobs({ id, getProfileFlag }) {
  try {
    const response = yield call(getJobs, id);
    if (response.ok) {
      const { data } = response;
      if (getProfileFlag) {
        yield put(jobMatchScreenActions.requestProfile(id));
      }
      yield put(jobMatchScreenActions.successMatchJobs(data));
    } else {
      yield put(
        jobMatchScreenActions.failureMatchJobs(
          'There was an error while fetching data.'
        )
      );
    }
  } catch (e) {
    showMessageToUser({
      title: 'Error',
      message: 'Something went wrong! Please try again later.',
      notificationType: NOTIFICATION_TYPE.ERROR
    });
    yield put(
      jobMatchScreenActions.failureMatchJobs(
        'There was an error while fetching data.'
      )
    );
  }
}

export function* fetchProfile({ id }) {
  try {
    const response = yield call(getProfile, id);
    if (response.ok) {
      const { data } = response;
      yield put(jobMatchScreenActions.profileSuccess(data));
    } else {
      showMessageToUser({
        title: 'Error',
        message: 'Something went wrong! Please try again later.',
        notificationType: NOTIFICATION_TYPE.ERROR
      });
      yield put(
        jobMatchScreenActions.profileError(
          'There was an error while fetching profile.'
        )
      );
    }
  } catch (e) {
    showMessageToUser({
      title: 'Error',
      message: 'Something went wrong! Please try again later.',
      notificationType: NOTIFICATION_TYPE.ERROR
    });
    yield put(
      jobMatchScreenActions.profileError(
        'There was an error while fetching profile.'
      )
    );
  }
}

export function* submitJob({ jobId, accept, profileId }) {
  try {
    if (accept) {
      const response = yield call(acceptJob, { jobId, workerId: profileId });
      if (response.ok) {
        const { data } = response;
        if (data.success) {
          yield put(jobMatchScreenActions.requestMatchJobs(profileId, false));
          yield put(jobMatchScreenActions.submitJobSuccess());
          showMessageToUser({
            title: 'Success',
            message: 'Your request has been received',
            notificationType: NOTIFICATION_TYPE.SUCCESS
          });
        } else {
          showMessageToUser({
            title: 'Error',
            message: data.message,
            notificationType: NOTIFICATION_TYPE.ERROR
          });
          yield put(jobMatchScreenActions.submitJobError(data.message));
          yield put(jobMatchScreenActions.submitJobSuccess());
        }
      }
    } else {
      const response = yield call(rejectJob, { jobId, workerId: profileId });
      if (response.ok) {
        const { data } = response;
        if (data.success) {
          showMessageToUser({
            title: 'Success',
            message: 'Your request has been received',
            notificationType: NOTIFICATION_TYPE.SUCCESS
          });
          yield put(jobMatchScreenActions.requestMatchJobs(profileId, false));
          yield put(jobMatchScreenActions.submitJobSuccess());
        } else {
          showMessageToUser({
            title: 'Error',
            message: data.message,
            notificationType: NOTIFICATION_TYPE.ERROR
          });
          yield put(jobMatchScreenActions.submitJobError(data.message));
          yield put(jobMatchScreenActions.submitJobSuccess());
        }
      }
    }
  } catch (e) {
    showMessageToUser({
      title: 'Error',
      message: 'Something went wrong! Please try again later.',
      notificationType: NOTIFICATION_TYPE.ERROR
    });
    yield put(
      jobMatchScreenActions.submitJobError(
        'There was an error please try again later.'
      )
    );
  }
}

export default function* jobMatchContainerSaga() {
  yield takeLatest(jobMatchScreenTypes.REQUEST_MATCH_JOBS, fetchJobs);
  yield takeLatest(jobMatchScreenTypes.REQUEST_PROFILE, fetchProfile);
  yield takeLatest(jobMatchScreenTypes.SUBMIT_JOB, submitJob);
}
