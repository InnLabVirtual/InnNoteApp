/* eslint-disable */ 
import React, {useState} from 'react'

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
  
  const [currentStep, setCurrentStep] = useState('1');


  return (
    <View style= {[global.card, { backgroundColor: 'white' }]}>
      <View style={global.rowDistributed}>
        <TouchableNativeFeedback
          onPress={() => {setCurrentStep('1')}}
        >
          <View style={[styles.mapIcon, currentStep =='1' && styles.mapIconActive]}>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
        onPress={() => {setCurrentStep('2')}}
        >
          <View style={[styles.mapIcon, currentStep =='2' && styles.mapIconActive]}>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
        onPress={() => {setCurrentStep('3')}}
        >
          <View style={[styles.mapIcon, currentStep =='3' && styles.mapIconActive]}>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
        onPress={() => {setCurrentStep('4')}}
        >
          <View style={[styles.mapIcon, currentStep =='4' && styles.mapIconActive]}>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
        onPress={() => {setCurrentStep('5')}}
        >
          <View style={[styles.mapIcon, currentStep =='5' && styles.mapIconActive]}>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
        onPress={() => {setCurrentStep('6')}}
        >
          <View style={[styles.mapIcon, currentStep =='6' && styles.mapIconActive]}>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={{ alignItems: 'center', marginTop: theme.GENERIC_MARGIN }}>
        <EMap currentStepID={currentStep} />
      </View>
      <StepDescription currentStepID={currentStep} />
    </View>
  )
}

export default EmpathyMap
