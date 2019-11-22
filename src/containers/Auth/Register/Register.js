/* eslint-disable */
import React, { useState } from 'react'

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native'


import global from './../../../styles/common.style'
import theme from './../../../styles/theme.style'
import styles from './styles'

import { connect } from 'react-redux';
import { registerUserData } from '../../../redux/actions/users'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    registerUserData: (user) => dispatch(registerUserData(user)),
  }
}


const Register = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  async function onRegister(email, password) {
    console.log(email, "email");
    console.log(password, "password")
    props.registerUserData({email: email, password: password})
  }

  return (
    <View>
<Text>Sign Up</Text>
      {errorMessage && 
        <Text>
          {errorMessage}
        </Text>
      }
      <TextInput 
        placeholder="Email"
        autoCapitalize="none"
        onChange={email => {setEmail(email.nativeEvent.text)}}
        value= {email}
      />
      <TextInput
        secureTextEntry 
        placeholder="Password"
        autoCapitalize="none"
        onChange={password => {setPassword(password.nativeEvent.text)}}
        value= {password}
      />
      <Button 
        title="Sign Up"
        onPress={() => {onRegister(email, password)}}
      />
      <Button 
        title="Already have an account? Login"
        onPress={() => { props.navigation.navigate('Login') }}
      />
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps) (Register)
