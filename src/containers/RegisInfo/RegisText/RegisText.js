/* eslint-disable */
import React from 'react'

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TextInput
} from 'react-native'

import global from './../../../styles/common.style'
import theme from './../../../styles/theme.style'
import styles from './styles'
import RegisterHeader from '../../../components/common/RegisterHeader/RegisterHeader'

const RegisText = () => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: theme.BACKGROUND_COLOR,  paddingBottom: 110 }}>
        <View style={[global.bodyContainer, { flex: 1 }]}>
          <View>
            <View style={styles.confirmContainer}>
              <TouchableNativeFeedback>
                <View style={styles.confirm}>
                  <Image
                    source={require('./../../../assets/icons/activity/confirm.png')} 
                  />
                </View>
              </TouchableNativeFeedback>
            </View>
            <TouchableWithoutFeedback>
              <View style={styles.paperInput}>
                <View >
                  <TextInput style={styles.paperText}
                    placeholder="Escribe algo"
                    numberOfLines={5}
                    multiline={true}
                    placeholder={'Esto es un post-it'}>

                  </TextInput>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <Text style={[global.txt, global.tagTxt, { marginTop: theme.GENERIC_MARGIN, color: theme.GRAY_COLOR }]}>Cambia el color del post-it</Text>
          <View style={[global.rowDistributed, { marginTop: theme.GENERIC_MARGIN, marginBottom: theme.GENERIC_MARGIN }]}>
            <TouchableWithoutFeedback>
              <View style={[styles.selector, { borderColor: theme.YELLOW_COLOR }]}></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={[styles.selector, { borderColor: theme.RED_COLOR }]}></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={[styles.selector, { borderColor: theme.VIOLET_COLOR }]}></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={[styles.selector, { borderColor: theme.GREEN_COLOR }]}></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
              <View style={[styles.selector, { borderColor: theme.BLUE_COLOR }]}></View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

RegisText.navigationOptions = {
  headerTitle: () => <RegisterHeader name={'Mapa de empatía'} /> ,
  headerRight: () => (
    <View style={{ flexDirection: 'row'}}>
      <TouchableNativeFeedback
        onPress={() => alert('This is a but!')}
      >
        <View style={[global.icon, { marginRight: 10 }]}>
        <Image 
          source={require('./../../../assets/icons/header/more.png')}
        />  
        </View>  
      </TouchableNativeFeedback>
      <TouchableNativeFeedback
        onPress={() => alert('This is a but!')}
      >
        <View style={[global.icon, { marginRight: 10 }]}>
        <Image 
          source={require('./../../../assets/icons/header/folder.png')}
        />  
        </View>  
      </TouchableNativeFeedback>
    </View>
  ),
}

export default RegisText

