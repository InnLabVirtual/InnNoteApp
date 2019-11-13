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

const RegisterHeader = (props) => {
  return (

    <View style={[styles.headerContainer, props.isBack && styles.headerContainerBack, global.rowDistributed, { alignItems: 'center' }]}>
      <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style= {{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={[styles.activityIcon, { marginLeft: 4, marginRight: 4 }]}>
              </View>
              <View style= {{ flexDirection: 'column' }}>
                <Text style={[global.txt, global.highTxt, global.title]}>
                  {props.name}
                </Text>
                <Text style={[global.txt, global.tagTxt, { color: theme.GRAY_COLOR }]}>
                  Registro de texto
                </Text>
              </View>
            </View>
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

export default RegisterHeader
