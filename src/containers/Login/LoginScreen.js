import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  FlatList,
  Easing,
  Animated,
  SafeAreaView,
  Button,
  AsyncStorage,
  Image,
} from 'react-native';
import { LinearGradient } from 'expo'
import { EvilIcons } from '@expo/vector-icons'

import { NavigationHeader } from '../../components/Navigation'
import { LayoutUtils } from '../../utils'
import { Images } from '../../utils'
import { TextInputCustom as TextInput } from '../../components/Input'
import { PrimaryButton, TextButton, EntryButton } from '../../components/Button'
import { loginRequest } from '../Auth/actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141e29',
  },
  wrapper: {
    flex: 1,
  },
  logo: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 0.7,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  inputContent: {
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  top: {
    flexDirection: 'row',
    // paddingBottom: 30,
    justifyContent: 'flex-start'
  },
  bottom: {
    flex: 0.5,
    paddingTop: 32,
  },
  logoIcon: {
    flex: 0.5,
    width: 150,
    height: 150,
  },
})

const marginTop = LayoutUtils.getExtraTop()

class LoginScreenClass extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: ``,
      password: ``,
      secureTextEntry: true,
    }
  }

  signIn = () => {
    const { signIn } = this.props
    const { email, password } = this.state
    signIn(email, password)
  }

  render() {
    const { secureTextEntry, email, password } = this.state
    const { goBack, signUp, loading } = this.props

    const imageIcon = (
      <EvilIcons
        name="spinner-3"
        size={26}
        color="white"
      />
    )

    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['rgba(7,46,89,0.8)', 'transparent']}
          start={[0, 0]}
          end={[1, 1]}
          location={[0.25, 0.6, 1]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: '100%',
          }}
        />
        <StatusBar barStyle='light-content' />
        <NavigationHeader
          style={{ marginTop: marginTop + 20 }}
          headerItem={{
            title: `Join With Us`,
            icon: null,
            button: Images.closeButton
          }}
          action={goBack}
        />
        <SafeAreaView style={styles.wrapper}>
          <View style={styles.logo}>
            <Image
              resizeMode={'contain'}
              style={styles.logoIcon}
              source={Images.logo}
            />
          </View>
          <View style={styles.content}>
            <View style={styles.inputContent}>
              <View style={styles.top}>
                <EntryButton text='Sign Up' onPress={signUp} isActive={false} />
                <EntryButton text='Sign In' isActive={true} />
              </View>
              <TextInput
                label='Email'
                value={email}
                onChange={(email) => this.setState({email})}
                />
              <TextInput
                label='Password'
                secureTextEntry={secureTextEntry}
                value={password}
                onChange={(password) => this.setState({password})}
              />
              <View style={styles.bottom}>
                <PrimaryButton raised={true} primary={true} upperCase={true} onPress={this.signIn} text='Sign In' icon={loading ? imageIcon : ''}/>
                <TextButton upperCase={false} text='Forgot Password?'/>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  const loading = state.auth.get('loading')
  return {
    loading,
  }
}

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch({ type: 'GO_BACK' }),
  signIn: (email,password) => dispatch(loginRequest({email,password})),
  signUp: () => dispatch({ type: 'REGISTER_GOTO' }),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const LoginScreen = compose(
  withConnect,
)(LoginScreenClass)

export { LoginScreen };
