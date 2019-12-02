/* eslint-disable */
import React from 'react'

import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback
} from 'react-native'
import global from '../../../styles/common.style'
import theme from '../../../styles/theme.style'
import styles from './styles'
import Hexagon from './Hexagon/Hexagon'

/* eslint-enable */

import { connect } from 'react-redux';
import { setCurrentPhase } from '../../../redux/actions/common';

const mapStateToProps = (state) => {
  return {
    currentPhase: state.commonData.currentPhase
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentPhase: (currentPhase) => dispatch(setCurrentPhase(currentPhase))
  }
}


const DesignTGraph = (props) => {

  function handlePhaseChange(type) {
    props.setCurrentPhase(type);
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      <Hexagon type={'1'}
        onPress={(type) => { handlePhaseChange(type) }}
        color={theme.EMPATHIZE_COLOR}
        style={[styles.emphatize]}
        isActive={(props.currentStepID === '1' ? true : false)}
        isLittle={props.isLittle}
      />
      <Hexagon type={'2'}
        onPress={(type) => { handlePhaseChange(type) }}
        color={theme.DEFINE_COLOR}
        style={[styles.define]}
        isActive={(props.currentStepID === '2' ? true : false)}
        isLittle={props.isLittle}
      />
      <Hexagon type={'3'}
        onPress={(type) => { handlePhaseChange(type) }}
        color={theme.IDEATION_COLOR}
        style={[styles.ideate]}
        isActive={(props.currentStepID === '3' ? true : false)}
        isLittle={props.isLittle}
      />
      <Hexagon type={'4'}
        onPress={(type) => { handlePhaseChange(type) }}
        color={theme.PROTOTYPE_COLOR}
        style={[styles.prototyp]}
        isActive={(props.currentStepID === '4' ? true : false)}
        isLittle={props.isLittle}
      />
      <Hexagon type={'5'}
        onPress={(type) => { handlePhaseChange(type) }}
        color={theme.TEST_COLOR}
        style={[styles.test]}
        isActive={(props.currentStepID === '5' ? true : false)}
        isLittle={props.isLittle}
      />
    </View>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignTGraph)