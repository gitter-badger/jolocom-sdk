import * as React from 'react'
import { View, Text, Animated, StyleSheet, Image, Dimensions, ScrollView  } from 'react-native'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import { LandingComponent } from '../components/Landing'
import { registrationActions } from '../../../actions'
import { StackNavigator } from 'react-navigation'

export interface ReduxProps {
  startCreateIdentity: () => void;
  navigation : any
}

class LandingContainer extends React.Component<ReduxProps> {

  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <LandingComponent
          clickNext={() => navigate('PasswordEntry')}/>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch : Function) => {
  return {
    startCreateIdentity: () => dispatch(registrationActions.startCreateIdentity())
  }
}

export const Landing = connect(null, mapDispatchToProps)(LandingContainer)
