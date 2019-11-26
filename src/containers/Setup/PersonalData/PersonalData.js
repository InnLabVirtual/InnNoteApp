/* eslint-disable */
import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TextInput,
  Button,
  Image,
  Alert
} from 'react-native'

/* eslint-enable */

import { connect } from 'react-redux';
import { setSetupCompleted, uploadUserData, uploadSetupCompleted } from '../../../redux/actions/common';

import AppInput from './../../../components/common/Inputs/AppInput/AppInput'

import setupStyles from './../styles'
import styles from './styles'
import theme from '../../../styles/theme.style';

const mapStateToProps = (state) => {
  return {
    user: state.commonData.user,
    isSetupCompleted: state.commonData.isSetupCompleted,
    userData: state.commonData.userData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSetupCompleted: (isSetupCompleted) => dispatch(setSetupCompleted(isSetupCompleted)),
    uploadUserData: (userData) => dispatch(uploadUserData(userData)),
    uploadSetupCompleted: (isSetupCompleted, userData) => dispatch(uploadSetupCompleted(isSetupCompleted, userData))
  }
}

const PersonalData = (props) => {

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profession, setProfession] = useState('');

  function onUserData(name) {
    if (name != '') {
      props.uploadUserData({ uid: props.user.uid, name: name })
      props.uploadSetupCompleted(true, props.user.uid)
    } else {
      Alert.alert('Algo ha ido mal','Por favor escribe un nombre')
    }
  }

  return (
    <View style={setupStyles.setup}>
      <View style={setupStyles.header}>
        <Text style={setupStyles.headerTitle}>
          Cuéntanos de ti
        </Text>
      </View>
      <View style={setupStyles.setupContainer}>
        <AppInput
          label='Nombre'
          value={name}
          autoCapitalize='words'
          autoCompleteType='name'
          onChange={name => { setName(name.nativeEvent.text) }}
          addedStyle={[styles.halfInput, styles.dataInput]}
        />

        <AppInput
          label='¿A que te dedicas?'
          onChange={profession => { setProfession(profession.nativeEvent.text) }}
          value={profession}
          autoCapitalize='sentences'
        />
      </View>
      <View style={setupStyles.wizardMenu}>
        <TouchableWithoutFeedback
        >
          <Text style={[setupStyles.wizardMenuTag]}>
            Volver
          </Text>
        </TouchableWithoutFeedback>
        <View style={setupStyles.wizardMenuItemContainer}>
          <View style={[setupStyles.wizardMenuItem, setupStyles.wizardMenuItemActive]}></View>
          <View style={[setupStyles.wizardMenuItem]}></View>
          <View style={[setupStyles.wizardMenuItem]}></View>
        </View>
        <TouchableWithoutFeedback
          onPress={() => { onUserData(name) }}
        >
          <Text style={[
            setupStyles.wizardMenuTag,
            {
              color: theme.PRIMARY_COLOR
            }
          ]}>
            Siguiente
          </Text>
        </TouchableWithoutFeedback>
      </View>
      {/*
      <TouchableNativeFeedback
        
      >
        <Text>
          Termine presionando aqui
        </Text>
      </TouchableNativeFeedback>
*/}
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalData)
