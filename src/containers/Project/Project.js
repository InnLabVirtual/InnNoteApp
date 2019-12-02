/* eslint-disable */
import React, { useState, useEffect } from 'react'

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
import { watchCurrentProjectUsers } from '../../redux/actions/projects';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import TeamComponent from '../../components/Project/TeamComponent/TeamComponent'
import AppButton from '../../components/common/Inputs/AppButton/AppButton'
import common from '../../styles/common.style'
import ActivityBox from '../../components/Project/ActivityBox/ActivityBox'
import EmpathyMap from '../../components/Activity/EmpathyMap/EmpathyMap'

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
    setCurrentPhase: (currentPhase) => dispatch(setCurrentPhase(currentPhase)),
    watchCurrentProjectUsers: (projectID) => dispatch(watchCurrentProjectUsers(projectID)),

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
      <View
        style={{backgroundColor: theme.BACKGROUND_COLOR}}
      >
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

        <TeamComponent 
        addedStyle={
          {
            marginRight: theme.GENERIC_MARGIN,
            marginLeft: theme.GENERIC_MARGIN
          }
        } 
        navigation={props.navigation}
        />

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
              id: 'interview',
              color: theme.BLACK_COLOR,
              description: [
                {
                  text: 'La entrevista es uno de lo métodos más comunes para recoger información. Se hace a una sola persona por sesión ',
                  isBold: false
                },
                {
                  text: 'y es recomendable hacerlas en grupos de dos personas.',
                  isBold: true
                }
              ]
            },
            {
              icon: 
              <Text>Mosca en la pared</Text>,
              name: 'Mosca en la pared',
              time: '1 hora / sesión',
              id: 'flyonthewall',
              color: theme.BLACK_COLOR,
              description: [
                {
                  text: 'La mosca en la pared consiste en infiltrarse en el contexto del usuario, no interferir en lo que está haciendo',
                  isBold: false
                },
                {
                  text: 'y registrar todo lo que haga, vea, sienta, diga o piense',
                  isBold: true
                }
              ]
            },
            {
              icon: 
              <Text>Grupo focal</Text>,
              name: 'Grupo focal',
              time: '1 hora / sesión',
              id: 'focalgroup',
              color: theme.BLACK_COLOR,
              description: [
                {
                  text: 'El grupo focal es una forma de recolección de información grupal, recoge a un grupo de mínimo 3 personas con distintos contextos, y realiza preguntas abiertas que puedan generar discusión',
                  isBold: false
                },
                {
                  text: ', la discusión es tu principal aliado, anota la información relevante, especialmente los puntos en que no estén de acuerdo',
                  isBold: true
                }
              ]
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
              id: 'emphatymap',
              scheme: <EmpathyMap />,
              color: theme.EMPATHIZE_COLOR,
              description: [
                {
                  text: 'El mapa de empatía te permite entender mejor a tu usuario',
                  isBold: false
                },
                {
                  text: ', su personalidad, entorno, visión del mundo, necesidades y deseos.',
                  isBold: true
                }
              ]
            },
            {
              icon: 
              <Text>Mosca en la pared</Text>,
              name: 'Determinantes',
              time: '2 sesiones',
              phase: '2',
              id: 'flyonthewall',
              // scheme: <EmpathyMap />,
              color: theme.DEFINE_COLOR,
              description: [
                {
                  text: 'Es importante conocer lo determinante para cambiar la realidad de los usuarios',
                  isBold: false
                },
                {
                  text: ' estos son los elementos mínimos que deber tener una solución',
                  isBold: true
                }
              ]
            },
            {
              icon: 
              <Text>Grupo focal</Text>,
              name: 'Técnica Nominal',
              time: '1 sesión',
              phase: '3',
              id: 'nominal',
              color: theme.IDEATION_COLOR,              scheme: <EmpathyMap />,
              // scheme: <EmpathyMap />,
              
              description: [
                {
                  text: 'La técnica nominal  sirve para generar ideas en conjunto. Cada quien escribe su idea, y luego la comparten',
                  isBold: false
                },
                {
                  text: ', lo importante es aportar en las ideas de los demás y generar ideas en conjunto',
                  isBold: true
                }
              ]
            },
            {
              icon: 
              <Text>Grupo focal</Text>,
              name: 'Modelo de negocio',
              time: '1 sesión',
              phase: '4',
              id: 'bussiness',
              color: theme.PROTOTYPE_COLOR,
              description: [
                {
                  text: 'El modelo de negocio va a asegurar que tu propuesta pueda salir al mercado',
                  isBold: false
                },
                {
                  text: ', entrega los puntos a tener en cuenta para poder desarrollarlo.',
                  isBold: true
                }
              ]
            },
            {
              icon: 
              <Text>Grupo focal</Text>,
              name: 'Planificación SCRUM',
              time: '5 sesiones',
              phase: '5',
              id: 'scrum',
              color: theme.TEST_COLOR,
              description: [
                {
                  text: 'Para testear tu prototipo se utiliza la planificación SCRUM, como en esta metodología ágil anota lo que el usuario haga cuando pruebe tu prototipo',
                  isBold: false
                },
                {
                  text: ', y corrige lo que sea necesario.',
                  isBold: true
                }
              ]
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