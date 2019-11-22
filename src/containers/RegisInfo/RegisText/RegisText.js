/* eslint-disable */
import React, { useState } from 'react'

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

import { connect } from 'react-redux';
import { registerUserData } from '../../../redux/actions/users'
import { uploadTextRegister } from '../../../redux/actions/registers'

const mapStateToProps = (state) => {
  return { 
    userData: state.userData
   }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    registerUserData: (user) => dispatch(registerUserData(user)),
    uploadTextRegister: (postit) => dispatch(uploadTextRegister(postit)) 
  }
}


const RegisText = (props) => {
  const [currentColor, setCurrentColor] = useState('yellow');
  const [colorid, setColorid] = useState('0');
  const [postItText, setPostItText] = useState('');

  function onCreatePostIt (text, color) {
    //props.registerUserData({email: text, password: text});
    console.log(text);
    props.uploadTextRegister({text: text, color: color});
  }


  return (
    <ScrollView>
      <View style={{ backgroundColor: theme.BACKGROUND_COLOR,  paddingBottom: 110 }}>
        <View style={[global.bodyContainer, { flex: 1 }]}>
          <View>
            <View style={styles.confirmContainer}>
              <TouchableNativeFeedback
                onPress={() => {onCreatePostIt(postItText, colorid), setPostItText('')}}
              >
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
                    placeholder={'Esto es un post-it'}
                    onChange={text => {setPostItText(text.nativeEvent.text)}}
                    value={postItText}>

                  </TextInput>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <Text style={[global.txt, global.tagTxt, { marginTop: theme.GENERIC_MARGIN, color: theme.GRAY_COLOR }]}>Cambia el color del post-it</Text>
          <View style={[global.rowDistributed, { marginTop: theme.GENERIC_MARGIN, marginBottom: theme.GENERIC_MARGIN }]}>
            <TouchableWithoutFeedback
            onPress={ () => {setCurrentColor('yellow'), setColorid('0')} } >
              <View style={[styles.selector, currentColor=== 'yellow' && styles.selectorActiveYellow, { borderColor: theme.YELLOW_COLOR }]}></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
            onPress={ () => {setCurrentColor('red'), setColorid('1')} }>
              <View style={[styles.selector, currentColor=== 'red' && styles.selectorActiveRed, { borderColor: theme.RED_COLOR }]}></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
            onPress={ () => {setCurrentColor('violet'), setColorid('2')} }>
              <View style={[styles.selector, currentColor=== 'violet' && styles.selectorActiveViolet, { borderColor: theme.VIOLET_COLOR }]}></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
            onPress={ () => {setCurrentColor('green'), setColorid('3')} }>
              <View style={[styles.selector, currentColor=== 'green' && styles.selectorActiveGreen, { borderColor: theme.GREEN_COLOR }]}></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
            onPress={ () => {setCurrentColor('blue'), setColorid('4')} }>
              <View style={[styles.selector, currentColor=== 'blue' && styles.selectorActiveBlue, { borderColor: theme.BLUE_COLOR }]}></View>
            </TouchableWithoutFeedback>
          </View>
          <Text>
            UserData: {props.userData.name}
          </Text>
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


export default connect(mapStateToProps, mapDispatchToProps) (RegisText)

