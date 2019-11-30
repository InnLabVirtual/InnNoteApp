/* eslint-disable */
import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  TextInput,
  TouchableNativeFeedback,
  Image
} from 'react-native'

import Svg, {
  G,
  Path,
} from 'react-native-svg';

import styles from './styles'
import common from '../../../../styles/common.style'
import theme from '../../../../styles/theme.style'

import { connect } from 'react-redux';
import { watchConnected } from './../../../../redux/actions/projects'
/* eslint-enable */

const mapStateToProps = (state) => {
  return {
    activeElement: state.commonData.activeElement,
    currentProject: state.projectsData.currentProject,
    userData: state.commonData.userData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    watchConnected: (projectID, uid) => dispatch(watchConnected(projectID, uid))
  }
}

const MainIconComponent = (
  {
    isActive,
    ...props
  }) => {

    
  return (
    <View>
      {isActive && 
      <Image
        style={styles.icon}  
        source={props.activeElement}
      />}
    </View>
  )
}
export default connect(mapStateToProps, mapDispatchToProps) (MainIconComponent)