/* eslint-disable */
import React, { useState, useEffect } from 'react'

import {
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  ScrollView
} from 'react-native'
import global from '../../../styles/common.style'
import theme from '../../../styles/theme.style'
import styles from './styles'
import Activity from '../Activity/Activity'

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

const ActivityBox = (props) => {

  return (
    
    <ScrollView
      horizontal={true}
      style={{
        paddingRight: theme.GENERIC_MARGIN,
      }}
    >
      
      {
        props.activities.map(activity => {
          if (!activity.phase) {
            return (
              <Activity
                navigation={props.navigation}
                key={activity.id}
                icon={activity.icon}
                name={activity.name}
                time={activity.time}
                phase={activity.phase}
                id={activity.id}
                description={activity.description}
                color={activity.color}
              />
            )
          } else {
            console.log(activity.phase, " ---------------------", props.currentPhase, " ---- ", (activity.phase == props.currentPhase) )
            if ((activity.phase === props.currentPhase)) {
              return (
              <Activity
                navigation={props.navigation}
                key={activity.id}
                icon={activity.icon}
                name={activity.name}
                time={activity.time}
                phase={activity.phase}
                id={activity.id}
                scheme={activity.scheme}
                description={activity.description}
                color={activity.color}
              />
              )
            }
          }
        })
      }
    </ScrollView>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityBox)