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
  TouchableOpacity,
  TextInput
} from 'react-native'


import common from './../../../styles/common.style'
import theme from './../../../styles/theme.style'
import styles from './styles'
import authStyle from '../styles'

import { connect } from 'react-redux';
import { registerUserData } from '../../../redux/actions/users'
import AppInput from '../../../components/common/Inputs/AppInput/AppInput'
import AppButton from '../../../components/common/Inputs/AppButton/AppButton'

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
    props.registerUserData({email: email, password: password})
  }

  return (
    <View style={styles.registerContainer}>

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
          Bienvenido a InnNote,
        </Text>

        <Text style={[authStyle.titleTag]}>
          Cuéntanos de tí
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

              <Text style={authStyle.authMenuItem}>
                Iniciar Sesión
              </Text>

            </View>

          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback
            onPress={() => { props.navigation.navigate('Register') }}
          >

<View
              style={{ 
                alignItems: "center", 
                justifyContent: "center" 
              }}
            >

              <Text style={styles.authMenuItemActive}>
                Registrarse
              </Text>

              <View style={styles.authMenuItemActiveBar}/>

            </View>

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
            label='Registrarse'
            onPress={() => {onRegister(email, password)}}
            addedStyle={{
              backgroundColor: theme.BLACK_COLOR,
              marginLeft: theme.GENERIC_MARGIN,
              marginRight: theme.GENERIC_MARGIN
            }}
            />

          <TouchableOpacity
          >
            
            <Text
              style={[authStyle.forgetTag]}
            >
              Al registrarte aceptas los T&C
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

export default connect(mapStateToProps, mapDispatchToProps) (Register)
