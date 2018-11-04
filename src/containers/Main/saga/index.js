import { takeEvery, call, put, delay } from 'redux-saga/effects'
import { normalize, schema } from 'normalizr'

import { getProjectsFailed, getProjectsSucceed } from '../actions'
import ApiService from '../../../utils/axios'

export function* getProjects() {
  try {
    const { data } = yield call(ApiService.get, '/projects')
    if (data.status) {
      const project = new schema.Entity('projects')
      const projectData = normalize(data.data.data, [project])
      yield put(getProjectsSucceed(projectData.entities.projects))
    } else {
      yield put(getProjectsFailed(data.error))
    }
  } catch (e) {
    yield put(getProjectsFailed(e))
  }
}

export default function* watchGetProjectsAsync() {
  yield takeEvery('GET_PROJECTS_REQUEST', getProjects)
}