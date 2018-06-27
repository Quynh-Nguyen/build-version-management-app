import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';

import { AuthNavigator } from '../../navigators';

@connect(state => ({
  nav: state.authNavigation
}))

class AuthNavigation extends React.Component {
  render() {
    return(
      <AuthNavigator
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav
        })}
      />
    )
  }
}

export default AuthNavigation
