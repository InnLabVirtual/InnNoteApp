/* eslint-disable */
import React, { useState } from 'react'

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native'

import global from './../../../styles/common.style'
import theme from './../../../styles/theme.style'
import styles from './styles'

const mapStateToProps = (state) => {

}

const mapDispatchToProps = (dispatch) => {

}


const Register = (props) => {

  return (
    <ScrollView>
        <TouchableNativeFeedback onPress={() => { props.navigation.navigate('ProjectNav') }}>
          <Text>
            This is the register
            </Text>
          </TouchableNativeFeedback>
    </ScrollView>
  )
}


export default Register

