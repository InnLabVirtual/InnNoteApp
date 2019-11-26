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
import themeStyle from '../../../../styles/theme.style'


/* eslint-enable */

const AppButton = (
  {
    onPress,
    label,
    addedStyle,
    txtAddedStyle,
    ...props
  }) => {


  return (
    <View>
      <TouchableNativeFeedback
        onPress={onPress}
        style={{ borderRadius: themeStyle.BUTTON_CORNER_RADIUS}}
      >
        <View
          style={[
            common.btn,
            addedStyle
            ]}>
          <Text
            style={[
              common.txt,
              common.highTxt,
              common.btnText,
              txtAddedStyle
            ]}
          >
            {label}
          </Text>
        </View>
        
      </TouchableNativeFeedback>
    </View>
  )
}

export default AppButton
