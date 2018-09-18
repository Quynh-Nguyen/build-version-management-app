import React from 'react'
import { connect } from 'react-redux'
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
} from 'react-native';
import { LinearGradient } from 'expo'

import { NavigationHeader } from '../../components/Navigation'
import { LayoutUtils } from '../../utils'
import { Images } from '../../utils'
import { TextInputCustom as TextInput } from '../../components/Input'
import { PrimaryButton, TextButton, EntryButton } from '../../components/Button'

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
})

const marginTop = LayoutUtils.getExtraTop()

class RegisterScreenClass extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      secureTextEntry: true,
    }
  }

  render() {
    const { secureTextEntry } = this.state
    const { goBack, signIn } = this.props
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
          </View>
          <View style={styles.content}>
            <View style={styles.inputContent}>
              <View style={styles.top}>
                <EntryButton text='Sign Up' isActive={true} />
                <EntryButton text='Sign In' onPress={signIn} isActive={false} />
              </View>
              <TextInput label='Name' text=''/>
              <TextInput label='Email' text=''/>
              <TextInput label='Password' secureTextEntry={secureTextEntry}/>
              <View style={styles.bottom}>
                <PrimaryButton raised={true} primary={true} upperCase={true} onPress={signIn} text='Sign Up'/>
                <TextButton upperCase={false} text='Term and privacy'/>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </View>
    )
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  goBack: () => dispatch({ type: 'GO_BACK' }),
  signIn: () => dispatch({ type: 'LOGIN_GOTO' }),
})

const RegisterScreen = connect(mapStateToProps, mapDispatchToProps)(RegisterScreenClass)

export { RegisterScreen };
