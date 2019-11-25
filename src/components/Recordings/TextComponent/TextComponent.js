/* eslint-disable */ 
import React from 'react'

import {
  View,
  Text,
  TouchableNativeFeedback,
  Image
} from 'react-native'

import global from '../../../styles/common.style'
import theme from '../../../styles/theme.style'
import styles from './styles'

/* eslint-enable */

import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    activeElement: state.commonData.activeElement,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

const TextComponent = (props) => {
  return (
    <View>
        <Text>
            This is a {props.activeElement} record component
        </Text>
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps) (TextComponent)