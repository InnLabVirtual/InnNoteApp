/* eslint-disable */
import React from 'react'

import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Image
} from 'react-native'
import global from '../../../styles/common.style'
import theme from '../../../styles/theme.style'
import styles from './styles'
import DesignTGraph from '../../common/DesignTGraph/DesignTGraph'


import { connect } from 'react-redux';



/* eslint-enable */


const mapStateToProps = (state) => {
  return {
    currentPhase: state.commonData.currentPhase
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


const Activity = (props) => {
  //     <TouchableWithoutFeedback onPress={() => }>

  function handleActivityChange () {

    props.navigation.navigate('Activity', 
    { 
      name: props.name,
      time: props.time,
      phase: props.phase,
      id: props.id,
      scheme: props.scheme,
      color: props.color,
      description: props.description
    })
  }

  return (
    <TouchableWithoutFeedback
    onPress={() => {handleActivityChange()}}
    
    >
      <View style={[{paddingTop: 10}, props.phase && !(props.phase == props.currentPhase) && {opacity: .2}]}>
        <View style={[styles.mainIcon]}>
          <View style={styles.mainIconContent}>
            <Image
              source={require('./../../../assets/icons/activity/empathy_map/empathy_map.png')}
              style={styles.iconSvg}
            />
          </View>
        </View>
        <View style={[
          global.card,
          {
            margin: 20,
            elevation: 12,
            width: 260,
            height: 220,
            justifyContent: 'flex-end',
            marginTop: -50,
            backgroundColor: props.color
          }
        ]}>

          <View>
            <Text style={[global.txt, global.highTxt, global.title, { color: 'white' }]}>
              {props.name}
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={[global.cardIcon, global.cardTxt, { alignItems: 'center', justifyContent: 'center' }]}>
                <Image
                  source={require('./../../../assets/icons/activity/time.png')}
                />
              </View>
              <Text style={[global.txt, global.cardTag, { color: 'white' }]}>
                {props.time}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>

  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Activity)