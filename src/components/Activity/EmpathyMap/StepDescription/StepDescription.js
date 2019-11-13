/* eslint-disable */ 
import React from 'react'

import {
  View,
  Text,
  TouchableNativeFeedback
} from 'react-native'

/* eslint-enable */
import global from '../../../../styles/common.style'
import styles from './styles'

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

const StepDescription = (props) => {
  return (
    <View style= {{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
      <View style= {[styles.mapIcon, { opacity: 1 }]}></View>
      <Text style= {[global.txt, global.title, global.highTxt, { textAlign: 'center', marginBottom: 10, marginTop: 10 }]}>{activities[0].steps[parseInt(props.currentStepID) - 1].title}</Text>
      <Text style={[global.txt, { textAlign: 'center' }]} >{activities[0].steps[parseInt(props.currentStepID) - 1].description}</Text>
    </View>
  )
}

export default StepDescription
