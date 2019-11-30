/* eslint-disable */
import React, { useState } from 'react'

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  TouchableNativeFeedback,
  Image
} from 'react-native'

import styles from './styles'
import global from '../../styles/common.style'
import theme from '../../styles/theme.style'
import Reminder from '../../components/Project/Reminder/Reminder'
import DesignTGraph from '../../components/common/DesignTGraph/DesignTGraph'
import Activity from '../../components/Project/Activity/Activity'


import { connect } from 'react-redux';
import { setCurrentPhase } from '../../redux/actions/common';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TeamComponent from '../../components/Project/TeamComponent/TeamComponent'
import AppButton from '../../components/common/Inputs/AppButton/AppButton'
import common from '../../styles/common.style'
import ActivityBox from '../../components/Project/ActivityBox/ActivityBox'

/* eslint-enable */


const mapStateToProps = (state) => {
  return {
    user: state.commonData.user,
    projects: state.projectsData.projects,
    currentProject: state.projectsData.currentProject,
    currentPhase: state.commonData.currentPhase
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentPhase: (currentPhase) => dispatch(setCurrentPhase(currentPhase))
  }
}

const Project = (props) => {
  
  
  function getStepTitle () {
    switch (props.currentPhase) {
      case '1':
        return 'Empatizar'
      case '2':
        return 'Definir'
      case '3':
        return 'Idear'
      case '4':
        return 'Prototipar'
      case '5':
        return 'Testear'
    }
     
  }
  if (!props.currentProject) {
    return (
      <View>
        <View style={styles.copy}>
          <Text style={styles.copyTitle}>
            :(
        </Text>
          <Text style={styles.copyTxt}>
            No se encontró un proyecto, selecciona uno
        </Text>
          <AppButton
            label='Seleccionar un proyecto'
            onPress={() => { props.navigation.navigate('Projects') }}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('./../../assets/images/notifImage.png')}
          />
        </View>
      </View>
    )

  } else {

    return (
      <ScrollView style={[
        common.bodyContainer,
        {
          marginBottom: 0,
          backgroundColor: theme.BACKGROUND_COLOR,
          paddingRight: 0,
          paddingLeft: 0
        }
      ]}>

        <TeamComponent addedStyle={
          {
            marginRight: theme.GENERIC_MARGIN,
            marginLeft: theme.GENERIC_MARGIN
          }
        } />

        <View style={[styles.projectCard, {

              marginRight: theme.GENERIC_MARGIN,
              marginLeft: theme.GENERIC_MARGIN
        
          
        }]}>
          <Text style={[styles.littleTitle]}>
            Actividades de
            </Text>
          <Text style={[styles.bigTitle]}>
            Investigación
            </Text>
        </View>

        <ActivityBox
          navigation={props.navigation}
          initialActivity='emphatymap'
          activities={[
            {
              icon: 
              <Text>Entrevista</Text>,
              name: 'Entrevista',
              time: '30 min / sesión',
              id: 'interview'
            },
            {
              icon: 
              <Text>Mosca en la pared</Text>,
              name: 'Mosca en la pared',
              time: '1 hora / sesión',
              id: 'flyonthewall'
            },
            {
              icon: 
              <Text>Grupo focal</Text>,
              name: 'Grupo focal',
              time: '1 hora / sesión',
              id: 'focalgroup'
            },
            
          ]}
        />
        
        <View style={[
          styles.projectCard,
          {
            alignItems: 'center',
            marginRight: theme.GENERIC_MARGIN,
            marginLeft: theme.GENERIC_MARGIN
          }
        ]}>
          <Text style={[styles.littleTitle]}>
            Te encuentras en
            </Text>
          <Text style={[styles.bigTitle]}>
            {
              getStepTitle()
            }
            </Text>

          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
            <DesignTGraph currentStepID={props.currentPhase} isLittle={false} />
          </View>

          <Text style={[ styles.littleTag ]}>
            Presiona en la etapa para cambiar las actividades de innovación
          </Text>
        </View>
        <View style={[
          global.card,
          {
            backgroundColor: 'white',
            marginRight: theme.GENERIC_MARGIN,
            marginLeft: theme.GENERIC_MARGIN
          }
        ]}>
          <Text style={[
            styles.littleTitle
          ]}>
            Actividades de
            </Text>
          <Text style={[
            styles.bigTitle
          ]}>
            Innovación
            </Text>
        </View>

        <ActivityBox
          navigation={props.navigation}
          initialActivity='emphatymap'
          activities={[
            {
              icon: 
              <Text>Mapa de empatía</Text>,
              name: 'Mapa de empatía',
              time: '1 sesión',
              phase: '1',
              id: 'emphatymap'
            },
            {
              icon: 
              <Text>Mosca en la pared</Text>,
              name: 'Determinantes',
              time: '2 sesiones',
              phase: '2',
              id: 'flyonthewall'
            },
            {
              icon: 
              <Text>Grupo focal</Text>,
              name: 'Técnica Nominal',
              time: '1 sesión',
              phase: '3',
              id: 'nominal'
            },
            {
              icon: 
              <Text>Grupo focal</Text>,
              name: 'Modelo de negocio',
              time: '1 sesión',
              phase: '4',
              id: 'bussiness'
            },
            {
              icon: 
              <Text>Grupo focal</Text>,
              name: 'Planificación SCRUM',
              time: '5 sesiones',
              phase: '5',
              id: 'scrum'
            },
            
          ]}
        />
        <Reminder
          addedStyle={{ 
            opacity: .2,
            marginRight: theme.GENERIC_MARGIN,
            marginLeft: theme.GENERIC_MARGIN
           }}
        />
      </ScrollView>

    )
  }
}

Project.navigationOptions = {
  title: 'Aquí habría un nombre de proyecto'
}


export default connect(mapStateToProps, mapDispatchToProps)(Project)