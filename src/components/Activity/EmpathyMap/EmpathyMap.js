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
import EMap from './Map/EMap'
import StepDescription from './StepDescription/StepDescription'

/* eslint-enable */

const EmpathyMap = (props) => {
  return (
    <View style= {[global.card, { backgroundColor: 'white' }]}>
      <View style={global.rowDistributed}>
        <TouchableNativeFeedback>
          <View style={[styles.mapIcon, styles.mapIconActive]}>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View style={[styles.mapIcon]}>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View style={[styles.mapIcon]}>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View style={[styles.mapIcon]}>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View style={[styles.mapIcon]}>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
          <View style={[styles.mapIcon]}>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={{ alignItems: 'center', marginTop: theme.GENERIC_MARGIN }}>
        <EMap currentStepID={props.currentStepID} />
      </View>
      <StepDescription currentStepID={props.currentStepID} />
    </View>
  )
}

export default EmpathyMap
