/* eslint-disable */
import React from 'react'

import {
  View,
  Text,
  TouchableNativeFeedback,
  Alert
} from 'react-native'


import styles from './styles'
import parentStyles from '../styles'
import themeStyle from '../../../../styles/theme.style';

/* eslint-enable */

const Member = (
  props
) => {
  return (
    <View>
      <TouchableNativeFeedback
        onPress={() => { Alert.alert("Este miembro se llama:", props.name) }}
      >
        <View style={parentStyles.member}>
          <Text style={styles.initial}>
            {props.name[0]}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

export default Member
