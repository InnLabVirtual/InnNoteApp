/* eslint-disable */
import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  TouchableNativeFeedback,
  TextInput,
  Button,
  Image
} from 'react-native'

/* eslint-enable */

import { connect } from 'react-redux';
import { setSetupCompleted, uploadUserData } from '../../../redux/actions/common';

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
    uploadUserData: (userData) => dispatch(uploadUserData(userData))
    
  }
}

const PersonalData = (props) => {

  const [name, setName] = useState('');

  function onUserData(name) {
    props.uploadUserData({uid: props.user.uid, name: name})
    props.setSetupCompleted(true);
  }

  return (
    <View>
      <TextInput
        placeholder="Name"
        autoCapitalize="none"
        onChange={name => { setName(name.nativeEvent.text) }}
        value={name}
      />
      <TouchableNativeFeedback
        onPress={() => { onUserData(name) }}
      >
        <Text>
          Termine presionando aqui
        </Text>
      </TouchableNativeFeedback>

    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonalData)
