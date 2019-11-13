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
import DesignTGraph from '../../common/DesignTGraph/DesignTGraph'

/* eslint-enable */

const Activity = (props) => {
  return (
    <View style= {[global.card, { elevation: 12, width: 260, height: 220, justifyContent: 'space-between' }]}>
      <View>
        <View style={{}}>
          <View style={{ transform: [{ scale: 0.3 }], position: 'absolute', top: -25, right: -90 }}>
            <DesignTGraph isLittle={ true } currentStepID={'1'} />
          </View>
          <View style={[styles.mainIcon, styles.mainIconActive]}>
            <View style={styles.mainIconContent}>
            </View>
          </View>
        </View>
      </View>
      <View>
        <Text style={[global.txt, global.highTxt, global.title, { color: 'white' }]}>
          {props.name}
        </Text>
        <View style= {{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={[global.cardIcon, global.cardTxt, { backgroundColor: 'white' }]}></View>
          <Text style={[global.txt, global.cardTag, { color: 'white' }]}>
            {props.time} min / sesión
          </Text>
        </View>
      </View>
    </View>
  )
}

export default Activity
