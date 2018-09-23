import {
  AsyncStorage,
} from 'react-native'
import { fork, takeEvery, call, put, select, race, takeLatest } from 'redux-saga/effects'

import { loginSuccess, loginError } from '../actions'
import ApiService from '../../../utils/axios'

const LOGIN_API = '/users/login'

export function* setToken(token) {
  try {
    AsyncStorage.setItem('userToken', token)
  } catch (e) {
    console.log('SET TOKEN ERROR', e)
  }
}

export function* login(action) {
  try {
    const {data} = yield call(ApiService.post, LOGIN_API, action.payload)
    if (data.status) {
      yield call(setToken, data.data.token)
      yield put(loginSuccess({token: data.data.token}))
    } else {
      yield put(loginError({error: data.error.message[0]}))
    }
  } catch (e) {
    console.log('ERROR', e)
  }
}

export default function* test() {
  yield takeEvery('LOGIN_REQUESTED', login)
}
