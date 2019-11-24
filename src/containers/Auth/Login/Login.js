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
  TouchableOpacity,
  TextInput
} from 'react-native'

import auth from '@react-native-firebase/auth';

import styles from './styles'

import AppInput from './../../../components/common/Inputs/AppInput/AppInput'

import { connect } from 'react-redux';
import { loginUserData } from '../../../redux/actions/users'
import AppButton from '../../../components/common/Inputs/AppButton/AppButton';
import common from '../../../styles/common.style';
import theme from '../../../styles/theme.style';

import authStyle from '../styles'

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
    props.loginUserData({ email: email, password: password })
  }

  return (
    <View style={styles.loginContainer}>

      <View style={[authStyle.header]}>

        <Image
          style={authStyle.logo}
          source={require('./../../../assets/logo/logo.white.png')}
        />

        <Text style={[
          authStyle.titleTag,
          common.highTxt,
          {
            marginTop: theme.LITTLE_MARGIN
          }
        ]}
        >
          Hola de nuevo,
        </Text>

        <Text style={[authStyle.titleTag]}>
          Inicia sesión para continuar
        </Text>

      </View>

      <View style={authStyle.authCard}>

        <View style={[authStyle.authContent, authStyle.authMenu]}>

          <TouchableWithoutFeedback
            onPress={() => { props.navigation.navigate('Login') }}
          >

            <View
              style={{ 
                alignItems: "center", 
                justifyContent: "center" 
              }}
            >

              <Text style={styles.authMenuItemActive}>
                Iniciar Sesión
              </Text>

              <View style={styles.authMenuItemActiveBar}/>

            </View>

          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => { props.navigation.navigate('Register') }}
          >

            <Text style={[authStyle.authMenuItem,]}>
              Registrarse
            </Text>

          </TouchableWithoutFeedback>

        </View>

        <View style={[
          authStyle.authContent, 
          authStyle.inputsContainer
          ]}>

          <AppInput
            label='Correo'
            onChange={email => { setEmail(email.nativeEvent.text) }}
            value={email}
            autoCapitalize='none'
            autoCompleteType='email'
            addedStyle={authStyle.inputStyle}
          />

          <AppInput
            label='Contraseña'
            onChange={password => { setPassword(password.nativeEvent.text) }}
            value={password}
            autoCapitalize='none'
            autoCompleteType='password'
            secureTextEntry={true}
            addedStyle={authStyle.inputStyle}
          />

          <AppButton
            label='Iniciar sesión'
            onPress={() => { onLogin(email, password) }}
            addedStyle={{
              marginLeft: theme.GENERIC_MARGIN,
              marginRight: theme.GENERIC_MARGIN
            }}
          />

          <TouchableOpacity
          >
            
            <Text
              style={[authStyle.forgetTag]}
            >
              Olvidé mi constraseña
            </Text>
          </TouchableOpacity>
        </View>

        <View style={[authStyle.loginContent, { flexDirection: 'row' }]}>
          <TouchableOpacity>
            <View
              style={[authStyle.mediaButton, {backgroundColor: '#3B5998'}]}
            >
              <Image
                style={[authStyle.mediaButtonImg]}
                source={require('./../../../assets/media/facebook.logo.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
            style={[authStyle.mediaButton, {backgroundColor: 'white'}]}
            >
              <Image
                style={[authStyle.mediaButtonImg]}
                source={require('./../../../assets/media/google.logo.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)

