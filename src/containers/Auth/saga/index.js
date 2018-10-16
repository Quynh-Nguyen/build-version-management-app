import {
  AsyncStorage,
} from 'react-native'
import { fork, takeEvery, call, put, select, race, takeLatest } from 'redux-saga/effects'

import {
  loginSuccess,
  loginError,
  registerSuccess,
  registerError,
} from '../actions'
import {
  loginSuccessRedirect,
} from '../routers'
import { LOGIN_REQUESTED, REGISTER_REQUESTED } from '../constants'
import ApiService from '../../../utils/axios'

const LOGIN_API = '/users/login'
const REGISTER_API = '/users/register'

export function* setToken(token) {
  try {
    console.log('set Token')
    AsyncStorage.setItem('userToken', token)
  } catch (e) {
    console.log('SET TOKEN ERROR', e)
  }
}

export function* login(action) {
  try {
    const {data} = yield call(ApiService.post, LOGIN_API, action.payload)
    if (data.status) {
      yield call(setToken, data.data)
      yield put(loginSuccess({token: data.data}))
      yield call(loginSuccessRedirect)
    } else {
      yield put(loginError({error: data.error.message[0]}))
    }
  } catch (e) {
    console.log('ERROR', e)
  }
}

export function* register(action) {
  try {
    const { data } = yield call(ApiService.post, REGISTER_API, action.payload)
    if (data.status) {
      yield call(setToken, data.data)
      yield put(registerSuccess({token: data.data}))
    } else {
      yield put(registerError({ error: data.error.message[0] }))
    }
  } catch (error) {
    console.log('REGISTER_ERROR', error)
  }
}

export default function* test() {
  yield takeEvery(LOGIN_REQUESTED, login)
  yield takeEvery(REGISTER_REQUESTED, register)
}
