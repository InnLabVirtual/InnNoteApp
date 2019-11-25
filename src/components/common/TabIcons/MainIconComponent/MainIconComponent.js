/* eslint-disable */
import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  TextInput,
  TouchableNativeFeedback,
  Image
} from 'react-native'

import styles from './styles'
import common from '../../../../styles/common.style'
import theme from '../../../../styles/theme.style'

import { connect } from 'react-redux';

/* eslint-enable */

const mapStateToProps = (state) => {
  return {
    activeElement: state.commonData.activeElement,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}


const MainIconComponent = (
  {
    label,
    isActive,
    ...props
  }) => {


  return (
    <View>
      {isActive && <Text>{props.activeElement}</Text>}
    </View>
  )
}
export default connect(mapStateToProps, mapDispatchToProps) (MainIconComponent)