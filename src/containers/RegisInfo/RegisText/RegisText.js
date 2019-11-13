/* eslint-disable */
import React from 'react'

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native'

import Header from '../../../components/common/Header/Header'
import global from './../../../styles/common.style'
import theme from './../../../styles/theme.style'
import styles from './styles'

const RegisText = () => {
  return (
      <ScrollView>
    <View style={{ backgroundColor: theme.BACKGROUND_COLOR }}>
      <Header isBack={true} isActivity={true} copy="Mapa de Empatía" />
      <ScrollView style={[global.bodyContainer, { marginLeft: 0, marginRight: 0 }]}>
        <View>
          <View style={styles.confirmContainer}>
            <TouchableNativeFeedback>
              <View style={styles.confirm}>
              </View>
            </TouchableNativeFeedback>
          </View>
          <TouchableWithoutFeedback>
            <View style={styles.paperInput}>
              <View >
                <TextInput style={styles.paperText} 
                placeholder="Escribe algo"
                numberOfLines={5}
                multiline={true}>
                  Este es un post-it
                </TextInput>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View>
          <TouchableWithoutFeedback>
            <View></View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View></View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View></View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View></View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback>
            <View></View>
          </TouchableWithoutFeedback>
        </View>
      </ScrollView>
    </View>
      </ScrollView>
  )
}

export default RegisText
