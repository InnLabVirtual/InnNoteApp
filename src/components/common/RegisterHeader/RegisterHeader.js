/* eslint-disable */
import React from 'react'

import {
  View,
  Text,
  TouchableNativeFeedback,
  Image
} from 'react-native'
import global from '../../../styles/common.style'
import theme from '../../../styles/theme.style'
import styles from './styles'

/* eslint-enable */

const RegisterHeader = (props) => {
  return (
    <View>
      <View style={[styles.headerContainer, { alignItems: 'center' }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.activityIcon]}>
              <Image
                source={require('./../../../assets/icons/activity/empathy_map/empathy_map.png')}
              />
            </View>
          </View>
          <View>
            <Text style={[global.txt, global.highTxt, global.title, { marginLeft: 0, paddingLeft: 0, fontSize: theme.FONT_SIZE_MEDIUM }]}>
              {props.name}
            </Text>
            <Text style={[global.txt, global.tagTxt, { color: theme.MEDIUMGRAY_COLOR, paddingLeft: 5 }]}>
              Registro de texto
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default RegisterHeader
