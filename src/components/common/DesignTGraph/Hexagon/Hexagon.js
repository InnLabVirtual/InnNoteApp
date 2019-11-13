/* eslint-disable */ 

import React from 'react'

import {
    View,
    StyleSheet
  } from 'react-native'
import theme from '../../../../styles/theme.style'

/* eslint-enable */

const Hexagon = (props) => {
  return (
    <View style={[styles.hexagon]}>
      <View style={[styles.hexagonInner, { backgroundColor: props.phaseColor }]} />
      <View style={[styles.hexagonBefore, { borderBottomColor: props.phaseColor }]} />
      <View style={[styles.hexagonAfter, { borderTopColor: props.phaseColor }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  hexagon: {
    width: 55,
    height: 30,
    transform: [
      { rotate: '90deg' }
    ]
  },
  hexagonInner: {
    width: 55,
    height: 30
  },
  hexagonAfter: {
    position: 'absolute',
    bottom: -18,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 28,
    borderLeftColor: 'transparent',
    borderRightWidth: 28,
    borderRightColor: 'transparent',
    borderTopWidth: 18
  },
  hexagonBefore: {
    position: 'absolute',
    top: -18,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 28,
    borderLeftColor: 'transparent',
    borderRightWidth: 28,
    borderRightColor: 'transparent',
    borderBottomWidth: 18
  }
})

export default Hexagon
