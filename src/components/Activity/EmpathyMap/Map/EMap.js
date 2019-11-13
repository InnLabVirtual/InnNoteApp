/* eslint-disable */ 

import React from 'react'

import {
    View,
    StyleSheet
  } from 'react-native'
import theme from '../../../../styles/theme.style'
import constants from './constants'

/* eslint-enable */

// eslint-disable-next-line no-unused-vars
const EMap = (props) => {
  return (
    <View style={styles.mapContainer}>
      <View style={[styles.map]}>
        <View style={[styles.mapTop, styles.part, props.currentStepID === '1' && styles.partActive]} />
        <View style={[styles.mapBottom, styles.part, props.currentStepID === '3' && styles.partActive]} />
        <View style={[styles.mapRight, styles.part, props.currentStepID === '4' && styles.partActive]} />
        <View style={[styles.mapLeft, styles.part, props.currentStepID === '2' && styles.partActive]} />
        <View style={[styles.mapBoxTop, styles.part, props.currentStepID === '6' && styles.partActive]} />
        <View style={[styles.mapBoxBot, styles.part, props.currentStepID === '5' && styles.partActive]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mapContainer: {
    width: (constants.SIZE * 2) + (constants.SPACE * 4) + (constants.SIZE / 2),
    height: (constants.SIZE * 2 + constants.SPACE),
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    width: constants.SPACE,
    height: constants.SPACE,
    marginLeft: -(constants.SPACE + constants.SIZE)
  },
  part: {
    opacity: theme.LOW_OPACITY
  },
  partActive: {
    opacity: 1
  },
  mapTop: {
    position: 'absolute',
    bottom: constants.SPACE,
    left: -constants.SIZE + (constants.SPACE / 2),
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: constants.SIZE,
    borderLeftColor: 'transparent',
    borderRightWidth: constants.SIZE,
    borderRightColor: 'transparent',
    borderTopWidth: constants.SIZE,
    borderTopColor: theme.PRIMARY_COLOR

  },
  mapBottom: {
    position: 'absolute',
    top: constants.SPACE,
    left: -constants.SIZE + (constants.SPACE / 2),
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: constants.SIZE,
    borderLeftColor: 'transparent',
    borderRightWidth: constants.SIZE,
    borderRightColor: 'transparent',
    borderBottomWidth: constants.SIZE,
    borderBottomColor: theme.PRIMARY_COLOR

  },
  mapLeft: {
    position: 'absolute',
    top: -constants.SIZE + (constants.SPACE / 2),
    left: -constants.SIZE,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderBottomWidth: constants.SIZE,
    borderBottomColor: 'transparent',
    borderTopWidth: constants.SIZE,
    borderTopColor: 'transparent',
    borderLeftWidth: constants.SIZE,
    borderLeftColor: theme.PRIMARY_COLOR
  },
  mapRight: {
    position: 'absolute',
    top: -constants.SIZE + (constants.SPACE / 2),
    left: constants.SPACE,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderBottomWidth: constants.SIZE,
    borderBottomColor: 'transparent',
    borderTopWidth: constants.SIZE,
    borderTopColor: 'transparent',
    borderRightWidth: constants.SIZE,
    borderRightColor: theme.PRIMARY_COLOR
  },
  mapBoxBot: {
    position: 'absolute',
    width: 0,
    height: 0,
    top: -constants.SIZE,
    left: constants.SIZE + (constants.SPACE * 2),
    borderBottomWidth: constants.SIZE / 2,
    borderBottomColor: theme.PRIMARY_COLOR,
    borderTopWidth: constants.SIZE / 2,
    borderTopColor: theme.PRIMARY_COLOR,
    borderRightWidth: constants.SIZE / 2,
    borderRightColor: theme.PRIMARY_COLOR,
    borderLeftWidth: constants.SIZE / 2,
    borderLeftColor: theme.PRIMARY_COLOR

  },
  mapBoxTop: {
    position: 'absolute',
    width: 0,
    height: 0,
    top: constants.SPACE,
    left: constants.SIZE + (constants.SPACE * 2),
    borderBottomWidth: constants.SIZE / 2,
    borderBottomColor: theme.PRIMARY_COLOR,
    borderTopWidth: constants.SIZE / 2,
    borderTopColor: theme.PRIMARY_COLOR,
    borderRightWidth: constants.SIZE / 2,
    borderRightColor: theme.PRIMARY_COLOR,
    borderLeftWidth: constants.SIZE / 2,
    borderLeftColor: theme.PRIMARY_COLOR

  }
})

export default EMap
