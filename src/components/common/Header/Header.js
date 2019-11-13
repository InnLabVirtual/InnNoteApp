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

const Header = (props) => {
  return (

    <View style={[styles.headerContainer, props.isBack && styles.headerContainerBack, global.rowDistributed, { alignItems: 'center' }]}>
      {
        props.isBack && (
          <TouchableNativeFeedback style={{ width: theme.GENERIC_MARGIN }}>
            <View style={[global.icon, { backgroundColor: 'blue' }]}>
            </View>
          </TouchableNativeFeedback>
        )
      }

      <View style={{ flexDirection: 'row', flex: 1 }}>
        {
          props.isActivity ? (
            <View style= {{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={[styles.activityIcon, { marginLeft: 4, marginRight: 4 }]}>
              </View>
              <View style= {{ flexDirection: 'column' }}>
                <Text style={[global.txt, global.highTxt, global.title]}>
                  {props.copy}
                </Text>
                <Text style={[global.txt, global.tagTxt, { color: theme.GRAY_COLOR }]}>
                  Registro de texto
                </Text>
              </View>

            </View>
          ) : (
            <Text style={[global.txt, global.highTxt, global.title, { marginLeft: 10 }]}>
              {props.copy}
            </Text>
          )
        }

      </View>
      <TouchableNativeFeedback>
        <View style={[global.icon, { backgroundColor: 'red' }]}>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

export default Header
