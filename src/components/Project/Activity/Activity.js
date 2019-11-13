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
import DesignTGraph from '../../common/DesignTGraph/DesignTGraph'

/* eslint-enable */

const Activity = (props) => {
  return (
    <TouchableNativeFeedback onPress={() => props.navigation.navigate('Activity', { name: props.name })}>
      <View style= {[global.card, { elevation: 12, width: 260, height: 220, justifyContent: 'space-between' }]}>
        <View>
          <View style={{}}>
            <View style={{ transform: [{ scale: 0.3 }], position: 'absolute', top: -25, right: -90 }}>
              <DesignTGraph isLittle={ true } currentStepID={'1'} />
            </View>
            <View style={[styles.mainIcon, styles.mainIconActive]}>
              <View style={styles.mainIconContent}>
                <Image 
                  source={require('./../../../assets/icons/activity/empathy_map/empathy_map.png')}
                />  
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={[global.txt, global.highTxt, global.title, { color: 'white' }]}>
            {props.name}
          </Text>
          <View style= {{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={[global.cardIcon, global.cardTxt, { alignItems: 'center', justifyContent: 'center' }]}>
              <Image 
                    source={require('./../../../assets/icons/activity/time.png')}
                  />  
              </View>
            <Text style={[global.txt, global.cardTag, { color: 'white' }]}>
              {props.time} min / sesión
            </Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  )
}

export default Activity
