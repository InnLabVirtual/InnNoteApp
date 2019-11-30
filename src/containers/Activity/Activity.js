/* eslint-disable */
import React from 'react'

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableNativeFeedback,
  Image
} from 'react-native'

import styles from './styles'
import global from '../../styles/common.style'
import theme from '../../styles/theme.style'
import DesignTGraph from '../../components/common/DesignTGraph/DesignTGraph'
import EmpathyMap from '../../components/Activity/EmpathyMap/EmpathyMap'

const activities = [
  {
    name: 'empathymap',
    title: 'Mapa de empatía',
    description: [
      {
        text: 'El mapa de empatía te permite entender mejor a tu usuario',
        isBold: false
      },
      {
        text: ', su personalidad, entorno, visión del mundo, necesidades y deseos.',
        isBold: true
      }
    ],
    timePerClass: '30',
    currentStepID: '3',
    icon: '',
    steps: [
      {
        name: 've',
        title: '¿Qué ve?',
        description: '¿Cómo es su entorno?; identificar a sus amigos, a su familia, sus compañeros.'
      },
      {
        name: 'dice',
        title: '¿Que dice y hace?',
        description: '¿Cómo habla, cómo actúa? comprobar si existe contradicción entre lo que dice y hace.'
      },
      {
        name: 'oye',
        title: '¿Qué oye?',
        description: '¿Qué dicen las personas que lo rodean?'
      },
      {
        name: 'siente',
        title: '¿Qué piensa y siente?',
        description: '¿Qué es lo que realmente le importa? principales preocupaciones, inquietudes, sueños y aspiraciones.'
      },
      {
        name: 'esfuerzo',
        title: 'Esfuerzos',
        description: 'En qué se esfuerza, qué le frustra, qué obstaculos tiene.'
      },
      {
        name: 'resultado',
        title: 'Resultados',
        description: '¿Cómo evade el usuario los obstaculos?, qué métodos usa para sentirse mejor.'
      }
    ]
  }
]


const Activity = (props) => {
  return (
    <ScrollView>
      <View style={{ backgroundColor: theme.BACKGROUND_COLOR }}>
        <ScrollView style={[global.bodyContainer, { marginLeft: 0, marginRight: 0 }]}>
          <View style={[global.card, { elevation: 12, height: 220, justifyContent: 'space-between', marginTop: 40, marginLeft: theme.GENERIC_MARGIN, marginRight: theme.GENERIC_MARGIN, backgroundColor: theme.PRIMARY_COLOR }]}>
            <View>
              <View style={{}}>
                <View style={{ transform: [{ scale: 0.3 }], position: 'absolute', bottom: -180, right: -90 }}>
                  <DesignTGraph isLittle={true} currentStepID={activities[0].currentStepID} />
                </View>
                <View style={[global.mainIcon, styles.mainIconActive]}>
                  <View style={global.mainIconContent}>
                    <Image
                      source={require('./../../assets/icons/activity/empathy_map/empathy_map.png')}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View>
              <Text style={[global.txt, global.highTxt, global.title, { color: 'white' }]}>
                {activities[0].title}
              </Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                <View style={[global.cardIcon, global.cardTxt, { justifyContent: 'center', alignItems: 'center' }]}>
                  <Image
                    source={require('./../../assets/icons/activity/time.png')}
                  />
                </View>
                <Text style={[global.txt, global.cardTag, { color: 'white' }]}>
                  {activities[0].timePerClass} min / sesión
              </Text>
              </View>
            </View>
          </View>
          <View style={[global.card, { backgroundColor: 'white', marginTop: -150, paddingTop: 150 }]}>
            <Text style={{ textAlign: 'justify', marginLeft: theme.GENERIC_MARGIN, marginRight: theme.GENERIC_MARGIN }}>
              {
                activities[0] && activities[0].description.map((description, index) => {
                  return (
                    <Text key={index} style={[
                      styles.mainText,
                      description.isBold && global.highTxt,
                    ]}>
                      {description.text}
                    </Text>
                  )
                })
              }
            </Text>
            <Text style={{ textAlign: 'justify', marginLeft: theme.GENERIC_MARGIN, marginRight: theme.GENERIC_MARGIN, marginTop: 20 }}>
              <Text style={[styles.mainText]}>
                Revisa el siguiente esquema, que podrás completar más adelante en
            </Text>
              <Text style={[styles.mainText, global.highTxt]}>
                : InnReality
            </Text>
            </Text>
          </View>
          <View style={[global.bodyContainer]}>

            <EmpathyMap currentStepID={'2'} />

            <View style={[global.card]}>
              <View style={[global.rowDistributed, { alignItems: 'center' }]}>
                <Text style={[global.txt, global.subTitle, { color: 'white' }]}>
                  Registro
              </Text>
                <TouchableNativeFeedback>
                  <View style={[global.cardButton]}>
                    <Text style={[global.txt, global.highTxt, { color: theme.PRIMARY_COLOR }]}>
                      Ver registros
                  </Text>
                  </View>
                </TouchableNativeFeedback>
              </View>

            </View>

          </View>

        </ScrollView>
      </View>

    </ScrollView>
  )
}





export default Activity
