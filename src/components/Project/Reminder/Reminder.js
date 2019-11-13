/* eslint-disable */ 
import React from 'react'

import {
  View,
  Text,
  TouchableNativeFeedback
} from 'react-native'
import global from '../../../styles/common.style'
import theme from '../../../styles/theme.style'
import styles from './styles'

/* eslint-enable */

const Reminder = () => {
  return (
    <View style= {[global.card, { backgroundColor: 'white' }]}>
      <View style={{ flexDirection: 'row' }}>
        <View style= {{
          flexDirection: 'column',
          alignItems: 'center',
          paddingLeft: 20,
          paddingRight: 20
        }}>
          <Text style={[global.txt, { color: theme.PRIMARY_COLOR }]}>
            vie.
          </Text>
          <Text style= {[
            global.txt,
            global.highTxt,
            {
              fontSize: theme.FONT_SIZE_EXTRALARGE,
              lineHeight: theme.LINE_SIZE_EXTRALARGE,
              color: theme.PRIMARY_COLOR
            }]}>
            30
          </Text>
          <Text style={[global.txt, global.highTxt, {
            textTransform: 'uppercase',
            lineHeight: theme.LINE_SIZE_REGULAR,
            color: theme.PRIMARY_COLOR
          }]}>
            oct
          </Text>
        </View>
        <View style= {{ width: 0, flexGrow: 1, flex: 1 }}>
          <Text style={[global.txt, global.highTxt]}>
            Tu siguiente reunión
          </Text>
          <Text style= {[global.txt]}>
            ¿Deseas programar otra reunión?
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <TouchableNativeFeedback>
          <View style={[global.cardButton, { backgroundColor: theme.PRIMARY_COLOR }]}>
            <Text style= {[global.txt, global.highTxt, { color: 'white' }]}>
              Ir al calendario
            </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}

export default Reminder
