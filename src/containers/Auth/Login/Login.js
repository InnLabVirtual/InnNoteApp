/* eslint-disable */
import React, { useState, useEffect } from 'react'

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

import auth from '@react-native-firebase/auth';

import global from './../../../styles/common.style'
import theme from './../../../styles/theme.style'
import styles from './styles'

import { connect } from 'react-redux';
import { loginUserData } from '../../../redux/actions/users'


const mapStateToProps = (state) => {
  return {
    userData: state.userData
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    loginUserData: (user) => dispatch(loginUserData(user)),
  }
}

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  async function onLogin(email, password) {
    props.loginUserData({email: email, password: password})
  }

  return (
    <View>
      <Text>Login</Text>

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
        title="LogIn"
        onPress={() => {onLogin(email, password)}}
      />
      <Button 
        title="Haven't you an account? Register"
        onPress={() => { props.navigation.navigate('Register') }}
      />
    </View>
  )
}


export default connect(mapStateToProps, mapDispatchToProps) (Login)

