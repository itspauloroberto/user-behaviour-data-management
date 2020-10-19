import { put, takeLatest } from 'redux-saga/effects';
import {
  USERS_LIST_REQUEST,
  USERS_LIST_FETCHING,
  USERS_LIST_SUCCESS,
  USERS_LIST_FAILURE,
} from '../../models/users/constants';
import { fetchUsers } from '../../models/users/api';

function* _watchFetchUsers() {
  yield put({ type: USERS_LIST_FETCHING });
  try {
    const response = yield fetchUsers();
    yield put({ type: USERS_LIST_SUCCESS, payload: response });
  } catch(error) {
    yield put({ type: USERS_LIST_FAILURE, payload: error });
  }
}

export function* watchFetchUsers() {
  yield takeLatest(USERS_LIST_REQUEST, _watchFetchUsers);
}