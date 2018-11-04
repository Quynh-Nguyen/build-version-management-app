import { takeEvery, call, put } from 'redux-saga/effects'
import { normalize, schema } from 'normalizr'

import { getVersionSuccess, getVersionsFailed } from '../actions'
import { getVersionForProjectSucceed } from '../../Project/actions'
import ApiService from '../../../utils/axios'

export function* getVersions(action) {
  try {
    const { data } = yield call(ApiService.getVersions, action.payload.projectId, action.payload.type)
    if (data.status) {
      const version = new schema.Entity('versions')
      const versionData = normalize(data.data.data, [version])
      if (versionData.entities.versions) {
        yield put(getVersionSuccess({
          projectId: action.payload.projectId,
          versionsArray: versionData.result,
          versions: versionData.entities.versions
        }))
      } else {
        yield put(getVersionsFailed({error: 'No versions found.'}))
      }
    } else {
      yield put(getVersionsFailed(data.error))
    }
  } catch (e) {
    yield put(getVersionsFailed(e))
  }
}

export default function* watchGetVersionsAsync() {
  yield takeEvery('GET_VERSIONS', getVersions)
}