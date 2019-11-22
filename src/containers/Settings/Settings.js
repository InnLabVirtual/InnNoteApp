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

import global from './../../styles/common.style'
import theme from './../../styles/theme.style'
import styles from './styles'

import { connect } from 'react-redux';
import { logoutUserData } from '../../redux/actions/users'
import { setUser } from '../../redux/actions/common';

const mapStateToProps = (state) => {
  return { 
    user: state.user
   }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    logoutUser: () => dispatch(logoutUserData()),
    setUser: (user) => dispatch(setUser(user))
  }
}


const Settings = (props) => {

  function onLogOut () {
    props.logoutUser();
    alert(props.user, "FROM SETTINGS");
  } 

  return (
    <ScrollView>
        <Button 
        title="LOGOUT" 
        onPress={() => { onLogOut() }}

        /> 
        
    </ScrollView>
  )
}

export default connect(mapStateToProps, mapDispatchToProps) (Settings)

