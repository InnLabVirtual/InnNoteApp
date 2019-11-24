/* eslint-disable */ 
import React from 'react'

import {
  View,
  Text,
  TouchableNativeFeedback
} from 'react-native'
import global from '../../../styles/common.style'
import theme from '../../../styles/theme.style'
import styles from './styles'
import Hexagon from './Hexagon/Hexagon'

/* eslint-enable */

const DesignTGraph = (props) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={ [styles.emphatize, (props.currentStepID !== '1' & props.isLittle && { opacity: theme.LOW_OPACITY })] }>
        <Hexagon phaseColor={props.isLittle ? 'white' : (props.currentStepID === '1' ? theme.PRIMARY_COLOR : theme.SUPERLIGHTGRAY_COLOR) } />
      </View>
      <View style={ [styles.define, (props.currentStepID !== '2' & props.isLittle && { opacity: theme.LOW_OPACITY })] }>
        <Hexagon phaseColor={props.isLittle ? 'white' : (props.currentStepID === '2' ? theme.PRIMARY_COLOR : theme.SUPERLIGHTGRAY_COLOR)} />
      </View>
      <View style={ [styles.ideate, (props.currentStepID !== '3' & props.isLittle && { opacity: theme.LOW_OPACITY })] }>
        <Hexagon phaseColor={props.isLittle ? 'white' : (props.currentStepID === '3' ? theme.PRIMARY_COLOR : theme.SUPERLIGHTGRAY_COLOR)} />
      </View>
      <View style={ [styles.prototyp, (props.currentStepID !== '4' & props.isLittle && { opacity: theme.LOW_OPACITY })] }>
        <Hexagon phaseColor={props.isLittle ? 'white' : (props.currentStepID === '4' ? theme.PRIMARY_COLOR : theme.SUPERLIGHTGRAY_COLOR)} />
      </View>
      <View style={ [styles.test, (props.currentStepID !== '5' & props.isLittle && { opacity: theme.LOW_OPACITY })] }>
        <Hexagon phaseColor={props.isLittle ? 'white' : (props.currentStepID === '5' ? theme.PRIMARY_COLOR : theme.SUPERLIGHTGRAY_COLOR)} />
      </View>
    </View>
  )
}

export default DesignTGraph
