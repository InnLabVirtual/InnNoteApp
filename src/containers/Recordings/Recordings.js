/* eslint-disable */
import React, { useState } from 'react'

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native'

import global from './../../styles/common.style'
import theme from './../../styles/theme.style'
import styles from './styles'
import TextComponent from '../../components/Recordings/TextComponent/TextComponent'

const Recordings = (props) => {

  return (
    <View>
        <Text>
            This is recordings componemt
        </Text>
        <TextComponent>
          
        </TextComponent>
    </View>
    )
}

export default Recordings

