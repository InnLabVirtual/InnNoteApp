/* eslint-disable */

import React from 'react'

import {
  View,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native'

import Svg, {
  G,
  Path,
} from 'react-native-svg';

import theme from '../../../../styles/theme.style'

import styles from './styles'
/* eslint-enable */

const Hexagon = (props) => {
  return (
    <TouchableWithoutFeedback
    onPress={() => {(props.onPress(props.type))}}
    >

    <View style={[props.style, {marginLeft: -5, marginRight: -5}]}>

      <Svg
        width='54'
        height='48'
        viewBox="0 0 54 48"
      >
        <Path
          d="M2.3094 22L12.9226 3.61731C13.6372 2.37971 14.9577 1.61731 16.3868 1.61731L37.6132 1.61731C39.0423 1.61731 40.3628 2.37971 41.0774 3.61731L51.6906 22C52.4051 23.2376 52.4051 24.7624 51.6906 26L41.0774 44.3827C40.3628 45.6203 39.0423 46.3827 37.6132 46.3827L16.3868 46.3827C14.9577 46.3827 13.6372 45.6203 12.9226 44.3827L2.3094 26C1.59487 24.7624 1.59487 23.2376 2.3094 22Z" 
          fill='none'
          stroke={props.isActive ? theme.PRIMARY_COLOR : theme.SUPERLIGHTGRAY_COLOR}
          strokeWidth={props.isActive ? '4' : '2'}
        >
        </Path>

      </Svg>
      


    </View>
    </TouchableWithoutFeedback>
  )
}


export default Hexagon
