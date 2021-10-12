import { fork } from 'redux-saga/effects';
import jobMatchContainerSaga from '@scenes/JobMatchScreen/saga';
import startupSaga from '@scenes/RootScreen/saga';

export default function* root() {
  yield fork(startupSaga);
  yield fork(jobMatchContainerSaga);
}
