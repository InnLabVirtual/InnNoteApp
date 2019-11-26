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


/* eslint-enable */

const AppInput = (
  {
    value,
    onChange,
    autoCapitalize,
    autoCompleteType,
    label,
    secureTextEntry,
    addedStyle,
    multiline,
    maxLength,
    ...props
  }) => {

  const [borderColor, setBorderColor] = useState(theme.LIGHTGRAY_COLOR);

  function handleFocus() {
    setBorderColor(theme.DARKGRAY_COLOR)
  }
  
  function handleBlur() {
    setBorderColor(theme.SUPERLIGHTGRAY_COLOR)
  }

  return (
    <View>
      <View style={[
        { 
          opacity: value != '' ? 1 : 0,
        }
      ]}>
        <Text style={[styles.labelStyle]}>
          {label}
        </Text>
      </View>
      <TextInput
        placeholder={label}
        value={value}
        onChange={onChange}
        autoCapitalize={autoCapitalize}
        autoCompleteType={autoCompleteType}
        secureTextEntry={secureTextEntry}
        style={[
          styles.inputStyle,
          {
            borderBottomColor: borderColor,
          },
          addedStyle
        ]}
        onFocus={() => { handleFocus() }}
        onBlur={() => { handleBlur() }}
        multiline={multiline}
        maxLength={maxLength}
      />
    </View>
  )
}

export default AppInput
