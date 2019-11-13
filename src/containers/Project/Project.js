/* eslint-disable */ 
import React from 'react'

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableNativeFeedback
  } from 'react-native'

import Header from '../../components/common/Header/Header'
import styles from './styles'
import global from '../../styles/common.style'
import theme from '../../styles/theme.style'
import Reminder from '../../components/Project/Reminder/Reminder'
import DesignTGraph from '../../components/common/DesignTGraph/DesignTGraph'
import Activity from '../../components/Project/Activity/Activity'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

/* eslint-enable */

const Project = (props) => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: theme.BACKGROUND_COLOR }}>
        <Header navigation={props.navigation} isBack={false} isActivity={false} copy="Nombre del proyecto"/>
        <ScrollView style={[styles.bodyContainer]}>
          <Reminder />
          <View style={[global.card, { backgroundColor: 'white' }]}>
            <Text style={[global.txt, global.title, global.cardTxt]}>
              Te encuentras en
            </Text>
            <Text style={[global.txt, global.title, global.highTxt, global.cardTxt]}>
              Prototipar
            </Text>
            <Text style={[
              global.txt,
              global.tagTxt,
              global.cardTxt,
              {
                width: '80%',
                marginTop: 5,
                color: theme.GRAY_COLOR
              }]}>
              Presiona en la etapa para saber más
            </Text>
            <View style= {[global.rowDistributed, { marginTop: 20, marginBottom: 20 }]}>
              {/* Emphatize Selector */}
              <TouchableNativeFeedback>
                <View style={[global.selector, global.selectorActive, { borderColor: theme.VIOLET_COLOR, backgroundColor: theme.VIOLET_COLOR }]}>
                </View>
              </TouchableNativeFeedback>
              {/* Define Selector */}
              <TouchableNativeFeedback>
                <View style={[global.selector, { borderColor: theme.BLUE_COLOR }]}>
                </View>
              </TouchableNativeFeedback>
              {/* Ideate Selector */}
              <TouchableNativeFeedback>
                <View style={[global.selector, { borderColor: theme.YELLOW_COLOR }]}>
                </View>
              </TouchableNativeFeedback>
              {/* Prototype Selector */}
              <TouchableNativeFeedback>
                <View style={[global.selector, { borderColor: theme.RED_COLOR }]}>
                </View>
              </TouchableNativeFeedback>
              {/* Test Selector */}
              <TouchableNativeFeedback>
                <View style={[global.selector, { borderColor: theme.GREEN_COLOR }]}>
                </View>
              </TouchableNativeFeedback>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
              <DesignTGraph currentStepID={'1'} isLittle={false} />
            </View>
          </View>
          <View>
            <Activity navigation={props.navigation} name={'Mapa de empatía'} time={30} />
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  )
}

Project.navigationOptions = {
  title:'Nombre de proyecto'
}

export default Project
