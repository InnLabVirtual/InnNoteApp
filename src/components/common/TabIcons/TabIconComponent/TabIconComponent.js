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

import Svg, {
  G,
  Path,
} from 'react-native-svg';



/* eslint-enable */

const TabIconComponent = (
  {
    label,
    tintColor
  }) => {

  return (
    <View>

      <Svg
        width='30'
        height='30'
        viewBox="0 0 30 30"
      >
        <G
          fillOpacity='.7'
        >
          <Path
            d={label}
            fillRule="evenodd"
            fill={tintColor}
          >
          </Path>
        </G>
      </Svg>
    </View>
  )
}

export default TabIconComponent
