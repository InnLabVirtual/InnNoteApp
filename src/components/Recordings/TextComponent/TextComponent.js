/* eslint-disable */
import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TextInput
} from 'react-native'

import global from '../../../styles/common.style'
import theme from '../../../styles/theme.style'
import styles from './styles'

/* eslint-enable */

import { connect } from 'react-redux';
import { registerUserData } from '../../../redux/actions/users'
import { uploadTextRegister } from '../../../redux/actions/registers'
import { watchIsConnected } from '../../../redux/actions/common';

const mapStateToProps = (state) => {
  return {
    userData: state.commonData.userData,
    currentProject: state.projectsData.currentProject,
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    registerUserData: (user) => dispatch(registerUserData(user)),
    uploadTextRegister: (postit) => dispatch(uploadTextRegister(postit)),
    watchIsConnected: (projectId, uid) => {dispatch(projectId, uid)}
  }
}

const TextComponent = (props) => {
  const [currentColor, setCurrentColor] = useState('yellow');
  const [colorid, setColorid] = useState('0');
  const [postItText, setPostItText] = useState('');

  function onCreatePostIt(text, color) {

    props.uploadTextRegister(
      {
        text: text,
        autor: props.userData.uid,
        color: color,
        currentProjectId: props.currentProject.id
      }
    );

  }

  function getCurrentColor () {
    if (currentColor == 'yellow') {
      return '#FFFAEC'
    } else if (currentColor == 'blue') {
      return '#B6E4FF'
    } else if (currentColor == 'green') {
      return '#CFFFF1'
    } else if (currentColor == 'violet') {
      return '#D9C4FF'
    } else if (currentColor == 'red') {
      return '#FFC4D1'
    }
  }

  return (
    <ScrollView>
      <View style={{ backgroundColor: theme.BACKGROUND_COLOR, paddingBottom: 110 }}>
        <View style={[global.bodyContainer, { flex: 1 }]}>
          <View>
            <View style={styles.confirmContainer}>
              <TouchableNativeFeedback
                onPress={() => { onCreatePostIt(postItText, colorid), setPostItText('') }}
              >
                <View style={styles.confirm}>
                  <Image
                    source={require('./../../../assets/icons/activity/confirm.png')}
                  />
                </View>
              </TouchableNativeFeedback>
            </View>
            <TouchableWithoutFeedback>
              <View style={ [styles.paperInput, { backgroundColor: getCurrentColor() }] }>
                <View >
                  <TextInput style={styles.paperText}
                    placeholder="Escribe algo"
                    numberOfLines={5}
                    multiline={true}
                    placeholder={'Esto es un post-it'}
                    onChange={text => { setPostItText(text.nativeEvent.text) }}
                    value={postItText}>

                  </TextInput>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <Text style={[global.txt, global.tagTxt, { marginTop: theme.GENERIC_MARGIN, color: theme.MEDIUMGRAY_COLOR }]}>Cambia el color del post-it</Text>
          <View style={[global.rowDistributed, { marginTop: theme.GENERIC_MARGIN, marginBottom: theme.GENERIC_MARGIN }]}>
            <TouchableWithoutFeedback
              onPress={() => { setCurrentColor('yellow'), setColorid('0') }} >
              <View style={[styles.selector, currentColor === 'yellow' && styles.selectorActiveYellow, { borderColor: theme.YELLOW_COLOR }]}></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => { setCurrentColor('red'), setColorid('1') }}>
              <View style={[styles.selector, currentColor === 'red' && styles.selectorActiveRed, { borderColor: theme.RED_COLOR }]}></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => { setCurrentColor('violet'), setColorid('2') }}>
              <View style={[styles.selector, currentColor === 'violet' && styles.selectorActiveViolet, { borderColor: theme.VIOLET_COLOR }]}></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => { setCurrentColor('green'), setColorid('3') }}>
              <View style={[styles.selector, currentColor === 'green' && styles.selectorActiveGreen, { borderColor: theme.GREEN_COLOR }]}></View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => { setCurrentColor('blue'), setColorid('4') }}>
              <View style={[styles.selector, currentColor === 'blue' && styles.selectorActiveBlue, { borderColor: theme.BLUE_COLOR }]}></View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(TextComponent)