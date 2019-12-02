/* eslint-disable */
import React from 'react'

import {
  View,
  Text,
  TouchableNativeFeedback
} from 'react-native'

import Svg, {
  G,
  Path,
} from 'react-native-svg';

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
        description: '¿Cómo es su entorno?; identificar a sus amigos, a su familia, sus compañeros.',
        icon:
          <Svg
            width='14'
            height='11'
            viewBox="0 0 14 11"
          >
            <Path
              d="M13.2314 5.4106C12.0225 8.05117 9.75822 9.8248 7.16524 9.8248C4.57226 9.8248 2.30431 8.05117 1.09912 5.4106C2.31161 2.77363 4.57226 1 7.16524 1C9.75457 1 12.0189 2.77363 13.2314 5.4106Z"
              stroke="white"
              strokeMiterlimit="10"
              fill="none"
            />
            <Path
              d="M7.16158 8.19566C8.71668 8.19566 9.97734 6.94874 9.97734 5.41059C9.97734 3.87244 8.71668 2.62552 7.16158 2.62552C5.60648 2.62552 4.34583 3.87244 4.34583 5.41059C4.34583 6.94874 5.60648 8.19566 7.16158 8.19566Z"
              stroke="white"
              strokeMiterlimit="10"
              fill="none"
            />
          </Svg>
      },
      {
        name: 'dice',
        title: '¿Que dice y hace?',
        description: '¿Cómo habla, cómo actúa? comprobar si existe contradicción entre lo que dice y hace.',
        icon:
          <Svg
            width='12'
            height='14'
            viewBox="0 0 12 14"
          >
            <Path
              d="M11.1255 9.72245C11.1255 11.5327 9.64199 13 7.81179 13H4.68043C2.48919 13 0.716187 11.2428 0.716187 9.07896V8.11373C0.716187 6.802 1.79214 5.73777 3.11833 5.73777V2.53447C3.11833 1.68592 3.8118 1 4.66971 1H9.57407C10.432 1 11.1255 1.68592 11.1255 2.53447V5.73777V9.72245Z"
              stroke="white"
              strokeMiterlimit="10"
              fill="none"
            />
            <Path
              d="M3.11841 5.73776V9.11784"
              stroke="white"
              strokeMiterlimit="10"
              fill="none"
            />
            <Path
              d="M5.92078 1V6.5439"
              stroke="white"
              strokeMiterlimit="10"
              fill="none"
            />
            <Path
              d="M8.52319 1V6.5439"
              stroke="white"
              strokeMiterlimit="10"
              fill="none"
            />
          </Svg>
      },
      {
        name: 'oye',
        title: '¿Qué oye?',
        description: '¿Qué dicen las personas que lo rodean?',
        icon:
          <Svg
            width='10'
            height='14'
            viewBox="0 0 10 14"
          >
            <Path
              d="M5.1413 1C3.03838 1 1.33313 2.68667 1.33313 4.76667V6.82667V8.26V11.5C1.33313 12.33 2.01051 13 2.84966 13C4.13702 13 5.17837 11.9667 5.17837 10.6967V9.28333C5.17837 8.72 5.64007 8.26 6.21298 8.26C7.57112 8.26 8.67313 7.17 8.67313 5.82667V4.49667C8.67313 2.56333 7.09257 1 5.1413 1Z"
              stroke="white"
              strokeMiterlimit="10"
              fill="none"
            />
            <Path
              d="M3.22375 8.63V7.13C3.22375 6.37333 3.84385 5.76 4.60885 5.76C5.22894 5.76 5.73108 5.26333 5.73108 4.65V4.32333"
              stroke="white"
              strokeMiterlimit="10"
              fill="none"
            />
          </Svg>
      },
      {
        name: 'siente',
        title: '¿Qué piensa y siente?',
        description: '¿Qué es lo que realmente le importa? principales preocupaciones, inquietudes, sueños y aspiraciones.',
        icon:
          <Svg
            width='14'
            height='13'
            viewBox="0 0 14 13"
          >
            <Path
              d="M13.3581 5.28724C13.3581 8.60605 7.29195 12.4 7.29195 12.4C7.29195 12.4 1.22583 8.60605 1.22583 5.28724C1.22583 4.97894 1.24779 4.67063 1.29905 4.37321C1.29905 4.36596 1.29905 4.36596 1.29905 4.36233C1.37227 3.90894 1.49308 3.47006 1.66148 3.05657C2.25821 1.83786 3.51389 1 4.96727 1C5.86419 1 6.69156 1.31919 7.3249 1.84874C7.95823 1.31919 8.77827 1 9.67885 1C10.9382 1 12.0438 1.62749 12.7064 2.58142C13.0689 3.28871 13.2958 4.07579 13.3471 4.91365C13.3507 5.03334 13.3581 5.16029 13.3581 5.28724Z"
              stroke="white"
              strokeMiterlimit="10"
              fill="none"
            />
          </Svg>
      },
      {
        name: 'esfuerzo',
        title: 'Esfuerzos',
        description: 'En qué se esfuerza, qué le frustra, qué obstaculos tiene.',
        icon:
          <Svg
            width='14'
            height='9'
            viewBox="0 0 14 9"
          >
            <Path
              d="M5.04112 1H0.831909V7.91H5.04112V1Z"
              stroke="white"
              strokeMiterlimit="10"
              fill="none"
            />
            <Path
              d="M12.9641 1H8.75488V7.91H12.9641V1Z"
              stroke="white"
              strokeMiterlimit="10"
              fill="none"
            />
            <Path
              d="M8.75494 3.29333H5.04114V5.62H8.75494V3.29333Z"
              stroke="white"
              strokeMiterlimit="10"
              fill="none"
            />
          </Svg>
      },
      {
        name: 'resultado',
        title: 'Resultados',
        description: '¿Cómo evade el usuario los obstaculos?, qué métodos usa para sentirse mejor.',
        icon:
          <Svg
            width='15'
            height='13'
            viewBox="0 0 15 13"
          >
            <Path
              d="M5.51745 3.93967L6.73525 1.45746C7.03057 0.852446 7.90326 0.845905 8.20854 1.44765L9.46616 3.91024C9.58893 4.14897 9.82121 4.31249 10.0867 4.34846L12.8607 4.72456C13.5343 4.81613 13.8097 5.63045 13.3253 6.10138L11.3376 8.04071C11.1452 8.22712 11.0589 8.49529 11.1087 8.76019L11.6031 11.4746C11.7226 12.1352 11.0224 12.6454 10.4185 12.338L7.92981 11.0723C7.6909 10.9513 7.40221 10.9513 7.16661 11.0789L4.70116 12.3805C4.10056 12.6977 3.39378 12.1973 3.50328 11.5367L3.95456 8.81578C3.9977 8.55415 3.90811 8.28598 3.71233 8.09957L1.69152 6.18968C1.20042 5.72529 1.46256 4.9077 2.13617 4.80632L4.90358 4.38771C5.16904 4.34519 5.40131 4.17841 5.51745 3.93967Z"
              stroke="white"
              strokeMiterlimit="10"
              fill="none"
            />
          </Svg>
      }
    ]
  }
]

const StepDescription = (props) => {
  return (
    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
      <View
        style={[
          styles.mapIcon,
          {
            opacity: 1,
            justifyContent: 'center',
            alignItems: 'center'
          
          }
        ]}
      >
        {activities[0].steps[parseInt(props.currentStepID) - 1].icon}
      </View>
      <Text
        style={[
          global.txt,
          global.title,
          global.highTxt,
          {
            textAlign: 'center',
            marginBottom: 10,
            marginTop: 10
          }
        ]}
      >
        {activities[0].steps[parseInt(props.currentStepID) - 1].title}
      </Text>
      <Text
        style={[
          global.txt,
          {
            textAlign: 'center'
          }
        ]}
      >
        {activities[0].steps[parseInt(props.currentStepID) - 1].description}
      </Text>
    </View>
  )
}

export default StepDescription
