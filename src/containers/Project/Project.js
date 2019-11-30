/* eslint-disable */
import React from 'react'

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TouchableNativeFeedback
} from 'react-native'

import styles from './styles'
import global from '../../styles/common.style'
import theme from '../../styles/theme.style'
import Reminder from '../../components/Project/Reminder/Reminder'
import DesignTGraph from '../../components/common/DesignTGraph/DesignTGraph'
import Activity from '../../components/Project/Activity/Activity'


import { connect } from 'react-redux';
import { watchCurrentProject } from '../../redux/actions/projects';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TeamComponent from '../../components/Project/TeamComponent/TeamComponent'

/* eslint-enable */


const mapStateToProps = (state) => {
  return {
    user: state.commonData.user,
    projects: state.projectsData.projects,
    currentProject: state.projectsData.currentProject
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const Project = (props) => {


  if (!props.currentProject) {
    return <View>
      <Text>
        Selecciona por favor un proyecto
      </Text>
      <Button
        title='Seleccionar un proyecto'
      >

      </Button>
      </View>
  } else {
  
  return (
    <ScrollView>
      <View style={{
        backgroundColor: theme.BACKGROUND_COLOR
      }}>
        <ScrollView style={[
          styles.bodyContainer,
          {
            marginBottom: 0
          }
        ]}>

          <TeamComponent />
          <View style={[
            global.card,
            {
              backgroundColor: 'white'
            }
          ]}>
            <Text style={[
              global.txt,
              global.tag,
              global.cardTxt,
              {
                textAlign: 'center',
                color: theme.LIGHTGRAY_COLOR
              }
            ]}>
              Actividades de
            </Text>
            <Text style={[
              global.txt,
              global.title,
              global.highTxt,
              global.cardTxt,
              {
                textAlign: 'center'
              }
            ]}>
              Investigación
            </Text>
          </View>

          { // TODO 
          }
          <View style={{ alignItems: 'center', marginTop: theme.GENERIC_MARGIN }}>
            <Activity navigation={props.navigation} name={'Mapa de empatía'} time={30} />
          </View>

          <View style={[
            global.card,
            {
              backgroundColor: 'white',
              alignItems: 'center'
            }
          ]}>
            <Text style={[
              global.txt,
              global.tag,
              global.cardTxt,
              {
                textAlign: 'center',
                color: theme.LIGHTGRAY_COLOR
              }
            ]}>
              Te encuentras en
            </Text>
            <Text style={[
              global.txt,
              global.title,
              global.highTxt,
              global.cardTxt,
              {
                textAlign: 'center'
              }
            ]}>
              Prototipar
            </Text>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
              <DesignTGraph currentStepID={'3'} isLittle={false} />
            </View>
            <Text style={[
              global.txt,
              global.tagTxt,
              global.cardTxt,
              {
                textAlign: 'center',
                width: '80%',
                marginTop: 5,
                color: theme.LIGHTGRAY_COLOR
              }]}>
              Presiona en la etapa para saber más
            </Text>
          </View>
          <View style={[
            global.card,
            {
              backgroundColor: 'white'
            }
          ]}>
            <Text style={[
              global.txt,
              global.tag,
              global.cardTxt,
              {
                textAlign: 'center',
                color: theme.LIGHTGRAY_COLOR
              }
            ]}>
              Actividades de
            </Text>
            <Text style={[
              global.txt,
              global.title,
              global.highTxt,
              global.cardTxt,
              {
                textAlign: 'center'
              }
            ]}>
              Innovación
            </Text>
          </View>
          
          <View style={{ alignItems: 'center', marginTop: theme.GENERIC_MARGIN }}>
            <Activity 
            navigation={props.navigation} 
            name={'Entrevista'} 
            time={45} />
          </View>
          <Reminder />
        </ScrollView>
      </View>
    </ScrollView>
  )
}
}

Project.navigationOptions = {
  title: 'Nombre de proyecto'
}


export default connect(mapStateToProps, mapDispatchToProps)(Project)