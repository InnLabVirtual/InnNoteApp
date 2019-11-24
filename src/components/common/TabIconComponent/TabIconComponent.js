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
import common from '../../../styles/common.style'
import themeStyle from '../../../styles/theme.style'


/* eslint-enable */

const TabIconComponent = (
  {
    label,
    tintColor
  }) => {


  return (
    <View>
        <Text>
            {label}
        </Text>
        <Text>
            {tintColor}
        </Text>
    </View>
  )
}

export default TabIconComponent
