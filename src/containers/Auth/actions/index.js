import {
  LOGIN_REQUESTED,
  LOGIN_SUCCEED,
  LOGIN_FAILED,
  REGISTER_REQUESTED,
  REGISTER_SUCCEED,
  REGISTER_FAILED
} from '../constants'
import NavStore from '../../../store/NavStore'

const loginRequest = (payload) => {
  return {
    type: LOGIN_REQUESTED,
    payload: {
      email: payload.email,
      password: payload.password,
    }
  }
}

const loginSuccess = (payload) => {
  console.log('loginSuccess')
  return {
    type: LOGIN_SUCCEED,
    payload: {

    }
  }
}

const loginError = (payload) => {
  return {
    type: LOGIN_FAILED,
    payload: {
      error: payload.error,
    }
  }
}

const registerRequest = ({ username, email, password }) => {
  return {
    type: REGISTER_REQUESTED,
    payload: {
      username, email, password
    }
  }
}

const registerSuccess = (data) => ({
  type: REGISTER_SUCCEED,
  payload: {
    ...data
  }
})

const registerError = (error) => ({
  type: REGISTER_FAILED,
  payload: {
    ...error
  }
})

export {
  loginRequest,
  loginSuccess,
  loginError,
  registerRequest,
  registerSuccess,
  registerError
}
