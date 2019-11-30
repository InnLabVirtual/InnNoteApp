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
      
      <Hexagon style={[styles.emphatize]} isActive={(props.currentStepID === '1' ? true : false)} />
      <Hexagon style={[styles.define]} isActive={(props.currentStepID === '2' ? true : false)} />
      <Hexagon style={[styles.ideate]} isActive={(props.currentStepID === '3' ? true : false)} />
      <Hexagon style={[styles.prototyp]} isActive={(props.currentStepID === '4' ? true : false)} />
      <Hexagon style={[styles.test]} isActive={(props.currentStepID === '5' ? true : false)} />
    </View>
  )
}

export default DesignTGraph
