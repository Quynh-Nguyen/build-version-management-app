import { takeEvery, call, put } from 'redux-saga/effects';

import { getVersionSuccess, getVersionsFailed } from '../actions';
import ApiService from '../../../utils/axios';

export function* getVersions(action) {
  try {
    const { data } = yield call(ApiService.getVersions, action.payload.projectId, action.payload.type);
    console.log('Resp', data);
    if (data.status) {
      yield put(getVersionSuccess(data.data));
    } else {
      yield put(getVersionsFailed(data.error));
    }
  } catch (e) {
    yield put(getVersionsFailed(e));
  }
}

export default function* watchGetVersionsAsync() {
  yield takeEvery('GET_VERSIONS', getVersions);
}