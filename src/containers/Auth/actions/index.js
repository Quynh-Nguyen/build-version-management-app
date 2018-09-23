const loginRequest = (payload) => {
  console.log('loginRequest', payload)
  return {
    type: 'LOGIN_REQUESTED',
    payload: {
      email: payload.email,
      password: payload.password,
    }
  }
}

const loginSuccess = (payload) => {
  return {
    type: 'LOGIN_SUCCEED',
    payload: {

    }
  }
}

const loginError = (payload) => {
  return {
    type: 'LOGIN_FAILED',
    payload: {
      error: payload.error,
    }
  }
}

export {
  loginRequest,
  loginSuccess,
  loginError,
}
