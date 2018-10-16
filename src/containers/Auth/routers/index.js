import NavStore from '../../../store/NavStore'

const loginSuccessRedirect = () => {
  NavStore.pushToScreen('Main')
}

const getStartedRedirect = () => {
  NavStore.pushToScreen('LoginNavigator')
}

const loginScreenRedirect = () => {
  NavStore.pushToScreen('Login')
}

export {
  loginSuccessRedirect,
  getStartedRedirect,
  loginScreenRedirect,
}
