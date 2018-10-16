import NavStore from '../../../store/NavStore'

const loginSuccessRedirect = () => {
  console.log('test')
  NavStore.pushToScreen('Main')
}

export {
  loginSuccessRedirect
}
