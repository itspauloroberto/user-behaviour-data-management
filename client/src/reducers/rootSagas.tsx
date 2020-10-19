import { all, fork } from 'redux-saga/effects';
import { watchFetchUsers } from './users/sagas';

export default function* root() {
  yield all([
    fork(watchFetchUsers)
  ]);
}