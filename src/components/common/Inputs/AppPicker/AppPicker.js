/* eslint-disable */
import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  Picker,
  TextInput,
  TouchableNativeFeedback,
  Image
} from 'react-native'
import styles from './styles'
import common from '../../../../styles/common.style'
import theme from '../../../../styles/theme.style'


/* eslint-enable */

const AppPicker = (
  {
    label,
    value,
    onChange,
    mode,
    addedStyle,
    items,
    teamMembers,
    ...props
  }) => {

  const [borderColor, setBorderColor] = useState(theme.LIGHTGRAY_COLOR);

  return (
    <View>
      <View>
        <Text style={[styles.labelStyle]}>
          {label}
        </Text>
      </View>
      <Picker
        selectedValue={value}
        onValueChange={onChange}
        style={[
          styles.inputStyle,
          addedStyle
        ]}
        mode={mode}
        prompt={label}
      >
        
        {items.map(item => 

        !teamMembers.includes(item.id) ? (
          <Picker.Item
            key={item.id}
            label={item.name}
            value={item.id} />
        ) : (
          <Picker.Item
            label={'--'}
            value={''} />
        ))}
      </Picker>
    </View>
  )
}

export default AppPicker
